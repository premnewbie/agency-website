import product from "../assets/product.png";

export default function Subscribe() {
  return (
    <section className="bg-red-100 p-5 mb-10 rounded-2xl">
      <div className="container mx-auto py-16">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full flex">
            <img src={product} alt="product" className="rounded-xl shadow-lg my-auto"/>
          </div>
          <div className="lg:w-1/2 w-full lg:p-10 p-2 lg:mt-0 mt-16">
            <div>
              <h2 className="lg:text-5xl text-2xl font-bold">
                Subscribe to our Newsletter
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ullam autem, assumenda ducimus ab ad, aperiam eveniet ipsum, ut
                sequi accusantium maxime. Nostrum accusamus tempora similique ad
                unde atque dolore.
              </p>
              <div className="mt-12">
                <form action="">
                  <div className="flex border bg-white focus-within:border-purple-500 p-2 rounded">
                    <div className="w-auto flex px-2 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 my-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <span className="block text-gray-500">
                        Enter your Name
                      </span>
                      <input
                        type="text"
                        className="w-full p-1 focus:outline-none border-b border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex mt-3 border bg-white focus-within:border-purple-500 p-2 rounded">
                    <div className="w-auto flex px-2 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 my-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <span className="block text-gray-500">
                        Enter your Email
                      </span>
                      <input
                        type="text"
                        className="w-full p-1 focus:outline-none border-b border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <input className="mr-2" type='checkbox' name='' value='' /> I Agree
                    <button className="max-sm:w-full w-auto text-white bg-purple-500 rounded px-3 py-2 block mt-3 font-semibold">
                        Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
