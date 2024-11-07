import Card from "../components/Card";

export default function Services() {
  const headings = ['Heading 1','Heading 2','Heading 3']
  return (
    <section className="bg-red-100 rounded-2xl p-10 lg:p-20 mx-auto mb-10">
        <div className="container mx-auto">
            <div>
            <h2 className="text-center text-5xl font-bold">Our Services</h2>
            <p className="w-1/2 mx-auto mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur, odio explicabo quidem quia reprehenderit laborum
                veniam unde, sequi deleniti iure pariatur. Assumenda consequuntur
                inventore nesciunt ipsum distinctio hic similique rerum.
            </p>
            </div>
            <div className="flex flex-wrap mt-10">
              {headings.map((item) => <Card key={item} heading={item} />)}
            </div>
        </div>
    </section>
  )
}
