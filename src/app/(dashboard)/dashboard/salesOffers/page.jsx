import ListLayout from "../../components/ListLayout";

const Page = () => {
  const TabHeaderList = ['Title', 'Description', 'Discount', 'Valid Dates', 'Included Activities', 'Actions']
  const TableBodyData = [
    {
      title:'demo name',
      description:'demo Company',
      discount:'Email@gmail.com',
      validDates:'23223',
      includedActivities:'demo activites',
    },  
    {
      title:'demo name',
      description:'demo Company',
      discount:'Email@gmail.com',
      validDates:'23223',
      includedActivities:'demo activites',
    }, 
    {
      title:'demo name',
      description:'demo Company',
      discount:'Email@gmail.com',
      validDates:'23223',
      includedActivities:'demo activites',
    }, 
    {
      title:'demo name',
      description:'demo Company',
      discount:'Email@gmail.com',
      validDates:'23223',
      includedActivities:'demo activites',
    }, 
  ]
  
  return (
      <ListLayout  tableTitle='salesOffers' TableBodyData={TableBodyData} TabHeaderList={TabHeaderList} headerTitle="Sales Offers" headerbuttontitle="Add New Sales Offer" path="addSalesOffers" />
  )
}

export default Page;







