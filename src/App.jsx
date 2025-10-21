import Footer from './components/footer'
import ListaProdutos from './components/listaProdutos'
import Header from './components/header'
import Kart from './components/kart'

import { useState } from 'react'

function App() {
  const [produtos, setProdutos] = useState([])
  const [carrinho, setCarrinho] = useState([])

  return (
    <>
      <main>
        <Header />
        <section className='d-flex flex-column gap-3' style={{padding: '0 15rem'}}>
          <Kart carrinho={carrinho} setCarrinho={setCarrinho} produtos={produtos} setProdutos={setProdutos}/>
          <ListaProdutos produtos={produtos} setProdutos={setProdutos} carrinho={carrinho} setCarrinho={setCarrinho}/>
        </section>
        <Footer />
      </main>
      
    </>
  )
}

export default App
