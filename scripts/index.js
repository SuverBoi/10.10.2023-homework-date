$(document).ready(function () {
    // При кліку на кнопку, вікно стає видимим
    $("#toggleButton").click(function () {
      $("#myModal").css("display", "block");
    });
  
    // При кліку на хрестик, вікно стає невидимим
    $(".close").click(function () {
      $("#myModal").css("display", "none");
    });
  
    // При кліку на підкладці, вікно також стає невидимим
    $(".modal").click(function () {
      $("#myModal").css("display", "none");
    });
  });
// я там в чат gpt дивився код