import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { History, Users, Shield, Wrench } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-arctic-deep/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient-ice mb-4">
            About Atlantic Auto Aircon
          </h2>
          <p className="text-arctic-frost text-lg max-w-2xl mx-auto">
            Four decades of excellence in automotive climate control
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Main Description */}
          <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
            <CardContent className="pt-6">
              <p className="text-foreground mb-4">
                For over four decades, Atlantic Auto Aircon has been at the forefront of 
                automotive climate control innovation. Founded in the 1980s, we've built 
                our reputation on technical excellence and unwavering commitment to 
                customer satisfaction.
              </p>
              <p className="text-foreground">
                Our team brings together more than 50 years of collective expertise in 
                automotive HVAC systems, with certified technicians who undergo continuous 
                training to stay ahead of industry advancements.
              </p>
            </CardContent>
          </Card>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Users className="h-5 w-5 text-arctic-ice mr-2" />
                <CardTitle className="text-arctic-ice text-lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Certified technicians and supervisors with specialized training in 
                  modern automotive HVAC systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Wrench className="h-5 w-5 text-arctic-ice mr-2" />
                <CardTitle className="text-arctic-ice text-lg">Advanced Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  State-of-the-art workshop with eco-friendly recycling systems and 
                  certified diagnostic stations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-sm border-arctic-ice/20">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Shield className="h-5 w-5 text-arctic-ice mr-2" />
                <CardTitle className="text-arctic-ice text-lg">Authorized Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Partnered with leading manufacturers to provide genuine parts and 
                  factory-approved repair techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};