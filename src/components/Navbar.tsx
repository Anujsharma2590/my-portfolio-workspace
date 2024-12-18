import Link from "next/link";
import MaxWidthWrapper from "./util-component/MaxWidthWrapper";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Anuj Sharma.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <div>
              <Link href="/">Home</Link>
            </div>

            <div>
              <ThemeSwitcher />
            </div>

          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
