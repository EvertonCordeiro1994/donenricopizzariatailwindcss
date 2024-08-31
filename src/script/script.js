const caracteres = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';

const array = caracteres.split(" ");

const codigo = []

const gerarcodigo = () => {
    codigo.length = 0; // Limpa o array antes de gerar um novo código
    for (let i = 0; i < 8; i++) {
        const criar = array[Math.floor(Math.random() * array.length)];
        codigo.push(criar);
    }
}

gerarcodigo();

const stringCode = codigo.join('');

const $local_cupon = $('#local_cupon');
const $btn_form = $('#btn_form');
const $btn_modal = $('#btn_modal');
const $modal = $('#modal');

const $input_nome = $('input[name="name"]'); 
const $input_email = $('input[name="email"]');

$(document).ready(function () {
    $local_cupon.text(stringCode);

    $btn_form.on('click', () => {
        if ($input_nome.val().trim() !== '' && $input_email.val().trim() !== '') {
            $modal.removeClass('hidden'); // Usar removeClass para adicionar/remover classe
        }
    });

    $btn_modal.on('click', () => $modal.toggleClass('hidden'));
});
