import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { BLOG_POSTS } from "@/lib/constants";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const categories = ["Corporate Event Trends", "Event Planning Tips", "Corporate Venues in India", "Technology in Events"];
  const { data } = useQuery<{ id: string; title: string; slug: string; excerpt: string; coverImage?: string; category?: string; createdAt?: string; }[]>({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const res = await fetch("/api/blog");
      if (!res.ok) return [];
      return res.json();
    },
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              TRCV Blog – Corporate Event Planning Insights & Trends in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The TRCV Blog provides insights into event planning in India, trends, and strategies. Stay ahead with our expert content covering corporate event trends, venue guides, and planning tips.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Badge 
              className="bg-gradient-trcv text-white px-6 py-2 text-sm font-medium cursor-pointer"
              data-testid="category-all"
            >
              All Posts
            </Badge>
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-6 py-2 text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors duration-200"
                data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights in corporate event planning across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(data && data.length > 0 ? data : BLOG_POSTS).map((post: any) => (
              <Card 
                key={post.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={post.image || post.coverImage || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  data-testid={`img-blog-${post.id}`}
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="px-3 py-1 text-xs font-medium">
                      {post.category || "General"}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date || new Date(post.createdAt || Date.now()).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button 
                    variant="link" 
                    className="p-0 hover:text-trcv-orange font-semibold group"
                    data-testid={`button-read-more-${post.id}`}
                  >
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular content categories and discover expert insights for your next corporate event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Planning Tips</h3>
              <p className="text-gray-600 text-sm mb-4">Expert advice for planning successful corporate events</p>
              <span className="text-trcv-orange font-medium text-sm">15 Articles</span>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Venue Guides</h3>
              <p className="text-gray-600 text-sm mb-4">Best venues across India for corporate events</p>
              <span className="text-trcv-purple font-medium text-sm">12 Articles</span>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Trends</h3>
              <p className="text-gray-600 text-sm mb-4">Latest tech innovations in event management</p>
              <span className="text-trcv-emerald font-medium text-sm">8 Articles</span>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Insights</h3>
              <p className="text-gray-600 text-sm mb-4">Market trends and industry analysis</p>
              <span className="text-trcv-amber font-medium text-sm">10 Articles</span>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter and get the latest event planning insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trcv-orange focus:border-transparent"
              data-testid="input-newsletter-email"
            />
            <Button 
              className="bg-gradient-trcv hover:shadow-lg transition-all duration-200 px-8"
              data-testid="button-subscribe-newsletter"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn and Plan Better Events</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to put these insights into action? Let TRCV help you plan your next successful corporate event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-gradient-trcv hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-testid="button-plan-event"
              >
                Plan Your Event
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-trcv-orange text-trcv-orange hover:bg-trcv-orange hover:text-white transition-all duration-300"
                data-testid="button-explore-services"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
