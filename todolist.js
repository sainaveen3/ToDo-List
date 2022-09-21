let inputText = document.getElementById("text")
document.querySelector('#push').onclick = function (){
    if(inputText.value.length === 0){
        alert("Please enter text")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task"><span id="taskName">${document.querySelector("#text").value}</span><button class="delete">DELETE</button>
        </div>`
        let currentTasks = document.querySelectorAll(".delete")
        for(let i=0;i<currentTasks.length;i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }
        let clearTasks = document.getElementById("clear")
        clearTasks.onclick=function(){
            document.querySelector("#tasks").innerHTML = ""
            document.querySelector("#newTask input").value = ""
        }
        let tasks = document.querySelectorAll("#taskName")
        for(let i=0;i<tasks.length;i++){
            tasks[i].onclick = function(){
                this.classList.toggle("completed");
            }
        }
        document.querySelector("#newTask input").value = ""
    }
}