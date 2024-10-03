const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const handleButtonClick = (event, action) => {
  event.preventDefault(); // Prevent form submission
  if (action === "check") {
    checkPhoneNumber(userInput.value);
    userInput.value = ""; // Clear input after checking
  } else if (action === "clear") {
    resultsDiv.replaceChildren(); // Clear results
  }
};

const checkPhoneNumber = input => {
  // Check if the input is empty and alert the user
  if (input === "") {
    alert("Please provide a phone number");
    return; // Exit the function early
  }

  const phoneRegex = /^(1 ?)?(\(\d{3}\)|\d{3})[ -]?(\d{3})[ -]?(\d{4})$/;
  const pElement = document.createElement("p");

  const pText = document.createTextNode(
    `${phoneRegex.test(input) ? 'Valid US number: ' : 'Invalid US number: '} ${input}`
  );

  pElement.appendChild(pText);
  resultsDiv.appendChild(pElement);
};

// Attach event listeners to the buttons
checkBtn.addEventListener("click", (e) => handleButtonClick(e, "check"));
clearBtn.addEventListener("click", (e) => handleButtonClick(e, "clear"));

// Handle Enter key on buttons
checkBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleButtonClick(e, "check");
});
