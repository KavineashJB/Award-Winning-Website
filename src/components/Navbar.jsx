import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useRef } from "react";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  return (
    <section
      ref={navContainerRef}
      className="fixed left-0 right-0 top-0 z-50 h-16 border-none transition-all duration-700"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7 ">
            <img src="img/logo.png" alt="logo" className="w-10" />
            <Button
              id={"product-button"}
              title={"Products"}
              rightIcon={<TiLocationArrow />}
              containerClass={"bg-blue-50 md:flex justify-between gap-1"}
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
