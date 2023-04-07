import Graph from "@/components/Graph";
import Map from "@/components/Map";
import Header from "@/components/Navigation";
import Buttons from "../components/Buttons";

export default function Home() {
  return (
    <>
    <Header />
      <main className='container mx-auto px-5 pt-10 pb-10'>
        <div className='grid grid-cols-5 gap-20'>
          <div className="col-span-2">
            <Map />
          </div>
          <div className="col-span-3">
            <Graph />
          </div>
        </div>

        {/* All buttons */}
        <Buttons />
      </main>
    </>
  )
}
