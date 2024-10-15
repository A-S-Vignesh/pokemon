import ashpikachuimage from "../assets/ashpikachu.png"
import lucarioimage from "../assets/lucario.png"

function Header() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-4">
            <img
              src={ashpikachuimage}
              className="header-items"
              alt="ash"
              height="200px"
            />
          </div>
          <div className="col-4">
            <h1 className="header-title header-items">Pokemon</h1>
            <h2>Gotta catch 'em all!</h2>
          </div>
          <div className="col-4">
            <img
              src={lucarioimage}
              className="header-items"
              alt="ash"
              height="200px"
            />
          </div>
        </div>
      </header>
    );
}

export default Header