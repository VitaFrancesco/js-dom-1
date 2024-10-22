const onOff = document.getElementById('on-off');
const lampOff = document.getElementById('lamp-off');
const lampOn = document.getElementById('lamp-on');
onOff.addEventListener('click', function() {
    lampOn.classList.toggle('none');
    lampOff.classList.toggle('none');
})