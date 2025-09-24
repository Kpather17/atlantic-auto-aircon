import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Appointment request sent! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "", service: "general" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-arctic-shadow/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient-ice mb-4">
            Contact Us
          </h2>
          <p className="text-arctic-frost text-lg max-w-2xl mx-auto">
            Get in touch for professional automotive air conditioning services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
              <CardHeader>
                <CardTitle className="text-arctic-ice flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground text-lg font-semibold">
                  +1 (555) 123-4567
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
              <CardHeader>
                <CardTitle className="text-arctic-ice flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground text-lg">
                  info@atlanticautoaircon.com
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
              <CardHeader>
                <CardTitle className="text-arctic-ice flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  123 Atlantic Boulevard<br />
                  Miami, FL 33101
                </p>
                {/* Placeholder for Google Maps */}
                <div className="mt-4 h-48 bg-arctic-deep/30 rounded-lg flex items-center justify-center border border-arctic-ice/20">
                  <p className="text-arctic-frost">Interactive Map Coming Soon</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
              <CardHeader>
                <CardTitle className="text-arctic-ice flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
            <CardHeader>
              <CardTitle className="text-arctic-ice text-2xl">
                Book an Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-arctic-frost mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-arctic-ice/30 focus:border-arctic-ice focus:ring-arctic-ice/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-arctic-frost mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-arctic-ice/30 focus:border-arctic-ice focus:ring-arctic-ice/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-arctic-frost mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-arctic-ice/30 focus:border-arctic-ice focus:ring-arctic-ice/20"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-arctic-frost mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md bg-input/50 border border-arctic-ice/30 text-foreground focus:border-arctic-ice focus:ring-2 focus:ring-arctic-ice/20"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="repair">AC Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="regas">AC Regas</option>
                    <option value="inspection">System Inspection</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-arctic-frost mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-input/50 border-arctic-ice/30 focus:border-arctic-ice focus:ring-arctic-ice/20"
                    placeholder="Tell us about your vehicle and the issue you're experiencing..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="ice" 
                  size="lg" 
                  className="w-full"
                >
                  Submit Appointment Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};