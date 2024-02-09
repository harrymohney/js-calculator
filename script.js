document.addEventListener("DOMContentLoaded", function() {
  // Attach event listeners
  document.getElementById("allClear").addEventListener("click", clearScreen);
  document.getElementById("clear").addEventListener("click", clearScreen);
  document.getElementById("percent").addEventListener("click", function() {
      myFunction("percent");
  });
  document.getElementById("divide").addEventListener("click", function() {
      myFunction("divide");
  });
  document.getElementById("multiply").addEventListener("click", function() {
      myFunction("multiply");
  });
  document.getElementById("subtract").addEventListener("click", function() {
      myFunction("subtract");
  });
  document.getElementById("add").addEventListener("click", function() {
      myFunction("add");
  });
  document.getElementById("equals").addEventListener("click", calculate);
  // Attach event listeners for other buttons here
});

// Determines button clicked via id
function myFunction(id) {
  document.calculator.result.value += id;
}

// Clears calculator input screen
function clearScreen() {
  document.calculator.result.value = "";
}

// Calculates input values
function calculate() {
  try {
      var input = eval(document.calculator.result.value);
      document.calculator.result.value = input;
  } catch (err) {
      document.calculator.result.value = "Error";
  }
}
