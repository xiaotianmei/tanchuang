function login() {
    var returnUrl = jQuery.getUrlParam("ReturnUrl");
    if (returnUrl == null || returnUrl == "") {
        returnUrl = document.URL;
        if (returnUrl.toLowerCase().indexOf("/user/") > -1 || returnUrl.toLowerCase().indexOf("/member/resetpwd.aspx") > -1) {
            return location.href = Globals.PortalWebsiteUrl + "/user/login.aspx", !1
        }
    }

    return location.href = Globals.PortalWebsiteUrl + "/user/login.aspx?ReturnUrl=" + returnUrl,
    !1
}

function register() {
    var returnUrl = jQuery.getUrlParam("ReturnUrl");
    if (returnUrl == null || returnUrl == "") {
        returnUrl = document.URL;
        if (returnUrl.toLowerCase().indexOf("/user/") > -1 || returnUrl.toLowerCase().indexOf("/member/resetpwd.aspx") > -1 || returnUrl.toLowerCase().indexOf(Globals.PortalWebsiteUrl) > -1) {
            return location.href = Globals.PortalWebsiteUrl + "/user/register.aspx", !1
        }
    }

    return location.href = Globals.PortalWebsiteUrl + "/user/register.aspx?ReturnUrl=" + returnUrl,
    !1
}

function logout() {
    var returnUrl = jQuery.getUrlParam("ReturnUrl");
    if (returnUrl == null || returnUrl == "") {
        returnUrl = document.URL;
        if (returnUrl.toLowerCase().indexOf("/user/") > -1 || returnUrl.toLowerCase().indexOf("/member/resetpwd.aspx") > -1) {
            return location.href = Globals.PortalWebsiteUrl + "/user/logout.aspx", !1
        }
    }

    return location.href = Globals.PortalWebsiteUrl + "/user/logout.aspx?ReturnUrl=" + returnUrl,
    !1
}

(function (jQuery) {
    jQuery.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);