var kogs = {};

kogs.createCookie = function(name,value,days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
};

kogs.readCookie = function (name) {
    name += '=';
    for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
        if (!ca[i].indexOf(name))
            return ca[i].replace(name, '');
};

kogs.eraseCookie = function(name) {
    kogs.createCookie(name,"",-1);
};