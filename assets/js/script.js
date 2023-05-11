const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min< 10) min = '0' + min;
    if (s< 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

// TODO: Separar estas partes futuramente....

const modo = document.getElementById('tema');
const back = document.getElementById('body');

modo.addEventListener('click', () => {
    if(modo.classList.contains('dark')){
        modo.classList.remove('dark');
        modo.classList.add('light');
        modo.textContent = 'CLARO';

        back.classList.remove('dark_bk')
        back.classList.add('light_bk')

        return
    }

    modo.classList.remove('light');
    modo.classList.add('dark');
    modo.textContent = 'ESCURO';

    back.classList.remove('light_bk')
    back.classList.add('dark_bk');

    
})