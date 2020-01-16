(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-profile/edit-profile.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Edit Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"my_profile\">\n    <div class=\"dark_page\">\n      <!-- [ngStyle]=\"getMyStyles()\" -->\n      <div class=\"custom_banner my_profile_bg newBg\">\n        <div class=\"page_inner\">\n          <a class=\"custom_profile_bg_edit\" (click)=\"newTrigger()\">\n            <i class=\"fa fa-camera\" style=\"left: 5px !important;\" aria-hidden=\"true\"></i>\n          </a>\n\n          <div class=\"custom_profile_img profileImg\">\n            <img id=\"profile_pic\" src=\"assets/images/1.jpg\" />\n          </div>\n\n          <input class=\"fileUpload\" type=\"file\" accept=\"image/*\" id=\"bgImage\" (change)=\"onBgSelected($event)\"\n            #bgImage />\n        </div>\n      </div>\n      <div style=\"background: #fe1743;\">\n        <div class=\"page_inner\">\n          <form (ngSubmit)=\"register()\" #rform=\"ngForm\">\n\n            <div class=\"form_icon\">\n              <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"field\">\n              <input class=\"effect-3\" type=\"text\" placeholder=\"Username\" name=\"username\" id=\"username\"\n                [(ngModel)]=\"model.username\" #username=\"ngModel\" required>\n              <span class=\"focus-border\"></span>\n            </div>\n            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\">\n              <div class=\"required\" *ngIf=\"username?.errors.required\">Username is required.</div>\n            </div>\n\n            <div class=\"form_icon\">\n              <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"field\">\n              <input class=\"effect-3\" type=\"text\" placeholder=\"Name\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\"\n                #name=\"ngModel\" required>\n              <span class=\"focus-border\"></span>\n            </div>\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n              <div class=\"required\" *ngIf=\"name?.errors.required\">Name is required.</div>\n            </div>\n\n            <div class=\"form_icon\">\n              <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"field\">\n              <input class=\"effect-3\" type=\"email\" placeholder=\"Email\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\"\n                #email=\"ngModel\" required>\n              <span class=\"focus-border\"></span>\n            </div>\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n              <div class=\"required\" *ngIf=\"email?.errors.required\">Email is required.</div>\n            </div>\n\n            <div class=\"form_icon\">\n              <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"field\">\n              <input class=\"effect-3\" type=\"password\" placeholder=\"Password\" name=\"password\" id=\"password\"\n                [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\n              <span class=\"focus-border\"></span>\n            </div>\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n              <div class=\"required\" *ngIf=\"password?.errors.required\">Password is required.</div>\n            </div>\n\n            <div class=\"form_icon\">\n              <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"field\">\n              <input class=\"effect-3\" type=\"text\" placeholder=\"About me\" name=\"bio\" id=\"bio\" maxlength=\"70\"\n                [(ngModel)]=\"model.bio\" #bio=\"ngModel\">\n              <span class=\"focus-border\"></span>\n            </div>\n\n            <!-- <div class=\"field mt-3\">\n\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                <label class=\"custom-control-label\" style=\"color: #d7a7a7;\" for=\"male\">Public</label>\n                <input type=\"radio\" class=\"custom-control-input\" value=\"male\" id=\"male\" name=\"gender\" required>\n              </div>\n\n\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                <label class=\"custom-control-label\" style=\"color: #d7a7a7;\" for=\"female\">Private</label>\n                <input type=\"radio\" class=\"custom-control-input\" value=\"female\" id=\"female\" name=\"gender\" required>\n              </div>\n            </div> -->\n\n            <div class=\"field mt-3\" id=\"gen\">\n              <!-- Default inline 1-->\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                <input type=\"radio\" class=\"custom-control-input\" value=\"male\" id=\"male\" name=\"gender\"\n                  [(ngModel)]=\"model.gender\" required>\n                <label class=\"custom-control-label\" style=\"color: #d7a7a7;\" for=\"male\">Public</label>\n              </div>\n\n              <!-- Default inline 2-->\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                <input type=\"radio\" class=\"custom-control-input\" value=\"female\" id=\"female\"\n                  name=\"inlineDefaultRadiosExample\" name=\"gender\" [(ngModel)]=\"model.gender\" required>\n                <label class=\"custom-control-label\" style=\"color: #d7a7a7;\" for=\"female\">Private</label>\n              </div>\n              <span class=\"focus-border\"></span>\n            </div>\n\n\n            <div class=\"center_div\">\n              <button class=\"btn btn-success signup_btn\" [disabled]=\"!rform.form.valid\">Sign Up </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/edit-profile/edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "./src/app/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/edit-profile/edit-profile.page.ts");







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditProfilePage = class EditProfilePage {
    constructor() {
        this.model = {};
    }
    ngOnInit() {
    }
};
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.page.html"),
        styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/edit-profile/edit-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es2015.js.map