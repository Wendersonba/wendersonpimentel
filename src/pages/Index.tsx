
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { FeatureList, FeatureItem } from "@/components/feature-list";
import { TestimonialCard } from "@/components/testimonial-card";
import { AnimatedHero } from "@/components/animated-hero";
import { AnimatedBook } from "@/components/animated-book";
import { 
  Check, 
  BookOpen, 
  List, 
  ShoppingBag, 
  Clock, 
  Coffee, 
  Droplets,
  FileText,
  Users,
  Star,
  ShieldCheck,
  Gift,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

// Link de pagamento Hotmart
const PAYMENT_LINK = "https://pay.hotmart.com/B99182766G?bid=1744885769238";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* SECTION 1: Header/Hero */}
      <Section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-secondary/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Transforme Sua Alimentação e Alcance Seus Objetivos
                <span className="block text-primary mt-2">
                  de Forma Simples, Barata e Sustentável
                </span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Um guia prático e direto para perder peso, ganhar saúde ou alcançar a hipertrofia, 
              mesmo com pouco tempo e orçamento limitado.
            </motion.p>
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CTAButton size="lg" href={PAYMENT_LINK}>
                Quero Mudar Minha Alimentação Agora
              </CTAButton>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-64 md:h-full"
          >
            <AnimatedHero />
          </motion.div>
        </div>
      </Section>

      {/* Author Information */}
      <Section className="py-6 bg-gray-50">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Wenderson Pimentel</h3>
          <p className="text-lg text-gray-700">Educador Físico</p>
          <p className="text-md text-gray-600">CREF: 016358-G/BA</p>
        </div>
      </Section>

      {/* SECTION 2: About the eBook */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            O Que Você Vai Encontrar no eBook de Reeducação Alimentar
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Chega de dietas malucas, cardápios complicados ou promessas milagrosas.
            <br />
            Neste eBook, você vai aprender como mudar sua alimentação de forma consciente, 
            prática e saudável — sem gastar muito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <FeatureList className="text-lg">
              <FeatureItem icon={<Clock size={24} />}>
                Como montar marmitas para a semana inteira
              </FeatureItem>
              <FeatureItem icon={<ShoppingBag size={24} />}>
                Estratégias simples para perder peso ou ganhar massa
              </FeatureItem>
              <FeatureItem icon={<Droplets size={24} />}>
                Dicas sobre sono, hidratação e organização
              </FeatureItem>
              <FeatureItem icon={<List size={24} />}>
                Lista de compras inteligente
              </FeatureItem>
            </FeatureList>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <FeatureList className="text-lg">
              <FeatureItem icon={<FileText size={24} />}>
                Leitura de rótulos e trocas saudáveis
              </FeatureItem>
              <FeatureItem icon={<Coffee size={24} />}>
                Mais de 16 sugestões de refeições acessíveis
              </FeatureItem>
              <FeatureItem icon={<BookOpen size={24} />}>
                Receitas fit simples e gostosas
              </FeatureItem>
              <FeatureItem icon={<Star size={24} />}>
                QR Code com conteúdos extras no Instagram
              </FeatureItem>
            </FeatureList>
          </div>
        </div>
      </Section>

      {/* SECTION 3: For whom is this eBook? */}
      <Section variant="colored">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Esse guia é para você que…
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Check size={36} />,
                text: "Já tentou de tudo e não conseguiu manter uma alimentação saudável"
              },
              {
                icon: <Clock size={36} />,
                text: "Tem pouco tempo ou orçamento para seguir uma dieta cara"
              },
              {
                icon: <Users size={36} />,
                text: "Quer emagrecer com saúde ou ganhar massa de forma consciente"
              },
              {
                icon: <BookOpen size={36} />,
                text: "Precisa de um guia claro e direto, sem enrolação"
              },
              {
                icon: <Star size={36} />,
                text: "Está cansado(a) de promessas impossíveis"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="text-primary mb-4">
                  {item.icon}
                </div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 4: About the Author */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96">
            <div className="absolute inset-0 bg-gray-200 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Wenderson Domingues Pimentel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Quem escreveu esse guia?
            </h2>
            <p className="text-lg mb-4">
              Sou Wenderson Domingues Pimentel, educador físico, autor de diversos 
              livros sobre desenvolvimento pessoal e fundador da academia WP Fitness.
            </p>
            <p className="text-lg mb-4">
              Escrevi esse eBook baseado em anos de experiência com alunos reais — 
              com foco em resultados sustentáveis, sem radicalismo.
            </p>
            <p className="text-lg font-medium">
              Meu objetivo é te mostrar que é possível sim ter uma alimentação 
              saudável com o que você tem hoje.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 5: Testimonials */}
      <Section variant="colored">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Histórias de Transformação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Mudei completamente minha relação com a alimentação. Perdi 6 kg em 40 dias, ganhei energia e hoje me sinto mais forte na academia.",
                author: "Mariana S.",
                details: "Emagrecimento e Condicionamento"
              },
              {
                quote: "Depois de anos tentando, finalmente encontrei um guia prático que me ajudou a organizar minhas refeições. Ganhei massa muscular sem gastar muito.",
                author: "Carlos A.",
                details: "Hipertrofia e Planejamento"
              },
              {
                quote: "Aprendi a fazer escolhas inteligentes sem me sentir restrito. Melhorei minha performance nos treinos e me sinto mais disposto.",
                author: "João P.",
                details: "Nutrição e Performance"
              }
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <p className="italic text-gray-700 mb-4 text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6: Bonus */}
      <Section className="bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-8">
            Ao adquirir o eBook, você também leva:
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <div className="h-[400px] w-full px-4">
                <AnimatedBook />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <List size={40} />,
                    text: "Lista de compras inteligente (imprimível)"
                  },
                  {
                    icon: <FileText size={40} />,
                    text: "Planner semanal de refeições (editável)"
                  },
                  {
                    icon: <BookOpen size={40} />,
                    text: "Links úteis e aplicativos recomendados"
                  },
                  {
                    icon: <Star size={40} />,
                    text: "QR Code com vídeos e dicas exclusivas no Instagram"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="text-accent mb-4">
                      {item.icon}
                    </div>
                    <p className="text-md font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7: Final call to action */}
      <Section className="bg-gradient-to-r from-primary/90 to-primary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto(a) para transformar sua alimentação?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Invista em você com um material acessível, direto ao ponto e feito por 
          quem realmente vive o dia a dia da saúde e do treino.
        </p>
        
        <div className="flex flex-col items-center space-y-6">
          <CTAButton 
            size="lg" 
            variant="accent"
            className="group"
            href={PAYMENT_LINK}
          >
            <span className="flex items-center">
              Quero o Meu eBook Agora!
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </CTAButton>
          
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <p className="text-lg font-medium">
              <span className="line-through opacity-70">De R$ 49,90</span> por apenas{" "}
              <span className="text-2xl font-bold">R$ 19,90</span>
            </p>
            <p className="text-sm mt-1">(Pagamento seguro e acesso imediato)</p>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-center space-x-2 bg-white/10 p-3 rounded-lg">
              <ShieldCheck size={24} className="text-green-400" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 p-3 rounded-lg">
              <Gift size={24} className="text-accent" />
              <span>Bônus exclusivos incluídos</span>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8: Security/Guarantee */}
      <Section className="py-10">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <ShieldCheck size={48} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Compra 100% Segura
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Seu pagamento é processado de forma segura e você recebe o eBook 
            imediatamente após a confirmação.
            <br />
            Qualquer dúvida, conte com meu suporte pessoal!
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Wenderson Domingues Pimentel. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
