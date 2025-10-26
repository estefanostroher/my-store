export const SaleInfo = ({venda}) => {
  return (
    <>
      <a href="/" className="px-4 text-white text-decoration-none">
        <article key={venda.id} className="d-flex justify-content-between">
          <h4>Venda {venda.id}</h4>
          <h4>Total {venda.total.toFixed(2)}</h4>
        </article>
        <h4 className="mb-4 mt-4">Produtos</h4>
        <article>
          {venda.itens.map((item, index) => (
            <div key={index} className="d-flex justify-content-between">
              <p>{item.nome}</p>
              <p>preço {item.preco}</p>
            </div>
          ))}
        </article>
      </a>
    </>
  );
};
