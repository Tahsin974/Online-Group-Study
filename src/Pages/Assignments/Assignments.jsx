import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AssignmentCard from "./AssignmentCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [displayAssignments,setDisplayAssignments] = useState([])
  const url = "http://localhost:5000";
  useEffect(() => {
    axios.get(`${url}/assignments`).then((res) => {
        setDisplayAssignments(res.data)
        setAssignments(res.data)});
  }, []);

  const easy = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'easy')
  const hard = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'hard')
  const medium = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'medium')
  
  return (
    <div className="min-w-screen min-h-screen my-12 lg:px-5 md:px-5 sm:px-2 space-y-14 ">
      <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-bold">Assignments</h1>
      <div className="space-x-4 flex justify-center">
        <button onClick={() => setDisplayAssignments(assignments)} className="btn lg:w-24 md:btn-md sm:btn-sm btn-xs btn-neutral">All</button>
        <button onClick={() => setDisplayAssignments(easy)} className="btn lg:w-24 md:btn-md sm:btn-sm btn-xs btn-neutral">Easy</button>
        <button onClick={() => setDisplayAssignments(hard)} className="btn lg:w-24 md:btn-md sm:btn-sm btn-xs btn-neutral">Hard</button>
        <button onClick={() => setDisplayAssignments(medium)} className="btn lg:w-24 md:btn-md sm:btn-sm btn-xs btn-neutral">Medium</button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
        {displayAssignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
