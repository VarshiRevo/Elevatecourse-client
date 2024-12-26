'use client'
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";
import { CTAButton } from './CTAButton';
import { UserStats } from './UserStats';

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  const [search, setSearch] = useState("");
  const router = useRouter()

  const handleSearch = () => {
    if (search === "") {
      return
    } else {
      router.push(`/courses?title=${search}`);
    }
  }


  return (
    <>
    
    <section className="flex flex-col justify-center pt-10 pb-20 w-full max-md:max-w-full">
      <div className="flex flex-col self-center max-w-full w-[1276px]">
        <header className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="flex flex-col w-full max-w-9xl px-20 max-md:max-w-full">
            <h1 className="text-7xl font-black tracking-tighter leading-none text-black bg-clip-text bg-[linear-gradient(90deg,#EA728D_67.21%,#EF9EAE_71.33%,#ECCD43_81.49%,#42C3E5_85.63%)] max-md:max-w-full max-md:text-4xl">
              Master New Skills with <span className="text-fuchsia-600">Elevate</span>🚀
            </h1>
            <p className="mt-6 text-xl font-medium capitalize text-neutral-500 max-md:max-w-full">
              With expert instructors and interactive content, with high-quality learning experience all levels,
              access personalized learning paths and achieve your educational goals.
            </p>
          </div>
        </header>

        <div className="flex flex-wrap gap-8 items-center px-20 self-start mt-8 max-md:max-w-full">
          <div className="flex items-center border rounded-full p-2 w-[400px] max-w-lg">
            <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
              <input
                type="search"
                placeholder="Search Courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent  dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
              />
              
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 cursor-pointer" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

         <Link href="/courses">
         <CTAButton
            text="Get Started"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d12551e95d461b3d630ded4505aa6ec1dbd52d633ed06a0fd76d7ab6eb6dc2f0?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e"
            variant="solid"
          />
         </Link>
          <UserStats
            count="12k+"
            label="using the app"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/448cdd46043dbb9ed3ffee86b2ac2efb46420fc0b02253f137970a4375f60f2b?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e"
          />
        </div>
      </div>

      <div className="flex flex-col mt-16 w-full px-10 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d90dba1a3127921c44016c5233b7a7fd72c610c9d8e4931aae7d1f963021a6?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e"
          alt="Company logos ticker"
          className="object-contain w-full aspect-[3.47] max-md:max-w-full"
        />
      </div>
    </section>
    </>
  );
};

export default Hero;
