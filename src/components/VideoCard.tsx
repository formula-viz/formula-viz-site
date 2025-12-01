import Image from "next/image";
import YouTubeIcon from "./YouTubeIcon";

type VideoCardProps = {
  title: string;
  thumbnail: string;
  link: string;
};

const VideoCard = ({ title, thumbnail, link }: VideoCardProps) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="bg-white dark:bg-[var(--f1-dark)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="w-full relative">
        <Image
          src={thumbnail}
          alt={title}
          width={640}
          height={360}
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="flex items-center">
          <span className="text-[var(--f1-red)] font-medium flex items-center">
            Watch on
            <YouTubeIcon className="ml-1 mr-1" size={16} />
            YouTube
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
