import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import "./blogs.css";
import BlogModal from "./BlogModal";

const blogs = [
  {
    title: "Building Scalable Applications with Node.js",
    description: "Explore the fundamentals and best practices of building scalable server-side applications using Node.js, focusing on performance and architecture.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    link: "/blog/building-scalable-applications-nodejs"
  },
  {
    title: "CSS Grid Layout: A Comprehensive Guide",
    description: "A detailed guide to mastering CSS Grid Layout, including practical examples and common use cases for modern web design.",
    image: "https://images.unsplash.com/photo-1616628188550-808682f3926d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpZCUyMGNzc3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/blog/css-grid-layout-guide"
  },
  {
    title: "Understanding Asynchronous JavaScript",
    description: "Learn how to effectively manage asynchronous operations in JavaScript with promises, async/await, and other modern techniques.",
    image: "https://media.istockphoto.com/id/484267180/photo/software-developer-programming-code-on-computer.webp?b=1&s=612x612&w=0&k=20&c=wB1qEFS1Yq_vpnpx1AgJajd7oXB0tnw2wPz5H1sPjhA=",
    link: "/blog/understanding-async-javascript"
  }
];

const Blogs = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };
  return (
    <section id="blogs" className="blogs-section" ref={ref}>
      <h2 className="section-title">Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <motion.div
            className="blog-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button  onClick={() => openModal(blog)} className="blog-link">Read More</button>
            </div>
          </motion.div>
        ))}
          <BlogModal isOpen={!!selectedBlog} onClose={closeModal} blog={selectedBlog} />
      </div>
    </section>
  );
};

export default Blogs;
