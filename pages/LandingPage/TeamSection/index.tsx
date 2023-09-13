"use client"
import { motion } from "framer-motion";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "John Doe",
    role: "CTO",
    imageUrl: "https://source.unsplash.com/random/300x300/?people",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Johnson",
    role: "Software Engineer",
    imageUrl: "https://source.unsplash.com/random/300x300/?people",
  },
  {
    name: "Emily Brown",
    role: "Product Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "David Wilson",
    role: "Designer",
    imageUrl: "https://source.unsplash.com/random/300x300/?people",
  },
  {
    name: "Sarah Davis",
    role: "HR Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Chris Lee",
    role: "Sales Manager",
    imageUrl: "https://source.unsplash.com/random/300x300/?people",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function TeamSection() {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-black relative isolate py-2 mx-auto px-6 lg:h-screen lg:grid lg:place-items-center">
      <div className="mx-auto grid max-w-2xl lg:max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#70d9dd] sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person, i) => (
            <li key={i}>
              <motion.div variants={item} className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-[#70d9dd]">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            </li>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
