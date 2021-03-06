System.register(['angular2/core', 'angular2/http', './ug-http.service', './auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, ug_http_service_1, auth_service_1;
    var UGSettings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ug_http_service_1_1) {
                ug_http_service_1 = ug_http_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            UGSettings = (function () {
                function UGSettings(_http, _ugHttp, _auth) {
                    this._http = _http;
                    this._ugHttp = _ugHttp;
                    this._auth = _auth;
                }
                UGSettings.prototype.loadUGSettings = function () {
                    var _this = this;
                    this._http.get('app/ug-settings.json')
                        .subscribe(function (res) {
                        res = res.json();
                        var baseUrl = res.baseUrl + "/" + res.org + "/" + res.app;
                        _this._ugHttp.setBaseUrl(baseUrl);
                        _this._auth.setMaxTokenAge(res.maxTokenAge);
                    });
                };
                UGSettings = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, ug_http_service_1.UGHttpService, auth_service_1.AuthService])
                ], UGSettings);
                return UGSettings;
            }());
            exports_1("UGSettings", UGSettings);
        }
    }
});
//# sourceMappingURL=ug-settings.service.js.map