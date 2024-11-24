// Fetch and display the details of a single message
document.addEventListener("DOMContentLoaded", async function() {
  try {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    if(!id){
      handleError("Message ID is required", "messages.html")
      return
    }

    const message = await fetchWithAuth(`/messages/${id}`)
    const messageDetail = document.getElementById("messageDetail")

    messageDetail.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">From: ${message.message.from_user.username}</h5>
        <h6 class="card-subtitle mb-2 text-muted">To: ${message.message.to_user.username}</h6>
        <p class="card-text">${message.message.body}</p>
        <p class="card-text">
          <small class="text-muted">Sent At: ${new Date(message.message.sent_at).toLocaleDateString()}</small>
        </p>
      </div>
    </div>
    `
  } catch(err){
    handleError(err.message, "messages.html")
  }
})