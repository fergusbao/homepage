var text = '{ "name":["John", "Peter"], "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

function myFunction() {
  document.getElementById("demo").innerHTML = obj.name[0] + ", " + obj.birth; 
}
