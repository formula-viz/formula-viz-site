import Image from "next/image";
import Link from "next/link";

type VideoCardProps = {
  title: string;
  thumbnail: string;
  date: string;
  videoId: string;
  description: string;
};

const VideoCard = ({
  title,
  thumbnail,
  date,
  videoId,
  description,
}: VideoCardProps) => {
  return (
    <div className="bg-white dark:bg-[var(--f1-dark)] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <Link href={`/videos/${videoId}`}>
        <div className="relative aspect-video">
          <Image src={thumbnail} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[var(--f1-red)] bg-opacity-80 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/videos/${videoId}`}>
          <h3 className="font-bold text-xl mb-2 hover:text-[var(--f1-red)] transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-3">{date}</p>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
          {description}
        </p>
        <Link
          href={`/videos/${videoId}`}
          className="mt-4 inline-block text-[var(--f1-red)] font-medium hover:underline"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
