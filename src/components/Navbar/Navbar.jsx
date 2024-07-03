import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">AHASAN</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li className="hover:underline">
              <a href="https://drive.google.com/file/d/1RHJsJ_YD6mmFFSFzjUBF1gB7FeeXZNE2/view?usp=sharing">Resume</a>
            </li>
            <li>
              <Link to="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
