import SideBarItem from "./SideBarItem";

import { BsFillCartXFill, BsFillCartFill } from "react-icons/bs";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

interface props {
	visible: boolean;
}

export const Sidebar = ({ visible }: props) => {
	return (
		<div
			className={`flex flex-col fixed rounded-tl-2xl rounded-bl-2xl shadow-2xl pt-1 h-[90vh] w-[300px] md:w-[40%] xl:w-[25%] max-h-[70%] right-0 bottom-20 ease-in-out duration-300 
			${visible ? "translate-x-0" : "translate-x-full"} bg-white z-50`}
		>
			{/* Header */}
			<div className='flex justify-between items-center px-5 py-2 border-b-[1px] border-gray-200'>
				<div>
					<span className='text-lg font-bold tracking-tight p-2 text-gray-700'>
						Cart
					</span>
				</div>
				<button className='flex items-center gap-1 text-lg  text-red-500 hover:bg-red-400 hover:text-white p-2 rounded'>
					<BsFillCartXFill />
					<div className='text-xs pt-[1px]'>Clear</div>
				</button>
			</div>

			{/* Items */}
			<div className='overflow-auto min-h-[70%]'>
				<SideBarItem itemName='Burger' price={45} />
			</div>

			<div className='flex flex-col px-5 gap-y-5 pt-4 pb-10 border-t-[1px] border-gray-200'>
				<div className='flex justify-between'>
					<div className='text-lg font-bold tracking-wide'>Total</div>
					<div className='font-bold'>
						500<span className='text-xs text-gray-400'>.00 </span>
						<span className='text-xs tracking-wide'>Php</span>
					</div>
				</div>

				<button className='flex items-center justify-center gap-3 w-full py-3 px-5 text-xl text-white text-left rounded-md bg-[#6C9EB2] hover:bg-[#3A606E] transition-colors duration-200'>
					<FaMoneyBillWaveAlt />
					<div className='text-center'>Payment</div>
				</button>
			</div>
		</div>
	);
};
