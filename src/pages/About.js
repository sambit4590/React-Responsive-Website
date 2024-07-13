import React from "react";
import Footer from"../Components/Footers";
import team1 from "../assets/team1.jpg";
import service from "../assets/service.avif";

function About() {
  return (
    <>
    <section className="bg-white">
      <div className="bg-black p-10 ">
        <h2 className="text-3xl font-extrabold text-white text-center">
          ABOUT US
        </h2>
      </div>
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-4xl  text-black font-bold text-center">
              Meet our team
            </h3>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eos
              numquam laboriosam dolorum modi quisquam unde, quaerat eveniet.
              Doloribus dignissimos ea recusandae fugiat veritatis ad nemo sed
              minima sunt quidem, commodi omnis alias doloremque ab consequatur
              ducimus? Velit quam animi quibusdam nulla eum! Quas, voluptatem
              aperiam. Tenetur asperiores eveniet voluptate!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              expedita est, natus recusandae fugiat dicta ratione iure nemo illo
              molestias magnam neque quidem labore ducimus reiciendis tempore,
              eligendi dolor iste maiores illum, laudantium quia sequi culpa
              quae. Enim, sapiente. Sit?
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              ipsum sint alias incidunt aspernatur odio mollitia dolore
              quibusdam necessitatibus nemo neque sequi quo nam, reiciendis
              tempora quos libero odit praesentium.
            </p>
          </div>
          <div>
            <img src={team1} alt="" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <img src={service} alt="" className="w-full rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-4xl  text-black font-bold text-center">
              Our services
            </h3>
            <ul className="mt-4 ml-3 text-md  list-disc text-gray-500">
              <li>
                Quality-first approach based on a mature ISO 9001-certified
                quality management system.
              </li>
              <li>
                ISO 27001-certified security management that relies on
                comprehensive policies and processes, advanced security
                technology, and skilled professionals.
              </li>
              <li>
                A full-scale PMO able to carry out even the most complex
                projects.
              </li>
              <li>
                A leading outsourcing provider featured on the Global
                Outsourcing 100 list by IAOP for three years in a row.
              </li>
              <li>
                Software development services help plan, design, develop,
                integrate, test, manage and evolve software solutions.
                Quality-centered and adherent to software development best
                practices
              </li>
              <li>
                A leading outsourcing provider featured on the Global
                Outsourcing 100 list by IAOP for three years in a row.
              </li>
              <li>
                Software development services help plan, design, develop,
                integrate, test, manage and evolve software solutions.
                Quality-centered and adherent to software development best
                practices
              </li>
              <li>
                A full-scale PMO able to carry out even the most complex
                projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default About;
