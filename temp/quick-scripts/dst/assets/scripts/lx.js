
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBeEVEO1FBREMsUUFBUTsyQ0FDVztJQVBILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnRjVCO0lBQUQsZUFBQztDQWhGRCxBQWdGQyxDQWhGcUMsRUFBRSxDQUFDLFNBQVMsR0FnRmpEO2tCQWhGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbi8vIHRz6Ieq5YaZ6L2u55uY5pON5L2c5pa55rOVXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgYnV0OiBjYy5Ob2RlID0gbnVsbDsgLy/lrZDoioLngrlcbiAgICBmU2l6ZTogbnVtYmVyID0gbnVsbCAvL+W9k+WJjeiKgueCueWkp+Wwj1xuICAgIHpodWp1ZTogY2MuTm9kZSA9IG51bGw7ICAvL+aOp+WItuiKgueCuVxuXG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMDsgLy/nm67moIfnp7vliqjpgJ/luqZcblxuICAgIGRpclg6IG51bWJlciA9IDA7ICAvL+WQkemHj3jlnZDmoIdcbiAgICBkaXJZOiBudW1iZXIgPSAwOyAgLy/lkJHph4955Z2Q5qCHXG5cbiAgICBhbmltOiBzdHJpbmc7ICAvL+m7mOiupOeahOWKqOeUu1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmJ1dCA9IHRoaXMubm9kZS5jaGlsZHJlblswXTsgLy/ojrflj5blrZDoioLngrnop6bnorBcbiAgICAgICAgdGhpcy5mU2l6ZSA9IHRoaXMubm9kZS53aWR0aCAvIDI7ICAvL+iOt+WPluW9k+WJjeiKgueCueWNiuW+hFxuICAgICAgICB0aGlzLnpodWp1ZSA9IGNjLmZpbmQoJ0NhbnZhcy96aHVqdWUnKTsgLy/ojrflj5bnm67moIfoioLngrlcbiAgICAgICAgdGhpcy5hbmltID0gJ3podWp1ZSc7IC8v6buY6K6k5Yqo55S7XG4gICAgfVxuXG4gICAgZW5kUmVzZXQoKSB7XG4gICAgICAgIC8vIOWIneWni+WMluS9jee9riDlkJHph49cbiAgICAgICAgdGhpcy5idXQuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIHRoaXMuZGlyWCA9IDA7XG4gICAgICAgIHRoaXMuZGlyWSA9IDA7XG4gICAgfVxuICAgIC8vIOWKqOeUu+aWueazlVxuICAgIGFuaW1hdGlvbihhbmkpIHtcbiAgICAgICAgbGV0IGFtdCA9IHRoaXMuemh1anVlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBpZiAodGhpcy5hbmltID09IGFuaSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmFuaW0gPSBhbmk7XG4gICAgICAgIGFtdC5wbGF5KGFuaSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQgYW5pID0gJ3podWp1ZSc7XG4gICAgICAgIHRoaXMuYnV0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChlOiBjYy5FdmVudC5FdmVudE1vdXNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZmJnID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGUuZ2V0TG9jYXRpb24oKSkgLy/lnZDmoIfovazljJboioLngrlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZiZy54LCBmYmcueSk7XG4gICAgICAgICAgICBsZXQgbGVuZyA9IGZiZy5tYWcoKTsgLy/ojrflj5blkJHph4/plb/luqZcbiAgICAgICAgICAgIGxldCBzY2FsZVggPSBNYXRoLmFicyh0aGlzLnpodWp1ZS5zY2FsZVgpOyAvL+iOt+WPlue8qeaUvue7neWvueWAvFxuXG4gICAgICAgICAgICB0aGlzLmRpclggPSBmYmcueCAvIGxlbmc7XG4gICAgICAgICAgICB0aGlzLmRpclkgPSBmYmcueSAvIGxlbmc7XG4gICAgICAgICAgICBpZiAobGVuZyA+IHRoaXMuZlNpemUpIHtcbiAgICAgICAgICAgICAgICBmYmcueCA9IGZiZy54IC8gbGVuZyAqIHRoaXMuZlNpemU7XG4gICAgICAgICAgICAgICAgZmJnLnkgPSBmYmcueSAvIGxlbmcgKiB0aGlzLmZTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5idXQuc2V0UG9zaXRpb24oZmJnKTsgLy/lnZDmoIfotYvlgLznu5nlrZDoioLngrlcblxuICAgICAgICAgICAgLy8g6KeS6Imy5L2N56e75pa55ZCR5Y+Y5YyWXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJYID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuemh1anVlLnNjYWxlWCA9IHNjYWxlWFxuICAgICAgICAgICAgICAgIGFuaSA9IFwicGFvYnVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJYIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuemh1anVlLnNjYWxlWCA9IC1zY2FsZVhcbiAgICAgICAgICAgICAgICBhbmkgPSBcInBhb2J1XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbihhbmkpO1xuICAgICAgICB9KVxuICAgICAgICAvLyDph43nva7ova7nm5hcbiAgICAgICAgdGhpcy5idXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZTogY2MuRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW5kUmVzZXQoKTtcbiAgICAgICAgICAgIGFuaSA9ICd6aHVqdWUnO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24oYW5pKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8g6YeN572u6L2u55uYXG4gICAgICAgIHRoaXMuYnV0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGU6IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVuZFJlc2V0KCk7XG4gICAgICAgICAgICBhbmkgPSAnemh1anVlJztcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uKGFuaSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGxldCBfeCA9ICh0aGlzLnNwZWVkICogdGhpcy5kaXJYKSAqIGR0O1xuICAgICAgICBsZXQgX3kgPSAodGhpcy5zcGVlZCAqIHRoaXMuZGlyWSkgKiBkdDtcbiAgICAgICAgdGhpcy56aHVqdWUueCArPSBfeDtcbiAgICAgICAgdGhpcy56aHVqdWUueSArPSBfeTtcbiAgICB9XG59XG4iXX0=