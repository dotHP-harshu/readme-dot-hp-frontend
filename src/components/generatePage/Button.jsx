import React from "react";

function Button({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-bg-color px-4 py-2 border-2 border-text-muted duration-200 cursor-pointer
   hover:border-text-main active:scale-95"
    >
      {name}
    </button>
  );
}

export default Button;
