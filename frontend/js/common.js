// Utility functions shared across the application

/**
 * Get the token from localStorage
 * Redirects to login page if the token is missing
 */
function getToken(){
  const token = localStorage.getItem("token")
  if (!token){
    alert("Please log in first")
    window.location.href = "login.html"
  }
  return token
}

/**
 * Make an authenticated fetch request
 * @param {string} url - The endpoing URL
 * @param {object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<object>} - The response data or an error object
 */
async function fetchWithAuth(url, options = {}){
  const token = getToken()
  const headers = options.headers || {}
  headers["Authorization"] = `Bearer ${token}`
  headers["Content-Type"] = "application/json"

  const response = await fetch(url, {...options, headers})
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || "Something went wrong")
  }
  return response.json()
}

/**
 * Display an alert for errors and optionally redirect
 * @param {string} message - The error message
 * @param {string} [redirectUrl] - Optional URL to redirect to
 */
function handleError(message, redirectUrl){
  alert(message)
  if (redirectUrl){
    window.location.href = redirectUrl
  }
}