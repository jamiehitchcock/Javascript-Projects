$(document).ready(function () {
    var letters = $('h1').text();
    var nHTML = '';
    for (var letter of letters) {
      nHTML += "<span class='bounce'>" + letter + "</span>";
    }
    $('h1').html(nHTML);
  })