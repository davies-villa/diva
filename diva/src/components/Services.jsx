import React from "react";

const Services = () => {
  return (
    <div className="flex h-auto  px-6 lg:px-16 py-6">
      <div className="w-full ">
        <h1 className="text-2xl font-bold font-poppins  mb-8 text-center">
          My <span className="text-purple-500">Services</span>
        </h1>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

          {/*Web Development */}
          <div className="bg-transparent p-6 rounded-lg">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-auto h-16 p-4 text-white shadow-md bg-purple-500 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold font-poppins mb-2">
              Web Development
            </h2>
            <p className="text-base font-lora text-gray-600 text-left">
              I provide{" "}
              <span className="text-purple-500 font-bold">Web Development</span>{" "}
              services tailored to elevate your online presence. Whether you're
              launching a new business or enhancing an existing one, I create
              websites that are fast, visually stunning, and aligned with your
              brand's goals. My expertise in{" "}
              <span className="text-purple-500 font-bold">
                responsive design
              </span>{" "}
              ensures that your site works seamlessly across all devices,
              offering users an exceptional experience.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-transparent p-6 rounded-lg ">
            <div className="mb-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-auto h-16 p-4 text-white shadow-md bg-purple-500 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold font-poppins mb-2">
              UI/UX Design
            </h2>
            <p className="text-base font-lora text-gray-600">
              My <span className="text-purple-500 font-bold">UI/UX Design</span>{" "}
              services focus on creating meaningful connections between your
              brand and your audience. I design{" "}
              <span className="text-purple-500 font-bold">
                intuitive user interfaces
              </span>{" "}
              that enhance usability, ensuring visitors can effortlessly
              navigate your platform. By prioritizing user behavior and
              combining sleek aesthetics with{" "}
              <span className="text-purple-500 font-bold">
                functional design
              </span>
              , I help your brand deliver an engaging and memorable experience.
            </p>
          </div>

          {/* SEO Optimization */}
          <div className="bg-transparent p-6 rounded-lg">
            <div className="mb-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-auto h-16 p-4 text-white shadow-md bg-purple-500 rounded-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold font-poppins mb-2">
              SEO Optimization
            </h2>
            <p className="text-base font-lora text-gray-600 text-left">
              With my{" "}
              <span className="text-purple-500 font-bold">
                SEO Optimization
              </span>{" "}
              services, I empower businesses to achieve greater online
              visibility and reach their target audience effectively. By
              conducting{" "}
              <span className="text-purple-500 font-bold">
                thorough keyword research
              </span>{" "}
              and optimizing on-page elements, I help your website rank higher
              in search engine results. I also focus on{" "}
              <span className="text-purple-500 font-bold">technical SEO</span>{" "}
              improvements, such as enhancing site speed and mobile responsiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
