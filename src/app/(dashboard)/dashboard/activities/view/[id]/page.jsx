import ViewData from "@/app/(dashboard)/components/ViewData";
import { getActivityById } from "@/lib/actions/activity.actions";


const page = async ({ params: { id } }) => {
  const activity = await getActivityById(id);

  // Calculate the total availability count
  const slots = activity.availability.length;

  const listTitles = ['title', 'description', 'location', 'categories',  'price', 'availability', 'slots', 'inventory', 'createdby'];

  return (
    <div>
      <ViewData 
        dataId={id} 
        hasImages={true} 
        headerTitle="Activity Details" 
        listTitles={listTitles} 
        listData={{ ...activity, slots }} 
        path={'activities'} 
      />
    </div>
  )
}

export default page;
