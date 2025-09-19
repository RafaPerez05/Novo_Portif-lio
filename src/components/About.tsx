import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Code, Palette, Users, Lightbulb, Zap } from 'lucide-react'
import { useLanguage } from '../components/ui/languageContext' // importe o hook

// MOVA O OBJETO texts PARA FORA DO COMPONENTE
const skillsIcons = { Users, Lightbulb, Palette, Zap, Code }

const texts = {
  en: {
    aboutMe: "About Me",
    getToKnow: "Get to know the person behind the code",
    myJourney: "My Journey",
    journey1: "Graduated in Systems Analysis and Development from Fatec de Presidente Prudente, I've developed a strong foundation in both technical and design aspects of software development.",
    journey2: "As a Full Stack Developer and UX Design Specialist, my passion for new technologies and curiosity drives me to constantly evolve in the technology field.",
    journey3: "I believe that great software comes from understanding both the technical implementation and the human experience. This philosophy guides my approach to every project I work on.",
    interpersonal: "Interpersonal Skills",
    stats: [
      { number: '20', label: 'Years', suffix: ' ' },
      { number: '7', label: 'Projects', suffix: '+' },
      { number: '2', label: 'Years', suffix: '+', sublabel: 'Experience' },
      { number: '100', label: 'Passion', suffix: '%' },
    ],
    skills: [
      { icon: 'Users', title: 'Effective Communication', description: 'Clear and impactful communication with teams and clients' },
      { icon: 'Lightbulb', title: 'Problem Solving', description: 'Creative solutions to complex technical challenges' },
      { icon: 'Palette', title: 'Creativity', description: 'Innovative design thinking and artistic vision' },
      { icon: 'Users', title: 'Empathy', description: 'Understanding user needs and team dynamics' },
      { icon: 'Zap', title: 'Flexibility', description: 'Adapting quickly to new technologies and methodologies' },
      { icon: 'Code', title: 'Proactivity', description: 'Taking initiative and driving projects forward' },
    ],
    degree: "Systems Analysis and Development",
    college: "Fatec de Presidente Prudente",
    age: "20 years old",
    name: "Rafael Perez Silva"
  },
  pt: {
    aboutMe: "Sobre Mim",
    getToKnow: "Conheça a pessoa por trás do código",
    myJourney: "Minha Jornada",
    journey1: "Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de Presidente Prudente, desenvolvi uma base sólida tanto em aspectos técnicos quanto de design de software.",
    journey2: "Como Desenvolvedor Full Stack e Especialista em UX Design, minha paixão por novas tecnologias e curiosidade me impulsionam a evoluir constantemente no campo da tecnologia.",
    journey3: "Acredito que um ótimo software nasce da compreensão tanto da implementação técnica quanto da experiência humana. Essa filosofia guia minha abordagem em cada projeto.",
    interpersonal: "Habilidades Interpessoais",
    stats: [
      { number: '20', label: 'Anos', suffix: ' ' },
      { number: '7', label: 'Projetos', suffix: '+' },
      { number: '2', label: 'Anos', suffix: '+', sublabel: 'Experiência' },
      { number: '100', label: 'Paixão', suffix: '%' },
    ],
    skills: [
      { icon: 'Users', title: 'Comunicação Eficaz', description: 'Comunicação clara e impactante com equipes e clientes' },
      { icon: 'Lightbulb', title: 'Resolução de Problemas', description: 'Soluções criativas para desafios técnicos complexos' },
      { icon: 'Palette', title: 'Criatividade', description: 'Pensamento inovador em design e visão artística' },
      { icon: 'Users', title: 'Empatia', description: 'Compreensão das necessidades dos usuários e da equipe' },
      { icon: 'Zap', title: 'Flexibilidade', description: 'Adaptação rápida a novas tecnologias e metodologias' },
      { icon: 'Code', title: 'Proatividade', description: 'Iniciativa e impulsionamento de projetos' },
    ],
    degree: "Análise e Desenvolvimento de Sistemas",
    college: "Fatec de Presidente Prudente",
    age: "20 anos",
    name: "Rafael Perez Silva"
  }
}

const About = () => {
  const { language } = useLanguage()
  const t = texts[language]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* ... */}
          {/* Interpersonal Skills */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyber-white mb-6">
              {t.interpersonal}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {t.skills.map((skill, index) => {
                const IconComponent = skillsIcons[skill.icon]
                return (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
                    className="p-4 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-all duration-300 group"
                  >
                    <IconComponent className="text-cyber-blue group-hover:text-cyber-purple transition-colors duration-300 mb-2" size={20} />
                    <h4 className="font-semibold text-cyber-white text-sm mb-1">{skill.title}</h4>
                    <p className="text-xs text-cyber-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
          {/* ... */}
          {/* Bottom Statistics */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {t.stats.map((stat, index) => (
              <motion.div
                key={stat.label + stat.number + stat.suffix}
                whileHover={{ scale: 1.05 }}
                className="text-center glass p-6 rounded-xl"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-cyber-off-white text-sm">
                  {stat.label}
                  {stat.sublabel && <br />}
                  {stat.sublabel && <span className="text-xs">{stat.sublabel}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About