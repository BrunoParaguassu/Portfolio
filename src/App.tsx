import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Sobre from './components/Sobre/Sobre'
import Projetos from './components/Projetos/Projetos'
import Tecnologias from './components/Tecnologias/Tecnologias'
import Contatos from './components/Contatos/Contatos'


function App() {

  return (
    <>
      <Header />
      <Projetos />
      <Tecnologias />
      <Sobre />
      <Contatos />
    </>
  )
}

export default App
