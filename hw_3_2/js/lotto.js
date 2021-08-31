window.addEventListener('load', function () {

  document.getElementsByTagName('button')[0].addEventListener('click', function randomnum()
  {
      let num = []
      
      while(num.length<7)
      {
          const rand1 = Math.floor(Math.random() * 45)+1;
          
          var tag=0;

          for(var a=0; a<num.length; a++)
          {
              if(num[a] == rand1)
              {
                  tag=1;
                  break;
              }
          }

          if(tag==0) num.push(rand1);
      }

      var y=" ";

      for(var a=0; a<num.length-1; a++)
      {
          y += num[a];
          if(a==num.length-2) continue;
          y += ", ";
      }

      document.getElementsByClassName("get_nums")[0].innerHTML = y;

      y = " ";
      y += num[num.length-1];
      document.getElementsByClassName("get_nums")[1].innerHTML = y;
  });

});
