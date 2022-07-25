import Link from "next/link";
import Image from "next/image";
import i18next from "i18next";
import { URL_LOGO } from "contants";

const Logo = () => (
  <Link href="/">
    <a className="flex items-center space-x-2">
      <Image src={URL_LOGO} alt="Logo" width={32} height={32} />
      <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">
        {i18next.t("generic.brand").toString()}
      </span>
    </a>
  </Link>
);

export default Logo;
