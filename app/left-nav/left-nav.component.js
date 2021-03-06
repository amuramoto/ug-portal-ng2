System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var LeftNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LeftNavComponent = (function () {
                function LeftNavComponent(_router) {
                    this._router = _router;
                    _router.subscribe(function (url) {
                        _router.recognize(url).then(function (instruction) {
                            console.log(instruction);
                        });
                    });
                    this.menuItems = [
                        'Dashboard',
                        'Data',
                        'Users',
                        'Push Notifications',
                        'Activities'
                    ];
                }
                LeftNavComponent.prototype.setSelectedComponent = function (selectedComponent) {
                    this.selectedComponent = selectedComponent;
                };
                LeftNavComponent = __decorate([
                    core_1.Component({
                        selector: 'ug-left-nav',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/left-nav/left-nav.component.html',
                        styleUrls: ['app/left-nav/left-nav.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LeftNavComponent);
                return LeftNavComponent;
            }());
            exports_1("LeftNavComponent", LeftNavComponent);
        }
    }
});
//# sourceMappingURL=left-nav.component.js.map