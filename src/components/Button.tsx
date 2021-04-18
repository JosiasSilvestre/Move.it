// Componente usado apenas como leassons

// Importando um hook do react para definir estados dentro de um componente
import { useState } from 'react';

// Definindo as propriedades que um botão pode receber
interface ButtonProps {
    color: string;
    children: string;
}

// Exportando o button e passando por parâmetro todas as suas propriedades
export function Button(props: ButtonProps) {
    // Iniciando um contador a partir do estado 1 que vai retornar a variável counter 
    // e uma função setCounter para criar um novo valor para counter
    const [counter, setCounter] = useState(1)

    // Definindo uma função de incremento
    function increment() {
        setCounter(counter + 1);
    }

    // Retornando um HTML
    return (
        <button
            type="button"
            style={{ backgroundColor: props.color }}
            // Chamando a função increment sempre que o usuário clicar no botão
            onClick={increment}
        >
            {props.children} <strong>{counter}</strong>
        </button>
    );
}