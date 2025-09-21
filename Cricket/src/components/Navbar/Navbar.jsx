import logo from "../../assets/logo.png";
const Navbar = ({ coin }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm mt-1.5">
      <div className="navbar-start">
        <img className="w-[60px]" src={logo} alt="" />
      </div>
      <div className="navbar-end">
        <a className="btn">{coin} Coin</a>
      </div>
    </div>
  );
};

export default Navbar;
