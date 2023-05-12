
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/camera');
require('./assets/scripts/ces');
require('./assets/scripts/josk');
require('./assets/scripts/lunpan');
require('./assets/scripts/lx');
require('./assets/scripts/zhujue');
require('./assets/scripts/zhujueyd');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zhujueyd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '157f4CS8TxHpoC0c7+Hp+yG', 'zhujueyd');
// scripts/zhujueyd.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemh1anVleWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lunpan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHVucGFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLGVBQWU7QUFHZjtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTREQztRQTFERyxhQUFPLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFdBQUssR0FBVyxFQUFFLENBQUM7O0lBb0R2QixDQUFDO0lBbERHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsMkNBQTJDO0lBQy9DLENBQUM7SUFDRCxzQkFBSyxHQUFMO1FBQUEsaUJBNkJDO1FBNUJHLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsS0FBSSxDQUFD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QyxRQUFRO3lDQUNVO0lBUkYsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTREMUI7SUFBRCxhQUFDO0NBNURELEFBNERDLENBNURtQyxFQUFFLENBQUMsU0FBUyxHQTREL0M7a0JBNURvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLy8gdHPoh6rlhpnliJ3lp4vlnoPlnL7ova7nm5jmlrnms5VcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGx1bnBhbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBmVmlld0hnOiBudW1iZXIgPSBudWxsO1xuICAgIGZWaWV3V2g6IG51bWJlciA9IG51bGw7XG4gICAgemh1ak5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaXNNb3ZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlciA9IDEwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmZWaWV3SGcgPSB0aGlzLm5vZGUucGFyZW50LmhlaWdodDtcbiAgICAgICAgdGhpcy5mVmlld1doID0gdGhpcy5ub2RlLnBhcmVudC53aWR0aDtcbiAgICAgICAgdGhpcy56aHVqTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvemh1anVlXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZWaWV3SGcsIHRoaXMuZlZpZXdXaCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyDop6bmkbjkuovku7ZcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7IC8v5oyJ5LiLXG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7IC8vIOemu+W8gFxuICAgICAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbig1MCwgNTApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChlOiBjYy5FdmVudC5FdmVudE1vdXNlKSA9PiB7ICAvL+aMgee7reaMieS4i1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50UG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi54i26IqC54K55YaF6byg5qCH5Z2Q5qCH77yaXCIsIHBhcmVudFBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBhcmVudFBvcy54LCBwYXJlbnRQb3MueSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLngpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCAtIHRoaXMubm9kZS53aWR0aCAvIDIgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS54ICsgdGhpcy5ub2RlLndpZHRoIC8gMiA+IHRoaXMuZlZpZXdXaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMuZlZpZXdXaCAtIHRoaXMubm9kZS53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueSAtIHRoaXMubm9kZS5oZWlnaHQgLyAyIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMiA+IHRoaXMuZlZpZXdIZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuZlZpZXdIZyAtIHRoaXMubm9kZS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuiKgueCueS9jee9rnhcIiwgdGhpcy5ub2RlLngpO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiA1MCkge1xuICAgICAgICAgICAgdGhpcy56aHVqTm9kZS54ICs9IHRoaXMuc3BlZWQgKiBkdFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS54IDwgNTApIHtcbiAgICAgICAgICAgIHRoaXMuemh1ak5vZGUueCAtPSB0aGlzLnNwZWVkICogZHRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPiA1MCkge1xuICAgICAgICAgICAgdGhpcy56aHVqTm9kZS55ICs9IHRoaXMuc3BlZWQgKiBkdFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS55IDwgNTApIHtcbiAgICAgICAgICAgIHRoaXMuemh1ak5vZGUueSAtPSB0aGlzLnNwZWVkICogZHRcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zhujue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a689d7mGHlOW44P69796MZY', 'zhujue');
// scripts/zhujue.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        // 开启碰撞管理器
        var comg = cc.director.getCollisionManager();
        comg.enabled = true; //开启
        comg.enabledDebugDraw = true; //显示碰撞线
    };
    NewClass.prototype.update = function (dt) {
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        console.log(other.tag);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemh1anVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQW1CQSxDQUFDO0lBaEJHLHlCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLFVBQVU7UUFDVixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBRSxJQUFJO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPO0lBQ3pDLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtJQUVULENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBbEJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUI1QjtJQUFELGVBQUM7Q0FuQkQsQUFtQkMsQ0FuQnFDLEVBQUUsQ0FBQyxTQUFTLEdBbUJqRDtrQkFuQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIOW8gOWQr+eisOaSnueuoeeQhuWZqFxuICAgICAgICBsZXQgY29tZyA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgY29tZy5lbmFibGVkID0gdHJ1ZTsgIC8v5byA5ZCvXG4gICAgICAgIGNvbWcuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7IC8v5pi+56S656Kw5pKe57q/XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG5cbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKG90aGVyLnRhZyk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/josk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcam9zay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxjQUFjO0FBRWQ7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1RkM7UUFwRkcsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFrRmhDLENBQUM7SUE3RUcseUJBQU0sR0FBTjtRQUNJLFFBQVE7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFFdEMsVUFBVTtRQUNWLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkIsT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENB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QUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVsRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBbkZEO1FBREMsUUFBUTs4Q0FDWTtJQUhKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RjVCO0lBQUQsZUFBQztDQXZGRCxBQXVGQyxDQXZGcUMsRUFBRSxDQUFDLFNBQVMsR0F1RmpEO2tCQXZGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbi8vIGpz6L2sdHPova7nm5jmk43kvZzmlrnms5VcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtYXhTcGVlZDogbnVtYmVyID0gMDtcblxuICAgIGpveVN0aWNrQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGRpcjogYW55O1xuXG4gICAgcGxheWVyOiBjYy5Ob2RlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g6ZqQ6JePZnBzXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG5cbiAgICAgICAgLy8g6I635Y+WIGpveVN0aWNrQnRuIHBsYXllclxuICAgICAgICB0aGlzLmpveVN0aWNrQnRuID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoJ0NhbnZhcy96aHVqdWUnKVxuXG4gICAgICAgIC8vIOeOqeWutueahOenu+WKqOaWueWQkVxuICAgICAgICB0aGlzLmRpciA9IGNjLnYyKDAsIDApO1xuXG4gICAgICAgIC8vIOinpuaRuOS6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIOinpuaRuOS6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub2ZmKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIC8vIOW9k+inpuaRuOW8gOWni+aXtu+8jOiuvue9rmpveVN0aWNrQnRu55qE5L2N572uXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIHRoaXMuam95U3RpY2tCdG4uc2V0UG9zaXRpb24ocG9zKTtcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICAvLyDkuI3mlq3mlLnlj5hqb3lTdGlja0J0bueahOS9jee9rlxuICAgICAgICBsZXQgcG9zRGVsdGEgPSBldmVudC5nZXREZWx0YSgpO1xuICAgICAgICB0aGlzLmpveVN0aWNrQnRuLnNldFBvc2l0aW9uKHRoaXMuam95U3RpY2tCdG4ucG9zaXRpb24uYWRkKHBvc0RlbHRhKSk7XG5cbiAgICAgICAgLy8g6I635Y+W5pa55ZCRXG4gICAgICAgIHRoaXMuZGlyID0gdGhpcy5qb3lTdGlja0J0bi5wb3NpdGlvbi5ub3JtYWxpemUoKTtcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIC8vIOmHjee9rlxuICAgICAgICB0aGlzLmpveVN0aWNrQnRuLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcbiAgICB9XG5cbiAgICBvblRvdWNoQ2FuY2VsKGV2ZW50KSB7XG4gICAgICAgIC8vIOmHjee9rlxuICAgICAgICB0aGlzLmpveVN0aWNrQnRuLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8g6I635Y+WIHJhdGlvXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmpveVN0aWNrQnRuLnBvc2l0aW9uLm1hZygpO1xuICAgICAgICBsZXQgbWF4TGVuID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcbiAgICAgICAgbGV0IHJhdGlvID0gbGVuIC8gbWF4TGVuO1xuXG4gICAgICAgIC8vIOWcqCBqb3lTdGlja1BhbmVsIOWGhemZkOWItiBqb3lTdGlja0J0blxuICAgICAgICBpZiAocmF0aW8gPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmpveVN0aWNrQnRuLnNldFBvc2l0aW9uKHRoaXMuam95U3RpY2tCdG4ucG9zaXRpb24uZGl2KHJhdGlvKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnp7vliqh6aHVqdWVcbiAgICAgICAgbGV0IGRpcyA9IHRoaXMuZGlyLm11bCh0aGlzLm1heFNwZWVkICogcmF0aW8pO1xuICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbih0aGlzLnBsYXllci5wb3NpdGlvbi5hZGQoZGlzKSk7XG5cbiAgICAgICAgLy8g6ZmQ5Yi255S75biD5YaF55qEemh1anVlXG4gICAgICAgIGlmICh0aGlzLnBsYXllci54ID4gdGhpcy5wbGF5ZXIucGFyZW50LndpZHRoIC8gMilcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnggPSB0aGlzLnBsYXllci5wYXJlbnQud2lkdGggLyAyO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllci54IDwgLXRoaXMucGxheWVyLnBhcmVudC53aWR0aCAvIDIpXG4gICAgICAgICAgICB0aGlzLnBsYXllci54ID0gLXRoaXMucGxheWVyLnBhcmVudC53aWR0aCAvIDI7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnkgPiB0aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0IC8gMilcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnkgPSB0aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0IC8gMjtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXIueSA8IC10aGlzLnBsYXllci5wYXJlbnQuaGVpZ2h0IC8gMilcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnkgPSAtdGhpcy5wbGF5ZXIucGFyZW50LmhlaWdodCAvIDI7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ces.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ffd6zELMlC6IYF50XAbMRe', 'ces');
// scripts/ces.ts

// # 导入必要的库和模块
// import openai
// import requests
// import json
// # 设置OpenAI API密钥
// openai.api_key = "YOUR_API_KEY"
// # 定义一个函数，用于向OpenAI API发送请求并返回响应
// def generate_response(prompt):
//     response = openai.Completion.create(
//         engine="davinci",
//         prompt=prompt,
//         max_tokens=1024,
//         n=1,
//         stop=None,
//         temperature=0.5,
//     )
//     return response.choices[0].text.strip()
// # 定义一个函数，用于向图灵机器人API发送请求并返回响应
// def get_tuling_response(prompt):
//     url = "http://openapi.tuling123.com/openapi/api/v2"
//     data = {
//         "reqType": 0,
//         "perception": {
//             "inputText": {
//                 "text": prompt
//             }
//         },
//         "userInfo": {
//             "apiKey": "YOUR_API_KEY",
//             "userId": "123456"
//         }
//     }
//     headers = {
//         "Content-Type": "application/json"
//     }
//     response = requests.post(url, data=json.dumps(data), headers=headers)
//     return response.json()["results"][0]["values"]["text"]
// # 定义一个函数，用于启动聊天程序
// def start_chat():
//     print("欢迎使用ChatGPT4.0！")
//     while True:
//         prompt = input("你：")
//         if prompt == "退出":
//             print("ChatGPT4.0已退出。")
//             break
//         response = generate_response(prompt)
//         if response == "":
//             response = get_tuling_response(prompt)
//         print("ChatGPT4.0：" + response)
// # 启动聊天程序
// start_chat()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUdBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFFZCxtQkFBbUI7QUFDbkIsa0NBQWtDO0FBRWxDLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsMkNBQTJDO0FBQzNDLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUiw4Q0FBOEM7QUFFOUMsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUNuQywwREFBMEQ7QUFDMUQsZUFBZTtBQUNmLHdCQUF3QjtBQUN4QiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDLFlBQVk7QUFDWixRQUFRO0FBQ1Isa0JBQWtCO0FBQ2xCLDZDQUE2QztBQUM3QyxRQUFRO0FBQ1IsNEVBQTRFO0FBQzVFLDZEQUE2RDtBQUU3RCxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixzQ0FBc0M7QUFDdEMsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyw2QkFBNkI7QUFDN0IscURBQXFEO0FBQ3JELDBDQUEwQztBQUUxQyxXQUFXO0FBQ1gsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi8vICMg5a+85YWl5b+F6KaB55qE5bqT5ZKM5qih5Z2XXHJcbi8vIGltcG9ydCBvcGVuYWlcclxuLy8gaW1wb3J0IHJlcXVlc3RzXHJcbi8vIGltcG9ydCBqc29uXHJcblxyXG4vLyAjIOiuvue9rk9wZW5BSSBBUEnlr4bpkqVcclxuLy8gb3BlbmFpLmFwaV9rZXkgPSBcIllPVVJfQVBJX0tFWVwiXHJcblxyXG4vLyAjIOWumuS5ieS4gOS4quWHveaVsO+8jOeUqOS6juWQkU9wZW5BSSBBUEnlj5HpgIHor7fmsYLlubbov5Tlm57lk43lupRcclxuLy8gZGVmIGdlbmVyYXRlX3Jlc3BvbnNlKHByb21wdCk6XHJcbi8vICAgICByZXNwb25zZSA9IG9wZW5haS5Db21wbGV0aW9uLmNyZWF0ZShcclxuLy8gICAgICAgICBlbmdpbmU9XCJkYXZpbmNpXCIsXHJcbi8vICAgICAgICAgcHJvbXB0PXByb21wdCxcclxuLy8gICAgICAgICBtYXhfdG9rZW5zPTEwMjQsXHJcbi8vICAgICAgICAgbj0xLFxyXG4vLyAgICAgICAgIHN0b3A9Tm9uZSxcclxuLy8gICAgICAgICB0ZW1wZXJhdHVyZT0wLjUsXHJcbi8vICAgICApXHJcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuY2hvaWNlc1swXS50ZXh0LnN0cmlwKClcclxuXHJcbi8vICMg5a6a5LmJ5LiA5Liq5Ye95pWw77yM55So5LqO5ZCR5Zu+54G15py65Zmo5Lq6QVBJ5Y+R6YCB6K+35rGC5bm26L+U5Zue5ZON5bqUXHJcbi8vIGRlZiBnZXRfdHVsaW5nX3Jlc3BvbnNlKHByb21wdCk6XHJcbi8vICAgICB1cmwgPSBcImh0dHA6Ly9vcGVuYXBpLnR1bGluZzEyMy5jb20vb3BlbmFwaS9hcGkvdjJcIlxyXG4vLyAgICAgZGF0YSA9IHtcclxuLy8gICAgICAgICBcInJlcVR5cGVcIjogMCxcclxuLy8gICAgICAgICBcInBlcmNlcHRpb25cIjoge1xyXG4vLyAgICAgICAgICAgICBcImlucHV0VGV4dFwiOiB7XHJcbi8vICAgICAgICAgICAgICAgICBcInRleHRcIjogcHJvbXB0XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIFwidXNlckluZm9cIjoge1xyXG4vLyAgICAgICAgICAgICBcImFwaUtleVwiOiBcIllPVVJfQVBJX0tFWVwiLFxyXG4vLyAgICAgICAgICAgICBcInVzZXJJZFwiOiBcIjEyMzQ1NlwiXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgaGVhZGVycyA9IHtcclxuLy8gICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmVzcG9uc2UgPSByZXF1ZXN0cy5wb3N0KHVybCwgZGF0YT1qc29uLmR1bXBzKGRhdGEpLCBoZWFkZXJzPWhlYWRlcnMpXHJcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpW1wicmVzdWx0c1wiXVswXVtcInZhbHVlc1wiXVtcInRleHRcIl1cclxuXHJcbi8vICMg5a6a5LmJ5LiA5Liq5Ye95pWw77yM55So5LqO5ZCv5Yqo6IGK5aSp56iL5bqPXHJcbi8vIGRlZiBzdGFydF9jaGF0KCk6XHJcbi8vICAgICBwcmludChcIuasoui/juS9v+eUqENoYXRHUFQ0LjDvvIFcIilcclxuLy8gICAgIHdoaWxlIFRydWU6XHJcbi8vICAgICAgICAgcHJvbXB0ID0gaW5wdXQoXCLkvaDvvJpcIilcclxuLy8gICAgICAgICBpZiBwcm9tcHQgPT0gXCLpgIDlh7pcIjpcclxuLy8gICAgICAgICAgICAgcHJpbnQoXCJDaGF0R1BUNC4w5bey6YCA5Ye644CCXCIpXHJcbi8vICAgICAgICAgICAgIGJyZWFrXHJcbi8vICAgICAgICAgcmVzcG9uc2UgPSBnZW5lcmF0ZV9yZXNwb25zZShwcm9tcHQpXHJcbi8vICAgICAgICAgaWYgcmVzcG9uc2UgPT0gXCJcIjpcclxuLy8gICAgICAgICAgICAgcmVzcG9uc2UgPSBnZXRfdHVsaW5nX3Jlc3BvbnNlKHByb21wdClcclxuLy8gICAgICAgICBwcmludChcIkNoYXRHUFQ0LjDvvJpcIiArIHJlc3BvbnNlKVxyXG5cclxuLy8gIyDlkK/liqjogYrlpKnnqIvluo9cclxuLy8gc3RhcnRfY2hhdCgpXHJcblxyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a062FlYeBEKovInhB//xip', 'camera');
// scripts/camera.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zhujue = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.zhujue = cc.find('Canvas/zhujue');
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        var zhujue = this.zhujue.position;
        this.node.setPosition(zhujue.x, zhujue.y);
        // console.log(this.node.position.x, this.node.position.y);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUJDO1FBakJHLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBaUIzQixDQUFDO0lBZkcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLDJEQUEyRDtJQUcvRCxDQUFDO0lBbEJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUI1QjtJQUFELGVBQUM7Q0FuQkQsQUFtQkMsQ0FuQnFDLEVBQUUsQ0FBQyxTQUFTLEdBbUJqRDtrQkFuQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgemh1anVlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy56aHVqdWUgPSBjYy5maW5kKCdDYW52YXMvemh1anVlJyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgbGV0IHpodWp1ZSA9IHRoaXMuemh1anVlLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oemh1anVlLngsIHpodWp1ZS55KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcblxuXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
