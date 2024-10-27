

// Handle the submit button click event
document.getElementById("submit-btn").addEventListener("click", function() {
    
    const modal = document.getElementById("completion-modal");
    modal.style.display = "flex";  
    document.getElementById("submit-btn").disabled = true;

    completeTest();
});

let percentage='';
function completeTest() {
   
    console.log("Test submitted successfully.");

    const marksObtained = marksCalc(); 
    const totalMarks = qusList.length; 
    percentage = (marksObtained / totalMarks) * 100;

    const modalContent = document.getElementById("modal-content");
    if(percentage>=10){
            modalContent.innerHTML = `
            <h2>Test Completed</h2>
            <p>Thank you for your participation!</p>
            <h1>🎊</h1>
            <p>We are pleased to inform you that you have met the threshold marks required to proceed further in the selection process. Congratulations!</p>
            <div class="circular-progress" style="--percentage: ${percentage}%; width: 150px; height: 150px;background:var(--minor)">
                <span class="progress-label">${percentage.toFixed(0)}%</span>
            </div>
            <p>Total Marks Obtained: ${marksObtained} / ${totalMarks}</p>
            <button  style="background-color: blue; 
            color: white; 
            padding: 10px 20px; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer; 
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s ease;" onclick="finalSubmit(${percentage})">Continue</button>
            `;
        

    }
    else{
    modalContent.innerHTML = `
        <h2>Test Completed</h2>
        <p>Thank you for your participation!</p>
        <h2>🥺</h2>
        <p>We regret to inform you that you did not meet the threshold marks required to proceed further in the selection process.</p>
        <div class="circular-progress" style="--percentage: ${percentage}%; width: 150px; height: 150px;background:var(--minor)">
            <span class="progress-label">${percentage.toFixed(0)}%</span>
        </div>
        <p>Total Marks Obtained: ${marksObtained} / ${totalMarks}</p>
        <a href="/">
        <button  style="background-color: blue; 
        color: white; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 8px; 
        cursor: pointer; 
        font-size: 16px;
        font-weight: bold;
        transition: background-color 0.3s ease;" >Home</button></a>
        `;
        
    }
    
    // Disable navigation (Prevent going back to the test page)
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function() {
        window.history.pushState(null, "", window.location.href);
    };

    // Prevent modal from closing by clicking inside the modal content
    document.getElementById("completion-modal").addEventListener("click", function(e) {
        e.stopPropagation();
    });

    // Prevent clicks outside the modal from closing it
    document.addEventListener("click", function(e) {
        const modal = document.getElementById("completion-modal");

        // Only stop propagation if the modal is active
        if (modal.style.display === "flex" && !modal.contains(e.target)) {
            e.stopPropagation(); // Prevent closing or other unwanted interactions with the modal
        }
    });
}

// Create the CSS for the circular progress bar
const style = document.createElement('style');
style.innerHTML = `
    .circular-progress {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: conic-gradient(#4CAF50 calc(var(--percentage) * 1%), #FFC107 calc(var(--percentage) * 1%));
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: #333;
        background: var(--minor);
        margin: 0 auto;
    }

    .circular-progress::before {
        content: "";
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: #fff;
        background: var(--major);
        position: absolute;
    }

    .progress-label {
        position: relative;
        z-index: 1;
        font-weight: bold;
    }
`;
document.head.appendChild(style);


function marksCalc()
{
    let marksObtained=0;
    for(i=0;i<qusList.length;i++)
    {
       if( qusList[i].questions.crct_opt==userAns[i])
        marksObtained=marksObtained+1;
    }
    return marksObtained;
}


function finalSubmit(percentage){
    let testData={
        percentage:percentage,
        uuid:misData[0].uuid
    }
    axios.post('http://localhost:8080/submit', testData) 
    .then(response => {
        document.getElementsByTagName('html')[0].innerHTML=response.data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
