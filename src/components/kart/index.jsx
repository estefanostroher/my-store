import { KartCard } from "../kartCard";

const Kart = ({produtos, setProdutos}) => {
  const totalPrice = produtos.reduce((acc, produto) => acc + produto.preco, 0);

  const handleRemove = (indexToRemove) => {
    setProdutos(prev => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <section className="d-flex flex-column">
      <h2 className="m-0">Carrinho</h2>
      <article className="p-3 rounded" style={{ backgroundColor: 'gray' }}>
        <h5 className="m-0">Itens: 3</h5>
        <h5 className="m-0">Total: R$ {totalPrice.toFixed(2)}</h5>
        <article className="bg-light p-3">
          {
            produtos.lenght === 0 ? <p>Seu carrinho está vazio</p> :
            produtos.map((produto, index) => (
              <>
                <KartCard name={produto.nome} price={produto.preco} onRemove={()=>handleRemove(index)}/>
                <hr />
              </>
            ))
          }
        </article>
        <button 
          className="btn btn-danger mt-3"
          onClick={() => setProdutos([])}
        >Limpar</button>
      </article>
    </section>
  );
};

export default Kart;