

function BlogCard(props){
    return (
        <div className="blog-card w-100 h-20 p-90 bg-gray-300 rounded-2xl">
            <h3 className="blog-title">{props.title}</h3>
            <p className="blog-desc">{props.description}</p>
        </div>
    )
}


export default BlogCard;