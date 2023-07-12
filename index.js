const form = document.getElementById('formulario');
let valido = false;
let numero1 = (document.getElementById('numero1'));
let numero2 = (document.getElementById('numero2'));

function valida(n1, n2) {
    let resul = 0;
    resul = Number(n1.value) > Number(n2.value);
    return resul;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    Feedback();
});

function Feedback() {
    valido = valida(numero1, numero2);

    if (valido) {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    } else {
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    }

    numero1.value = '';
    numero2.value = '';
};

