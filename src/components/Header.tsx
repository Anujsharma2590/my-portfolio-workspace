"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { WordRotate } from "./magicui/word-rotate";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const copyEmail = () => {
    navigator.clipboard.writeText("aanuj.sharma2590@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-border bg-background/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          {/* Logo + Name + Email Section */}
          <div className="flex items-center gap-2 z-40">
            <Link href="/" className="flex z-40 font-semibold">
              <Image
                src="/doodle.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full ring-2 ring-gray-300 shadow-md hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <div className="flex flex-col">
              <span className="font-semibold text-base">Anuj Sharma</span>
              <div className="flex items-center space-x-1">
                <span className="text-xs text-muted-foreground">
                  aanuj.sharma2590@gmail.com
                </span>
                <button
                  onClick={copyEmail}
                  className="text-gray-500 hover:text-black"
                >
                  <Copy className="h-4 w-4" />
                </button>
                {copied && (
                  <span className="text-xs text-green-600 ml-1">Copied!</span>
                )}
              </div>
            </div>
          </div>

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className:
                  pathname === "/"
                    ? "text-primary font-semibold underline "
                    : "text-muted-foreground",
              })}
            >
              Home
            </Link>

            <Link
              href="/projects-skills"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className:
                  pathname === "/projects-skills"
                    ? "text-primary font-semibold underline w-[80px]"
                    : "w-[80px]",
              })}
            >
              <WordRotate words={["Projects", "Skills"]} duration={4000} />
            </Link>

            <Link
              href="/articles"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className:
                  pathname === "/articles"
                    ? "text-primary font-semibold underline "
                    : "foreground",
              })}
            >
              Articles
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
