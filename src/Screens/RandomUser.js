import { useState, useEffect } from "react"

export default function RandomUser() {

    const [users, setUsers] = useState([])

    function addANewRandomUser() {

        fetch('https://randomuser.me/api/').then((res) => {
            res.json().then((json) => {
                let newUser = json.results[0]
                setUsers([ ...users, newUser ])
            })
        })

    }

    useEffect(() => {
        addANewRandomUser()
    }, [])

    return (
        <div className="App">
            
            {
                users.map((user) => {
                    return (
                        <div>
                            <h1>{user.name.first} {user.name.last}</h1>
                            <img src={user.picture.large} />
                        </div>
                    )
                })
            }

            <br /><br />

            <button onClick={() => {
                addANewRandomUser()
            }}>
                Add a new person
            </button>
        
        </div>
    );

}