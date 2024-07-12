import ListLayout from "../../components/ListLayout"

const page = () => {
  const TabHeaderList = ['image', 'title', 'location', 'price', 'availability', 'inventory', 'actions']
  const TableBodyData = [
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      location: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      location: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      location: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      location: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      location: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      location: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
    {
      image: 'https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502950/hh3k8gqghqh44ih3b2mu.png',
      title: 'Demo',
      location: 'demolocation',
      price: '$23',
      availability: 'yes',
      inventory: 'demo'
    },
  ]
  return (
    <ListLayout tableTitle="activities" TabHeaderList={TabHeaderList} TableBodyData={TableBodyData} headerTitle="Activities" headerbuttontitle="Add New Activity" path="addNewActivity" />
  )
}

export default page