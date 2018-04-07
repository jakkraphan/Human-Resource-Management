<?php
use HRM\Core\Common\Traits\Transformer_Manager;
use League\Fractal;
use League\Fractal\Resource\Item as Item;
use League\Fractal\Resource\Collection as Collection;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use HRM\Models\Formula;
use HRM\Transformers\Formula_Transformer;
use HRM\Models\Salary_Group;
use HRM\Transformers\Salary_Group_Transformer;

class Hrm_Payroll {
    use Transformer_Manager;

    private static $_instance;

    public static function getInstance() {
        if ( !self::$_instance ) {
            self::$_instance = new self();
        }

        return self::$_instance;
    }

    function __construct() {
        add_action( 'wp_ajax_hrm_get_formula', array( $this, 'ajax_get_formula' ) );
        add_action( 'wp_ajax_hrm_group_filter', array( $this, 'ajax_group_filter' ) );
        add_action( 'wp_ajax_hrm_update_formula', array( $this, 'ajax_update_formula' ) );
        add_action( 'wp_ajax_hrm_delete_formula', array( $this, 'ajax_delete_formula' ) );
        add_action( 'wp_ajax_hrm_generate_salary_statement', array( $this, 'ajax_generate_salary_statement' ) );
    }

    function ajax_group_filter() {
        check_ajax_referer('hrm_nonce');
        $salary = self::getInstance()->group_filter( $_POST );

        wp_send_json_success( $salary );
    }

    function group_filter( $postData ) {
        $name = empty( $postData['name'] ) ? false : $postData['name'];
        $id   = empty( $postData['id'] ) ? false : intval( $postData['id'] );
        $per_page = hrm_per_page();
        $page   = empty(  $postData['page'] ) ? 1 : intval( $postData['page'] );
      

        if ( $id !== false  ) {

            $formual = Salary_Group::find( $id );
            
            if ( $formual ) {
                $resource = new Item( $formual, new Salary_Group_Transformer );
                return $this->get_response( $resource );
            }
            
            return $this->get_response( null );
        }

        $formual = Salary_Group::where( function($q) use( $name ) {
            if ( ! empty(  $name ) ) {
                $q->where( 'name', 'LIKE', '%' . $name . '%' );
            }
        })
        ->orderBy( 'id', 'DESC' )
        ->paginate( $per_page, ['*'], 'page', $page );
    
        $collection = $formual->getCollection();

        $resource = new Collection( $collection, new Salary_Group_Transformer );
        $resource->setPaginator( new IlluminatePaginatorAdapter( $formual ) );

        return $this->get_response( $resource );
    }

    function ajax_generate_salary_statement() {
        check_ajax_referer('hrm_nonce');
        $salary = self::getInstance()->generate_salary_statement( $_POST['salary'] );

        wp_send_json_success( $salary );
    }

    function generate_salary_statement( $salary ) {
        $formulas = $this->get_formula();
        $formulas_name = array();
        $generate_gross = 0;
        $deduction = 0;

        foreach ( $formulas['data'] as $key => $formula ) {
            $formulas_name[$formula['name']] = $formula['formula'];
        }

        foreach ( $formulas['data'] as $key => $formula ) {
            $formulas['data'][$key]['amount'] = hrm_formula_replace( $salary, $formula['formula'], $formulas_name );
            
            if ( $formula['type'] == 'income' ) {
               $generate_gross = $generate_gross + $formulas['data'][$key]['amount']; 
            }

            if ( $formula['type'] == 'deduction' ) {
               $deduction = $deduction + $formulas['data'][$key]['amount']; 
            }
        }

        if ( $generate_gross <  $salary ) {
            $formulas['meta']['salaryMeta']['others'] = $salary - $generate_gross;
            $formulas['meta']['salaryMeta']['incomeTotal'] = $salary;
            $formulas['meta']['salaryMeta']['deductionTotal'] = $deduction;
            $formulas['meta']['salaryMeta']['employeeGet'] = $salary - $deduction;
        }

        wp_send_json_success($formulas);
    }

    function ajax_update_formula() {
        check_ajax_referer('hrm_nonce');
        $formula = self::getInstance()->update_formula( $_POST );

        wp_send_json_success( $formula );
    }

    function ajax_delete_formula() {
        check_ajax_referer('hrm_nonce');
        
        self::getInstance()->delete_formula( $_POST['delete'] );
        wp_send_json_success();
    }

    function delete_formula( $formula_ids ) {
        foreach ( $formula_ids as $key => $formula_id ) {
             $update = array(
                'class'        => 'Formula',
                'method'       => 'update',
                'transformers' => 'Formula_Transformer',
                'status'       => 'disable',
                'id'           => $formula_id
            );

            hrm_update_records( $update );
        }
    }

    function update_formula( $postdata ) {
        
        $update = array(
            'class'        => 'Formula',
            'method'       => 'update',
            'transformers' => 'Formula_Transformer',
            'status'       => 'disable',
            'id'           => empty( intval( $postdata[id] ) ) ? false : intval( $postdata[id] )
        );

        hrm_update_records( $update );

        $postdata['method'] =  'create';
        unset( $postdata['id'] );

        return hrm_insert_records( $postdata );
    }

    function ajax_get_formula() {
    	check_ajax_referer('hrm_nonce');

    	$formula = self::getInstance()->get_formula( $_POST );

    	wp_send_json_success( $formula );
    }

    function get_formula( $postData = array() ) {
		$name = empty( $postData['name'] ) ? false : $postData['name'];
		$id   = empty( $postData['id'] ) ? false : intval( $postData['id'] );
        $status = 'enable';
        $page = 1;
        $per_page = 100000;
      

       if ( $id !== false  ) {

            $formual = Formula::find( $id );
            
            if ( $formual ) {
                $resource = new Item( $formual, new Formula_Transformer );
                return $this->get_response( $resource );
            }
            
            return $this->get_response( null );
        }

        $formual = Formula::where( function($q) use( $name, $status ) {
            if ( ! empty(  $name ) ) {
                $q->where( 'name', 'LIKE', '%' . $name . '%' );
            }
            if ( ! empty(  $status ) ) {
                $q->where( 'status', $status );
            }
        })
        ->orderBy( 'id', 'DESC' )
        ->paginate( $per_page, ['*'], 'page', $page );
    
        $collection = $formual->getCollection();

        $resource = new Collection( $collection, new Formula_Transformer );
        $resource->setPaginator( new IlluminatePaginatorAdapter( $formual ) );

        return $this->get_response( $resource );
    }	
}