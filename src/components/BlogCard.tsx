import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group block glass rounded-2xl overflow-hidden hover:glow-subtle transition-all duration-500 hover:-translate-y-2 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Gradient Header */}
      <div
        className={`${featured ? "h-48" : "h-32"} bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center`}
      >
        <div className="font-mono text-primary/60 text-sm">
          {"<article />"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${featured ? "text-2xl" : "text-xl"}`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
          <ArrowRight
            size={20}
            className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
          />
        </div>
      </div>
    </Link>
  );
};
