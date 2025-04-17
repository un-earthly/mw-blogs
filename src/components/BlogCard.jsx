import { ArrowUpRight } from "lucide-react";

export default function BlogCard({ blog }) {
    if (!blog) return null;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const getIntroText = () => {
        if (blog.blog_contexts && blog.blog_contexts.length > 0) {
            const firstContext = blog.blog_contexts[0];
            const plainText = firstContext.description.replace(/<[^>]*>/g, '');
            return plainText.substring(0, 100) + (plainText.length > 100 ? '...' : '');
        }
        return "Read more about this article...";
    };

    return (
        <div className="max-w-md bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group relative h-96">
            <div className="relative h-full">

                <div className="relative h-64 overflow-hidden">
                    <img
                        src={blog.image || "/api/placeholder/600/320"}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <ArrowUpRight />
                        </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm flex items-center z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
                            <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                        </svg>
                        {blog.read_time_minute} min read
                    </div>

                    <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                        {blog.categories && blog.categories.slice(0, 2).map(category => (
                            <span
                                key={category.id}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                            >
                                {category.name}
                            </span>
                        ))}
                        {!blog.categories || blog.categories.length === 0 ? (
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                                Blog
                            </span>
                        ) : null}
                    </div>
                </div>

                <div className="p-5 h-32 relative">
                    <div className="absolute -top-16 z-10 flex items-center px-4 py-3 bg-white rounded-t-xl ">
                        <img
                            src={blog.author?.image || "/api/placeholder/40/40"}
                            alt={blog.author?.full_name}
                            className="h-10 w-10 rounded-full mr-3 object-cover border-2 border-white"
                        />
                        <div>
                            <p className="font-semibold text-gray-800">{blog.author?.full_name}</p>
                            <p className="text-gray-500 text-sm">{formatDate(blog.created_at)}</p>
                        </div>
                    </div>
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {blog.title}
                        </h3>

                        <p className="text-sm text-gray-600 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                            {getIntroText()}
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}