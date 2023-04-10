var alarmList = [];
var hr_v, seta;
var m_v;
var ap_val, alarmTime,myInterval;

const music = new Audio('ring.m4a');

t = document.getElementById('time');
setInterval(() => {

    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    ampm = "AM"


    if (htime >= 12) {
        htime = htime % 12;
        ampm = "PM";
    }

    if (htime < 10) {
        htime = "0" + htime;
    }
    if (mtime < 10) {
        mtime = "0" + mtime;
    }
    if (stime < 10) {
        stime = "0" + stime;
    }

    t.innerHTML = `<h1> ${htime} :  ${mtime} : ${stime} </h1>`;





}, 1000);

function set() {



    const h = document.getElementById('hours');
    var hr = h.value;
    // console.log('',hr);

    const m = document.getElementById('minute');
    var me = m.value;
    // console.log('',me);

    var ap = document.getElementById('ampm');
    var ap_v = ap.value;
    // console.log('am pm ', ap_v);

    if (hr < 10) {
        hr = "0" + hr;
    }
    if (me < 10) {
        me = "0" + me;
    }

    alarmTime = `${hr}:${me} ${ap_v}`;

    alarmList.push(alarmTime);

    // console.log(' alarm time : ',alarmTime);

    if (hr.includes("Hour") || me.includes("Minute")) {
        alert(" Please select a right time to set Alarm ");
        seta = false;
    }
    else {
        seta = true;
    }

    console.log('alarm list ', alarmList);

     myInterval =setInterval(() => {

        for (let i = 0; i < alarmList.length; i++) {
            if (alarmList[i] == `${htime}:${mtime} ${ampm}`) {
                console.log('alarm ringing ....');

                music.play();
 
            }

        }

    }, 1000);

};


var bt = document.getElementById('set_alarm');
var id = 1;

bt.addEventListener("click", function () {

    if (seta) {
        var element = document.createElement('div');
        var text = `<h5 style="display:inline-block; padding-right:1rem; ">${alarmTime}</h5> <button class="del" onclick ="remove(this)"   style="background-color: rgb(203, 188, 217); padding: 3px; border-radius: 2px; font-size: 15px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;cursor: pointer; border: 1px solid grey;">Delete</button>`;
        element.id = "ab";
        element.innerHTML = text;
        document.getElementById('alarmlist').appendChild(element);

    }


})


function remove(e) {

    console.log('e.parentNode', e.parentNode.firstChild.innerText);

    var index;
    var del_al = e.parentNode.firstChild.innerText;
    // console.log('del ab ',del_al);

    for (let i = 0; i < alarmList.length; i++) {
        if (alarmList[i] === del_al) {
            index = i;
        }
    }
    delete alarmList[index];
    e.parentNode.firstChild.remove(e);
    e.parentNode.removeChild(e);


}

document.getElementById('stop_alarm').addEventListener('click',function(){
    music.pause();
    clearInterval(myInterval);
    
})

