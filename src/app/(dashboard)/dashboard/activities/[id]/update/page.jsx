import ActivityForm from '@/app/(dashboard)/components/ActivityForm';
import { getActivityById } from '@/lib/actions/activity.actions';
import React from 'react'

const page = async ({ params: { id } }) => {
  const activity = await getActivityById(id)
 
  return <ActivityForm
    type="Update"
    activity={activity}
    activityId={activity._id}
  />;
}

export default page