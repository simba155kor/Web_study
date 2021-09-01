window.addEventListener('load', function () {
  
  });
  
var tar_num;
var tar_title;
var tar_author;

  function get_info(target) 
  {
      tar_num = document.getElementById("td_num" + target).innerText;
      tar_title = document.getElementById("td_title"+target).innerText;
      tar_author = document.getElementById("td_author"+target).innerText;

      console.log(tar_num);
      console.log(tar_title);
      console.log(tar_author);
      
      c1 = document.getElementById("view_td_num");
      
      window.location.replace('view.html');

}
  
function set_info() 
{

    document.getElementById("view_td_num").innerText = tar_num;




}
