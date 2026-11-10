// External JS file for playlist.html

// Array: Initial set of songs on the radio show playlist
let songPlaylist = [
    "Fast Times - The Accelerators",
    "No Time to Waste - Cut the Fluff",
    "Blink and You Miss It - DJ Max Remix"
];

// Function: Renders the entire array to the webpage using a loop
function displayPlaylist() {
    // DOM Method 1: document.getElementById()
    const container = document.getElementById('playlistContainer');
    
    // DOM Property 1: element.innerHTML (clears old content before rendering updated list)
    container.innerHTML = "";

    // Loop: Iterate through our playlist array
    for (let i = 0; i < songPlaylist.length; i++) {
        // DOM Method 2: document.createElement()
        const songDiv = document.createElement('div');
        
        // Apply class styling from our CSS file
        songDiv.className = "playlist-item";
        
        // Set the content
        songDiv.textContent = (i + 1) + ". " + songPlaylist[i];
        
        // DOM Method 3: element.appendChild()
        container.appendChild(songDiv);
    }
}

// Event listener to add user input to the array
document.getElementById('addSongBtn').addEventListener('click', function() {
    const inputElement = document.getElementById('songInput');
    // DOM Property 2: element.value
    const newSong = inputElement.value.trim();

    if (newSong !== "") {
        // Push user input into our array
        songPlaylist.push(newSong);
        
        // Clear out the input field
        inputElement.value = "";
        
        // Call our function to update the webpage view
        displayPlaylist();
    } else {
        alert("Please enter a valid song title!");
    }
});

// Run our function initially when the page loads so existing songs show up
displayPlaylist();