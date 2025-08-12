import { Link } from "react-router-dom";
import AuthModalManager from "./AuthModalManager";

export default function Header() {
  return (
    <header>
      <div className="mx-auto w-full max-w-7xl h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-5 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-gray-900 no-underline">
          CoDiYoung
        </Link>
        <AuthModalManager />
      </div>
    </header>
  );
}