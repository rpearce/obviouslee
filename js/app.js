$(document).ready(function() {
  var last_element = document.location.href.split('/').splice(-1,1);

  // The Om Way
  if(last_element[0].toLowerCase().match(/the-om-way/)) {
    $('.menu a[title="The OM Way"]').addClass('active');

    $('.frame').css('opacity','0.4');
    $('.frame').mouseenter(function() {
      if($(this).hasClass('active') == false) {
        $('a.' + $(this).attr('id')).trigger('click');
      }
      $(this).next().stopPropagation();
      $(this).prev().stopPropagation();
    });

    var highlightSelection = function(anchor) {
      $('.scroll-active').removeClass('scroll-active').animate({
        opacity: 0.4,
        duration: 1000
      });
      $(anchor).animate({
        opacity: 1,
        duration: 1000
      });
      $(anchor).addClass('scroll-active');
    }

    $.localScroll.defaults.axis = 'xy';

    // Scroll initially if there's a hash (#something) in the url
    $.localScroll.hash({
      target: '.content',
      queue: true,
      duration: 1500,
      onBefore: function(e, anchor, $target) {
        highlightSelection(anchor);
      }
    });

    $.localScroll({
      target: '.content',
      queue: true,
      duration: 1500,
      hash: true,
      onBefore: function(e, anchor, $target) {
        highlightSelection(anchor);
      },
      onAfter: function(anchor, settings) {
      }
    });
  }

  // Crew
  else if(last_element[0].toLowerCase().match(/crew/)) {
    $('.menu a[title="Crew"]').addClass('active');
  }

  // Work
  else if(last_element[0].toLowerCase().match(/work/)) {
    $('.menu a[title="Work"]').addClass('active');
  }

  // Capabilities
  else if(last_element[0].toLowerCase().match(/capabilities/)) {
    $('.menu a[title="Capabilities"]').addClass('active');
    $.localScroll.defaults.axis = 'xy';

    $.localScroll({
      target: '.infoShell',
      queue: true,
      duration: 800,
      hash: true,
    });
  }

  // Connect
  else if(last_element[0].toLowerCase().match(/connect/)) {
    $('.menu a[title="Connect"]').addClass('active');
  }

  // Blog?
  else if(last_element[0].toLowerCase().match(/blog/)) {
    $('.menu a[title="Blog"]').addClass('active');
  }
});