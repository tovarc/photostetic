import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="border-b-2 py-3 mb-5">
        <div className="container mx-auto flex items-center justify-between">
          <Image src="/assets/logo.svg" alt="" width="200" height="38" />
          <Link href="https://photostetic.com/">
            <a className="border-2 px-6 py-2 border-gray-700 font-medium">
              Go back to Photostetic
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
