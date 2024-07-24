import ListLayout from "../../components/ListLayout"

const Page = () => {
 const TabHeaderList = ['Image', 'Title', 'Included Activities', 'Price', 'Availability', 'Inventory', 'Actions']

  const TableBodyData = [
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      includedActivities: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      includedActivities: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
  ]
  return (
    <ListLayout tableTitle="comboOffers" TabHeaderList={TabHeaderList} TableBodyData={TableBodyData} headerTitle="Combo Offers" headerbuttontitle="Add New Combo Offer" path="addComboOffers" />
  )
}

export default Page;







