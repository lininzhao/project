//获取元素
var lis=document.querySelectorAll('.btn li');
var imgArr=['banner1.png','banner2.jpg','banner3.jpg','banner4.jpg','banner5.jpg']
var img=document.getElementById('img');

//设定函数
function f(index){
    for(var i=0;i<imgArr.length;i++){
        if(index===i){
          img.src='images/' + imgArr[i];
          lis[i].className='active';
        }else{
            lis[i].className='';
        }
    }
}