import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="bg-fuchsia-200  border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group:">
      <div className="flex justify-between text-center items-center">
        <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
          {formatDate(_createdAt)}
        </p>
        <div className="flex justify-between gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex justify-between mt-5 gap-5">
        <div className="flex justify-between mt-5 gap-5">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-semibold line-clamp-1">{title}</h3>
          </Link>
          <Link href={`/user/${authorId}`}>
            <Image
              src="https://placehold.co/600x400"
              alt="placeholder"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
      <div>
        <Link href={`/startup/${_id}`}>
          <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">
            {description}
          </p>
          <img
            src={image}
            alt="placeholder"
            className=" w-full h-[164px] rounded-[10px] object-cover"
          />
        </Link>
        <div className="justify-between gap-3 mt-5">
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <div className="flex justify-end ">
            <Button
              className=" rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3 !important"
              asChild
            >
              <Link href={`/startup/${_id}`}>Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default StartupCard;
