webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_hotel_checkout_hotel__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HotelDetailPage = (function () {
    function HotelDetailPage(nav, hotelService, platform) {
        this.nav = nav;
        this.hotelService = hotelService;
        this.platform = platform;
        //
        this.arr = Array;
        // set sample data
        this.hotel = hotelService.getItem(1);
    }
    HotelDetailPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    HotelDetailPage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.hotel.location.lat, this.hotel.location.lon);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);
        new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
    };
    // view a room
    HotelDetailPage.prototype.viewRoom = function (room) {
        for (var i = 0; i < this.hotel.rooms.length; i++) {
            this.hotel.rooms[i].active = false;
        }
        room.active = true;
    };
    // go to reviews page
    HotelDetailPage.prototype.viewReviews = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__reviews_reviews__["a" /* ReviewsPage */]);
    };
    // go to checkout page
    HotelDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__checkout_hotel_checkout_hotel__["a" /* CheckoutHotelPage */]);
    };
    return HotelDetailPage;
}());
HotelDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hotel-detail',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/hotel-detail/hotel-detail.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar class="nav-transparent" color="dark">\n    <ion-title>{{ hotel.name }}</ion-title>\n  </ion-navbar>\n  <ion-fab top right class="toptop">\n    <button ion-fab mini round icon-only color="dark">\n      <ion-icon name="share-alt" class="text-white"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <button ion-fab class="btn-facebook text-white"><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab class="btn-twitter text-white"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab class="btn-gplus text-white"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-header>\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of hotel.images">\n      <img src="{{ image }}" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--price info-->\n  <div class="price-info">\n    <ion-badge *ngIf="hotel.sale_price" class="square badge-left green-bg text-white">{{ (100 * (1 - hotel.price /\n      hotel.sale_price)).toFixed(0) }}%\n    </ion-badge>\n    <ion-badge class="square badge-right" color="danger">\n    {{ hotel.numb_available_rooms }} rooms left\n    </ion-badge>\n    <div class="pull-left">\n      <span class="price text-white" *ngIf="!hotel.sale_price" ion-text>{{ hotel.price | currency:\'USD\':true }}</span>\n      <span class="sale-price bold text-white" *ngIf="hotel.sale_price"\n            ion-text>{{ hotel.sale_price | currency:\'USD\':true }}</span><span ion-text class="text-white">/night</span>\n      <span class="origin-price" *ngIf="hotel.sale_price" ion-text color="light">{{ hotel.price | currency:\'USD\':true }}</span>\n    </div>\n    <div class="pull-right">\n      <a href="#rooms">\n        <button ion-button class="white-bg">Select a Room</button>\n      </a>\n      <ion-fab bottom center edge>\n        <button ion-fab mini color="secondary">\n          <ion-icon name="heart" class="text-white"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n    <div class="clear"></div>\n  </div>\n\n  <!--rating info-->\n  <div class="border-bottom dark-bg" padding>\n    <div class="pull-left">\n      <span ion-text>\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n        <ion-icon name="star" class="text-white"></ion-icon>\n      </span> <!-- {{ hotel.rating }} -->\n      <span ion-text class="text-white">of <strong>5</strong></span>\n    </div>\n    <div class="pull-right">\n      <span ion-text class="text-white" tappable (click)="viewReviews()">VIEW ALL <span class="bold">{{ hotel.reviews.length }} REVIEWS</span></span>\n    </div>\n    <div class="clear"></div>\n  </div>\n\n  <!-- Show map here -->\n  <div id="map-detail"></div>\n\n  <!--hotel description-->\n  <p class="border-bottom" padding no-margin ion-text color="primary">\n    {{ hotel.description }}\n  </p>\n\n  <!--services-->\n  <ion-grid class="border-bottom detail-bg">\n    <ion-row>\n      <ion-col *ngFor="let service of hotel.services" text-center>\n        <ion-icon class="text-2x" name="{{ service.icon }}" color="primary"></ion-icon>\n        <span class="service-name" ion-text color="primary">{{ service.name }}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- all rooms -->\n  <div class="border-bottom" padding>\n    <h5 ion-text color="primary">Rooms</h5>\n    <div *ngIf="hotel.free_wifi">\n      <ion-icon name="checkmark" class="text-green"></ion-icon>\n      <span ion-text color="dark">All rooms include free wifi internet</span>\n    </div>\n  </div>\n\n  <!--rooms-->\n  <div class="rooms" id="rooms">\n    <div class="border-bottom detail-bg" padding *ngFor="let room of hotel.rooms">\n      <div class="room-info card" [hidden]="!room.active">\n        <div class="room-image" [ngStyle]="{\'background-image\': \'url(\' + room.thumb + \')\'}"></div>\n        <div class="border-bottom" padding>\n          <div>\n            <div class="pull-left">\n              <h6 ion-text color="dark">{{ room.name }}</h6>\n            </div>\n            <div class="pull-right">\n              <span class="bold" ion-text color="primary">{{ room.price | currency:\'USD\':true }}</span>\n              <span ion-text color="primary">/night</span>\n            </div>\n            <div class="clear"></div>\n          </div>\n          <div class="room-features">\n            <div class="pull-left">\n              <div>\n                <ion-icon name="checkmark" class="text-green"></ion-icon>\n                {{ room.beds }}\n              </div>\n              <div *ngIf="hotel.free_wifi">\n                <ion-icon name="checkmark" class="text-green"></ion-icon>\n                <span>Includes free wifi internet</span>\n              </div>\n              <div *ngIf="room.refundable">\n                <ion-icon name="checkmark" class="text-green"></ion-icon>\n                Refundable\n              </div>\n              <div *ngIf="!room.refundable">\n                <ion-icon name="md-close-circle" color="danger"></ion-icon>\n                Non-refundable\n              </div>\n            </div>\n            <div class="pull-right" text-right>\n              <button ion-button tappable (click)="checkout()">Book</button>\n            </div>\n            <div class="clear"></div>\n          </div>\n        </div>\n        <div padding>\n          <span ion-text color="primary" class="bold">Room information</span>\n          <span class="pull-right" [hidden]="room.show_info" tappable (click)="room.show_info = true">\n            <ion-icon name="md-arrow-down" color="primary"></ion-icon>\n          </span>\n          <p [hidden]="!room.show_info" ion-text color="primary">{{ room.room_info }}</p>\n          <span class="pull-right" [hidden]="!room.show_info" tappable (click)="room.show_info = false">\n            <ion-icon name="md-arrow-up" color="primary"></ion-icon>\n          </span>\n          <div class="clear"></div>\n        </div>\n      </div>\n\n      <div [hidden]="room.active">\n        <div class="pull-left">\n          <h6 ion-text color="primary">{{ room.name }}</h6>\n        </div>\n        <div class="pull-right">\n          <span class="bold" ion-text color="secondary">{{ room.price | currency:\'USD\':true }}</span>\n          <span ion-text color="secondary">/night</span>\n        </div>\n        <div class="clear"></div>\n      </div>\n      <div [hidden]="room.active">\n        <div class="pull-left">\n          <div class="mb-half">{{ room.beds }}</div>\n          <ion-badge color="secondary">{{ room.numb_available_rooms }} rooms left</ion-badge>\n          <!-- <span ion-text color="dark">{{ room.numb_available_rooms }} rooms left</span> -->\n        </div>\n        <div class="pull-right" text-right>\n          <button ion-button color="secondary" tappable (click)="viewRoom(room)">\n            <span ion-text class="text-white">View Room</span>\n          </button>\n        </div>\n        <div class="clear"></div>\n      </div>\n    </div>\n  </div>\n\n  <!--hotel info-->\n  <div class="border-bottom" padding>\n    <h6 ion-text color="primary">Hotel Features</h6>\n    <p>{{ hotel.features }}</p>\n\n    <h6 ion-text color="primary">Room Amenities</h6>\n    <p>{{ hotel.room_amenities }}</p>\n\n    <h6 ion-text color="primary">Property Amenities</h6>\n    <p>{{ hotel.room_amenities }}</p>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/hotel-detail/hotel-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], HotelDetailPage);

//# sourceMappingURL=hotel-detail.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchLocationPage = (function () {
    function SearchLocationPage(nav) {
        this.nav = nav;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Rio de Janeiro, Brazil"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (id) {
        // go back search hotel page
        this.nav.pop();
    };
    return SearchLocationPage;
}());
SearchLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-location',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/search-location/search-location.html"*/'<!-- # -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-no-border">\n    <!--nearby places-->\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item.id)">\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n    <!--recent places-->\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item.id)">\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/search-location/search-location.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], SearchLocationPage);

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_reviews_tab_reviews__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewsPage = (function () {
    function ReviewsPage(nav, hotelService) {
        this.nav = nav;
        this.hotelService = hotelService;
        // set tabs
        this.recent = __WEBPACK_IMPORTED_MODULE_3__tab_reviews_tab_reviews__["a" /* TabReviewsPage */];
        this.favorable = __WEBPACK_IMPORTED_MODULE_3__tab_reviews_tab_reviews__["a" /* TabReviewsPage */];
        this.critical = __WEBPACK_IMPORTED_MODULE_3__tab_reviews_tab_reviews__["a" /* TabReviewsPage */];
        // set hotel data
        this.hotel = hotelService.getItem(1);
    }
    return ReviewsPage;
}());
ReviewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reviews',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/reviews/reviews.html"*/'<!-- -->\n<ion-tabs color="primary" tabsPlacement="top">\n  <ion-tab tabTitle="RECENT" [root]="recent"></ion-tab>\n  <ion-tab tabTitle="FAVORABLE" [root]="favorable"></ion-tab>\n  <ion-tab tabTitle="CRITICAL" [root]="critical"></ion-tab>\n</ion-tabs>`\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/reviews/reviews.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__["a" /* HotelService */]])
], ReviewsPage);

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabReviewsPage = (function () {
    function TabReviewsPage(nav, hotelService, app) {
        this.nav = nav;
        this.hotelService = hotelService;
        this.app = app;
        // list of reviews
        this.reviews = [];
        // set hotel data
        this.hotel = hotelService.getItem(1);
        // filter reviews
        var tabId = this.nav.id;
        for (var i = 0; i < this.hotel.reviews.length; i++) {
            // if is recent tab
            if (tabId == 't0-0') {
                this.reviews.push(this.hotel.reviews[i]);
            }
            else if (tabId == 't0-1') {
                if (this.hotel.reviews[i].rating > 3) {
                    this.reviews.push(this.hotel.reviews[i]);
                }
            }
            else {
                if (this.hotel.reviews[i].rating <= 3) {
                    this.reviews.push(this.hotel.reviews[i]);
                }
            }
        }
    }
    // make array with range is n
    TabReviewsPage.prototype.range = function (n) {
        return new Array(n);
    };
    // dismiss
    TabReviewsPage.prototype.dismiss = function () {
        this.app.getRootNav().pop();
    };
    return TabReviewsPage;
}());
TabReviewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab-reviews',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/tab-reviews/tab-reviews.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar class="no-border" color="primary">\n    <button ion-button tappable (click)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>{{ hotel.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="rating" padding>\n    <!--rating-->\n    <ion-badge class="square" color="dark">{{ hotel.rating }}</ion-badge>\n    <span ion-text color="dark">of 5 - guest rating</span>\n  </div>\n\n  <!--list of reviews-->\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let review of reviews" text-wrap>\n      <div class="title">\n        <div class="pull-left bold">{{ review.title }}</div>\n        <div class="pull-right">{{ review.date }}</div>\n        <div class="clear"></div>\n        <div class="text-sm">\n          <ion-icon name="md-star" dark *ngFor="let start of range(review.rating)"></ion-icon>\n        </div>\n      </div>\n      <div>\n        {{ review.content }}\n      </div>\n      <div class="author">{{ review.username }} from {{ review.from }}</div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/tab-reviews/tab-reviews.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], TabReviewsPage);

//# sourceMappingURL=tab-reviews.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutHotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutHotelPage = (function () {
    function CheckoutHotelPage(nav, hotelService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.hotelService = hotelService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of nights
        this.nights = 7;
        // number of guests
        this.guests = 3;
        // date from
        this.dateFrom = new Date();
        // date to
        this.dateTo = new Date();
        // set sample data
        this.hotel = hotelService.getItem(1);
        this.room = this.hotel.rooms[0];
    }
    // process send button
    CheckoutHotelPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Booking Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    return CheckoutHotelPage;
}());
CheckoutHotelPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout-hotel',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/checkout-hotel/checkout-hotel.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Hotel Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-hotel detail-bg">\n  <div class="card round">\n    <div class="hotel-bg" [ngStyle]="{\'background-image\': \'url(\' + hotel.thumb + \')\'}">\n      <div class="bg-filter" text-center>\n        <div>\n          <h5 ion-text class="text-white" no-margin>{{ hotel.name }}</h5>\n          <span ion-text class="text-white">{{ dateFrom | date: \'MMM dd, yyyy\'}} - {{ dateTo | date: \'MMM dd, yyyy\'}}</span>\n          <div margin-top>\n            <span ion-text color="light">{{ hotel.address }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="border-bottom" padding>\n      <h5 no-margin ion-text color="primary" class="bold">{{ room.name }}</h5>\n      <span ion-text>{{ room.beds }}</span>\n      <div margin-top>\n        <ion-icon name="md-calendar" color="primary"></ion-icon>\n        <span ion-text>{{ nights }} nights</span>\n      </div>\n      <div>\n        <ion-icon name="person" color="primary"></ion-icon>\n        <span ion-text>{{ guests }} guests</span>\n      </div>\n    </div>\n\n    <!--total price-->\n    <div padding>\n      <h6 class="pull-left mt-half" no-margin ion-text>Total with Tax</h6>\n      <h4 class="pull-right bold" ion-text color="dark" no-margin>{{ nights * room.price | currency:\'USD\':true }}</h4>\n      <div class="clear"></div>\n    </div>\n  </div>\n\n  <!--more info-->\n  <div class="card round" margin-top>\n    <ion-item class="no-border">\n      <ion-icon name="contact" item-left color="primary"></ion-icon>\n      <div>\n        <span class="bold" ion-text color="primary">Guest Details</span>\n        <br/>\n        <span ion-text>Enter your information</span>\n      </div>\n    </ion-item>\n  </div>\n\n  <!--payment info-->\n  <div class="card round" margin-top>\n    <ion-item class="no-border">\n      <ion-icon name="md-card" item-left color="primary"></ion-icon>\n      <div>\n        <span class="bold" ion-text color="primary">Payment method</span>\n        <br/>\n        <span ion-text>Enter credit card</span>\n      </div>\n    </ion-item>\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/checkout-hotel/checkout-hotel.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], CheckoutHotelPage);

//# sourceMappingURL=checkout-hotel.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/notifications/notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	New booking success!\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	Activity rescheduled\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/notifications/notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCarsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cars_cars__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_location_search_location__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchCarsPage = (function () {
    function SearchCarsPage(nav) {
        this.nav = nav;
        // search condition
        this.search = {
            pickup: "Rio de Janeiro - Brazil",
            dropOff: "Same as pickup",
            from: new Date().toISOString(),
            to: new Date().toISOString(),
        };
    }
    // choose place
    SearchCarsPage.prototype.choosePlace = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__search_location_search_location__["a" /* SearchLocationPage */]);
    };
    // go to result page
    SearchCarsPage.prototype.doSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__cars_cars__["a" /* CarsPage */]);
    };
    return SearchCarsPage;
}());
SearchCarsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-cars',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/search-cars/search-cars.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <ion-icon name="car" item-start></ion-icon>\n      Search Cars\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="search-cars common-bg">\n  <!-- choose pickup and drop-off-->\n  <h6 ion-text no-margin color="primary" class="marginB-16px">\n    Pick-up / Drop-off\n  </h6>\n  <ion-list class="card mar">\n    <ion-item tappable (click)="choosePlace()">\n      <ion-icon name="pin" color="primary" item-left></ion-icon>\n      <span ion-text>{{ search.pickup }}</span>\n    </ion-item>\n    <ion-item tappable (click)="choosePlace()">\n      <ion-icon name="pin" color="primary" item-left></ion-icon>\n      <span ion-text>{{ search.dropOff }}</span>\n    </ion-item>\n  </ion-list>\n\n  <hr class="marginB-16px">\n\n  <!--choose time-->\n  <ion-list class="card">\n    <ion-item>\n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime ion-text displayFormat="DD/MM/YYYY h:mm A" pickerFormat="DD/MM/YYYY h:mm A" [(ngModel)]="search.from"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime ion-text displayFormat="DD/MM/YYYY h:mm A" pickerFormat="DD/MM/YYYY h:mm A" [(ngModel)]="search.to"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <hr>\n\n  <h6 ion-text color="primary">\n    Make:\n  </h6>\n  <ion-list class="card">\n    <ion-item>\n      <ion-label ion-text color="primary">One or more:</ion-label>\n      <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Cancel" okText="OK">\n        <ion-option value="audi" selected="true">Audi</ion-option>\n        <ion-option value="bmw">BMW</ion-option>\n        <ion-option value="chevrolet" selected="true">Chevrolet</ion-option>\n        <ion-option value="dodge">Dodge</ion-option>\n        <ion-option value="fiat">FIAT</ion-option>\n        <ion-option value="ford">Ford</ion-option>\n        <ion-option value="honda">Honda</ion-option>\n        <ion-option value="toyota">Toyota</ion-option>\n        <ion-option value="volvo">Volvo</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n    <ion-icon name="search"></ion-icon> Search\n  </button>\n</ion-content>\n\n<ion-footer>\n  <!-- search button -->\n\n</ion-footer>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/search-cars/search-cars.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], SearchCarsPage);

//# sourceMappingURL=search-cars.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_car_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_detail_car_detail__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarsPage = (function () {
    function CarsPage(nav, carService) {
        this.nav = nav;
        this.carService = carService;
        // number of days
        this.numDays = 3;
        // set sample data
        this.shops = carService.getAll();
    }
    // view car
    CarsPage.prototype.viewDetail = function (classId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__car_detail_car_detail__["a" /* CarDetailPage */], { id: classId });
    };
    return CarsPage;
}());
CarsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cars',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/cars/cars.html"*/'<!--  -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Cars</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="cars">\n  <!--  -->\n  <ion-toolbar padding color="secondary">\n    <p ion-text no-margin class="text-white">\n      <strong>4</strong> results found!\n    </p>\n  </ion-toolbar>\n\n  <!--list of car shops-->\n  <div class="car card border-bottom" *ngFor="let shop of shops" tappable (click)="viewDetail(shop.id)">\n    <div class="background" [ngStyle]="{\'background-image\': \'url(\' + shop.thumb + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left" ion-text class="text-white">{{ shop.name }}</h6>\n          <h6 class="pull-right" ion-text class="text-white">Daily {{ shop.price | currency:\'USD\':true }}</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div padding class="detail-bg">\n      <ion-icon name="person" color="primary"></ion-icon>\n      <span ion-text margin-right>{{ shop.passengers_from }}-{{ shop.passengers_to }}</span>\n      <ion-icon name="md-briefcase" color="primary"></ion-icon>\n      <span ion-text>{{ shop.luggage }}</span>\n      <span class="pull-right" ion-text color="primary">Total <strong>{{ shop.price * numDays | currency:\'USD\':true }}</strong></span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/cars/cars.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_car_service__["a" /* CarService */]])
], CarsPage);

//# sourceMappingURL=cars.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_car_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_car_checkout_car__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarDetailPage = (function () {
    function CarDetailPage(nav, carService) {
        this.nav = nav;
        this.carService = carService;
        // number of days
        this.numDays = 3;
        // set sample data
        this.shop = carService.getItem(1);
    }
    // go to checkout page
    CarDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_car_checkout_car__["a" /* CheckoutCarPage */]);
    };
    return CarDetailPage;
}());
CarDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-car-detail',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/car-detail/car-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Car Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <img class="full-width to-top" src="{{ shop.thumb }}" alt="">\n  <!-- shop name and infomation-->\n  <div class="border-bottom detail-bg" padding>\n    <h4 class="pull-left" no-margin ion-text color="primary">{{ shop.name }}</h4>\n    <div class="pull-right">\n      <span ion-text text-center>average price</span>\n      <h5 class="bold" no-margin ion-text text-center color="primary">\n        {{ shop.price | currency:\'USD\':true }}\n      </h5>\n    </div>\n    <div class="clear"></div>\n    <div>\n      <span>{{ shop.slogan }}</span>\n      <br/>\n      <span ion-text color="secondary">{{ shop.address }}</span>\n    </div>\n  </div>\n\n  <!-- car info -->\n  <div class="car car-info card round" margin *ngFor="let car of shop.cars">\n    <div class="car-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + car.thumb + \')\'}"></div>\n    <div class="border-bottom" padding>\n      <div class="pull-left">\n        <h5 no-margin ion-text color="primary">{{ car.name }}</h5>\n<!--         <span>{{ shop.slogan }}</span> -->\n      </div>\n      <div class="pull-right" text-right>\n        <h6 no-margin color="car-ion-text color">Daily {{ car.price | currency:\'USD\':true }}</h6>\n        <span ion-text color="dark">Total <strong>{{ car.price * numDays | currency:\'USD\':true }}</strong></span>\n      </div>\n      <div class="clear"></div>\n    </div>\n    <div padding>\n      <div class="pull-left">\n        <div>\n          <ion-icon name="person" color="dark"></ion-icon>\n          <span ion-text color="dark" margin-right>{{ car.passengers }} Passengers</span>\n        </div>\n        <div>\n          <ion-icon name="md-briefcase" color="dark"></ion-icon>\n          <span ion-text color="dark">{{ shop.luggage }} Bags</span>\n        </div>\n        <div>\n          <ion-icon name="md-checkmark" color="dark"></ion-icon>\n          <span ion-text color="dark" *ngIf="car.automatic_transmission">Automatic transmission</span>\n          <span ion-text color="dark" *ngIf="!car.automatic_transmission">Manual transmission</span>\n        </div>\n      </div>\n      <div class="pull-right">\n        <button ion-button color="secondary" tappable (click)="checkout()">Reserve</button>\n      </div>\n      <div class="clear"></div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/car-detail/car-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_car_service__["a" /* CarService */]])
], CarDetailPage);

//# sourceMappingURL=car-detail.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_car_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutCarPage = (function () {
    function CheckoutCarPage(nav, carService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.carService = carService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // date from
        this.dateFrom = new Date();
        // date to
        this.dateTo = new Date();
        // set sample data
        this.shop = carService.getItem(1);
        this.car = this.shop.cars[0];
    }
    // process send button
    CheckoutCarPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Car Rent Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    return CheckoutCarPage;
}());
CheckoutCarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout-car',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/checkout-car/checkout-car.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Car Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-car common-bg">\n  <!--trip information-->\n  <div class="checkout-info car-info card round">\n    <div class="car-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + car.thumb + \')\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col width-66>\n          <h5 ion-text color="dark" class="bold">{{ shop.name }}</h5>\n          <div>\n            <h6 ion-text color="primary">{{ car.name }}</h6>\n          </div>\n          <div margin-top>\n            <span ion-text>{{ dateFrom | date: \'MMM dd, h:mm\' }} - {{ dateTo | date: \'MMM dd, h:mm\' }}</span>\n            <br/>\n            <span ion-text>{{ car.address }}</span>\n          </div>\n          <div margin-top>\n\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text color="dark">Total with Tax</span>\n          <h5 no-margin>{{ car.price | currency:\'USD\':true }}</h5>\n          <span ion-text color="dark">Due at pickup</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!--more info-->\n  <div class="card round" margin-top>\n    <ion-item class="no-border">\n      <ion-icon name="contact" item-left color="primary"></ion-icon>\n      <div>\n        <span class="bold" ion-text color="primary">Guest Details</span>\n        <br/>\n        <span ion-text>Enter your information</span>\n      </div>\n    </ion-item>\n  </div>\n\n  <!--payment info-->\n  <div class="card round" margin-top>\n    <ion-item class="no-border">\n      <ion-icon name="md-card" item-left color="primary"></ion-icon>\n      <div>\n        <span class="bold" ion-text color="primary">Payment method</span>\n        <br/>\n        <span ion-text>Enter credit card</span>\n      </div>\n    </ion-item>\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/checkout-car/checkout-car.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_car_service__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], CheckoutCarPage);

//# sourceMappingURL=checkout-car.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trips_trips__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_location_search_location__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchTripsPage = (function () {
    function SearchTripsPage(nav) {
        this.nav = nav;
        // search condition
        this.search = {
            name: "Location",
            date: new Date().toISOString()
        };
    }
    // go to result page
    SearchTripsPage.prototype.doSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__trips_trips__["a" /* TripsPage */]);
    };
    // choose place
    SearchTripsPage.prototype.choosePlace = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__search_location_search_location__["a" /* SearchLocationPage */]);
    };
    return SearchTripsPage;
}());
SearchTripsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-trips',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/search-trips/search-trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Search Activities</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="search-trips common-bg">\n  <!--search form-->\n  <ion-list class="card">\n    <ion-item tappable (click)="choosePlace()">\n      <ion-icon name="search" color="primary" item-left></ion-icon>\n      <span>{{ search.name }}</span>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" [(ngModel)]="search.date"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n    <ion-icon name="search"></ion-icon> Search\n  </button>\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/search-trips/search-trips.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], SearchTripsPage);

//# sourceMappingURL=search-trips.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripsPage = (function () {
    function TripsPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // set sample data
        this.trips = tripService.getAll();
    }
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
    };
    return TripsPage;
}());
TripsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/trips/trips.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Activities</ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="secondary">\n    <p ion-text no-margin class="text-white">\n      <strong>4</strong> results found!\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips cars detail-bg">\n  <!--list of trips-->\n  <div class="trip car card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n          <h6 class="pull-right text-white" ion-text>{{ trip.price_adult | currency:\'USD\':true }}</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="time" class="text-white"></ion-icon>\n      <span ion-text class="text-white">{{ trip.time }}</span>\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/trips/trips.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripsPage);

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage = (function () {
    function TripDetailPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage;
}());
TripDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/trip-detail/trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ trip.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img src="{{ image }}" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom detail-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" color="primary"></ion-icon>\n            <span ion-text color="secondary">{{ trip.time }}</span>\n            <ion-icon name="checkbox-outline" margin-left color="primary" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text color="secondary" *ngIf="trip.free_cancellation">Free cancellation</span>\n            <ion-icon name="list-box" margin-left color="primary" *ngIf="trip.electric_voucher"></ion-icon>\n            <span ion-text color="secondary" *ngIf="trip.electric_voucher">Electronic voucher</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n    <ul class="highlight">\n      <li *ngFor="let highlight of trip.highlights">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ highlight }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--booking form-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>{{ trip.sub_name }}</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <ion-col class="adult" width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_adult | currency:\'USD\':true }}</strong> Adults</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ adults }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_child | currency:\'USD\':true }}</strong> Child (0-12 years)</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ children }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n<!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n      <!--booking button-->\n      <button ion-button class="pull-right" color="secondary" tappable (click)="checkout()">Book Now {{ adults * trip.price_adult +\n        children * trip.price_child | currency:\'USD\':true }}\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n\n  <!--description-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">DESCRIPTION</span>\n    <p ion-text>{{ trip.description }}</p>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">LOCATION</span>\n    <p ion-text>{{ trip.location }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/trip-detail/trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage);

//# sourceMappingURL=trip-detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutTripPage = (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    return CheckoutTripPage;
}());
CheckoutTripPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout-trip',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/checkout-trip/checkout-trip.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Activity Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-trip common-bg">\n  <!--trip information-->\n  <div class="trip-info card round">\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col width-66>\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n          <div>\n            <span class="bold">{{ trip.sub_name }}</span>\n            <br/>\n            <span ion-text color="dark">{{ adults }} Adults</span>\n          </div>\n          <div margin-top>\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n            <br/>\n            <span ion-text>{{ trip.location }}</span>\n          </div>\n          <div margin-top>\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text>Total with Tax</span>\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!--more info-->\n  <div class="card round" margin-top>\n    <ion-item class="no-border">\n      <ion-icon name="contact" item-left color="primary"></ion-icon>\n      <div>\n        <span class="bold" ion-text color="primary">Guest Details</span>\n        <br/>\n        <span ion-text>Enter your information</span>\n      </div>\n    </ion-item>\n  </div>\n\n  <!--payment info-->\n  <div class="card round" margin-top>\n    <ion-item class="no-border">\n      <ion-icon name="md-card" item-left color="primary"></ion-icon>\n      <div>\n        <span class="bold" ion-text color="primary">Payment method</span>\n        <br/>\n        <span ion-text>Enter credit card</span>\n      </div>\n    </ion-item>\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/checkout-trip/checkout-trip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], CheckoutTripPage);

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotel_detail_hotel_detail__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotelPage = HotelPage_1 = (function () {
    function HotelPage(nav, hotelService, platform) {
        this.nav = nav;
        this.hotelService = hotelService;
        this.platform = platform;
        // set sample data
        this.hotels = hotelService.getAll();
    }
    HotelPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    // view hotel detail
    HotelPage.prototype.viewHotel = function (hotelId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__hotel_detail_hotel_detail__["a" /* HotelDetailPage */], { id: hotelId });
    };
    HotelPage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.hotels[0].location.lat, this.hotels[0].location.lon);
        var mapOptions = {
            center: latLng,
            zoom: 11,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // add markers to map by hotel
        for (var i = 0; i < this.hotels.length; i++) {
            var hotel = this.hotels[i];
            new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(hotel.location.lat, hotel.location.lon)
            });
        }
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
    };
    // view all hotels
    HotelPage.prototype.viewHotels = function () {
        this.nav.push(HotelPage_1);
    };
    return HotelPage;
}());
HotelPage = HotelPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hotel',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/hotel/hotel.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Hotel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!-- Show map here -->\n  <div id="map"></div>\n\n  <ion-toolbar color="secondary" padding-horizontal>\n    <p ion-text class="text-white">\n      <strong>8</strong> results found!\n    </p>\n  </ion-toolbar>\n\n  <!--list of hotels-->\n  <ion-grid class="list-hotels" no-padding>\n    <ion-row *ngFor="let hotel of hotels" no-padding>\n      <ion-col no-padding>\n        <div class="hotel-bg" [ngStyle]="{\'background-image\': \'url(\' + hotel.thumb + \')\'}" tappable (click)="viewHotel(hotel.id)">\n          <div class="bg-filter">\n            <div class="discount" *ngIf="hotel.sale_price">{{ (100 * (1 - hotel.price / hotel.sale_price)).toFixed(0)\n              }}%\n            </div>\n            <div class="bottom-info">\n\n              <div>\n                <div class="pull-left">\n                  <h5 ion-text class="text-white">{{ hotel.name }}</h5>\n                </div>\n                <div class="pull-right">\n                  <ion-badge class="square badge-right" color="primary">\n                  {{ hotel.numb_available_rooms }} rooms left\n                  </ion-badge>\n                </div>\n                <div class="clear"></div>\n              </div>\n\n              <div>\n                <div class="pull-left">\n                  <ion-badge class="square" color="secondary">{{ hotel.rating }}</ion-badge>\n                  <span class="rating-label text-white" ion-text> of 5 - guest rating</span>\n                </div>\n                <div class="pull-right">\n                  <span class="price text-white" *ngIf="!hotel.sale_price"\n                        ion-text>{{ hotel.price | currency:\'USD\':true:\'2.0\' }}</span>\n                  <span class="origin-price" *ngIf="hotel.sale_price">{{ hotel.price | currency:\'USD\':true:\'2.0\' }}</span>\n                  <span class="sale-price text-white bold" *ngIf="hotel.sale_price" ion-text>{{ hotel.sale_price | currency:\'USD\':true:\'2.0\' }}</span>\n                </div>\n                <div class="clear"></div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/hotel/hotel.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], HotelPage);

var HotelPage_1;
//# sourceMappingURL=hotel.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(nav) {
        this.nav = nav;
    }
    // logout
    AccountPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/account/account.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border" color="primary">\n    <ion-title>\n      <ion-icon name="cog"></ion-icon>\n      Settings\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n        <ion-option value="K">Kilometers (m²)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Notifications?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n  <!-- App settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>  \n\n  <!--sign out button-->\n  <button ion-button color="secondary" full tappable (click)="logout()">LOG OUT</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/account/account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PertoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PertoPage = (function () {
    function PertoPage(nav) {
        this.nav = nav;
    }
    // logout
    PertoPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return PertoPage;
}());
PertoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'perto-min',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/perto-mim/perto-mim.html"*/'<ion-header>\n    <ion-navbar class="no-border" color="primary">\n        <ion-title>\n            Perto de Mim\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n    [ incluir API Google Maps ]\n</ion-content>'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/perto-mim/perto-mim.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], PertoPage);

//# sourceMappingURL=perto-mim.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/register/register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-white" no-margin>\n        ion<strong>Booking</strong>\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <ion-list class="list-form" padding>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-white"></ion-icon>\n          Full Name\n        </ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div margin-top>\n      <button ion-button block color="primary" tappable (click)="register()">\n        SIGN UP\n      </button>\n\n      <p text-center ion-text color="light">Or Sign Up with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="light" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(228);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hotel_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_place_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_activity_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_car_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_trip_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_car_detail_car_detail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cars_cars__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_checkout_car_checkout_car__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkout_hotel_checkout_hotel__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkout_trip_checkout_trip__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hotel_hotel__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_hotel_detail_hotel_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_reviews_reviews__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_search_cars_search_cars__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_search_location_search_location__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_search_trips_search_trips__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tab_reviews_tab_reviews__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_trip_detail_trip_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_perto_mim_perto_mim__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_car_detail_car_detail__["a" /* CarDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cars_cars__["a" /* CarsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_checkout_car_checkout_car__["a" /* CheckoutCarPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_checkout_hotel_checkout_hotel__["a" /* CheckoutHotelPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_hotel_hotel__["a" /* HotelPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_hotel_detail_hotel_detail__["a" /* HotelDetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_reviews_reviews__["a" /* ReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_search_cars_search_cars__["a" /* SearchCarsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_search_trips_search_trips__["a" /* SearchTripsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tab_reviews_tab_reviews__["a" /* TabReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_perto_mim_perto_mim__["a" /* PertoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                iconMode: 'md',
                mode: 'md'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_car_detail_car_detail__["a" /* CarDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cars_cars__["a" /* CarsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_checkout_car_checkout_car__["a" /* CheckoutCarPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_checkout_hotel_checkout_hotel__["a" /* CheckoutHotelPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_hotel_hotel__["a" /* HotelPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_hotel_detail_hotel_detail__["a" /* HotelDetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_reviews_reviews__["a" /* ReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_search_cars_search_cars__["a" /* SearchCarsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_search_trips_search_trips__["a" /* SearchTripsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tab_reviews_tab_reviews__["a" /* TabReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_perto_mim_perto_mim__["a" /* PertoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_4__services_place_service__["a" /* PlaceService */],
            __WEBPACK_IMPORTED_MODULE_5__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_6__services_car_service__["a" /* CarService */],
            __WEBPACK_IMPORTED_MODULE_7__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_6__services_car_service__["a" /* CarService */],
            __WEBPACK_IMPORTED_MODULE_7__services_trip_service__["a" /* TripService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOTELS; });
var HOTELS = [
    {
        id: 1,
        name: "Copacabana Hotel",
        rating: 5,
        price: 150,
        sale_price: 120,
        location: {
            lat: -22.906847,
            lon: -43.172896,
        },
        address: "Av Pres. Antônio Carlos, 223",
        description: "Situated in the best rated area in Rio de Janeiro, this property has an excellent location.",
        location_text: "Located in the Copacabana district in Rio de Janeiro, 80 m from Copacabana Beach, Ritz Copacabana Boutique Hotel features an outdoor pool and views of the city. Guests can enjoy the on-site bar. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "Every room at this hotel is air conditioned and has a flat-screen TV. Each room comes with a private bathroom. For your comfort, you will find free toiletries and a hair dryer. ",
        thumb: "assets/img/hotel/thumb/hotel_1.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_3.jpg",
            "assets/img/hotel/thumb/hotel_4.jpg",
            "assets/img/hotel/thumb/hotel_5.jpg",
            "assets/img/hotel/thumb/hotel_6.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "md-checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "md-wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "md-cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "md-restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "md-easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "md-sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 3,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 2,
        name: "La Belle Place",
        rating: 4.7,
        price: 120,
        sale_price: 80,
        location: {
            lat: -22.969778,
            lon: -43.186859,
        },
        address: "Av Copacabana, 44",
        description: "Family-friendly place in Rio de Janeiro, close to Flamengo Beach.",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Flamengo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_7.jpg",
        images: [],
        services: [],
        numb_available_rooms: 12,
        reviews: [],
        rooms: []
    },
    {
        id: 3,
        name: "Marshal Hotel",
        rating: 4.5,
        price: 100,
        sale_price: 70,
        location: {
            lat: -22.984337,
            lon: -43.223142,
        },
        address: "Av Ataulfo de Paiva, 98",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_8.jpg",
        images: [],
        services: [],
        numb_available_rooms: 5,
        reviews: [],
        rooms: []
    },
    {
        id: 4,
        name: "Pousada Marés do Amanhã",
        rating: 3.3,
        price: 40,
        sale_price: 30,
        location: {
            lat: -22.933129,
            lon: -43.177427,
        },
        address: "Praia do Flamengo",
        description: "Family-friendly place in Rio de Janeiro, close to Flamengo Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Flamengo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_8.jpg",
        images: [],
        services: [],
        numb_available_rooms: 5,
        reviews: [],
        rooms: []
    },
    {
        id: 5,
        name: "Ipanema Garden Hotel",
        rating: 3.5,
        price: 50,
        sale_price: 40,
        location: {
            lat: -22.984667,
            lon: -43.198593,
        },
        address: "Av Vieira Solto, 13",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_9.jpg",
        images: [],
        services: [],
        numb_available_rooms: 5,
        reviews: [],
        rooms: []
    },
    {
        id: 6,
        name: "Tijuquinha Plaza Hotel",
        rating: 4.1,
        price: 65,
        sale_price: 45,
        location: {
            lat: -23.000371,
            lon: -43.365895,
        },
        address: "Av Ayrton Senna, 877",
        description: "Family-friendly place in Rio de Janeiro, close to Botafogo Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Botafogo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_10.jpg",
        images: [],
        services: [],
        numb_available_rooms: 5,
        reviews: [],
        rooms: []
    },
    {
        id: 7,
        name: "Pousada Maresias",
        rating: 4.0,
        price: 100,
        sale_price: 70,
        location: {
            lat: -23.791402,
            lon: -45.567807,
        },
        address: "Alameda Água Branca, 123",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_11.jpg",
        images: [],
        services: [],
        numb_available_rooms: 5,
        reviews: [],
        rooms: []
    },
    {
        id: 8,
        name: "Solar Beach Hotel",
        rating: 4.1,
        price: 90,
        sale_price: 80,
        location: {
            lat: -9.010380,
            lon: -35.220805,
        },
        address: "Rua Jangadeiros",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_8.jpg",
        images: [],
        services: [],
        numb_available_rooms: 5,
        reviews: [],
        rooms: []
    }
];
//# sourceMappingURL=mock-hotels.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_hotels__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelService = (function () {
    function HotelService() {
        this.hotels = __WEBPACK_IMPORTED_MODULE_1__mock_hotels__["a" /* HOTELS */];
    }
    HotelService.prototype.getAll = function () {
        return this.hotels;
    };
    HotelService.prototype.getItem = function (id) {
        for (var i = 0; i < this.hotels.length; i++) {
            if (this.hotels[i].id === parseInt(id)) {
                return this.hotels[i];
            }
        }
        return null;
    };
    HotelService.prototype.remove = function (item) {
        this.hotels.splice(this.hotels.indexOf(item), 1);
    };
    return HotelService;
}());
HotelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HotelService);

//# sourceMappingURL=hotel-service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_places__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceService = (function () {
    function PlaceService() {
        this.places = __WEBPACK_IMPORTED_MODULE_1__mock_places__["a" /* PLACES */];
    }
    PlaceService.prototype.getAll = function () {
        return this.places;
    };
    PlaceService.prototype.getItem = function (id) {
        for (var i = 0; i < this.places.length; i++) {
            if (this.places[i].id === parseInt(id)) {
                return this.places[i];
            }
        }
        return null;
    };
    PlaceService.prototype.remove = function (item) {
        this.places.splice(this.places.indexOf(item), 1);
    };
    return PlaceService;
}());
PlaceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PlaceService);

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLACES; });
var PLACES = [];
//# sourceMappingURL=mock-places.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    return ActivityService;
}());
ActivityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ActivityService);

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARS; });
var CARS = [
    {
        id: 1,
        name: "Localize Autos",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_1.jpg",
        price: 100,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_1.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 1,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_4.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    },
    {
        id: 2,
        name: "Beach Cars",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_2.jpg",
        price: 250,
        cars: []
    },
    {
        id: 3,
        name: "Speedy Cars",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_3.jpg",
        price: 200,
        cars: []
    },
    {
        id: 4,
        name: "J&F Rent a Car",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_4.jpg",
        price: 350,
        cars: []
    }
];
//# sourceMappingURL=mock-cars.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_5.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [],
        highlights: []
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/app/app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-fab top right>\n        <button ion-fab mini color="dark" menuClose>\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-fab>\n\n      <ion-grid>\n        <ion-row justify-content-center>\n          <ion-col padding-left padding-right padding-top col-auto>\n              <div class="user-avatar"></div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-center>\n          <ion-col padding-left padding-right padding-bottom text-center col-auto>\n            <h2 ion-text color="light" class="no-margin bold">\n              João Firmino\n            </h2>\n            <span ion-text color="secondary">firminoata@gmail.com</span>\n            <div padding-top>\n              <button ion-button icon-left small color="secondary">\n                <ion-icon name="contact"></ion-icon>\n                Edit Profile\n              </button>\n              <button ion-button icon-left small color="secondary" menuClose tappable (click)="logout()">\n                <ion-icon name="log-out"></ion-icon>\n                Log Out\n              </button>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="other-data" padding-vertical>\n          <ion-col text-center class="column">\n            <span ion-text color="light" class="bold">Points</span>\n            <h5 ion-text no-margin class="text-1x text-white">1124</h5>\n          </ion-col>\n          <ion-col text-center class="column">\n            <span ion-text color="light" class="bold">Location</span>\n            <h5 ion-text no-margin class="text-1x text-white">São Paulo/BR</h5>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item class="text-1x">\n        <ion-icon name="briefcase" color="warning"></ion-icon> \n        <span ion-text color="primary">Bookings</span>\n      </button>\n      <button ion-item class="text-1x">\n        <ion-icon name="heart" color="warning"></ion-icon> \n        <span ion-text color="primary">Favorites</span>\n      </button>\n      <button ion-item class="text-1x">\n        <ion-icon name="chatbubbles" color="warning"></ion-icon> \n        <span ion-text color="primary">My Reviews</span>\n      </button>\n      <button ion-item class="text-1x">\n        <ion-icon name="map" color="warning"></ion-icon> \n        <span ion-text color="primary">Travel Guides</span>\n      </button>\n      <button ion-item class="text-1x">\n        <ion-icon name="help-buoy" color="warning"></ion-icon> \n        <span ion-text color="primary">Help Center</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotel_detail_hotel_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_cars_search_cars__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_trips_search_trips__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hotel_hotel__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__perto_mim_perto_mim__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(nav, menuCtrl, modalCtrl, popoverCtrl, hotelService) {
        this.nav = nav;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.hotelService = hotelService;
        this.dDate = new Date();
        this.searchQuery = '';
        this.showItems = false;
        // search conditions
        this.checkin = {
            name: "Check-in",
            date: this.dDate.toISOString()
        };
        this.checkout = {
            name: "Check-out",
            date: new Date(this.dDate.setDate(this.dDate.getDate() + 1)).toISOString()
        };
        // set sample data
        this.menuCtrl.swipeEnable(true, 'authenticated');
        this.hotels = hotelService.getAll();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    HomePage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.hotels[0].location.lat, this.hotels[0].location.lon);
        var mapOptions = {
            center: latLng,
            zoom: 11,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById("home-map"), mapOptions);
        // add markers to map by hotel
        for (var i = 0; i < this.hotels.length; i++) {
            var hotel = this.hotels[i];
            new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(hotel.location.lat, hotel.location.lon)
            });
        }
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
    };
    HomePage.prototype.initializeItems = function () {
        this.items = [
            'La Belle Place - Rio de Janeiro',
            'Marshall Hotel - Marshall Islands',
            'Maksoud Plaza - São Paulo',
            'Hotel Copacabana - Rio de Janeiro',
            'Pousada Marés do amanhã - Maragogi'
        ];
    };
    HomePage.prototype.itemSelected = function (item) {
        this.hotellocation = item;
        this.showItems = false;
    };
    HomePage.prototype.childrenArr = function (chil) {
        var child = Number(chil);
        this.childs = Array(child).fill(0).map(function (v, i) { return i; });
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.showItems = true;
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.showItems = false;
        }
    };
    // view hotel detail
    HomePage.prototype.viewHotel = function (hotelId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__hotel_detail_hotel_detail__["a" /* HotelDetailPage */], { id: hotelId });
    };
    // view all hotels
    HomePage.prototype.viewHotels = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__hotel_hotel__["a" /* HotelPage */]);
    };
    // go to search car page
    HomePage.prototype.searchCar = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__search_cars_search_cars__["a" /* SearchCarsPage */]);
    };
    // go to search trip page
    HomePage.prototype.searchTrip = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_trips_search_trips__["a" /* SearchTripsPage */]);
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__account_account__["a" /* AccountPage */]);
    };
    // go to perto de mim page
    HomePage.prototype.gotoPerto = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__perto_mim_perto_mim__["a" /* PertoPage */]);
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/home/home.html"*/'<!-- -->\n<ion-header class="animated fadeIn no-shadow">\n  \n    <ion-navbar class="no-border" color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <div ion-text class="icon-title text-white"></div>\n        <span class="text-title">Hotel Plus</span>\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button tappable (click)="presentNotifications($event)">\n          <ion-icon name="notifications"></ion-icon>\n        </button>\n        <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="animated fadeIn common-bg">\n    <!-- CLIMA -->\n    <ion-item-group class="weather-widget">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="logo-hotel">\n            <img src="../assets/img/sheraton-logo.png" alt="">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ul class="clima">\n              <li class="local">\n                Rio de Janeiro\n                <span>céu claro</span>\n              </li>\n              <li class="temp"><i class="wi wi-night-sleet"></i> 26ºc</li>\n              <li class="max"><span>Max</span>26ºc</li>\n              <li class="min"><span>Min</span>18ºc</li>\n            </ul>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item-group>\n    \n    <!-- MENU PRINCIPAL -->\n    <ion-item-group class="menu-widget">\n      <ion-item>\n        <ion-grid> <!-- incluir atributo \'no-padding\' para remover o espaço da área -->\n  \n          <ion-row>\n            <ion-col col-6 col-md-3 tappable>\n              <button ion-button full class="button-custom icon-room" color="light">\n                <span class="button-label">Room Service</span>\n              </button>\n            </ion-col>\n            <ion-col col-6 col-md-3 tappable>\n              <button ion-button full class="button-custom icon-perto" color="light" (click)="gotoPerto()">\n                <span class="button-label">Perto de Mim</span>\n              </button>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col col-6 col-md-3 tappable>\n              <button ion-button full class="button-custom icon-extrato" color="light">\n                <span class="button-label">Extrato da Conta</span>\n              </button>\n            </ion-col>\n            <ion-col col-6 col-md-3 tappable>\n              <button ion-button full class="button-custom icon-ramais" color="light">\n                <span class="button-label">Lista de Ramais</span>\n              </button>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col col-6 col-md-3 tappable>\n              <button ion-button full class="button-custom icon-guestone" color="light">\n                <span class="button-label">GuestOne</span>\n              </button>\n            </ion-col>\n            <ion-col col-6 col-md-3 tappable>\n              <button ion-button full class="button-custom icon-service" color="light">\n                <span class="button-label">Guest Service</span>\n              </button>\n            </ion-col>\n          </ion-row>\n  \n        </ion-grid>\n      </ion-item>\n    </ion-item-group>\n  \n    <!-- HOTEIS DA REDE -->\n    <ion-item-group class="home-widget">\n      <ion-item-divider color="primary">\n        <h2 ion-text class="bold text-white">\n          <ion-icon name="pricetags"></ion-icon> \n          Demais Hotéis da Rede\n        </h2>\n      </ion-item-divider>\n  \n      <ion-item>\n        <ion-grid class="list-hotels primary-bg" no-padding>\n          <ion-row no-padding>\n            <ion-col *ngFor="let hotel of hotels; let i = index" col-6 col-md-3 tappable (click)="viewHotel(hotel.id)">\n              <div class="hotel-bg" [ngStyle]="{\'background-image\': \'url(\' + hotel.thumb + \')\'}" *ngIf="i < 4">\n                <div class="bg-filter">\n                  <div class="discount" *ngIf="hotel.sale_price">{{ (100 * (1 - hotel.price / hotel.sale_price)).toFixed(0)\n                    }}%\n                  </div>\n                  <div class="bottom-info">\n  \n                    <div>\n                      <div class="pull-left">\n                        <h5 ion-text class="text-white">{{ hotel.name }}</h5>\n                      </div>\n                      <div class="pull-right">\n                        <span class="origin-price hide-sm"\n                              *ngIf="hotel.sale_price">{{ hotel.price | currency:\'USD\':true }}</span>\n                      </div>\n                      <div class="clear"></div>\n                    </div>\n  \n                    <div>\n                      <div class="pull-left">\n                        <ion-badge class="square" color="secondary">{{ hotel.rating }}</ion-badge>\n                        <span class="rating-label text-white" ion-text> of 5 - guest rating</span>\n                      </div>\n                      <div class="pull-right">\n                        <span class="origin-price hide-lg"\n                              *ngIf="hotel.sale_price">{{ hotel.price | currency:\'USD\':true:\'2.0\' }}</span>\n                        <span class="price text-white" *ngIf="!hotel.sale_price"\n                              ion-text>{{ hotel.price | currency:\'USD\':true:\'2.0\' }}</span>\n                        <span class="sale-price" *ngIf="hotel.sale_price"\n                              ion-text class="text-white">{{ hotel.sale_price | currency:\'USD\':true:\'2.0\' }}</span>\n                      </div>\n                      <div class="clear"></div>\n                    </div>\n                  </div>\n  \n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  \n      </ion-item>\n    </ion-item-group>\n  \n  </ion-content>\n  '/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_hotel_service__["a" /* HotelService */]])
], HomePage);

// 
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(nav, forgotCtrl, menu, toastCtrl) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/login/login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login common-bg auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n    </div>\n\n    <!-- Login form -->\n    <ion-list class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <!-- ESQUECEU A SENHA -->\n    <!-- <p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Esqueceu a senha?</strong></p> -->\n\n    <div>\n      <button ion-button icon-start block color="secondary" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon> Entrar\n      </button>\n      \n      <ion-grid>\n        <p text-center ion-text color="light">ou entrar com:</p>\n      \n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <!-- CADASTRE-SE -->\n    <!--\n    <div text-center margin-top>\n      <span ion-text color="light" tappable (click)="register()">Novo aqui? <strong>Cadastre-se</strong></span>\n    </div>\n    -->\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benigro/Documents/Projects/hplus-pwa/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_cars__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = (function () {
    function CarService() {
        this.cars = __WEBPACK_IMPORTED_MODULE_1__mock_cars__["a" /* CARS */];
    }
    CarService.prototype.getAll = function () {
        return this.cars;
    };
    CarService.prototype.getItem = function (id) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id === parseInt(id)) {
                return this.cars[i];
            }
        }
        return null;
    };
    CarService.prototype.remove = function (item) {
        this.cars.splice(this.cars.indexOf(item), 1);
    };
    return CarService;
}());
CarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CarService);

//# sourceMappingURL=car-service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    return TripService;
}());
TripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TripService);

//# sourceMappingURL=trip-service.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map