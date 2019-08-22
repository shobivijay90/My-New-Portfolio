$(document).ready(function () {
  
  // responsive nav

$('.para2').click(function () {
  $([document.documentElement, document.body]).animate(
    {  scrollTop: $('#projects').offset().top - 50 }
  )
})


  $('nav ul button').click(function () {
    $('nav ul li').toggle('slow')
  })

   $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 1200) {
            $('nav ul li').click(function(){
              $('nav ul li').hide();
            })
        }
        else
        {
             $('nav ul li').click(function(){
              $('nav ul li').show();
             })
        }
    }
  // on scroll fixed nav bar

  window.onscroll = function () {
    fixedNav()
  }

  var nav = document.getElementById('navbar')
  var sticky = nav.offsetTop

  function fixedNav () {
    if (window.pageYOffset >= sticky) {
      nav.classList.add('sticky')
    } else {
      nav.classList.remove('sticky')
    }
  }

  /** *****animation on scroll********/

  function isScrolledIntoView (elem) {
    var docViewTop = $(window).scrollTop()
    var docViewBottom = docViewTop + $(window).height()

    var elemTop = $(elem).offset().top
    var elemBottom = elemTop + $(elem).height()

    return elemBottom <= docViewBottom && elemTop >= docViewTop
  }
  // If element is scrolled into view,

  /*
  $(window).scroll(function () {
    $('#navbar').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('slideInDown')
      } else {
        $(this).removeClass('slideInDown')
      }
    })
  })
  */


  $(window).scroll(function () {
    $('.underline').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('slideInRight')
      } else {
        $(this).removeClass('slideInRight')
      }
    })
  })

  $(window).scroll(function () {
    $('.design-icon').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('zoomIn')
      } else {
        $(this).removeClass('zoomIn')
      }
    })
  })

  // tasks

  $('.recent-project').mouseover(function () {
    $(this).css('visibility', 'hidden')
    $(this)
      .children()
      .css('visibility', 'visible')
  })

  $('.recent-project').mouseout(function () {
    $(this)
      .children()
      .css('visibility', 'hidden')
    $(this).css('visibility', 'visible')
  })


  // links to projects

  $('#proj-h4tw button').click(function () {
    window.open('https://health4theworld.org/academy/', '_blank')
  })
  $('#proj-partnership button').click(function () {
    window.open('https://health4theworld.org/academy/partnerships/', '_blank')
  })
  $('#proj-alteration button').click(function () {
    window.open('https://codepen.io/shobivijay90/pen/JqGeRG', '_blank')
  })
  $('#proj-portfolio button').click(function () {
    window.open('https://codepen.io/shobivijay90/pen/gyKLer', '_blank')
  })
  $('#proj-landingpage button').click(function () {
    window.open('https://codepen.io/shobivijay90/pen/yryZPv', '_blank')
  })
  $('#proj-surveyform button').click(function () {
    window.open('https://codepen.io/shobivijay90/pen/GeNOzO', '_blank')
  })
  $('.show').click(function () {
    window.open('https://codepen.io/shobivijay90/', '_blank')
  })

  // contact

  $(window).scroll(function () {
    $('#contact p').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('slideInLeft')
      } else {
        $(this).removeClass('slideInLeft')
      }
    })
  })

  $(window).scroll(function () {
    $('.copyright').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('slideInRight')
      } else {
        $(this).removeClass('slideInRight')
      }
    })
  })
})
