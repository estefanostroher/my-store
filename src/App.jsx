import Footer from './components/footer'
import ListaProdutos from './components/listaProdutos'
import Header from './components/header'
import Kart from './components/kart'

function App() {

  return (
    <>
      <main>
        <Header />
        <section className='d-flex flex-column gap-3' style={{padding: '0 15rem'}}>
          <Kart />
          <ListaProdutos />
        </section>
        <Footer />
      </main>
      
    </>
  )
}

export default App
