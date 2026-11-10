// External JS file for segments.html

// Object literal to hold our radio show segments
const radioShow = {
    host: "DJ Max",
    station: "99.9 LTS FM"
};

// Event listener for the interactive selector button
document.getElementById('findSegmentBtn').addEventListener('click', function() {
    // DOM Method 1: document.getElementById()
    const moodElement = document.getElementById('moodSelect');
    const outputElement = document.getElementById('segmentOutput');
    
    const userMood = moodElement.value;
    let recommendation = "";

    // Conditional Statement
    if (userMood === "bored") {
        recommendation = "Tune into 'The 2-Minute Rebellion' at 9:15 PM! We challenge listeners to break a boring habit live on air.";
        // DOM Property 1: element.style.color
        outputElement.style.color = "#ffa502"; 
    } else if (userMood === "stressed") {
        recommendation = "You need 'Drop the Baggage' at 10:30 PM. Call in and vent about what's weighing you down so we can laugh it off.";
        outputElement.style.color = "#4cd137";
    } else if (userMood === "energetic") {
        recommendation = "Get ready for the 'Midnight Speed-Run'! A 30-minute uninterrupted set of high-tempo indie rock.";
        outputElement.style.color = "#ff4757";
    } else {
        recommendation = "Just keep listening to " + radioShow.station + " with " + radioShow.host + "!";
    }

    // DOM Property 2: element.textContent
    outputElement.textContent = recommendation;
});