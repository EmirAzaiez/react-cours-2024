import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import RandomUserCard from "../Components/RandomUserCard"

import { StoreContext } from "../Providers/Store"

export default function ArticlesScreens() {

    const [articles, setArticles] = useState([])
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState(0)

    const { user } = useContext(StoreContext)

    useEffect(() => {

        fetch("http://edu.project.etherial.fr/articles").then((response) => {
            response.json().then((json) => {
                setArticles(json.data)
            })
        })

        fetch("http://edu.project.etherial.fr/articles/categories").then((response) => {
            response.json().then((json) => {
                setCategories(json.data)
            })
        })

    }, [])

    return <div>

        <h1>{user && user.firstname} | {user && user.lastname}</h1>

        {/* <select onChange={(e) => {
            setCurrentCategory(e.target.value)
        }}>
            <option value={0}>ALL</option>
            {categories.map((category) => {
                return <option value={category.id}>{category.name}</option>
            })}
        </select>

        <div>
            
        </div>

        {articles.filter((article) => {
            if (article.article_category_id == currentCategory || currentCategory == 0) {
                return true
            } else {
                return false
            }
        }).map((article) => {
            return (<div>
                <h3>{article.title}</h3>
                <p>{article.content}</p>  
                <hr />
            </div>)
        })} */}

    </div>

}