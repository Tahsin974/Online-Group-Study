import axios from "axios";
import { useEffect, useState } from "react";

const useAssignments = () => {
    const [assignments, setAssignments] = useState([]);
  const [displayAssignments,setDisplayAssignments] = useState([]);
  const url = "http://localhost:5000";
  useEffect(() => {
    axios.get(`${url}/assignments`).then((res) => {
        setDisplayAssignments(res.data)
        setAssignments(res.data)});
  }, []);

  const easy = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'easy')
  const hard = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'hard')
  const medium = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'medium')

    return {easy,hard,medium,assignments,displayAssignments,setDisplayAssignments,setAssignments};
};

export default useAssignments;