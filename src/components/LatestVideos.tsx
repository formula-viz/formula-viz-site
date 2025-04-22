"use client";

import VideoCard from "@/components/VideoCard";

// Define the type for your video data
type Video = {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
};

// Sample video data
const featuredVideos: Video[] = [
  {
    id: "yuki-max",
    title:
      "How close Yuki was to Verstappen in his first Red Bull Quali, Japan 2025",
    thumbnail: "/images/thumbnails/yuki-max.jpg",
    link: "https://youtu.be/G2cZo9oBgME",
  },
  {
    id: "piastri-max",
    title: "How Verstappen beat Piastri by just 0.01s, Saudi Quali 2025",
    thumbnail: "/images/thumbnails/piastri-max.jpg",
    link: "https://youtu.be/DJPkXmY2o6Y",
  },
  {
    id: "stroll-alonso",
    title: "Is Stroll really that bad? Comparison to Alonso, Saudi Quali 2025",
    thumbnail: "/images/thumbnails/stroll-alonso.jpg",
    link: "https://youtu.be/ehbxpQCYtBE",
  },
];

const LatestVideos = () => {
  return (
    <section className="py-16 px-8 bg-gray-50 dark:bg-[#111119]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Featured Videos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              link={video.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
