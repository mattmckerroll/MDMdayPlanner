var moment = moment();

var currentDay = moment.format("dddd, MMMM DD");

$(document).ready(function(){

    //get stored stuff here with parse and json

    //if stoarage empty do nothing

    let dayPlanDiv = $("#dayPlanArea");
    //clear existing stuff
    dayPlanDiv.empty();

    for (let hour = 9; hour <= 17; hour++) {
        var index = hour - 9;   //index is essentially just number of hours past 9am 

        var rows =  $('<div>');
        rows.addClass("row");
        rows.addClass("plannerRow");
        rows.attr("data-hour", hour);

        var timeBlock =  $('<div>');
        timeBlock.addClass("col-md-2");

        //the hour of the row will be shown here
        var hourDisplay =  $('<span>');
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

        planText.attr('id', "hourindex-"+index);
        planText.attr("data-hour",index); //hours past 9am
        planText.attr("type","text");
        planText.attr('class','dailyPlan');



        //input parts of planner goes here
        
/*
    // insert into col inset into timebox
    $rowDiv.append($col2TimeDiv);
    $col2TimeDiv.append($timeBoxSpn);
    // STOP building Time box portion of row

    // START building input portion of row
    // build row components
    let $dailyPlanSpn = $('<input>');

    $dailyPlanSpn.attr('id',`input-${index}`);
    $dailyPlanSpn.attr('hour-index',index);
    $dailyPlanSpn.attr('type','text');
    $dailyPlanSpn.attr('class','dailyPlan');

    // access index from data array for hour 
    $dailyPlanSpn.val( planTextArr[index] );
    
    // create col to control width
    let $col9IptDiv = $('<div>');
    $col9IptDiv.addClass('col-md-9');

    // add col width and row component to row
    $rowDiv.append($col9IptDiv);
    $col9IptDiv.append($dailyPlanSpn);
    // STOP building Time box portion of row

    // START building save portion of row
    let $col1SaveDiv = $('<div>');
    $col1SaveDiv.addClass('col-md-1');

    let $saveBtn = $('<i>');
    $saveBtn.attr('id',`saveid-${index}`);
    $saveBtn.attr('save-id',index);
    $saveBtn.attr('class',"far fa-save saveIcon");
    
    // add col width and row component to row
    $rowDiv.append($col1SaveDiv);
    $col1SaveDiv.append($saveBtn);
    // STOP building save portion of row

    // set row color based on time
    updateRowColor($rowDiv, hour);
    
    // add row to planner container
    $plannerDiv.append($rowDiv);

        

    }
*/
dayPlanDiv.append(rows);

    }
});

//$("#currentDay").html("<h1>"

for (var i = 9; i<18; i+=1){


    $(".container").append("<div>"+i+"</div>");
}