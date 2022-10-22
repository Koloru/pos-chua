// Next/React Imports
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "../Sidebar";

// Other libaries
// Icons


export const Navbar = () => {
	return (
		<div className='navbar bg-red-500'>
			<div className='flex-1'>
				{/* Todo Put Icon here  */}
				<Link href='/hello'>
					<button className='btn btn-ghost normal-case text-xl'>
						Point of Sales
					</button>
				</Link>
			</div>
			<div className='flex-none'>
				<button className='btn btn-square btn-ghost'>--------</button>
				<Sidebar />
			</div>
		</div>
	);
};
