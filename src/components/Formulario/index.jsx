import { useState, useEffect } from "react";

const Formulario = () => {
const [materiaA, setMateriaA] = useState(0);
const [materiaB, setMateriaB] = useState(0);
const [materiaC, setMateriaC] = useState(0);
const [nome, setNome] = useState('');

// (ciclo de vida do React)
//mount => montado;
//update => atualizado;
//onmount => desmontado.

useEffect(() => {
    console.log('Componente iniciado')

    return () => {
        console.log('componente finalizado!')
    }
}, []);

useEffect(() => {
    console.log('O estado nome mudou')
}, [nome]);

useEffect(() => {
    console.log('materia A mudou para: ' + materiaA)
}, [materiaA, materiaB, materiaC])

const alteraNome = (evento) => {
    // setNome(evento.target.value)
    setNome(estadoAnterior => {
        return evento.target.value
    })
}

    const renderizaResultado= () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if( media >= 7 ) {
        return (
            <p>Olá {nome} você foi aprovado!</p>
        )
        } else {
            return (
                <p>Olá {nome} você não foi aprovado!</p>
            )
        }
    }

    return (
        <form>


            <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Seu Nome" onChange={alteraNome} /> <br />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} /> <br />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/> <br />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/> <br />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;