const ErrorPage = () => {
    return (
        <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bold">Erro 404</h1>
            <p className="text-secondary fs-2 fw-bolder">Desculpe, a página que você está procurando não existe.</p>
            <p className="text-dark fs-4 fw-bolder">O link pode não existir ou ter sido removido</p>

            <button onClick={() => window.location.href = '/'} className="btn btn-primary px-4 py-2 fs-5">
                Voltar para a página inicial
            </button>
        </div>
    );
};

export default ErrorPage;