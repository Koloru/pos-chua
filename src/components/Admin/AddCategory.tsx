import { useLiveQuery } from "dexie-react-hooks";
import { ChangeEventHandler, useState } from "react";
import uniqid from "uniqid";
import { db } from "../../../backend/db";

const AddCategory = () => {
	const [category, setCategory] = useState("");
	const categories = useLiveQuery(() => db.category.toArray());

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const x = event.target.value;
		setCategory(x);
	};

	const addCategory = async () => {
		if (!category) return;
		let id = uniqid();
		await db.category.add({ id, category });
		setCategory("");
	};

	return (
		<div className='flex flex-col gap-4  p-5 bg-[#3e517a] text-white '>
			<span className='font-bold text-md '>Add New Category</span>

			<input
				className='p-2 border-2 border-white rounded w-full text-black'
				type='text'
				name='category'
				value={category}
				onChange={handleChange}
			/>
			<button
				onClick={addCategory}
				className='p-2 rounded-lg border-[1px] border-white max-w-[500px] hover:bg-white hover:text-[#3e517a]'
			>
				Add Category
			</button>
			<div>
				<h1 className='font-bold text-lg tracking-wide'>Categories</h1>
				<div className='flex gap-2 pt-2'>
					{categories?.map((catg) => (
						<div key={catg.id} className='px-2 capitalize'>
							- {catg.category}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AddCategory;
