const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const mobile_item = document.querySelector('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active'); 
  mobile_menu.classList.toggle('active'); 
});


document.addEventListener('scroll',()=>{
  var scroll_position = window.scrollY;
  if(scroll_position > 20){
    header.style.backgroundColor = '#29323c';
  }else{
    header.style.backgroundColor ='#=trasprent';
  }
});

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="src=https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

/*
menu_item.forEach(item=>{
  item.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});*/