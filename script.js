let button1=document.querySelector("#btn1");
let txt=document.querySelector('#txt1');

button1.addEventListener("click", ()=>{
    let a=document.querySelector('#inp1').value;
    let b=document.querySelector('#inp2').value;
    c=Number(a)+Number(b);

    txt.innerHTML="Результат: "+(c);
}
)

let button3=document.querySelector("#btn3");
let txt2=document.querySelector('#txt2');

button3.addEventListener("click", ()=>{
    let a=document.querySelector('#inp3').value;
    let b=document.querySelector('#inp4').value;
    let c=document.querySelector('#inp5').value;
    d=Number(a)+Number(b)+Number(c);

    txt2.innerHTML="Результат: "+(d);
}
)


let button2=document.querySelector('#btn2');
button2.addEventListener('click', addCircle);
function addCircle(){
    let newCircle=document.createElement('div');
    tsk2.appendChild(newCircle);
    newCircle.classList.add('circle');
    
}

let button4=document.querySelector('#btn4');
button4.addEventListener('click', addShape);
function addShape(){
    let shapes= ['circle','square','triangle'];
    let randomShape=shapes[Math.floor(Math.random()*shapes.length)];
    let newShape=document.createElement('div');
    tsk4.appendChild(newShape);
    newShape.classList.add('shape', randomShape);
    
}
