import React, {useState, useEffect} from "react";
import axios from "axios";
import HomepageCard from "./HomePageCard";

export default function HomePage() {
    const [data, setData] = useState([]);

    useEffect (() => {
        axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
            .then(function (response) {
                setData(response.data.data);
                console.log(response.data.data);
            })
    }, []);

    return (
        <div className="HomepageCard">
            {data.map(data => {
                return (
                    <HomepageCard 
                    id={data.id}
                    name={data.employee_name}
                    rating={data.employee_age}
                    comment={data.employee_salary}
                    />
                )
            })}
        </div>
    );
}
