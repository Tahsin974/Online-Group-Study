import useAuthContext from "../../Context/useAuthContext";
const Profile = () => {

  const { user } = useAuthContext();
  const { displayName, email } = user;
  return (
    <div className="min-h-screen flex items-center justify-center py-10">
        <div className="card bg-white max-w-md rounded-none shadow-xl border border-gray-500">
        <h1 className="text-2xl text-center font-bold pt-4">Your Profile</h1>
        <figure className="px-10 pt-10">
          <img
            src={"https://avatars.githubusercontent.com/u/30373425?v=4"}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center">
          <div>
          <p><span className="font-semibold">UserName:</span> {displayName}</p>
          <p><span className="font-semibold">Email: </span>{email}</p>
          </div>
          
          
          
        </div>
      </div>
      
      

      
    </div>
  );
};

export default Profile;
