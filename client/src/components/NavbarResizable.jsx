"use client";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import DropdownProfile from "./DropdownProfile";
 
function NavbarResizable() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Faculty",
      link: "/faculty",
    },
    {
      name: "About Us",
      link: "/about",
    },
     {
      name: "Campus Life",
      link: "/campus",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {user,logout} = useAuth();
 
  return (
    <div className="fixed w-full z-50 h-[10vh]">
      <div className="fixed w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody >
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {user ? (
              <>
              <DropdownProfile />
              {/* <Link to="/">
              <NavbarButton variant="primary" 
              onClick={logout}
              >Logout</NavbarButton>
              </Link> */}
              </>
            ):(
              <>
              <Link to="/signup">
              <NavbarButton variant="primary">Sign-up</NavbarButton>
              </Link>
            <Link to="/login">
              <NavbarButton variant="primary">Login</NavbarButton>
            </Link>
              </>
            )
            }
            
          </div>
        </NavBody>
        
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar> 
      {/* Navbar */}
    </div>
    </div>
  );
}

export default NavbarResizable;