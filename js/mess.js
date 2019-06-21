window.addEventListener("load",function(){

    //头像选择
    let avatar = document.querySelectorAll(".main > form > .avatar > img")
    let prev = 0;
    for (let i = 0; i < avatar.length; i++){
        avatar[i].onclick = function(){
            avatar[prev].classList.remove("avatarHot");
            avatar[i].classList.add("avatarHot");
            prev = i;
        }
    }

    //文本域长度
    let count = document.getElementById("count");
    let text = document.querySelector(".main > form > .content > textarea");
    let usernames = document.querySelector("input[name=blogname]");
    console.log(count, text, usernames);

    text.onkeyup = function(){
        let value = this.value;
        count.innerText = value.length;
    }

    //留言评论区
    let comment = document.querySelector(".main > ul");
    let submit = document.querySelector(".main > form > .content > input");
    submit.onclick = function(e){
        e.preventDefault();//阻止默认行为
        mess();
        formReset();
        return false;
    }
    let mess = function(){
        let imgs = avatar[prev].src;
        let user = usernames.value;
        let content = text.value;
        let date = new Date().toISOString().substr(0,10);
        let html = `
        <li class="comment">
            <div class="commentL"><img src="${imgs}"></div>
            <div class="commentR">
                <p><span>${user}</span><time>${date}</time></p>
                <div>${content}</div>
            </div>
        </li>
        <li class="reply">
            <p><span style="color: #ff0000;">站长回复：</span>读者朋友您好~</p>
        </li>
        `;
        return comment.innerHTML = html + comment.innerHTML;
    }
    function formReset()
    {
        document.getElementById("myForm").reset()
    }
})