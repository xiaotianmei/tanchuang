
var _mvq = window._mvq || []; 
window._mvq = _mvq;
_mvq.push(['$setAccount', 'm-250005-0']);
_mvq.push(['$setGeneral', '', '', /*用户名*/ '', /*用户id*/ '']);//如果不传用户名、用户id，此句可以删掉
_mvq.push(['$logConversion']);
(function() {
    var mvl = document.createElement('script');
    mvl.type = 'text/javascript'; mvl.async = true;
    mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js' : 'http://static.mediav.com/mvl.js');
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(mvl, s); 
})();

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?d49ed4ba53187102a4f3f986b0217f4a";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();

var gdt_tracker = gdt_tracker || [];
gdt_tracker.push(["set_source_id", "31464"]);
(function() {
    var doc=document, h=doc.getElementsByTagName("head")[0], s=doc.createElement("script");
    s.async=true; s.src="http://qzs.qq.com/qzone/biz/res/gt.js";
    h && h.insertBefore(s,h.firstChild)
})();

