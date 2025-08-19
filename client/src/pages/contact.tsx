import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

  const whyContactItems = [
    { icon: CheckCircle, title: "Pan-India Coverage", description: "With local expertise", color: "text-trcv-orange" },
    { icon: CheckCircle, title: "Expert Consultation", description: "And planning", color: "text-trcv-purple" },
    { icon: CheckCircle, title: "Trusted by Top Companies", description: "Across industries", color: "text-trcv-emerald" },
    { icon: CheckCircle, title: "24/7 Support", description: "And coordination", color: "text-trcv-amber" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact TRCV – Your Corporate Event Planning Partner in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ready to plan your next corporate event? Get in touch with TRCV for expert consultation and seamless event execution across India.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Card className="bg-white shadow-xl mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-trcv rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                        <p className="text-gray-600">{SITE_CONFIG.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-trcv-purple to-trcv-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">{SITE_CONFIG.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-trcv-emerald to-trcv-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">{SITE_CONFIG.email}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card className="bg-gradient-light">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Contact Us</h3>
                  <div className="space-y-4">
                    {whyContactItems.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <item.icon className={`${item.color} mr-3 w-5 h-5`} />
                        <span className="text-gray-700">
                          <strong>{item.title}</strong> {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                    
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            {...form.register("name")}
                            placeholder="Your Name"
                            className="w-full"
                            data-testid="input-name"
                          />
                          {form.formState.errors.name && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </Label>
                          <Input
                            id="company"
                            {...form.register("company")}
                            placeholder="Company Name"
                            className="w-full"
                            data-testid="input-company"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...form.register("email")}
                            placeholder="your@email.com"
                            className="w-full"
                            data-testid="input-email"
                          />
                          {form.formState.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...form.register("phone")}
                            placeholder="+91 XXXXXXXXXX"
                            className="w-full"
                            data-testid="input-phone"
                          />
                          {form.formState.errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-2">
                          Event Type
                        </Label>
                        <Select onValueChange={(value) => form.setValue("eventType", value)} data-testid="select-event-type">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Event Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corporate-event">Corporate Event</SelectItem>
                            <SelectItem value="conference">Conference</SelectItem>
                            <SelectItem value="training">Training & Workshop</SelectItem>
                            <SelectItem value="exhibition">Exhibition</SelectItem>
                            <SelectItem value="av-production">AV Production</SelectItem>
                            <SelectItem value="wedding">Wedding & Special Event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          {...form.register("message")}
                          rows={5}
                          placeholder="Tell us about your event requirements..."
                          className="w-full"
                          data-testid="textarea-message"
                        />
                        {form.formState.errors.message && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                        )}
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full bg-gradient-trcv hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        data-testid="button-send-message"
                      >
                        {mutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Let's discuss your next event and make it memorable.</p>
            <a 
              href={`mailto:${SITE_CONFIG.email}`} 
              className="inline-block bg-gradient-trcv text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              data-testid="link-email-direct"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
