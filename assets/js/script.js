// Sets the current day at the top of the page
var currentDay = moment().format("LL");
$("#currentDay").html(currentDay);

// function to set variables to record in local storage, defining time and tasks.
var saveTasks = function() {
    // establish the data to be saved
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save the task data to localStorage
    localStorage.setItem(time, task);
    console.log(localStorage);
};

// run saveTasks when the save button on corresponding row is clicked
$(".saveBtn").on("click", saveTasks())

// button highlights green when 
// get tasks from local storage (runs for each line)
$(document).on("load", function() {
    $("#8AM .description").val(localStorage.getItem("8AM"));
    $("#9AM .description").val(localStorage.getItem("9AM"));
    /*$("#10AM .description").val(localStorage.getItem("10AM"));
    $("#11AM .description").val(localStorage.getItem("11AM"));
    $("#12PM .description").val(localStorage.getItem("12PM"));
    $("#1PM .description").val(localStorage.getItem("1PM"));
    $("#2PM .description").val(localStorage.getItem("2PM"));
    $("#3PM .description").val(localStorage.getItem("3PM"));
    $("#4PM .description").val(localStorage.getItem("4PM")); */
});


// function to set hour block colors based on current time
var identifyTime = function () {
    // get the hour of the current time
    var currentTime = moment().hour();

    // check time relative to each time block
    $(".time-block").each(function () {
        var taskTime = parseInt($(this)
            .attr("id")
            .trim()
            [1]
            );
        
        // To check the time and add the classes for background indicators
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

identifyTime();
