// Global variables for needed elements on the page
var currentDay = $("#currentDay");
var hour = 9;
var apptInput = "";
var apptTime = "";
var apptArray = [];

// Set current date and time in calendar header
currentDay.text(moment().format("LL"));
console.log(currentDay);

// Create loop to create all needed rows
for (var i = 9; i < 18; i++) {
    // Create calendar timeblocks
    var newDiv = $("<div>");
    newDiv.addClass("row plannerRow");
    $(".container").append(newDiv);

    // Create time column
    var newTimeDiv = $("<div>");
    newTimeDiv.addClass("col-md-1 time-block hour");
    if (i >= 13) {
        newTimeDiv.text(i - 12 + "pm")
    } else if (i == 12) {
        newTimeDiv.text(i + "pm")
    } else {
        newTimeDiv.text(i + "am")
    };
    newDiv.append(newTimeDiv);

    // Create input field for appointment
    var newApptDiv = $("<input>");
    newApptDiv.addClass("col-md-10 description");
    newApptDiv.attr("id", i);
    newApptDiv.attr("data-value", "appt" + i)
    newDiv.append(newApptDiv);

    // Create save button
    var saveBtn = $("<button>");
    saveBtn.attr("type", "button");
    saveBtn.addClass("col-md-1 saveBtn");
    newDiv.append(saveBtn);

    // Add font awesome icon to button
    var faIcon = $("<i>");
    faIcon.addClass("far fa-calendar-plus");
    saveBtn.append(faIcon);
};

// Click event for saving input field to local storage
$(".saveBtn").on("click", function () {
    event.preventDefault;
    // setting the text for the appointment input
    apptInput = $(this).parent().children(".description").val();
    console.log(apptInput);
    apptTime = $(this).parent().children(".description").attr("id");
    console.log(apptTime);
});

// Call compareHour() function
compareHour();

// Function to compare current hour with time-blocks and adjust display color accordingly
function compareHour() {
    for (var i = 9; i < 18; i++) {
        // Variable to set current hour
        var currentHour = moment().format("H");
        // If statement to set the past, present, and future color stylings
        if (i > currentHour) {
            $("#" + i).addClass("future")
        } else if (i == currentHour) {
            $("#" + i).addClass("present")
        } else {
            $("#" + i).addClass("past")
        };
    };
};


// TODO:
    
        