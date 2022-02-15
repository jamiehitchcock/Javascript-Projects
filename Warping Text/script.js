$(document).ready(function () {
    let letters = $('h1').text();
    let warped = '';
    for (let letter of letters) {
      warped += "<span class='warp'>" + letter + "</span>";
    }
    $('h1').html(warped);
  })