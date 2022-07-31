import React from "react";

function Specializations() {
  const [indexHovered, setIndexHovered] = React.useState(null);
  const data = [
    {
      title: "It / Software",
      description:
        "We have a team of dedicated IT professionals who are experts in IT and software development.",
      image: "https://sheyhiring.netlify.app/images/it.png",
    },
    {
      title: "Medical",
      description:
        "Medical is the care of the body, especially the internal organs.",
      image: "https://sheyhiring.netlify.app/images/medical.png",
    },
    {
      title: "Manufacturing",
      description:
        "Manufacturing is the process of producing a product from raw material",
      image: "https://sheyhiring.netlify.app/images/manufacture.png",
    },
    {
      title: "Ecommerce",
      description:
        "Ecommerce is the buying and selling of goods and services through a web site.",
      image: "https://sheyhiring.netlify.app/images/ecommerce.png",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-center text-3xl text-primary font-semibold">
        Specialization
      </h1>

      <div className="flex gap-10 sm:flex-col items-center">
        <img
          className="h-[500px]"
          src="https://thumbs.dreamstime.com/b/personal-development-vector-concept-web-banner-website-page-illustration-tiny-people-putting-books-big-man-head-self-144566628.jpg="
          alt=""
        />
        <div className="flex flex-col gap-10">
          <p className="text-gray-600 text-md">
            Specialization, sometimes called business dexterity, refers to the
            ability to produce a good or a service using native resources and
            focus on understanding the production process of a product and its
            industry.Countries specialize in the production of certain goods and
            services, thereby gaining a competitive advantage.
          </p>
          <p className="text-gray-600 text-md">
            Productive efficiency is the outcome of specialization because
            native resources are used effectively to produce a good or a service
            that foreign countries need more resources to produce or they cannot
            produce at all. In this context, specializing enables international
            trade, i.e. the exchange of goods between foreign countries.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 gap-20 mt-20 items-start">
        {data.map((item, index) => {
          return (
            <div
              className="border-2 border-secondary rounded flex flex-col gap-5 items-center justify-center"
              onMouseEnter={() => setIndexHovered(index)}
              onMouseLeave={() => setIndexHovered(null)}
            >
              <div className="bg-white -mt-10 p-10 border-2 border-primary rounded-full">
                <img src={item.image} alt="" className="h-20 w-20" />
              </div>
              <h1 className="text-2xl font-semibold text-primary">
                {item.title}
              </h1>
              <p
                className={`h-0 overflow-hidden transition-all duration-500 ${
                  index === indexHovered && "h-32 p-5 "
                }`}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Specializations;
