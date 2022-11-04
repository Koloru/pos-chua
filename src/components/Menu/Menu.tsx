import { MenuItem } from "./MenuItem";
import { db } from "../../../backend/db";
import Data from "../../../backend/category.json";

export const Menu = () => {
	const { items } = Data;
	return (
		<div className='flex gap-2 flex-wrap overflow-auto justify-center py-20'>
			{items.map((item) => (
				<MenuItem
					key={item.name}
					category={item.category}
					name={item.name}
					price={item.price}
				/>
			))}
		</div>
	);
};
