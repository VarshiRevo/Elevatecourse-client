import * as React from 'react';
import { FeatureCard } from './FeatureCard';
import { AddOn } from './AddOn';
import Link from 'next/link';
const featureCards = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/592a6d6456c650a656f59efdaa6645db49b048ec66becb34ac6c1c5ca85597be?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
        title: "Learn at your own pace with hands-on creative classes.",
        description: "Looking to expand your skills and explore your creativity? Our hands-on creative classes are the perfect way to learn at your pace.",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eeaeaafbae0fb141cd306ca3143b6c5855668ea935c74e54142420fe0d6a716c?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
        title: "CourseCo teachers are everyday creatives and professionals who want to share their passion.",
        description: "At CourseCo, we believe that everyone has something to teach and share with the world. Our teachers are not just experts in their field.",
    }
];

const addOns = [
    { text: "Get Certificate", backgroundColor: "bg-fuchsia-200" },
    { text: "Amazing Instructor", backgroundColor: "bg-purple-300" },
    { text: "Video lessons", backgroundColor: "bg-purple-400" },
    { text: "Lifetime Support", backgroundColor: "bg-violet-400" }
];

export const CurriculumSection: React.FC = () => {
    return (
        <section className="flex flex-col justify-center items-center px-20 py-16 w-full">
            <div className="flex flex-col w-full max-w-[1275px]">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-5xl font-bold leading-tight text-black">
                            New Skills with SuperCode <br />
                            A Detailed Look at Our Curriculum
                        </h1>
                    </div>
                    <div className="flex flex-col items-start gap-2 md:ml-10 mt-4 md:mt-0">
                        <p className="text-gray-500 text-left text-base">
                            with real world projects to <br />
                            create online classes
                        </p>
                        <Link href="/courses">
                        <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full">
                            Get Started
                            <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2da99648aa9068cf2b4fb5e64fa1ef895ce66079b28bee8d8ac8253e8c1f7046?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e" alt="arrow" className="w-4 h-4" />
                            </div>
                        </button>

                        </Link>
                    </div>

                </header>

                {/* Feature Cards Section */}
                <div className="flex flex-wrap gap-8 justify-center items-center">
                    {featureCards.map((card, index) => (
                        <FeatureCard key={index} {...card} />
                    ))}
                </div>

                {/* Add-on Section */}
                <div className="flex flex-wrap gap-6 justify-center items-center mt-16">
                    <h2 className="text-3xl font-bold">
                        Our Features <br /> Special For You
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {addOns.map((addon, index) => (
                            <AddOn key={index} {...addon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
