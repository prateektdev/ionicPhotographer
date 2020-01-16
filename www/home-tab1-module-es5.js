(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"single_post new_block\" id=\"postScroll\">\n    <div class=\"page_inner\">\n      <div class=\"single_post_user_img\">\n        <a><img src=\"assets/images/1.jpg\" /></a>\n      </div>\n      <div class=\"single_post_user_name\" (click)=\"show_profile_2(post)\">\n        <a>Username</a>\n      </div>\n      <div class=\"single_post_user_time\">\n        5 jan 2019\n      </div>\n\n      <div class=\"nav-item dropdown single_post_setting\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img src=\"assets/images/single_post_setting.png\" />\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\">\n            Delete Post <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n          </a>\n          <a class=\"dropdown-item\">\n            Save Post <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"post\">\n        <img src=\"assets/images/1.jpg\" />\n      </div>\n\n      <div class=\"page_inner\">\n        <div class=\"post_bottom\">\n\n          <a class=\"post_like float-left\">\n            <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n            Like\n          </a>\n          <a class=\"post_dislike float-right\">\n            <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n            Comment\n          </a>\n\n          <!-- <div class=\"post_bottom_left\">\n            \n          </div>\n          <div class=\"post_bottom_right\">\n            <div class=\"post_save\">\n              <i class=\"fa fa-bookmark-o\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"post_send\" style=\"display:none;\">\n              <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\n            </div>\n          </div> -->\n          <br />\n          <div class=\"bottom_2_desc\">\n            <div class=\"post_bottom_like\">121 Likes</div>\n            <!-- <div class=\"post_bottom_dislike\">\n              {{ post.dislike }} Dislikes\n            </div> -->\n            <a id=\"comment_1\" class=\"post_bottom_comments btn-btn-link\">\n              View all 83 comments\n            </a>\n          </div>\n\n          <div class=\"bottom_3_post_content\">\n            <b style=\"font-size: 15px;\">Username</b>\n            just a sample picture\n          </div>\n\n          <!-- <div *ngIf=\"post.commentCount > 2\">\n            <ng-container *ngFor=\"\n                let item of post.comment;\n                let k = index;\n                let first = first\n              \">\n              <div [ngClass]=\"{\n                  latest_comment: first,\n                  latest_comment_2: !first\n                }\" *ngIf=\"k < 2\">\n                <div class=\"post_bottom_comment_img\">\n                  <img src=\"{{ imageUrl }}{{ item.profile_pic.thumb_image }}\" />\n                </div>\n                <div class=\"latest_comment_content\">\n                  <div class=\"latest_comment_name\">{{ item.username }}</div>\n                  <p>{{ item.comment }}</p>\n                </div>\n              </div>\n            </ng-container>\n          </div> -->\n\n          <!-- [ngStyle]=\"{'margin-top':post.commentCount > 0 ? '24px' : '0px' }\" -->\n          <!-- [ngClass]=\"{ 'mt-4': post.commentCount > 0 }\" -->\n          <div class=\"bottom_4_comment\">\n            <div class=\"custom_div_1\">\n              <div class=\"post_bottom_comment_img\">\n                <img src=\"assets/images/1.jpg\" />\n              </div>\n            </div>\n\n            <div class=\"custom_div_2\">\n              <input type=\"text\" id=\"co_1\" class=\"form-control post_bottom_comment\" placeholder=\"Comment...\" />\n              <a>\n                <img class=\"comment_send\" src=\"assets/images/send_comment_icon.png\" />\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- <div class=\"single_post new_block\" id=\"postScroll\">\n    <div class=\"page_inner\">\n      <div class=\"single_post_user_img\" (click)=\"show_profile_2(post)\">\n        <a><img src=\"{{ imageUrl }}{{ post.profile_pic.thumb_image }}\" />\n        </a>\n      </div>\n      <div class=\"single_post_user_name\" (click)=\"show_profile_2(post)\">\n        <a>{{ post.username }}</a>\n        <img *ngIf=\"post.vstatus == '1'\" class=\"verifyImg\" src=\"assets/images/verified.png\" />\n      </div>\n      <div class=\"single_post_user_time\">\n        {{ post.post_created_date }}\n      </div>\n\n      <div class=\"nav-item dropdown single_post_setting\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img src=\"assets/images/single_post_setting.png\" />\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a *ngIf=\"user.id === post.user_id\" class=\"dropdown-item\" (click)=\"delete_post(post.id, post.user_id, i)\">\n            Delete Post <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n          </a>\n          <a class=\"dropdown-item\" (click)=\"save_post(post)\">\n            Save Post <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"post.media[0].type == 1; else showVideo\" (dblclick)=\"like_post(post)\">\n      <swiper *ngIf=\"post.media.length > 1; else singleImage\"\n        (indexChange)=\"onIndexChange($event, post.id, post.media)\">\n        <div class=\"post\" *ngFor=\"let item of post.media; let m = index\">\n          <img *ngIf=\"item.thumb_uploads == 'noimage.jpg'; else thumb\" class=\"swiper-slide pt-2 rounded\"\n            [src]=\"postUrl + item.uploads\" (load)=\"onImageLoad($event, item, i)\" />\n\n          <ng-template #thumb>\n            <img class=\"swiper-slide rounded\" [src]=\"postUrl + item.thumb_uploads\"\n              (load)=\"onImageLoad($event, item, i)\" />\n          </ng-template>\n        </div>\n      </swiper>\n      <ng-template #singleImage>\n        <div class=\"post singleImagePost\" *ngFor=\"let item of post.media; let m = index\">\n          <img *ngIf=\"item.thumb_uploads == 'noimage.jpg'; else thumb\" class=\"swiper-slide rounded\"\n            [src]=\"postUrl + item.uploads\" (load)=\"onImageLoad($event, item, i)\" />\n          <ng-template #thumb>\n            <img class=\"swiper-slide rounded\" [src]=\"postUrl + item.thumb_uploads\"\n              (load)=\"onImageLoad($event, item, i)\" />\n          </ng-template>\n        </div>\n      </ng-template>\n      <div class=\"indicator\" *ngIf=\"post.media.length > 1\">\n        <ul>\n          <ng-container *ngFor=\"\n              let item of post.media;\n              let k = index;\n              let first = first\n            \">\n            <li [ngClass]=\"{ active: first }\" id=\"in_{{ item.post_id }}_{{ k }}\"></li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n\n    <ng-template #showVideo>\n      <div (dblclick)=\"like_post(post)\" id=\"container custom_video\">\n        <div class=\"clickable_2\" (click)=\"play_pause_video(post.media[0])\"></div>\n        <video id=\"v_post_{{ post.media[0].id }}\" class=\"video-fluid z-depth-1 post\">\n          <source [src]=\"post.media[0].url\" type=\"video/mp4\" />\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    </ng-template>\n\n    <div class=\"page_inner\">\n      <div class=\"post_bottom\">\n        <div class=\"post_bottom_left\">\n          <div class=\"post_like\" (click)=\"like_post(post)\">\n            <i [ngClass]=\"{\n                like: post.user_liked == 'like',\n                'fa-thumbs-up': post.user_liked == 'like'\n              }\" class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"post_dislike\" (click)=\"dislike_post(post)\">\n            <i [ngClass]=\"{\n                disliked: post.user_liked == 'dislike',\n                'fa-thumbs-down': post.user_liked == 'dislike'\n              }\" class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n        <div class=\"post_bottom_center\">\n          <div *ngFor=\"let item of post.likedBy; let j = index\">\n            <div class=\"post_bottom_users\" (click)=\"show_profile(post)\">\n              <img src=\"{{ imageUrl }}{{ item.thumb_image }}\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"post_bottom_right\">\n          <div class=\"post_save\" (click)=\"save_post(post)\">\n            <i class=\"fa fa-bookmark-o\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"post_send\" style=\"display:none;\">\n            <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n        <br />\n        <div class=\"bottom_2_desc\">\n          <div class=\"post_bottom_like\">{{ post.like }} Likes</div>\n          <div class=\"post_bottom_dislike\">\n            {{ post.dislike }} Dislikes\n          </div>\n          <a id=\"comment_{{ post.id }}\" class=\"post_bottom_comments btn-btn-link\"\n            *ngIf=\"post?.commentCount > 0; else nocomment\" (click)=\"show_all_comment(post, post.comment)\">\n            View all {{ post.commentCount }} comments\n          </a>\n          <ng-template #nocomment>\n            <div class=\"post_bottom_comments\">\n              No comments found\n            </div>\n          </ng-template>\n        </div>\n\n        <div class=\"bottom_3_post_content\" *ngIf=\"post.description != ''\">\n          <b style=\"font-size: 15px;\">{{ post.username }}</b>\n          {{ post.description }}\n        </div>\n\n        <div *ngIf=\"post.commentCount > 2\">\n          <ng-container *ngFor=\"\n              let item of post.comment;\n              let k = index;\n              let first = first\n            \">\n            <div [ngClass]=\"{\n                latest_comment: first,\n                latest_comment_2: !first\n              }\" *ngIf=\"k < 2\">\n              <div class=\"post_bottom_comment_img\">\n                <img src=\"{{ imageUrl }}{{ item.profile_pic.thumb_image }}\" />\n              </div>\n              <div class=\"latest_comment_content\">\n                <div class=\"latest_comment_name\">{{ item.username }}</div>\n                <p>{{ item.comment }}</p>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n\n        <div [ngClass]=\"{ 'mt-4': post.commentCount > 0 }\" class=\"bottom_4_comment\">\n          <div class=\"custom_div_1\">\n            <div class=\"post_bottom_comment_img\">\n              <img src=\"{{ model.profile_pic }}\" />\n            </div>\n          </div>\n\n          <div class=\"custom_div_2\">\n            <input type=\"text\" id=\"co_{{ post.id }}\" class=\"form-control post_bottom_comment\"\n              placeholder=\"Comment...\" />\n            <a (click)=\"add_comment(post.id, i)\">\n              <img class=\"comment_send\" src=\"assets/images/send_comment_icon.png\" />\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr class=\"post_bottom_line\" *ngIf=\"!last && i != 1\" />\n  </div> -->\n\n\n\n\n  <!-- <ion-card class=\"welcome-card\">\n      <img src=\"/assets/shapes.svg\" alt=\"\" />\n      <ion-card-header>\n        <ion-card-subtitle>Get Started</ion-card-subtitle>\n        <ion-card-title>Welcome to Ionic</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-list lines=\"none\">\n      <ion-list-header>\n        <ion-label>Resources</ion-label>\n      </ion-list-header>\n      <ion-item href=\"https://ionicframework.com/docs/\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n        <ion-label>Ionic Documentation</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n        <ion-label>Scaffold Out Your App</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n        <ion-label>Change Your App Layout</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n        <ion-label>Theme Your App</ion-label>\n      </ion-item>\n    </ion-list> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/home/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/home/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/home/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRlZWsvRG9jdW1lbnRzL2ZyZWVsYW5jZXIvaW9uaWMvaW9uaWNQaG90b2dyYXBoZXIvc3JjL2FwcC9ob21lL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
    }
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/home/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=home-tab1-module-es5.js.map