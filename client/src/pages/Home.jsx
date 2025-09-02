
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

      <section className="h-screen flex items-center justify-center bg-green-200">
        <Parallax>
          <p className="text-xl">Scroll down to see the magic ✨</p>
        </Parallax>
      </section>
    </>
  )
}

export default Home