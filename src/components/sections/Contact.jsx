import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import BlurText from "../animations/BlurText";
import ScrollReveal from "../animations/ScrollReveal";
import ShinyButton from "../animations/ShinyButton";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_mgl3rbo
  //template_chfc7jk
  //qiFbD-ct1WyfM2DWX

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Neonym",
          email: form.email,
          to_email: "contact.neonym@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);

      Swal.fire({
        title: "Message Sent!",
        text: "I'll get back to you as soon as possible.",
        icon: "success",
        background: "#fffbf5", // BG Color
        color: "#5c5451", // Text / Subtitle Color
        iconColor: "#a18080", // Flower & Title Color
        confirmButtonColor: "#a18080", // Flower & Title Color
        confirmButtonText: "Okay!",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);

      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        background: "#fffbf5",
        color: "#5c5451",
        iconColor: "#a18080",
        confirmButtonColor: "#a18080",
        confirmButtonText: "Retry",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact.neonym@gmail.com",
      href: "mailto:contact.neonym@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8925418370",
      href: "tel:+91 8925418370",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      href: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-[#fffbf5] py-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <BlurText className="text-4xl md:text-5xl font-palanquin font-bold text-[#a18080] mb-6">
              Let's Work Together
            </BlurText>
            <p className="text-xl font-montserrat text-[#5c5451] max-w-3xl mx-auto leading-relaxed">
              Ready to bring your project to life? I'd love to hear about your
              ideas and discuss how we can create something amazing together.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <ScrollReveal>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#a18080]/10">
              <h2 className="text-2xl font-palanquin font-bold text-[#a18080] mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-montserrat font-medium text-[#5c5451] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full px-4 py-3 rounded-lg border border-[#a18080]/20 
                      focus:border-[#a18080] focus:ring-2 focus:ring-[#a18080]/10 
                      transition-all duration-200 font-montserrat
                      bg-[#fffbf5] text-[#5c5451]
                    "
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-montserrat font-medium text-[#5c5451] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full px-4 py-3 rounded-lg border border-[#a18080]/20 
                      focus:border-[#a18080] focus:ring-2 focus:ring-[#a18080]/10 
                      transition-all duration-200 font-montserrat
                      bg-[#fffbf5] text-[#5c5451]
                    "
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-montserrat font-medium text-[#5c5451] mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="
                      w-full px-4 py-3 rounded-lg border border-[#a18080]/20 
                      focus:border-[#a18080] focus:ring-2 focus:ring-[#a18080]/10 
                      transition-all duration-200 font-montserrat resize-vertical
                      bg-[#fffbf5] text-[#5c5451]
                    "
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <ShinyButton
                  className="w-full flex items-center justify-center"
                  type="submit"
                  disabled={loading}
                >
                  <span className="flex items-center space-x-2">
                    {loading ? (
                      <>
                        <span>Sending...</span>
                        <Send size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </span>
                </ShinyButton>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-palanquin font-bold text-[#a18080] mb-6">
                  Get in Touch
                </h2>
                <p className="font-montserrat text-[#5c5451] leading-relaxed mb-8">
                  Whether you have a specific project in mind or just want to
                  explore possibilities, I'm here to help. Let's start a
                  conversation about your goals and how we can achieve them
                  together.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-[#a18080]/10 hover:border-[#a18080]/20 transition-colors duration-200">
                      <div className="p-3 bg-[#a18080]/10 rounded-full">
                        <Icon size={20} className="text-[#a18080]" />
                      </div>
                      <div>
                        <div className="text-sm font-montserrat font-medium text-[#5c5451] mb-1">
                          {info.label}
                        </div>
                        <div className="font-montserrat text-[#a18080]">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-[#a18080]/10 to-[#a18080]/5 rounded-xl p-6">
                <h3 className="font-palanquin font-bold text-[#a18080] mb-3">
                  Response Time
                </h3>
                <p className="font-montserrat text-[#5c5451] text-sm leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For
                  urgent projects, feel free to mention it in your message and
                  I'll prioritize accordingly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#a18080]/10 to-[#a18080]/5 rounded-xl p-6">
                <h3 className="font-palanquin font-bold text-[#a18080] mb-3">
                  Project Timeline
                </h3>
                <p className="font-montserrat text-[#5c5451] text-sm leading-relaxed">
                  Most projects are completed within 2-4 weeks, depending on
                  complexity and scope. We'll discuss timeline expectations
                  during our initial consultation.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
