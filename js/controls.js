$(function() {
  window.keydown = {};
  window.mousedown = {};
  window.mousemove = {};
  
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }
  
  $(document).bind("keydown", function(event) {
    event.preventDefault();
    keydown[keyName(event)] = true;
    keydown["event"] = event;
  });
  
  $(document).bind("keyup", function(event) {
    keydown[keyName(event)] = false;
  });
  
  $(document).bind("mousedown", function(event) {
    event.preventDefault();
    mousedown["pressed"] = true;
    mousedown["coords"] = getMousePos($('#myCanvas').get(0), event); // should not be here!
  });
  
  $(document).bind("mouseup", function(event) {
    event.preventDefault();
    mousedown["pressed"] = false;
  });
  
  $(document).bind("mousemove", function(event) {
    event.preventDefault();
    mousemove["coords"] = getMousePos($('#myCanvas').get(0), event); // should not be here!
  });
  
});
