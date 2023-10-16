import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Desciption: {career.description}</p>
      </div>
    </div>
  );
};

export default Info;

// loader function

export const careerDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find that career");
  }
  return res.json();
};
