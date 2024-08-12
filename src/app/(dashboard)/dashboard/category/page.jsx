import { getallCategories } from "@/lib/actions/category.action";
import ListLayout from "../../components/ListLayout";

const Page = async () => {
  let response = [];
  try {
    response = await getallCategories();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }

  const TabHeaderList = ['Name', 'Description', 'Slug', 'Actions'];

  return (
    <ListLayout 
      tableTitle='category' 
      TabHeaderList={TabHeaderList} 
      TableBodyData={response} 
      headerTitle="Categories" 
      headerbuttontitle="Add New Category" 
      path="addNewCategory" 
    />
  );
};

export default Page;
