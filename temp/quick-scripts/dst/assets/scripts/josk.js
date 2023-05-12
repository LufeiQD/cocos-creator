
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