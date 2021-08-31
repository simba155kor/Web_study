window.addEventListener('load', function () {

  document.getElementsByTagName('button')[0].addEventListener('click', function clock_func()
  {
      var hour1 = document.getElementById('Hour').value;
      var min1 = document.getElementById('Min').value;
      var sec1 = document.getElementById('Sec').value;


      let time = hour1*3600 + min1*60 + sec1*1;
      

      var x = setInterval( function() {
          hour2 = parseInt(time/3600);
          time2 = time%3600;
          min2 = parseInt(time2/60) ;
          sec2 = time%60;
          if(hour2 <10){ var hour3 = "0"; hour3+=hour2; hour2=hour3;}
          if(min2 <10){ var min3 = "0"; min3+=min2; min2=min3;}
          if(sec2 <10){ var sec3 = "0"; sec3+=sec2; sec2=sec3;}
          document.getElementById("start_clock").innerHTML = hour2 + ":" + min2 + ":" + sec2;
          time--;

          if(time<0)
          {
              clearInterval(x);
            document.getElementById("start_clock").innerHTML = "00:00:00";
            alert("Timeout!");
          }

      }, 1000);
      

      

  });

});
