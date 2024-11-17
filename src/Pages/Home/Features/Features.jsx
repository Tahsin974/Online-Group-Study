import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import axios from "axios";

const Features = () => {
    const [features,setFeatures] = useState([]);
    const url = "http://localhost:5000";
    useEffect(()=>{
        axios.get(`${url}/features`)
        .then(res => setFeatures(res.data));
    },[])
    return (
        <div className="min-w-screen min-h-screen my-32 space-y-14">
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