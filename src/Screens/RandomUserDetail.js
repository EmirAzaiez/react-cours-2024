import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';

export default function RandomUserDetail() {

    let location = useLocation()
    let navigate = useNavigate()
    let [user, setUser] = useState(null)

    useEffect(() => {

        if (location && location.state && location.state.user) {
            setUser(location.state.user)
        } else {
            navigate("/randomuser")
        }

    }, [])

    if (user) {
        return (<div>

            <img src={user.picture.thumbnail} />
            <br />
            {user.name.first} {user.name.last} 
            <br />
            {user.email}
        </div>)
    } else {
        return (<div>
            It's loading...
        </div>)
    }


}