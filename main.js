// Using IIFE We automatically invoke this function in the begining... 
// and these values can't be changed

(function getName() {
    var name = prompt("Enter Your Name:");
    var displayText = "Hello There! " + name;
    var NameArea = document.getElementById("Name");
    NameArea.innerHTML = displayText;
})();


let submit = document.getElementById("Submit");
submit.addEventListener("click", () => {
    var height = document.getElementById("Height").value;
    var weight = document.getElementById("Weight").value;

    // Formulae OF BMI Is kg/(m)^2 -- m in the sense height
    meter = height / 100;
    mSquare = meter * meter;
    bmi = weight / mSquare;
    answer = Math.ceil(bmi);
    if (bmi > 25) {
        alert(
            "You are lille Fatty!!! Please ask me for a good diet ;)... And your BMI is " +
            answer
        );
    } else {
        alert("You are Normal... keep it up... Your BMI is " + answer);
    }
});