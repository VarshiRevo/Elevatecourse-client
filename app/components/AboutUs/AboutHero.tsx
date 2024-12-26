import * as React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center py-10 pr-14 pl-14 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1276px]">
          <h1 className="text-7xl font-black tracking-tighter leading-none text-black bg-clip-text max-md:max-w-full max-md:text-4xl">
            A skill boosting agency Elevate ⚡
          </h1>
          <p className="mt-10 text-xl font-medium capitalize text-neutral-500 max-md:max-w-full">
            Supercode offers expert-led online courses designed to upskill learners. Accessible, flexible, and industry-relevant, we help individuals and professionals achieve their learning goals anytime, anywhere.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 items-center self-start mt-12 max-md:mt-10 max-md:max-w-full">
          <p className="my-auto text-sm font-medium leading-6 text-black w-[150px]">
            Trusted by the world's biggest brands
          </p>
          <div className="flex gap-7 items-start self-stretch my-auto min-w-[240px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa23c51b01cf5c930971ce7e4772bfba1418cbf4f759888a89d72fc6592f4a?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e" alt="Trusted brand logo" className="object-contain shrink-0 aspect-[3.27] w-[108px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6058317fdcb4d8150c33e11922e810aa22ba4a604cd70b3a581b0550a6fc0eb?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e" alt="Trusted brand logo" className="object-contain shrink-0 aspect-[3.48] w-[115px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/50035cbc50e972bd1ebad7659fa3fd1042d159b3961f379a58f2079854aeaffb?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e" alt="Trusted brand logo" className="object-contain shrink-0 aspect-[2.97] w-[98px]" />
          </div>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d5bb59a6d19a9d90464de83bb4c7bf572fb15de4da9758eedc04832da9bbe1?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e" alt="Hero illustration" className="object-contain self-center mt-8 max-w-full aspect-[3.58] w-[1325px]" />
    </section>
  );
};

export default AboutHero;