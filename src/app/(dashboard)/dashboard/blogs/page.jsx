import ListLayout from "../../components/ListLayout";

const Page = () => {
    const TabHeaderList = ['Title', 'Author', 'Category', 'Tags', 'Publication Date', 'Status', 'Actions']
   
    const TableBodyData = [
        {
            title: 'demosasdasdasdasdasd name',
            author: 'demo Company',
            category: 'Email@gmail.com',
            tags: '23223',
            publication_date: 'demo activites',
            status: 'active'
        },
        {
            title: 'demosasdasdasdasdasd name',
            author: 'demo Company',
            category: 'Email@gmail.com',
            tags: '23223',
            publication_date: 'demo activites',
            status: 'active'
        },
    ]

    return (
        <ListLayout tableTitle='blogs' TabHeaderList={TabHeaderList} TableBodyData={TableBodyData} headerTitle="Blogs" headerbuttontitle="Add New Blog Post" path="addNewBlogPost" />
    )

}

export default Page;









