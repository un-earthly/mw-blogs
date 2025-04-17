import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import CategoryBtn from "./CategoryBtn";
import BlogCard from "./BlogCard";

const filterEmptyCategories = (blogs) => {
  return blogs.filter(b => b.total_blog !== 0);
};

const AllBlogs = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState({ categories: true, blogs: true });
  const [error, setError] = useState({ categories: null, blogs: null });

  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  const fetchBlogs = async (url) => {
    try {
      setLoading(prev => ({ ...prev, blogs: true }));
      const res = await axios.get(url);
      setBlogs(res.data.results);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
    } catch (err) {
      setError(prev => ({ ...prev, blogs: "Failed to load blogs." }));
    } finally {
      setLoading(prev => ({ ...prev, blogs: false }));
    }
  };

  const handleNext = () => {
    if (nextPageUrl) fetchBlogs(nextPageUrl);
  };

  const handlePrevious = () => {
    if (prevPageUrl) fetchBlogs(prevPageUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading({ categories: true, blogs: true });
      setError({ categories: null, blogs: null });

      try {
        const [categoryRes, blogRes] = await Promise.all([
          axios.get('https://hr.mediusware.xyz/api/website/blogs/categories/'),
          axios.get('https://hr.mediusware.xyz/api/website/blogs/')
        ]);

        const filtered = filterEmptyCategories(categoryRes.data);
        setCategories(filtered);
        setBlogs(blogRes.data.results);
        setNextPageUrl(blogRes.data.next);
        setPrevPageUrl(blogRes.data.previous);

      } catch (err) {
        setError({
          categories: "Failed to load categories.",
          blogs: "Failed to load blogs."
        });
      } finally {
        setLoading({ categories: false, blogs: false });
      }
    };

    fetchData();
  }, []);

  const renderCategories = useMemo(() => {
    if (loading.categories) return <p>Loading categories...</p>;
    if (error.categories) return <p className="text-red-500">{error.categories}</p>;

    return (
      <>
        <div>
          <button className="sm:py-[11px] text-white bg-primary-1 py-1 sm:px-6 px-4 border rounded-xl ">
            All
          </button>
        </div>
        {categories.map(c => <CategoryBtn category={c} key={c.id} />)}
      </>
    );
  }, [categories, loading.categories, error.categories]);

  const renderBlogs = () => {
    if (loading.blogs) return <p>Loading blogs...</p>;
    if (error.blogs) return <p className="text-red-500">{error.blogs}</p>;
    if (blogs.length === 0) return <p>No blogs found.</p>;

    return <div className="grid grid-cols-3 gap-8 ">{blogs.map(b => <BlogCard key={b.id} blog={b} />)}</div>
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl mx-auto leading-8 font-bold ">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        {renderCategories}
      </div>

      <div>
        {renderBlogs()}
      </div>

      <div className="flex items-center justify-center gap-6 mt-10">
        {prevPageUrl && (
          <button
            onClick={handlePrevious}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>

          </button>
        )}

        {nextPageUrl && (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

          </button>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
