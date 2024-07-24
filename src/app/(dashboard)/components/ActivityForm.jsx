"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { ActivityformSchema } from "@/lib/validators";
import { activityDefaultValues } from "@/constants";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Dropdown from "@/components/shared/MultiSelectDropdown";
import { useState } from "react";
import { createActivity, updateActivity } from "@/lib/actions/activity.actions";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import FileUploader from "@/components/shared/FileUploder";
import Loading from "../dashboard/loading";
import MultiSelectDropdown from "@/components/shared/MultiSelectDropdown";
import MultiDateSelector from "@/components/shared/MultiDateSelector";

const ActivityForm = ({ activity, activityId, type }) => {
  const { toast } = useToast();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const initialValues = activity && type === 'Update'
    ? {
      ...activity,
    }
    : activityDefaultValues;
  const form = useForm({
    resolver: zodResolver(ActivityformSchema),
    defaultValues: initialValues
  });
  const { startUpload } = useUploadThing('imageUploader', {
    multiple: true
  });
  const router = useRouter();

  const handleToast = (message) => {
    toast({
      title: message,
      className: "bg-green-400 border border-gray-500 text-white rounded-md shadow-lg p-4"
    });
  };

  async function onSubmit(values) {
    setLoading(true);

    let uploadedImageUrls = values.imageUrls;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages) {
        setLoading(false);
        return;
      }
      uploadedImageUrls = uploadedImages.map(image => image.url);
    }
    if (type === 'Create') {
      try {
        const newActivity = await createActivity({
          activity: { ...values, imageUrls: uploadedImageUrls },
        });
        if (newActivity) {
          form.reset();
          handleToast("Activity Added Successfully");
          router.push('/dashboard/activities');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (type === 'Update') {
      if (!activityId) {
        router.back();
        setLoading(false); // Set loading to false if no activityId
        return;
      }

      try {
        const updatedEvent = await updateActivity({
          activity: { ...values, imageUrls: uploadedImageUrls, activityId },
        });
        if (updatedEvent) {
          handleToast("Activity Updated Successfully");
          router.push('/dashboard/activities');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Form {...form} >
      {loading ? <Loading /> :
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-[30px] grid flex-1 mt-4 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              {type === "Update" ? "Edit Activity" : "Add New Activity"}
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button type="submit" size="sm">Save</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card>
                <CardContent className="mt-6">
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                id="description"
                                placeholder="Description"
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="Location" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <MultiSelectDropdown onChangeHandler={field.onChange} value={field.value} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <Input type='number' placeholder="Price" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="availability"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex flex-col gap-2">
                              <FormLabel>Availability</FormLabel>
                              <FormControl>
                                <MultiDateSelector onChangeHandler={field.onChange} value={field.value} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="inventory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Inventory (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Inventory" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <div className="grid gap-3">
                <Card className="overflow-hidden">
                  <FormField
                    control={form.control}
                    name="imageUrls"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FileUploader onFieldChange={field.onChange} imageUrls={field.value || []} setFiles={setFiles} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Card>
              </div>
            </div>
          </div>
        </form>
      }
    </Form>
  );
};

export default ActivityForm;
