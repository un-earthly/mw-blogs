export default function CategoryBtn({ category }) {
    return (
        <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl bg-white`}
        >
            {category.name}{" "}
            <span className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px] `}>
                {category.total_blog}
            </span>
        </button>
    )
}
