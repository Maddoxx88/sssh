"use client";

import { useEffect, useRef, useState } from "react";
import { PostItem } from "./post-item";

export function Posts() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItemRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: "My most meaningful initiative ever — Smart India Hackathon",
      datePublished: "12/7/2018",
      link: "https://medium.com/p/22734c17ddfa",
    },
    {
      id: 2,
      title: "Interact with MySQL DB using Android’s WebView & PHP (Part 1: Setup & Preview)",
      datePublished: "8/3/2020",
      link: "https://medium.com/p/1327d3baf277",
    },
    {
      id: 3,
      title: "Interact with MySQL DB using Android’s WebView & PHP (Part 2: Completion)",
      datePublished: "03/15/2020",
      link: "https://medium.com/p/c03b6fd63db4",
    },
    {
      id: 4,
      title: "Convert Adobe XD prototypes to Flutter Widgets [EARLY ACCESS]",
      datePublished: "05/19/2020",
      link: "https://medium.com/p/67cecd40c509",
    },
    {
      id: 5,
      title: "Customize Android Studio UI",
      datePublished: "06/18/2020",
      link: "https://medium.com/p/dfe517d28f44",
    },
    {
      id: 6,
      title: "Welcome to CodeAppRun",
      datePublished: "08/06/2020",
      link: "https://medium.com/p/ab609bebda00",
    },
    {
      id: 7,
      title: "How to get a Dribbble Invite?",
      datePublished: "09/08/2020",
      link: "https://medium.com/p/bcf8767b3baa",
    },
    {
      id: 8,
      title: "A desperate mistake: Update README.md",
      datePublished: "10/03/2020",
      link: "https://medium.com/p/1a912a9fd0a8",
    },
    {
      id: 9,
      title: "Here’s why design tools don’t matter!",
      datePublished: "10/12/2020",
      link: "https://medium.com/p/df7c20f55e96",
    },
    {
      id: 10,
      title: "How Media Query Is Going To Change Your Flutter App",
      datePublished: "09/30/2020",
      link: "https://dev.to/sunitshirke/how-media-query-is-going-to-change-your-flutter-app-4ni0",
    },
    {
      id: 11,
      title: "Introducing microregex - A highly Curated Catalog of RegEx Patterns",
      datePublished: "10/24/2022",
      link: "https://reactplay.hashnode.dev/introducing-microregex-a-highly-curated-catalog-of-regex-patterns",
    },
  ];
  
  

  const sortedPosts = blogPosts.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const filteredPosts = sortedPosts.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const scrollSelectedIntoView = () => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearching) {
        e.preventDefault();
        setIsSearching(true);
      } else if (e.key === "Escape" && isSearching) {
        setIsSearching(false);
        setSearchQuery("");
        document.activeElement instanceof HTMLElement &&
          document.activeElement.blur();
      } else if (
        isSearching &&
        (((e.ctrlKey || e.metaKey) && (e.key === "j" || e.key === "k")) ||
          e.key === "ArrowDown" ||
          e.key === "ArrowUp")
      ) {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const isDownward =
            e.key === "ArrowDown" ||
            ((e.ctrlKey || e.metaKey) && e.key === "j");

          const newIndex = isDownward
            ? prev < filteredPosts.length - 1
              ? prev + 1
              : prev
            : prev > 0
            ? prev - 1
            : prev;

          scrollSelectedIntoView();
          return newIndex;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearching, filteredPosts, selectedIndex]);

  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-2xl font-bold mb-8 font-inter">
        <span className="mr-2">|</span>
        <span className="">blog</span>
      </h1>
      <p className="hidden sm:block text-sm text-gray-400 mb-8 font-mono">
        press{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">
          /
        </kbd>{" "}
        to search • use{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">
          ctrl / ⌘ j
        </kbd>{" "}
        and{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">
          ctrl / ⌘ k
        </kbd>{" "}
        or{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">
          ↑
        </kbd>
        and{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">
          ↓
        </kbd>{" "}
        to navigate
        • press{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">
          esc
        </kbd>{" "}
        to escape
      </p>
      {isSearching && (
        <div className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto backdrop-blur-sm border border-gray-800 p-2">
          <div className="flex items-center text-gray-400">
            <span className="text-accent mr-2">/</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none"
              autoFocus
              placeholder="search posts..."
              aria-label="Search posts"
              role="searchbox"
              aria-expanded={filteredPosts.length > 0}
              aria-controls="search-results"
              aria-activedescendant={
                isSearching && filteredPosts.length > 0
                  ? `post-${filteredPosts[selectedIndex].slug}`
                  : undefined
              }
            />
          </div>
        </div>
      )}

      <div className="space-y-8 sm:space-y-4">
        {filteredPosts.map((item, index) => (
          <div
            key={item.title}
            ref={
              isSearching && index === selectedIndex ? selectedItemRef : null
            }
          >
            <PostItem
              post={item}
              isSelected={isSearching && index === selectedIndex}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
