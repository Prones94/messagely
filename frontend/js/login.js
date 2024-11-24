document.getElementById("loginForm").addEventListener("submit", async function(e){
  e.preventDefault()
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  const response = await fetch("/auth/login", {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })

  const result = await response.json()
  if (response.ok){
    localStorage.setItem("token", result.token)
    alert("Login successful")
    window.location.href = "messages.html"
  } else {
    alert("Invalid username or password")
  }
})