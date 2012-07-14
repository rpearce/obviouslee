(function() {

  $(document).ready(function() {
    var highlightSelection, last_element, last_element_array, section_id, xpos;
    last_element = document.location.href.split("/").splice(-1, 1);
    if (last_element[0].toLowerCase().match(/the-om-way/)) {
      $(".menu a[title=\"The OM Way\"]").addClass("active");
      $(".frame").css("opacity", "0.4");
      xpos = null;
      $('.drag-me').draggable({
        axis: 'x',
        start: function(event, ui) {
          return xpos = ui.position.left;
        },
        stop: function(event, ui) {
          var next_id, prev_id, xmove;
          xmove = ui.position.left - xpos;
          if (xmove >= 10) {
            prev_id = $('.scroll-active').prev().attr('id');
            $("a." + prev_id).trigger('click');
          }
          if (xmove <= -10) {
            next_id = $('.scroll-active').next().attr('id');
            return $("a." + next_id).trigger('click');
          }
        }
      });
      highlightSelection = function(anchor) {
        $(".scroll-active").removeClass("scroll-active").animate({
          opacity: 0.4,
          duration: 1000
        });
        $(anchor).animate({
          opacity: 1,
          duration: 1000
        });
        return $(anchor).addClass("scroll-active");
      };
      $.localScroll.defaults.axis = "xy";
      $.localScroll.hash({
        target: ".content",
        queue: true,
        duration: 1500,
        onBefore: function(e, anchor, $target) {
          return highlightSelection(anchor);
        }
      });
      $.localScroll({
        target: ".content",
        queue: true,
        duration: 1500,
        hash: true,
        onBefore: function(e, anchor, $target) {
          return highlightSelection(anchor);
        },
        onAfter: function(anchor, settings) {}
      });
      last_element_array = last_element[0].split("#");
      if (last_element_array.length < 2) $("a.hardToReach").trigger("click");
      return $("body").live("keyup", function(e) {
        var section_id;
        last_element = document.location.href.split("/").splice(-1, 1);
        last_element_array = last_element[0].split("#");
        section_id = last_element_array.splice(-1, 1);
        if (e.keyCode === 39) {
          return $(".invisibleLinks a[href=\"#" + section_id + "\"]").next().trigger("click");
        } else {
          if (e.keyCode === 37) {
            return $(".invisibleLinks a[href=\"#" + section_id + "\"]").prev().trigger("click");
          }
        }
      });
    } else if (last_element[0].toLowerCase().match(/crew/)) {
      return $(".menu a[title=\"Crew\"]").addClass("active");
    } else if (last_element[0].toLowerCase().match(/work/)) {
      $(".menu a[title=\"Work\"]").addClass("active");
      return $(".hideShowClientList").click(function(e) {
        return $(".fullClientList").toggle();
      });
    } else if (last_element[0].toLowerCase().match(/capabilities/)) {
      $(".menu a[title=\"Capabilities\"]").addClass("active");
      $.localScroll.defaults.axis = "xy";
      $.localScroll({
        target: ".infoShell",
        queue: true,
        duration: 800,
        hash: true
      });
      last_element_array = last_element[0].split("#");
      if (last_element_array.length > 1) {
        section_id = last_element_array.splice(-1, 1);
        $(".nav a[href=\"#" + section_id + "\"]").addClass("active");
      } else {
        $(".nav a[href=\"#advertising\"]").addClass("active");
      }
      return $(".nav a").click(function() {
        $(".nav a").each(function(element) {
          return $(this).removeClass("active");
        });
        return $(this).addClass("active");
      });
    } else if (last_element[0].toLowerCase().match(/connect/)) {
      return $(".menu a[title=\"Connect\"]").addClass("active");
    } else {
      if (last_element[0].toLowerCase().match(/blog/)) {
        return $(".menu a[title=\"Blog\"]").addClass("active");
      }
    }
  });

}).call(this);
