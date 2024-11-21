import { useEffect, useState } from "react";
import PendingAssignmentCard from "./PendingAssignmentCard";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../Context/useAuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PendingAssignments = () => {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/pending-assignments?status=pending&&email=${user.email}`)
      .then((res) => {
        if (!res.data) {
          return (
            <>
              <div className="min-h-screen flex justify-center">
                <span className="loading loading-ring loading-lg"></span>
              </div>
            </>
          );
        }
        setPendingAssignments(res.data);
      });
  }, []);
  const handleForm = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const obtainedMarks = form.marks.value;
    const feedback = form.feedback.value;
    const status = "completed";
    const updatePendingAssignment = {
      obtainedMarks,
      feedback,
      status,
    };
    axiosSecure.put(`/update-pending-assignment?id=${id}`, updatePendingAssignment)
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          navigate("/home");
        }
      });
  };

  return (
    <div className="min-h-screen py-10">
      {pendingAssignments.length ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
          {pendingAssignments.map((assignment) => (
            <PendingAssignmentCard
              key={assignment._id}
              assignment={assignment}
              handleForm={handleForm}
            ></PendingAssignmentCard>
          ))}
        </div>
      ) : (
        <div className="hero bg-white min-h-screen">
          <div className="hero-content text-center">
            <div>
              <h1 className="text-5xl font-bold text-slate-400">No Assignments Are Pending</h1>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignments;
