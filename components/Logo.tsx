import Link from "next/link";
import Image from "next/image";
import { TITLE_SHOP, URL_LOGO } from "contants";
import { GAevent } from "@/lib/utils";

const Logo = () => (
  <Link href="/">
    <a
      onClick={() => {
        GAevent({
          action: "click:goToHomepage",
        });
      }}
      className="flex items-center space-x-2"
    >
      <Image src={URL_LOGO} alt="Logo" width={32} height={32} />
      <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">
        {TITLE_SHOP}
      </span>
    </a>
  </Link>
);

export default Logo;
