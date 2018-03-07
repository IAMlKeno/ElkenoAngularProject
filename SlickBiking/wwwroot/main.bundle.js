webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-app=\"bikeApp\">\r\n  <div class=\"jumbotron slickBikeHeader\">\r\n    <img src=\"../assets/images/slickbikeslogo.png\" />\r\n  </div>\r\n\r\n  <div class=\"col-md-12\" ng-app=\"bikeDisplayTable\" ng-controller=\"BikeDisplayController\">\r\n    <div class=\"panel panel-warning\">\r\n      <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title newBikeFormTitle\">Bike Stock</h3>\r\n        <div class=\"newBikeBtnDiv\">\r\n          <input type=\"button\" class=\"modalBtn btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" onclick=\"clearBikeForm()\" value=\"Add New Bike\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <table class=\"table table-striped\">\r\n          <tr>\r\n            <th>Id</th>\r\n            <th>Name</th>\r\n            <th>Description</th>\r\n            <th>Bike Type</th>\r\n            <th>Quantity On Hand</th>\r\n            <th>Cost</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n          <tr *ngFor=\"let bike of apiValues\">\r\n            <td>{{bike.id}}</td>\r\n            <td>{{bike.model}}</td>\r\n            <td>{{bike.description}}</td>\r\n            <td>{{ bikeTypes[0] }}</td>\r\n            <td>{{bike.quantityOnHand}}</td>\r\n            <td>{{bike.price}}</td>\r\n            <td>\r\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button value=\"{{bike.id}}\" ng-click=\"GetBike($event)\" style=\"border-right: 1px solid black\" type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                <button value=\"{{bike.id}}\" ng-click=\"DeleteBike($event)\" style=\"border-left: 1px solid black\" type=\"button\" class=\"btn btn-secondary btn-sm\">Delete</button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\" ng-controller=\"BikeController\">\r\n        <form ng-submit=\"SaveBike($event)\">\r\n          <div class=\"modal-header\">\r\n            <h3 class=\"modal-title\" id=\"exampleModalLabel\" style=\"display:inline-block\">Bike Form</h3>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body _bikeForm\">\r\n            <table class=\"newBikeTable\" style=\"margin:auto\">\r\n              <tr>\r\n                <td>\r\n                  <label>Bike Model</label>\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" class=\"_bikeModel\" ng-model=\"bike.Model\" />\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <label>Type</label>\r\n                </td>\r\n                <td>\r\n                  <!--<input type=\"text\" class=\"_type\" ng-model=\"bike.BikeType\" />-->\r\n                  <select >\r\n                    <option value=\"\">Please Select</option>\r\n                    <option *ngFor=\"let type of bikeTypes\" value=\"{{type.id}}\">{{type.description}}</option>\r\n                  </select>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <label>Cost</label>\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" class=\"_price\" ng-model=\"bike.Price\" />\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <label>Description</label>\r\n                </td>\r\n                <td>\r\n                  <!--<input type=\"text\" class=\"_description\" ng-model=\"bike.Description\" />-->\r\n                  <textarea class=\"_description\"></textarea>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <label>Quantity on Hand</label>\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" class=\"_qoh\" ng-model=\"bike.QuantityOnHand\" />\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            <input type=\"hidden\" class=\"_bikeId\" ng-model=\"bike.Id\" />\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
        this.bikeTypes = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        //this._httpService.get('/api/values/GetBikes').subscribe(values => {
        //  this.apiValues = values.json() as string[];
        //});
        var _this = this;
        this._httpService.get('/api/values/GetBikeTypes').subscribe(function (types) {
            _this.bikeTypes = types.json();
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map