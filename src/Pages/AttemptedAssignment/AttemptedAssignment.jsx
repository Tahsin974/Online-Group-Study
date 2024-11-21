import { useEffect, useState } from "react";
import useAuthContext from "../../Context/useAuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AttemptedAssignment = () => {
  const [attemptAssignments, setAttemptAssignments] = useState([]);
  const { user } = useAuthContext();
  const url = "http://localhost:5000";
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/attempted-assignments?email=${user?.email}`)
      .then((result) => {
        setAttemptAssignments(result.data);
      });
  }, [url, user,axiosSecure]);
  console.log(attemptAssignments);
  return (
    <div>
      {attemptAssignments.length ? (
        <div className="overflow-x-auto">
          <table className="table lg:table-lg md:table-md sm:table-sm table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>Assignment Title</th>
                <th>Assignment Marks</th>
                <th>Obtained Marks</th>
                <th>Feedback</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attemptAssignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td>{assignment.title}</td>
                  <td>{assignment.marks}</td>
                  <td>{assignment.obtainedMarks || "pending"}</td>
                  <td>{assignment.feedback || "pending"}</td>
                  <td>{assignment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="hero bg-white min-h-screen">
          <div className="hero-content text-center">
            <div>
              <h1 className="text-5xl font-bold text-slate-400">
                You do not have any attempted assignments
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttemptedAssignment;
