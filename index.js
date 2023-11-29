document.querySelector("#submit").addEventListener("click", function () {
    var height = document.querySelector("#height").value;
    var heightMeters = height / 100;
    var weight = document.querySelector("#weight").value;
    var bmi = weight / (heightMeters * heightMeters);
    var result = "Your BMI is: " + bmi.toFixed(2);
    document.querySelector("#result").innerHTML = result;

    var resultCategory;
    if (bmi < 18.5) {
        resultCategory="You Are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultCategory="Your Weight Is Normal";
    } else if (bmi > 24.9) {
        resultCategory="You Are Overweight";
    }
    document.querySelector("#resultCategory").innerHTML=resultCategory;
});