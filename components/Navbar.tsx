import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

function Navbar() {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Flexibble"
            width={115}
            height={43}
            priority
          />
        </Link>
        <ul className="hidden xl:flex text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            userPhoto
            <Link href="/create-project">share work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
}
export default Navbar;
