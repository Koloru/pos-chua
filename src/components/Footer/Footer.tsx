export const Footer = () => {
	return (
		<div className='w-full absolute bottom-0 bg-[#3e517a] px-5 -z-10 text-white'>
			<div className='flex flex-wrap gap-10 -mb-px text-md font-extralight  text-center'>
				<button className='p-4 border-t-4 border-[#A8E0FF] font-bold'>
					All items
				</button>
				<button className='p-4 border-t-4 border-transparent hover:text-gray-600 hover:border-[#A8E0FF] hover:text-gray-300 '>
					Pizza
				</button>
				<button className='p-4 border-t-4 border-transparent hover:text-gray-600 hover:border-[#A8E0FF] hover:text-gray-300'>
					Pasta
				</button>
				<button className='p-4 border-t-4 border-transparent hover:text-gray-600 hover:border-[#A8E0FF] hover:text-gray-300'>
					Beverages
				</button>
			</div>
		</div>
	);
};
