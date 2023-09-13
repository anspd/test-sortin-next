"use client";

import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import BlogSection from "./BlogSection";
import ContactUsSection from "./ContactUsSection";
import Footer from "@/components/Footer";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className=" lg:snap-mandatory bg-black">
      <section className="lg:snap-always lg:snap-center">
        <Hero />
      </section>
      <section className="lg:snap-always lg:snap-center">
        <AboutSection />
      </section>
      <section className="lg:snap-always lg:snap-center ">
        <TeamSection />
      </section>
      <section className="lg:snap-always lg:snap-center">
        <BlogSection />
      </section>
      <section className="lg:snap-always lg:snap-center">
        <ContactUsSection />
      </section>
      
    </div>
  );
};

export default LandingPage;
