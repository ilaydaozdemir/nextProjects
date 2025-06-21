// components/StartupCard.tsx
import Image from "next/image";

export type StartupCardType = {
  _id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  views: number;
  author: {
    _id: number;
    name: string;
  };
  _createdAt: string;
};

type Props = {
  post: StartupCardType;
};

export default function StartupCard({ post }: Props) {
  return (
    <li className="border rounded-lg shadow-sm overflow-hidden bg-white flex flex-col">
      <div className="w-full h-[200px] relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4 space-y-2 flex-grow flex flex-col">
        <span className="text-xs uppercase text-gray-500">{post.category}</span>
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <p className="text-sm text-gray-700 flex-grow">{post.description}</p>
        <div className="text-sm text-gray-500 mt-2 flex justify-between">
          <span>👤 {post.author.name}</span>
          <span>👁️ {post.views}</span>
        </div>
      </div>
    </li>
  );
}
