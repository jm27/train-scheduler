
// Store Results from inputs
let results = [];
let resultsInput = [];

// Rows 
let a = 1;
let b = localStorage.getItem("count");


let input;

// Firebase configurations
const config = {
  apiKey: "AIzaSyDiLmAexR4idCGWhosWR_SbMrig7GMPNZo",
  authDomain: "train-scheduler-97d70.firebaseapp.com",
  databaseURL: "https://train-scheduler-97d70.firebaseio.com",
  projectId: "train-scheduler-97d70",
  storageBucket: "",
  messagingSenderId: "836843178119",
  appId: "1:836843178119:web:658228eade5eeb38b4d022",
  measurementId: "G-0YHLZCW5ZH"
};

firebase.initializeApp(config);

let trainData = firebase.database().ref();




// We want to create a function to save in local
// storage train results, and display them
// each time the window is loaded..

function getLocalMemory() {
  let a = 1;
  let c = 1;
  

  let b = localStorage.getItem("count");
  
 
//   if (b > 0) {
//     c = b;
//     data = JSON.parse(localStorage.getItem("row" + a));
//   }
//   else if (b <= 0) {
//     c = 1;
// data;
//   }

 

  for (i = 0; i < b; i++) {
    let data = JSON.parse(localStorage.getItem("row" + a));

    console.log(i);
    console.log(b);
    let tdTagOne = $("<td>");
    let tdTagTwo = $("<td>");
    let tdTagThree = $("<td>");
    let tdTagFour = $("<td>");
    let tdTagFive = $("<td>");
    let tdTagSix = $("<td>");

    
console.log(c);

    tdTagOne.text(data.slice(0, 1));
    tdTagTwo.text(data.slice(1, 2));
    tdTagThree.text(data.slice(2, 3));
    tdTagFour.text(data.slice(3, 4));
    tdTagFive.text(data.slice(4, 5));
    tdTagSix.text(data.slice(5, 6));


    //console.log(JSON.parse(localStorage.getItem("row" + c)));
    let tableInput = $("<tr>");
    let newTable = $("<th>");
    newTable.attr("scope", "row");
    newTable.text(a);
    a++;
    // append "<th>" to "<tr>"
    tableInput.append(newTable);
    tableInput.append(tdTagOne);
    tableInput.append(tdTagTwo);
    tableInput.append(tdTagThree);
    tableInput.append(tdTagFour);
    tableInput.append(tdTagFive);
    tableInput.append(tdTagSix);
    // append "<td>" to "<tr>"
    $("#table-body").append(tableInput);
    c++;
   
    console.log(c);
  }
};




console.log(a);
window.onload =
  getLocalMemory();
$("#clearLocal").on("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  console.log("ive been clicked!!!!")
});

$("#submit").on("click", function (event) {

  event.preventDefault();

  getInfo();

  newRow();
  console.log("ive been click")

});




function getInfo() {
  for (i = 1; i < 7; i++) {
    input = $("#validationDefault0" + i).val().trim();
    let tdTag = $("<td>");
    tdTag.text(input);
    resultsInput.push(input);
    results.push(tdTag);
    console.log(results);
  }
  a;
  b;



  if (b > 0) {
    localStorage.setItem("count", b);
    localStorage.setItem("row" + b, JSON.stringify(resultsInput));

  }
  else if (b <= 0) {
    localStorage.setItem("row" + a, JSON.stringify(resultsInput));

  }
 


  console.log(resultsInput);
  trainData.push(results);

}



function newRow() {
  console.log(results);
  let tableInput = $("<tr>");
  let newTable = $("<th>");
  a;
  b;
  newTable.attr("scope", "row");
  if (b > 0) {
    newTable.text(b);
  }
  else if (b <= 0) {
    newTable.text(a);
  }

  a++;
  b++;
  // append "<th>" to "<tr>"
  tableInput.append(newTable);
  // append "<td>" to "<tr>"
  tableInput.append(results);
  $("#table-body").append(tableInput);
  results = [];
  resultsInput = [];
  console.log(results);
  console.log(a);
}
