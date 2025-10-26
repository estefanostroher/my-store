import Footer from './components/footer'
import ListaProdutos from './components/listaProdutos'
import Header from './components/header'
import Kart from './components/kart'
import ProductDescription from './components/productDescription'
import ErrorPage from './components/errorPage'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { KartButton } from './components/kartButton'

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  const items = carrinho.length;
  console.log(items);

  return (
    <Router>
      <main className="d-flex flex-column vw-100">
        <Header />
        <Routes>
          <Route path="/" element={
          <>
            <KartButton items={items}/>
            <ListaProdutos produtos={produtos} setProdutos={setProdutos} carrinho={carrinho} setCarrinho={setCarrinho}/>
          </>
          }/>
          <Route path="/carrinho" element={<Kart carrinho={carrinho} setCarrinho={setCarrinho} produtos={produtos} setProdutos={setProdutos}/>}/>
          <Route path="/produto/:id" element={<ProductDescription setCarrinho={setCarrinho} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App;
