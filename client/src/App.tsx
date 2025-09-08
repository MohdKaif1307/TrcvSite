import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import Blog from "@/pages/blog";
import BlogNew from "@/pages/blog-new";
import Testimonials from "@/pages/testimonials";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/new" component={BlogNew} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
