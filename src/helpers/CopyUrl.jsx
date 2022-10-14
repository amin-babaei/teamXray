import { useState } from "react";

const CopyUrl = () => {
  const [copy, setCopy] = useState(false);
  const copyed = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopy(true);
  };
  return (
    <button
      className={`hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full ${
        copy ? "bg-green-500" : "bg-blue-500"
      }`}
      onClick={copyed}
    >
      Copy
      <i className={`p-2 ${copy ? "fas fa-check" : "fas fa-link"}`}></i>
    </button>
  );
}

export default CopyUrl;
