import noviLogo from "../assets/novi-logo.svg"

export default function Page() {
  return (
    <>
      <div className="w-[1280px] mx-auto border">

        <section className="flex flex-col space-y-8 items-center w-full h-full" id="hero">

          <img src={noviLogo} alt="novi logo" className="border" />
          <h1 className="text-5xl font-extrabold text-center bg-linear-to-b from-[#FFE387] to-[#F7B733] bg-clip-text text-transparent border">Ergonomic Framework for humans</h1>
          <p className="text-center text-text-secondary text-2xl w-[600px]">
            TypeScript with End-to-End Type Safety, type integrity, and exceptional developer experience. Supercharged by Bun.
          </p>
          <div className="w-max flex gap-4 items-center">
            <button className="text-sm font-bold text-white px-4 py-2 rounded-[20px] bg-orange">Get Started</button>
            <span className="text-sm font-bold text-white px-4 py-2 rounded-[20px] bg-[#F5B366]">bun add novi</span>
            <button className="">botão de copiar</button>
          </div>
          <span className="text-text-secondary text-[18px]">See why developers love Novi seta pra baixo</span>
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