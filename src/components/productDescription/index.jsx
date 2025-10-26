// import "./style.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt, FaArrowLeft } from "react-icons/fa";
import fundo from "../../assets/fundo-preto.jpg";

const ProductDescription = ({ setCarrinho }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(
          `https://json-server-produtos-96fx.onrender.com/produtos/${id}`
        );
        const data = await response.json();
        setProduto(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setLoading(false);
      }
    };

    fetchProduto();
  }, [id]);

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

  const handleAdicionarAoCarrinho = () => {
    if (produto.quantidade <= 0) {
      alert("Produto indisponível no estoque!");
      return;
    }
    setCarrinho((prev) => [...prev, produto]);
  };

  const handleVoltar = () => {
    navigate("/");
  };

  if (loading) return <div className="loading">Carregando...</div>;

  if (!produto) return <div className="error">Produto não encontrado</div>;

  return (
    <>
      <section className="d-flex w-100 flex-column py-5 align-items-center">
        <article className="w-75 mb-5">
          <button className="btn btn-primary py-2 px-4" onClick={handleVoltar}>
            <FaArrowLeft />
            Voltar
          </button>
        </article>
        <article className="rounded shadow p-5 w-75 d-flex gap-5">
          <img
            src={`/${produto.imagem}` || fundo}
            alt={produto.nome}
            className="rounded w-100"
          />
          <article className="d-flex flex-column gap-4 w-100">
            <h1 className="fw-bold">{produto.nome}</h1>
            <article className="d-flex gap-2 align-items-center">
              {renderEstrelas(produto.nota || 0)}
              <span className="text-secondary px-2">({produto.nota})</span>
            </article>
            <article className="d-flex flex-column">
              <span className="text-secondary">Preço:</span>
              <span className="fs-1 fw-bold text-success">
                R$ {produto.preco.toFixed(2).replace(".", ",")}
              </span>
            </article>
            <article className="d-flex bg-light p-2 rounded w-100">
              <span
                className={produto.quantidade > 0 ? "in-stock" : "out-of-stock"}
              >
                {produto.quantidade > 0
                  ? `Em estoque: ${produto.quantidade} unidades`
                  : "Fora de estoque"}
              </span>
            </article>
            <hr className="m-0 text-secondary" />
            <article>
              <h3>Descrição</h3>
              <p className="text-secondary">{produto.descricao}</p>
            </article>
            <button
              className="btn btn-success p-2"
              onClick={handleAdicionarAoCarrinho}
              disabled={produto.quantidade <= 0}
            >
              <h4>
                {produto.quantidade > 0
                  ? "Adicionar ao Carrinho"
                  : "Indisponível"}
              </h4>
            </button>
          </article>
        </article>
      </section>
{/* 
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
              <span className="price-value">
                R$ {produto.preco.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <div className="product-stock">
              <span
                className={produto.quantidade > 0 ? "in-stock" : "out-of-stock"}
              >
                {produto.quantidade > 0
                  ? `Em estoque: ${produto.quantidade} unidades`
                  : "Fora de estoque"}
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
              {produto.quantidade > 0
                ? "Adicionar ao Carrinho"
                : "Indisponível"}
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductDescription;
