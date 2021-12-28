
(function() {
  'use strict';

  var set_btn = document.getElementById('set_btn');
  //var ans_btn = document.getElementById('ans_btn');
  var left = document.getElementById('left');
  var right = document.getElementById('right');
  var top = document.getElementById('top');
  var down = document.getElementById('down');
  var text = document.getElementById('text');
  var number=0
  var ka=[]
  var score=0
  var status="START"
  
  var ka_origin = [
    ['挽','路', '撤','収','回',800],
    ['迂','遊', '今','答','回',800],
    ['貯','持', '賞','曜','金',800],
    ['保','闘', '穏','在','健',800],
    ['米','守', '赤','弟','子',1000],
    ['日','質', '写','職','本',1200],
    ['入','館', '議','話','会',1200],
    ['更','車', '一','宿','新',1600],
    ['来','課', '十','記','日',1600],
  ];


  
  function set(i){
    console.log(i);
    console.log(ka);
    document.getElementById("kanji").value=""
  left.textContent=ka[i][0];
  right.textContent=ka[i][1];
  top.textContent=ka[i][2];
  down.textContent=ka[i][3];
  number=i  ;
}

  function ans(){
    var answer =document.getElementById("kanji").value;
    
      if(answer === ka[number][4])
      {
        text.textContent="正解！！！";
        status="ANSWER"
        setTimeout(textdelete, 500);
        ka.splice(number,1);
        score=score+1
        if(score>4){
          finish();
        }
      }else{
        text.textContent="不正解！！！";
        setTimeout(textdelete, 500);
        status="WRONG"
      }
    
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
    switch(status){
      case "START":
        status="ANSWER"
        set_btn.textContent="ANSWER"
        ka=ka_origin.concat();
        set(Math.floor(Math.random() * ka.length));
        startTime = Date.now();
        countUp();
        break
      case "ANSWER":
        console.log(score);
        console.log(status);
        
        ans();
        set(Math.floor(Math.random() * ka.length)); 
        break
      case "WRONG":
          ans(); 
          break      
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
