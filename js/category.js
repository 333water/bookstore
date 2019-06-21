let viewH=window.innerHeight;
let imgs=document.querySelectorAll('.lazyload');
let positionArr=[];
imgs.forEach(function (ele) {
    let parent=ele.offsetParent;
    positionArr.push(parent.offsetTop+ele.offsetTop)
})
window.onscroll=function () {
    let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    for (let i=0;i<positionArr.length;i++){
        if (scrolltop + viewH >=positionArr[i]+50){
            // 标准属性
            if (!imgs[i].src){
                imgs[i].src=imgs[i].getAttribute('aa')
            }
        }
    }
}
