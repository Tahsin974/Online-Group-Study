
import AssignmentCard from "./AssignmentCard";
import Swal from "sweetalert2";
import useAssignments from "../../Hooks/useAssignments";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Assignments = () => {
  const {easy,hard,medium,assignments,displayAssignments,setDisplayAssignments} = useAssignments()
  const axiosSecure = useAxiosSecure();
  
  const handleDelete = (userEmail,email,id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-assignment?userEmail=${userEmail}&&id=${id}&&email=${email}`)
        .then(result => {
          if(result.data.deletedCount && result.data.deletedCount > 0){
            const remaining = displayAssignments.filter(assignment => assignment._id !== id);
            setDisplayAssignments(remaining);
            Swal.fire({
              title: "Deleted!",
              text: "Your Assignment has been deleted.",
              icon: "success"
            });
          }
          else{
            Swal.fire({
              
              icon: "error",
              title: "Oops! You can't delete this assignment",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        
      }
    });
  }
  
  
  return (
    <div className="min-w-screen min-h-screen my-12 lg:px-5 md:px-5 sm:px-2 space-y-14 ">
      <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-bold">Assignments</h1>
      <div className="space-x-4 flex justify-center">
        
        <button onClick={() => setDisplayAssignments(assignments)} className="btn lg:w-24 md:btn-md sm:btn-sm btn-xs btn-outline hover:text-white">All</button>
        <button onClick={() => setDisplayAssignments(easy)} className="btn lg:w-24 md:btn-md sm:btn-sm btn-xs btn-outline hover:text-white">Easy</button>
        <button onClick={() => setDisplayAssignments(hard)} className="btn lg:w-24 md:btn-md sm:btn-sm btn-xs btn-outline hover:text-white">Hard</button>
        <button onClick={() => setDisplayAssignments(medium)} className="btn lg:w-24 md:btn-md sm:btn-sm btn-xs btn-outline hover:text-white">Medium</button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
        {displayAssignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            handleDelete={handleDelete}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
