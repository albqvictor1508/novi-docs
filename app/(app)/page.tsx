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
            <button className="text-sm font-bold text-white px-6 py-3 rounded-[20px] bg-orange">Get Started</button>
            <span className="text-sm font-bold text-[#f5b266] px-6 py-3 rounded-[20px] bg-[#f5b2665b]">bun add novi</span>
            <button className="">botão de copiar</button>
          </div>
          <span className="text-text-secondary text-[18px]">See why developers love Novi seta pra baixo</span>
        </section>

        <section className="w-full h-full mt-[120px]">

          <div className="flex items-center gap-8 px-8">

            <div className="flex flex-1 flex-col space-y-4 border">

              <div className="flex flex-col space-y-1">
                  <span className="text-[18px] font-bold text-text-secondary">Our Principle</span>
                  <h2 className="text-2xl font-bold">Design for humans</h2>
              </div>
            <p>
              Our goal is to design an ergonomic, sensible, and productive framework that even beginners can use easily
              Designed to avoid unnecessary complexity and type complexity for you to focus on building
              A framework that feels <span>just like JavaScript</span>
            </p>
            </div>

            <div className="flex-1 border-2 rounded-2xl h-[300px]">
              imagem do codigo ou qualquer outra coisa
            </div>
          </div>


          <div id="cards" className="w-full flex gap-8 items-center">
            <div>
              
              <div>
                {/* icone */}
                <h1>Just return</h1>
              </div>
              <p>
              A string, number, or complex JSON All we need to do is return
              </p>
            </div>

            <div>
              <div>
                <h1>File support built-in</h1>
              </div>
              <p>To send a file or image, just return Nothing more or less</p>
            </div>

            <div>
              <div>
                <h1>Stream response </h1>
              </div>
              <p> Use <span>yield</span> to stream a response All we need to do is return</p>
            </div>
          </div>
        </section>

        <section id="code">
          <div></div>
        </section>

        <footer>
          <div className="flex flex-col space-y-4">
            <h2>
              Validation reimagined
              <span className="block">Available today.</span>
            </h2>

            <div className="flex gap-4 items-center">
              <button>
                Get Started
              </button>
              <button>
                Contact Us
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}