function Header() {
  return (
    <div>
      <h2>Home</h2>
      <h2>Músicas</h2>
      <h2>Artistas</h2>
      <h2>Playlists</h2>
      <div>
        <input type="text" placeholder="Procure uma música / artista" />
        <button type="button" onClick={() => alert('lala')}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
