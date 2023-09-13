import React from 'react'
import "./styles.css";
import Image from 'next/image';
import blogImage from '@/src/assets/ocean.jpeg'

interface ITruncateProps {
    text:string;
    maxLength:number;
    styles?:string;
}


type Props = {}

const BlogCard = ({ blog }: any) => {
    const { title, author, time, description } = blog;
    return (
      <div className="relative max-w-[350px] text-white h-[450px] max-sm:max-w-[80%] max-sm:mx-auto rounded-lg overflow-hidden  ease-in hover:shadow-[0px_40px_70px_-40px_#70d9dd] blog-card">
        <div className="flex flex-col before-hover">
          <Image
            src={blogImage}
            className="w-[100%] h-[130px] object-cover"
            alt="ocean"
            width={300}
            height={300}
          />
          <div className="flex-1 flex flex-col justify-between p-10">
            <div>
              <TruncateText text={title} maxLength={60} styles="text-3xl font-light"/>
              <p className="font-bold mt-4">{author}</p>
            </div>
          </div>
        </div>
        <div className="after-hover h-full">
          <div className="h-full p-10">
            <p className="text-3xl font-light">{title}</p>
            <p className="font-bold my-4">{author}</p>
            <TruncateText text={description} maxLength={150} styles="font-medium"/>
          </div>
        </div>
        <span className="absolute bottom-5 left-10 bg-white text-black py-2 px-4 rounded-full w-fit time-box ">
          {time} Read
        </span>
      </div>
    );
  };

export default BlogCard

const TruncateText = ({ text, maxLength,styles }: ITruncateProps) => {
    return (
      <p className={styles}>{text.length <= maxLength ? text : text.slice(0, maxLength) + "..."}</p>
    );
  };