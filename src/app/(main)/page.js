import Image from "next/image";



const getCategories =async () => {
const  res = await fetch('https://openapi.programming-hero.com/api/news/categories')
const data = await res.json()
return data.data;
}


export default async function Home() {
  const categories = await getCategories()
  console.log(categories.news_category, 'categories');
  return (
  <div className="grid grid-cols-12 gap-5 container mx-auto my-12">
  <div className=" col-span-3">
  <h2 className="font-bold text-xl">

  All Categories
  </h2>
  <ul className="flex flex-col gap-3 mt-5">

  {
    categories.news_category.map(category =>{
      return <li key={category.category_id} className="bg-slate-100 p-2 rounded-md font-bold text-center text-md">{category.category_name}</li>
    } )
  }
  </ul>
  </div>
  <div className="font-bold text-3xl bg-purple-400 col-span-6">All News</div>
  <div className="font-bold text-3xl bg-zinc-400 col-span-3"> Social Icons</div>
  </div>
  );
}
