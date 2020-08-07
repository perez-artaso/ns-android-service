(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#container Button {\r\n    background-color: blue;\r\n    width: 600;\r\n    height: 300;\r\n    font-size: 50;\r\n}"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <Label text=\"Home\"></Label>\n</ActionBar>\n\n<FlexboxLayout id=\"container\">\n    <ActivityIndicator *ngIf=\"!_is_player_ready\" [busy]=\"!_is_player_ready\" width=\"300\"></ActivityIndicator>\n    <Button\n    *ngIf=\"_is_player_ready\"\n    text=\"Switch Play/Pause\"\n    (tap)=\"toggle_player()\"\n    >\n    </Button>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-audio/audio.js");
/* harmony import */ var nativescript_audio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_audio__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this._is_player_ready = true;
        this.ctx = new android.content.ContextWrapper(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["android"].context);
        this.FASConnection = new android.content.ServiceConnection({
            onServiceConnected: function (className, service) {
                //@ts-ignore
                var mLocalBinder = service;
                // Here you get the ForegroundAudioService instance
                _this.FAudioService = mLocalBinder.getService();
            },
            onServiceDisconnected: function (className) {
                _this.FAudioService = null;
            }
        });
        this._player = new nativescript_audio__WEBPACK_IMPORTED_MODULE_2__["TNSPlayer"]();
    }
    HomeComponent.prototype.doBindService = function () {
        if (this.ctx.bindService(new android.content.Intent(this.ctx.getApplicationContext(), com.tns.ForegroundAudioService.class), this.FASConnection, android.content.Context.BIND_AUTO_CREATE)) {
            this.mShouldUnbind = true;
        }
        else {
            android.util.Log.e("xX()Xx", "Foreground didn't start");
        }
    };
    HomeComponent.prototype.doUnbindService = function () {
        if (this.mShouldUnbind) {
            this.ctx.unbindService(this.FASConnection);
            this.mShouldUnbind = false;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doBindService();
        tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["on"](tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["exitEvent"], function (args) {
            _this.doUnbindService();
        });
    };
    HomeComponent.prototype.toggle_player = function () {
        if (this._player.isAudioPlaying()) {
            this.pause();
        }
        else {
            this.play();
        }
    };
    HomeComponent.prototype.pause = function () {
        this.FAudioService.stop_playing();
    };
    HomeComponent.prototype.play = function () {
        var _this = this;
        this._is_player_ready = false;
        this._player.initFromUrl({
            audioFile: "https://playerservices.streamtheworld.com/api/livestream-redirect/ASPEN.mp3",
            loop: false
        }).then(function () {
            _this.FAudioService.set_player(_this._player.android);
            _this.FAudioService.start_playing();
            _this._is_player_ready = true;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html"),
            styles: [__webpack_require__("./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUV0QjtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUU7Q0FDekMsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZDlCLDhCQUE4Qiw0QkFBNEIsZ0NBQWdDLEtBQUssMkJBQTJCLCtCQUErQixtQkFBbUIsb0JBQW9CLHNCQUFzQixLQUFLLEM7Ozs7Ozs7QUNBM04sMlg7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDTTtBQUNUO0FBUy9DO0lBV0k7UUFBQSxpQkFFQztRQVZNLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUVoQyxRQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxvRUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBVW5FLGtCQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ3pELGtCQUFrQixFQUFFLFVBQUMsU0FBd0MsRUFBRSxPQUEyQjtnQkFDdEYsWUFBWTtnQkFDWixJQUFJLFlBQVksR0FBK0MsT0FBTyxDQUFDO2dCQUN2RSxtREFBbUQ7Z0JBQ25ELEtBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ25ELENBQUM7WUFFRCxxQkFBcUIsRUFBRSxVQUFDLFNBQXdDO2dCQUM1RCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM5QixDQUFDO1NBRUosQ0FBQyxDQUFDO1FBZkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDREQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBZ0JELHFDQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUNwQixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEVBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUN2QyxFQUNELElBQUksQ0FBQyxhQUFhLEVBQ2xCLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUMzQyxFQUFFO1lBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDN0I7YUFBTTtZQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsK0RBQVUsQ0FBQyxzRUFBaUIsRUFBRSxVQUFDLElBQUk7WUFDL0IsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNyQixTQUFTLEVBQUUsNkVBQTZFO1lBQ3hGLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDLElBQUksQ0FDSDtZQUNJLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDdkIsQ0FBQztZQUNGLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFwRlEsYUFBYTtRQUx6QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsK0RBQW9DOztTQUV2QyxDQUFDOztPQUNXLGFBQWEsQ0FzRnpCO0lBQUQsb0JBQUM7Q0FBQTtBQXRGeUI7Ozs7Ozs7OztBQ1gxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRWI7QUFDVDtBQWNqRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBWnRCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QixzRUFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkRBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNjb250YWluZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciBCdXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICB3aWR0aDogNjAwO1xcclxcbiAgICBoZWlnaHQ6IDMwMDtcXHJcXG4gICAgZm9udC1zaXplOiA1MDtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEZsZXhib3hMYXlvdXQgaWQ9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxBY3Rpdml0eUluZGljYXRvciAqbmdJZj1cXFwiIV9pc19wbGF5ZXJfcmVhZHlcXFwiIFtidXN5XT1cXFwiIV9pc19wbGF5ZXJfcmVhZHlcXFwiIHdpZHRoPVxcXCIzMDBcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxuICAgIDxCdXR0b25cXG4gICAgKm5nSWY9XFxcIl9pc19wbGF5ZXJfcmVhZHlcXFwiXFxuICAgIHRleHQ9XFxcIlN3aXRjaCBQbGF5L1BhdXNlXFxcIlxcbiAgICAodGFwKT1cXFwidG9nZ2xlX3BsYXllcigpXFxcIlxcbiAgICA+XFxuICAgIDwvQnV0dG9uPlxcbjwvRmxleGJveExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIHRoaXNBcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xuXG5kZWNsYXJlIHZhciBjb206IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIF9wbGF5ZXI7XG4gICAgcHVibGljIF9pc19wbGF5ZXJfcmVhZHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBjdHggPSBuZXcgYW5kcm9pZC5jb250ZW50LkNvbnRleHRXcmFwcGVyKHRoaXNBcHAuYW5kcm9pZC5jb250ZXh0KTtcbiAgICBwcml2YXRlIG1TaG91bGRVbmJpbmQ6IGJvb2xlYW47XG4gICAgLy9AdHMtaWdub3JlXG4gICAgcHVibGljIEZBdWRpb1NlcnZpY2U6IGNvbS50bnMuRm9yZWdyb3VuZEF1ZGlvU2VydmljZTtcblxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIEZBU0Nvbm5lY3Rpb24gPSBuZXcgYW5kcm9pZC5jb250ZW50LlNlcnZpY2VDb25uZWN0aW9uKHtcbiAgICAgICAgb25TZXJ2aWNlQ29ubmVjdGVkOiAoY2xhc3NOYW1lOiBhbmRyb2lkLmNvbnRlbnQuQ29tcG9uZW50TmFtZSwgc2VydmljZTogYW5kcm9pZC5vcy5JQmluZGVyKSA9PiB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGxldCBtTG9jYWxCaW5kZXIgPSA8Y29tLnRucy5Gb3JlZ3JvdW5kQXVkaW9TZXJ2aWNlLkxvY2FsQmluZGVyPnNlcnZpY2U7XG4gICAgICAgICAgICAvLyBIZXJlIHlvdSBnZXQgdGhlIEZvcmVncm91bmRBdWRpb1NlcnZpY2UgaW5zdGFuY2VcbiAgICAgICAgICAgIHRoaXMuRkF1ZGlvU2VydmljZSA9IG1Mb2NhbEJpbmRlci5nZXRTZXJ2aWNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25TZXJ2aWNlRGlzY29ubmVjdGVkOiAoY2xhc3NOYW1lOiBhbmRyb2lkLmNvbnRlbnQuQ29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5GQXVkaW9TZXJ2aWNlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBkb0JpbmRTZXJ2aWNlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdHguYmluZFNlcnZpY2UoXG4gICAgICAgICAgICBuZXcgYW5kcm9pZC5jb250ZW50LkludGVudChcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5nZXRBcHBsaWNhdGlvbkNvbnRleHQoKSxcbiAgICAgICAgICAgICAgICBjb20udG5zLkZvcmVncm91bmRBdWRpb1NlcnZpY2UuY2xhc3NcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0aGlzLkZBU0Nvbm5lY3Rpb24sXG4gICAgICAgICAgICBhbmRyb2lkLmNvbnRlbnQuQ29udGV4dC5CSU5EX0FVVE9fQ1JFQVRFXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIHRoaXMubVNob3VsZFVuYmluZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmRyb2lkLnV0aWwuTG9nLmUoXCJ4WCgpWHhcIiwgXCJGb3JlZ3JvdW5kIGRpZG4ndCBzdGFydFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvVW5iaW5kU2VydmljZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubVNob3VsZFVuYmluZCkge1xuICAgICAgICAgICAgdGhpcy5jdHgudW5iaW5kU2VydmljZSh0aGlzLkZBU0Nvbm5lY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5tU2hvdWxkVW5iaW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb0JpbmRTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXNBcHAub24odGhpc0FwcC5leGl0RXZlbnQsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvVW5iaW5kU2VydmljZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVfcGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UgKCkge1xuICAgICAgICB0aGlzLkZBdWRpb1NlcnZpY2Uuc3RvcF9wbGF5aW5nKCk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5faXNfcGxheWVyX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BsYXllci5pbml0RnJvbVVybCh7XG4gICAgICAgICAgICBhdWRpb0ZpbGU6IFwiaHR0cHM6Ly9wbGF5ZXJzZXJ2aWNlcy5zdHJlYW10aGV3b3JsZC5jb20vYXBpL2xpdmVzdHJlYW0tcmVkaXJlY3QvQVNQRU4ubXAzXCIsXG4gICAgICAgICAgICBsb29wOiBmYWxzZVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuRkF1ZGlvU2VydmljZS5zZXRfcGxheWVyKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIuYW5kcm9pZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5GQXVkaW9TZXJ2aWNlLnN0YXJ0X3BsYXlpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc19wbGF5ZXJfcmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=