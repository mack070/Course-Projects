const form = document.getElementById("commentform");

function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const comment = event.target.comment.value;

  console.log({ username: username, comment: comment });

  fetch("http://localhost:7070/comment", {
    method: "POST",
    body: JSON.stringify({ username: username, comment: comment }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

form.addEventListener("submit", handleSubmit);