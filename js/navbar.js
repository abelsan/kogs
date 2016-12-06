
kogs.logout = function(){
    var cookie = kogs.readCookie('token');

    // if user is logged in, show logout button
    if(cookie){   
        kogs.eraseCookie('userid');
        kogs.eraseCookie('token');    
    }
    window.location.replace('index.html');
};

kogs.hello = function(){
    console.log('Hello');
};

kogs.navbar = function(){
    var page     = kogs.getPage();
    var userid   = kogs.readCookie('userid');
    var elements = {};

    elements.home   = '<li><a href="index.html">Home</a></li>';

    if (userid)    {
        elements.kogs = '<li><a href="kogs.html">Kogs</a></li>'; 
        elements.logout = '<li><a onclick="kogs.logout()" href="#">Logout</a></li>'; 
    }
    else{
        elements.login = '<li><a href="login.html">Login</a></li>';
    }

    elements.about  = '<li><a href="about.html">About</a></li>';

    function activateMenu(element){
        elements[page] = element.replace('<li>', '<li class="active">');
    }
    activateMenu(elements[page]);

    function stringify(elements){
        var html = '';
        var properties = Object.keys(elements);
        properties.forEach(function(property){
            html += elements[property];
        });
        return html;
    }

    var test = stringify(elements);

    var html = '';
    html = '<!-- Fixed navbar -->' + 
        '<nav class="navbar navbar-default navbar-fixed-top">' +
        '<div class="container">' +
            '<div class="navbar-header">' +
                '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
                    '<span class="sr-only">Toggle navigation</span>' +
                    '<span class="icon-bar"></span>' +
                    '<span class="icon-bar"></span>' +
                    '<span class="icon-bar"></span>' +
                '</button>' +
                '<a class="navbar-brand" href="index.html">Kogs</a>' +
            '</div>' +
            '<div id="navbar" class="collapse navbar-collapse">' +
                '<ul class="nav navbar-nav">' +
                    stringify(elements) + 
                '</ul>' +
            '</div><!--/.nav-collapse -->' +
        '</div>' +
        '</nav>';
    document.getElementById('fixednavbar').innerHTML = html;
};

kogs.getPage = function(){
    var page = window.location.pathname;
    if (page === '/login.html') return 'login';
    if (page === '/kogs.html') return 'kogs';    
    if (page === '/about.html') return 'about';        
    return 'home';
};



