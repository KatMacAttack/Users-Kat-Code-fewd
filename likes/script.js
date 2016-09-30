<script>
//counter function here:
var likes = 0
  function plusOneLike(event) {
  event.preventDefault();
  document.querySelector(".like-count").newlike+1;
  console.log(event);
}
//here's the plus one on a click
var a = document.querySelector("a");
a.addEventListener("click", plusOneLike);
//here's the add a new comment log
function newComment (event) {
  event.preventDefault();
  var comment = document.createElement("div");
  comment.setAttribute("class", "comment");
  comment.textContent = document.querySelector("textarea").value;
  var c = document.querySelector(".like");
  c.appendChild(comment);
  //clear that text area
  document.querySelector("textarea").value = "";
}
//Making sure it executes with a click
var b = document.querySelector("button");
b.addEventListener("click", newComment);
</script>
