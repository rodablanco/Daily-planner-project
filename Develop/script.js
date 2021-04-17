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
            ${i>12 ? i-12 : i}:00 ${i>12 ? "PM" : "AM"}
            </div>
            <textarea class="description">
            </textarea>
              <button type="button" class="saveBtn"" class="btn btn-primary">Save</button>

          </div>
    `)
    
}


//create localstorage function that stores todo for a given hour
document.querySelector(".saveBtn").addEventListener("click", saveData)

function saveData(){
    var saveInfo = $("textarea.description").next().saveData;
    localStorage.getItem("description", saveInfo);
}
//function saveTodo(key, val)
// function saveTodo ("saveDescription",)
//create click event on saveBtn, grab corresponding text from the textarea in the same row 
//research DOM traversal using Jquery hint - siblings
//var saveInfo = $("textarea.description").next().saveData;































