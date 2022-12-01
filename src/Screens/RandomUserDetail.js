import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';

import RandomUserCard from "../Components/RandomUserCard"

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
        return <RandomUserCard user={user} showLink={false} />
    } else {
        return (<div>
            It's loading...
        </div>)
    }


}