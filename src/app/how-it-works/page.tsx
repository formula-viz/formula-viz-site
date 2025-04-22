"use client";
import React, { useState } from "react";
import Image from "next/image";

// Dropdown component for process steps
const ProcessStep = ({ title, children, icon, moduleImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-[#1a1a24] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between focus:outline-none"
      >
        <div className="flex items-center">
          <span className="text-[var(--fviz-cyan)] mr-3">{icon}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {moduleImage && (
            <div className="md:w-1/3">
              <Image
                src={moduleImage}
                alt={`${title} module structure`}
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
          <div className={moduleImage ? "md:w-2/3" : "w-full"}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-white">
      {/* Banner Image Section */}
      <section className="w-full relative">
        <Image
          src="/images/formula-viz-motion-blur-banner.png"
          alt="Formula Viz Banner"
          width={1920}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Analytics and Problem Statement Section */}
      <section className="py-16 bg-[var(--f1-dark)]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 flex items-center">
                Why
                <Image
                  src="/images/formula-viz-icon-circled-base.png"
                  alt="Formula Viz Icon"
                  width={35}
                  height={35}
                  className="mx-3"
                />
                formula-viz?
              </h2>
              <p className="text-lg mb-6">
                In Formula 1{" "}
                <span className="text-[var(--fviz-cyan)]">Qualifying</span>{" "}
                sessions, drivers compete for starting position in the race.
                However, the drivers are on the track at different times, making
                it hard to compare their performances.
              </p>
              <p className="text-lg">
                formula-viz is an automated, end-to-end application which takes
                one or several configuration files as inputs then generates and
                automatically uploads 4k videos to Youtube as quickly as 3 hours
                after the qualifying session occurs.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                40,000+ Monthly Views
              </h3>
              <div className="relative">
                <Image
                  src="/images/monthly-views.png"
                  alt="Formula Viz Monthly Analytics"
                  width={350}
                  height={200}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Architecture Image */}
      <section className="py-16 bg-[#0e0e14]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex justify-center">
            <Image
              src="/images/project-architecture.png"
              alt="Formula Viz Architecture"
              width={900}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Process Sections */}
      <section className="py-16 bg-[var(--f1-dark)]">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Python Pipeline
          </h2>
          <ProcessStep
            title="1. Data Processing"
            icon="🔍"
            moduleImage="/images/modules/load-data.png"
          >
            <p className="mb-4">
              Official F1 telemetry data is fetched, processed, and prepared for
              visualization
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Telemetry data interpolation for smooth transitions</li>
              <li>
                Car animation data generation (position, wheel rotation,
                steering angle)
              </li>
              <li>Identification of straights for fast-forwarding sequences</li>
            </ul>
          </ProcessStep>

          <ProcessStep
            title="2. 3D Rendering"
            icon="🎮"
            moduleImage="/images/modules/render.png"
          >
            <p className="mb-4">
              3D visualization is built in stages to simulate a merged
              qualifying session.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Track generation from track points, with alternating curbstones
                calculated based on curve angles
              </li>
              <li>
                Driver objects added and animated frame by frame by loading
                team-specific 3D car models and helmets
              </li>
              <li>
                Status track overlay and formula-viz watermark integration
              </li>
            </ul>
            <div className="mt-4">
              <Image
                src="/images/render-preview.png"
                alt="3D Rendering Preview"
                width={375}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </ProcessStep>

          <ProcessStep
            title="3. Thumbnail Creation"
            icon="🖼️"
            moduleImage="/images/modules/thumbnail.png"
          >
            <p className="mb-4">
              Eye-catching thumbnails are automatically generated using the
              qualifying results.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Car positioning based on the session results</li>
              <li>
                Image mode determined by config, supporting 0, 1, or 2 driver
                images
              </li>
            </ul>
            <div className="mt-4">
              <Image
                src="/images/thumbnails/max-vs-all.png"
                alt="Max vs All Thumbnail Example"
                width={375}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </ProcessStep>

          <ProcessStep
            title="4. Widget Creation"
            icon="🔧"
            moduleImage="/images/modules/widgets.png"
          >
            <p className="mb-4">
              Custom UI elements with additional context and information,
              generated frame-by-frame.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Real-time throttle and braking indicators</li>
              <li>DRS activation status visualization</li>
              <li>Dynamic sector time displays</li>
              <li>Team color-coded driver tags</li>
            </ul>
            <div className="mt-4">
              <Image
                src="/images/widget.png"
                alt="Formula Viz Widget"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </ProcessStep>

          <ProcessStep
            title="5. Video Processing"
            icon="🎬"
            moduleImage="/images/modules/video-edit.png"
          >
            <p className="mb-4">
              All elements are combined into one video for upload.
            </p>
            <ul className="list-disc pl-6">
              <li>Widgets are combined with rendered video</li>
              <li>Race timer</li>
              <li>Background music</li>
            </ul>
          </ProcessStep>

          <ProcessStep
            title="6. Automatic YouTube Upload"
            icon="📤"
            moduleImage="/images/modules/socials-upload.png"
          >
            <p className="mb-4">
              Once processing is complete, videos are automatically uploaded to
              YouTube with metadata based on configuration file parameters.
            </p>
            <ul className="list-disc pl-6">
              <li>Title from configuration file</li>
              <li>Tags and category assignment</li>
              <li>Scheduled publishing time determined by config</li>
            </ul>
          </ProcessStep>
        </div>
      </section>

      {/* Open Source Section */}
      {/* <section className="py-16 bg-[#0e0e14]">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Open Source Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#1a1a24] p-6 rounded-lg">
              <h3 className="font-medium mb-2">Python</h3>
              <p className="text-sm text-gray-400">Data processing</p>
            </div>
            <div className="bg-[#1a1a24] p-6 rounded-lg">
              <h3 className="font-medium mb-2">Matplotlib</h3>
              <p className="text-sm text-gray-400">Core visualization</p>
            </div>
            <div className="bg-[#1a1a24] p-6 rounded-lg">
              <h3 className="font-medium mb-2">FFmpeg</h3>
              <p className="text-sm text-gray-400">Video encoding</p>
            </div>
            <div className="bg-[#1a1a24] p-6 rounded-lg">
              <h3 className="font-medium mb-2">Next.js</h3>
              <p className="text-sm text-gray-400">Web platform</p>
            </div>
            <div className="bg-[#1a1a24] p-6 rounded-lg">
              <h3 className="font-medium mb-2">Pandas</h3>
              <p className="text-sm text-gray-400">Data manipulation</p>
            </div>
            <div className="bg-[#1a1a24] p-6 rounded-lg">
              <h3 className="font-medium mb-2">YouTube API</h3>
              <p className="text-sm text-gray-400">Video publishing</p>
            </div>
            <div className="bg-[#1a1a24] p-6 rounded-lg">
              <h3 className="font-medium mb-2">NumPy</h3>
              <p className="text-sm text-gray-400">Numerical computing</p>
            </div>
            <div className="bg-[#1a1a24] p-6 rounded-lg">
              <h3 className="font-medium mb-2">Tailwind CSS</h3>
              <p className="text-sm text-gray-400">Web styling</p>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-400">
            This project wouldn&apost be possible without the incredible open
            source community and their contributions.
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default HowItWorksPage;
