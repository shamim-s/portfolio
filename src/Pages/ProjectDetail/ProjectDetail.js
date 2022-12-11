import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetail = () => {
  const project = useLoaderData();
  const [img, setImg] = useState(project.picture);
  const {
    about,
    name,
    backTech,
    detailImages,
    features,
    frontTech,
    _id,
    picture,
    liveSite,
    clientRepo,
    serverRepo,
  } = project;

  return (
    <div className="mt-10 p-4">
      <div>
        <h1 className="text-3xl mb-2">Project: {name}</h1>
        <p className="text-xl mb-4">{about}</p>
        <img src={img} alt="" />
        <hr className="mb-4" />
        <div className="flex flex-wrap gap-6">
          {detailImages.map((detailImg) => (
            <img
              onClick={() => setImg(detailImg.detailImg)}
              className="w-36 mr-8 border-2 hover:shadow-xl cursor-pointer"
              src={detailImg.detailImg}
              alt=""
            />
          ))}
        </div>
        <div>
          <h1 className="text-2xl mt-4">Features:</h1>
          <div className="p-4">
            {features.map((feature) => (
              <li key={feature._id}>{feature.feature}</li>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl mt-4">Front-End Technologies</h1>
          <div className="p-4">
            <li>{backTech}</li>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mt-4">Back-End Technologies</h1>
          <div className="p-4">
            <li>{frontTech}</li>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-6">
            <a href={liveSite} className='btn btn-primary btn-sm'>View Live Website</a>
            <a href={clientRepo} className='btn btn-primary btn-sm'>Client Side Codes</a>
            <a href={serverRepo} className='btn btn-primary btn-sm'>Server Side Codes</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
