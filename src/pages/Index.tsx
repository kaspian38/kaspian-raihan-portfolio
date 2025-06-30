import { useState } from "react";
import { Mail, Phone, Github, Linkedin, ArrowRight, Code, Star, User, Briefcase, Contact } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const skills = ["Python", "C", "Java", "HTML/CSS", "JavaScript", "Bootstrap", "TensorFlow", "Django", "React", "Pandas", "scikit-learn", "Software Testing & QA", "Database Management", "AI/ML Development"];
  const projects = [{
    title: "Stock Price Prediction Using AI",
    description: "RNN-based model with sentiment analysis for accurate stock price forecasting",
    technologies: ["Python", "TensorFlow", "RNN", "NLP"]
  }, {
    title: "Movie Suggestion Site",
    description: "Content-based filtering system for personalized movie recommendations",
    technologies: ["Python", "Django", "Machine Learning"]
  }, {
    title: "AI-Powered Chatbot",
    description: "Intelligent conversational AI using natural language processing",
    technologies: ["NLP", "TensorFlow", "RNN", "Python"]
  }, {
    title: "Medicine Recommendation Using ML",
    description: "Classification algorithm for personalized medicine suggestions",
    technologies: ["Python", "scikit-learn", "Classification"]
  }, {
    title: "Disease Detection Using ML",
    description: "Multi-algorithm approach for accurate disease prediction",
    technologies: ["Decision Trees", "SVM", "Deep Learning"]
  }, {
    title: "LLM Chatbot",
    description: "Advanced chatbot powered by GPT-based language models",
    technologies: ["GPT", "Python", "OpenAI API"]
  }];
  const services = [{
    title: "AI/ML Development",
    description: "Custom AI and machine learning solutions tailored to your business needs"
  }, {
    title: "Software Quality Assurance",
    description: "Comprehensive testing and QA services to ensure software reliability"
  }, {
    title: "Data Analysis",
    description: "Advanced data analysis and insights to drive business decisions"
  }, {
    title: "Custom Software Solutions",
    description: "End-to-end software development with focus on quality and performance"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">Kaspian</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-white/80 hover:text-white transition-colors duration-300">
                  {item}
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-white">
              <div className="mb-6">
                <span className="text-orange-400 font-medium">Hello, I'm</span>
                <h1 className="text-5xl lg:text-6xl font-bold mt-2 mb-4">
                  Md. Kaspian Raihan
                </h1>
                <h2 className="text-2xl lg:text-3xl text-white/90 mb-6">
                  Software Quality Assurance Engineer & AI/ML Developer
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  A highly motivated Computer Science Engineer specializing in Software Quality Assurance, 
                  AI/ML development, and innovative software solutions. Passionate about creating robust, 
                  intelligent systems that make a difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection("projects")} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => scrollToSection("contact")} variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src="https://i.postimg.cc/KzCJCvfF/245482619-1013790496141550-6785660270570192208-n.jpg" alt="Md. Kaspian Raihan" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <Star className="w-6 h-6 text-orange-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img alt="Md. Kaspian Raihan" className="w-full h-full object-fill" src="/lovable-uploads/3fba86f9-f37d-424d-88b3-9bbb6ae6f68a.png" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Designing Solutions, Not Just Visuals</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a highly motivated and detail-oriented Software Quality Assurance enthusiast with a 
                strong foundation in Computer Science Engineering. I graduated with a B.Sc in CSE from 
                Eastern University in 2024, where I developed a deep passion for ensuring software excellence 
                and innovation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an Independent AI/ML Developer & Researcher, I focus on developing cutting-edge AI/ML models, 
                conducting research, and contributing to the advancement of intelligent systems. My thesis work 
                on "Quantum Neural Networks vs. Classical Models" demonstrates my commitment to exploring 
                emerging technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">AI/ML Research & Development</h4>
                    <p className="text-gray-600 text-sm">Specialized in developing intelligent systems and machine learning solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Software Quality Assurance</h4>
                    <p className="text-gray-600 text-sm">Ensuring software reliability and performance through comprehensive testing</p>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive skill set covering software development, AI/ML, and quality assurance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4 text-center ">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{skill}</h3>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative AI/ML solutions and software development projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <span key={techIndex} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional services tailored to meet your software development and quality assurance needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your next project and create something amazing together.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, innovative projects, 
                  and ways we can work together to bring your ideas to life.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 bg-violet-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">kaspian.raihan5226@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-white/80">+8801745262631</p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="icon" className="border-white/30 hover:bg-white/10 text-neutral-800">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-white/30 hover:bg-white/10 text-green-900">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="bg-white/10 border-white/30 text-white placeholder:text-white/60" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="bg-white/10 border-white/30 text-white placeholder:text-white/60" required />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} className="bg-white/10 border-white/30 text-white placeholder:text-white/60 min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 mb-4 md:mb-0">© 2025 Md. Kaspian Raihan. All rights reserved.</div>
            <div className="flex space-x-6">
              {["Home", "About", "Projects", "Contact"].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-white/60 hover:text-white transition-colors duration-300">
                  {item}
                </button>)}
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;