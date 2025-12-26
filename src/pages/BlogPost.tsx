import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import { BlogCard } from "@/components/BlogCard";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  // বর্তমান পেজের URL এবং টাইটেল ডাটা
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post?.title || "Check out this blog post!";

  // ১. টুইটার শেয়ার ফাংশন
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  // ২. লিঙ্কডইন শেয়ার ফাংশন
  const shareOnLinkedin = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  // ৩. নেটিভ শেয়ার (মোবাইল এবং অন্যান্য অ্যাপের জন্য)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Check out this article: ${shareTitle}`,
          url: shareUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // ব্রাউজার সাপোর্ট না করলে লিঙ্ক কপি হবে
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Article Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-mono rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User size={18} />
                Md. Akther Hosen
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <article className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                {post.content.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-foreground">{line.replace("# ", "")}</h1>;
                  }
                  if (line.startsWith("## ")) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">{line.replace("## ", "")}</h2>;
                  }
                  if (line.startsWith("### ")) {
                    return <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-foreground">{line.replace("### ", "")}</h3>;
                  }
                  if (line.startsWith("- ")) {
                    return <li key={index} className="ml-6 list-disc text-muted-foreground">{line.replace("- ", "")}</li>;
                  }
                  if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
                    return <li key={index} className="ml-6 list-decimal text-muted-foreground">{line.replace(/^\d+\.\s/, "")}</li>;
                  }
                  if (line.trim() === "" || line.startsWith("```")) return null;
                  
                  return <p key={index} className="text-muted-foreground">{line}</p>;
                })}
              </div>
            </article>

            {/* Share Section - Fixed & Functional */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-muted-foreground">Enjoyed this article? Share it!</p>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={shareOnTwitter}
                    title="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={shareOnLinkedin}
                    title="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleNativeShare}
                    title="More options"
                  >
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default BlogPost;