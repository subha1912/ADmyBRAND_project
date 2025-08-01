import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import blogThumbnail1 from '../assets/blog_thumbnail_1.png';
import blogThumbnail2 from '../assets/blog_thumbnail_2.png';
import blogThumbnail3 from '../assets/blog_thumbnail_3.png';
import femalePresenter from '../assets/female_presenter.png';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing business processes and driving unprecedented efficiency gains across industries.",
      image: blogThumbnail1,
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI Technology"
    },
    {
      id: 2,
      title: "Building Scalable SaaS Solutions with AI",
      excerpt: "Learn the essential strategies for creating robust, scalable SaaS platforms that leverage AI to deliver exceptional user experiences.",
      image: blogThumbnail2,
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "SaaS Development"
    },
    {
      id: 3,
      title: "Machine Learning Algorithms Explained",
      excerpt: "A comprehensive guide to understanding the most important machine learning algorithms and their real-world applications.",
      image: blogThumbnail3,
      author: "Dr. Emily Watson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Machine Learning"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in AI and SaaS technology
          </p>
        </motion.div>

        {/* Featured Demo Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-16 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Watch Our AI Platform Demo
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                See how our AI-powered platform can transform your business operations 
                in just 5 minutes. Get a comprehensive walkthrough of all features.
              </p>
              <motion.button
                className="cta-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Watch Demo
                <ArrowRight size={20} />
              </motion.button>
            </div>
            <div className="relative">
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={femalePresenter}
                  alt="AI Platform Demo Presenter"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-0 h-0 border-l-[16px] border-l-primary border-y-[12px] border-y-transparent ml-1"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  
                  <motion.button
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Read More
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="demo-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

