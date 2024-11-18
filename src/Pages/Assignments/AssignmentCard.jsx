import { format } from "date-fns";
import useAuthContext from "../../Context/useAuthContext"
import { Link } from "react-router-dom";
const AssignmentCard = ({assignment,handleDelete}) => {
  const {_id ,email,title,description,marks,thumbnailImageURL,difficultyLevel,date} = assignment;

  
   const {user} = useAuthContext();
   const userEmail = user?.email;
  const formattedDate = format(new Date(date), 'do MMMM yyyy')
  
  return (
    <div>
      <div className="card  bg-white shadow-xl border ">
        <figure>
          <img
            src={thumbnailImageURL}
            alt="Album"
        
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="font-semibold">Difficulty : {difficultyLevel}</p>
          <p className="font-semibold">Marks : {marks}</p>
          <p className="font-semibold">Date : {formattedDate}</p>
          <div className="card-actions justify-end my-4">
            <button onClick={()=>handleDelete(userEmail,email,_id)} className="btn bg-red-600 border-red-600 hover:bg-red-600 hover:border-red-600 text-white">Delete</button>
            <Link to={`/update-assignment/${_id}`}>
            <button className="btn btn-success text-white">Update</button>
            </Link>
            <button className="btn btn-info text-white">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
