
(function() {
  'use strict';

  var set_btn = document.getElementById('set_btn');
  var answer=document.getElementById("kanji");
  //var center=document.getElementById("center");
  var left = document.getElementById('left');
  var right = document.getElementById('right');
  var top = document.getElementById('top');
  var down = document.getElementById('down');
  var text = document.getElementById('text');
  var seikai=""
  var ka=[]
  var score=0
  var number=0
  var status="START"
  
  var ka_origin = [
    ['挽','路', '撤','収','回',800],
    ['迂','遊', '今','答','回',800],
    ['保','闘', '穏','在','健',800],
    ['原','守', '赤','弟','子',1000],
    ['日','質', '資','職','本',1200],
    ['入','館', '議','話','会',1200],
    ['更','車', '最','宿','新',1600],
    ['来','課', '十','記','日',1600],
    ['客','場', '補','首','足',1200],
    ['物','質', '本','符','音',1600],
    ['命','義', '学','字','名',1600],
    ['投','面', '証','写','書',1200],
    ['支','番', '売','頭','店',1600],
    ['着','走', '離','皮','脱',1600],
    ['選','展', '家','題','出',1600],
    ['物','質', '本','符','音',1600],
    ['字','会', '素','倒','面',1600],
    ['前','題', '事','年','例',1200],
    ['母','色', '靴','信','音',1600],
    ['根','祖', '次','日','元',1600],
    ['朝','材', '定','品','食',1600],
  ];


  
  function set(i){
  left.textContent=ka[i][0];
  right.textContent=ka[i][1];
  top.textContent=ka[i][2];
  down.textContent=ka[i][3];
  seikai=ka[i][4] ;
  number=i
}

  function ans(){
    answer =document.getElementById("kanji");
      if(answer.value === seikai)
      {
        text.textContent="正解！！！";
        setTimeout(textdelete, 500);
        ka.splice(number,1);
        score=score+1
        if(score>0){
          finish();
        }
       set(Math.floor(Math.random() * ka.length));
      }else{
        text.textContent="不正解！！！";
        setTimeout(textdelete, 500);
        }
    answer.value=""; 
  }
  var text1=document.getElementById('text1');
  var text2=document.getElementById('text2');
  var text3=document.getElementById('text3');
  var time=document.getElementById('time');

  function finish (){
    clearTimeout(timeoutId);
    overlay.classList.add('show');
    text1.textContent="おめでとうございます!";
    text2.textContent="あなたのタイムは";
    text3.textContent="です" ;
    time.textContent=timer.textContent;
    score=0
    timer.textContent = '00:00.000';
    status="START"
    set_btn.textContent="START"
  }
  function textdelete(){
    text.textContent=""
  }

  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    //open.classList.remove('hide');
  });

  set_btn.addEventListener('click', function() {
    if(status=="START"){
        status="ANSWER"
        set_btn.textContent="ANSWER"
        ka=ka_origin.concat();
        set(Math.floor(Math.random() * ka.length));
        
        startTime = Date.now();
        countUp();
      }else{
        console.log(score);
        console.log(status);
        ans();    
      }

  });

  

  const timer = document.getElementById('timer');
  
  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

})();
