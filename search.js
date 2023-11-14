function search() {
    console.log("what the user typed in: ", document.getElementById("fname").value)
    document.getElementById('resultDiv').innerHTML = document.getElementById("fname").value;

    sdk.searchGet({
      q: document.getElementById("fname").value
    }, {}, {}).then((response) => {
      
      console.log(response);
      var data = response.data;
      console.log(data);
    }).catch((error) => {
      console.log('an error occurred', error);
    });

    return
  }
