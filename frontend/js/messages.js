document.addEventListener("DOMContentLoaded", async function() {
  const token = localStorage.getItem("token")
  if (!token) {
    alert("Please log in first")
    window.location.href = "login.html"
    return
  }

  const response = await fetch("/users/:username/to", {
    headers: { Authorization: `Bearer: ${ token }`},
  })
  const messages = await response.json()

  const messagesList = document.getElementById("messagesList")
  messages.forEach((messages) => {
    const div = document.createElement("div")
    div.className = "card mb-3"
    div.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">From: ${message.from_user.username}</h5>
        <p class="card-text">${message.body}</p>
        <a href="messageDetail.html?id=${message.id}" class="btn btn-primary">View Details</a>
      </div>`;
      messagesList.appendChild(div)
  })
})