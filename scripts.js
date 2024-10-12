// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   scripts.js                                         :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: nherimam <nherimam@student.42antananarivo  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2024/10/11 19:08:01 by nherimam          #+#    #+#             //
//   Updated: 2024/10/11 19:08:07 by nherimam         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

let history = [];

function appendToResult(value) {
    const resultField = document.getElementById('result');
    if (resultField.value === '0') {
        resultField.value = value;
    } else {
        resultField.value += value;
    }
}

function clearResult() {
    document.getElementById('result').value = '0';
}

/* function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value);
        history.push(`${resultField.value} = ${result}`);
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Erreur';
    }
} */

function toggleHistory() {
    const historyDiv = document.getElementById('history');
    if (historyDiv.style.display === 'none') {
        historyDiv.style.display = 'block';
        historyDiv.innerHTML = history.map(item => `<div>${item}</div>`).join('');
    } else {
        historyDiv.style.display = 'none';
    }
}

// Ajout de l'effet de pression
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});


function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        const sanitizedInput = resultField.value.replace(/[^0-9+\-*/().^√]/g, ''); // Allow only valid characters
        const result = eval(sanitizedInput);
        history.push(`${resultField.value} = ${result}`);
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Erreur';
    }
}


document.addEventListener('keydown', function(event) {
    if ('0123456789+-*/()^.'.includes(event.key)) {
        appendToResult(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        clearResult ();
    }
});
