"use client";

import { useRetrieveCategoryListQuery } from "@/redux/features/postApiSlice";
import Link from "next/link";
import { FaRegCircleDot } from "react-icons/fa6";

export default function CategoryList({ selectedCat = null }) {
  let { data: categories, isLoading } = useRetrieveCategoryListQuery();
  if (isLoading) return <div>Loading...</div>;
  categories = categories?.categories;

  const handleSelectCategory = (e, category) => {
    console.log(selectedCat, category);
    if (selectedCat.id == category.id) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="flex flex-col justify-start">
      <h2 className="text-lg py-3 font-semibold text-gray-800 border-b-2 mb-3">
        Categories
      </h2>
      {categories.map((category) => (
        <Link
          onClick={(e) => handleSelectCategory(e, category)}
          href={`/category/${category.slung}`}
          key={`cat_${category.id}`}
          className={`${
            selectedCat &&
            selectedCat.id == category.id &&
            "bg-gray-300/60 my-0.5"
          } hover:bg-gray-300/60 flex gap-1.5 items-center text-gray-800 no-underline px-3 py-2 rounded-md transition duration-200 ease-in-out`}
        >
          <FaRegCircleDot size={16} />
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
