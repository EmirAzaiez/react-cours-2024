import { useContext } from "react"
import { StoreContext } from "../Providers/Store"

export default function Home() {

    const { setUser } = useContext(StoreContext)

    return (
        <div>
            <h3>Hello World !</h3>
            <button onClick={() => {
                setUser({
                    id: 2,
                    firstname: "Hello",
                    lastname: "World"
                })
            }}>
                MODIFIER MON USER !!!
            </button>
        </div>
    )

}