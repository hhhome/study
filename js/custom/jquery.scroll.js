// JavaScript Document
(function($){

$.fn.scrollx = function(settings) {
            var state = 0;
            var now = 0;
            var con = this;
            var defaults = {
                direction: "left",
                speed: 400,
                auto: 3000,
                size: null,
                itemTagName: "li",
                itemSize: null,
                prev: null,
                next: null,
                prevClick: null,
                nextClick: null,
                scrollEvent: null,
                listBtn: null,
                listHoverClassName: "hover",
                listEvent: "mouseover"
            };
            var settings = $.extend(defaults, settings);
            var childrenHtml = con.html();
            var childrenSize;
            if (settings.itemSize) {
                childrenSize = settings.itemSize;
            } else {
                if (direc(settings.direction).way) {
                    childrenSize = con.find(settings.itemTagName).outerWidth(true);
                } else {
                    childrenSize = con.find(settings.itemTagName).outerHeight(true);
                }
            }
            var size;
            var length = con.find(settings.itemTagName).length;
            if (settings.size) {
                size = settings.size;
            } else {
                size = childrenSize * length;
            }
            var appendHtml = ""
            if (direc(settings.direction).way) {
                outerHtml = "<div style=\"width:" + size * 2 + "px;position: absolute; white-space: nowrap; overflow: hidden; \"></div>";
                innerHtml = "<div style='float: left; display: inline; '>" + childrenHtml + "</div><div style='float: left; display: inline; '>" + childrenHtml + "</div>";
            } else {
                outerHtml = "<div style=\"height:" + size * 2 + "px;position: absolute;\"></div>";
                innerHtml = "<div>" + childrenHtml + "</div><div>" + childrenHtml + "</div>";
            }
            con.css({
                "overflow": "hidden",
                "position": "relative"
            }).empty().append(outerHtml).children().append(innerHtml);
            var s = null;
            var changeCSS = function(n) {
                if (direc(settings.direction).way) {
                    con.children().stop().css("left", n);
                } else {
                    con.children().stop().css("top", n);
                }
            };
            var doAnimate = function(now) {
                if (settings.auto) {
                    stopTimeout();
                }
                var animateObject = {
                    "left": now + "px"
                };
                if (!direc(settings.direction).way) {
                    animateObject = {
                        "top": now + "px"
                    };
                }
                con.children().stop().animate(animateObject, settings.speed, function() {
                    if (settings.auto) {
                        startTimeout();
                    }
                });
            };
            var changeState = function(n) {
                if (n) {
                    (state + 1 == length) ? state = 0: state++;
                } else {
                    (state == 0) ? state = length: state--;
                }
                $(settings.listBtn).removeClass(settings.listHoverClassName).eq(state).addClass(settings.listHoverClassName);
            };
            var doScroll = function(n) {
                if (settings.listBtn) {
                    changeState(n);
                }
                if (n) {
                    if (now <= -size) {
                        changeCSS(0);
                        now = -childrenSize;
                        doAnimate(now);
                    } else {
                        now -= childrenSize;
                        doAnimate(now);
                    }
                } else {

                    if (now) {
                        now += childrenSize;
                        doAnimate(now);
                    } else {
                        changeCSS(-size);
                        now = -size + childrenSize;
                        doAnimate(now);
                    }
                }
                if (settings.scrollEvent) {
                    settings.scrollEvent(now, length);
                }
            };
            if (settings.listBtn) {
                $(settings.listBtn).each(function(index, element) {
                    if (settings.listEvent == "mouseover") {
                        $(this).mouseover(function() {
                            if (settings.listHoverClassName) {
                                $(settings.listBtn).removeClass(settings.listHoverClassName);
                                $(this).addClass(settings.listHoverClassName);
                            }
                            now = -childrenSize * (index);
                            doAnimate(now);
                        });
                    } else {
                        $(this).click(function() {
                            if (settings.listHoverClassName) {
                                $(settings.listBtn).removeClass(settings.listHoverClassName);
                                $(this).addClass(settings.listHoverClassName);
                            }
                            now = -childrenSize * (index);
                            doAnimate(now);
                        });
                    }
                });
            }
            var startTimeout = function() {
                s = setTimeout(function() {
                    doScroll(direc(settings.direction).direction);
                }, settings.auto);
            };
            var stopTimeout = function() {
                clearTimeout(s);
            };
            if (settings.auto) {
                startTimeout();
                con.hover(function() {
                    stopTimeout();
                }, function() {
                    startTimeout();
                });
            }
            if (settings.next) {
                $(settings.next).click(function() {
                    doScroll(1);
                    if (settings.nextClick) {
                        settings.nextClick();
                    }
                });
            }
            if (settings.prev) {
                $(settings.prev).click(function() {
                    doScroll(0);
                    if (settings.prevClick) {
                        settings.prevClick();
                    }
                });
            }
			
			function direc(s) {
                switch (s) {
                    case "left":
                        return {
                            way: 1,
                            direction: 1
                        }
                        break;
                    case "right":
                        return {
                            way: 1,
                            direction: 0
                        }
                        break;
                    case "top":
                        return {
                            way: 0,
                            direction: 1
                        }
                        break;
                    case "down":
                        return {
                            way: 0,
                            direction: 0
                        }
                        break;
                    default:
                        return false;
                        break;
                }
			}
			return con;
	}
			
})(jQuery);