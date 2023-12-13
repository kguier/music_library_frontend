import React, { useState } from "react";
import axios from "axios";

const DeleteButton = ({ onNewMusic }) => {
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete("https://localhost:7149/api/Songs");
      if (response.status === 204) {
        onNewMusic();
      }
    } catch (error) {
      console.warn("Error deleting song: ", error);
    }
  };

  return <form onSubmit={handleDelete} className="delete-btn"></form>;
};

export default DeleteButton;
