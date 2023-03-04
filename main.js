function updateClock(){
    var now = new Date;
    var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

    if(hou == 0){
        hou =12;
    }
    if(hou > 12){
        hou = hou - 12;
        pe = "PM";
    }

    Number.prototype.pad = function(digits){
        for(var n =this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayName", "month", "dayNum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for(var i = 0; i <ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}

var task1 = document.getElementById("task1")
var date1 = document.getElementById("date1")
var time1 = document.getElementById("time1")
var list1 = document.getElementById("list1")
var task2 = document.getElementById("task2")
var date2 = document.getElementById("date2")
var time2 = document.getElementById("time2")
var list2 = document.getElementById("list2")
var task3 = document.getElementById("task3")
var date3 = document.getElementById("date3")
var time3 = document.getElementById("time3")
var list3 = document.getElementById("list3")
var task4 = document.getElementById("task4")
var date4 = document.getElementById("date4")
var time4 = document.getElementById("time4")
var list4 = document.getElementById("list4")
var task5 = document.getElementById("task5")
var date5 = document.getElementById("date5")
var time5 = document.getElementById("time5")
var list5 = document.getElementById("list5")
var addBtn = document.getElementById("addBtn")
var removeBtn = document.getElementById("removeBtn")
var editBtn1 = document.getElementById("editBtn1")
var editBtn2 = document.getElementById("editBtn2")
var editBtn3 = document.getElementById("editBtn3")
var editBtn4 = document.getElementById("editBtn4")
var editBtn5 = document.getElementById("editBtn5")
var finishBtn = document.getElementById("finishBtn")
var finishBtn1 = document.getElementById("finishBtn1")
var finishBtn2 = document.getElementById("finishBtn2")
var finishBtn3 = document.getElementById("finishBtn3")
var finishBtn4 = document.getElementById("finishBtn4")
var finishBtn5 = document.getElementById("finishBtn5")
var error1 = document.getElementById("error1")
var error2 = document.getElementById("error2")
var error3 = document.getElementById("error3")
var error4 = document.getElementById("error4")
var error5 = document.getElementById("error5")

function addItem(){
    if(task2.style.display == "none"){
        if(date1.value == "" || time1.value == "" || list1.value == ""){
            error1.innerHTML = "Fill up all Fields"
        }
        else{
            task2.setAttribute("style","display: flex !important")
            date1.setAttribute("disabled","")
            time1.setAttribute("disabled","")
            list1.setAttribute("disabled","")
            removeBtn.setAttribute("style","display: flex !important")
            editBtn1.setAttribute("style","display: flex !important")
            finishBtn1.setAttribute("style","display: none !important")
            editBtn2.setAttribute("style","display: none !important")
            finishBtn2.setAttribute("style","display: none !important")
            error1.innerHTML = ""
        }
    }
    else if(task3.style.display == "none"){
        if(date2.value == "" || time2.value == "" || list2.value == ""){
            error2.innerHTML = "Fill up all Fields"
        }
        else{
            task3.setAttribute("style","display: flex !important")
            date2.setAttribute("disabled","")
            time2.setAttribute("disabled","")
            list2.setAttribute("disabled","")
            editBtn2.setAttribute("style","display: flex !important")
            finishBtn2.setAttribute("style","display: none !important")
            editBtn3.setAttribute("style","display: none !important")
            finishBtn3.setAttribute("style","display: none !important")
            error2.innerHTML = ""
        }
    }
    else if(task4.style.display == "none"){
        if(date3.value == "" || time3.value == "" || list3.value == ""){
            error3.innerHTML = "Fill up all Fields"
        }
        else{
            task4.setAttribute("style","display: flex !important")
            date3.setAttribute("disabled","")
            time3.setAttribute("disabled","")
            list3.setAttribute("disabled","")
            editBtn3.setAttribute("style","display: flex !important")
            finishBtn3.setAttribute("style","display: none !important")
            editBtn4.setAttribute("style","display: none !important")
            finishBtn4.setAttribute("style","display: none !important")
            error3.innerHTML = ""
        }
    }
    else if(task5.style.display == "none"){
        if(date4.value == "" || time4.value == "" || list4.value == ""){
            error4.innerHTML = "Fill up all Fields"
        }
        else{
            task5.setAttribute("style","display: flex !important")
            date4.setAttribute("disabled","")
            time4.setAttribute("disabled","")
            list4.setAttribute("disabled","")
            editBtn4.setAttribute("style","display: flex !important")
            finishBtn.setAttribute("style","display: flex !important")
            addBtn.setAttribute("style","display: none !important")
            finishBtn4.setAttribute("style","display: none !important")
            editBtn5.setAttribute("style","display: none !important")
            finishBtn5.setAttribute("style","display: none !important")
            error4.innerHTML = ""
        }
    }
    else if(task5.style.display == "flex"){
        if(date5.value == "" || time5.value == "" || list5.value == ""){
            error5.innerHTML = "Fill up all Fields"
        }
        else{
            date5.setAttribute("disabled","")
            time5.setAttribute("disabled","")
            list5.setAttribute("disabled","")
            editBtn5.setAttribute("style","display: flex !important")
            finishBtn.setAttribute("style","display: none !important")
            addBtn.setAttribute("style","display: none !important")
            finishBtn5.setAttribute("style","display: none !important")
            error5.innerHTML = ""
        }
    }
}
function removeItem(){
    if(task5.style.display == "flex"){
        task5.setAttribute("style", "display: none !important")
        time4.removeAttribute("disabled","")
        date4.removeAttribute("disabled","")
        list4.removeAttribute("disabled","")
        addBtn.setAttribute("style","display: flex !important")
        editBtn4.setAttribute("style","display: none !important")
        finishBtn4.setAttribute("style","display: none !important")
        finishBtn.setAttribute("style","display: none !important")
    }
    else if(task4.style.display == "flex"){
        task4.setAttribute("style", "display: none !important")
        date3.removeAttribute("disabled","")
        time3.removeAttribute("disabled","")
        list3.removeAttribute("disabled","")
        editBtn3.setAttribute("style","display: none !important")
        finishBtn3.setAttribute("style","display: none !important")
    }
    else if(task3.style.display == "flex"){
        task3.setAttribute("style", "display: none !important")
        date2.removeAttribute("disabled","")
        time2.removeAttribute("disabled","")
        list2.removeAttribute("disabled","")
        editBtn2.setAttribute("style","display: none !important")
        finishBtn2.setAttribute("style","display: none !important")
    }    
    else if(task2.style.display == "flex"){
        task2.setAttribute("style", "display: none !important")
        date1.removeAttribute("disabled","")
        time1.removeAttribute("disabled","")
        list1.removeAttribute("disabled","")
        removeBtn.setAttribute("style","display: none !important")
        editBtn1.setAttribute("style","display: none !important")
        finishBtn1.setAttribute("style","display: none !important")
    }
}
function editItem1(){
    date1.removeAttribute("disabled","")
    time1.removeAttribute("disabled","")
    list1.removeAttribute("disabled","")
    editBtn1.setAttribute("style","display: none !important")
    finishBtn1.setAttribute("style","display: flex !important")
}
function finishItem1(){
    if(date1.value == "" || time1.value == "" || list1.value == ""){
        error1.innerHTML = "Fill up all Fields"
    }
    else{
        date1.setAttribute("disabled","")
        time1.setAttribute("disabled","")
        list1.setAttribute("disabled","")
        editBtn1.setAttribute("style","display: flex !important")
        finishBtn1.setAttribute("style","display: none !important")
        error1.innerHTML = ""
    }
}
function editItem2(){
    date2.removeAttribute("disabled","")
    time2.removeAttribute("disabled","")
    list2.removeAttribute("disabled","")
    editBtn2.setAttribute("style","display: none !important")
    finishBtn2.setAttribute("style","display: flex !important")
}
function finishItem2(){
    if(date2.value == "" || time2.value == "" || list2.value == ""){
        error2.innerHTML = "Fill up all Fields"
    }
    else{
        date2.setAttribute("disabled","")
        time2.setAttribute("disabled","")
        list2.setAttribute("disabled","")
        editBtn2.setAttribute("style","display: flex !important")
        finishBtn2.setAttribute("style","display: none !important")
        error2.innerHTML = ""
    }
}
function editItem3(){
    date3.removeAttribute("disabled","")
    time3.removeAttribute("disabled","")
    list3.removeAttribute("disabled","")
    editBtn3.setAttribute("style","display: none !important")
    finishBtn3.setAttribute("style","display: flex !important")
}
function finishItem3(){
    if(date3.value == "" || time3.value == "" || list3.value == ""){
        error3.innerHTML = "Fill up all Fields"
    }
    else{
        date3.setAttribute("disabled","")
        time3.setAttribute("disabled","")
        list3.setAttribute("disabled","")
        editBtn3.setAttribute("style","display: flex !important")
        finishBtn3.setAttribute("style","display: none !important")
        error3.innerHTML = ""
    }
}
function editItem4(){
    date4.removeAttribute("disabled","")
    time4.removeAttribute("disabled","")
    list4.removeAttribute("disabled","")
    editBtn4.setAttribute("style","display: none !important")
    finishBtn4.setAttribute("style","display: flex !important")
}
function finishItem4(){
    if(date4.value == "" || time4.value == "" || list4.value == ""){
        error4.innerHTML = "Fill up all Fields"
    }
    else{
        date4.setAttribute("disabled","")
        time4.setAttribute("disabled","")
        list4.setAttribute("disabled","")
        editBtn4.setAttribute("style","display: flex !important")
        finishBtn4.setAttribute("style","display: none !important")
        error4.innerHTML = ""
    }
}
function editItem5(){
    date5.removeAttribute("disabled","")
    time5.removeAttribute("disabled","")
    list5.removeAttribute("disabled","")
    editBtn5.setAttribute("style","display: none !important")
    finishBtn5.setAttribute("style","display: flex !important")
}
function finishItem5(){
    if(date5.value == "" || time5.value == "" || list5.value == ""){
        error5.innerHTML = "Fill up all Fields"
    }
    else{
        date5.setAttribute("disabled","")
        time5.setAttribute("disabled","")
        list5.setAttribute("disabled","")
        editBtn5.setAttribute("style","display: flex !important")
        finishBtn5.setAttribute("style","display: none !important")
        error5.innerHTML = ""
    }
}