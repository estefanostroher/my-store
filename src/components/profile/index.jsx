import { useEffect, useState } from "react";

const Profile = () => {
  const [filtro, setFiltro] = useState("");
  const [vendas, setVendas] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const fetchVendas = async () => {
    const response = await fetch(
      "https://json-server-produtos-96fx.onrender.com/vendas"
    );
    const data = await response.json();
    setVendas(data);
  };

  const fetchProdutos = async () => {
    const response = await fetch(
      "https://json-server-produtos-96fx.onrender.com/produtos"
    );
    const data = await response.json();
    setProdutos(data);
  };

  useEffect(() => {
    fetchVendas();
    fetchProdutos();
  }, []);

  console.log(produtos);

  return (
    <section className="d-flex flex-column align-items-center h-100 p-4 gap-5">
      <article className="w-75">
        <h2>Produtos Disponíveis</h2>
        <article className="bg-secondary p-4 rounded">
            <article className="d-flex justify-content-between">
                <h4>Id</h4>
                <h4>Nome</h4>
                <h4>Nota</h4>
                <h4>Quantidade</h4>
                <h4>Status</h4>
            </article>
            {
                produtos !== null && produtos.length>0 ? (
                    produtos.map(item => (
                        <>
                            <article className="d-flex justify-content-between">
                                <p className={`${item.quantidade>0 ? "text-white" : "text-warning"}`}>Id {item.id}</p>
                                <p className={`${item.quantidade>0 ? "text-white" : "text-warning"}`}>Nome {item.nome}</p>
                                <p className={`${item.quantidade>0 ? "text-white" : "text-warning"}`}>Nota {item.nota}</p>
                                <p className={`${item.quantidade>0 ? "text-white" : "text-warning"}`}>Quantidade {item.quantidade}</p>
                                <p className={`${item.quantidade>0 ? "text-white" : "text-warning"}`}>{
                                    item.quantidade>0 ? "Disponivel" : "Indisponivel"
                                
                                }</p>
                            </article>
                        </>
                    )))
                : (
                    <p>Nenhum produto</p>
                )
            }
        </article>
      </article>

      <article className="w-75">
        <h2>Compras Realizadas</h2>
        <article className="mb-2">
          <input
            className="w-25 p-2 border-0 rounded-start"
            type="text"
            value={filtro}
            placeholder="Filtrar por produtos"
            onChange={(e) => setFiltro(e.target.value)}
          />
          <button className="py-2 px-4 border-0 rounded-end">Filtrar</button>
        </article>
        <article className="bg-secondary p-4 rounded">
            {vendas !== null && vendas.length > 0 ? (
              vendas.map((venda) => (
                <>
                <a href="/" key={venda.id} className="px-4 text-white text-decoration-none">
                    <article className="d-flex justify-content-between">
                        <h4>
                            Venda {venda.id}
                        </h4>
                        <h4>
                            Total {venda.total.toFixed(2)}
                        </h4>
                    </article>
                    <h4 className="mb-5">Produtos</h4>
                    <article>
                       { venda.itens.map((item) => (
                        <div key={item.produtoId} className="d-flex justify-content-between">
                            <p>{item.nome}</p>
                            <p>preço {item.preco}</p>
                        </div>
                        ))}
                    </article>
                </a>
                <hr className="text-white"/>
                </>
              ))
            ) : (
              <p>Nenhuma venda registrada.</p>
            )}
        </article>
      </article>
    </section>
  );
};

export default Profile;
