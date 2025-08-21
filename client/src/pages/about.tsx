import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Target, Eye, FileText } from "lucide-react";
import { slideUpStagger, staggerContainer } from "@/lib/animations";

export default function About() {
  const timelineEvents = [
    {
      year: "2017",
      title: "Company Founded",
      description: "Started as a small manufacturing unit with a vision for excellence. starting with a single CNC machine  and a focused vision: to deliver precision machining with reliability, integrity, and care"
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "A PRIVATE LIMITED COMPANY, key milestone in our journey of growth and formalization. from being a small, dependable workshop to becoming a Professionally Managed, Process-driven Company"
    },
    {
      year: "2022",
      title: "Technology Upgrade",
      description: "Home to numerous OEM’S , TIER 1 suppliers, and global manufacturing brands, Chakan offers direct access to a robust industrial ecosystem — including Vendors, Raw Material Suppliers, Logistics Providers , And Skilled Manpower"
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "We introduced Structured Documentation, Traceability Systems, and better control over workflow’s.With defined roles and responsibilities, our team became more organized and aligned with Long-term Goal’s. It also allowed us to implement financial discipline — enabling smarter reinvestment, Improved Planning, and eligibility for certifications and large-scale tenders."
    }
  ];

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochure/company-brochure.pdf"; // relative to /public
    link.download = "Company-Brochure.pdf"; // filename that will be saved
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                  <h2 className="text-2xl font-bold text-foreground mb-6">Our Establishment</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Founded in 2017, Kaveri GS AutoMech established as a partnership firm with a strong emphasis on delivering quality and precision
                    in every project.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Became Private Limited in 2021Transitioned to a structured, growth-focused company with formal systems and long-term vision,
                    Significantly expanded our capabilities
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Situated in Chakan, a thriving industrial hub near Pune, providing us with access to a robust ecosystem of talent, suppliers,
                    and logistical advantages.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every component undergoes a comprehensive series of stringent quality checks, ensuring exceptional precision and adherence 
                    to standards before being dispatched to our customers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer flexible manufacturing services, ranging from highly customized single-piece production to efficient batch production, 
                    precisely tailored to customer drawings and specifications.
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
            className="text-6xl md:text-6xl font-extrabold text-center mb-12 text-[hsl(var(--gs-primary))] drop-shadow-lg tracking-tight"
            >
            <span className="inline-block bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent">
              Who We Are?
            </span>
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
