$(function () {
    let leftbtn=$('.leftbtn'),
        rightbtn=$('.rightbtn'),
        btns=$('.btnlist >li'),
        imgss=$('.bannerimg >li'),
        bannerleft=$('.bannerleft')
    let imgWidth=imgss.width();
    let current=0,next=0,flag=0;

    imgss.css({left:imgWidth}).eq(0).css({left: 0});


    // 右边按钮的点击事件
    rightbtn.click(function () {
        // if (!flag){
        //     return;
        // }
        // flag=false;
        next++;
        if (next==imgss.length){
            next=0;
        }
        $(imgss[next]).css('left',imgWidth);
        imgss.eq(current).animate({left:-imgWidth});
        imgss.eq(next).animate({left:0},function () {
            flag=true;
        })


        // 轮播图与四个点匹配
        btns.eq(current).removeClass('hot').end().eq(next).addClass('hot');

        current=next;

    })

    // 自动轮播
    let t=setInterval(function () {
        rightbtn.trigger('click')
    },3000)

    // 鼠标移入暂停
    bannerleft.mouseenter(function () {
        clearInterval(t);
    })
    bannerleft.mouseleave(function () {
       t=setInterval(function () {
           rightbtn.trigger('click')
       },3000)

    })

    let diarylist=document.getElementsByClassName('diarylist')[0];
    let listli=diarylist.getElementsByTagName('li')
    for (let i=0;i<listli.length;i++) {
        listli[i].onmouseenter=function () {
            for (let j=0;j<listli.length;j++){
                listli[j].style.borderBottom='none';
            }
            listli[i].style.borderBottom='1px solid #333333';
            return false;
            // a标签会跳转 加了return false以后会把a标签的默认样式屏蔽掉
        }
    }

    let tablist=document.querySelector('.tablist >li')
    let tablists=document.querySelectorAll('.tablist >li');
    // console.dir(tablist);
    // console.dir(tablists);
    tablists.forEach(function (elem,index) {
        elem.onmouseenter=function () {
            for (let i=0;i<tablists.length;i++){
                tablists[i].classList.remove('hot');
            }
            this.classList.add('hot');
        }
    })


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









})