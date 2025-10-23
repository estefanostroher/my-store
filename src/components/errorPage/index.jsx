import './style.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1 className="erro-404">Erro 404</h1>
            <p className="description-error-1">Desculpe, a página que você está procurando não existe.</p>
            <p className="description-error-2">O link pode não existir ou ter sido removido</p>

            <button onClick={() => window.location.href = '/'} className="button-erro-voltar">
                Voltar para a página inicial
            </button>
        </div>
    );
};

export default ErrorPage;