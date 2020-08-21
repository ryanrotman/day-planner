// Global variables for needed elements on the page
var currentDay = $("#currentDay");
var hour = 9;
var apptArray = [];

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
    newApptDiv.attr("id", i);
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


// Call compareHour() function
compareHour();

// Function to compare current hour with time-blocks and adjust display color accordingly
function compareHour() {
    for (var i = 9; i < 18; i++) {
        // Variable to set current hour
        var currentHour = moment().format("H");
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
    // compare time-block hour to current hour
        // adjust ids to 9-18
        // adjust currenthour format to 24 hour hour only
        // wrap this all in a function
            // for loop with i=9; i<18
            // if currenthour < i - addClass past
            // if currenthour = i - addClass present
            // if currenthour > i - addClass future
            // TODO: need to figure out how to select proper ID(s) though
                // ? using some sort of concatination $("#" + someVariable)
                    // need to somehow create a new variable w/in the function that = i
        