// Variable selecting needed elements on the page
var currentDay = $("#currentDay");

// Set current date and time in calendar header
currentDay.text(moment().format("LL"));
console.log(currentDay);

// Create loop to create all needed rows
for (var i = 0; i < 9; i++) {
    // Create calendar timeblocks
    var newDiv = $("<div>");
    newDiv.addClass("row");
    newDiv.addClass("plannerRow");
    $(".container").append(newDiv);

    // Create time column
    var newTimeDiv = $("<div>");
    newTimeDiv.addClass("col-1 time-block hour");
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
    faIcon.addClass("fa fa-check-square-o");
    saveBtn.append(faIcon);
};

// TODO:
    // debug why the fontawesome icon is not showing up in the button