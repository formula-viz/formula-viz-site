"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import VideoCard from "@/components/VideoCard";
import { useEffect, useState } from "react";
import { fetchYoutubeVideos } from "@/lib/youtube";

// Define the type for your video data
type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
};

const Home = () => {
  const [featuredVideos, setFeaturedVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setIsLoading(true);
        // You need to use the channel ID instead of the handle
        // For example UC-lHJZR3Gqxm24_Vd_AJ5Yw is PewDiePie's channel ID
        const channelId = "UC-your-channel-id";
        const videos = await fetchYoutubeVideos(channelId, 3);
        setFeaturedVideos(videos);
      } catch (err) {
        console.error("Failed to fetch videos:", err);
        setError("Failed to load the latest videos. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    getVideos();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-16 px-8 bg-gray-50 dark:bg-[#111119]">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Latest Qualifying Visualizations</h2>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--f1-red)]"></div>
            </div>
          ) : error ? (
            <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  date={video.publishedAt}
                  videoId={video.id}
                  description={video.description}
                />
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/videos" className="f1-button">
              View All Videos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">How It Works</h2>
              <p className="mb-6">
                Formula Viz uses advanced data processing algorithms to
                automatically generate compelling visualizations of Formula 1
                qualifying sessions. Here&apos;s how it works:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--f1-red)] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <strong>Data Collection</strong>: We gather live timing data
                    directly from F1 sources.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--f1-red)] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <strong>Processing</strong>: Our algorithms analyze the data
                    to identify key moments and performance trends.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--f1-red)] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <strong>Visualization</strong>: The data is transformed into
                    dynamic graphics that show position changes, lap times, and
                    more.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--f1-red)] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <strong>Rendering</strong>: The final video is automatically
                    rendered and uploaded to YouTube for fans to enjoy.
                  </div>
                </li>
              </ul>

              <Link
                href="/about"
                className="mt-8 inline-block f1-secondary-button"
              >
                Learn More About the Technology
              </Link>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/how-it-works.jpg"
                alt="Formula Viz data visualization process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[var(--f1-dark)] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our YouTube Channel
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Never miss a qualifying visualization! Subscribe to our YouTube
            channel to get notified as soon as new videos are published.
          </p>
          <a
            href="https://youtube.com/channel/your-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 f1-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
