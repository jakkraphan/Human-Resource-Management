wpSpearHrm([10],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [HRMMixin.skill],
	props: {
		fields: {
			type: [Array]
		}
	},

	data() {
		return {
			loading: false,
			canSubmit: true
		};
	},

	computed: {},

	methods: {
		selfNewRecord() {
			var self = this;

			var postData = this.generateFieldData(this.fields);
			postData['employee_id'] = this.$route.params.employeeId;
			postData['class'] = self.modelName;
			postData['method'] = 'create';
			postData['transformers'] = self.modelTransformer;

			if (!this.formValidation(this.fields, postData)) {
				return false;
			}

			var args = {
				data: postData,

				callback(success, res) {
					self.loading = false;
					self.canSubmit = true;
					self.showHideNewRecordForm(false);
					self.makeEmptyField(self.fields);
				}
			};

			self.loading = true;
			self.canSubmit = false;

			this.addNewRecord(args);
		},

		generateFieldData(data) {
			var formated = {};

			data.forEach(function (val) {
				if (typeof val.filterSubmited !== 'undefined') {
					formated[val.name] = val.filterSubmited(val.model);
				} else {
					formated[val.name] = val.model;
				}
			});
			formated['emp_id'] = HRM_Vars.current_user.ID;
			return formated;
		},
		makeEmptyField(data) {
			data.forEach(function (val) {
				val.model = '';
			});
		}
	}
});

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [HRMMixin.skill],
	props: {
		deleteCheckbox: {
			type: [Boolean],
			default() {
				return true;
			}
		},
		fields: {
			type: [Array],
			default() {
				return [];
			}
		}
	},

	data() {
		return {
			canSubmit: true,
			loading: false,
			deleteAllStatus: false,
			deletedId: [],
			isFetchRecord: false
		};
	},

	created() {
		this.getRecords();
	},

	computed: {
		records() {
			return this.$store.state[this.nameSpace].records;
		}
	},

	watch: {
		deletedId() {
			this.$store.commit(this.nameSpace + '/setDeletedId', this.deletedId);
		},
		'$route'(to, from) {
			this.getRecords();
		}
	},
	methods: {
		filterEditField(fields) {
			return fields.filter(function (field) {
				return field.editable ? true : false;
			});
		},
		filterHeader(fields) {
			return fields.filter(function (field) {
				return typeof field.tableHead === 'undefined' ? false : true;
			});
		},
		printCellData(record, field) {
			if (typeof field.filterPrintData == 'undefined') {
				return record[field.name];
			}

			return field.filterPrintData(record[field.name]);
		},

		recordEditForm(record, status) {
			status = status || 'toggle';
			this.$store.commit(this.nameSpace + '/showHideEditForm', {
				id: record.id,
				status: status
			});
		},

		selfUpdate(record) {

			var self = this,
			    data = {};

			data['class'] = self.modelName;
			data['method'] = 'update';
			data['transformers'] = self.modelTransformer;
			data['id'] = record.id;

			self.fields.forEach(function (field) {
				if (!field.editable) {
					return;
				}

				if (typeof field.filterEditingData != 'undefined') {
					data[field.name] = field.filterEditingData(record[field.name]);
				} else {
					data[field.name] = record[field.name];
				}
			});

			var args = {
				data: data,
				callback() {
					self.canSubmit = true;
					self.loading = false;
				}
			};

			if (!this.editFormValidation(self.fields, args.data)) {
				return false;
			}

			self.canSubmit = false;
			self.loading = true;
			this.updateRecord(args);
		},
		selfDelete(record) {
			var self = this;
			this.recordDelete([record.id], function () {
				var hasRecords = self.$store.state[self.nameSpace].records.length;
				var page = self.$route.params.current_page_number;
				if (!hasRecords && page > 1) {
					self.$router.push({
						params: {
							current_page_number: page - 1
						},
						query: self.$route.query
					});
				}

				if (!hasRecords && typeof self.pagination != 'undefined' && self.pagination.total_pages > 1) {
					self.getRecords();
				}
			});
		},
		deleteAll() {
			if (this.deleteAllStatus) {
				var deleted_id = [];

				this.$store.state[this.nameSpace].records.map(function (record) {
					deleted_id.push(record.id);
				});

				this.deletedId = deleted_id;
			} else {
				this.deletedId = [];
			}
		},

		actionCheckbox() {
			let records = this.$store.state[this.nameSpace].records;

			if (records.length == this.deletedId.length) {
				this.deleteAllStatus = true;
			} else {
				this.deleteAllStatus = false;
			}
		}
	}

});

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skill_table_vue__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_skill_form_vue__ = __webpack_require__(409);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [HRMMixin.skill],

	data() {
		return {
			search: {
				filter: 'active',
				title: this.$route.query.title,
				from: this.$route.query.from,
				to: this.$route.query.to
			},
			bulkAction: -1,

			fields: [{
				type: 'text',
				model: '',
				label: 'Title',
				name: 'skill',
				tableHead: 'Skill',
				tbRowAction: true,
				editable: true,
				required: true
			}, {
				type: 'text',
				model: '',
				label: 'Years of experiance',
				name: 'years_of_exp',
				tableHead: 'Years of experiance',
				tbRowAction: false,
				editable: true
			}, {
				type: 'textarea',
				model: '',
				label: 'Comments',
				name: 'comments',
				tableHead: 'Comments',
				tbRowAction: false,
				editable: true
			}]
		};
	},

	created() {
		var self = this;
	},

	computed: {
		isNewRecordFormActive() {
			return this.$store.state[this.nameSpace].isNewRecordFormActive;
		},

		total_experiance_page() {
			return 10;
		},

		pagination() {
			return this.$store.state[this.nameSpace].pagination;
		}
	},
	components: {
		'hrm-table': __WEBPACK_IMPORTED_MODULE_0__skill_table_vue__["a" /* default */],
		'add-new-record-form': __WEBPACK_IMPORTED_MODULE_1__new_skill_form_vue__["a" /* default */]
	},

	methods: {

		selfBulkAction() {
			var self = this;
			switch (this.bulkAction) {
				case 'delete':
					this.recordDelete(self.$store.state[self.nameSpace].deletedId, function () {
						var hasRecords = self.$store.state[self.nameSpace].records.length;
						var page = self.$route.params.current_page_number;

						if (!hasRecords && page > 1) {
							self.$router.push({
								params: {
									current_page_number: page - 1
								},
								query: self.$route.query
							});
						}
						if (!hasRecords && self.pagination.total_pages > 1) {
							self.getRecords();
						}
					});
					break;

				default:

					break;
			}
		},

		recordSearch() {
			this.$router.push({ query: this.search });
			this.getRecords();
		}
	}
});

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.hrm-bulk-wrap, .hrm-filter-wrap {\n\tfloat: left;\n}\n.hrm-tbl-action-wrap {\n\tmargin-top: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.alignright {\n\tfloat: right;\n}\n.hrm-spinner {\n\tmargin-right: 10px;\n\tmargin-top: 6px;\n}\n", ""]);

// exports


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_skill_form_vue__ = __webpack_require__(337);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7843a461_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_new_skill_form_vue__ = __webpack_require__(456);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_skill_form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7843a461_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_new_skill_form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/profile/skill/new-skill-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7843a461", Component.options)
  } else {
    hotAPI.reload("data-v-7843a461", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_skill_table_vue__ = __webpack_require__(338);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64eaada4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_skill_table_vue__ = __webpack_require__(446);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(496)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_skill_table_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64eaada4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_skill_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/profile/skill/skill-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64eaada4", Component.options)
  } else {
    hotAPI.reload("data-v-64eaada4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", { staticClass: "wp-heading-inline" }, [_vm._v("Skill")]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "page-title-action",
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.showHideNewRecordForm("toggle")
            }
          }
        },
        [_vm._v("Add New")]
      ),
      _vm._v(" "),
      _c("profile-menu"),
      _vm._v(" "),
      _vm.isNewRecordFormActive
        ? _c("add-new-record-form", {
            staticClass: "hrm-toggle",
            attrs: { fields: _vm.fields }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "hrm-tbl-action-wrap" }, [
        _c("div", { staticClass: "hrm-table-action hrm-bulk-wrap" }, [
          _c(
            "label",
            {
              staticClass: "screen-reader-text",
              attrs: { for: "bulk-action-selector-top" }
            },
            [_vm._v("\n\t\t\t\t\tSelect bulk action\n\t\t\t\t")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bulkAction,
                  expression: "bulkAction"
                }
              ],
              attrs: { name: "action", id: "bulk-action-selector-top" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.bulkAction = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "-1" } }, [
                _vm._v("Bulk Actions")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "delete" } }, [_vm._v("Delete")])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "button hrm-button-secondary button-secondary",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.selfBulkAction()
                }
              }
            },
            [_vm._v("Apply")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-table-action hrm-filter-wrap" }, [
          _c("div", { staticClass: "alignleft actions" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    _vm.recordSearch()
                  }
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search.title,
                      expression: "search.title"
                    }
                  ],
                  attrs: { placeholder: "Title", type: "text" },
                  domProps: { value: _vm.search.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.search, "title", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("hrm-date-picker", {
                  staticClass: "pm-datepickter-to",
                  attrs: {
                    placeholder: "From",
                    dependency: "pm-datepickter-from"
                  },
                  model: {
                    value: _vm.search.from,
                    callback: function($$v) {
                      _vm.$set(_vm.search, "from", $$v)
                    },
                    expression: "search.from"
                  }
                }),
                _vm._v(" "),
                _c("hrm-date-picker", {
                  staticClass: "pm-datepickter-from",
                  attrs: { placeholder: "To", dependency: "pm-datepickter-to" },
                  model: {
                    value: _vm.search.to,
                    callback: function($$v) {
                      _vm.$set(_vm.search, "to", $$v)
                    },
                    expression: "search.to"
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  staticClass: "button hrm-button-secondary button-secondary",
                  attrs: { type: "submit", value: "Filter" }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-clear" })
      ]),
      _vm._v(" "),
      _c("hrm-table", { attrs: { fields: _vm.fields } }),
      _vm._v(" "),
      _c("hrm-pagination", {
        attrs: {
          total_pages: _vm.pagination.total_pages,
          component_name: "skill_pagination"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-599785ad", esExports)
  }
}

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "hrm-list-table" } }, [
    _vm.isFetchRecord
      ? _c(
          "table",
          { staticClass: "wp-list-table widefat fixed striped pages" },
          [
            _c("thead", [
              _c(
                "tr",
                [
                  _vm.deleteCheckbox
                    ? _c(
                        "td",
                        {
                          staticClass: "manage-column column-cb check-column",
                          attrs: { id: "cb" }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.deleteAllStatus,
                                expression: "deleteAllStatus"
                              }
                            ],
                            attrs: { id: "cb-select-all-1", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.deleteAllStatus)
                                ? _vm._i(_vm.deleteAllStatus, null) > -1
                                : _vm.deleteAllStatus
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$a = _vm.deleteAllStatus,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.deleteAllStatus = $$a.concat([
                                          $$v
                                        ]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.deleteAllStatus = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.deleteAllStatus = $$c
                                  }
                                },
                                function($event) {
                                  $event.preventDefault()
                                  _vm.deleteAll()
                                }
                              ]
                            }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.filterHeader(_vm.fields), function(
                    header,
                    header_index
                  ) {
                    return _c("th", { key: header_index }, [
                      _vm._v(
                        "\n                    \t" +
                          _vm._s(header.tableHead) +
                          "\n                    "
                      )
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.records, function(record, record_index) {
                  return !record.editMode
                    ? _c(
                        "tr",
                        { key: record_index },
                        [
                          _vm.deleteCheckbox
                            ? _c(
                                "th",
                                {
                                  staticClass: "check-column",
                                  attrs: { scope: "row" }
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.deletedId,
                                        expression: "deletedId"
                                      }
                                    ],
                                    attrs: {
                                      id: "cb-select-7",
                                      type: "checkbox"
                                    },
                                    domProps: {
                                      value: record.id,
                                      checked: Array.isArray(_vm.deletedId)
                                        ? _vm._i(_vm.deletedId, record.id) > -1
                                        : _vm.deletedId
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$a = _vm.deletedId,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = record.id,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.deletedId = $$a.concat([
                                                  $$v
                                                ]))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.deletedId = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.deletedId = $$c
                                          }
                                        },
                                        function($event) {
                                          _vm.actionCheckbox()
                                        }
                                      ]
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.filterHeader(_vm.fields), function(
                            field,
                            field_index
                          ) {
                            return _c("td", [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.printCellData(record, field)
                                  )
                                }
                              }),
                              _vm._v(" "),
                              field.tbRowAction
                                ? _c("div", { staticClass: "row-actions" }, [
                                    _c("span", { staticClass: "edit" }, [
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              _vm.recordEditForm(record)
                                            }
                                          }
                                        },
                                        [_vm._v("Edit")]
                                      ),
                                      _vm._v(" | ")
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "trash" }, [
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              _vm.selfDelete(record)
                                            }
                                          }
                                        },
                                        [_vm._v("Delete")]
                                      )
                                    ])
                                  ])
                                : _vm._e()
                            ])
                          })
                        ],
                        2
                      )
                    : _c(
                        "tr",
                        {
                          staticClass: "inline-edit-row hrm-edit-toggle",
                          attrs: {
                            id: "hrm-edit-" + record.id,
                            "data-recordId": record.id
                          }
                        },
                        [
                          _c(
                            "td",
                            {
                              staticClass: "colspanchange",
                              attrs: { colspan: _vm.fields.length + 1 }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "hrm-edit-form",
                                  attrs: {
                                    id: "hrm-edit-form-" + record.id,
                                    action: ""
                                  },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      _vm.selfUpdate(record)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "fieldset",
                                    { staticClass: "inline-edit-col-left" },
                                    [
                                      _c(
                                        "legend",
                                        { staticClass: "inline-edit-legend" },
                                        [_vm._v("Quick Edit")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "inline-edit-col" },
                                        _vm._l(
                                          _vm.filterEditField(_vm.fields),
                                          function(field, field_index) {
                                            return _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "hrm-edit-field-wrap"
                                              },
                                              [
                                                _c("label", [
                                                  _c(
                                                    "span",
                                                    { staticClass: "title" },
                                                    [
                                                      _vm._v(
                                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                          _vm._s(field.label)
                                                      ),
                                                      field.required
                                                        ? _c("em", [
                                                            _vm._v("*")
                                                          ])
                                                        : _vm._e()
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-text-wrap"
                                                  },
                                                  [
                                                    _c("hrm-edit-field", {
                                                      attrs: {
                                                        record: record,
                                                        field: field
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("div", {
                                                  staticClass: "hrm-clear"
                                                })
                                              ]
                                            )
                                          }
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(0),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "submit inline-edit-save" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "button cancel hrm-button-secondary alignleft",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              _vm.recordEditForm(record, false)
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass:
                                          "button button-primary hrm-button-primary save alignright",
                                        attrs: {
                                          disabled: !_vm.canSubmit,
                                          type: "submit",
                                          value: "Update"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.loading
                                        ? _c("div", {
                                            staticClass:
                                              "hrm-spinner alignright"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("br", { staticClass: "clear" })
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                }),
                _vm._v(" "),
                !_vm.records.length
                  ? _c("tr", [
                      _c("td", { attrs: { colspan: _vm.fields.length + 1 } }, [
                        _vm._v("\n\t\t\t\t\t\tNo result found!\n\t\t\t\t\t")
                      ])
                    ])
                  : _vm._e()
              ],
              2
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("fieldset", { staticClass: "inline-edit-col-right" }, [
      _c("div", { staticClass: "inline-edit-col" })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64eaada4", esExports)
  }
}

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "metabox-holder" }, [
    _c(
      "div",
      { staticClass: "postbox", attrs: { id: "hrm-hidden-form-warp" } },
      [
        _c("h2", { staticClass: "hndle" }, [_vm._v("Skill")]),
        _vm._v(" "),
        _c("div", { staticClass: "inside" }, [
          _c(
            "form",
            {
              attrs: { id: "hrm-hidden-form", action: "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.selfNewRecord()
                }
              }
            },
            [
              _c(
                "div",
                { attrs: { id: "hrm-form-field" } },
                [_c("hrm-form-fields", { attrs: { fields: _vm.fields } })],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "hrm-action-wrap" }, [
                _c("input", {
                  staticClass: "button hrm-button-primary button-primary",
                  attrs: {
                    disabled: !_vm.canSubmit,
                    type: "submit",
                    name: "requst",
                    value: "Submit"
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "button hrm-button-secondary",
                    attrs: { target: "_blank", href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.showHideNewRecordForm(false)
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _vm.loading
                  ? _c("div", { staticClass: "hrm-spinner" }, [
                      _vm._v("Saving....")
                    ])
                  : _vm._e()
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7843a461", esExports)
  }
}

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("768ccf48", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-599785ad\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./skill.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-599785ad\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./skill.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(369);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("44288d08", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64eaada4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./skill-table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64eaada4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./skill-table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_skill_vue__ = __webpack_require__(339);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_599785ad_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_skill_vue__ = __webpack_require__(440);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(493)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_skill_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_599785ad_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_skill_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/profile/skill/skill.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-599785ad", Component.options)
  } else {
    hotAPI.reload("data-v-599785ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});