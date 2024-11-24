
grade = 101

if (_grade >= 80 && _grade < 100){
    console.log("Distinction")
}
else if (_grade >= 60 && _grade < 80){
    console.log("First class")
}
else if (_grade >= 50 && _grade < 60){
    console.log("second class")
}
else if (_grade >= 35 && _grade < 50){
    console.log("Pass")
}
else if (_grade >= 0 && _grade < 35){
    console.log("FAIL")
}
else{
    console.log("Invalid Input")
}