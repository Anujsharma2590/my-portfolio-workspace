import { MapPin, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center text-center">
      <div className="flex items-center gap-3">
        <Image
          src="/hi-doodle.gif"
          width={100}
          height={100}
          alt="Hello Doodle"
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          I&apos;m Anuj Sharma
        </h1>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-2">
          <MapPin height={20} />
          New Delhi, IND
        </p>
      </div>

      <p className="mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
        I’m a problem-solver at heart, crafting scalable and high-performance
        applications that seamlessly blend functionality with user experience.
        Passionate about design systems, performance optimization, and intuitive
        interfaces. Currently upskilling in Generative AI to explore
        intelligent, adaptive systems.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
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
    </MaxWidthWrapper>
  );
}
