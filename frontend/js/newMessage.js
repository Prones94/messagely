document.addEventListener("DOMContentLoaded", async function() {
  try {
    const data = await fetchWithAuth("/users")
    const dropdown = document.getElementById("to_username")

    data.users.forEach((user) => {
      const option = document.createElement("option")
      option.value = user.username
      option.textContent = user.username
      dropdown.appendChild(option)
    })
  } catch (err) {
    handleError(err.message, "messages.html")
  }
})

document.getElementById("newMessageForm").addEventListener("submit", async function (e){
  e.preventDefault()
  try {
    const to_username = document.getElementById("to_username").value
    const body = document.getElementById("body").value

    await fetchWithAuth("/messages", {
      method: "POST",
      body: JSON.stringify({ to_username, body })
    })
    alert("Message sent successfully")
    window.location.href = "messages.html"
  } catch (err) {
    handleError(err.message)
  }
})