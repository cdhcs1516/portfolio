import '../App.css';

const Header = ({ name, navbars }) => {
  return (
    <div className="header-section">
      <div className="header-section__logo">
        <a href="#app" >
          <h2 className="header-section__name">{name}</h2>
        </a>
      </div>
      
      <div className="header-section__navbars">
        {navbars.map((nav, index) => {
          return (
            <div key={index} className="navbar">
              <a href={`#${nav.toLowerCase()}`}>{nav.toUpperCase()}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;