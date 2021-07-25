// Sets the current day at the top of the page
var currentDay = moment().format("LL");
$("#currentDay").html(currentDay);

// Define functions to load textarea content from localStorage
var loadTask = function() {
    // get tasks from local storage (runs for each line)
    $("#task-hour8").val(localStorage.getItem("8"));
    $("#task-hour9").val(localStorage.getItem("9"));
    $("#task-hour10").val(localStorage.getItem("10"));
    $("#task-hour11").val(localStorage.getItem("11"));
    $("#task-hour12").val(localStorage.getItem("12"));
    $("#task-hour13").val(localStorage.getItem("13"));
    $("#task-hour14").val(localStorage.getItem("14"));
    $("#task-hour15").val(localStorage.getItem("15"));
    $("#task-hour16").val(localStorage.getItem("16"));
    $("#task-hour17").val(localStorage.getItem("17"));
};

// function to set variables to record in local storage, defining time and tasks.
$(document).ready(function() {
    // saveBtn function on click
    $(".saveBtn").on("click", function() {
        // establish the data to be saved
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save the task data to localStorage
        localStorage.setItem(time, task);
        
        // give a confirmation message for 3 seconds
        $("#save-message").text("Your task has been saved");
        setTimeout(function(){
            $("#save-message").empty();
            }, 2000);
    })

    var identifyTime = function() {
        // get the hour of the current time
        var currentTime = moment().hour();
    
        // check time relative to each time block
        $(".description").each(function () {
            var taskTime = parseInt($(this).attr("id").split("task-hour")[1]);
            
            // add the css class that makes the color display based on past, present or future
            if (taskTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            if (taskTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            if (taskTime > currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    };

    // call the function to set the block colors
    identifyTime();
    // call the function to load the textarea blocks from localStorage
    loadTask();
});
