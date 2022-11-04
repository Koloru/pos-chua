import AddCategory from "../../components/Admin/AddCategory"
import AddItem from "../../components/Admin/AddItem"

const admin = () => {
  return (
    <div className="p-8">
      <AddCategory />
      <AddItem />
    </div>
  )
}

export default admin