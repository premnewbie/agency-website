export default function Gradient() {
  return (
    <section className="p-5 mb-10">
      <div className="text-white container mx-auto rounded-3xl bg-gradient-to-r from-purple-400 to-red-500 px-2">
        <div className="py-8 lg:py-16">
          <h2 className="text-center text-5xl max-sm:text-3xl font-bold">
            Let's do something amazing
          </h2>
          <p className="lg:w-1/2 text-center mx-auto mt-2">
            Lorem ipsum dolor sit amet 
          </p>
          <div className='flex mt-8 justify-center'>
            <button className='bg-white rounded-sm text-lg text-purple-900 p-2 px-3 font-semibold'>
                Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
