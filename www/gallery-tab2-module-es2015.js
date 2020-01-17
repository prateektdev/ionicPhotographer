(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-tab2-module"],{

/***/ "./node_modules/@ionic-native/image-picker/ngx/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/image-picker/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: OutputType, ImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputType", function() { return OutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return ImagePicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePicker = /** @class */ (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePicker.prototype.getPictures = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePicker.prototype.hasReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.prototype.requestReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.pluginName = "ImagePicker";
    ImagePicker.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePicker.pluginRef = "window.imagePicker";
    ImagePicker.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePicker.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePicker.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePicker.platforms = ["Android", "iOS"];
    ImagePicker = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ImagePicker);
    return ImagePicker;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXBpY2tlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXFEeEUsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtREFBWSxDQUFBO0lBQ1osbURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjs7SUF1Q2dDLCtCQUFpQjs7OztJQVVoRCxpQ0FBVyxhQUFDLE9BQTJCO0lBV3ZDLHVDQUFpQjtJQVdqQiwyQ0FBcUI7Ozs7Ozs7O0lBaENWLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFoR3hCO0VBZ0dpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIG1heCBpbWFnZXMgdG8gYmUgc2VsZWN0ZWQsIGRlZmF1bHRzIHRvIDE1LiBJZiB0aGlzIGlzIHNldCB0byAxLCB1cG9uIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpbWFnZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiBpdC4gKEFuZHJvaWQgb25seSlcbiAgICovXG4gIG1heGltdW1JbWFnZXNDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IHdpZHRoIHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heCBoZWlnaHQgdG8gYWxsb3cgaW1hZ2VzIHRvIGJlXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFF1YWxpdHkgb2YgaW1hZ2VzLCBkZWZhdWx0cyB0byAxMDBcbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZpZGVvcyBhbGxvd2VkP1xuICAgKi9cbiAgYWxsb3dfdmlkZW8/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiB0aGUgZGVmYXVsdCBpcyB0aGUgbWVzc2FnZSBvZiB0aGUgb2xkIHBsdWdpbiBpbXBsXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIG9sZCBwbHVnaW4gaW1wbCBkaWRuJ3QgaGF2ZSBpdCwgc28gcGFzc2luZyBudWxsIGJ5IGRlZmF1bHRcbiAgICovXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gSW1hZ2VQaWNrZXIuT3V0cHV0VHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBGSUxFX1VSSSA6IDAsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIERBVEFfVVJMIDogMSwgICBSZXR1cm4gaW1hZ2UgYXMgYmFzZTY0LWVuY29kZWQgc3RyaW5nXG4gICAqL1xuICBvdXRwdXRUeXBlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBpT1MgcG9wb3ZlciBhcyBzZWVuIG9uIGlQYWRcbiAgICovXG4gIGRpc2FibGVfcG9wb3Zlcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIE91dHB1dFR5cGUge1xuICBGSUxFX1VSTCA9IDAsXG4gIERBVEFfVVJMXG59XG5cbi8qKlxuICogQG5hbWUgSW1hZ2UgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgUGx1Z2luIEZvciBNdWx0aXBsZSBJbWFnZSBTZWxlY3Rpb25cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWltYWdlLXBpY2tlcmAuXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBodHRwczovL2dpdGh1Yi5jb20vVGVsZXJpay1WZXJpZmllZC1QbHVnaW5zL0ltYWdlUGlja2VyXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbWFnZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW1hZ2UtcGlja2VyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VQaWNrZXI6IEltYWdlUGlja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmltYWdlUGlja2VyLmdldFBpY3R1cmVzKG9wdGlvbnMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAqICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgVVJJOiAnICsgcmVzdWx0c1tpXSk7XG4gKiAgIH1cbiAqIH0sIChlcnIpID0+IHsgfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSW1hZ2VQaWNrZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW1hZ2VQaWNrZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10ZWxlcmlrLWltYWdlcGlja2VyJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LmltYWdlUGlja2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvSW1hZ2VQaWNrZXInLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXRlbGVyaWstaW1hZ2VwaWNrZXIgLS12YXJpYWJsZSBQSE9UT19MSUJSQVJZX1VTQUdFX0RFU0NSSVBUSU9OPVwieW91ciB1c2FnZSBtZXNzYWdlXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1BIT1RPX0xJQlJBUllfVVNBR0VfREVTQ1JJUFRJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQaWNrIHBpY3R1cmVzIGZyb20gdGhlIGxpYnJhcnkuXG4gICAqIEBwYXJhbSB7SW1hZ2VQaWNrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdGhlIGltYWdlIGZpbGUgVVJJXG4gICAqIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGdldFBpY3R1cmVzKG9wdGlvbnM6IEltYWdlUGlja2VyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIGhhdmUgcGVybWlzc2lvbiB0byByZWFkIGltYWdlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHdlIGhhdmUgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbiAgfSlcbiAgaGFzUmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byByZWFkIGltYWdlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbiAgfSlcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/tab2.page.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/tab2.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Gallery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <div class=\"head_2\">\n    <a href=\"javascript:history.back()\">\n      <div class=\"back_button back_onpages\">\n        <div class=\"back\">\n          <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n    </a>\n    <div class=\"custom_page_name\">\n      <a (click)=\"newpost()\">New Post</a>\n      <span class=\"post_share\">\n        <a id='post_b' class=\"post_button\" (click)=\"create_post()\">Post</a>\n      </span>\n\n      <a>New Post</a>\n      <span class=\"post_share\">\n        <a id='post_b' class=\"post_button\">Post</a>\n      </span>\n\n    </div>\n  </div> -->\n\n  <div class=\"d-flex justify-content-center\">\n    <div id=\"spinner_2\" class=\"spinner-grow text-danger\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n\n  <div class=\"container\" style=\"margin-top: 60px;\">\n    <!-- <form>\n      <button id='btn1' style=\"display:none;\"></button>\n      <input type=\"file\" accept=\".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf\" multiple>\n    </form> -->\n    <!-- <div style=\"text-align: center;margin-top: 2px;\">\n      <a class=\"post_button cameraButton\" (click)=\"takePhoto()\" style=\"display: none\">Take a Photo</a>\n    </div> -->\n    <form>\n      <div class=\"form-group edit_field\">\n        <!-- <textarea class=\"form-control value\" placeholder=\"Caption..\" id=\"description\" name=\"description\"\n          [(ngModel)]=\"model.description\" #description=\"ngModel\" rows=\"2\"></textarea> -->\n\n        <!-- <textarea class=\"form-control value\" placeholder=\"Caption..\" id=\"description\" name=\"description\"\n          rows=\"2\"></textarea> -->\n        <hr class=\"edit_form_line\">\n      </div>\n    </form>\n    <div class=\"photoUploadBlock\" (click)=\"loadPhotos()\">\n      \n    </div>\n    <div class=\"photoGallery\">\n      <div *ngFor=\"let photo of photos\" class=\"photoBlock\">\n        <img [src]=\"'assets/images/'+photo\" />\n      </div>\n      <hr class=\"edit_form_line\">\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/gallery/tab2.module.ts":
/*!****************************************!*\
  !*** ./src/app/gallery/tab2.module.ts ***!
  \****************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/gallery/tab2.page.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]],
        providers: [
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"]
        ]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/gallery/tab2.page.scss":
/*!****************************************!*\
  !*** ./src/app/gallery/tab2.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photoBlock {\n  border: 1px solid blue;\n  padding: 2%;\n  height: 90px;\n  width: 20%;\n  float: left;\n}\n\n.photoBlock > img {\n  height: 100%;\n  width: 100%;\n}\n\n.photoGallery {\n  display: inline;\n}\n\n.photoUploadBlock {\n  height: 200px;\n  width: 100%;\n  padding: 3%;\n  border: 1px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRlZWsvRG9jdW1lbnRzL2ZyZWVsYW5jZXIvaW9uaWMvaW9uaWNQaG90b2dyYXBoZXIvc3JjL2FwcC9nYWxsZXJ5L3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9CbG9jayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIHBhZGRpbmc6IDIlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAyMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucGhvdG9CbG9jayA+IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGhvdG9HYWxsZXJ5IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnBob3RvVXBsb2FkQmxvY2t7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xufSIsIi5waG90b0Jsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgcGFkZGluZzogMiU7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5waG90b0Jsb2NrID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBob3RvR2FsbGVyeSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnBob3RvVXBsb2FkQmxvY2sge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMyU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/gallery/tab2.page.ts":
/*!**************************************!*\
  !*** ./src/app/gallery/tab2.page.ts ***!
  \**************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");



let Tab2Page = class Tab2Page {
    constructor(imagePicker) {
        this.imagePicker = imagePicker;
        this.options = {
            maximumImagesCount: 10,
        };
        this.photos = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg", "pic5.jpeg", "pic6.jpeg", "pic7.jpeg",
            "pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg", "pic5.jpeg", "pic6.jpeg", "pic7.jpeg", "pic1.jpeg"];
    }
    ngOnInit() {
        $('input[type="file"]').imageuploadify();
    }
    loadPhotos() {
        this.imagePicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => { });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/gallery/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=gallery-tab2-module-es2015.js.map