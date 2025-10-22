import { useNavigate, useParams } from "react-router-dom";

export const KartButton = ({items}) => {
  const nav = useNavigate();


  return (
        <button onClick={() => nav("/carrinho")} className="d-flex w-100 justify-content-center bg-secondary">
          <h2 className="m-0">Carrinho({items || 0})</h2>
        </button>
  );
};
