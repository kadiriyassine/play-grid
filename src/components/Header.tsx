import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();

    return (
        <header className="bg-white text-gray-900 py-6 shadow-sm">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <img src="/svg/soccer.svg" alt="PlayGrid Logo" className="h-6 w-6" />
                        <span className="text-lg font-bold">PlayGrid</span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <Link href="/documentation" className={`hover:text-gray-600 ${router.pathname === "/documentation" ? "text-gray-900 font-semibold" : ""}`}>
                        Documentation
                    </Link>
                    <Link href="https://github.com/kadiriyassine/play-grid" className="hover:text-gray-600" target="_blank">
                        GitHub
                    </Link>
                </nav>

                {/* Try Demo Button */}
                <Link href="/tournament-setup">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition shadow-md">
                        Try Demo
                    </button>
                </Link>
            </div>
        </header>
    );
}