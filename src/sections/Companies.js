import dummylogo from '../assets/dummy_logo.png'

export default function Companies() {
  return (
    <section className="rounded-2xl p-5 mb-10">
        <div className="container mx-auto">
            <div className="bg-green-500 border rounded-xl p-10 border-black">
                <h2 className="text-white font-bold text-2xl text-center mb-10">Companies who trust us</h2>
                <div className='flex flex-wrap'>
                    <div className='w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-5'>
                        <img src={dummylogo} alt='company-logo' className='mx-auto' width={200} height='auto'/>
                    </div>
                    <div className='w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-5'>
                        <img src={dummylogo} alt='company-logo' className='mx-auto' width={200} height='auto'/>
                    </div>
                    <div className='w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-5'>
                        <img src={dummylogo} alt='company-logo' className='mx-auto' width={200} height='auto'/>
                    </div>
                    <div className='w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-5'>
                        <img src={dummylogo} alt='company-logo' className='mx-auto' width={200} height='auto'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
