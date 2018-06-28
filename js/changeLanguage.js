var text = '{"webLanguage":["中文", "English"], "name":["Junyi Ye", "叶俊毅"], "position":["Programmer", "程序员"], "address":["Newark, NJ", "纽瓦克，新泽西州"], "programmingSkills":["Programming Skills", "编程语言"], "languages":["Languages", "语言"], "mandarin":["Mandarin", "中文"], "english":["English", "英语"], "readings":["My Readings", "阅读书籍"], "book1":["<i>Object-Oriented Data Structures Using Java</i>", "《面向对象数据结构Java实现》"], "book2":["<i>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</i>","《硅谷钢铁侠 埃隆·马斯克的冒险人生》"]}';
var obj = JSON.parse(text);

function myFunction() {
  var language = document.getElementById("webLanguage");
  if (language.textContent == "中文") {
    chChinese();
  } else {
    chEnglish();
  }
}

function chChinese() {
  var i, key;
  for (i = 0; i < text.length; i++) { 
    key = Object.keys(obj)[i];
    changeContent(key, obj[key][1]);
  }
}

function chEnglish() {
  // var language = document.getElementById("webLanguage");
  // language.innerText = "\xa0\xa0中文\xa0\xa0";
  var i, key;
  for (i = 0; i < text.length; i++) { 
    key = Object.keys(obj)[i];
    changeContent(key, obj[key][0]);
  }
}

function changeContent(id, content) {
  document.getElementById(id).innerHTML = content;
}
