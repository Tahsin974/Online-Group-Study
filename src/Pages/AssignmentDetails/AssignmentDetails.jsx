import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuthContext from "../../Context/useAuthContext";

const AssignmentDetails = () => {
  const { assignmentId } = useParams();
  const [assignment, setAssignment] = useState({});
  const {user} = useAuthContext();
  const navigate = useNavigate();
  const url = "http://localhost:5000";
  useEffect(() => {
    axios.get(`${url}/assignment-details/${assignmentId}`).then((result) => {
      setAssignment(result.data);
    });
  }, [assignmentId, url]);

  if (!assignment.title && user.email) {
    return (
      <>
        <div className="min-h-screen flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </>
    );
  }

  const { title, description, date, marks, thumbnailImageURL } = assignment;
  const formattedDate = format(new Date(date), "do MMMM yyyy");
  const handleForm = e =>{
    e.preventDefault()
    const form = e.target;
    const userEmail = form.email.value;
    const assignmentTitle = form.title.value;
    const assignmentPDFLink = form.url.value;
    const quickNote = form.quickNote.value;
    const submittedAssignment = {
        email:userEmail,
        title:assignmentTitle,
        PDF:assignmentPDFLink,
        quickNote,
    }
    console.log(submittedAssignment)
    // navigate('/assignments')

  }
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen lg:px-5 md:px-5 sm:px-2">
      <div className="card lg:card-side bg-white shadow-xl ">
        <figure>
          <img src={thumbnailImageURL} alt="Album" className="h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="font-semibold">Marks : {marks}</p>
          <p className="font-semibold">Date : {formattedDate}</p>
          <div className="card-actions justify-end">
            
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-info text-white"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Take Assignment
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box space-y-7">
              <form method="dialog">

      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
                
              <div className="card bg-white shrink-0 shadow-2xl ">
              <h1 className="text-xl font-semibold text-center py-4">Submission Form</h1>
          <form
            onSubmit={handleForm}
            className="card-body "
          >
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="enter email"
                className="input input-bordered"
                defaultValue={user.email || " "}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="enter title"
                className="input input-bordered"
                defaultValue={title || ""}
              />
            </div>
            </div>
            

            <div className="form-control ">
              <label className="label">
                <span className="label-text">PDF/Doc Link</span>
              </label>
              <input
                type="url"
                name="url"
                
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quick Note</span>
              </label>
              <textarea
                type="text"
                name="quickNote"
                placeholder="enter description for assignment"
                className="textarea textarea-bordered "
                
              />
            </div>
            <div className="form-control">
              <button className="btn btn-success text-white">
                Submit Assignment
              </button>
            </div>
          </form>
        </div>
               
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
