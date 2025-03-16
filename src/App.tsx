import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Book, Briefcase, Code, GraduationCap, User, Download, Link, Menu, X, Clock, RefreshCw, Eye } from 'lucide-react';

import myProfilePic from "./Assets/tejas.jpg";




function useIntersectionObserver(callback: IntersectionObserverCallback) {
  const observer = useRef<IntersectionObserver | null>(null);



  
  useEffect(() => {
    observer.current = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback]);

  return observer.current;
}

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);




  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-content').forEach((section) => {
      observer.observe(section);
    });

    document.querySelectorAll('.skill-tag').forEach((tag, index) => {
      (tag as HTMLElement).style.setProperty('--delay', `${index * 100}ms`);
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      {/* ✅ Navbar added here */}


      <nav
        className={`fixed top-4 z-50 backdrop-blur-lg shadow-md rounded-full transition-all duration-300 ${scrolling
          ? 'md:right-4 right-1/2 translate-x-1/2 md:translate-x-0 bg-gradient-to-r from-blue-800/90 to-blue-600/90 scale-95'
          : 'left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-700/50 to-blue-500/50'
          }`}
        style={{
          padding: '8px 48px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '90%',
        }}
      >
        <div className="flex items-center justify-between gap-16">
          {/* ✅ Logo */}
          <a
            href="/"
            className="text-xl font-bold tracking-wide whitespace-nowrap"
            style={{
              color: '#1f2937',
            }}
          >
            Tejas Portfolio
          </a>

          {/* ✅ Desktop Links */}
          <div className="hidden md:flex gap-5">
            {[
              { name: 'Skills', icon: Code },
              { name: 'Projects', icon: ExternalLink },
              { name: 'Experience', icon: Briefcase },
              { name: 'Contact', icon: Mail },
            ].map(({ name, icon: Icon }) => (
              <a
                key={name}
                href={`#${name.toLowerCase()}`}
                className={`flex items-center gap-2 text-base font-semibold tracking-wide px-3 py-1.5 transition duration-300 ${scrolling ? 'text-gray-800 hover:text-gray-500' : 'text-gray-700 hover:text-gray-500'
                  }`}
                style={{
                  transition: 'color 0.3s ease',
                  borderRadius: '8px',
                }}
              >
                <Icon size={16} className="text-gray-500 transition-transform duration-300 group-hover:scale-110" />
                {name}
              </a>
            ))}
          </div>

          {/* ✅ Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? (
                <X size={28} className="text-gray-700" />
              ) : (
                <Menu size={28} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full right-0 bg-white shadow-md rounded-lg mt-2 py-2 w-48">
            {[
              { name: 'Skills', icon: Code },
              { name: 'Projects', icon: ExternalLink },
              { name: 'Experience', icon: Briefcase },
              { name: 'Contact', icon: Mail },
            ].map(({ name, icon: Icon }) => (
              <a
                key={name}
                href={`#${name.toLowerCase()}`}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Icon size={16} className="text-gray-500" />
                {name}
              </a>
            ))}
          </div>
        )}
      </nav>



      {/* Header/Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-32 animate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar Section */}
            <div className="avatar-container relative">
              <div className="w-65 h-64 rounded-full border-4 border-white shadow-xl overflow-hidden">
                <img
                  src={myProfilePic}
                  alt="Tejas Mohan Puri"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Info Section */}
            <div className="flex-1 text-center md:text-left">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                  Tejas Mohan Puri
                </h1>
                <div className="glass-card inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                  <p className="text-xl text-blue-100">Full-Stack Developer | Cybersecurity Enthusiast</p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                  <a href="mailto:tejaspuri789@gmail.com"
                    className="contact-button flex items-center gap-2 hover:text-blue-200 transition-all duration-300 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:scale-105 transform">
                    <Mail size={18} /> tejaspuri789@gmail.com
                  </a>
                  <a href="tel:+918600076388"
                    className="contact-button flex items-center gap-2 hover:text-blue-200 transition-all duration-300 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:scale-105 transform">
                    <Phone size={18} /> +91 8600076388
                  </a>
                  <span className="contact-button flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                    <MapPin size={18} /> Pune, India
                  </span>
                </div>

                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="https://github.com/Tejas8600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 transform">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/tejas-puri-27b0b612b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 transform">
                    <Linkedin size={24} />
                  </a>

                  <div className="flex gap-4 justify-center md:justify-start">
                    {/* ✅ Resume Button */}
                    <a href="/embed.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 transform">
                      <span className="text-white font-medium">Resume</span>
                      {/* <div className="absolute -bottom-2 -right-6 bg-blue-500 p-2 rounded-full shadow-lg">
                      <Download size={20} className="animate-bounce" />
                    </div> */}
                    </a>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor" fillOpacity="0.1"></path>
          </svg>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-6xl -mt-16 relative z-20 space-y-24 pb-24">
        {/* Quick Stats */}
        <div className="space-y-8">
          {/* ✅ About Me Section (Full Width) */}
          <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <User className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
            </div>
            <p className="text-gray-600">
              I am a passionate software developer with a strong background in <strong>Full-stack Development</strong> and <strong>CyberSecurity</strong>.
              I specialize in building scalable web applications using modern frameworks like Spring Boot and React.js.
              My expertise in API development, database management, and security protocols helps me create secure and
              efficient solutions. I’m constantly learning and improving, driven by my curiosity for technology and problem-solving.
            </p>
          </div>

          {/* ✅ Education and Technical Skills Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Section */}
            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Award className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Education</h3>
              </div>
              <p className="text-gray-600 font-medium">Bachelor of Engineering in Information Technology</p>
              <p className="text-gray-600">Savitribai Phule Pune University, Pune</p>
              <p className="text-gray-600">CGPA: 7.96</p>

              <div className="mt-4">
                <p className="text-gray-800 font-semibold">Relevant Coursework:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Operating Systems</li>
                  <li>Computer Networks</li>
                  <li>Software Engineering</li>
                  <li>Web Development</li>
                  <li>Cybersecurity</li>
                </ul>
              </div>
            </div>

            {/* ✅ Soft Skills Section */}
            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <User className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Soft Skills</h3>
              </div>

              <ul className="list-none space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600"><User size={20} /></span>
                  <span className="text-gray-700">Effective Communication</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600"><Code size={20} /></span>
                  <span className="text-gray-700">Problem-Solving and Critical Thinking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600"><Briefcase size={20} /></span>
                  <span className="text-gray-700">Team Collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600"><Clock size={20} /></span>
                  <span className="text-gray-700">Time Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600"><RefreshCw size={20} /></span>
                  <span className="text-gray-700">Adaptability and Flexibility</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600"><Eye size={20} /></span>
                  <span className="text-gray-700">Attention to Detail</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section id='skills'>
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
          </div>
          <div className="section-content grid md:grid-cols-2 gap-8">
            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['Java 8', 'Python', 'JavaScript', 'SQL'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Frontend Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML5', 'CSS3', 'React.js', 'Bootstrap'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Backend Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {['Spring', 'Hibernate', 'Spring Security', 'Microservices', 'Spring MVC', 'Spring Data JPA'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Databases</h3>
              <div className="flex flex-wrap gap-3">
                {['MySQL', 'MongoDB'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Devops & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Docker', 'Maven', 'Git', 'Postman'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>


          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Cybersecurity Skills</h2>
          </div>
          <div className="section-content grid md:grid-cols-2 gap-8">

            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Web Security</h3>
              <div className="flex flex-wrap gap-3">
                {['HTTPS', 'SSL/TLS'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Monitoring & Threat Detection</h3>
              <div className="flex flex-wrap gap-3">
                {['Wireshark', 'Nmap', 'SIEM Tools (Splunk)', 'Log Monitoring'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Authentication & Authorization</h3>
              <div className="flex flex-wrap gap-3">
                {['JWT', , 'OAuth2'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Network Security</h3>
              <div className="flex flex-wrap gap-3">
                {['VPN', 'Firewall Configuration', 'IDS', 'IPS'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Application Security</h3>
              <div className="flex flex-wrap gap-3">
                {['Encryption (AES, RSA)', 'Secure Coding'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>



            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Penetration Testing</h3>
              <div className="flex flex-wrap gap-3">
                {['Kali Linux', 'Burp Suite'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">Operating Systems</h3>
              <div className="flex flex-wrap gap-3">
                {['Kali Linux', 'Windows', 'macOS'].map((os) => (
                  <span key={os} className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {os}
                  </span>
                ))}
              </div>
            </div>


            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-6 text-gray-800">API Security</h3>
              <div className="flex flex-wrap gap-3">
                {['Rate Limiting', 'Input Validation'].map((skill) => (
                  <span key={skill}
                    className="skill-tag bg-blue-50 text-blue-700 px-6 py-3 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Experience Section */}
        <section id='experience'>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
          </div>

          <div className="section-content">
            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-2xl text-gray-800">Java Fullstack Developer</h3>
                  <p className="text-blue-600 text-lg">Profound Edutech, Pune, India</p>
                </div>
                <span className="glass-card bg-blue-50 text-blue-700 px-6 py-2 rounded-xl text-sm font-medium">
                  Oct 2023 - May 2024
                </span>
              </div>

              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Completed a 6-month intensive training in <strong>Java</strong>, <strong>Python</strong>, and <strong>JavaScript</strong>, mastering both frontend and backend development.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Developed multiple full-stack applications using the <strong>MERN stack</strong> and <strong>Spring Boot</strong>, implementing features like authentication, authorization, and CRUD operations.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Managed databases including <strong>MySQL</strong> and <strong>MongoDB</strong>, improving query efficiency by <strong>30%</strong> through indexing and optimized schema design.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Used <strong>Git</strong> for version control, collaborated with a team of 5 developers using <strong>Agile methodology</strong> to deliver projects on time.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Integrated and tested RESTful APIs with <strong>Postman</strong>, achieving a <strong>98% success rate</strong> in automated tests.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Focused on backend performance optimization, reducing API response time by <strong>40%</strong> through caching and code refactoring.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Worked with <strong>Docker</strong> to containerize applications, ensuring scalable and consistent deployments.
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="/certificate1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  <ExternalLink size={18} /> View Certificate
                </a>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-2xl text-gray-800">Cyber Security & Digital Forensics</h3>
                  <p className="text-blue-600 text-lg">Cyber Secured India</p>
                </div>
                <span className="glass-card bg-blue-50 text-blue-700 px-6 py-2 rounded-xl text-sm font-medium">
                  Sep 2024 - Dec 2024
                </span>
              </div>

              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Gained knowledge in <strong>Computer & OS Fundamentals </strong> across multiple operating systems.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Enhanced understanding of <strong>Network Fundamentals</strong>, focusing on protocols such as <strong>TCP/IP, DNS, </strong>and <strong>DHCP</strong>.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Applied <strong>Reconnaissance techniques</strong> for gathering critical information.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Studied <strong>Types of Injections</strong>, including SQL injection and command injection, to prevent security threats.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Explored <strong>Nmap</strong> for network scanning and vulnerability discovery.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Studied <strong>Cloud Fundamentals</strong>, focusing on <strong>cloud security </strong>best practices.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Gained insights into <strong>Digital Forensics</strong>, covering forensic tools, methodologies, and case studies.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span className="text-gray-700">
                    Developed an advanced understanding of <strong>Knowing Digital Forensics</strong> Better, including evidence collection and analysis.
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="/certificate2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  <ExternalLink size={18} /> View Certificate
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* ✅ Featured Projects Section */}
        <section id='projects'>
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
          </div>

          <div className="section-content grid md:grid-cols-2 gap-8">
            {/* ✅ E-commerce Web App (Work in Progress) */}
            <div className="project-card glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-4 text-gray-800">E-commerce Web App (Work in Progress)</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Developing an E-commerce platform using Spring Boot and React.js.</li>

                <li>Designed a dynamic navbar that updates based on user login status.</li>
                <li>Integrated MySQL for data management and Postman for API testing.</li>
                <li>Implementing JWT-based authentication for secure login/signup.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Spring Boot', 'React.js', 'JWT', 'MySQL', 'Postman'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Tejas8600/Java_Projects/tree/main/E-com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  <Github size={18} /> GitHub
                </a>
                <button
                  disabled
                  className="inline-flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-full shadow-md opacity-70 cursor-not-allowed"
                >
                  <ExternalLink size={18} /> Coming Soon
                </button>
              </div>
            </div>

            {/* ✅ Food Delivery App (MERN) */}
            <div className="project-card glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-4 text-gray-800">FOODIEE! – ORDER & CHECKOUT SYSTEM</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Developed a food ordering system using React.js, Node.js, Express.js, and MongoDB.</li>
                <li>Created an intuitive interface for browsing and adding items to the cart.</li>
                <li>Integrated secure user authentication with JWT.</li>
                <li>Optimized MongoDB queries, reducing checkout time by 30%.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Postman'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Tejas8600/MERN_Projects/tree/main/Food-Delivery-App-MERN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://food-delivery-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>

            {/* ✅ Network Scanner */}
            <div className="project-card glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-4 text-gray-800">Network Scanner</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Developed a network scanner to discover connected devices using ARP, ICMP, and UDP scans.</li>
                <li>Implemented multi-threading for faster and efficient scanning.</li>
                <li>Integrated passive sniffing to capture network activity without active probing.</li>
                <li>Supports subnet discovery, IP range validation, and scanning automation.</li>
                <li>Retrieves MAC addresses, hostnames, and vendor details for device identification.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Spring Boot', 'React.js', 'MySQL', 'JWT'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Tejas8600/Java_Projects/tree/main/smart_workspace_management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://smartworkspace-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>


            {/* ✅ Employee Management System */}
            <div className="project-card glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-4 text-gray-800">Employee Management System</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Built a full-stack EMS using Spring Boot, React.js, Hibernate, and MySQL.</li>
                <li>Developed 10+ RESTful APIs for efficient employee data management.</li>
                <li>Reduced data retrieval time by 30% by optimizing SQL queries and indexing.</li>
                <li>Automated 100+ API tests using Postman for bug-free deployment.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Java', 'Spring Boot', 'MySQL', 'React.js', 'Postman'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Tejas8600/Java_Projects/tree/main/Employee-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://employeemgmt-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>

            {/* ✅ Smart Workspace Management System
            <div className="project-card glass-card bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-xl mb-4 text-gray-800">Smart Workspace Management System</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Built a workspace booking system using Java Spring Boot and React.js.</li>
                <li>Implemented real-time booking and workspace analytics.</li>
                <li>Integrated JWT-based user authentication for secure access.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Spring Boot', 'React.js', 'MySQL', 'JWT'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Tejas8600/Java_Projects/tree/main/smart_workspace_management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://smartworkspace-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div> */}


          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
          </div>
          <div className="section-content grid md:grid-cols-2 gap-6">
            {[
              { name: 'Oracle Java Foundations', icon: Code },
              { name: 'Python Beyond Basics (Udemy)', icon: Award },
              { name: 'MySQL Explorer (Oracle)', icon: Book },
              { name: 'Web Development (InternShala)', icon: Code },
            ].map((cert) => (
              <div key={cert.name}
                className="glass-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <cert.icon className="text-blue-600" size={24} />
                </div>
                <span className="font-medium text-gray-800">{cert.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Contact Section */}
        <section id="contact" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="text-blue-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* ✅ Contact Info */}
              <div className="flex flex-col justify-center h-full">
                <p className="text-gray-600 mb-6">
                  Feel free to reach out for collaboration, project discussions, or just to say hi!
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:tejaspuri789@gmail.com"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition duration-300"
                  >
                    <Mail size={20} /> tejaspuri789@gmail.com
                  </a>
                  <a
                    href="tel:+918600076388"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition duration-300"
                  >
                    <Phone size={20} /> +91 8600076388
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tejas-puri-27b0b612b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition duration-300"
                  >
                    <Linkedin size={20} /> LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* ✅ Contact Form */}
              <form
                // action="https://formspree.io/f/mkgjgopb"
                // method="POST"
                className="glass-card bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  
                  className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-6">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-sm text-gray-400">
            © 2023 Tejas Mohan Puri. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://github.com/Tejas8600"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tejas-puri-27b0b612b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:tejaspuri789@gmail.com"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;