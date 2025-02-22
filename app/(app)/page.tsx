import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Spotlight } from "~/components/ui/spotlight";

export default function Page() {
  return (
    <>
      <div className="min-h-screen w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <section className="p-4 min-h-screen justify-center max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Ergonomic Framework for humans
          </h1>
          <p className="text-center text-zinc-400 text-2xl w-[600px]">
            TypeScript with End-to-End Type Safety, type integrity, and exceptional developer experience. Supercharged by Bun.
          </p>
          <div className="w-max flex gap-4 items-center">
            <Button size="lg" className="bg-zinc-500/10 text-md rounded-xl hover:bg-zinc-500/5">
              Getting Start
            </Button>
            <span className="text-sm border font-bold text-white px-4 py-2 rounded-md">
              bun add novi
            </span>
          </div>
        </section>

        <section className="w-full h-full">
          <span>Our Principle</span>
          <h2>Design for humans</h2>
          <p>
            Our goal is to design an ergonomic, sensible, and productive framework that even beginners can use easily
            Designed to avoid unnecessary complexity and type complexity for you to focus on building
            A framework that feels <span>just like JavaScript</span>
          </p>
          <div id="cards" className="flex gap-8 items-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </div>
    </>
  )
}