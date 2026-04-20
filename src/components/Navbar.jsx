import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="font-gaming border-ap-border bg-ap-surface/90 text-ap-text w-full border-b px-6 py-4 backdrop-blur">
      <div className="flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="logo" className="h-10" />
          <span className="text-ap-brand text-xl font-bold">ArgenPlay</span>
        </Link>

        <form className="max-w-md flex-1">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

            <input
              type="search"
              placeholder="Buscar juegos..."
              className="border-ap-border bg-ap-bg text-ap-text placeholder-ap-muted focus:border-ap-brand focus:bg-ap-surface-2 w-full rounded-lg border px-4 py-2 transition outline-none"
            />
          </div>
        </form>

        <div className="flex gap-6 text-base font-medium">
          <Link to="/" className="hover:text-ap-brand-strong transition">
            Inicio
          </Link>
          <Link to="/" className="hover:text-ap-brand-strong transition">
            Favoritos
          </Link>
          <Link to="/" className="hover:text-ap-brand-strong transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
