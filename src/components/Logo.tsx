import Link from "next/link";
import Image from "next/image";
import logo from "../../public/favicon.svg";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="allcalculator.net – Home"
      className="flex items-center gap-2.5 no-underline group select-none"
    >
      {/* Logo Image */}
      <div className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-[1.03]">
        <Image
          src={logo} // public/logo.svg
          alt="allcalculator.net logo"
          width={32}
          height={32}
          priority
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Brand Text */}
      <div className="flex items-baseline tracking-tight">
        <span className="text-[24px] font-black text-slate-900 dark:text-white leading-none">
          all
        </span>

        <span className="text-[24px] font-semibold text-slate-800 dark:text-slate-100 leading-none">
          calculator
        </span>

        <span className="text-[15px] font-extrabold text-indigo-600 dark:text-indigo-400 ml-[1px] leading-none">
          .net
        </span>
      </div>
    </Link>
  );
}
