// Global variables for needed elements on the page
var currentDay = $("#currentDay");
var hour = 9;
var apptArray = [];
var currentHour = moment().format("ha");

// Set current date and time in calendar header
currentDay.text(moment().format("LL"));
console.log(currentDay);

// Create loop to create all needed rows
for (var i = 9; i < 18; i++) {
    // Create calendar timeblocks
    var newDiv = $("<div>");
    newDiv.addClass("row");
    newDiv.addClass("plannerRow");
    $(".container").append(newDiv);

    // Create time column
    var newTimeDiv = $("<div>");
    newTimeDiv.addClass("col-1 time-block hour");
    newTimeDiv.attr("id", i);
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
    newApptDiv.addClass("col-10 description");
    newDiv.append(newApptDiv);

    // Create save button
    var saveBtn = $("<button>");
    saveBtn.attr("type", "button");
    saveBtn.addClass("col-1 saveBtn");
    newDiv.append(saveBtn);

    // Add font awesome icon to button
    var faIcon = $("<i>");
    faIcon.addClass("far fa-calendar-plus");
    saveBtn.append(faIcon);
};

// Click event for saving input field to local storage


// TODO:
    // compare time-block hour to current hour