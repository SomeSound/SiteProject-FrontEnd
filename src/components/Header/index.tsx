import './Header.css';

function Header() {
  return (
    <header>
      <div className="navigationDiv">
        <button type="button"> Home </button>
        <button type="button"> Artistas </button>
        <button type="button"> Músicas </button>
      </div>
      <div className="searchDiv">
        <input type="text" placeholder="Procure uma música / artista" />
        <button type="submit">Search</button>
      </div>
      <div>Cadastro / Login</div>
    </header>
  );
}

export default Header;
