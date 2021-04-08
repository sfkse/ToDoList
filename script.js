



document.querySelector(".create-button").addEventListener('click', function () {

    let borderClass = ""
    let taskName = document.querySelector('.task-name').value;
    let priority = document.querySelector('input[name="priority"]:checked').value


    if (priority === "High") {
        borderClass = 'high-priority'
    }
    else if (priority === "Medium") {
        borderClass = 'medium-priority'
    }
    else if (priority === "Low") {
        borderClass = 'low-priority'
    }
    else if (priority === "Very Low") {
        borderClass = 'verylow-priority'
    }



    let task = `
    <div class="list-item ">
         <div class="list-check">
             <input type="checkbox" class="check-item " name="">
         </div>
         <div class="list-task ${borderClass}">
             <h3>${taskName}</h3>
             <small>${priority} priority</small>
         </div>
         <div class="close-button">
             x
         </div>

     </div>

    `

    document.querySelector('.list-item-wrapper').innerHTML += task
    document.querySelector('.task-name').value = ""
    document.querySelector('#priority-4').checked = true



    const check = document.querySelectorAll(".list-check input");
    check.forEach((item, index) => {
        item.addEventListener('click', () => {

            document.querySelectorAll(".list-task h3")[index].classList.toggle("done")
            document.querySelectorAll('.list-task')[index].classList.toggle('completed')
        })
    })

    const close = document.querySelectorAll(".close-button");
    close.forEach((item, index) => {
        item.addEventListener('click', () => {
            document.querySelectorAll(".list-item")[index].classList.toggle("d-none")
        })
    })
})


