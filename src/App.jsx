import Footer from './components/footer'
import ListaProdutos from './components/listaProdutos'
import Header from './components/header'
import Kart from './components/kart'

import { useState } from 'react'

function App() {
  const [produtos, setProdutos] = useState([])

  return (
    <>
      <main>
        <Header />
        <section className='d-flex flex-column gap-3' style={{padding: '0 15rem'}}>
          <Kart produtos={produtos} setProdutos={setProdutos}/>
          <ListaProdutos produtos={produtos} setProdutos={setProdutos}/>
        </section>
        <Footer />
      </main>
      
    </>
  )
}

export default App
