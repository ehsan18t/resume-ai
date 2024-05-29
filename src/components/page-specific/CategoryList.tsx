"use client";

import { useRetrieveCategoryListQuery } from "@/redux/features/postApiSlice";
import { FaRegCircleDot } from "react-icons/fa6";
import { NavItem } from "../common/nav/NavItem";

export default function CategoryList() {
  let { data: categories, isLoading } = useRetrieveCategoryListQuery();

  if (isLoading) return <div>Loading...</div>;
  categories = categories?.categories;

  return (
    <div className="flex justify-start">
      {categories.map((category) => (
        <NavItem
          to={`/category/${category.slung}`}
          key={`cat_${category.id}`}
          name={category.name}
          icon={FaRegCircleDot}
        />
      ))}
    </div>
  );
}
