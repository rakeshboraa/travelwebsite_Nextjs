import ListLayout from "../../components/ListLayout";

const Page = () => {
  const TabHeaderList = ['Name', 'Description', 'Slug', 'Actions']
  const TableBodyData = [
    {
      name: 'demosasdasdasdasdasd name',
      description: 'demo Company',
      slug: 'Email@gmail.com',
    },
    {
      name: 'demosasdasdasdasdasd name',
      description: 'demo Company',
      slug: 'Email@gmail.com',
    },
  ]
  return (
    <ListLayout tableTitle='categories' TabHeaderList={TabHeaderList} TableBodyData={TableBodyData} headerTitle="Categories" headerbuttontitle="Add New Category" path="addNewCategory" />
  )
}

export default Page;









