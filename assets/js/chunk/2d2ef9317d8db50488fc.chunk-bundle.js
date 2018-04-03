wpSpearHrm([22],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__directive__);
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
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [HRMMixin.dashboard],

	data() {
		return {
			administrators: [],
			managers: [],
			employees: 0,
			males: 0,
			females: 0,
			present: [],
			absent: [],
			earlyEnter: [],
			earlyLeave: [],
			lateLeave: [],
			attendanceLabel: 'Present',
			attendance: {
				present: true,
				absent: false,
				earlyEnter: false,
				earlyLeave: false,
				lateLeave: false
			},
			leaves: [],
			birthday: [],
			notices: []
		};
	},

	created() {
		var self = this;

		this.getHeaderBlock({
			callback(args) {
				self.administrators = args.administrators;
				self.managers = args.managers;
				self.employees = args.employees;
				self.males = args.males;
				self.females = args.females;
			}
		});

		this.getDashboardAttendance({
			callback(res) {
				self.present = res.present;
				self.absent = res.absent;
				self.earlyEnter = res.early_enter;
				self.earlyLeave = res.early_leave;
				self.lateLeave = res.late_leave;
			}
		});
		this.getDashboardLeaves({
			callback(res) {
				self.leaves = res;
			}
		});
		this.getDashboardNotices({
			callback(res) {
				res.data.forEach(function (notice) {
					notice.popup = false;
				});
				self.notices = res.data;
			}
		});
		this.getDashboardBirthdays({
			callback(res) {
				self.birthday = res;
			}
		});
	},

	computed: {},
	components: {},

	methods: {
		attendanceTab(section) {
			var self = this;

			jQuery.each(this.attendance, function (key, val) {
				self.attendance[key] = false;
			});

			this.attendance[section] = true;

			switch (section) {
				case 'present':
					self.attendanceLabel = 'Present';
					break;
				case 'absent':
					self.attendanceLabel = 'Absent';
					break;
				case 'earlyEnter':
					self.attendanceLabel = 'Early Enter';
					break;
				case 'earlyLeave':
					self.attendanceLabel = 'Early Leave';
					break;
				case 'lateLeave':
					self.attendanceLabel = 'Late Leave';
					break;
			}
		},

		popUpNotice(notice) {
			notice.popup = true;
		}
	}
});

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

var HRM_Dashboard = {
	dialog(el, binding, vnode) {
		jQuery(el).dialog({
			close() {
				vnode.context.notices.forEach(function (notice) {
					notice.popup = false;
				});
			}
		});
	}
};

// Register a global custom directive called v-cpm-datepicker
hrm.Vue.directive('hrm-dialog', {
	inserted: function (el, binding, vnode) {

		HRM_Dashboard.dialog(el, binding, vnode);
	}
});

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.fa-transgender,\n.fa-user {\n\tfloat: left;\n\tpadding-left: 25px;\n}\n.hrm-count {\n\tfloat: right;\n    padding-right: 44px;\n    font-size: 14px;\n}\n.hrm-block-3 .hrm-count {\n\tpadding-top: 16px;\n}\n.hrm-block-4 .hrm-count {\n\tpadding-top: 13px;\n}\n.hrm-block-1 {\n\tbackground: #f7f7f7; /*#30ddbc;*/\n}\n.hrm-block-2 {\n\tbackground: #f7f7f7; /*#01bcd4;*/\n}\n.hrm-block-3 {\n\tbackground: #f7f7f7; /*#7e57c2;*/\n}\n.hrm-block-4 {\n\tbackground: #f7f7f7; /*#2b6a93;*/\n\tborder-right: 1px solid #ddd;\n}\n.hrm-block {\n\tfloat: left;\n\twidth: 24.8%;\n\tborder-left: 1px solid #ddd;\n\tborder-top: 1px solid #dddddd8f;\n}\n.hrm-block-content-wrap {\n\theight: 120px;\n}\n.hrm-block-3 .hrm-block-content-wrap,\n.hrm-block-4 .hrm-block-content-wrap {\n\tpadding-top: 16px;\n}\n.hrm-block-image-wrap {\n\theight: 86px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    text-align: center;\n    padding-top: 16px;\n}\n.hrm-block-image-wrap img {\n\tborder-radius: 25px;\n\tdisplay: block;\n\tmargin: auto;\n}\n.hrm-block-1 .fa-user-circle {\n\tcolor: #55555569;\n}\n.hrm-block-2 .fa-users {\n\tcolor: #ffffff63;\n}\n.hrm-block-3 .fa-user,\n.hrm-block-4 .fa-transgender {\n\tcolor: #a0a5aa;\n}\n.hrm-img {\n\theight: 90px;\n}\n.hrm-admin-name {\n\tline-height: 30px;\n}\n.hrm-block-1 .fa-user-circle,\n.hrm-block-2 .fa-users,\n.hrm-block-3 .fa-user,\n.hrm-block-4 .fa-transgender {\n\t/*margin-left: 7%;\n    margin-top: 5%;*/\n    font-size: 46px;\n}\n.hrm-block-1,\n.hrm-block-2,\n.hrm-block-3,\n.hrm-block-4 {\n\tposition: relative;\n\theight: 120px;\n}\n.hrm-block-1 footer,\n.hrm-block-2 footer,\n.hrm-block-3 footer,\n.hrm-block-4 footer {\n\tposition: absolute;\n\tbottom: 0;\n    background: rgba(197, 196, 196, 0.34);\n    width: 100%;\n    text-align: center;\n    color: #555;\n    font-weight: 600;\n    padding: 2px 0;\n}\n.hrm-dashboard-avatar {\n\theight: 32px;\n\twidth: 32px;\n\t/*border-radius: 100%;*/\n\tfloat: left;\n\tmargin-right: 10px;\n}\n.hrm-dashboard-avatar:after {\n\tvisibility: hidden;\n\tfont-size: 0;\n\tcontent: \" \";\n\tclear: both;\n\theight: 0;\n}\n.hrm-attendance-ul li {\n\tdisplay: inline-block;\n}\n.hrm-attendance-ul li:nth-child(1) {\n\twidth: 72%;\n}\n.hrm-leave-h2 span {\n\tfloat: left;\n}\n.hrm-leave-h2 span:first-child {\n\twidth: 72%;\n}\n#dashboard-widgets-wrap {\n\tmargin-top: 20px;\n}\n.pm-present-body,\n.pm-birthday-body,\n.pm-leave-body,\n.pm-notice-body {\n\tmin-height: 50px;\n}\n.pm-attendance-nothing-found {\n\tpadding-top: 20px;\n}\n.pm-birthday-nothing-found,\n.pm-leave-nothing-found,\n.pm-notice-nothing-found {\n\tpadding-top: 15px;\n}\n.pm-notice-body .hrm-notice-ul {\n\tmargin: 0;\n\tpadding: 0;\n}\n.pm-notice-body .hrm-notice-ul li {\n\tdisplay: block;\n\tpadding-top: 5px;\n}\n.hrm-notice-ul .fa-calendar-alt {\n\tmargin-left: 10px;\n\tmargin-right: 5px;\n}\n.hrm-popup-date {\n\tdisplay: block;\n\tmargin-left: 50%;\n}\n.hrm-popup-date .fa-calendar-alt {\n\tmargin-right: 5px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "hrm-block hrm-block-1" }, [
      _c("div", { staticClass: "hrm-block-content-wrap" }, [
        _c(
          "div",
          { staticClass: "hrm-block-image-wrap" },
          _vm._l(_vm.administrators, function(administrator) {
            return _vm.administrators.length
              ? _c("div", { staticClass: "hrm-img" }, [
                  _c("img", {
                    staticStyle: { height: "46px", width: "46px" },
                    attrs: { src: administrator.data.avatar }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "hrm-admin-name" }, [
                    _vm._v(_vm._s(administrator.data.display_name))
                  ])
                ])
              : _vm._e()
          })
        ),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-clear" })
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "hrm-block hrm-block-2" }, [
      _c("div", { staticClass: "hrm-block-content-wrap" }, [
        _c(
          "div",
          { staticClass: "hrm-block-image-wrap" },
          [
            _vm._l(_vm.managers, function(manager) {
              return _vm.managers.length
                ? _c("div", { staticClass: "hrm-img" }, [
                    _c("img", {
                      staticStyle: { height: "46px", width: "46px" },
                      attrs: { src: manager.data.avatar }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "hrm-admin-name" }, [
                      _vm._v(_vm._s(manager.data.display_name))
                    ])
                  ])
                : _vm._e()
            }),
            _vm._v(" "),
            !_vm.managers.length ? _c("div", [_vm._m(1)]) : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-clear" })
      ]),
      _vm._v(" "),
      _vm._m(2)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "hrm-block hrm-block-3" }, [
      _c("div", { staticClass: "hrm-block-content-wrap" }, [
        _c("i", { staticClass: "far fa-user" }),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-count" }, [
          _c("span", [_vm._v(_vm._s(_vm.employees))]),
          _vm._v(" Employess")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-clear" })
      ]),
      _vm._v(" "),
      _vm._m(3)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "hrm-block hrm-block-4" }, [
      _c("div", { staticClass: "hrm-block-content-wrap" }, [
        _c("i", { staticClass: "fas fa-transgender" }),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-count" }, [
          _c("div", [_vm._v(_vm._s(_vm.males) + " Males")]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.females) + " Females")]),
          _vm._v(" "),
          _c("div", { staticClass: "hrm-clear" })
        ])
      ]),
      _vm._v(" "),
      _vm._m(4)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "hrm-clear" }),
    _vm._v(" "),
    _c("div", { attrs: { id: "dashboard-widgets-wrap" } }, [
      _c(
        "div",
        { staticClass: "metabox-holder", attrs: { id: "dashboard-widgets" } },
        [
          _c(
            "div",
            {
              staticClass: "postbox-container",
              attrs: { id: "postbox-container-1" }
            },
            [
              _c("div", { staticClass: "meta-box-sortables ui-sortable" }, [
                _c(
                  "div",
                  {
                    staticClass: "postbox ",
                    attrs: { id: "dashboard_activity" }
                  },
                  [
                    _c("h2", { staticClass: "hndle ui-sortable-handle" }, [
                      _c("span", [_vm._v(_vm._s(_vm.attendanceLabel))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "inside" }, [
                      _c("div", { staticClass: "pm-present-body" }, [
                        _vm.attendance.present
                          ? _c(
                              "div",
                              [
                                _vm._l(_vm.present, function(punchIn) {
                                  return _c(
                                    "ul",
                                    { staticClass: "hrm-attendance-ul" },
                                    [
                                      _c("li", [
                                        _c("img", {
                                          staticClass: "hrm-dashboard-avatar",
                                          attrs: { src: punchIn.avatar_url }
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(punchIn.display_name) +
                                            "\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(_vm._s(punchIn.punch_in_time))
                                      ])
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                !_vm.present.length
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "pm-attendance-nothing-found"
                                      },
                                      [_vm._v("Nothing found")]
                                    )
                                  : _vm._e()
                              ],
                              2
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.attendance.absent
                          ? _c(
                              "div",
                              [
                                _vm._l(_vm.absent, function(punchOut) {
                                  return _c(
                                    "ul",
                                    { staticClass: "hrm-attendance-ul" },
                                    [
                                      _c("li", [
                                        _c("img", {
                                          staticClass: "hrm-dashboard-avatar",
                                          attrs: { src: punchOut.avatar_url }
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(punchOut.display_name) +
                                            "\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [_vm._v("No Time Available")])
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                !_vm.absent.length
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "pm-attendance-nothing-found"
                                      },
                                      [_vm._v("Nothing found")]
                                    )
                                  : _vm._e()
                              ],
                              2
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.attendance.earlyEnter
                          ? _c(
                              "div",
                              [
                                _vm._l(_vm.earlyEnter, function(firstEntry) {
                                  return _c(
                                    "ul",
                                    { staticClass: "hrm-attendance-ul" },
                                    [
                                      _c("li", [
                                        _c("img", {
                                          staticClass: "hrm-dashboard-avatar",
                                          attrs: { src: firstEntry.avatar_url }
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(firstEntry.display_name) +
                                            "\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(_vm._s(firstEntry.punch_in_time))
                                      ])
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                !_vm.earlyEnter.length
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "pm-attendance-nothing-found"
                                      },
                                      [_vm._v("Nothing found")]
                                    )
                                  : _vm._e()
                              ],
                              2
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.attendance.earlyLeave
                          ? _c(
                              "div",
                              [
                                _vm._l(_vm.earlyLeave, function(firstLeave) {
                                  return _c(
                                    "ul",
                                    { staticClass: "hrm-attendance-ul" },
                                    [
                                      _c("li", [
                                        _c("img", {
                                          staticClass: "hrm-dashboard-avatar",
                                          attrs: { src: firstLeave.avatar_url }
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(firstLeave.display_name) +
                                            "\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(
                                          _vm._s(firstLeave.punch_out_time)
                                        )
                                      ])
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                !_vm.earlyLeave.length
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "pm-attendance-nothing-found"
                                      },
                                      [_vm._v("Nothing found")]
                                    )
                                  : _vm._e()
                              ],
                              2
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.attendance.lateLeave
                          ? _c(
                              "div",
                              [
                                _vm._l(_vm.lateLeave, function(firstOut) {
                                  return _c(
                                    "ul",
                                    { staticClass: "hrm-attendance-ul" },
                                    [
                                      _c("li", [
                                        _c("img", {
                                          staticClass: "hrm-dashboard-avatar",
                                          attrs: { src: firstOut.avatar_url }
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(firstOut.display_name) +
                                            "\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(_vm._s(firstOut.punch_out_time))
                                      ])
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                !_vm.lateLeave.length
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "pm-attendance-nothing-found"
                                      },
                                      [_vm._v("Nothing found")]
                                    )
                                  : _vm._e()
                              ],
                              2
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { attrs: { id: "" } }, [
                        _c(
                          "div",
                          { staticClass: "activity-block", attrs: { id: "" } },
                          [
                            _c("ul", { staticClass: "subsubsub" }, [
                              _c("li", { staticClass: "all" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#l" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.attendanceTab("present")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v("Present"),
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("("),
                                      _c("span", { staticClass: "all-count" }, [
                                        _vm._v(_vm._s(_vm.present.length))
                                      ]),
                                      _vm._v(")")
                                    ])
                                  ]
                                ),
                                _vm._v(" |\n\t\t\t\t\t\t\t\t\t\t")
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "moderated" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.attendanceTab("absent")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v("Absent"),
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("("),
                                      _c(
                                        "span",
                                        { staticClass: "pending-count" },
                                        [_vm._v(_vm._s(_vm.absent.length))]
                                      ),
                                      _vm._v(")")
                                    ])
                                  ]
                                ),
                                _vm._v(" |\n\t\t\t\t\t\t\t\t\t\t")
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "approved" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.attendanceTab("earlyEnter")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v("Early Enter"),
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("("),
                                      _c(
                                        "span",
                                        { staticClass: "approved-count" },
                                        [_vm._v(_vm._s(_vm.earlyEnter.length))]
                                      ),
                                      _vm._v(")")
                                    ])
                                  ]
                                ),
                                _vm._v(" |\n\t\t\t\t\t\t\t\t\t\t")
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "spam" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.attendanceTab("earlyLeave")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v("Early Leave"),
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("("),
                                      _c(
                                        "span",
                                        { staticClass: "spam-count" },
                                        [_vm._v(_vm._s(_vm.earlyLeave.length))]
                                      ),
                                      _vm._v(")")
                                    ])
                                  ]
                                ),
                                _vm._v(" |\n\t\t\t\t\t\t\t\t\t\t")
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "spam" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.attendanceTab("lateLeave")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v("Late Leave"),
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("("),
                                      _c(
                                        "span",
                                        { staticClass: "spam-count" },
                                        [_vm._v(_vm._s(_vm.lateLeave.length))]
                                      ),
                                      _vm._v(")")
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "postbox " }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "inside" }, [
                    _c(
                      "div",
                      { staticClass: "pm-birthday-body" },
                      [
                        _vm._l(_vm.birthday, function(birth) {
                          return _c(
                            "ul",
                            { staticClass: "hrm-attendance-ul" },
                            [
                              _c("li", [
                                _c("img", {
                                  staticClass: "hrm-dashboard-avatar",
                                  attrs: { src: birth.data.avatar_url }
                                }),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(birth.data.display_name) +
                                    "\n\t\t\t\t\t\t\t\t\t"
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [_vm._v(_vm._s(birth.data.birthday))])
                            ]
                          )
                        }),
                        _vm._v(" "),
                        !_vm.birthday.length
                          ? _c(
                              "div",
                              { staticClass: "pm-birthday-nothing-found" },
                              [_vm._v("Nothing found")]
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "postbox-container",
              attrs: { id: "postbox-container-2" }
            },
            [
              _c("div", { staticClass: "meta-box-sortables ui-sortable" }, [
                _c("div", { staticClass: "postbox " }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "inside" }, [
                    _c(
                      "div",
                      { staticClass: "pm-leave-body" },
                      [
                        _vm._l(_vm.leaves, function(leave) {
                          return _c(
                            "ul",
                            { staticClass: "hrm-attendance-ul" },
                            [
                              _c("li", [
                                _c("img", {
                                  staticClass: "hrm-dashboard-avatar",
                                  attrs: { src: leave.employee.data.avatar_url }
                                }),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(leave.employee.data.display_name) +
                                    "\n\t\t\t\t\t\t\t\t\t"
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(_vm._s(leave.leave_type.data.name))
                              ])
                            ]
                          )
                        }),
                        _vm._v(" "),
                        !_vm.leaves.length
                          ? _c(
                              "div",
                              { staticClass: "pm-leave-nothing-found" },
                              [_vm._v("Nothing found")]
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "postbox " }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "inside" }, [
                    _c("div", { staticClass: "pm-notice-body" }, [
                      _vm.notices.length
                        ? _c(
                            "ul",
                            { staticClass: "hrm-notice-ul" },
                            _vm._l(_vm.notices, function(notice) {
                              return _c("li", [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.popUpNotice(notice)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(notice.title))]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _c("i", {
                                    staticClass: "far fa-calendar-alt"
                                  }),
                                  _vm._v(_vm._s(notice.date))
                                ]),
                                _vm._v(" "),
                                notice.popup
                                  ? _c("div", [
                                      _c(
                                        "div",
                                        {
                                          directives: [
                                            {
                                              name: "hrm-dialog",
                                              rawName: "v-hrm-dialog"
                                            }
                                          ],
                                          attrs: { title: notice.title }
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "hrm-popup-date" },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "far fa-calendar-alt"
                                              }),
                                              _vm._v(_vm._s(notice.date))
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", {
                                            domProps: {
                                              innerHTML: _vm._s(
                                                notice.description
                                              )
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            })
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.notices.length
                        ? _c(
                            "div",
                            { staticClass: "pm-notice-nothing-found" },
                            [_vm._v("Nothing found")]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [_c("div", [_vm._v("Administrators")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hrm-admin-name" }, [
      _c("strong", [_vm._v("No manager found!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [_c("div", [_vm._v("Managers")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [_c("div", [_vm._v("Employees")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [_c("div", [_vm._v("Male/Female")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "hndle ui-sortable-handle" }, [
      _c("span", {}, [_vm._v("Birthday")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "hndle ui-sortable-handle hrm-leave-h2" }, [
      _c("span", {}, [_vm._v("Leave")]),
      _vm._v(" "),
      _c("span", {}, [_vm._v("Type")]),
      _vm._v(" "),
      _c("div", { staticClass: "hrm-clear" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "hndle ui-sortable-handle" }, [
      _c("span", {}, [_vm._v("Notice Board")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5477924e", esExports)
  }
}

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dashboard_vue__ = __webpack_require__(288);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5477924e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dashboard_vue__ = __webpack_require__(438);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(491)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dashboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5477924e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/dashboard/dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5477924e", Component.options)
  } else {
    hotAPI.reload("data-v-5477924e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(364);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("31fbc3b5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5477924e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5477924e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});