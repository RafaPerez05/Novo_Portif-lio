import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Globe, Palette, GraduationCap, ShoppingCart, Languages } from 'lucide-react'
import { useLanguage } from '../components/ui/languageContext'

const texts = {
  en: {
    title: "My Projects",
    subtitle: "A collection of my work showcasing development skills and creative design",
    categories: ['All', 'Designs', 'Projects'],
    viewCode: "View Code →",
    designProject: "Design Project",
    learnMore: "Learn More →",
    moreTech: (n) => `+${n} more`,
    ctaTitle: "Want to see more of my work?",
    ctaDesc: "Check out my GitHub profile for more projects and contributions to the open-source community.",
    visitGithub: "Visit GitHub Profile"
  },
  pt: {
    title: "Meus Projetos",
    subtitle: "Uma coleção dos meus trabalhos mostrando habilidades de desenvolvimento e design criativo",
    categories: ['Todos', 'Designs', 'Projetos'],
    viewCode: "Ver Código →",
    designProject: "Projeto de Design",
    learnMore: "Saiba Mais →",
    moreTech: (n) => `+${n} mais`,
    ctaTitle: "Quer ver mais do meu trabalho?",
    ctaDesc: "Veja meu perfil no GitHub para mais projetos e contribuições na comunidade open-source.",
    visitGithub: "Visitar Perfil no GitHub"
  }
}

const Projects = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = texts[language]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState(t.categories[0])

  const projects = [
    {
      id: 0,
      name: 'Educational blog for Energisa',
      description: 'Educational blog developed for Electricity Consumer Councils Concess',
      image: '/images/concess.png',
      technologies: ['PHP', 'JavaScript', 'MYSQL', 'MVC Pattern'],
      site: 'https://www.concess.com.br/',
      category: 'Projects',
      icon: Globe,
      featured: true
    },
    {
      id: 1,
      name: 'Mobile Agricultural Tracking App',
      description: 'React Native application for agricultural tracking with real-time monitoring capabilities and farmer-friendly interface.',
      image: '/images/rastreia_agro.png',
      technologies: ['React Native', 'JavaScript', 'Mobile APIs', 'Agriculture Tech'],
      github: 'https://github.com/RafaPerez05/-rastreiaagro',
      category: 'Projects',
      icon: Smartphone,
      featured: true
    },
    {
      id: 2,
      name: 'Orbicode Page',
      description: 'Page created for a startup Im a partner in',
      image: '/images/orbicode.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      category: 'Projects',
      site: 'https://orbicode.com.br/',
      icon: Globe,
      featured: true
    },
    {
      id: 3,
      name: 'E-commerce Platform',
      description: 'Full-featured sales website developed using modeling techniques and design patterns for scalable architecture.',
      image: '/images/tocaDoBoi.png',
      technologies: ['PHP', 'MySQL', 'Design Patterns', 'E-commerce'],
      github: 'https://github.com/RafaPerez05/TocadoBoi',
      category: 'Projects',
      icon: ShoppingCart,
      featured: true
    },
    {
      id: 4,
      name: 'Educational Data Structures Site',
      description: 'Interactive educational website developed to teach data structures with visual examples and exercises.',
      image: '/images/ed.jpg',
      technologies: ['Web Development', 'Educational Tech', 'Interactive Learning'],
      github: 'https://github.com/Yan0606/Ambiente-E.D',
      category: 'Projects',
      icon: GraduationCap,
      featured: true
    },
    {
      id: 5,
      name: 'PHP Sales Platform',
      description: 'Sales website prototype built with PHP following MVC pattern for clean, maintainable code architecture.',
      image: '/images/ecommerce-mockup.png',
      technologies: ['PHP', 'MVC Pattern', 'Web Development', 'Backend'],
      github: 'https://github.com/RafaPerez05/xhopii-final-v3',
      category: 'Projects',
      icon: Globe,
      featured: false
    },
    {
      id: 6,
      name: 'Event Promotional Flyer',
      description: 'Creative promotional flyer designed for Aguardente brand presence at events with modern visual appeal.',
      image: '/images/FolderGolden.jpg',
      technologies: ['Graphic Design', 'Brand Identity', 'Print Design'],
      category: 'Designs',
      icon: Palette,
      featured: false
    },
    {
      id: 7,
      name: 'Social Media Flyer',
      description: 'Eye-catching social media flyer created for a tereré brand to enhance their social media presence.',
      image: '/images/PropagandaBATATEC.jpg',
      technologies: ['Social Media Design', 'Brand Marketing', 'Visual Design'],
      category: 'Designs',
      icon: Palette,
      featured: false
    }
  ]


  // Atualiza o filtro quando o idioma mudar
  useEffect(() => {
    setActiveFilter(t.categories[0])
  }, [language])

  const filteredProjects = activeFilter === t.categories[0]
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.title}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-cyber-off-white text-lg max-w-2xl mx-auto mb-8">
              {t.subtitle}
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4">
              {t.categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-cyber text-white shadow-lg'
                      : 'border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ${
                  project.featured ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-3">
                        {project.github && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-cyber-blue/80 rounded-full text-white hover:bg-cyber-blue transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                          </motion.a>
                        )}
                        {project.site &&( 
                          <motion.a
                          href={project.site}
                          target="_blank"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-cyber-purple/80 rounded-full text-white hover:bg-cyber-purple transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                        </motion.a>)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-cyber-blue/20 rounded-lg mr-3">
                      <project.icon size={20} className="text-cyber-blue" />
                    </div>
                    <span className="text-xs text-cyber-blue font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-cyber-white mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-cyber-off-white text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyber-gray text-cyber-blue text-xs rounded border border-cyber-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-cyber-gray text-cyber-off-white text-xs rounded">
                        {t.moreTech(project.technologies.length - 3)}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-cyber-gray">
                    {project.github || project.site? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-blue hover:text-cyber-purple transition-colors duration-300 text-sm font-medium"
                      >
                        {t.viewCode}
                      </a>
                    ) : (
                      <span className="text-cyber-off-white text-sm">
                        {t.designProject}
                      </span>
                    )}
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-green hover:text-cyber-blue transition-colors duration-300 text-sm font-medium"
                      >
                        {t.learnMore}
                      </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-cyber-white mb-4">
                {t.ctaTitle}
              </h3>
              <p className="text-cyber-off-white mb-6">
                {t.ctaDesc}
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/RafaPerez05"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-cyber text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Github className="mr-2" size={20} />
                {t.visitGithub}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
