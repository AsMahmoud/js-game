
var inputAdd=document.getElementById("input_add");
var addBtn=document.getElementById("add_btn");
var toDoUl=document.getElementById("to_do_ul");
var completeUl=document.getElementById("complete_ul");
var users=document.getElementById("users");

var toDoArr=[];
var CompleteArr=[];

var bigArr=[];


window.onload=function(){
    
    if(!localStorage.toDo || !localStorage.complete){
        toDoUl.innerHTML="";
        completeUl.innerHTML="";
    }
    else{
        var storageListArr = localStorage.toDo.split(',');
        toDoArr=storageListArr;
        var storageCompArr = localStorage.complete.split(',');
        CompleteArr=storageCompArr;

        drawList(toDoArr);
        drawComplete(CompleteArr);
    
    }  
}

// {"asmaa":{
//     "todo":[]
//     "complete":[]
// },
// "omar":{
//     "todo":[]
//     "complete":[]
// }
// }


var toDoArrAs=[];
var completeArrAs=[];
var toDoArrSh=[];
var completeArrSh=[];
var output1;
var output2;
var outputAll;
addBtn.addEventListener("click",addTask);
function addTask()
{
    // toDoArr.push(inputAdd.value);

     if(users.value==="asmaa")
     {
        toDoArrAs.push(inputAdd.value);
        output1={[users.value]:{"toDo":toDoArrAs,"complete":completeArrAs}};
     }
     if(users.value==="shimaa")
     {
        toDoArrSh.push(inputAdd.value);
        output2={[users.value]:{"toDo":toDoArrSh,"complete":completeArrSh}};
     }
     outputAll={...output1,...output2};
    drawList(toDoArr);
    saveToLocalStorage();
    
    
}
function saveToLocalStorage()
{
    localStorage.setItem("output",JSON.stringify(outputAll));

    // localStorage.toDo=toDoArr;
    // localStorage.complete=CompleteArr;
}
function deleteFromList(i)
{
    delete toDoArr[i];
    saveToLocalStorage();
    drawList(toDoArr);
}
function addToComplete(i)
{
    CompleteArr.push(toDoArr[i]);
    delete toDoArr[i];
    saveToLocalStorage();
    drawComplete(CompleteArr);
    drawList(toDoArr);
}
function drawList(arr)
{
    toDoUl.innerHTML="";
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i])
        {
          toDoUl.innerHTML+=`<li>${arr[i]} <img src="../img/delete.png" id="list_del" onclick='deleteFromList(${i})'> <img src="../img/right.webp" id="list_add" onclick='addToComplete(${i})' ></li> `;
        }  
    }
}
function drawComplete(arr)
{
    completeUl.innerHTML="";
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i])
        {
            completeUl.innerHTML+=`<li>${arr[i]} <img src="../img/delete.png" id="list_del" onclick='deleteFromComp(${i})'> <img src="../img/right.webp" id="list_add" onclick='backToList(${i})' ></li> `;
        }  
    }
}
function deleteFromComp(i)
{
    delete CompleteArr[i];
    saveToLocalStorage();
    drawComplete(CompleteArr);
}
function backToList(i)
{
    toDoArr.push(CompleteArr[i]);
    drawList(toDoArr);
    delete CompleteArr[i];
    drawComplete(CompleteArr);
    saveToLocalStorage();
}
