import './style.css'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaStar, FaRegStar, FaStarHalfAlt, FaArrowLeft } from 'react-icons/fa'

const ProductDescription = ({ setCarrinho }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await fetch(`http://localhost:3001/produtos/${id}`)
                const data = await response.json()
                setProduto(data)
                setLoading(false)
            } catch (error) {
                console.error('Erro ao buscar produto:', error)
                setLoading(false)
            }
        }

        fetchProduto()
    }, [id])

    const renderEstrelas = (nota) => {
        const estrelas = []
        const fullEstrela = Math.floor(nota)
        const meiaEstrela = nota % 1 !== 0
        const estrelaVazia = 5 - Math.ceil(nota)

        for (let i = 0; i < fullEstrela; i++)
            estrelas.push(<FaStar key={`full-${i}`} color="#FFD700" />)

        if (meiaEstrela)
            estrelas.push(<FaStarHalfAlt key="half" color="#FFD700" />)

        for (let i = 0; i < estrelaVazia; i++)
            estrelas.push(<FaRegStar key={`empty-${i}`} color="#FFD700" />)

        return estrelas
    }

    const handleAdicionarAoCarrinho = () => {
        if (produto.quantidade <= 0) {
            alert('Produto indisponível no estoque!')
            return
        }
        setCarrinho(prev => [...prev, produto])
    }

    const handleVoltar = () => {
        navigate('/')
    }

    if (loading)
        return <div className="loading">Carregando...</div>

    if (!produto)
        return <div className="error">Produto não encontrado</div>

    return (
        <div className="product-description-container">
            <button className="btn-voltar" onClick={handleVoltar}>
                <FaArrowLeft /> Voltar
            </button>

            <div className="product-detail">
                <div className="product-image-large">
                    <img src={`/${produto.imagem}`} alt={produto.nome} />
                </div>

                <div className="product-info-detail">
                    <h1 className="product-title">{produto.nome}</h1>
                    
                    <div className="product-rating">
                        {renderEstrelas(produto.nota || 0)}
                        <span className="rating-value">({produto.nota})</span>
                    </div>

                    <div className="product-price-large">
                        <span className="price-label">Preço:</span>
                        <span className="price-value">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <div className="product-stock">
                        <span className={produto.quantidade > 0 ? 'in-stock' : 'out-of-stock'}>
                            {produto.quantidade > 0 ? `Em estoque: ${produto.quantidade} unidades` : 'Fora de estoque'}
                        </span>
                    </div>

                    <div className="product-description-text">
                        <h3>Descrição</h3>
                        <p>{produto.descricao}</p>
                    </div>

                    <button
                        className="btn-add-cart-large"
                        onClick={handleAdicionarAoCarrinho}
                        disabled={produto.quantidade <= 0}
                    >
                        {produto.quantidade > 0 ? 'Adicionar ao Carrinho' : 'Indisponível'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription