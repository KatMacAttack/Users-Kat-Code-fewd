

//counter function
var i = 0;
  function plusOneLike(event) {
  event.preventDefault();
  document.querySelector(".like-link").textContent = ++i;
}

//here's the plus one
var a = document.querySelector("a");
a.addEventListener("click", plusOneLike);

function newComment (event) {
  console.log(event)
  event.preventDefault();
  var comment = document.createElement("div");
  comment.setAttribute("class", "comment");
  comment.textContent = document.querySelector("textarea").value;

  var c = document.querySelector(".like");
  c.appendChild(comment);
  //clear the textarea after new comment is posted
  document.querySelector("textarea").value = "";
}

var b = document.querySelector("button");
b.addEventListener("click", newComment);
