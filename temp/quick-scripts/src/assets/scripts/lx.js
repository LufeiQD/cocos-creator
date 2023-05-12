"use strict";
cc._RF.push(module, '07710cL/qhOqZ5I9TFL5Vc0', 'lx');
// scripts/lx.ts

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
// ts自写轮盘操作方法
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.but = null; //子节点
        _this.fSize = null; //当前节点大小
        _this.zhujue = null; //控制节点
        _this.speed = 200; //目标移动速度
        _this.dirX = 0; //向量x坐标
        _this.dirY = 0; //向量y坐标
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.but = this.node.children[0]; //获取子节点触碰
        this.fSize = this.node.width / 2; //获取当前节点半径
        this.zhujue = cc.find('Canvas/zhujue'); //获取目标节点
        this.anim = 'zhujue'; //默认动画
    };
    NewClass.prototype.endReset = function () {
        // 初始化位置 向量
        this.but.setPosition(0, 0);
        this.dirX = 0;
        this.dirY = 0;
    };
    // 动画方法
    NewClass.prototype.animation = function (ani) {
        var amt = this.zhujue.getComponent(cc.Animation);
        if (this.anim == ani)
            return;
        this.anim = ani;
        amt.play(ani);
    };
    NewClass.prototype.start = function () {
        var _this = this;
        var ani = 'zhujue';
        this.but.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            var fbg = _this.node.convertToNodeSpaceAR(e.getLocation()); //坐标转化节点
            // console.log(fbg.x, fbg.y);
            var leng = fbg.mag(); //获取向量长度
            var scaleX = Math.abs(_this.zhujue.scaleX); //获取缩放绝对值
            _this.dirX = fbg.x / leng;
            _this.dirY = fbg.y / leng;
            if (leng > _this.fSize) {
                fbg.x = fbg.x / leng * _this.fSize;
                fbg.y = fbg.y / leng * _this.fSize;
            }
            _this.but.setPosition(fbg); //坐标赋值给子节点
            // 角色位移方向变化
            if (_this.dirX > 0) {
                _this.zhujue.scaleX = scaleX;
                ani = "paobu";
            }
            else if (_this.dirX < 0) {
                _this.zhujue.scaleX = -scaleX;
                ani = "paobu";
            }
            _this.animation(ani);
        });
        // 重置轮盘
        this.but.on(cc.Node.EventType.TOUCH_END, function (e) {
            _this.endReset();
            ani = 'zhujue';
            _this.animation(ani);
        });
        // 重置轮盘
        this.but.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
            _this.endReset();
            ani = 'zhujue';
            _this.animation(ani);
        });
    };
    NewClass.prototype.update = function (dt) {
        var _x = (this.speed * this.dirX) * dt;
        var _y = (this.speed * this.dirY) * dt;
        this.zhujue.x += _x;
        this.zhujue.y += _y;
    };
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();