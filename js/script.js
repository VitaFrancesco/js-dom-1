const onOff = document.getElementById('on-off');
// const lampOff = document.getElementById('lamp-off');
// const lampOn = document.getElementById('lamp-on');
// onOff.addEventListener('click', function() {
//     lampOn.classList.toggle('none');
//     lampOff.classList.toggle('none');
//     if (lampOff.classList.contains('none')) {
//         onOff.innerText = 'Spegni';
//     } else {
//         onOff.innerText = 'Accendi';
//     }
// })

const imgLamp = document.querySelector('img');
console.log(imgLamp.src)
onOff.addEventListener('click', function() {
    if (imgLamp.classList.contains('off')) {
            onOff.innerText = 'Spegni';
            imgLamp.src = './img/yellow_lamp.png'
    } else {
        onOff.innerText = 'Accendi';
        imgLamp.src = './img/white_lamp.png'
    }
    imgLamp.classList.toggle('off')
    imgLamp.classList.toggle('scaleX')
})
