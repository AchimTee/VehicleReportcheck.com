import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import './Blogs.css';

const Blogs = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Maintenance', 'Buying Tips', 'Industry News', 'Safety'];

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="blogs-page">
            <Helmet>
                <title>Vehicle Report Check Blog - Automotive News & Tips</title>
                <meta name="description" content="Read the latest automotive news, buying guides, and tips on how to safely buy and sell used cars from Vehicle Report Check." />
                <meta name="keywords" content="automotive blog, used car buying tips, vehicle history news, auto industry updates, car buying guide, how to check a vin, free vehicle look up guide" />
                <link rel="canonical" href="https://vehiclereportcheck.com/blogs" />
            </Helmet>
            <div className="blogs-hero">
                <div className="hero-content">
                    <h1>Automotive Insights & News</h1>
                    <p>Expert advice, buying guides, and the latest industry trends.</p>
                </div>
            </div>

            <div className="blogs-container">
                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="blogs-grid">
                    {filteredPosts.map(post => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-image-container">
                                <img src={post.image} alt={post.title} className="blog-image" />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                                </div>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <Link to={`/blogs/${post.id}`} className="read-more-btn">
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
