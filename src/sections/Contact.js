export default function Contact() {
    return (
      <section className="bg-red-100 p-5 mb-10 rounded-2xl">
        <div className="container mx-auto">
          <div className="py-8 lg:py-16">
            <h2 className="text-center text-5xl max-sm:text-3xl font-bold">
              Contact Us
            </h2>
            <p className="lg:w-1/2 text-center mx-auto mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, fugit vitae minus enim consequatur odio ipsa soluta
              nihil perspiciatis quaerat quasi iusto ducimus reiciendis sit. Fugit
              praesentium rerum ratione temporibus?
            </p>
          </div>
          <div className="lg:w-1/2 mx-auto mb-16">
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
                  <span className="block text-gray-500">Enter your Name</span>
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
                  <span className="block text-gray-500">Enter your Email</span>
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
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <span className="block text-gray-500">Choose One</span>
                  <select
                    name=""
                    id=""
                    className="w-full p-1 focus:outline-none border-b border-gray-300"
                  >
                    <option value="Design">Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO">SEO</option>
                  </select>
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <span className="block text-gray-500">Enter your message</span>
                  <textarea className="w-full p-1 focus:outline-none border-b border-gray-300"></textarea>
                </div>
              </div>
              <div className="mt-5">
                <button className="max-sm:w-full w-auto text-white bg-purple-500 rounded px-3 py-2 block mt-3 font-semibold">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  