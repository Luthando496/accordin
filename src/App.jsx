import './index.css'
import data from './data'
import Card from './Card'



function App() {

  return (
      <section className="w-full absolute top-0 bg-teal-800 min-h-screen md:flex md:justify-center md:items-center px-4 md:px-0">
      <div className="md:mx-auto my-8 w-full md:w-[65%] border bg-white border-orange-300 shadow-2xl rounded-lg py-4 px-2">
      <h2 className="text-2xl font-semibold text-center text-black/80 tracking-[3px]">Questions</h2>

      <div className="flex flex-col gap-y-10 w-full mt-20">
      {data.map((item, index) => (
        <Card  key={index} title={item.title} info={item.info} />
      ))}


      </div>
      </div>

      </section>
  )
}

export default App
