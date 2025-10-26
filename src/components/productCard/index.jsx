export const ProductCard = ({
  id,
  imagem,
  nome,
  nota,
  preco,
  quantidade,
  handleAdicionarAoCarrinho,
  handleVerProduto,
  renderEstrelas,
  produto
}) => {
  return (
    <section
      className="border rounded d-flex flex-column text-center gap-2 pb-2"
      key={id}
    >
      <button className="p-0 rounded-top btn" onClick={() => handleVerProduto(id)}>
        <img
          src={imagem}
          alt="Product"
          className="rounded-top"
          width={170}
          height={150}
        />
      </button>
      <h3>{nome}</h3>
      <article className="d-flex flex-column">
        <span>{renderEstrelas(nota)}</span>
        <span>R$ {preco}</span>
        <span>Estoque: {quantidade}</span>
      </article>
      <button
        className={`btn ${
          quantidade > 0 ? "btn-outline-success" : "btn-outline-danger"
        } w-75 align-self-center`}
        onClick={() => handleAdicionarAoCarrinho(produto)}
        disabled={quantidade <= 0}
      >
        {quantidade > 0 ? "Comprar" : "Indisponível"}
      </button>
    </section>
  );
};
