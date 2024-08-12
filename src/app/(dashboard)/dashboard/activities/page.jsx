import ListLayout from "../../components/ListLayout";
import { getAllActivity } from "@/lib/actions/activity.actions";

const Page = async ({ searchParams }) => {
    const page = Number(searchParams?.page) || 1;
    const query = searchParams?.query || '';
    const category = searchParams?.category || '';
    const minPrice = searchParams?.minPrice ? Number(searchParams.minPrice) : undefined;
    const maxPrice = searchParams?.maxPrice ? Number(searchParams.maxPrice) : undefined;
    const startDate = searchParams?.startDate || undefined;
    const endDate = searchParams?.endDate || undefined;

    let data = [];
    let totalPages = 1;
    let maximumPrice = 0;
    try {
        const response = await getAllActivity({ query, category, page, limit: 6, minPrice, maxPrice, startDate, endDate });
        data = response.data;
        totalPages = response.totalPages;
        maximumPrice = response.maxPrice;

        if (data && data.length > 0) {
            data = data.map(act => ({
                ...act,
                image: act.imageUrls[0],
                availability: act.availability.length 
            }));
        }
        
    } catch (error) {
        console.error("Failed to fetch activities:", error);
    }

    const TabHeaderList = ['image', 'title', 'location', 'price', 'availability', 'inventory', 'actions'];

    return (
        <ListLayout
            tableTitle="activities"
            TabHeaderList={TabHeaderList}
            TableBodyData={data}
            headerTitle="Activities"
            headerbuttontitle="Add New Activity"
            path="addNewActivity"
            maximumPrice={maximumPrice}
            currentPage={page}
            totalPages={totalPages}
            limit={3}
        />
    );
};

export default Page;
