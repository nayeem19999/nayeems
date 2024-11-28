import { FaBeer,FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
    const { coverImg, author_img, author_name, date, headline, hash_tags, reading_time } = blog
    return (
        <div className="border-2 rounded-lg mb-10">
            <div className="">
                <img style={{ height: '300px' }} className="w-[100%] rounded-lg" src={coverImg} alt="" />
            </div>
            <div className="p-5">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <img src={author_img} alt="" />
                    <div className="">
                        <p>{author_name}</p>
                        <p>{date}</p>
                    </div>

                </div>
                <div>
                    <button className="text-red-600 text-2xl"><FaBookmark></FaBookmark></button>
                    <p>{reading_time}</p>
                </div>
            </div>
            <h1 className="text-3xl font-semibold">{headline}</h1>
            <div>
                {
                    hash_tags.map((tags,index)=><div key={index}><span><a href="">{tags}</a></span></div>)
                }
            </div>
            <button className="text-blue-500">Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;