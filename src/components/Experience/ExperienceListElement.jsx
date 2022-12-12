import React from "react";

const ExperienceListElement = ({
  client,
  duration,
  location,
  role,
  project,
  description,
  responsibilities,
}) => {
  return (
    <li>
      <p>
        <b>Client:</b> {client}
      </p>
      <p>
        <b>Duration:</b> {duration}
      </p>
      <p>
        <b>Location:</b> {location}
      </p>
      <p>
        <b>Role:</b> {role}
      </p>
      <p>
        <b>Project:</b> {project}
      </p>

      <p>
        <b>Description:</b> {description}
      </p>
      <p>
        <b>Responsibilities:</b> {responsibilities}
      </p>
    </li>
  );
};

export default ExperienceListElement;
