import React from "react";
import project1 from "../../.././images/project-1.png";
import project2 from "../../.././images/project-2.png";
import project3 from "../../.././images/project-3.png";

const Projects = () => {
  return (
    <div id="projects" className="mt-10 mb-10">
      <h1 className="text-2xl text-center font-bold text-primary">Projects</h1>
      <div className="mt-5">
        <div className="flex lg:flex-row flex-col justify-between items-center card card-side bg-base-100 shadow-xl p-4">
          <img src={project1} alt="Movie" className="lg:w-1/2 rounded-2xl" />
          <div className="card-body">
            <h2 className="card-title">Sell Zone</h2>
            <p>pre-owned smartphones buy selling platform.</p>
            <div>
              <p>Features:</p>
              <li className="text-xs">
                Users can become a seller or a buyer when they register. Buyers
                can report a product.
              </li>
              <li className="text-xs">
                The seller can add a new product. They can make one single
                product advertise at a time.
              </li>
              <li className="text-xs">
                Private secure Admin control, admin can remove any users or
                sellers and report products.
              </li>
            </div>
            <div>
              <h1>Front-End Technologies:</h1>
              <li className="text-xs">
                React, daisy UI, Tailwind, React Hook Form, Firebase, Stripe,
                React Router Dom, Mamba UI, Axios, date-fns, React Hot Toast.
              </li>
            </div>
            <div>
              <h1>Back-end Technologies:</h1>
              <li className="text-xs">
                Express.js, Node.js, MongoDB, Stripe.js, Cors, dotenv, JSON Web
                Tokens.
              </li>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
              <a
                href="https://sell-zone-10e7e.web.app/"
                className="btn btn-primary btn-xs"
              >
                Live Website
              </a>
              <a
                href="https://github.com/shamim-s/sell-zone-client"
                className="btn btn-primary btn-xs"
              >
                Client Side Repo
              </a>
              <a
                href="https://github.com/shamim-s/sell-zone-server"
                className="btn btn-primary btn-xs"
              >
                Server Side Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex lg:flex-row flex-col justify-between items-center card card-side bg-base-100 shadow-xl p-4">
        <img src={project2} alt="Movie" className="lg:w-1/2 rounded-2xl" />
          <div className="card-body">
            <h2 className="card-title">Slick Smile</h2>
            <p>Online services review platform.</p>
            <div>
              <p>Features:</p>
              <li className="text-xs">
                Logged-in users can add a new Service.
              </li>
              <li className="text-xs">
                Users can add a review to a service and they can view all their
                reviews on the My Reviews page.
              </li>
              <li className="text-xs">
                Users can delete a review from the My Reviews page.
              </li>
            </div>
            <div>
              <h1>Front-End Technologies:</h1>
              <li className="text-xs">
                React, daisy UI, Tailwind, Firebase, React Router Dom, Mamba UI,
                Moment.js React Hot Toast.
              </li>
            </div>
            <div>
              <h1>Back-end Technologies:</h1>
              <li className="text-xs">
                Express.js, Node.js, MongoDB, Cors, dotenv, JSON Web Tokens.
                Vercel.
              </li>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
              <a
                href="https://slick-smile.web.app/"
                className="btn btn-primary btn-xs"
              >
                Live Website
              </a>
              <a
                href="https://github.com/shamim-s/service-review-slick-smile-client"
                className="btn btn-primary btn-xs"
              >
                Client Side Repo
              </a>
              <a
                href="https://github.com/shamim-s/service-review-slick-smile-server"
                className="btn btn-primary btn-xs"
              >
                Server Side Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex lg:flex-row flex-col justify-between items-center card card-side bg-base-100 shadow-xl p-4">
          <img src={project3} alt="Movie" className="lg:w-1/2 rounded-2xl" />
          <div className="card-body">
            <h2 className="card-title">E-Learning</h2>
            <p>Online Courses selling platform.</p>
            <div>
              <p>Features:</p>
              <li className="text-xs">
                On clicking the navbar, the user image user can go to their
                profile.
              </li>
              <li className="text-xs">
                Enroll now functionality without a payment method.
              </li>
              <li className="text-xs">
                Users can download course details as pdf.
              </li>
            </div>
            <div>
              <h1>Front-End Technologies:</h1>
              <li className="text-xs">
                React, daisy UI, Firebase, React Router Dom, Mamba UI, React Hot
                Toast, html2canvas, jsPDF, React icons.
              </li>
            </div>
            <div>
              <h1>Back-end Technologies:</h1>
              <li className="text-xs">Express.js, Node.js, Cors, Vercel.</li>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
              <a
                href="https://ace-study-366510.web.app/"
                className="btn btn-primary btn-xs"
              >
                Live Website
              </a>
              <a
                href="https://github.com/shamim-s/e-learning-client-side"
                className="btn btn-primary btn-xs"
              >
                Client Side Repo
              </a>
              <a
                href="https://github.com/shamim-s/e-learning-server-side"
                className="btn btn-primary btn-xs"
              >
                Server Side Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
