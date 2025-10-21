import './style.css';
import { useEffect } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const ListaProdutos = ({produtos, setProdutos, setCarrinho}) => {

    useEffect(() => {
        try {
            const fetchProdutos = async () => {
                const response = await fetch('http://localhost:3001/produtos');
                const data = await response.json();
                setProdutos(data);
            };

            fetchProdutos();
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }, [setProdutos]);

    const renderEstrelas = (nota) => {
        const estrelas = [];
        const fullEstrela = Math.floor(nota);
        const meiaEstrela = nota % 1 !== 0;
        const estrelaVazia = 5 - Math.ceil(nota);

        for (let i = 0; i < fullEstrela; i++)
            estrelas.push(<FaStar key={`full-${i}`} color="#FFD700" />);

        if (meiaEstrela)
            estrelas.push(<FaStarHalfAlt key="half" color="#FFD700" />);

        for (let i = 0; i < estrelaVazia; i++)
            estrelas.push(<FaRegStar key={`empty-${i}`} color="#FFD700" />);

        return estrelas;
    };

    const handleAdicionarAoCarrinho = (produto) => {
        if (produto.quantidade <= 0) {
            alert('Produto indisponível no estoque!');
            return;
        }

        // Adiciona o produto ao carrinho
        setCarrinho(prev => [...prev, produto]);
        alert('Produto adicionado ao carrinho!');
    };

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
                            <div className="produto-nota">
                                {renderEstrelas(produto.nota || 0)}
                            </div>
                            <div className="produto-preco">
                                <span className="preco-valor">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="produto-estoque">
                                <span>Estoque: {produto.quantidade}</span>
                            </div>

                            <div className="produto-acoes">
                                <button
                                    className="btn-comprar"
                                    onClick={() => handleAdicionarAoCarrinho(produto)}
                                    disabled={produto.quantidade <= 0}
                                >
                                    {produto.quantidade > 0 ? 'Adicionar ao Carrinho' : 'Indisponível'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProdutos;