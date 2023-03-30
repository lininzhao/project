//定义数组拿到图片
var imgArr=['201702151452362548.jpg','201702151452533692.jpg','201806261053564966.jpg','201804171831356107.png','201806082104343468.jpg'];
//获取元素
var img =document.getElementById('img');
//定义函数实现轮播图功能
function fn(index){
    //边历数组拿到对应数组下标
    for(var i=0;i<imgArr.length;i++){
       //圆点与图片对应
        if(index===i){
            //设置图片路径
            img.src='images/'+imgArr[i];
        }
    }  
}

//获取元素
var divs=document.querySelectorAll('.box');
var alla=document.querySelectorAll('.circle>a');

//定义函数切换div
function tab(index){
    //遍历数组拿到div下标
    for(var i=0;i<divs.length;i++){
        //当index与按钮下标相等时
    if(index===i){
        //对应得div显示出来
            divs[i].style.display='block';
            //对应的圆圈变成白色
            alla[i].className='active';
        }else{
            //其他的div隐藏
            divs[i].style.display='none';
            //其他圆圈没颜色
            alla[i].className='';
        }
    }
    
}