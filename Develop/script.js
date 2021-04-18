const today = document.getElementById('currentDay');

function updateTime () {
    const now = moment()
    today.textContent = now.format('MMMM Do YYYY, h:mm:ss a');

}
//making time work when page loads
setInterval(updateTime, 1000);
updateTime();

//saves appointment for each hour
$("#saveEight").click(function() {
    var appointmentSlot = "#textareaEight";
    var details = document.getElementById('#textareaEight').value;
    appointment(appointmentSlot, details);
    console.log("savebutton", appointment)
})

// scheduleArray = JSON.parse(localStorage.getItem(scheduleArray));
// console.log(scheduleArray)

//create hour blocks and append to page
//use forloop
for (var i = 8; i < 17; i++) {
    var ampm = 'AM'
    if(i>12) ampm = "PM"
    
    $(".container").append(`
    <div class="row timeblock" style="width:100%" id="hour${i}">
        <div class="hour">
            ${i<=12 ? i : i-12}:00 ${i<12 ? "AM" : "PM"}
            </div>
            <textarea class="description">
            </textarea>
              <button type="button" class="saveBtn"" class="btn btn-primary">Save</button>

          </div>
    `)
    
}

$("textarea").next(".saveBtn").saveData;
//create localstorage function that stores todo for a given hour

//create click event on saveBtn, grab corresponding text from the textarea in the same row 
var arrayButtons = document.querySelectorAll(".saveBtn");
for( var i = 0; i< arrayButtons.length; i++) {
    arrayButtons[i].addEventListener("click", saveData)
}
// arrayButtons.addEventListener("click", saveData)

var saveD = document.querySelectorAll(".description");
// console.log("what is this", saveD);
var userInput = [];
for (var i = 0; i < saveD.length; i++) {
    //console.log("this is DI", saveD[i])
    userInput.push(saveD[i]);
}

function saveData(){
    console.log('Button working')
    //function saveTodo(key, val)
    localStorage.setItem("description", $('textarea.description').val());
}

var localStorageData = localStorage.getItem("description", $('textarea.description').val());

//research DOM traversal using Jquery hint - siblings
//var saveInfo = $("textarea.description").next().saveData;
// $("button"). next(".saveBtn").saveData






























