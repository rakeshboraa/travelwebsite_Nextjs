import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryformSchema } from "@/lib/validators";
import { categoryDefaultValues } from "@/constants";
import { createCategories } from "@/lib/actions/category.action";
import Loading from "../dashboard/loading";

const CategoryForm = ({ initialData = {}, onSave, isEditMode = false }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initialValues = initialData && isEditMode
    ? { ...initialData }
    : categoryDefaultValues;

  const form = useForm({
    resolver: zodResolver(CategoryformSchema),
    defaultValues: initialValues
  });

  const handleToast = (message) => {
    toast({
      title: message,
      className: "bg-green-400 border border-gray-500 text-white rounded-md shadow-lg p-4"
    });
  };

  async function onSubmit(values) {
    setLoading(true);
    try {
      const newCategory = await createCategories({
        categories: { ...values },
      });
      if (newCategory) {
        form.reset();
        handleToast("Category Added Successfully");
        router.push('/dashboard/category');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      {loading ? <Loading /> :
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-[30px] grid flex-1 mt-4 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              {isEditMode ? "Edit Category" : "Add New Category"}
            </h1>
          </div>
          <div className="grid gap-4 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardContent className="mt-6 p-10">
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Name" {...field} />
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
                              <Textarea placeholder="Description" id="description"
                                className="min-h-32" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                              <Input placeholder="Slug" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="">
                      <Button type="submit" size="sm">Save Changes</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      }
    </Form>
  );
};

export default CategoryForm;
