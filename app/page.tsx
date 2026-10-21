import type { Metadata } from "next";
import { getPageData } from "@/lib/get-page-data";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Classes } from "@/components/Classes";
import { Gallery } from "@/components/Gallery";
import { Achievements } from "@/components/Achievements";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TempleBorder } from "@/components/TempleBorder";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  return {
    title: data.siteSettings.seoTitle || data.siteSettings.schoolName,
    description:
      data.siteSettings.seoDescription || data.siteSettings.tagline,
  };
}

export default async function Home() {
  const data = await getPageData();

  return (
    <>
      <Header settings={data.siteSettings} />
      <main id="top">
        <Hero hero={data.hero} settings={data.siteSettings} />
        <TempleBorder variant="maroon" bg="cream" />

        <About guru={data.guru} settings={data.siteSettings} />
        <TempleBorder variant="maroon" bg="cream" />

        <Classes classes={data.classes} />
        <TempleBorder variant="maroon" bg="cream" />

        <Gallery items={data.gallery} />
        <TempleBorder variant="maroon" bg="cream" />

        <Achievements achievements={data.achievements} />
        <TempleBorder variant="maroon" bg="cream" />

        <FAQ faqs={data.faqs} />
        <TempleBorder variant="maroon" bg="cream" />

        <Contact settings={data.siteSettings} />
        <TempleBorder variant="maroon" bg="cream" />
      </main>
      <Footer settings={data.siteSettings} />
    </>
  );
}
