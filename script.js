//heading dark orange when mouse hovers over it.
function colourDarkOrange() {
    let heading = document.getElementById("heading");
    heading.style = "color: darkorange;";
}
//original colour when mouse moved.
function colourDarkSlateGrey() {
    let heading = document.getElementById("heading");
    heading.style = "color: darkslategrey;";
}

function handleForm(event) {
    event.preventDefault();
    let form = event.target;
    let formValidated = validateServiceRating(form);

    if (formValidated) {
        let billTotalValue = parseFloat(form.billTotal.value);
        let serviceRating = form.serviceRating.value;
        let numPaying = parseFloat(form.numPaying.value);
        let tipAmount = calculateTipAmount(serviceRating, billTotalValue);

        // Calculate total with tip
        let totalWithTip = billTotalValue + tipAmount;

        // Call both functions to display total with tip and amount per person
        calculateTotalWithTip(totalWithTip);
        calculateAmountPerPerson(totalWithTip, numPaying);

        // Update the button text
        let button = document.getElementById("submitButton");
        button.innerText = "Sent";
    }
}

function validateServiceRating(form) {
    let serviceRating = form.serviceRating.value;
    let serviceRatingFeedback = document.getElementById("serviceRatingFeedback");
  
    if (serviceRating == "poor" || serviceRating == "good" || serviceRating == "excellent") {
        serviceRatingFeedback.innerText = "";
        return true;
    } else {
        serviceRatingFeedback.innerText = "Invalid response. Please enter poor, good, or excellent.";
        serviceRatingFeedback.style.color = "red"; 
        return false;  
    }
}
//calculate tip, based on service rating
function calculateTipAmount(serviceRating, billTotalValue) {
    if (serviceRating == "poor") {
        return billTotalValue * 0;
    } else if (serviceRating == "good") {
        return billTotalValue * 0.10;
    } else if (serviceRating == "excellent") {
        return billTotalValue * 0.20;
    }
    return 0; // Default to no tip
}
//calculate total amount.
function calculateTotalWithTip(totalWithTip) {
    document.getElementById("totalWithTip").innerText = `£${totalWithTip.toFixed(2)}`;
}
//calculate total amount per person
function calculateAmountPerPerson(totalWithTip, numPaying) {
    if (numPaying > 0) {
        let perPerson = totalWithTip / numPaying;
        document.getElementById("perPerson").innerText = `£${perPerson.toFixed(2)}`;
    } else {
        perPerson.innerText = "Please enter a valid number of people.";
    }
}
//move right function
function moveRight() {
    let tipulatorWrapper = document.getElementById("tipulator-wrapper");
    tipulatorWrapper.style.left = "500px";
}
//move left function
function moveLeft() {
    let tipulatorWrapper = document.getElementById("tipulator-wrapper");
    tipulatorWrapper.style.left = "8px";
}
//close function
function closeTipulator() {
    document.getElementById("tipulator-wrapper").style.display = "none";
    document.getElementById("controls").style.display = "none";
    // Show the "Thank You" message
    document.getElementById("thankYouMessage").style.display = "block";
    
}

