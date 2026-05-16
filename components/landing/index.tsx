import { getDownloadInfo } from "@/lib/download";
import { Background } from "./background";
import { Changelog } from "./changelog";
import { Features } from "./features";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";

export function LandingPage() {
  const downloadInfo = getDownloadInfo();

  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero downloadInfo={downloadInfo} />
        <Features />
        <Changelog />
      </main>
      <Footer />
    </>
  );
}
