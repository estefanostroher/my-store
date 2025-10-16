import './style.css';

const listaProdutos = () => {

    const produtos = [
        {
            id: 1,
            nome: "prod1",
            descricao: "prod1",
            preco: 899.99,
            imagem: "fundo-preto.jpg",
        },
        {
            id: 2,
            nome: "prod2",
            descricao: "prod2",
            preco: 2299.99,
            imagem: "fundo-preto.jpg",
        }
    ];

    return (
        <div className="lista-produtos">
            <div className="lista-produtos-header">
                <h2 className="lista-produtos-title">Lista de Produtos</h2>
            </div>
            
            <div className="produtos-grid">
                {produtos.map(produto => (
                    <div key={produto.id} className="produto-card">
                        <div className="produto-imagem">
                            <img src={produto.imagem} alt={produto.nome} />
                        </div>
                        
                        <div className="produto-info">
                            <h3 className="produto-nome">{produto.nome}</h3>
                            <div className="produto-preco">
                                <span className="preco-valor">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
                            </div>
                            
                            <div className="produto-acoes">
                                <button className="btn-comprar">Comprar Agora</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default listaProdutos;