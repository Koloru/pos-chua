// Next/React Imports
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "../Sidebar";

// Other libaries
// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
	const [showCart, setshowCart] = useState(false);
	return (
		<div className='flex justify-between px-5 py-2 bg-[#3e517a] overflow-x-hidden'>
			<div className='flex-1'>
				{/* Todo Put Icon here  */}
				<Link href='/'>
					<button className='btn btn-ghost normal-case text-xl text-[#A8E0FF]'>
						Genshin Impact
					</button>
				</Link>
			</div>
			<div className='flex justify-center items-center'>
				<button
					onClick={() => setshowCart(!showCart)}
					className='text-white text-2xl hover:bg-[#f0f3f3f3] p-1 rounded duration-300'
				>
					{showCart ? <IoMdClose /> : <GiHamburgerMenu />}
				</button>

				<Sidebar visible={showCart} /> 
			</div>
		</div>
	);
};
