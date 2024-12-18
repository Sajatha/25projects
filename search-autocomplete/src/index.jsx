/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react"
import Suggestions from "./suggestions";


export default function SearchAutocomplete() {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(){
        const query = String(event.target.value).toLowerCase(); 
        setSearchParam(query);
        if(query.length > 1) {
            const filteredData = users && users.length
            ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
            : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    function handleClick(event) {
        setShowDropDown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    }

    async function fetchListofUsers() {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if(data && data.users &&data.users.length) {
                setUsers(data.users.map(userItem => userItem.firstName));
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    useEffect(() => {
        fetchListofUsers();
    }, []);

    console.log(users,filteredUsers);


    return (
        <div className="search-autocomplete-container">
            {
                loading ? (<h2>Loading data, please wait!!</h2>)
                : (
                    <input 
                onChange={handleChange} 
                value={searchParam} 
                name="search-users" 
                placeholder="Search users here"/>
                )
            }
            
            {
                showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
            }
        </div>
    )
}