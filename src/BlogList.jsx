const BlogList = ({ blogs, title , handleDelete}) => {
    
    // const blogs = props.blogs
    // const title = props.title
    return(
        <div className="div blog">
            <h1> {title} </h1>
            { blogs.map((blog) =>(
               <div className="blog-preview" key={blog.id}>
                   <h2>{ blog.title }</h2>
                   <p>written by {blog.author} </p>
                   <button onClick= {()=> handleDelete(blog.id)}> delete blog </button>


               </div>
           ))}
        </div>
    );
}

export default BlogList