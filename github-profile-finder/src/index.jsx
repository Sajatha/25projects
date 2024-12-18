import { useEffect, useState } from "react"
import Card from "./card";
import './styles.css'

export default function GithubProfileFinder() {

    const [userName, setUserName] = useState("Sajatha");
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);

        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if(data){
            setUserData(data);
            setLoading(false);
            setUserName('');
        }
    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(()=> {
        fetchGithubUserData()
    },[])

    if(loading){
        return <h1>Loading data. Please wait!</h1>
    }
    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                name="search-by-username"
                type="text"
                placeholder="Search Github Username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <Card user={userData}/> : null
            }
        </div>
    )
}