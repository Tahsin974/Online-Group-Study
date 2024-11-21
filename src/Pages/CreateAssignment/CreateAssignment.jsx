import useFirebase from "../../Hooks/useFirebase";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const CreateAssignment = () => {
  const {user} = useFirebase();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure();

  const handleForm = e =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const email = form.email.value;
    const thumbnailImageURL = form.url.value;
    const marks = form.marks.value;
    const difficultyLevel = form.difficultyLevel.value;
    const date = form.date.value;
    const description = form.description.value;

    const newAssignment = {
      title,email,thumbnailImageURL,marks,difficultyLevel,date,description
    }
    axiosSecure.post(`/new-assignment`,newAssignment)
    .then(res => {
      console.log(res.data)
      
      Swal.fire({
        title: "Assignment Created Successfully",
        icon: "success"
      }).then((result) => {
        
        if (result.isConfirmed) {
          navigate('/assignments')
        }
      });
      
    })
    
    

  }
  return (
    <div className="min-h-screen min-w-screen py-14 lg:px-5 md:px-5 sm:px-2">
      
      <div className="space-y-14">
      <h1 className="lg:text-3xl md:text-3xl text-2xl text-center font-semibold  pb-4">Create A New Assignment</h1>
      <div className="card bg-blue-200 shadow-2xl">
        <form onSubmit={handleForm} className="card-body ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter title"
              className="input input-bordered bg-white text-black"
              defaultValue={user ? user.email : " "}
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
              required
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
              required
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
              required
            />
          </div>
          <div className="form-control">
            
            <label className="label">
              <span className="label-text">Difficulty Level</span>
            </label>
            <select
            name="difficultyLevel"
            className="select  select-bordered bg-white text-black">
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
              
              required
            />
          </div>
            
          </div>
          
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="enter description for assignment"
              className="textarea textarea-bordered bg-white text-black"
              required
            />
          </div>
          <div className="form-control ">
            <button className="btn btn-success text-white">Create Assignment</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
