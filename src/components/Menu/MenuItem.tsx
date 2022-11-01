interface props {
	category: string;
	name: string;
	price: number;
}

export const MenuItem = ({ category, name, price }: props) => {
	return (
		<div className='flex flex-col gap-y-11 cursor-pointer justify-between text-center break-words shadow-md w-[200px]  rounded-lg p-2 group hover:shadow-lg hover:bg-[#3E517A] duration-500'>
			<div className='text-gray-400 text-sm pt-2 capitalize'>{category}</div>
			<div className='text-gray-800 text-sm font-black text-center px-2 group-hover:text-white duration-500 capitalize'>
				{name}
			</div>
			<div className='text-gray-800 font-bold group-hover:text-white duration-500'>
				{price} PHP
			</div>
		</div>
	);
};
