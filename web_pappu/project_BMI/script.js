document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    var bmi = calculateBMI(height, weight);
    displayResult(bmi);
  });
  
  function calculateBMI(height, weight) {
    return (weight / ((height / 100) ** 2)).toFixed(1);
  }
  
  function displayResult(bmi) {
    var resultDiv = document.getElementById('result');
    var resultText = '';
  
    if (isNaN(bmi)) {
      resultText = 'Please enter valid height and weight.';
    } else {
      resultText = 'Your BMI is ' + bmi + '.';
    }
  
    resultDiv.textContent = resultText;
  }
  