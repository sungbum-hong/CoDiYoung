import { COLORS } from "../constants/colors";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-24 lg:px-36 bg-white mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div>
            <img src="/cdylogo.png" alt="CoDiYoung Logo" className="h-10 w-auto" />
          </div>
          
          {/* Slogan */}
          <p className="text-sm text-gray-600">
            함께 배우고 성장하는 청년 스터디 커뮤니티 플랫폼
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-3 text-sm font-bold text-gray-800 mt-2">
            <Link href="/terms" className="hover:text-purple-600 transition-colors">
              이용약관
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/privacy" className="hover:text-purple-600 transition-colors">
              개인정보처리방침
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
          {/* Instagram Icon */}
          <a 
            href="https://www.instagram.com/codiyoung_community?igsh=ZTg5ZGt6NWlsdDVk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-purple-600 transition-colors mb-2"
          >
            <FaInstagram size={28} />
          </a>

          {/* Menu Links */}
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <a href="https://open.kakao.com/o/sNuPVDLh" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
              신청하기
            </a>
            <Link href="/ads" className="hover:text-purple-600 transition-colors">
              광고/외주
            </Link>
            <Link href="/about/made-us" className="hover:text-purple-600 transition-colors">
              Made by Us
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 mt-2">
            © 2025 Codiyoung
          </p>
        </div>
      </div>
    </footer>
  );
}
