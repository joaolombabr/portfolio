import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Stack />
      <Cta />
    </>
  );
}
