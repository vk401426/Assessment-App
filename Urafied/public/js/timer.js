class TestTimer {
    constructor(duration, display, alertTime, endCallback) {
        this.duration = duration; // Total time in seconds
        this.display = display; // HTML element to display the timer
        this.alertTime = alertTime; // Time when the alert should be triggered (in seconds)
        this.endCallback = endCallback; // Function to call when the time ends
        this.remainingTime = duration; // Remaining time
        this.interval = null; // Interval for the countdown
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    start() {
        this.display.textContent = this.formatTime(this.remainingTime);

        this.interval = setInterval(() => {
            this.remainingTime--;

            // Display the updated time
            this.display.textContent = this.formatTime(this.remainingTime);

            // Check if it's time to show the alert
            if (this.remainingTime === this.alertTime) {
                this.showAlert("10 minutes left!");
            }

            // Check if time is up
            if (this.remainingTime <= 0) {
                clearInterval(this.interval);
                this.endCallback();
            }
        }, 1000); // Update every 1 second
    }

    showAlert(message) {
        const alertElement = document.getElementById("alert");
        alertElement.textContent = message;
        alertElement.style.display = "block";

        // Automatically hide the alert after 3 seconds
        setTimeout(() => {
            this.hideAlert();
        }, 3000);

        // Hide the alert if user clicks anywhere on the screen
        document.body.addEventListener('click', () => {
            this.hideAlert();
        }, { once: true });
    }

    hideAlert() {
        const alertElement = document.getElementById("alert");
        alertElement.style.display = "none";
    }
}

// Function to call when the test time ends
function endTest() {
    alert("Time's up! The test will now end.");
    completeTest();
    // Insert your function here, e.g., submitTest();
}

// Initialize the timer when the page loads
window.onload = function() {
    const totalTime = 10.1 * 60; // Total time in seconds (90 minutes)
    const alertTime = 10 * 60; // Time to trigger alert (10 minutes before the end)
    const timerDisplay = document.getElementById("timer");

    const testTimer = new TestTimer(totalTime, timerDisplay, alertTime, endTest);

    // Start the timer when the page loads
    testTimer.start();
};
