import { MenuItem } from "./MenuItem";
import Data from '../../../backend/category.json'

export const Menu = () => {
  const {items} = Data
	return <div className="flex gap-2 flex-wrap overflow-auto justify-center py-20">
    {items.map((item)=> (
      <MenuItem category={item.category} name={item.name} price={item.price}/>
    ))}
    
  </div>;
};
