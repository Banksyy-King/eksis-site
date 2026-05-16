import { Background } from "./background";
import { Changelog } from "./changelog";
import { Features } from "./features";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";

export function LandingPage() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Features />
        <Changelog />
      </main>
      <Footer />
    </>
  );
}
