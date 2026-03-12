let tasks=[]

function addTask(){
let name=document.getElementById("taskInput").value
let priority=document.getElementById("priority").value

if(name=="") return

tasks.push({name:name,priority:priority,completed:false})
document.getElementById("taskInput").value=""
showTasks(tasks)
}

function showTasks(list){
let ul=document.getElementById("taskList")
ul.innerHTML=""

list.forEach(function(t,i){

let li=document.createElement("li")

let span=document.createElement("span")
span.innerText=t.name+" ("+t.priority+")"

if(t.completed){
span.classList.add("done")
}

span.onclick=function(){

if(span.classList.contains("done")){
span.classList.remove("done")
tasks[i].completed=false
}
else{
span.classList.add("done")
tasks[i].completed=true
}

}

let btn=document.createElement("button")
btn.innerText="Delete"

btn.onclick=function(){
tasks.splice(i,1)
showTasks(tasks)
}

li.appendChild(span)
li.appendChild(btn)
ul.appendChild(li)

})
}

function filterTasks(type){

if(type=="all") showTasks(tasks)

if(type=="completed"){
let x=tasks.filter(function(t){ return t.completed })
showTasks(x)
}

if(type=="pending"){
let x=tasks.filter(function(t){ return !t.completed })
showTasks(x)
}

}