import React from 'react';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';

const Blog = () => {
  const blogPosts = [
    {
      title: 'UFC 295 Predictions',
      date: 'November 8, 2023',
      imageUrl: 'https://s.yimg.com/ny/api/res/1.2/X.oKUGAWmmcxSks.Pd5ArQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en-us/aniin.com/f2e04a105b7c3cf579abf065d96b7b30',
      link: '/blog/ufc295'
    },
    // ... other blog posts
  ];

  return (
    <section sx={{ variant: 'section.blog' }}>
      <Header />
      <div className="container my-5">
        <h2 sx={{ variant: 'text.heading' }} className='text-center'>Blog</h2>
        <hr />
        <div className="row">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="col-12 my-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a href={post.link} rel="noreferrer" className="text-decoration-none">
                <div className="card flex-row align-items-center p-3">
                  <div className="col-md-8">
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text text-muted">{post.date}</p>
                  </div>
                  <div className="col-md-4">
                    <img src={post.imageUrl} alt={post.title} className="img-fluid rounded-start" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Blog;
