import axios from "axios";
import { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://hr.mediusware.xyz/api/website/blogs/categories/')
      .then(res => { setCategories(res.data); console.log(res) })
    axios.get('https://hr.mediusware.xyz/api/website/blogs/')
      .then(res => { setBlogs(res.data.results); console.log({ res2: res }) })
  }, [])
  return (
    <div className="container">
      <div className="flex items-center justify-between gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">

        <div>
          {categories?.map((c) => <CategoryBtn category={c} key={c.id} />)}
        </div>
        <div>
          {
            blogs?.map(b => <BlogCard key={b.id} blog={b}></BlogCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
