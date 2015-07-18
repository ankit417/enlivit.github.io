var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
new WOW().init();
jQuery(document).ready(function($) {
    $(".mobile-menu-btn").click(function() {
        $(".body-wrap").toggleClass("body-left");
        $(".mobile-menu").toggleClass("menu-left");
        $(".mobile-menu-btn").toggleClass("menu-btn-left");
    });
    $(".godown").click(function(e) {
        $('html, body').animate({
            scrollTop: $("section").first().offset().top
        }, 1500);
    });
    $(".header .ebtn").click(function(e) {
        $('html, body').animate({
            scrollTop: $("#section3").offset().top
        }, 1500);
    });
    //google maps show event
    $(".view_map,.map-overlay").click(function(e) {
        e.preventDefault();
        //$(".footer").slideUp();
        $(".map-overlay").fadeOut();
        $(".close1").fadeIn();
    });
    //
    $(".close1").click(function() {
        $(".map-overlay").fadeIn();
        $(".close1").fadeOut();
    });
    //scroll and hightlight menu
    $(".mobile-menu ul li a, .nav1 ul li a").click(function(e) {
        e.preventDefault();
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        $('html, body').animate({
            scrollTop: $(refElement).offset().top
        }, 1500);
    });
    $(window).scroll(function(event) {
        var scrollPos = $(document).scrollTop();
        $('.nav1 ul li a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav1 ul li a').removeClass("nav1hover");
                currLink.addClass("nav1hover");
            } else {
                currLink.removeClass("nav1hover");
            }
             if(scrollPos > $(".section1").position().top){
            $(".nav1").css({ background:'rgba(0,0,0,.9)'});
        }else if(scrollPos <= $(".section1").position().top){
                $(".nav1").css({ background:'rgba(0,0,0,.3)'});
        }
            
        });
    });
    $(window).scroll(function() {
        if ($('.body-wrap').hasClass('body-left')) {
            $('.mobile-menu-btn').css({
                opacity: 1
            })
        } else {
            if ($(document).scrollTop() > 30) {
                $('.mobile-menu-btn').css({
                    opacity: 0
                });
            } else {
                $('.mobile-menu-btn').css({
                    opacity: 1
                });
            }
        }
    });
    $("#tools").owlCarousel({
        items: 4,
        //        navigation: true,
        autoPlay: true,
        pagination: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 4],
        itemsTablet: [768, 4],
        itemsMobile: [479, 3]
    });
    $("#tm").owlCarousel({
        items: 1,
        //        navigation: true,
        autoPlay: true,
        //        pagination: false
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
    });

    function header_height() {
        var windowHeight = $(window).height();
        $(".header").css({
            height: windowHeight + "px"
        });
    }
    $(window).resize(function() {
        if ($(window).width() < 1025) {
            header_height();
        }
    });
    header_height();
    //    $( ".tools-item" ).bind( "click", function() {
    //  $( this ).children(".overlay").fadeToggle();
    //});
    $(".tools-item").hover(function() {
        $(this).children(".overlay").fadeToggle();
    });
});

//google maps
//function initialize() {
//    var myLatlng = new google.maps.LatLng(27.7069179, 85.3375574);
//    var mapOptions = {
//        center: myLatlng,
//        zoom: 16
//    };
//    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//    var marker = new google.maps.Marker({
//        position: myLatlng,
//        map: map,
//        title: 'Enliv Information Technology'
//    });
//}


function initialize() {
var myLatlng = new google.maps.LatLng(27.7069179, 85.3375574);
  // Create an array of styles.
    
//  var styles = [
//    {
//      stylers: [
//        { hue: "#00ffe6" },
//        { saturation: -20 }
//      ]
//    },{
//      featureType: "road",
//      elementType: "geometry",
//      stylers: [
//        { lightness: 100 },
//        { visibility: "simplified" }
//      ]
//    },{
//      featureType: "road",
//      elementType: "labels",
//      stylers: [
//        { visibility: "off" }
//      ]
//    }
//  ];

    var styles = [
  {
    "stylers": [
      { "hue": "#00a1ff" },
      { "saturation": 2 }
    ]
  }
];
    
    
  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 16,
       navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
        scrollwheel: false,
       //draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(27.7069179, 85.3375574),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
     var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Enliv Information Technology'
    });
}


google.maps.event.addDomListener(window, 'load', initialize);