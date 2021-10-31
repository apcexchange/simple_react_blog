import { useState } from "react"
import BlogList from "./BlogList";


const Home = () => {

//     const [name, setName] = useState("peter")

//     const [age, setAge] = useState(34)

// const handleClick = () => {
   
//     setName("rosemary")
//     setAge(90)
// }

// const handleClickAgain = (name: string) => {
//     console.log("hello " + name);

 const [blogs, setBlogs] = useState([
     {title: "new blog site", body: " this is the bod 1", author: "joe", id: 1 },
     {title: "welcome party", body: " this is the bod 2", author: "joe", id: 2 },
     {title: "contact us ", body: " this is the bod 3", author: "terry", id: 3 }
 ])

 const handleDelete = (id : number) => {
    const newBlog = blogs.filter(blog => blog.id != id )
    setBlogs(newBlog)
 }

    return(
        <div className="home"> 
           < BlogList blogs = {blogs} title = "All Blogs" handleDelete={handleDelete}/>
           < BlogList blogs = {blogs.filter((blog)=> blog.author==="joe")} title = "Joe's Blogs" handleDelete={handleDelete}/>

        </div>
    );
}
export default Home