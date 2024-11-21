
const PendingAssignmentCard = ({ assignment,handleForm }) => {
  const { _id,examineeName, title, marks, PDF, quickNote } = assignment;

  
  
  return (
    <div>
      <div className="card bg-white border">
        <div className="card-body items-center text-center space-y-3">
          <h2 className="card-title">Examinee Name: {examineeName}</h2>
          <h2 className="card-title">Assignment Title: {title}</h2>
          <p>
            <span className="font-semibold">Assignment Marks:</span> {marks}
          </p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Give Mark
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box space-y-7">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="card bg-white border shadow-xl">
                  <div className="card-body items-center text-center">
                    <a href={PDF} target="_blank" download='downloaded' className="text-blue-800">
                      {" "}
                      Assignment PDF link
                    </a>
                    <p>
                      <span className="font-bold">Note:</span> {quickNote}
                    </p>
                    <form onSubmit={()=>handleForm(event,_id)} className="card-body ">
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
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text">FeedBack</span>
                        </label>
                        <textarea
                          type="text"
                          name="feedback"
                          placeholder="feedback for examinee"
                          className="textarea textarea-bordered bg-white text-black"
                          required
                        />
                      </div>
                      <div className="form-control ">
                        <button className="btn btn-success text-white">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignmentCard;
