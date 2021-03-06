// JavaScript Document
XIAOMI.namespace("xmSh"), XIAOMI.xmsh = {
    init: function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        a.showFooterStep = 0, a.pageIndex = 1, a.loadPage(), a.fpEvent(), a.page10.init();
		$(".J_mouseDown").on("click", function() {
            $.fn.fullpage.moveTo(2)
        });
		$("#J_page_03_Tab").on("click", ".item", function() {
            var a = parseInt($(this).index());
            $.fn.fullpage.moveTo(3, a), $(this).addClass("current").siblings().removeClass("current")
        });
		$("#J_page_04_Bulb").on("click", function() {
            var a = $(this);
            $(this).find(".dot").animate({
                top: "173px",
                left: "173px",
                opacity: "0"
            }, 500, function() {
                a.fadeOut(500), $("#section04").find(".item-1").fadeOut(500), $("#section04").find(".item-2").fadeIn(500), b = 1
            })
        });
		$("#section06").find(".ripple").on("click", function() {
            var a = $(this);
            a.hasClass("ripple-disabled") || (a.siblings(".hand").addClass("hand-active"), setTimeout(function() {
                a.siblings(".phone").addClass("phone-active-1").siblings(".hand").removeClass("hand-active").siblings(".tip").addClass("tip-active")
            }, 600))
        });
		$("#section06").find(".tip").on("click", function() {
            $("#J_page_06_Tab").find(".item").eq(1).trigger("click")
        });
		$("#J_page_06_Tab").on("click", ".item", function() {
            var a = $(this).index(),
                b = $(this).parent();
            $(this).addClass("current").siblings().removeClass("current"), 0 === a ? (b.siblings(".hand").removeClass("hand-2").siblings(".phone").removeClass("phone-active-2").removeClass("phone-active-1"), $("#J_unlock").removeClass("unlock-2").addClass("unlock-1")) : 1 === a && (b.siblings(".hand").addClass("hand-active").addClass("hand-2").siblings(".phone").addClass("phone-active-2"), setTimeout(function() {
                b.siblings(".hand").removeClass("hand-active")
            }, 600), $("#J_unlock").removeClass("unlock-1").addClass("unlock-2"))
        });
		 $(".J_page_08_tab").on("click", ".tab-nav > span", function() {
            var b, c, d = $(this).index();
            return $(this).addClass("current").siblings().removeClass("current"), $(this).parent().siblings(".txt-box").find(".txt").eq(d).addClass("txt-fadeIn").siblings(".txt").removeClass("txt-fadeIn").siblings(".defautl-txt").hide(), $(this).hasClass("disabled") ? !1 : (b = $(this).parent().siblings(".video-box").find(".video").eq(d), c = b.find("video").attr("id"), b.show().siblings().hide().find("video").hide(), void a.videoPlay(c))
        });
		
		 $("body").on("mousewheel", function(e, f) {
            if (e.preventDefault(), window.mousewheelStart === !0) return !1;
            window.mousewheelStart = !0, a.listenMousewheeEvent();
            var g = f > 0 ? !0 : !1,
                h = 0 > f ? !0 : !1;
            if (1 === a.pageIndex) {
                if (g && a.showHeader(), h && window.headerIsShow) return a.hideHeader(), !1
            } else if (3 === a.pageIndex) {
                if (h) return c += 1, c > 2 ? (c = 2, $.fn.fullpage.moveTo(4)) : $("#J_page_03_Tab").find(".item").eq(c).trigger("click"), !1;
                if (g) return c -= 1, 0 > c ? (c = 0, $.fn.fullpage.moveTo(2)) : $("#J_page_03_Tab").find(".item").eq(c).trigger("click"), !1
            } else if (4 === a.pageIndex) {
                if (h) return b += 1, b > 2 ? (b = 2, $.fn.fullpage.moveTo(5)) : $("#section04").find(".item").eq(b).fadeIn(500).siblings().fadeOut(500), !1;
                if (g) return b -= 1, 0 > b ? (b = 0, $.fn.fullpage.moveTo(3)) : $("#section04").find(".item").eq(b).fadeIn(500).siblings().fadeOut(500), 0 === b && $("#section04").find(".bulb").fadeIn().find(".dot").attr("style", ""), !1
            } else if (8 === a.pageIndex) {
                if (h) return d += 1, d > 1 ? (d = 1, $.fn.fullpage.moveTo(9)) : ($("#section08").find(".item").eq(d).fadeIn(500).siblings().fadeOut(500), 1 === d && ($("#section08").find(".item").eq(d).find(".video-box .video").show(), a.videoPlay("section08_v_3"))), !1;
                if (g) return d -= 1, 0 > d ? (d = 0, $.fn.fullpage.moveTo(7)) : $("#section08").find(".item").eq(d).fadeIn(500).siblings().fadeOut(500), !1
            } else if (10 === a.pageIndex) {
                if (g) {
                    if (0 === a.showFooterStep) return !0;
                    1 === a.showFooterStep ? $(".site-topbar").css({
                        "margin-top": "-197px"
                    }) : (a.showFooterStep = 2) && $(".site-topbar").css({
                        "margin-top": "-750px"
                    }), a.showFooterStep -= 1
                }
                return h && (a.showFooterStep += 1, 1 === a.showFooterStep ? $(".site-topbar").addClass("fp-easing").css({
                    "margin-top": "-750px"
                }) : 2 === a.showFooterStep && $(".site-topbar").addClass("fp-easing").css({
                    "margin-top": "-1300px"
                })), !1
            }
        })
    },
    fpEvent: function() {
        $("#shPage").fullpage({
            sectionsColor: ["#fff", "#4285f4", "#fff", "#fff", "#fff", "#fff", "#25282c", "#fff", "#fff", "#a2b900"],
            anchors: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            navigationTooltips: ["首页", "功能概述", "运动记录", "睡眠记录&闹钟", "蓝牙同步APP", "手环解锁", "来电提醒", "极致做工&芯片", "了解更多", "多彩百搭"],
            css3: !0,
            navigation: !0,
            verticalCentered: !1,
            navigationPosition: "right",
            afterRender: function() {
                XIAOMI.xmsh.page01()
            },
            afterLoad: function(a, b) {
                switch (XIAOMI.xmsh.pageIndex = b, XIAOMI.xmsh.showFooterStep = 0, b) {
                    case 2:
                        XIAOMI.xmsh.page02();
                        break;
                    case 4:
                        XIAOMI.xmsh.page04();
                        break;
                    case 5:
                        XIAOMI.xmsh.page05();
                        break;
                    case 6:
                        XIAOMI.xmsh.page06();
                        break;
                    case 7:
                        XIAOMI.xmsh.page07();
                        break;
                    case 8:
                        XIAOMI.xmsh.page08();
                        break;
                    case 9:
                        XIAOMI.xmsh.page09()
                }
            },
            onLeave: function() {
                XIAOMI.xmsh.hideHeader()
            },
            onSlideLeave: function() {},
            afterSlideLoad: function(a, b, c) {
                "slide1" === c ? XIAOMI.xmsh.page03(0, "2536") : "slide2" === c ? XIAOMI.xmsh.page03(1, "7123") : "slide3" === c && XIAOMI.xmsh.page03(2, "10396")
            }
        })
    },
    loadPage: function() {
        var a = function() {
            var a = $(window).height();
            $("#shBox").height(a)
        };
        a(), $(window).on("resize", function() {
            a()
        }), this.hideHeader()
    },
    hideHeader: function() {
        $(".site-topbar").addClass("fp-easing").css({
            "margin-top": "-197px"
        }), $("#shBar").addClass("sh-bar-fixed"), window.headerIsShow = !1
    },
    showHeader: function() {
        $(".site-topbar").css({
            "margin-top": "0"
        }), $("#shBar").removeClass("sh-bar-fixed"), window.headerIsShow = !0
    },
    listenMousewheeEvent: function() {
        window.listenMousewheel && clearTimeout(window.listenMousewheel), window.listenMousewheel = setTimeout(function() {
            window.mousewheelStart = !1
        }, 800)
    },
    videoPlay: function(a) {
        var b, c, d = document.getElementById(a),
            e = document.createElement("video");
        e.canPlayType && (b = e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), c = e.canPlayType('video/ogg; codecs="theora, vorbis"')), (b || c) && (d.autoplay = !0, d.load(), $("#" + a).fadeIn(), d.oncanplay = function() {
            d.style.display = "block"
        })
    },
    videoInit: function(a) {
        var b = document.getElementById(a);
        b.ended && (b.currentTime = 0, b.pause())
    },
    page01: function() {
        this.videoPlay("shVideo")
    },
    page02: function() {},
    page03: function(a, b) {
        var c, d, e;
        for (c = b.split(""), d = 0; d < c.length; d += 1) e = "num num-3 num-3-" + c[d], $("#section03").find(".app").eq(a).find(".num-box").find(".num").eq(d).attr("class", e), $("#section03").find(".txt").eq(a).addClass("animation-sh-txt");
        $("#J_page_03_Tab").find(".item").eq(a).addClass("current").siblings().removeClass("current")
    },
    page04: function() {
        $("#section04").find(".txt").addClass("animation-sh-txt")
    },
    page05: function() {
        $("#section05").find(".pic").each(function() {
            var a = $(this).index();
            $(this).addClass("pic-" + a + "-active")
        })
    },
    page06: function() {},
    page07: function() {},
    page08: function() {
        var a = $("#section08").find(".item-1   .video-box   .video").eq(0);
        a.show().siblings().hide(), a.find("video").show()
    },
    page09: function() {
        $("#section09").find(".info > li > span").addClass("active")
    },
    page10: {
        init: function() {
            var a = this;
            a.watchEvent()
        },
        autoPlay: function() {},
        watchEvent: function() {
            $(".J_scrollbar").find("li").hover(function() {
                $(this).addClass("showbig")
            }, function() {
                $(this).removeClass("showbig")
            }).on("click", function() {
                var a = $(this).attr("data-class");
                $("#J_img").removeAttr("class"), $("#J_img").addClass("img-box").addClass(a)
            })
        }
    }
}, $(document).ready(function() {
    XIAOMI.xmsh.init();
	$(".J_cover_tab").find("li").on("click", function() {
        $(".J_cover_tab").find("li").removeClass("choose");
	    $(this).addClass("choose");
		$(".cover-color-img").fadeOut(500).eq($(this).index()).fadeIn(500)
    });
	$("#J_barMenu").on("click", ".item", function() {
        var a = $(this).attr("data-target");
        $(a).show();
		 "#shBox" === a ? (XIAOMI.xmsh.init(), $("#shSpc").hide()) : "#shSpc" === a && ($("#shBox").hide().fullpage.destroy("all"), XIAOMI.xmsh.showHeader(), $("body").off())
    });
    var a = XIAOMI.GLOBAL_CONFIG.orderSite + "/misc/getstarstock/hdid/shouhuan20141110?jsonpcallback=?",
        b = "2143000001";
    $(".J_buybtn").attr("href", XIAOMI.GLOBAL_CONFIG.orderSite + "/cart/add/" + b), $.getJSON(a, function(a) {
        var b = a[0];
        b.is_cos && ($(".J_buybtn").hide(), $(".J_lack").show())
    })
});