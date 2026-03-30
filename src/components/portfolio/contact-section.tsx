import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "Achraf_fariss@um5.ac.ma",
    href: "mailto:Achraf_fariss@um5.ac.ma",
    hint: "Best way to reach me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212 651 120 806",
    href: "tel:+212651120806",
    hint: "Available during business hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Morocco",
    href: "https://maps.google.com/?q=Morocco",
    hint: "Open to relocation",
  },
];

const socialLinks = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/achraffariss", hint: "Connect with me" },
  ];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-300">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Open to internship opportunities, collaborations, and professional conversations around
            industrial innovation and digital transformation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass-card p-5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                    <p className="text-xs text-foreground/40 mt-0.5">{item.hint}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {socialLinks.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3 glass-card p-4 hover:border-cyan-500/30 transition-all group"
                >
                  <Icon className="h-5 w-5 text-cyan-400/70 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-sm font-medium text-foreground/70 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="space-y-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center">
                <Send className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Ready to Collaborate?</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                Whether you have an internship opportunity, a project collaboration, or just want
                to connect - I'm always open to meaningful conversations about innovation, quality,
                and industrial management.
              </p>
              <ul className="space-y-2">
                {[
                  "Internship opportunities in quality / innovation",
                  "Industrial process improvement projects",
                  "Digital transformation & Power BI solutions",
                  "Academic or professional networking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => window.open("mailto:Achraf_fariss@um5.ac.ma")}
                className="gap-2 flex-1"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+212651120806")}
                className="gap-2 flex-1"
              >
                <Phone className="h-4 w-4" />
                Call Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

