import React from "react";

const Avatar = ({ url, firstName, lastName, star }) => {
  return (
    <div>
      <img
        src={url || "https://www.drupal.org/files/issues/default-avatar.png"}
        alt={firstName}
        height="150px"
      />
      <h3
        style={{
          textDecoration: star ? "underline" : "initial",
          fontSize: star ? "32px" : "24px",
        }}
      >
        {firstName} {lastName.toUpperCase()}
      </h3>
    </div>
  );
};

export default Avatar;
