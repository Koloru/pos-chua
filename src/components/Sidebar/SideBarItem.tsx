interface Props {
	itemName: string;
	price: number;
}
const SideBarItem = ({ itemName, price }: Props) => {
	return (
		<div className='flex flex-col border-gray-200 border-b-2 py-4 px-5 font-bold'>
			{/* First Row */}
			<div className='flex justify-between items-center'>
				<div className='text-md leading-loose text-[#333131]'>{itemName}</div>
				<div className='text-lg text-[#4d4848]'>
					300<span className='text-xs text-gray-400'>.00 </span>
					<span className='text-xs tracking-wide'>Php</span>
				</div>
			</div>
			{/* Second Row */}
			<div className='flex justify-between'>
				<div className='text-xs leading-tight text-[#4d4848]'>
					{price}
					<span className='text-xs tracking-wide'> Php</span>
				</div>
				<div className='text-sm leading-tight pr-1 text-[#979191]'>x2</div>
			</div>
		</div>
	);
};

export default SideBarItem;
