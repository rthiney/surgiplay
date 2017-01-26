webpackJsonp([0,3],{

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["tokenNotExpired"])()) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/auth-guard.js.map

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rxjs_operators__);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "DataService", function() { return __WEBPACK_IMPORTED_MODULE_0__data_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "TodoItem", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["a"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__rxjs_operators__, "DataService")) __webpack_require__.d(exports, "DataService", function() { return __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__["DataService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__rxjs_operators__, "TodoItem")) __webpack_require__.d(exports, "TodoItem", function() { return __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__["TodoItem"]; });



//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/index.js.map

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(624);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });

//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/index.js.map

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, location, ngZone) {
        this.router = router;
        this.location = location;
        this.ngZone = ngZone;
        this.lock = new Auth0Lock('HWaGPswDnLy5BUO4DyJbNWCBfG5VqkCp', 'surgipal.auth0.com');
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.isDarkTheme = false;
    }
    AppComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        this.lock.show(function (err, profile, id_token) {
            if (err) {
                throw new Error(err);
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);
            console.log(_this.jwtHelper.decodeToken(id_token), _this.jwtHelper.getTokenExpirationDate(id_token), _this.jwtHelper.isTokenExpired(id_token));
            self.ngZone.run(function () { return self.loggedIn(); });
            self.router.navigate(['/profile']);
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.loggedIn();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AppComponent.prototype.isActive = function (path) {
        return this.location.path() === path;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(793),
            styles: [__webpack_require__(790)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/app.component.js.map

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(627);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/index.js.map

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaterialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaterialComponent = (function () {
    function MaterialComponent() {
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
    }
    MaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Update the value for the progress-bar on an interval.
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    };
    MaterialComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material',
            template: __webpack_require__(795),
            styles: [__webpack_require__(792)]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialComponent);
    return MaterialComponent;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/material.component.js.map

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_component__ = __webpack_require__(630);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_component__["a"]; });

//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/index.js.map

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);







//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/rxjs-operators.js.map

/***/ },

/***/ 474:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 474;


/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(628);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/main.js.map

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.id = id;
        });
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: "\n    <md-card>\n       <h2 md-line>About page</h2>\n       <p>Router param passed to page is: {{id}}</p>\n      <h2 md-line>Source code on Github</h2>\n      <p>\n        This app is built throughout a series of screencasts, \n        source code can be found at \n        <a href=\"https://github.com/ajtowf/ng2_play/\" target=\"_blank\">\n          https://github.com/ajtowf/ng2_play/\n        </a>\t\n      </p>\n      <h2 md-line>Youtube</h2>\n      <p>\n        For screencast on the latest and greates tech from web development, check out my youtube channel  \n        <a href=\"https://www.youtube.com/c/AjdenTowfeek\" target=\"_blank\">\n          https://www.youtube.com/c/AjdenTowfeek\n        </a>\t\n      </p>\n      <h2 md-line>Twitter</h2>\n      <p>\n        And make sure to follow me on twitter to stay tuned   \n        <a href=\"https://twitter.com/ajtowf\" target=\"_blank\">\n          https://twitter.com/ajtowf\n        </a>\t\n      </p>  \n    </md-card>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/about.component.js.map

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Ng2PlayRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomeComponent */] },
    { path: 'about/:id', component: __WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__profile__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'material', component: __WEBPACK_IMPORTED_MODULE_5__material__["a" /* MaterialComponent */] }
];
var Ng2PlayRoutingModule = (function () {
    function Ng2PlayRoutingModule() {
    }
    Ng2PlayRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2PlayRoutingModule);
    return Ng2PlayRoutingModule;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/app-routing.module.js.map

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_material_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared__ = __webpack_require__(247);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__todo__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__material_material_component__["a" /* MaterialComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* Ng2PlayRoutingModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthConfig"],
                    useFactory: function () {
                        return new __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthConfig"]();
                    },
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]]
                },
                __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthHttp"],
                __WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_14__shared__["DataService"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/app.module.js.map

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(794),
            styles: [__webpack_require__(791)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/home.component.js.map

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__(246);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });
/* unused harmony namespace reexport */



//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/index.js.map

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_component__ = __webpack_require__(418);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__material_component__["a"]; });

//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/index.js.map

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(247);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(dataService) {
        this.dataService = dataService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit() called');
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.dataService
            .getSecretQuote()
            .subscribe(function (data) { return _this.quote = data; }, function (err) { return _this.quote = 'No connection to backend...'; });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy() called');
    };
    ProfileComponent.prototype.ngAfterContentInit = function () {
        console.log('ngAfterContentInit() called');
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(796),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["DataService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared__["DataService"]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/profile.component.js.map

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operators__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(authHttp) {
        this.authHttp = authHttp;
    }
    DataService.prototype.getSecretQuote = function () {
        return this.authHttp
            .get('http://localhost:3002/api/quote')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/data.service.js.map

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodoItem; });
/* unused harmony export Quote */
var TodoItem = (function () {
    function TodoItem(text, completed) {
        this.text = text;
        this.completed = completed;
    }
    return TodoItem;
}());
var Quote = (function () {
    function Quote(text) {
        this.text = text;
    }
    return Quote;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/models.js.map

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_component__ = __webpack_require__(634);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_component__["a"]; });

//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/index.js.map

/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(247);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = (function () {
    function TodoComponent(fb) {
        this.fb = fb;
        this.todos = new Array();
        this.todos.push(new __WEBPACK_IMPORTED_MODULE_2__shared__["TodoItem"]('Hello world', false));
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.myForm = this.fb.group({
            'newTodo': this.newTodo
        });
    }
    TodoComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit() called');
    };
    TodoComponent.prototype.removeTodo = function (item) {
        this.todos.splice(this.todos.indexOf(item), 1);
    };
    TodoComponent.prototype.onSubmit = function () {
        if (this.myForm.valid) {
            this.todos.push(new __WEBPACK_IMPORTED_MODULE_2__shared__["TodoItem"](this.newTodo.value, false));
            this.myForm.reset();
        }
    };
    TodoComponent.prototype.toggleAll = function (changedEvent) {
        this.todos.forEach(function (todo) {
            todo.completed = changedEvent.checked;
        });
    };
    TodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            viewProviders: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]],
            template: __webpack_require__(797)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object])
    ], TodoComponent);
    return TodoComponent;
    var _a;
}());
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/todo.component.js.map

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/environment.js.map

/***/ },

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/Development/SurgiPal/ng2_play/src/polyfills.js.map

/***/ },

/***/ 790:
/***/ function(module, exports) {

module.exports = "md-sidenav-layout.m2app-dark {\r\n  background: black;\r\n}\r\n\r\n.app-content {\r\n  padding: 20px;\r\n}\r\n\r\n.app-sidenav {\r\n  padding: 10px;\r\n  min-width: 100px;\r\n}\r\n\r\n.app-toolbar-filler {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.app-toolbar-menu {\r\n  padding: 0 14px 0 14px;\r\n  color: white;\r\n}\r\n\r\n.app-icon-button {\r\n  box-shadow: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  -webkit-filter: none;\r\n          filter: none;\r\n  font-weight: normal;\r\n  height: auto;\r\n  line-height: inherit;\r\n  margin: 0;\r\n  min-width: 0;\r\n  padding: 0;\r\n  text-align: left;\r\n  text-decoration: none;\r\n}\r\n\r\n.app-action {\r\n  display: inline-block;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n"

/***/ },

/***/ 791:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 792:
/***/ function(module, exports) {

module.exports = "md-card {\r\n  margin: 20px;\r\n}\r\n\r\nmd-checkbox {\r\n  margin: 10px;\r\n}\r\n\r\n.app-spinner {\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n}\r\n\r\n.app-input-icon {\r\n  font-size: 16px;\r\n}\r\n\r\n.app-list {\r\n  border: 1px solid rgba(0,0,0,0.12);\r\n  width: 350px;\r\n  margin: 20px;\r\n}\r\n\r\n.app-progress {\r\n  margin: 20px;\r\n}"

/***/ },

/***/ 793:
/***/ function(module, exports) {

module.exports = "<md-sidenav-layout [class.m2app-dark]=\"isDarkTheme\">\n\n  <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\">\n    Sidenav\n  </md-sidenav>\n\n  <md-toolbar color=\"primary\">\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button> ng2play&nbsp;\n\n    <button md-button [routerLink]=\"['/']\">Home</button>\n    <button md-button [routerLink]=\"['/about', 'Hello, world!']\">About</button>\n\n    <span class=\"app-toolbar-filler\"></span>\n\n    <button md-button [routerLink]=\"['/material']\">Material Demo</button>\n    <button md-button *ngIf=\"loggedIn()\" [routerLink]=\"['/profile']\">Profile</button>\n    <button md-button *ngIf=\"!loggedIn()\" (click)=\"login()\">Sign in</button>\n    <button md-button *ngIf=\"loggedIn()\" (click)=\"logout()\">Sign out</button>\n\n    <button md-button (click)=\"isDarkTheme = !isDarkTheme\">TOGGLE THEME</button>\n  </md-toolbar>\n\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n\n</md-sidenav-layout>\n\n<span class=\"app-action\" [class.m2app-dark]=\"isDarkTheme\">\n  <button md-fab><md-icon>check circle</md-icon></button>\n</span>\n"

/***/ },

/***/ 794:
/***/ function(module, exports) {

module.exports = "<app-todo></app-todo>\n"

/***/ },

/***/ 795:
/***/ function(module, exports) {

module.exports = "<md-card>\r\n  <button md-button>FLAT</button>\r\n  <button md-raised-button md-tooltip=\"This is a tooltip!\">RAISED</button>\r\n  <button md-raised-button color=\"primary\">PRIMARY RAISED</button>\r\n  <button md-raised-button color=\"accent\">ACCENT RAISED</button>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-checkbox>Unchecked</md-checkbox>\r\n  <md-checkbox [checked]=\"true\">Checked</md-checkbox>\r\n  <md-checkbox [indeterminate]=\"true\">Indeterminate</md-checkbox>\r\n  <md-checkbox [disabled]=\"true\">Disabled</md-checkbox>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-radio-button name=\"symbol\">Alpha</md-radio-button>\r\n  <md-radio-button name=\"symbol\">Beta</md-radio-button>\r\n  <md-radio-button name=\"symbol\" disabled>Gamma</md-radio-button>\r\n</md-card>\r\n\r\n<md-card class=\"app-input-section\">\r\n  <md-input placeholder=\"First name\"></md-input>\r\n\r\n  <md-input #nickname placeholder=\"Nickname\" maxlength=\"50\">\r\n    <md-hint align=\"end\">\r\n      {{nickname.characterCount}} / 50\r\n    </md-hint>\r\n  </md-input>\r\n\r\n  <md-input>\r\n    <md-placeholder>\r\n      <i class=\"material-icons app-input-icon\">android</i> Favorite phone\r\n    </md-placeholder>\r\n  </md-input>\r\n\r\n  <md-input placeholder=\"Motorcycle model\">\r\n    <span md-prefix>\r\n          <i class=\"material-icons app-input-icon\">motorcycle</i>\r\n          &nbsp;\r\n        </span>\r\n  </md-input>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-list class=\"app-list\">\r\n    <md-list-item *ngFor=\"let food of foods\">\r\n      <h3 md-line>{{food.name}}</h3>\r\n      <p md-line class=\"demo-secondary-text\">{{food.rating}}</p>\r\n    </md-list-item>\r\n  </md-list>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-spinner class=\"app-spinner\"></md-spinner>\r\n  <md-spinner color=\"accent\" class=\"app-spinner\"></md-spinner>\r\n</md-card>\r\n\r\n<md-card>\r\n  <label>\r\n        Indeterminate progress-bar\r\n        <md-progress-bar\r\n            class=\"app-progress\"\r\n            mode=\"indeterminate\"\r\n            aria-label=\"Indeterminate progress-bar example\"></md-progress-bar>\r\n      </label>\r\n\r\n  <label>\r\n        Determinate progress bar - {{progress}}%\r\n        <md-progress-bar\r\n            class=\"app-progress\"\r\n            color=\"accent\"\r\n            mode=\"determinate\"\r\n            [value]=\"progress\"\r\n            aria-label=\"Determinate progress-bar example\"></md-progress-bar>\r\n      </label>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-tab-group>\r\n    <md-tab>\r\n      <template md-tab-label>\r\n        Earth\r\n      </template>\r\n      <template md-tab-content>\r\n        <p>EARTH</p>\r\n      </template>\r\n    </md-tab>\r\n    <md-tab>\r\n      <template md-tab-label>\r\n        Fire\r\n      </template>\r\n      <template md-tab-content>\r\n        <p>FIRE</p>\r\n      </template>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</md-card>\r\n\r\n\r\n<md-card>\r\n  <md-icon>build</md-icon>\r\n</md-card>\r\n\r\n<md-card>\r\n  <button md-button [md-menu-trigger-for]=\"menu\">\r\n        MENU\r\n      </button>\r\n</md-card>\r\n\r\n<md-menu #menu=\"mdMenu\">\r\n  <button md-menu-item>Lemon</button>\r\n  <button md-menu-item>Lime</button>\r\n  <button md-menu-item>Banana</button>\r\n</md-menu>"

/***/ },

/***/ 796:
/***/ function(module, exports) {

module.exports = "<md-card>\n  <img src=\"{{profile.picture}}\" style=\"width: 50px\" /> {{profile.name}}\n   <h2 md-line>Chuck quote of the day</h2>\n   <p>{{quote}}</p>\n</md-card>\n"

/***/ },

/***/ 797:
/***/ function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-content>\r\n    <div *ngFor=\"let todo of todos\">\r\n      <md-checkbox [(checked)]=\"todo.completed\">\r\n        {{todo.text}}\r\n      </md-checkbox>\r\n      <button md-icon-button color=\"warn\" (click)=\"removeTodo(todo)\">\r\n        <i class=\"material-icons\" md-24>check</i>\r\n      </button>\r\n    </div>\r\n\r\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div>\r\n        <md-input required placeholder=\"What do you need to do?\" [formControl]=\"newTodo\"></md-input>\r\n      </div>\r\n\r\n      <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!myForm.valid\">Add Todo</button>\r\n    </form>\r\n\r\n    <br />\r\n\r\n    <md-checkbox (change)=\"toggleAll($event)\">\r\n      Mark all as complete\r\n    </md-checkbox>\r\n\r\n  </md-card-content>\r\n</md-card>\r\n "

/***/ },

/***/ 845:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(475);


/***/ }

},[845]);
//# sourceMappingURL=main.bundle.map