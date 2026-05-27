import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import FeaturedProjectsSection from './components/FeaturedProjectsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import CertificatesSection from './components/CertificatesSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-gradient" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
