import { useRouter } from "next/router";

import Data from "../../../backend/category.json"

const category = () => {
	const { asPath, basePath, pathname } = useRouter();
	return (
		<div className='m-10'>
			{Data.category[0]}
		</div>
	);
};

export default category;
