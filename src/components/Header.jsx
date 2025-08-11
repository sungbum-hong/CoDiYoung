// src/components/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "../ui/Modal";
import SignIn from "../pages/SignIn";

export default function Header() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [showParentTitle, setShowParentTitle] = useState(true);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
      <div className="max-w-4xl mx-auto h-14 flex items-center justify-between px-4">
        <Link to="/" className="font-extrabold text-gray-900 no-underline">
          CoDiYoung
        </Link>
        <nav className="flex space-x-2">
          <NavLink
            to="/list/coding"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-100 ${
                isActive ? "font-semibold text-purple-700" : "text-gray-700"
              }`
            }
          >
            코딩
          </NavLink>
          <NavLink
            to="/list/design"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-100 ${
                isActive ? "font-semibold text-purple-700" : "text-gray-700"
              }`
            }
          >
            디자인
          </NavLink>
          <NavLink
            to="/list/video"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-100 ${
                isActive ? "font-semibold text-purple-700" : "text-gray-700"
              }`
            }
          >
            영상
          </NavLink>
          <button
            onClick={() => setIsSignInOpen(true)}
            className="px-3 py-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            로그인
          </button>
        </nav>
      </div>

      <Modal
        isOpen={isSignInOpen}
        onClose={() => {
          setIsSignInOpen(false);
          setShowParentTitle(true);
        }}
        title={showParentTitle ? "로그인" : ""}
      >
        <SignIn 
          onClose={() => {
            setIsSignInOpen(false);
            setShowParentTitle(true);
          }}
          onHideParentTitle={() => setShowParentTitle(false)}
          onShowParentTitle={() => setShowParentTitle(true)}
        />
      </Modal>
    </header>
  );
}
