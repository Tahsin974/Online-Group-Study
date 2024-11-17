import { format } from "date-fns";

const AssignmentCard = ({assignment}) => {
  const {title,description,marks,thumbnailImageURL,difficultyLevel,date} = assignment;
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
            <button className="btn bg-red-600 border-red-600 hover:bg-red-600 hover:border-red-600 text-white">Delete</button>
            <button className="btn btn-success text-white">Update</button>
            <button className="btn btn-info text-white">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
