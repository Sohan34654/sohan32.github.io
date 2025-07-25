let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Convert input to a real JS expression
    const result = eval(display.value);
    display.value = result;
  } catch (err) {
    alert("Invalid Expression!");
    display.value = "";
  }
}
