document.getElementById("registerForm").addEventListener("submit", async function(e){
  e.preventDefault()
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const first_name = document.getElementById("first_name").value
  const last_name = document.getElementById("last_name").value
  const phone = document.getElementById("phone").value

  const response = await fetch("/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, first_name, last_name, phone })
  })

  if (response.ok){
    alert("Registration successful")
    window.location.href = "login.html"
  } else {
    alert("Error registering user")
  }
})