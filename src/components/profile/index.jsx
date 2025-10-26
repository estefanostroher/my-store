import { useEffect, useState } from "react";
import { SaleInfo } from "./saleInfo";
import { callAPI } from "../../API";

const Profile = () => {
  const [filtro, setFiltro] = useState("");
  const [vendas, setVendas] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const fetchData = async () => {
    const dataVendas = await callAPI("vendas");
    const dataProdutos = await callAPI("produtos");

    setVendas(dataVendas);
    setProdutos(dataProdutos);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const vendasFiltradas = vendas.filter((venda) => {
    if (filtro === "") return true;
  
    return venda.itens.some((item) => 
      item.nome.includes(filtro.toLowerCase()
    ))
  })


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
            {vendasFiltradas !== null && vendasFiltradas.length > 0 ? (
              vendasFiltradas.map((venda, index) => (
                <>
                <SaleInfo venda={venda} />
                <hr className="text-white"/>
                </>
              ))
            ) : (
              <p className="text-white">Nenhuma venda registrada.</p>
            )}
        </article>
      </article>
    </section>
  );
};

export default Profile;
