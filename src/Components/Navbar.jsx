import { Link, BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Team from "../Components/NavRoutes/Team";
import Events from "../Components/NavRoutes/Events";
import ProgressStats from "../Components/NavRoutes/ProgressStats";
import Contact from "../Components/NavRoutes/Contact";
import Donate from "../Components/NavRoutes/Donate";
import About from "./About";


const Navbar = () => {
  const links = [
    
    { name: "TEAM", path: "/team" },
    { name: "EVENTS", path: "/events" },
    { name: "PROGRESS & STATS", path: "/progressStats" },
    { name: "CONTACT US", path: "/contact" },
    { name: "DONATE", path: "/donate" }
  ];
  
  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isHidden = scrollDirection === "down";

  return (
    <div>
      <BrowserRouter>
        <div
          className={`fixed z-[999] px-20 w-full py-8 font-[ 'Neue_Montreal_Regular'] flex justify-between items-center backdrop-blur-sm ${
            isHidden
              ? "hidden animate__animated animate__slideOutUp"
              : "animate__animated animate__slideInDown"
          }`}
        >
          <div
            className="logo cursor-pointer"
            onClick={() => navigate("/")} // Navigate to / when logo is clicked
          >
            <img src="your-logo-path" alt="Logo" />
          </div>
          <nav>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 hover:text-blue-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <Routes>
          
          <Route path="/team" element={<Team />} /> 
          <Route path="/events" element={<Events />} />
          <Route path="/progressStats" element={<ProgressStats />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
