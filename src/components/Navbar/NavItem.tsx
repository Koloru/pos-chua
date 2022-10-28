import Link from "next/link";

interface props {
	directory: string;
	name: string;
}
const NavItem = ({ directory, name }: props) => {
	return (
		<Link href={`/${directory}`}>
			<div className='text-md font-thin text-white px-5 py-4 hover:bg-white hover:text-[#3e517a] duration-600 cursor-pointer'>
				{name}
			</div>
		</Link>
	);
};

export default NavItem;
