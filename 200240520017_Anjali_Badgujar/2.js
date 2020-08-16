function HandleInputs() {
    var nameele = document.querySelector('#userid').value;
    var passele = document.querySelector('#passid').value;
    var mailele = document.querySelector('#emailid').value;

    var ele1 = document.querySelector('#ref1');
    ele1.innerHTML = nameele;
    var commentdiv1 = document.querySelector('#commentbox1');
    commentdiv1.appendChild(ele1);

    var ele2 = document.querySelector('#ref2');
    ele2.innerHTML = passele;
    var commentdiv2 = document.querySelector('#commentbox2');
    commentdiv2.appendChild = ele2;


    var ele3 = document.querySelector('#ref3');
    ele3.innerHTML = mailele;
    var commentdiv3 = document.querySelector('#commentbox3');
    commentdiv3.appendChild(ele3);

    document.querySelector('#userid').value = "";
    document.querySelector('#passid').value = "";
    document.querySelector('#emailid').value = "";



}