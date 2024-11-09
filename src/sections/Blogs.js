import product from "../assets/product.png";

export default function Blogs() {
  return (
    <section className="bg-purple-100 p-5 mb-10 rounded-2xl">
      <div className="container mx-auto">
        <div className="py-8 lg:py-16">
          <h2 className="text-center text-5xl max-sm:text-3xl font-bold">
            Blogs
          </h2>
          <p className="lg:w-1/2 text-center mx-auto mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            dolorem itaque inventore ex nisi nam unde voluptatum quis expedita
            et numquam totam explicabo tempore sit. Dignissimos blanditiis
            voluptate labore similique.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {Array(5)
            .fill(1)
            .map((item,i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 mb-16">
                <div className="m-3">
                  <img src={product} alt="" className="rounded-t-3xl" />
                  <div className=" bg-white rounded-b-3xl p-5">
                    <p className="text-sm font-bold text-gray-400">
                      Nov, 11 2024
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-600">
                      some heading for the blog
                    </h3>
                    <p className="mt-1">
                      <span className="bg-gray-400 p-1 px-3 rounded-2xl text-sm mt-3">
                        Marketing
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mb-16">
          <button className="bg-blue-800 p-2 w-full md:w-3/12 rounded-md text-xl font-semibold text-white">
            View all blogs
          </button>
        </div>
      </div>
    </section>
  );
}
