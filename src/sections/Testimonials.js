export default function Testimonials() {
  return (
    <section className="bg-purple-100 p-5 mb-10 rounded-2xl">
      <div className="container mx-auto">
        <div className="py-8 lg:py-16">
          <h2 className="text-center text-5xl max-sm:text-3xl font-bold">
            Testimonials
          </h2>
          <p className="lg:w-1/2 text-center mx-auto mt-10">
            What our clients say
          </p>
        </div>
        <div className="mt-2">
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
            {Array(6)
              .fill(1)
              .map((item) => (
                <div className="bg-purple-200 rounded-lg shadow-lg p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 text-purple-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  <p className="my-5 text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae iusto repellat saepe molestiae dolorum? Rem nemo,
                    quas totam dolore facilis, odit consequuntur pariatur,
                    nostrum fugit tenetur iste numquam in error?
                  </p>
                  <h3 className="text-purple-800 font-bold text-lg">Name</h3>
                  <p className="text-gray-600">Designation Company</p>
                  <p className="flex">
                    {Array(5)
                      .fill(1)
                      .map((item) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="size-5 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
