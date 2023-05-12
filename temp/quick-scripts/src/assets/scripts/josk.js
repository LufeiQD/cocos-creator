"use strict";
cc._RF.push(module, 'c3d333pysZA3q4G9gpsFgr8', 'josk');
// scripts/josk.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// js转ts轮盘操作方法
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxSpeed = 0;
        _this.joyStickBtn = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // 隐藏fps
        cc.debug.setDisplayStats(false);
        // 获取 joyStickBtn player
        this.joyStickBtn = this.node.children[0];
        this.player = cc.find('Canvas/zhujue');
        // 玩家的移动方向
        this.dir = cc.v2(0, 0);
        // 触摸事件
        this.node.on('touchstart', this.onTouchStart, this);
        this.node.on('touchmove', this.onTouchMove, this);
        this.node.on('touchend', this.onTouchEnd, this);
        this.node.on('touchcancel', this.onTouchCancel, this);
    };
    NewClass.prototype.onDestroy = function () {
        // 触摸事件
        this.node.off('touchstart', this.onTouchStart, this);
        this.node.off('touchmove', this.onTouchMove, this);
        this.node.off('touchend', this.onTouchEnd, this);
        this.node.off('touchcancel', this.onTouchCancel, this);
    };
    NewClass.prototype.onTouchStart = function (event) {
        // 当触摸开始时，设置joyStickBtn的位置
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.joyStickBtn.setPosition(pos);
    };
    NewClass.prototype.onTouchMove = function (event) {
        // 不断改变joyStickBtn的位置
        var posDelta = event.getDelta();
        this.joyStickBtn.setPosition(this.joyStickBtn.position.add(posDelta));
        // 获取方向
        this.dir = this.joyStickBtn.position.normalize();
    };
    NewClass.prototype.onTouchEnd = function (event) {
        // 重置
        this.joyStickBtn.setPosition(cc.v2(0, 0));
    };
    NewClass.prototype.onTouchCancel = function (event) {
        // 重置
        this.joyStickBtn.setPosition(cc.v2(0, 0));
    };
    NewClass.prototype.update = function (dt) {
        // 获取 ratio
        var len = this.joyStickBtn.position.mag();
        var maxLen = this.node.width / 2;
        var ratio = len / maxLen;
        // 在 joyStickPanel 内限制 joyStickBtn
        if (ratio > 1) {
            this.joyStickBtn.setPosition(this.joyStickBtn.position.div(ratio));
        }
        // 移动zhujue
        var dis = this.dir.mul(this.maxSpeed * ratio);
        this.player.setPosition(this.player.position.add(dis));
        // 限制画布内的zhujue
        if (this.player.x > this.player.parent.width / 2)
            this.player.x = this.player.parent.width / 2;
        else if (this.player.x < -this.player.parent.width / 2)
            this.player.x = -this.player.parent.width / 2;
        if (this.player.y > this.player.parent.height / 2)
            this.player.y = this.player.parent.height / 2;
        else if (this.player.y < -this.player.parent.height / 2)
            this.player.y = -this.player.parent.height / 2;
    };
    __decorate([
        property
    ], NewClass.prototype, "maxSpeed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();