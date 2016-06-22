System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SecretFriendComponent, Node;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SecretFriendComponent = (function () {
                function SecretFriendComponent() {
                    this.pageTitle = 'Secret Friend';
                    this.participants = ["Participant 01", "Participant 02", "Participant 03", "Participant 04", "Participant 05", "Participant 06", "Participant 07", "Participant 08", "Participant 09", "Participant 10",];
                }
                SecretFriendComponent.prototype.raffle = function () {
                    var retVal = "";
                    for (var index = 0; index < this.participants.length; index++) {
                        var element = this.participants[index];
                    }
                    return retVal;
                };
                SecretFriendComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/secret-friend/secret-friend.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SecretFriendComponent);
                return SecretFriendComponent;
            }());
            exports_1("SecretFriendComponent", SecretFriendComponent);
            Node = (function () {
                function Node() {
                }
                return Node;
            }());
        }
    }
});
//# sourceMappingURL=secret-friend.component.js.map