import Link from "next/link";
import NavItem from "./NavItem";

interface props {
	visible: boolean;
}

export const NavMenu = ({ visible }: props) => {
	return (
		<div
			className={`mt-2 flex flex-col fixed right-0 top-10 ease-in-out duration-300 
			${visible ? "translate-x-0" : "translate-x-full"} bg-[#3e517a]`}
		>
			<NavItem directory='history' name="History" />
			<NavItem directory='manage-items' name="Manage Items" />
			<NavItem directory='manage-items' name="Manage Items" />
			<NavItem directory='manage-items' name="Manage Items" />
			<NavItem directory='manage-items' name="Manage Items" />
			<NavItem directory='manage-items' name="Manage Items" />
			<NavItem directory='manage-items' name="Manage Items" />
			<NavItem directory='manage-items' name="Manage Items" />
			<NavItem directory='manage-items' name="Manage Items" />
      
		</div>
	);
};
