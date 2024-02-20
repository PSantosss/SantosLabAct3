function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="Pinterest-logo.png" width="6%" height="6%"></img>
      </div>
      <div className="button-div">
        <button className="pinterest-button">Home</button>
      </div>
      <div className="create-btn">
        <p>Create</p>
      </div>
      <div className="search-bar">
        <input className="search-input" type="text" placeholder="Search" />
      </div>
      <div className="bell">
        <img src="bell-icon.png" width="7%" height="7%"></img>
      </div>
      <div className="msg">
        <img src="msg-icon.png" width="8%" height="8%"></img>
      </div>
      <div className="icon">
        <img src="PIN-ICON.png" width="9%" height="9%"></img>
      </div>
    </header>
  );
}

export default Header;
