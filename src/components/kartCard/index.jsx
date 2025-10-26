export const KartCard = ({
  name,
  price,
  onRemove,
  countItens,
  onRemoveOne,
  onAddOne,
}) => {
  return (
    <section className="d-flex gap-3 justify-content-between align-items-center">
      <article className="d-flex gap-3">
        <div className="bg-dark text-white p-3">
          <p className="m-0">{name}</p>
        </div>
        <div className="dflex flex-column">
          <h4 className="m-0">{name}</h4>
          <p className="m-0">R$ {price}</p>
        </div>
      </article>
      <article className="d-flex gap-4">
        <article className="d-flex gap-3 align-items-center">
          <button className="btn btn-outline-primary rounded" onClick={onRemoveOne}>-</button>
          {countItens}
          <button className="btn btn-outline-primary rounded" onClick={onAddOne}>+</button>
        </article>
        <button
          className="bg-warning border-0 rounded"
          style={{ height: "40px", alignSelf: "center" }}
          onClick={onRemove}
        >
          Excluir
        </button>
      </article>
    </section>
  );
};
