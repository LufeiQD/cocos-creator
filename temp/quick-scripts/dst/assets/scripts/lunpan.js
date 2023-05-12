
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