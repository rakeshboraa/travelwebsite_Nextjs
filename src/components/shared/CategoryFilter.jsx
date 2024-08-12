import useSWR from 'swr';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getallCategories } from "@/lib/actions/category.action";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const fetcher = async () => {
    const categoryList = await getallCategories();
    return categoryList || [];
};

const CategoryFilter = () => {
    const { data: categories = [], error } = useSWR('categories', fetcher);
    const router = useRouter();
    const searchParams = useSearchParams();

    const onSelectCategory = (category) => {
        let newUrl = '';
        if (category && category !== 'All') {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: category
            });
        } else {
            newUrl = removeKeysFromQuery({
                params: searchParams.toString(),
                keysToRemove: ['category']
            });
        }

        router.push(newUrl, { scroll: false });
    };

    return (
        <Select onValueChange={(value) => onSelectCategory(value)}>
            <SelectTrigger className="select-field w-[20%]">
                <SelectValue placeholder="Filter By Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="All" className="select-item p-regular-14">All</SelectItem>
                {categories.map((category) => (
                    <SelectItem value={category.name} key={category._id} className="select-item p-regular-14">
                        {category.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default CategoryFilter;
