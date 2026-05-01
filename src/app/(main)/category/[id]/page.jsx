import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, 'id from : paramsRes');

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);
  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto my-12">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>
      <div className=" text-3xl col-span-6 p-5">
     <h2 className="text-xl font-bold mb-3">   News by Category</h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <NewsCard key={n._id} news={n}>
              
                </NewsCard>
              );
            })
          ) : (
            <h2 className=" font-bold text-4xl text-center my-7">
              No news Found!
            </h2>
          )}
        </div>
      </div>
      <div className="col-span-3">
        {" "}
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
