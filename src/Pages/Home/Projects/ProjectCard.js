import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    const {
        about, 
        name, 
        backTech, 
        detailImages,
        features, 
        frontTech, 
        _id,
        picture} = project;
  return (
    <div>
      <div className="mt-5 hover:border-2 border-primary rounded-2xl transition-transform">
        <div className="flex lg:flex-row flex-col justify-between items-center card card-side bg-base-100 shadow-xl p-4">
          <img src={picture} alt="Movie" className="lg:w-1/2 rounded-2xl" />
          <div className="card-body">
            <h2 className="card-title text-2xl">{name}</h2>
            <p>{about}</p>
            <div>
              <p>Features:</p>
                {
                    features.map((feat) => <li key={feat._id}>{feat.feature.slice(0, 25) + '...click view details see more'}</li>)
                                    
                }
            </div>
            <Link to={`/project/${_id}`} className="btn btn-primary w-40 mt-5">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
