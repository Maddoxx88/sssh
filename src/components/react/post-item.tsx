
type PostItemProps = {
  post: any;
  isSelected?: boolean;
};

export function PostItem({ post, isSelected }: PostItemProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 group ${
        isSelected ? "bg-gradient-to-r from-current/10 to-transparent -mx-2 px-2 border-l-2 border-l-current/50" : ""
      }`}
    >
      <a
        target="_blank"
        href={post.link}
        className="text-current/90 hover:text-current transition-colors duration-200"
      >
        {post.title.toLowerCase()}
      </a>
      <div className="flex items-center text-sm text-current/70 shrink-0">
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
