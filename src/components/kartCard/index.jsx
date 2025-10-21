export const KartCard = ({name}) => {
    return (
        <section className="d-flex gap-3 justify-content-between align-items-center">
            <article className="d-flex gap-3">
                <div className="bg-dark text-white p-3">
                    <p className="m-0">{name}</p>
                </div>
                <div className="dflex flex-column">
                    <h4 className="m-0">{name}</h4>
                    <p className="m-0">R$ 200,00</p>
                </div>
            </article>
            <button className="bg-warning border-0 rounded" style={{ height: '40px', alignSelf: 'center' }}>
                Excluir
            </button>
        </section>
    );
}