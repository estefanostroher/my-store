import { KartCard } from "../kartCard";

const Kart = ({carrinho, setCarrinho, produtos, setProdutos}) => {
  const totalPrice = carrinho.reduce((acc, produto) => acc + produto.preco, 0);

  const handleRemove = (indexToRemove) => {
    setCarrinho(prev => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleFinalizarCompra = async () => {
    if (carrinho.length === 0) {
      alert('Carrinho vazio!');
      return;
    }

    try {
      // Agrupa os produtos por ID e conta quantas vezes cada um aparece
      const produtosAgrupados = carrinho.reduce((acc, produto) => {
        acc[produto.id] = (acc[produto.id] || 0) + 1;
        return acc;
      }, {});

      // Atualiza o estoque de cada produto
      for (const [produtoId, quantidade] of Object.entries(produtosAgrupados)) {
        const produto = produtos.find(p => p.id.toString() === produtoId.toString());
        
        if (!produto) {
          alert(`Produto ${produtoId} não encontrado!`);
          return;
        }
        
        if (produto.quantidade < quantidade) {
          alert(`Produto ${produto.nome} sem estoque suficiente! Disponível: ${produto.quantidade}, Necessário: ${quantidade}`);
          return;
        }
        
        const novaQuantidade = produto.quantidade - quantidade;

        const response = await fetch(`https://json-server-produtos-96fx.onrender.com/produtos/${produtoId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quantidade: novaQuantidade
          }),
        });

        if (response.ok) {
          // Atualiza o estado local
          setProdutos(prev => prev.map(p =>
            p.id.toString() === produtoId.toString() ? { ...p, quantidade: novaQuantidade } : p
          ));
        } else {
          alert('Erro ao processar a compra. Tente novamente.');
          return;
        }
      }

      alert('Compra finalizada com sucesso!');
      setCarrinho([]);
    } catch (error) {
      console.error('Erro ao finalizar compra:', error);
      alert('Erro ao processar a compra. Tente novamente.');
    }
  };


  return (
    <div style={{height: '90vh', padding: '4rem 15rem'}}>
      <section className="d-flex flex-column">
        <h2 className="m-0">Carrinho</h2>
        <article className="p-3 rounded" style={{ backgroundColor: 'gray' }}>
          <h5 className="m-0">Itens: {carrinho.length}</h5>
          <h5 className="m-0">Total: R$ {totalPrice.toFixed(2)}</h5>
          <article className="bg-light p-3">
            {
              carrinho.length === 0 ? <p>Seu carrinho está vazio</p> :
              carrinho.map((produto, index) => (
                <>
                  <KartCard name={produto.nome} price={produto.preco} onRemove={()=>handleRemove(index)}/>
                  <hr />
                </>
              ))
            }
          </article>
          <div className="d-flex gap-2">
            <button 
              className="btn btn-danger mt-3"
              onClick={() => setCarrinho([])}
            >Limpar</button>
            <button 
              className="btn btn-success mt-3"
              onClick={handleFinalizarCompra}
              disabled={carrinho.length === 0}
            >Finalizar Compra</button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Kart;