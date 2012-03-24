var mo = false;

  $(document).ready(function() {  
    // change these two to display your own album
    var userId = "117489843558070583795";
    var albumId = "5683232756186942865";
    
    var feed = "https://picasaweb.google.com/data/feed/base/user/" + userId + "/albumid/" + albumId + "?alt=json";
    var response = jQuery.ajax({
      url: feed,
      success: function() {
        var album = eval('(' + response.responseText + ')');
        for (entry in album.feed.entry) {
          $("#album").append("<img class='photo' src='"+ album.feed.entry[entry].media$group.media$thumbnail[2].url + "'/>");
        }
      }
    });

    $("#photography-scroll-down").hover( function () {
      mo = true;
      $(this).data('timeout', setTimeout( function () {
        scrollAlbumDown();
      }, 100));
    }, function () {
      mo = false;
      clearTimeout($(this).data('timeout'));
    });
    
    $("#photography-scroll-up").hover( function () {
      mo = true;
      $(this).data('timeout', setTimeout( function () {
        scrollAlbumUp();
      }, 100));
    }, function () {
      mo = false;
      clearTimeout($(this).data('timeout'));
    });

  });   


function scrollAlbumDown() {
  var album = document.getElementById('album')
  album.scrollTop = album.scrollTop + 10;
  console.log(mo);
  if (mo==true) {
  $("#photography-scoll-down").data('timeout', setTimeout( function () {
     scrollAlbumDown();
   }, 70))};
}

function scrollAlbumUp() {
  var album = document.getElementById('album')
  album.scrollTop = album.scrollTop - 10;
  console.log(mo);
  if (mo==true) {
  $("#photography-scoll-down").data('timeout', setTimeout( function () {
     scrollAlbumUp();
   }, 70))};
}

function previousProject(){
  var new_project = $(".current-project").prev(".project")
  if (new_project.length != 0) {
    var old_project = $(".current-project");
    old_project.removeClass("current-project");
    old_project.addClass("project");
    new_project.removeClass("project");
    new_project.addClass("current-project");
  }
}
  
function nextProject(){
  var new_project = $(".current-project ~ .project").filter(":first");
  if (new_project.length != 0) {
    var old_project = $(".current-project");
    old_project.removeClass("current-project");
    old_project.addClass("project");
    new_project.removeClass("project");
    new_project.addClass("current-project");
  }
  
}
