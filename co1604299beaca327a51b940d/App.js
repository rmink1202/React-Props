import React from "react"
import Nav from "./components/Nav"
import Posts from "./components/Posts"
import data from "./data"


export default function App () {
     const posts = data.map(item => {
        return (
            <Posts
                key={item.id}
                item={item}
            />
        )
    })     
    return (
    <div>
        <Nav />
        {posts}
    </div>
    )
}