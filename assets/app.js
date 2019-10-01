let results = [];

window.onload = $("#submit").on("click", function(event){
    event.preventDefault();
    getInfo();
    newTable();
    console.log("ive been click")
})


function getInfo(){
    for(i = 1 ; i < 7 ; i++){
         input = $("#validationDefault0"+i).val().trim();
         let tdTag = $("<td>");
        tdTag.text(input);
      results.push(tdTag);
        console.log(results);
        }
        console.log(results);
       //
       //
       //console.log(input)
    
    // //
    // 
    // 
    // newTable.addClass("one")
    // ;
    // 
}

function newTable(){
console.log(results);
let tableInput = $("<tr>");
let newTable = $("<th>");
newTable.attr("scope","row");

// append "<th>" to "<tr>"
tableInput.append(newTable);
// append "<td>" to "<tr>"
tableInput.append(results);
$("#table-body").append(tableInput);

results = [];
console.log(results);
}
