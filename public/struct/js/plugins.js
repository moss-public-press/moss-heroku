// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

/*! Categorizr.js: Device Detection Scripts | https://github.com/Skookum/categorizr.js/blob/master/license.md */
(function(a,b,c){typeof module!="undefined"?module.exports=c(a,b):typeof define=="function"&&typeof define.amd=="object"?define(c):b[a]=c(a,b)})("categorizr",this,function(a,b){function k(){var a=g.length;while(a--)j["is"+g[a]]=i(g[a].toLowerCase())}function l(){d&&(f.className=f.className.replace(/(^|\s)desktop|tablet|tv|mobile(\s|$)/,"$1$2")+(" "+h))}function m(){k(),l()}if(!b.navigator&&!b.request)return!1;var c=b.navigator&&b.navigator.userAgent||b.request&&b.request.headers["user-agent"],d=b!=null&&b==b.window,e=!d,f=e?null:document.documentElement,g="Tv Desktop Tablet Mobile".split(" "),h=c.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)?"tv":c.match(/Xbox|PLAYSTATION.3|Wii/i)?"tv":c.match(/iP(a|o)d/i)||c.match(/tablet/i)&&!c.match(/RX-34/i)||c.match(/FOLIO/i)?"tablet":c.match(/Linux/i)&&c.match(/Android/i)&&!c.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)?"tablet":c.match(/Kindle/i)||c.match(/Mac.OS/i)&&c.match(/Silk/i)?"tablet":c.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i)||c.match(/MB511/i)&&c.match(/RUTEM/i)?"tablet":c.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i)?"mobile":c.match(/Opera/i)&&c.match(/Windows.NT.5/i)&&c.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)?"mobile":c.match(/Windows.(NT|XP|ME|9)/)&&!c.match(/Phone/i)||c.match(/Win(9|.9|NT)/i)?"desktop":c.match(/Macintosh|PowerPC/i)&&!c.match(/Silk/i)?"desktop":c.match(/Linux/i)&&c.match(/X11/i)?"desktop":c.match(/Solaris|SunOS|BSD/i)?"desktop":c.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i)&&!c.match(/Mobile/i)?"desktop":"mobile",i=function(a){return h===a},j=function(){var a=[].slice.call(arguments,0);return a.length===2&&h===a[0]?(h=a[1],m()):a.length===1&&typeof a[0]=="string"&&(h=a[0],m()),h};return j.is=i,m(),j});

/*! http://mths.be/smoothscroll v1.5.2 by @mathias */
(function(a,c){var b=(function(){var d=c(a.documentElement),f=c(a.body),e;if(d.scrollTop()){return d}else{e=f.scrollTop();if(f.scrollTop(e+1).scrollTop()==e){return d}else{return f.scrollTop(e)}}}());c.fn.smoothScroll=function(d){d=~~d||400;return this.find('a[href*="#"]').click(function(f){var g=this.hash,e=c(g);if(location.pathname.replace(/^\//,'')===this.pathname.replace(/^\//,'')&&location.hostname===this.hostname){if(e.length){f.preventDefault();b.stop().animate({scrollTop:e.offset().top},d,function(){location.hash=g})}}}).end()}}(document,jQuery));