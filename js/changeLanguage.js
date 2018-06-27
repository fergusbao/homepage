function myFunction() {
  // var json = $.getJSON("data/translate.json");
  var language = document.getElementById("webLanguage");

  $.getJSON("data/translate.json", function(data) {
    var obj = JSON.parse(data);
    alert(obj.webLanguage[1]);

    // ...
  });

  if (language.textContent === "\xa0\xa0中文\xa0\xa0") {
    chChinese();
  } else {
    chEnglish();
  }
}

function chChinese() {
  var language = document.getElementById("webLanguage");
  language.innerText = "English";
  document.getElementById("")
}

function chEnglish() {
  var language = document.getElementById("webLanguage");
  language.innerText = "\xa0\xa0中文\xa0\xa0";
}

