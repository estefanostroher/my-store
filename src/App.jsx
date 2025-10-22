import Footer from './components/footer'
import ListaProdutos from './components/listaProdutos'
import Header from './components/header'
import Kart from './components/kart'
import ProductDescription from './components/productDescription'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<ListaProdutos produtos={produtos} setProdutos={setProdutos} carrinho={carrinho} setCarrinho={setCarrinho}/>}/>
          <Route path="/carrinho" element={<Kart carrinho={carrinho} setCarrinho={setCarrinho} produtos={produtos} setProdutos={setProdutos}/>}/>
          <Route path="/produto/:id" element={<ProductDescription setCarrinho={setCarrinho} />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App;
