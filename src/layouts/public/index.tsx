// import { useAppContext } from "contexts";
import Head from "next/head";
import Script from "next/script";
import Footer from "./Footer";
import Navbar from "./Navbar";
type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function PublicLayout({
  children = <></>,
  title = "Alfa Transformer Limited",
  description,
  ogImage,
}: Props) {
  return (
    <>
      <Head>
        {/* <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage || ""} /> */}
        <meta name="title" content="Alfa Transformer Limited" />
        <meta
          name="description"
          content="The Company successfully established the quality system. The quality management system is applicable to Design, Manufacture and Sale of Distribution & Power."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alfa-phi.vercel.app/" />
        <meta property="og:title" content="Alfa Transformer Limited" />
        <meta
          property="og:description"
          content="The Company successfully established the quality system. The quality management system is applicable to Design, Manufacture and Sale of Distribution & Power."
        />
        <meta
          property="og:image"
          content="https://alfa-phi.vercel.app/Alfa/alfaOg.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alfa-phi.vercel.app/" />
        <meta property="twitter:title" content="Alfa Transformer Limited" />
        <meta
          property="twitter:description"
          content="The Company successfully established the quality system. The quality management system is applicable to Design, Manufacture and Sale of Distribution & Power."
        />
        <meta
          property="twitter:image"
          content="https://alfa-phi.vercel.app/Alfa/alfaOg.png"
        />
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
