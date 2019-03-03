// art('Hello World')


window.addEventListener('scroll',function(){
  let windowScrollPos = window.scrollY;

  console.log({windowScrollPos})

  //if the user has scrolled more than 50px
    //add a blue background to the nav and white text
  if (windowScrollPos > 300) {
    let navigation = document.getElementById('main-nav')
  }

  //else
    //Remove the Background

});
