import ListLayout from "../../components/ListLayout";

const Page = () => {
  const TabHeaderList = [ 'Name', 'Email', 'Role', 'Status', 'Registration Date', 'Actions']
  const TableBodyData = [
    {
      name:'demo name',
      email:'demo Company',
      role:'Email@gmail.com',
      status:'active',
      registrationDate:'23223',
    },  
    {
      name:'demo name',
      email:'demo Company',
      status:'active',
      role:'Email@gmail.com',
      registrationDate:'23223',
    },  
    {
      name:'demo name',
      status:'active',
      email:'demo Company',
      role:'Email@gmail.com',
      registrationDate:'23223',
    },  
  ]

  return (
    <ListLayout tableTitle='user' TableBodyData={TableBodyData} TabHeaderList={TabHeaderList} headerTitle="Users" headerbuttontitle="Add New User" path="addNewUser" />
  )
}

export default Page;










