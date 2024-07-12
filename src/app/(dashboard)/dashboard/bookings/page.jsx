import ListLayout from "../../components/ListLayout";

const Page = () => {
  const TabHeaderList = [ 'Booking ID', 'User', 'Activity', 'Date', 'Participants','Total Price','Status', 'Actions']
  const TableBodyData = [
    {
      bookingId:'demosasdasdasdasdasd name',
      user:'demo Company',
      activity:'Email@gmail.com',
      date:'23223',
      participants:'demo activites',
      price:'3443',
      status:'active'
    },  
    {
      bookingId:'demo name',
      user:'demo Company',
      activity:'Email@gmail.com',
      date:'23223',
      participants:'demo activites',
      price:'3443',
      status:'active'
    },
  ]
  return (
    <ListLayout tableTitle='bookings' TabHeaderList={TabHeaderList} TableBodyData={TableBodyData} headerTitle="Bookings" headerbuttontitle="Add New Booking" path="addNewBooking" />
  )
}

export default Page;









