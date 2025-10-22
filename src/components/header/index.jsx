import cart from '../../assets/kart-icon.svg';

const Header = () => {
    return (
        <header className="d-flex align-items-center header-container  justify-content-center bg-primary color-white">
            <a href="/" style={{textDecoration: 'none'}}>
                <h1 className="text-white">Minha Loja</h1>
            </a>
        </header>
    )
}

export default Header;