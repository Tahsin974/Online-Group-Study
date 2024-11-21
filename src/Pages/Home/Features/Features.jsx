import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Features = () => {
    const [features,setFeatures] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(()=>{
        axiosSecure.get(`/features`)
        .then(res =>{ 
            if (!res.data) {
                return (
                  <>
                    <div className="min-h-screen flex justify-center">
                      <span className="loading loading-ring loading-lg"></span>
                    </div>
                  </>
                );
              }
            
            setFeatures(res.data)});
    },[])
    return (
        <div id="features" className="min-w-screen min-h-screen my-32 space-y-14">
            <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-semibold">Features Section</h1>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
                {
                    features.map(feature => <FeatureCard
                    key={feature.id}
                    feature = {feature}
                    ></FeatureCard>)
                }
            </div>
            
        </div>
    );
};

export default Features;