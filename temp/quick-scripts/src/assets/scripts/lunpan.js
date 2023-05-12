"use strict";
cc._RF.push(module, '3d81bBb+89HgJkY921XAZSs', 'lunpan');
// scripts/lunpan.ts

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
// ts自写初始垃圾轮盘方法
var lunpan = /** @class */ (function (_super) {
    __extends(lunpan, _super);
    function lunpan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fViewHg = null;
        _this.fViewWh = null;
        _this.zhujNode = null;
        _this.isMove = false;
        _this.speed = 10;
        return _this;
    }
    lunpan.prototype.onLoad = function () {
        this.fViewHg = this.node.parent.height;
        this.fViewWh = this.node.parent.width;
        this.zhujNode = cc.find("Canvas/zhujue");
        // console.log(this.fViewHg, this.fViewWh);
    };
    lunpan.prototype.start = function () {
        var _this = this;
        // 触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.isMove = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            _this.isMove = false;
            _this.node.setPosition(50, 50);
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            // console.log(e);
            if (_this.isMove) {
                var parentPos = _this.node.parent.convertToNodeSpaceAR(e.getLocation());
                // console.log("父节点内鼠标坐标：", parentPos);
                _this.node.setPosition(parentPos.x, parentPos.y);
                // console.log(this.node.x);
                if (_this.node.x - _this.node.width / 2 < 0) {
                    _this.node.x = _this.node.width / 2;
                }
                else if (_this.node.x + _this.node.width / 2 > _this.fViewWh) {
                    _this.node.x = _this.fViewWh - _this.node.width / 2;
                }
                if (_this.node.y - _this.node.height / 2 < 0) {
                    _this.node.y = _this.node.height / 2;
                }
                else if (_this.node.y + _this.node.height / 2 > _this.fViewHg) {
                    _this.node.y = _this.fViewHg - _this.node.height / 2;
                }
            }
        });
    };
    lunpan.prototype.update = function (dt) {
        console.log("节点位置x", this.node.x);
        if (this.node.x > 50) {
            this.zhujNode.x += this.speed * dt;
        }
        else if (this.node.x < 50) {
            this.zhujNode.x -= this.speed * dt;
        }
        if (this.node.y > 50) {
            this.zhujNode.y += this.speed * dt;
        }
        else if (this.node.y < 50) {
            this.zhujNode.y -= this.speed * dt;
        }
    };
    __decorate([
        property
    ], lunpan.prototype, "speed", void 0);
    lunpan = __decorate([
        ccclass
    ], lunpan);
    return lunpan;
}(cc.Component));
exports.default = lunpan;

cc._RF.pop();