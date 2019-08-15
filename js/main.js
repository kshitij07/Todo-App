//Accessing enter key 
var inputValue = document.getElementById("myInput");

  inputValue.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Create "edit" button and append it to each list item
var node = document.getElementsByTagName("LI");
var i;
for(i=0; i<myNodelist.length;i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("edit");
	span.className = "edit";
	span.appendChild(txt);
	  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    //div.style.display = "none";
	div.remove();
  }
}

// Click on a edit button to edit the current list item
var edit = document.getElementsByClassName("edit");
var i;
for (i = 0; i < edit.length; i++) {
  edit[i].onclick = function() {
	var div = this.parentElement;
	var txt = div.getElementsByClassName("data")[0].innerText;
	var newtext = prompt("Edit task", txt);
	if(newtext!=null)
	  	div.getElementsByClassName("data")[0].innerText=newtext;
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  var sp = document.createElement("SPAN");
  sp.className = "data";
  var t = document.createTextNode(inputValue);
  sp.appendChild(t);
  
  li.appendChild(sp);
  
  
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      //div.style.display = "none";
	  div.remove();
    }
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("edit");
  span.className = "edit";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
      var div = this.parentElement;
      var txt = div.getElementsByClassName("data")[0].innerText;
	  var newtext = prompt("Edit todo list item:", txt);
	  if(newtext!=null)
	  	div.getElementsByClassName("data")[0].innerText=newtext;
    }
  }
}