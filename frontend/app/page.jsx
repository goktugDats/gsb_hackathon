'use client'
import Map from '@components/Map'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center blue_gradient">
               Yardım et ve Destekle
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />
      </h1>
      <Map />
      <br className="max-md:hidden" />
      <br className="max-md:hidden" />
      <br className="max-md:hidden" />
    </section>
  )
}

export default Home