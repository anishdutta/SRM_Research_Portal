(function($) {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
 function check_show() {
    $('div[aria-labelledby="dropdownMenuButton"]').each(function() {
      if(!($(this).hasClass('show'))) {
        $(this).addClass('show');
      }
    });  
  }
$('.admission_banner button#dropdownMenuButton').on('click', function (e) {
  // check_show();
  // e.preventDefault();
  var menuItem = $( e.currentTarget );
  if ($('#sub_dropdownMenuButton').is(':visible')) {
$("#sub_dropdownMenuButton").prop("disabled", true);
    /* $(this).find('i.mr-2').removeClass('fa-caret-down').addClass('fa-caret-right');
    $('#sub_dropdownMenuButton').hide(); 
    $('#sub_dropdownMenuButton').removeClass('show'); */
  } else {
  $("#sub_dropdownMenuButton").prop("disabled", true);
    /* $(this).find('i.mr-2').addClass('fa-caret-down').removeClass('fa-caret-right');
    $('#sub_dropdownMenuButton').addClass('show'); 
    $('#sub_dropdownMenuButton').show();   */
  }
});
$('.corona_banner button#dropdownMenuButton1').on('click', function (e) {
  // check_show();
  // e.preventDefault();
  var menuItem = $( e.currentTarget );
  if ($('#sub_dropdownMenuButton1').is(':visible')) {
    $(this).find('i.mr-2').removeClass('fa-caret-down').addClass('fa-caret-right');
    $('#sub_dropdownMenuButton1').removeClass('show');
    $('#sub_dropdownMenuButton1').hide();
  } else {
    $(this).find('i.mr-2').addClass('fa-caret-down').removeClass('fa-caret-right');
    $('#sub_dropdownMenuButton1').addClass('show');
    $('#sub_dropdownMenuButton1').show();
  }
});
})(jQuery);

//Weather Report
/* var $ = jQuery.noConflict();
var latitude = '12.8190';
var longitude = '80.0360';
// Weather To Get Celsius
getWeatherNow(app_id,consumer_key,consumer_secret,cunit,celsiusId,unitsoFcelsius,howwastheday,currently_nodata,latitude,longitude);
// Weather To Get Fahrenheit
getWeatherNow(app_id,consumer_key,consumer_secret,funit,fahrenheitId,unitsFahrenheit,howwastheday,currently_nodata,latitude,longitude); */
/*if ("geolocation" in navigator){ 
    //check geolocation available 
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function(position){
      // console.log(position);
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      // Weather To Get Celsius
      getWeatherNow(app_id,consumer_key,consumer_secret,cunit,celsiusId,unitsoFcelsius,howwastheday,currently_nodata,latitude,longitude);
      // Weather To Get Fahrenheit
      getWeatherNow(app_id,consumer_key,consumer_secret,funit,fahrenheitId,unitsFahrenheit,howwastheday,currently_nodata,latitude,longitude);
    }
  )};	
  
function getWeather(lat, lon) {
  $.ajax({
    url: "https://api.darksky.net/forecast/9c4e8944261ed3b6f5f3438431a5cfa0/" + lat + "," + lon,
    dataType: "jsonp",
    success: function(data) {
      console.log("Current temp: " + data.currently.temperature);
      // get all the information
      var fahrenheit = data.currently.temperature.toFixed(0),
        locationName = data.timezone,
        splice = locationName.indexOf("/"),
        icon = data.currently.icon.toUpperCase()
      console.log(icon)
      console.log(splice)
        //apparently the temperature is returned in kelvin, so we need to quickly convert it to celsius, which gives a horrible number so is rounded to two decimal places. 
      var celsius = ((fahrenheit - 32) * 5 / 9).toFixed(0); // Who in the name of all that is holy uses Fahrenheit? 
      console.log(celsius); // Wh
      $("#tempC").html(celsius + "&deg;C / ");
      $("#locationName").html(locationName.substring(splice + 1).replace("_", " "));
      $("#tempF").html(fahrenheit + "&deg;F").show();

      $("#toggle").click(function() {
        $("#tempC").toggle("slow")
        $("#tempF").toggle("slow")
      });
      var icons = new Skycons({
        "color": "black"
      });
      icons.set("icon", icon)
      icons.play();

      //Alters all of the elements to display the information to the user. 

    }
  });
} 

// Gets the users position 
if (navigator.geolocation) { // Gets the users position 
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    getWeather(lat, lon); // Calls the getWeather function which is defined above. Passes two arguments which are the user's current lattitude and longitude. 
  });
}
// If there is no location the code stalls and temp is replaced with a message telling the user to turn location on!
*/
// API key ""2ca252d74a373acc1b59fe6e45e5d3ae""
$('#search').on('click', function () {
  var $ = jQuery.noConflict();
  $('#myForm').show(500)
});
$(document).mouseup(function (e) {
var $ = jQuery.noConflict();
var popup = $("#myForm");
if (!$('#search').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
    popup.hide(500);
}
});
$(document).ready(function(){
var $ = jQuery.noConflict();
(function($) {
  $('#header__icon').click(function(e){
    e.preventDefault();
    $('body').toggleClass('with--sidebar');
  });
  
  $('#site-cache').click(function(e){
    $('body').removeClass('with--sidebar');
  });

})(jQuery);
//top menu click event
/* $(".Events").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 950 }, "slow");
  return false;
});
$(".Academics").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 1550 }, "slow");
  return false;
});
$(".Research").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 3000 }, "slow");
  return false;
});
$(".Campus").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 3550 }, "slow");
  return false;
});
$(".Admission").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 4095 }, "slow");
  return false;
});
$(".About").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 4550 }, "slow");
  return false;
});
*/
 var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
//alert($(window).height()); 553
if( isMobile.any() == 'Android'){
//console.log(isMobile.any());
  $(".Events").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 1285 }, "slow");
    return false;
  });
  $(".Academics").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 3450 }, "slow");
    return false;
  });
  $(".Research").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 5075 }, "slow");
    return false;
  });
  $(".Campus").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 5665 }, "slow");
    return false;
  });
  $(".Admission").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 6290 }, "slow");
    return false;
  });
  $(".About").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 6905 }, "slow");
    return false;
  });

}
else if(isMobile.any() == 'iPhone' && $(window).height() == '667'){
//console.log(isMobile.any());
  $(".Events").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 1400 }, "slow");
    return false;
  });
  $(".Academics").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 3545 }, "slow");
    return false;
  });
  $(".Research").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 5200 }, "slow");
    return false;
  });
  $(".Campus").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 5800 }, "slow");
    return false;
  });
  $(".Admission").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 6400 }, "slow");
    return false;
  });
  $(".About").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 7030 }, "slow");
    return false;
  });

} else if(isMobile.any() == 'iPhone' && $(window).height() == '568'){
//console.log(isMobile.any());
  $(".Events").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 1230 }, "slow");
    return false;
  });
  $(".Academics").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 3200 }, "slow");
    return false;
  });
  $(".Research").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 4780 }, "slow");
    return false;
  });
  $(".Campus").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 5375 }, "slow");
    return false;
  });
  $(".Admission").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 5970 }, "slow");
    return false;
  });
  $(".About").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 6543 }, "slow");
    return false;
  });

}  else if(isMobile.any() == 'iPad' && $(window).height() == '1024'){
//console.log(isMobile.any() + $(window).height());
  $(".Events").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 850 }, "slow");
    return false;
  });
  $(".Academics").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 1790 }, "slow");
    return false;
  });
  $(".Research").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 2805 }, "slow");
    return false;
  });
  $(".Campus").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 3590 }, "slow");
    return false;
  });
  $(".Admission").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 4370 }, "slow");
    return false;
  });
  $(".About").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 4950 }, "slow");
    return false;
  });

} else if(isMobile.any() == 'iPad' && $(window).height() == '768'){
//console.log(isMobile.any());
  $(".Events").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 820 }, "slow");
    return false;
  });
  $(".Academics").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 1380 }, "slow");
    return false;
  });
  $(".Research").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 2650 }, "slow");
    return false;
  });
  $(".Campus").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 3150 }, "slow");
    return false;
  });
  $(".Admission").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 3680 }, "slow");
    return false;
  });
  $(".About").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 4100 }, "slow");
    return false;
  });

}
else{
  //console.log("dk"+isMobile.any());
 /* VC Desk block included
 $(".Events").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 990 }, "slow");
  return false;
});
$(".Academics").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 1930 }, "slow");
  return false;
});
$(".Research").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 3390 }, "slow");
  return false;
});
$(".Campus").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 3925 }, "slow");
  return false;
});
$(".Admission").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 4460 }, "slow");
  return false;
});
$(".About").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 4930 }, "slow");
  return false;
}); */ 
$(".Events").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 950 }, "slow");
  return false;
});
$(".Academics").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 1550 }, "slow");
  return false;
});
$(".Research").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 3000 }, "slow");
  return false;
});
$(".Campus").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 3550 }, "slow");
  return false;
});
$(".Admission").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 4080 }, "slow");
  return false;
});
$(".About").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 4550 }, "slow");
  return false;
});
}
});
var $ = jQuery.noConflict();
$('.multi-item-carousel').carousel({
interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
var $ = jQuery.noConflict();
$('.multi-item-carousel .item').each(function(){
var next = $(this).next();
if (!next.length) {
  next = $(this).siblings(':first');
}
next.children(':first-child').clone().appendTo($(this));

if (next.next().length>0) {
  next.next().children(':first-child').clone().appendTo($(this));
} else {
  $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
}
});



// Header Loage change //
$(function () {
var $ = jQuery.noConflict();
$(document).scroll(function () {
  var $nav = $(".fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  logoChange();
});
});

function logoChange() {
var $ = jQuery.noConflict();
var $nav = $(".fixed-top");
if($(window).scrollTop() >  75 && $nav.find('.navbar-brand').hasClass('headerLogoImg_white')) {
  $nav.find('.navbar-brand').removeClass('headerLogoImg_white');
  $nav.find('.navbar-brand').addClass('headerLogoImg_blue');
} else if($(window).scrollTop() <  75 && $nav.find('.navbar-brand').hasClass('headerLogoImg_blue')) {
  $nav.find('.navbar-brand').removeClass('headerLogoImg_blue');
  $nav.find('.navbar-brand').addClass('headerLogoImg_white');
}
}
// Header Loage change //



// Flex slider image //


// $(window).load(function() {
window.addEventListener('DOMContentLoaded', function(event) {
  var $ = jQuery.noConflict();
  $('.flexslider').flexslider({
      animation: "slide"
  });
});

// Flex slider image //



