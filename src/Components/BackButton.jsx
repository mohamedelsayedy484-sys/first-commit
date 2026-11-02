import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button  

      className=" btn btn-outline-dark mb-4 m-2"
      onClick={() => navigate(-1)}
    >
       ← Back 
    </button>
  );
}

export default BackButton;