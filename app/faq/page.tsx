"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ/FAQ";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="FAQ - Elevate"
        description="Elevate is a learning management system for helping programmers."
        keywords="programming,mern"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />

      <br />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a3b67e9d330e73cd318907166fdbf01a919cd7f0e9bf615fbfca4783e7fc13?apiKey=c48d9b50468c496f834245b48efcd26e&"
        alt=""
        className={`object-contain w-full aspect-[5.26] rounded-[30px] max-md:max-w-full `}
      />
      <br /><br />
      <div className="flex w-full items-start justify-between gap-8 px-10">
        <section className="w-2/5 flex flex-col">
          <h1 className="text-5xl font-bold tracking-tight leading-tight mb-6">
            Supercode FAQs
          </h1>
          <p className="text-lg text-neutral-400 mb-8">
            As a Growing placement training agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our candidates.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 text-sm font-bold border border-gray-900 rounded-full">
              More Questions
            </button>
            <button className="text-sm underline text-gray-900">
              Contact Us
            </button>
          </div>
        </section>
        <section className="w-3/5">
          <FAQ />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
