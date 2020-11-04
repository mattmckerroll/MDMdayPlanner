//import moment from moment;

//var moment = moment();

var currentDay = moment().format("dddd, MMMM DD");
$("#currentDay").text(currentDay);

$(document).ready(function(){

    var now24Hour = moment().format("H");
    //var now12Hour = moment().format("h");

    //get stored stuff here with parse and json

    var fromstorage = JSON.parse(localStorage.getItem("plannerStorage"));

    //if stoarage empty do nothing, if not, toss that info into the saved plans array

    if (fromstorage !== null) {
        savedPlansArr = fromstorage;
        
    }else{
        savedPlansArr = new Array(9);

    }

    

    
    let dayPlanDiv = $("#dayPlanArea");
    //clear existing stuff
    dayPlanDiv.empty();

    for (let hour = 9; hour <= 17; hour++) {
        var index = hour - 9;   //index is essentially just number of hours past 9am 

        var rows =  $("<div>");
        rows.addClass("row");
        rows.addClass("plannerRow");
        rows.attr("data-hour", hour);

        var timeBlock =  $("<div>");
        timeBlock.addClass("col-md-2");

        //the hour of the row will be shown here
        var hourDisplay =  $("<span>");
        hourDisplay.attr("class", "time-block");

        let shownHour = 0;
        let period = ""; //shows am or pm
        
        if ( hour>12){
            shownHour = hour -12;
            period = "PM";
        } else {
            shownHour = hour;
            period = "AM"
        }

            // populate timeBox with time and add the time block to the page
        hourDisplay.text(`${shownHour}${period}`);
        rows.append(timeBlock);
        timeBlock.append(hourDisplay);

        console.log(timeBlock);
        console.log(hourDisplay);

        var planText = $("<input>");

        planText.attr("id", "hourindex-"+index);
        planText.attr("data-hour",index); //hours past 9am
        planText.attr("type","text");
        planText.attr("class","hourlyPlanText textarea");
        planText.val(savedPlansArr[index]);  //this is what actually places the saved info 
        
        //making the input areas and divs
        var inputDiv = $("<div>");
        inputDiv.addClass("col-md-9");

        rows.append(inputDiv);
        inputDiv.append(planText);

        let saveDiv = $("<div>");
        saveDiv.addClass("col-md-1");

        //build the save button
        var saveBtn = $("<button>");
        saveBtn.attr("id",`saveindex-${index}`);
        saveBtn.attr("data-save",index);
        saveBtn.attr("class","far fa-save saveBtn");

        //stick on the savebutton
        rows.append(saveDiv);
        saveDiv.append(saveBtn)

        //call the function to apply a color to the row based on the time.
        rowColor(rows, hour);



        dayPlanDiv.append(rows);

    }

    function rowColor(row, hour){ //this function will color the rows based on the time
       
        if (hour < now24Hour) {
            
            row.addClass("past");
    
        } else if ( hour > now24Hour) {
    
            row.addClass("future")
    
          } else {
    
            row.addClass("present")
          }
        
    
    }

    //onclick event function that will save the info entered into the text fields
    $(document).on("click","button",function(event){
        console.log("work yes?")
        event.preventDefault();
        var saveID = $(this).attr("data-save");
        console.log(saveID);

        var inputIndex = "#hourindex-"+saveID;
        var value = $(inputIndex).val();

        savedPlansArr[saveID] = value;

        localStorage.setItem("plannerStorage", JSON.stringify(savedPlansArr));

    })
    
});




