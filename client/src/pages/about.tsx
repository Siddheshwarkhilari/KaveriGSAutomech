import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Target, Eye, FileText } from "lucide-react";
import { slideUpStagger, staggerContainer } from "@/lib/animations";

export default function About() {
  const timelineEvents = [
    {
      year: "1995",
      title: "Company Founded",
      description: "Started as a small manufacturing unit with a vision for excellence"
    },
    {
      year: "2005",
      title: "International Expansion",
      description: "Expanded operations to serve global markets across 5 countries"
    },
    {
      year: "2015",
      title: "Technology Upgrade",
      description: "Invested in cutting-edge machinery and automation systems"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented Industry 4.0 solutions and smart manufacturing"
    }
  ];

  const handleDownloadBrochure = () => {
    // In a real app, this would download an actual PDF
    alert("Company brochure download would start here");
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="gradient-bg text-black py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            KAVERI GS AutoMech - "Where Mechanical Excellence Meets Industrial Innovation Daily"
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg opacity-90"
          >
            "Precision, Reliability, and Innovation Built Into Every Part"
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={slideUpStagger}>
              <Card className="glass-morphism border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Founded in 1995, GS AutoMech has been at the forefront of precision 
                    manufacturing and engineering solutions. We specialize in high-quality 
                    automotive components, industrial hardware, and custom manufacturing services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our commitment to innovation and quality has made us a trusted partner 
                    for businesses worldwide, delivering solutions that meet the highest 
                    industry standards and exceed customer expectations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={slideUpStagger}>
              <Card className="glass-morphism border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <FileText className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Company Brochure
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Download our comprehensive company brochure to learn more about 
                    our capabilities, certifications, and success stories.
                  </p>
                  <Button
                    onClick={handleDownloadBrochure}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            Our Journey
          </motion.h2>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                variants={slideUpStagger}
                className="timeline-item"
              >
                <Card className="glass-morphism border-none shadow-lg ml-4">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Badge
                        variant="outline"
                        className="text-[hsl(var(--gs-primary))] border-[hsl(var(--gs-primary))] font-semibold"
                      >
                        {event.year}
                      </Badge>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={slideUpStagger}>
              <Card className="glass-morphism border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-[hsl(var(--gs-primary))]" />
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver world-class manufacturing solutions that exceed customer 
                    expectations while maintaining the highest standards of quality, 
                    innovation, and environmental responsibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={slideUpStagger}>
              <Card className="glass-morphism border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-8 h-8 text-[hsl(var(--gs-success))]" />
                    <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the global leader in precision manufacturing, known for our 
                    technological excellence, sustainable practices, and commitment to 
                    advancing industrial innovation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
