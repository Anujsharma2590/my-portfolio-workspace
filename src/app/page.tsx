import { MapPin, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Accordion } from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

        <p className="mt-6 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed text-left">
          I’m a{" "}
          <span className="font-semibold text-foreground">
            Frontend Engineer
          </span>{" "}
          who enjoys turning complex problems into simple, elegant solutions. I
          focus on building fast, scalable, and user-friendly applications with
          clean design and great performance. I care deeply about UI/UX, design
          systems, and efficient workflows.
          <span className="block ">
            I’m currently building a custom component library called{" "}
            <span className="inline-flex items-center gap-0.5 font-semibold text-foreground">
              <a
                href="https://www.npmjs.com/package/@reacture/core"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
                aria-label="View @reacture/core on npm"
                title="@reacture/core on npm"
              >
                @reacture/core
                <ArrowUpRight className="w-4 h-4 inline-block" />
              </a>
            </span>
            , with an extensible design system — complete with theming,
            accessibility, and a focus on developer experience.
          </span>
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
        <h2 className="text-left scroll-m-20 text-l font-bold tracking-tight sm:text-xl mb-4 mt-8">
          Work Experience
        </h2>

        <section className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-between items-start gap-4 text-left ">
                <div className="flex justify-between w-full">
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="min-w-[40px]">
                      <Image
                        src="/travclan-logo.jpeg"
                        alt="Company Logo"
                        width={48}
                        height={48}
                        className="rounded-sm"
                      />
                    </div>

                    {/* Left Content */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground hover:underline">
                        <span className="font-semibold">
                          Software Engineer-2
                        </span>
                        <span className="mx-1">–</span>
                        <span>Frontend</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">Qapita</p>
                      <p className="text-xs text-muted-foreground">
                        New Delhi, IND
                      </p>
                    </div>
                  </div>

                  {/* Right-aligned Time */}
                  <div className="text-xs text-muted-foreground whitespace-nowrap">
                    Nov 2024 &ndash; March 2025
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2 text-left">
                  <li>
                    Led the development of{" "}
                    <span className="font-medium text-foreground">
                      Holiday Widget
                    </span>
                    , a JavaScript SDK that enabled 200+ partners to embed quote
                    generation flows into their websites within the first month
                    — improving usability and significantly reducing support
                    tickets.
                  </li>

                  <li>
                    Led redesign of equity management dashboard with 25%
                    performance boost.
                  </li>
                  <li>
                    Collaborated closely with backend team to integrate GraphQL
                    APIs.
                  </li>
                  <li>
                    Developed internal micro frontend apps using Appshell
                    architecture.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Repeat for other experiences */}
          </Accordion>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-between items-start gap-4 text-left ">
                <div className="flex justify-between w-full">
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="min-w-[40px]">
                      <Image
                        src="/travclan-logo.jpeg"
                        alt="Company Logo"
                        width={48}
                        height={48}
                        className="rounded-sm"
                      />
                    </div>

                    {/* Left Content */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground hover:underline">
                        <span className="font-semibold">
                          Software Engineer-1
                        </span>
                        <span className="mx-1">–</span>
                        <span>Frontend</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">Qapita</p>
                      <p className="text-xs text-muted-foreground">
                        New Delhi, IND
                      </p>
                    </div>
                  </div>

                  {/* Right-aligned Time */}
                  <div className="text-xs text-muted-foreground whitespace-nowrap">
                    April 2024 &ndash; Oct 2024
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2 text-left">
                  <li>
                    Built scalable, component-based architecture using React and
                    Zustand.
                  </li>
                  <li>
                    Led redesign of equity management dashboard with 25%
                    performance boost.
                  </li>
                  <li>
                    Collaborated closely with backend team to integrate GraphQL
                    APIs.
                  </li>
                  <li>
                    Developed internal micro frontend apps using Appshell
                    architecture.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Repeat for other experiences */}
          </Accordion>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-between items-start gap-4 text-left ">
                <div className="flex justify-between w-full">
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="min-w-[40px]">
                      <Image
                        src="/qapita-logo.jpeg"
                        alt="Company Logo"
                        width={48}
                        height={48}
                        className="rounded-sm"
                      />
                    </div>

                    {/* Left Content */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground hover:underline">
                        <span className="font-semibold">Software Engineer</span>
                        <span className="mx-1">–</span>
                        <span>Frontend</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">Qapita</p>
                      <p className="text-xs text-muted-foreground">
                        Hyderabad, IND
                      </p>
                    </div>
                  </div>

                  {/* Right-aligned Time */}
                  <div className="text-xs text-muted-foreground whitespace-nowrap">
                    Dec 2021 &ndash; March 2024
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2 text-left">
                  <li>
                    Built scalable, component-based architecture using React and
                    Zustand.
                  </li>
                  <li>
                    Led redesign of equity management dashboard with 25%
                    performance boost.
                  </li>
                  <li>
                    Collaborated closely with backend team to integrate GraphQL
                    APIs.
                  </li>
                  <li>
                    Developed internal micro frontend apps using Appshell
                    architecture.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Repeat for other experiences */}
          </Accordion>
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
