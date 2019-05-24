$(document).ready(function(){

  $(".name").waypoint(function(direction){

      if( direction === "down"){
        $("nav").addClass("sticky-nav")
      } else {
        $("nav").removeClass("sticky-nav")
      }

  })
  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window') 
  // }, {
  //   offset: '25%'
  // })
  $(".under").click(function () {
    $(".modal").css({ display: "block" })
  })
 

  $(".close").click(function () {
    $(".modal").css({ display: "none" })
  })
})


