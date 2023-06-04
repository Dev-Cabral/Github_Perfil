import { useState } from "react";

import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList";

function App() {
const [nomeUsuario, setNomeUsuario ] = useState ('');

  return (
    <>
    <form >
    <input type="text" required placeholder="Digite seu usuário" onBlur={(e) => setNomeUsuario(e.target.value)} />
    <button  onClick={(e) => e.preventDefault(e)} type="submit">Entrar</button>
    </form>

    {nomeUsuario.length > 4 && (
      <>
        <Perfil  nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
