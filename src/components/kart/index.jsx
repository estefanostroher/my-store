const Kart = () => {
  return (
    <section className="d-flex flex-column">
      <h2 className="m-0">Carrinho</h2>
      <article className="bg-secondary p-3 rounded">
        <h5 className="m-0">Itens: 3</h5>
        <h5 className="m-0">Total: R$ 680,00</h5>
        <article className="bg-light p-3">
          <p>Seu carrinho está vazio</p>

        </article>
        <button className="btn btn-danger mt-3">Limpar</button>
      </article>
    </section>
  );
};

export default Kart;