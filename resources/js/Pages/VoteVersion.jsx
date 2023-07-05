import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";


const VoteVersion = () => {
    const [date, setDate] = useState({
        "start": null,
        "end": null,
    });

    const handleDateChaged = (e) => { 
        let { id, value } = e.target;
        setDate(prevDate => ({
            ...prevDate,
            [id]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post("/demo_vote/set_vote_version", date, { onFinish })
    }
    
    const onFinish = () => {
        console.log("finish");  
    };

    console.log(date);

    return (
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="">
                    <h1>開始日</h1>
                    <input type="date" id="start" onChange={(e) => handleDateChaged(e)} />
                </div>
                <div className="">
                    <h1>終了日</h1>
                    <input type="date" id="end" onChange={(e) => handleDateChaged(e)} />
                </div>
                <input type="submit" />
            </form>
        </>
    );
};

export default VoteVersion;
