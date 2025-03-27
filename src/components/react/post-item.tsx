
type PostItemProps = {
  post: any;
  isSelected?: boolean;
};

export function PostItem({ post, isSelected }: PostItemProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 group ${
        isSelected ? "bg-gradient-to-r from-gray-100 to-transparent -mx-2 px-2 border-l-2 border-l-accent/50" : ""
      }`}
    >
      <a
      target="_blank"
        href={`${post.link}`}
        className="text-gray-400 hover:text-black transition-colors duration-200"
      >
        {post.title.toLowerCase()}
      </a>
      <div className="flex items-center text-sm text-gray-400 shrink-0">
        <span>
          {new Date(post.datePublished)
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
            .toLowerCase()}
        </span>
      </div>
    </div>
  );
}
