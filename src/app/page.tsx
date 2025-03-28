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
                <div className="max-w-3xl">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2 text-left">
                    <li>
                      Led the development of{" "}
                      <span className="font-medium text-foreground">
                        Holiday Widget
                      </span>
                      , a JavaScript SDK that enabled 200+ partners to embed
                      quote generation flows into their websites within the
                      first month — improving usability and significantly
                      reducing support tickets.
                    </li>

                    <li>
                      Spearheaded the end-to-end development of the Sightseeing
                      booking flow, allowing users to seamlessly search, select,
                      and book sightseeing activities with integrated transfer
                      options (Private/SIC).
                    </li>
                  </ul>
                </div>
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
                <div className="max-w-3xl">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2 text-left">
                    <li>
                      Engineered and delivered the{" "}
                      <span className="font-medium text-foreground">
                        OnTrip module
                      </span>
                      , integrating real-time APIs to manage dynamic trip
                      statuses, driver assignments, and pickup/drop logistics —
                      significantly improving operational visibility and trip
                      management flexibility.
                    </li>

                    <li>
                      Integrated{" "}
                      <span className="font-medium text-foreground">
                        Hotel Holiday Integration (HHI)
                      </span>{" "}
                      into the internal booking platform{" "}
                      <span className="font-medium text-foreground">
                        Aryabhatt
                      </span>
                      , enabling seamless end-to-end package booking with hotel
                      selection for internal operations.
                    </li>

                    <li>
                      Contributed to the migration from Create React App (CRA)
                      to a modular architecture, collaborating with the team to
                      improve codebase scalability, maintainability, and
                      long-term structure.
                    </li>
                    <li>
                      <span className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">
                          Tech Stack:
                        </span>{" "}
                        <span className="italic">
                          HTML, CSS, JavaScript, ReactJS, Redux, Material UI
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
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
                <div className="max-w-3xl">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2 text-left">
                    {/* Equity Management Section */}
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Equity Management Platform (CapTable, ESOPs, Liquidity)
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                        <li>
                          Developed bulk and single equity grant flows,
                          enhancing user experience, customization flexibility,
                          and operational efficiency for equity management
                          tasks.
                        </li>
                        <li>
                          Integrated advanced server-side{" "}
                          <span className="font-medium text-foreground">
                            ag-Grid
                          </span>{" "}
                          tables to replace legacy table components, enabling
                          efficient handling of large datasets and adding
                          support for advanced filtering — significantly
                          improving data management and admin productivity.
                        </li>
                      </ul>
                    </div>

                    {/* Private Market Liquidity Section */}
                    <div className="pt-2">
                      <p className="text-sm font-medium text-foreground">
                        Private Market Liquidity (Secondary Blocks,
                        Exercise/Surrender Options, Share Transfer)
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                        <li>
                          Contributed to the{" "}
                          <span className="font-medium text-foreground">
                            qapita component
                          </span>{" "}
                          library by developing reusable UI components, helping
                          standardize the design system across the platform and
                          streamline frontend development workflows.
                        </li>
                        <li>
                          Implemented an{" "}
                          <span className="font-medium text-foreground">
                            appshell architecture
                          </span>{" "}
                          to unify the{" "}
                          <span className="font-medium text-foreground">
                            Share Transfer
                          </span>{" "}
                          and{" "}
                          <span className="font-medium text-foreground">
                            Liquidity
                          </span>{" "}
                          applications using a{" "}
                          <span className="font-medium text-foreground">
                            micro-frontend approach
                          </span>{" "}
                          — enabling independent development and deployment
                          while enhancing system modularity and maintainability.
                        </li>
                        <li>
                          Spearheaded the development of a{" "}
                          <span className="font-medium text-foreground">
                            real-time tracking interface
                          </span>{" "}
                          for monitoring option exercise and surrender events —
                          improving data visibility and enhancing transparency
                          for internal stakeholders and external participants.
                        </li>

                        <li>
                          Optimized bundle size and performance by implementing{" "}
                          <span className="font-medium text-foreground">
                            domain-based code splitting
                          </span>
                          ,{" "}
                          <span className="font-medium text-foreground">
                            lazy loading
                          </span>
                          , and{" "}
                          <span className="font-medium text-foreground">
                            package-level splitting using Webpack
                          </span>{" "}
                          — resulting in faster initial loads and improved
                          runtime efficiency across the platform.
                        </li>

                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2 text-left">
                          <li>
                            Contributed to the development of the{" "}
                            <span className="font-medium text-foreground">
                              Open Marketplace
                            </span>{" "}
                            application, allowing admins to create and manage
                            primary/secondary equity blocks via a dashboard with
                            advanced filters, search, and create flows.
                          </li>
                          <li>
                            Implemented dynamic block views that surface
                            detailed company information, integrated data rooms,
                            and assignment configuration for investors.
                          </li>
                          <li>
                            Built configurable access controls to define
                            investor-specific visibility, ensuring each investor
                            only sees the intended subset of information.
                          </li>
                          <li>
                            Developed the investor-facing interface to display
                            assigned blocks with tailored content and structured
                            access to relevant documents and block details.
                          </li>
                          <li>
                            <span className="text-xs text-muted-foreground">
                              <span className="font-medium text-foreground">
                                Tech Stack:
                              </span>{" "}
                              <span className="italic">
                                HTML/CSS, ReactJS, JavaScript, TypeScript,
                                Zustand, Redux, AntD, SASS , ag-Grid, Webpack,
                                Babel.
                              </span>
                            </span>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Repeat for other experiences */}
          </Accordion>
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
