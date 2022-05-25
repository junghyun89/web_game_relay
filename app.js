'use strict';

const number = parseInt(prompt('몇 명이 참가하나요?'), 10);
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $form = document.querySelector('form');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; // 제시어
let newWord; // 새로 입력한 단어

if(number) {
    const onClickButton = (event) => {
        event.preventDefault();
        if(newWord.length === 3 && (!word || word[word.length - 1] === newWord[0])) { // 비어 있는가
            word = newWord;
            $word.textContent = word;
            const order = Number($order.textContent);
                if(order === number) {
                    $order.textContent = 1;
                } else {
                    $order.textContent = order + 1;
                }
        } else {
            alert('올바르지 않은 단어입니다.');
        }
        $input.value = '';
        $input.focus();
    };
    
    const onInput = (event) => {newWord = event.target.value};
    
    $input.addEventListener('input', onInput);
    $form.addEventListener('submit', onClickButton);
}

