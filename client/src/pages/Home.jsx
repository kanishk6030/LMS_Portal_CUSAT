
import { Parallax } from "react-scroll-parallax";
import { Background } from "../components/Background";
function Home() {
  return (
    <>
      <section className="relative h-screen z-40 ">
        <Parallax>
          <Background />
        </Parallax>
      </section>

      <section className="h-screen bg-[#0a0a0a]">
        <Parallax>
          <div className="">
            
          </div>
        </Parallax>
      </section>
    </>
  )
}

export default Home