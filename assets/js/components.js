'use strict';

var webComponents = (function() {

    var publicMethods = {};

    var mainMenu = function() {
        var menuContent = '';
        
        menuContent += '<nav class="d-flex navbar navbar-expand-lg navbar-dark">';
        menuContent += '<a class="navbar-brand flex-grow-1" href="index.html">'
        menuContent += '<img src="assets/img/nasa-logo.png" width="50" height="50" class="d-inline-block align-top mr-2" alt="">';
        menuContent += '</a>';
        menuContent += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">';
        menuContent += '<span class="navbar-toggler-icon"></span>';
        menuContent += '</button>';
        menuContent += '<div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">';
        menuContent += '<ul class="navbar-nav mr-auto mt-2 mt-lg-0">';
        menuContent += '<li class="nav-item active">';
        menuContent += '<a class="nav-link" href="index.html">Home</a>';
        menuContent += '</li>';
        menuContent += '<li class="nav-item active">';
        menuContent += '<a class="nav-link" href="about-nasa-api.html">About</a>';
        menuContent += '</li>';
        menuContent += '<li class="nav-item active">';
        menuContent += '<a class="nav-link" href="upcoming-nasa-api.html">Upcoming</a>';
        menuContent += '</li>';
        menuContent += '</ul>';
        menuContent += '</div>';
        menuContent += '</nav>';

        return menuContent;
    }

    var mainfooter = function() {
        var footerContent = '';

        footerContent += '<div class="container text-center">';
        footerContent += '<small>Copyright &copy; NASA API Hub</small>';
        footerContent += '</div>';

        return footerContent;
    }

    publicMethods.renderMenu = function(header, footer) {
        document.querySelector(header).innerHTML = mainMenu();
        document.querySelector(footer).innerHTML = mainfooter();
    }

    return publicMethods;

}) ();

webComponents.renderMenu('header', 'footer');
