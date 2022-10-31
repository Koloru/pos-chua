import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "../Sidebar";

// Icons
import { BsFillCartFill, BsFillCartXFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

// Categories
import Data  from "../../../backend/category.json";
import Router, { useRouter } from "next/router";

export const Footer = () => {
	const [showCart, setshowCart] = useState(false);
	const router = useRouter();
	return (
		<div className='flex justify-between w-full fixed bottom-0 bg-[#3e517a] px-5  text-white'>
			<div className='flex flex-wrap gap-10 -mb-px text-md  text-center'>
				<Link href='/'>
					<button
						className={`p-4 ${
							router.asPath === "/"
								? "border-[#A8E0FF] font-bold"
								: "border-transparent"
						} border-t-4  `}
					>
						All items
					</button>
				</Link>

				{Data.category.map((category) => (
					<Link key={category+'1'} href={`/category/${category}`} >
						<button
							className={`p-4 border-t-4  ${
								router.asPath === "/category/" + category
									? "border-[#A8E0FF] font-bold"
									: "border-transparent"
							} hover:border-[#A8E0FF] hover:text-gray-300 capitalize`}
						>
							{category}
						</button>
					</Link>
				))}
			</div>

			{/* Cart Button */}
			<div className='group hover:bg-white p-4 border-t-4 border-transparent cursor-pointer'>
				<button
					onClick={() => setshowCart(!showCart)}
					className='text-white text-2xl p-1 rounded duration-300 group-hover:text-[#3e517a]'
				>
					{showCart ? <BsFillCartXFill /> : <BsFillCartFill />}
				</button>
			</div>
			<Sidebar visible={showCart} />
		</div>
	);
};
