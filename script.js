// script.js
async function fetchUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        document.getElementById("userImage").src = user.picture.large;
        document.getElementById("userName").innerText = `${user.name.first} ${user.name.last}`;
        document.getElementById("userEmail").innerText = `Email: ${user.email}`;
        document.getElementById("userLocation").innerText = `Location: ${user.location.city}, ${user.location.country}`;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

// Load first user on page load
fetchUser();