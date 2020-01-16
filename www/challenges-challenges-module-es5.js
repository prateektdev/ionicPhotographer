(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["challenges-challenges-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/challenges/challenges.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/challenges/challenges.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>challenges</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/challenges/challenges-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/challenges/challenges-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ChallengesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesPageRoutingModule", function() { return ChallengesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _challenges_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challenges.page */ "./src/app/challenges/challenges.page.ts");




var routes = [
    {
        path: '',
        component: _challenges_page__WEBPACK_IMPORTED_MODULE_3__["ChallengesPage"]
    }
];
var ChallengesPageRoutingModule = /** @class */ (function () {
    function ChallengesPageRoutingModule() {
    }
    ChallengesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChallengesPageRoutingModule);
    return ChallengesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/challenges/challenges.module.ts":
/*!*************************************************!*\
  !*** ./src/app/challenges/challenges.module.ts ***!
  \*************************************************/
/*! exports provided: ChallengesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesPageModule", function() { return ChallengesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _challenges_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./challenges-routing.module */ "./src/app/challenges/challenges-routing.module.ts");
/* harmony import */ var _challenges_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./challenges.page */ "./src/app/challenges/challenges.page.ts");







var ChallengesPageModule = /** @class */ (function () {
    function ChallengesPageModule() {
    }
    ChallengesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _challenges_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChallengesPageRoutingModule"]
            ],
            declarations: [_challenges_page__WEBPACK_IMPORTED_MODULE_6__["ChallengesPage"]]
        })
    ], ChallengesPageModule);
    return ChallengesPageModule;
}());



/***/ }),

/***/ "./src/app/challenges/challenges.page.scss":
/*!*************************************************!*\
  !*** ./src/app/challenges/challenges.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/challenges/challenges.page.ts":
/*!***********************************************!*\
  !*** ./src/app/challenges/challenges.page.ts ***!
  \***********************************************/
/*! exports provided: ChallengesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesPage", function() { return ChallengesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChallengesPage = /** @class */ (function () {
    function ChallengesPage() {
    }
    ChallengesPage.prototype.ngOnInit = function () {
    };
    ChallengesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-challenges',
            template: __webpack_require__(/*! raw-loader!./challenges.page.html */ "./node_modules/raw-loader/index.js!./src/app/challenges/challenges.page.html"),
            styles: [__webpack_require__(/*! ./challenges.page.scss */ "./src/app/challenges/challenges.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChallengesPage);
    return ChallengesPage;
}());



/***/ })

}]);
//# sourceMappingURL=challenges-challenges-module-es5.js.map