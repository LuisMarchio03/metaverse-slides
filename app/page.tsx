"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Cpu,
  Zap,
  Eye,
  Brain,
  Users,
  Shield,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Metaverso: Da Promessa à Realidade",
    subtitle: "Uma Visão para o Futuro da Experiência Humana",
    author: "",
    role: "",
    type: "title",
    icon: Globe,
  },
  {
    id: 2,
    title: "O que é o Metaverso?",
    content: [
      {
        subtitle: "Definição",
        text: '"Ambientes digitais persistentes, interoperáveis e imersivos onde pessoas interagem com objetos, avatares e inteligências artificiais em tempo real."',
      },
      {
        subtitle: "Referências",
        items: [
          'Matthew Ball ("The Metaverse")',
          'Neal Stephenson ("Snow Crash")',
          "Mark Zuckerberg (visão corporativa)",
        ],
      },
    ],
    type: "content",
    icon: Eye,
  },
  {
    id: 3,
    title: "O Presente do Metaverso",
    content: [
      {
        subtitle: "O Hype vs a Realidade",
        items: [
          "Meta (Facebook), Roblox, Fortnite, Decentraland",
          "Uso limitado, experiência imatura, adoção restrita",
        ],
      },
      {
        subtitle: "Limitações Atuais",
        items: [
          "Hardware: pesado, caro, desconfortável",
          "Falta de interoperabilidade",
          "Desafios éticos e de governança",
        ],
      },
    ],
    type: "content",
    icon: Zap,
  },
  {
    id: 4,
    title: "Infraestrutura do Metaverso",
    content: [
      {
        subtitle: "Panorama Técnico",
        items: [
          "Protocolos abertos: OpenXR, Web3",
          "Engines: Unity, Unreal, WebXR, WebGPU",
          "IA e computação distribuída",
          "Edge computing + 5G/6G para baixa latência",
        ],
      },
    ],
    type: "content",
    icon: Cpu,
  },
  {
    id: 5,
    title: "Plataforma Web como Infraestrutura",
    content: [
      {
        subtitle: "Tecnologias Web Imersivas",
        items: [
          "WebXR: Realidade aumentada/virtual no navegador",
          "WebGPU: Acesso de baixo nível à GPU",
          "WebAssembly: Performance quase nativa no navegador",
          "OpenXR: Interoperabilidade entre dispositivos",
          "glTF: Formato leve para objetos 3D",
        ],
      },
    ],
    type: "content",
    icon: Globe,
  },
  {
    id: 6,
    title: "Vantagens da Web",
    content: [
      {
        subtitle: "Por que a Web é estratégica?",
        items: [
          "Acessível via URL: sem necessidade de instalação",
          "Multiplataforma: desktop, mobile, VR",
          "Atualização contínua e colaborativa",
          "Interoperabilidade e padrões abertos",
        ],
      },
    ],
    type: "content",
    icon: Zap,
  },
  {
    id: 7,
    title: "Ferramentas e Frameworks Web",
    content: [
      {
        subtitle: "Principais Tecnologias",
        items: [
          "A-Frame (Mozilla) - VR via HTML",
          "Three.js - Renderização 3D no browser",
          "Babylon.js - Engine completa WebGL/WebGPU",
          "Wonderland Engine - WebXR profissional",
        ],
      },
    ],
    type: "content",
    icon: Cpu,
  },
  {
    id: 8,
    title: "Visões de Futuro",
    content: [
      {
        subtitle: "Cenário 1: Sociedade Imersiva (Utopia)",
        items: [
          "Interações realistas com IA",
          "Educação e trabalho gamificados",
          "Medicina e engenharia no metaverso",
          "Cidadania digital",
          "Economia via DAOs e NFTs",
        ],
      },
    ],
    type: "content",
    icon: Brain,
  },
  {
    id: 9,
    title: "Cenário 2: O Colapso Digital (Distopia)",
    content: [
      {
        subtitle: "Riscos e Desafios",
        items: [
          "Domínio de grandes corporações",
          "Vício, alienação e controle",
          "Deepfakes e manipulação",
          "Simulações mais reais que o mundo físico",
        ],
      },
    ],
    type: "content",
    icon: Shield,
  },
  {
    id: 10,
    title: "Cenário 3: Equilíbrio Sustentável (Realista)",
    content: [
      {
        subtitle: "Caminho do Meio",
        items: [
          "Camada adicional, não substituta",
          "Uso nichado: medicina, defesa, design",
          "Regulamentações éticas e padrões abertos",
          "Governança descentralizada parcial",
        ],
      },
    ],
    type: "content",
    icon: Target,
  },
  {
    id: 11,
    title: "Reflexões Filosóficas",
    content: [
      {
        subtitle: "Questões Fundamentais",
        items: [
          "Qual o custo da imersão total?",
          "Estamos prontos para realidades mistas?",
          "Libertação ou prisão dourada?",
          "A IA será cidadã ou ferramenta?",
        ],
      },
    ],
    type: "content",
    icon: Lightbulb,
  },
  {
    id: 12,
    title: "Conclusão",
    content: [
      {
        subtitle: "O Estado Atual",
        text: "O metaverso está em sua fase pré-histórica",
      },
      {
        subtitle: "Precisamos de",
        text: "engenheiros, arquitetos, reguladores, artistas, pensadores",
      },
      {
        subtitle: "Reflexão Final",
        text: '"O metaverso não é um lugar. É a próxima evolução da internet – e da sociedade."',
      },
    ],
    type: "content",
    icon: Users,
  },

]

export default function MetaverseSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]
  const Icon = slide.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Icon className="w-6 h-6 text-purple-400" />
            <span className="font-semibold">Metaverso: Da Promessa à Realidade</span>
          </div>
          <div className="text-sm text-gray-300">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="pt-20 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          {slide.type === "title" && (
            <div className="text-center space-y-8 py-16">
              <div className="space-y-4">
                <Icon className="w-20 h-20 mx-auto text-purple-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 font-light">{slide.subtitle}</p>
              </div>
              <div className="space-y-2 pt-8">
                <p className="text-xl font-semibold text-purple-300">{slide.author}</p>
                <p className="text-lg text-gray-400">{slide.role}</p>
              </div>
            </div>
          )}

          {slide.type === "content" && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Icon className="w-16 h-16 mx-auto text-purple-400" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
              </div>

              <div className="space-y-8">
                {slide.content?.map((section, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h2 className="text-2xl font-semibold text-purple-300 mb-4">{section.subtitle}</h2>
                    {section.text && <p className="text-lg text-gray-300 leading-relaxed italic">{section.text}</p>}
                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-lg text-gray-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="flex items-center justify-between p-4">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-purple-400 scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 disabled:opacity-50"
          >
            Próximo
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Keyboard navigation */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="w-full h-full"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === " ") {
              e.preventDefault()
              nextSlide()
            } else if (e.key === "ArrowLeft") {
              e.preventDefault()
              prevSlide()
            }
          }}
          tabIndex={0}
        />
      </div>
    </div>
  )
}
