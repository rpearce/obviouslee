$(document).ready ->
  last_element = document.location.href.split("/").splice(-1, 1)

  # The OM Way
  if last_element[0].toLowerCase().match(/the-om-way/)
    $(".menu a[title=\"The OM Way\"]").addClass "active"
    $(".frame").css "opacity", "0.4"

    xpos = null;
    $('.drag-me').draggable
      axis: 'x'
      start: (event, ui) ->
        xpos = ui.position.left
      stop: (event, ui) ->
        xmove = ui.position.left - xpos
        if xmove >= 10
          prev_id = $('.scroll-active').prev().attr('id')
          $("a." + prev_id).trigger('click')
        if xmove <= -10
          next_id = $('.scroll-active').next().attr('id')
          $("a." + next_id).trigger('click')

    highlightSelection = (anchor) ->
      $(".scroll-active").removeClass("scroll-active").animate
        opacity: 0.4
        duration: 1000

      $(anchor).animate
        opacity: 1
        duration: 1000

      $(anchor).addClass "scroll-active"

    $.localScroll.defaults.axis = "xy"
    $.localScroll.hash
      target: ".content"
      queue: true
      duration: 1500
      onBefore: (e, anchor, $target) ->
        highlightSelection anchor

    $.localScroll
      target: ".content"
      queue: true
      duration: 1500
      hash: true
      onBefore: (e, anchor, $target) ->
        highlightSelection anchor

      onAfter: (anchor, settings) ->

    last_element_array = last_element[0].split("#")
    $("a.hardToReach").trigger "click"  if last_element_array.length < 2
    $("body").live "keyup", (e) ->
      last_element = document.location.href.split("/").splice(-1, 1)
      last_element_array = last_element[0].split("#")
      section_id = last_element_array.splice(-1, 1)
      if e.keyCode is 39
        $(".invisibleLinks a[href=\"#" + section_id + "\"]").next().trigger "click"
      else $(".invisibleLinks a[href=\"#" + section_id + "\"]").prev().trigger "click"  if e.keyCode is 37

  # Crew
  else if last_element[0].toLowerCase().match(/crew/)
    $(".menu a[title=\"Crew\"]").addClass "active"

  # Work
  else if last_element[0].toLowerCase().match(/work/)
    $(".menu a[title=\"Work\"]").addClass "active"
    $(".hideShowClientList").click (e) ->
      $(".fullClientList").toggle()

  # Capabilities
  else if last_element[0].toLowerCase().match(/capabilities/)
    $(".menu a[title=\"Capabilities\"]").addClass "active"
    $.localScroll.defaults.axis = "xy"
    $.localScroll
      target: ".infoShell"
      queue: true
      duration: 800
      hash: true

    last_element_array = last_element[0].split("#")
    if last_element_array.length > 1
      section_id = last_element_array.splice(-1, 1)
      $(".nav a[href=\"#" + section_id + "\"]").addClass "active"
    else
      $(".nav a[href=\"#advertising\"]").addClass "active"
    $(".nav a").click ->
      $(".nav a").each (element) ->
        $(this).removeClass "active"

      $(this).addClass "active"

  # Connect
  else if last_element[0].toLowerCase().match(/connect/)
    $(".menu a[title=\"Connect\"]").addClass "active"
  else $(".menu a[title=\"Blog\"]").addClass "active"  if last_element[0].toLowerCase().match(/blog/)