// tạo hiệu ứng Gallary filter bằng thư viện isotope js
$(document).ready(function(){
  $('.content').isotope({
    itemSelector: 'img'
  });
  $('ul.menu-gallery li').click(function(event){
    $('.menu-img-item.active').removeClass('active');
    $(this).addClass('active');
    var _type= $(this).data('type');
    var ten_loai = $(this).text();
    $('.title').text(ten_loai);
    _type='.'+_type;
    $('.content').isotope({
      filter:_type
    });
  });
});

//quay lại đầu trang
$(document).ready(function() {
  $(window).scroll(function(event) {
     var pos_body = $('html,body').scrollTop();
     // console.log(pos_body);
     if(pos_body>400){
        $('.back-to-top').addClass('hien-ra');
     }
     else{
        $('.back-to-top').removeClass('hien-ra');
     }
  });
  document.getElementById('quaylai').addEventListener("click", function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
  
});