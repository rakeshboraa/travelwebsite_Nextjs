import ListLayout from "../../components/ListLayout";

const Page = () => {
  const TabHeaderList = ['Name', 'Company Name', 'Email', 'Phone', 'Location', 'Status', 'Actions']
  const TableBodyData = [
    {
      name:'demo name',
      company:'demo Company',
      email:'Email@gmail.com',
      phone:'23223',
      location:'demolocation',
      status:'active'
    },  
    {
      name:'demo name',
      company:'demo Company',
      email:'Email@gmail.com',
      phone:'23223',
      location:'demolocation',
      status:'active'
    },
    {
      name:'demo name',
      company:'demo Company',
      email:'Email@gmail.com',
      phone:'23223',
      location:'demolocation',
      status:'active'
    }
  ]
  return (
    <ListLayout tableTitle='vendors' TableBodyData={TableBodyData} TabHeaderList={TabHeaderList} headerTitle="Vendors" headerbuttontitle="Add New Vendor" path="addNewVendor" />
  )
}

export default Page;







