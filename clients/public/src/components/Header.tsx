import { Link } from "react-router-dom";

function Header() {
  const root_path: string | undefined = process.env.PUBLIC_URL
  return (
    <header>
      <div className="header-content">
        <h1 className="header-title">Staj Yönetim Sistemi</h1>
        <button className="header-button">
          <Link to = {`${root_path}/companies`} className="nav-link">
            Firmalar
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
