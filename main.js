function changeImage(){
    var img = document.getElementById('main-img');
    var screen_width = window.innerWidth;

    if(screen_width > 600){
        img.setAttribute("src", "images/image-header-desktop.jpg")
    }else{
        img.setAttribute("src", "images/image-header-mobile.jpg")

    }
}