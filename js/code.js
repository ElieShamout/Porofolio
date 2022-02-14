window.onscroll = function() {myFunction()};
function myFunction() {
    var x=document.getElementsByClassName('nav-item');
    if (document.body.scrollTop > 50){
        document.getElementsByClassName('header')[0].style.background="#fff";
        document.getElementsByClassName('header')[0].style.boxShadow="0px 1px 5px rgba(0, 0, 0, 0.473)";
        document.getElementsByClassName('header')[0].style.padding="0px";
        document.getElementsByClassName('moreItem')[0].style.color="black";
        for (i = 0; i < x.length; i++) {
            x[i].style.color="black";
        }
    }else{
        document.getElementsByClassName('header')[0].style.background="#6196ff00";
        for (i = 0; i < x.length; i++) {
            x[i].style.color="white";
        }
        document.getElementsByClassName('header')[0].style.boxShadow="0px 1px 5px rgba(0, 0, 0, 0)";
        document.getElementsByClassName('header')[0].style.paddingTop="10px";
        document.getElementsByClassName('header')[0].style.height="auto";
        document.getElementsByClassName('header')[0].style.padding="10px 0px";
        document.getElementsByClassName('moreItem')[0].style.color="white";

        
    }
}
