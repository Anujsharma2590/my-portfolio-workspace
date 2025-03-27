import { MapPin, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-14 sm:mt-20 flex flex-col items-center text-center">
      <div>
        <div className="flex items-center gap-4 justify-start">
          <Image
            src="/hi-doodle.gif"
            width={100}
            height={100}
            alt="Hello Doodle"
          />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            I&apos;m Anuj Sharma
            <div className="mt-2 flex items-center font-sans font-medium text-sm text-muted-foreground gap-2">
              <MapPin className="w-4 h-4 font-semibold" />
              <span>New Delhi, IND</span>
            </div>
          </h1>
        </div>

        <p className="mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed text-left">
          I’m a problem-solver at heart, crafting scalable and high-performance
          applications that seamlessly blend functionality with user experience.
          Passionate about design systems, performance optimization, and
          intuitive interfaces. Currently upskilling in Generative AI to explore
          intelligent, adaptive systems.
        </p>

        <div className="mt-8 flex flex-wrap justify-start gap-4">
          <Link
            href="https://www.linkedin.com/in/anujsharma2590/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "flex items-center gap-2 px-4 py-2",
            })}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="https://github.com/Anujsharma2590"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "flex items-center gap-2 px-4 py-2",
            })}
          >
            <Github className="w-4 h-4" />
            GitHub
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
