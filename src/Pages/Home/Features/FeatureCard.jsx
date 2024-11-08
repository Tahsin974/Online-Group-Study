const FeatureCard = ({feature}) => {
    const {name,description,img} = feature;
  return (
    <div>
      <div className="card bg-white  shadow-xl">
        <figure>
          <img
            src={img}
           
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
