import { useEffect } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../productCard';

const ListaProdutos = ({produtos, setProdutos, setCarrinho}) => {
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const fetchProdutos = async () => {
                const response = await fetch('https://json-server-produtos-96fx.onrender.com/produtos');
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
    };

    const handleVerProduto = (produtoId) => {
        navigate(`/produto/${produtoId}`);
    };

    return (
        <div className="d-flex flex-column align-items-center h-100 py-4">
            <article className='w-75 py-2'>
                <h2 className="fw-bold text-start">Lista de Produtos</h2>            
            </article>
            
            <div className="d-flex gap-4 flex-wrap w-75">
                {produtos.map(produto => (
                    <ProductCard 
                        key={produto.id}
                        id={produto.id}
                        imagem={produto.imagem}
                        nome={produto.nome}
                        nota={produto.nota}
                        preco={produto.preco}
                        quantidade={produto.quantidade}
                        handleAdicionarAoCarrinho={handleAdicionarAoCarrinho}
                        handleVerProduto={handleVerProduto}
                        renderEstrelas={renderEstrelas}
                        produto={produto}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListaProdutos;