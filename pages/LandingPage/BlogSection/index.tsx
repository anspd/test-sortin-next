import Slider from "@/components/Slider";
import { data } from "../../../components/data";
import "./blogs.css";

export default function BlogSection() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#70d9dd] sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none">
          <Slider slides={data} />
        </div>
      </div>
    </div>
  );
}
