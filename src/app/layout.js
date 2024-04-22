import { Inter } from "next/font/google";
import "./globals.css";
import { FaHouse, FaHeart, FaRegSquarePlus } from "react-icons/fa6";
import Provider from "./_components/_provider/chakraProvider";
import Link from "next/link";
import Logo from "./_components/_ui/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Nistagram",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<body className={inter.className}>
				<div className="p-5 fixed bottom-0 border-t-2 w-full sm:w-fit lg:w-[280px] sm:h-screen sm:left-0 sm:border-r-2">
					<nav className="flex justify-between items-center sm:items-start sm:justify-start sm:flex-col sm:gap-5">
						<Logo size="hidden lg:block text-3xl" />
						<Link
							className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
							href={"/"}
						>
							<FaHouse className="size-8" />
							<span className="text-lg hidden lg:block">Home</span>
						</Link>
						<Link
							className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
							href={"/"}
						>
							<FaHeart className="size-8" />
							<span className="text-lg hidden lg:block">Notifications</span>
						</Link>
						<Link
							className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
							href={"/"}
						>
							<FaRegSquarePlus className="size-8" />
							<span className="text-lg hidden lg:block">Create</span>
						</Link>
						<Link
							className="flex items-center gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
							href={"/"}
						>
							<div className="size-8 rounded-full bg-slate-400" />
							<span className="text-lg hidden lg:block">Profile</span>
						</Link>
					</nav>
				</div>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
