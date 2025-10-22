import Footer from "./components/footer";
import ListaProdutos from "./components/listaProdutos";
import Header from "./components/header";
import Kart from "./components/kart";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={
            <ListaProdutos
              produtos={produtos}
              setProdutos={setProdutos}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
          } />
          <Route path="/carrinho" element={
            <Kart
              carrinho={carrinho}
              setCarrinho={setCarrinho}
              produtos={produtos}
              setProdutos={setProdutos}
            />
          } />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
