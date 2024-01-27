import './Navbar.css';

export default function NavBar() {
  return (
    <div className="navBar">
      <nav>
        <div className="logo">
        <a href="#">LOGO</a>
        </div>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
