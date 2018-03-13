{
    let imgs=document.querySelectorAll(".imgbox li");
    let dians=document.querySelectorAll(".lunbo li");
    let banner=document.querySelector(".banner_you");
    let zuo=document.querySelector(".lunbo_zuo");
    let you=document.querySelector(".lunbo_you");
    dians.forEach(function (val,index) {
        val.onclick=function () {
            for(var i=0;i<dians.length;i++){
                imgs[i].classList.remove("active");
                dians[i].classList.remove("active");
            }
            imgs[index].classList.add("active");
            dians[index].classList.add("active");
            n=index;
        }
    });
    var n=0;
    function move() {
        n++;
        if(n<0){
            n=imgs.length-1;
        }
        if(n===imgs.length){
            n=0;
        }
        for(var i=0;i<dians.length;i++){
            imgs[i].classList.remove("active");
            dians[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        dians[n].classList.add("active");
    }
    var h=setInterval(move,3000);
    banner.onmouseenter=function () {
        clearInterval(h);
    }
    banner.onmouseleave=function () {
        h=setInterval(move,3000);
    }
    var flag=true;
    you.onclick=function () {
        if(flag){
            flag=false;
            move();
        }

    }
    zuo.onclick=function () {
        if(flag){
            flag=false;
            n-=2;
            move();
        }

    }
    imgs.forEach(function (val,index) {
        val.addEventListener("transitionend",function () {
            flag=true;
        });
    })

}


// {
//     let imgs=document.querySelectorAll(".imgbox li");
//     let pagers=document.querySelectorAll(".lunbo li");
//     let banner=document.querySelector(".banner_you");
//     pagers.forEach(function (ele,index) {
//         ele.onclick=function () {
//             for(let i=0;i<imgs.length;i++){
//                 imgs[i].classList.remove("active");
//                 pagers[i].classList.remove("active");
//             }
//             pagers[index].classList.add("active");
//             imgs[index].classList.add("active");
//             n=index;
//         }
//     })
//     var n=0;
//     function move() {
//         n++;
//         if(n===imgs.length){
//             n=0;
//         }
//         if(n<0){
//             n=imgs.length-1;
//         }
//         for(let i=0;i<imgs.length;i++){
//             imgs[i].classList.remove("active");
//             pagers[i].classList.remove("active");
//         }
//         pagers[n].classList.add("active");
//         imgs[n].classList.add("active");
//     }
//     let h=setInterval(move,1000);//自动执行
//     banner.onmouseenter=function () {
//         clearInterval(h)  ; //清除
//     }
//     banner.onmouseleave=function () {
//         h=setInterval(move,1000);//鼠标离开效果添加
//     }
//
// }

{
    let sousuo=document.querySelector(".zuizuishangshang");
    let pingmuleft=document.querySelector(".pingmuleft");
    window.onscroll=function () {
        let now=document.documentElement.scrollTop;
        if(now>700){
            sousuo.style.display="block";

        }else{
            sousuo.style.display="none";
        }
        if(now>2800){
            pingmuleft.style.marginLeft=-1190/2-100+"px";
            pingmuleft.style.display="block";
        }else{
            pingmuleft.style.display="none";
        }
    }
}

{
    let li=document.querySelectorAll(".pingmuleft li");
    let con=document.querySelectorAll(".qqqqq");
    li.forEach(function (val,index) {
        val.onclick=function () {
            let conT=con[index].offsetTop-200;
            let nowT=document.documentElement.scrollTop;
            // console.log(nowT);
            // console.log(conT);
            let sudu=(conT-nowT)/10;
            let time=0;
            let t=setInterval(function () {
                time+=30;
                nowT+=sudu;
                if(time==300){
                    clearInterval(t);
                }
                document.documentElement.scrollTop=nowT;
            },25)
            for(let i=0;i<li.length;i++){
                li[i].classList.remove("active");
            }
            li[index].classList.add("active");
        }
    })

    window.addEventListener("scroll",function () {
        let st=document.documentElement.scrollTop;
        let obj=li[0];
        for(i=0;i<con.length;i++){
            if (st>con[i].offsetTop-300){
                for(let i=0;i<li.length;i++){
                    li[i].classList.remove("active");
                }
                li[i].classList.add("active");

            }
        }
    })

}
{
    let huiTop=document.querySelector(".huidaozuishang");
    huiTop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let y=setInterval(function () {
            st-=200;
            if(st<0){
                clearInterval(y);
            }
            document.documentElement.scrollTop=st;
        })
    }
}

{
    let yincang=document.querySelector(".zuizuishangshang_left_yincang");
    let dian=document.querySelector(".zuizuishangshang_left");
    let zaiyincang=document.querySelectorAll(".zuizuishangshang_left_yincang1");
    let zaidian=document.querySelectorAll(".zuizuishangshang_left_yincang li");
    dian.onmouseenter=function () {
        yincang.style.height=400+"px";
        yincang.style.display="block";
    }
    dian.onmouseleave=function () {
        yincang.style.height=0+"px";
        yincang.style.display="none";
    }
    zaidian.forEach(function (val,index) {
        val.onmouseenter=function () {
            for(var i=0;i<zaidian.length;i++){
                zaiyincang[i].classList.remove("active");
            }
            zaiyincang[index].classList.add("active");
            zaiyincang[index].style.display="block";
        }
        val.onmouseleave=function () {
            zaiyincang[index].style.display="none";
        }
    })
}

























