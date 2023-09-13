"use client"
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
const features = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const cont = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const items = {
  hidden: {
    scaleX: "0%",
    opacity: 0,
  },
  show: {
    scaleX: "100%",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export default function AboutSection() {
  return (
    <div className="bg-gradient-to-b from-transparent sm:max-lg:mt-20 to-slate-950 py-10 lg:h-screen lg:grid lg:place-items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-gray-400">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#70d9dd] sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.div
            variants={cont}
            initial="hidden"
            whileInView="show"
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                variants={items}
                key={feature.name}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white origin-top">
                  <feature.icon
                    className="h-5 w-5 flex-none text-[#70d9dd]"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-[#70d9dd]"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
