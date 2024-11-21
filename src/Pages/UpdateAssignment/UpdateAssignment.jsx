import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UpdateAssignment = () => {
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const [updateAssignment, setUpdateAssignment] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/assignment?id=${assignmentId}`).then((res) => {
      setUpdateAssignment(res.data);
    });
  }, [assignmentId,axiosSecure]);

  if (!updateAssignment.title) {
    return (
      <>
        <div className="min-h-screen flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </>
    );
  }
  const {
    email,
    title,
    description,
    marks,
    thumbnailImageURL,
    difficultyLevel,
    date,
  } = updateAssignment;

  const handleForm = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You want to update this assignment",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const form = e.target;

        updateAssignment.title = form.title.value;
        updateAssignment.thumbnailImageURL = form.url.value;
        updateAssignment.marks = form.marks.value;
        updateAssignment.difficultyLevel = form.difficultyLevel.value;
        updateAssignment.date = form.date.value;
        updateAssignment.description = form.description.value;
        setUpdateAssignment(updateAssignment);
        console.log(updateAssignment);
        axiosSecure
          .put(`/update-assignment?id=${assignmentId}`, updateAssignment)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Assignment Update Successfully ",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/assignments");
            }
          });
      }
    });
  };

  return (
    <div className=" min-h-screen min-w-screen py-14 lg:px-5 md:px-5 sm:px-2">
      <div className="space-y-14">
        <h1 className="lg:text-3xl md:text-3xl text-2xl text-center font-semibold  pb-4">
          Update Assignment
        </h1>
        <div className="card bg-blue-200  shadow-2xl">
          <form onSubmit={handleForm} className="card-body ">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  className="input input-bordered bg-white text-black"
                  defaultValue={email || " "}
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
                  className="input input-bordered bg-white text-black"
                  defaultValue={title || ""}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail Image URL</span>
                </label>
                <input
                  type="url"
                  name="url"
                  placeholder="enter url"
                  className="input input-bordered bg-white text-black"
                  defaultValue={thumbnailImageURL || ""}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Assignment Marks</span>
                </label>
                <input
                  type="number"
                  name="marks"
                  placeholder="enter marks"
                  className="input input-bordered bg-white text-black"
                  defaultValue={marks || 0}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Difficulty Level</span>
                </label>
                <select
                  name="difficultyLevel"
                  className="select  select-bordered bg-white text-black"
                  defaultValue={difficultyLevel}
                >
                  {/* <option disabled selected>
                Pick Difficulty Level
              </option> */}
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Assignment Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="enter marks"
                  className="input input-bordered bg-white text-black"
                  defaultValue={date}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="enter description for assignment"
                className="textarea textarea-bordered bg-white text-black"
                defaultValue={description || ""}
              />
            </div>
            <div className="form-control ">
              <button className="btn btn-success text-white">
                Update Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignment;
