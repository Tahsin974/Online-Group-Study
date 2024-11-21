import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAssignments = () => {
    const [assignments, setAssignments] = useState([]);
  const [displayAssignments,setDisplayAssignments] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/assignments`).then((res) => {
        setDisplayAssignments(res.data)
        setAssignments(res.data)});
  }, [axiosSecure]);

  const easy = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'easy')
  const hard = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'hard')
  const medium = assignments.filter(assignment => assignment.difficultyLevel.toLowerCase() == 'medium')

    return {easy,hard,medium,assignments,displayAssignments,setDisplayAssignments,setAssignments};
};

export default useAssignments;