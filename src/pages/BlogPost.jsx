import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import './Blogs.css'; // Reusing styles where possible, might need specific ones

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="blog-post-page">
                <div className="container">
                    <h2>Blog post not found</h2>
                    <button onClick={() => navigate('/blogs')} className="back-btn">
                        <ArrowLeft size={16} /> Back to Blogs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <div className="blog-post-container">
                <button onClick={() => navigate('/blogs')} className="back-btn">
                    <ArrowLeft size={16} /> Back to Blogs
                </button>

                <article className="blog-post-content">
                    <div className="post-header">
                        <span className="post-category">{post.category}</span>
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-meta">
                                            <span className="meta-item"><Calendar size={16} /> {post.date}</span>
                                        </div>
                    </div>

                    <div className="post-image-container">
                        <img src={post.image} alt={post.title} className="post-image" />
                    </div>

                    <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }}>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
