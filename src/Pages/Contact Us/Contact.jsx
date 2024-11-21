import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
    const navigate = useNavigate()
    const handleForm = e =>{
        e.preventDefault();
        Swal.fire({
            title: "Message Send Successfully",
            icon: "success"
          }).then((result) => {
            
            if (result.isConfirmed) {
              navigate('/')
            }
          });
    }
    return (
        <div className="min-h-screen min-w-screen py-14 lg:px-5 md:px-5 sm:px-2">
      
      <div className="space-y-14">
      <h1 className="lg:text-5xl md:text-3xl text-2xl text-center font-semibold  pb-4">Contact Us</h1>
      

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
              placeholder="enter email"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="enter subject"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Phone Number</span>
            </label>
            <input
              type="number"
              name="title"
              placeholder="enter number"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>
            
          </div>
          
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              name="message"
              placeholder="leave message about your topic"
              className="textarea textarea-bordered bg-white text-black"
              required
            />
          </div>
          <div className="form-control ">
            <button className="btn btn-success text-white">Send Message</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    );
};

export default Contact;