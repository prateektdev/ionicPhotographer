(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/tab3.page.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/tab3.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"my_profile\">\n    <div class=\"dark_page\">\n      <!-- [ngStyle]=\"getMyStyles()\" -->\n      <div class=\"custom_banner my_profile_bg newBg\">\n        <div class=\"page_inner\">\n          <a class=\"custom_profile_bg_edit\" (click)=\"newTrigger()\">\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </a>\n\n          <input class=\"fileUpload\" type=\"file\" accept=\"image/*\" id=\"bgImage\" (change)=\"onBgSelected($event)\"\n            #bgImage />\n        </div>\n      </div>\n      <div class=\"page_inner\">\n        <div class=\"custom_profile_img\">\n          <img id=\"profile_pic\" src=\"assets/images/1.jpg\" />\n        </div>\n        <a [routerLink]=\"['/edit-profile']\">\n          <div class=\"custom_edit_profile\">\n            Edit profile\n          </div>\n        </a>\n        <div class=\"profile_content\">\n          <div class=\"profile_heading\">Name <br /></div>\n          Username <br />\n          <!-- <a class=\"verifyLink\" data-toggle=\"modal\" data-target=\"#myModel2\">\n            Verify your account?\n          </a> -->\n          <div class=\"profile_content_dec\">\n            <!-- *ngIf=\"model.profession != ''\" -->\n            <i class=\"fa fa-user\" style=\"font-size: 16px;\" aria-hidden=\"true\"></i>Web developer<br />\n            <!-- *ngIf=\"model.profession != ''\" -->\n            <i class=\"fa fa-globe\" style=\"font-size: 16px;\" aria-hidden=\"true\"></i>www.dummy.com<br />\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>New Delhi<br />\n            <div class=\"custom_follow\">\n              <span class=\"custom_follwers\" (click)=\"mypost()\">\n                <span class=\"white1\">25</span> Posts\n              </span>\n              <span class=\"custom_follwers\" (click)=\"showFollower()\">\n                <span class=\"white1\">78</span>\n                Following\n              </span>\n              <span class=\"custom_follwers\" (click)=\"showFollowing()\">\n                <span class=\"white1\">58</span>\n                Followers\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/tab3.module.ts":
/*!****************************************!*\
  !*** ./src/app/profile/tab3.module.ts ***!
  \****************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/profile/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/profile/tab3.page.scss":
/*!****************************************!*\
  !*** ./src/app/profile/tab3.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/tab3.page.ts":
/*!**************************************!*\
  !*** ./src/app/profile/tab3.page.ts ***!
  \**************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab3Page = /** @class */ (function () {
    function Tab3Page() {
    }
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/profile/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=profile-tab3-module-es5.js.map