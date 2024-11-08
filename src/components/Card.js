export default function Card({heading,icon}) {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-5">
      <div className="bg-white p-10 max-md:p-5 rounded-2xl shadow-lg">
        {icon}
        <h4 className="font-bold text-2xl max-md:text-lg mt-6">{heading}</h4>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          debitis! Commodi soluta odio reiciendis minus, recusandae excepturi
          facilis itaque iste dolor impedit tempore. Earum sunt assumenda sint,
          illum quisquam eos.
        </p>
      </div>
    </div>
  );
}
