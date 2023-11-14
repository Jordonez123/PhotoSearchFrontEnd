function search() {
    console.log("what the user typed in: ", document.getElementById("fname").value)
    document.getElementById('resultDiv').innerHTML = document.getElementById("fname").value;
    return
  }
