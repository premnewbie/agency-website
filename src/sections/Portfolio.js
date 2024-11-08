import product from "../assets/product.png";

export default function Portfolio() {
  return (
    <section className="bg-red-100 p-5 mb-10 rounded-2xl">
      <div className="container mx-auto">
        <div className="py-8 lg:py-16">
          <h2 className="text-center text-5xl max-sm:text-3xl font-bold">
            Our Portfolio
          </h2>
          <p className="lg:w-1/2 mx-auto mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, odio explicabo quidem quia reprehenderit laborum veniam
            unde, sequi deleniti iure pariatur. Assumenda consequuntur inventore
            nesciunt ipsum distinctio hic similique rerum.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {Array(5)
            .fill(1)
            .map((item, index) => (
              <div key={index}
                className={`w-1/2 max-sm:w-full ${
                  index % 2 === 0 ? "pt-24 max-sm:pt-0" : "py-12"
                }`}
              >
                <div className="w-8/12 mx-auto">
                  <div className="bg-white rounded-3xl shadow-lg">
                    <img
                      src={product}
                      alt="product"
                      className="rounded-t-3xl"
                    />
                    <div className="p-5 max-sm:p-2">
                      <p className="flex flex-wrap gap-2">
                        <span className="bg-red-200 rounded-3xl border border-red-300 px-2">
                          Branding
                        </span>
                        <span className="bg-green-300 rounded-3xl border border-green-500 px-2">
                          Design
                        </span>
                      </p>
                      <h3 className="mt-4 text-lg font-bold">Design Item</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex pt-24">
          <button className="mx-auto bg-purple-600 text-white font-semibold text-lg px-5 py-2 rounded">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
