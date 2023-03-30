//get div elements
var divs =document.querySelectorAll('.new-course-box');
var liArry=document.querySelectorAll('.btn>li');

function f(index){
    for(var i=0;i<divs.length;i++){
        if(index===i){
            divs[i].style.display='block';
            liArry[i].className='btn-active';
        }else{
            divs[i].style.display='none';
            liArry[i].className='';
        }
    } 
}