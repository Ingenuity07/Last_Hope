import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { useHistory } from "react-router";
import useFetch from "./UseFetch";
const Subjects = ({ globalData ,profile}) => {
    const { branch,year } = useParams();
    const navigate = useNavigate();

    const [subjects, setSubjects] = useState([])

    function compare(a, b) {
        if (a.subject > b.subject) return 1;
        if (a.subject < b.subject) return -1;
        return 0;
    }


    useEffect(() => {
        const unique = globalData.filter((ele)=>{
            if(ele.year==year&&ele.branch==branch)
                return ele;
        })

        unique.sort(compare)
        setSubjects(unique)

        console.log(unique)

    }, [])


    const handleClick=(subject)=>{
        if(profile===true)
            navigate(`/Paper/${branch}/${year}/${subject}`)
        else
            navigate("/User")

    }





    return (

        <div >

            {subjects  && (

                <article >
                    <h2 style={{ color: "white" }}>Choose Subject</h2>
                    <div className="card card-resource resource">
                        {
                            (subjects).map(element => (
                                <div>
                                        
                                            <div className="cards cards-resource"  >
                                                <div className="card-body">
                                                    <h2 className="card-title">{element.subject}</h2>
                                                </div>
                                                <button className="btn" onClick={()=>{handleClick(element.subject)}}>DOWNLOAD || UPLOAD</button>
                                            </div>
                                        
                                        
                                </div>
                            ))
                        }
                    </div>
                </article>

            )

            }
        </div>
    );
}

export default Subjects;