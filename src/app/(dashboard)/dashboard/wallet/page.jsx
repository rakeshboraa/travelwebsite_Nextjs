import ListLayout from "../../components/ListLayout";

const Page = () => {
  const TabHeaderList = ['Transaction ID', 'User', 'Type', 'Amount', 'Description', 'Date', 'Actions']
  const TableBodyData = [
    {
      transactionID: 'demo name',
      user: 'demo Company',
      type: 'Email@gmail.com',
      amount: 'active',
      description: 'demo Company',
      Date: 'Email@gmail.com',
    },
    {
      transactionID: 'demo name',
      user: 'demo Company',
      type: 'Email@gmail.com',
      amount: 'active',
      description: 'demo Company',
      Date: 'Email@gmail.com',
    },
    {
      transactionID: 'demo name',
      user: 'demo Company',
      type: 'Email@gmail.com',
      amount: 'active',
      description: 'demo Company',
      Date: 'Email@gmail.com',
    },
  ]

  return (
    <ListLayout tableTitle='wallet' TableBodyData={TableBodyData} TabHeaderList={TabHeaderList} headerTitle="Wallet" headerbuttontitle="Add Transaction" path="addTransaction" />
  )
}

export default Page;










