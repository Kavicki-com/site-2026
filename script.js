document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // SISTEMA DE TRADUÇÃO PT/EN
    // ============================================
    
    const translations = {
        pt: {
            nav: {
                expertise: 'Expertise',
                ai: 'AI Approach',
                portfolio: 'Portfólio',
                about: 'Sobre',
                contact: 'Contato',
                menu: 'Menu',
                theme: 'Alternar tema',
                language: 'Alternar idioma'
            },
            hero: {
                title1: 'Especialistas em projetos',
                title2: 'pensados para pessoas.',
                subtitle: 'Soluções criativas e tecnológicas para ajudar você e a sua marca a liderar o futuro.',
                cta: 'Fale com a gente'
            },
            intro: {
                title1: 'USABILIDADE',
                title2: 'EXPERIÊNCIA',
                title3: 'INTERFACE.',
                label: 'TRANSFORMAMOS IDEIAS EM \n EXPERIÊNCIAS INCRÍVEIS.',
                text: 'Ajudamos pessoas e empresas a construírem o novo. Unimos a visão de futuro com metodologias ágeis e design centrado no usuário para criar soluções de alto impacto.',
                link: 'Saiba como atuamos'
            },
            services: {
                label: 'O que fazemos',
                title: 'Expertise',
                subtitle: 'Do diagnóstico à execução, cobrimos toda a jornada digital.',
                ux: {
                    title: 'UX Design',
                    desc: 'Arquitetura de informação, fluxos de navegação e wireframes focados na jornada do usuário.'
                },
                ui: {
                    title: 'UI Design',
                    desc: 'Interfaces visuais pixel-perfect, Design Systems escaláveis e protótipos de alta fidelidade.'
                },
                research: {
                    title: 'UX Research',
                    desc: 'Testes de usabilidade, entrevistas com usuários e análise de dados para decisões assertivas.'
                },
                motion: {
                    title: 'Motion Design',
                    desc: 'Microinterações e animações que dão vida ao produto e aumentam o engajamento.'
                },
                branding: {
                    title: 'Branding e Marca',
                    desc: 'Estratégia visual, tom de voz e posicionamento de marca para o mundo digital.'
                }
            },
            ai: {
                label: 'Inovação & Tech',
                title1: 'Abordagem com',
                title2: 'Inteligência Artificial',
                desc: 'Não apenas desenhamos, aceleramos. Utilizamos o poder da IA generativa e automações inteligentes para otimizar processos, gerar insights rápidos e garantir precisão máxima em cada entrega.',
                item1: 'Automação de Design Ops',
                item2: 'Prototipagem Acelerada',
                item3: 'Análise de Dados Preditiva',
                workflow: 'AI-Driven Workflow'
            },
            portfolio: {
                title: 'Nossos projetos',
                hint: '(Explore)'
            },
            steps: {
                title: 'A gente te ajuda a:',
                diagnose: {
                    title: 'Diagnosticar',
                    desc: 'Entendemos o seu negócio, seus gargalos e oportunidades para criar o melhor cenário.'
                },
                plan: {
                    title: 'Planejar',
                    desc: 'Definimos o plano de ação, roadmap e tecnologias ideais para o seu projeto.'
                },
                execute: {
                    title: 'Executar',
                    desc: 'Desenvolvemos e entregamos a solução com qualidade, testes e acompanhamento.'
                }
            },
            international: {
                label: 'Presença Internacional',
                title1: 'Não existem',
                title2: 'fronteiras.',
                text: 'Atendemos clientes no Brasil, EUA, Portugal, Argentina, França, Colômbia, levando excelência global.',
                cta: 'Fale com a gente'
            },
            team: {
                title: 'Nossa Equipe'
            },
            stats: {
                label: 'Mais de 10 anos de trajetória',
                text: 'Temos o orgulho de poder ter ajudado marcas a surgirem, se reinventarem e aumentarem seu faturamento com design e estratégias voltadas para o cliente no centro de tudo.',
                brands: 'Marcas atendidas',
                years: 'Mais de 10 anos de atuação',
                projects: 'Projetos realizados'
            },
            infra: {
                title: 'Infraestrutura completa e os melhores padrões da indústria',
                desc: 'Hospedagem própria com suporte integral e adequado à Lei Geral de Proteção de Dados, mais de 20 tipos de aplicações diferentes com setup simples e interface intuitiva',
                security: 'Segurança',
                privacy: 'Privacidade',
                cta: 'Saiba mais'
            },
            testimonials: {
                title: 'O que nossos clientes pensam de nós',
                prev: 'Anterior',
                next: 'Próximo',
                review1: '"Excelência na jornada, além de prazos, a qualidade da entrega foi surpreendente."',
                review2: '"Equipe extremamente técnica e criativa. Resolveram problemas complexos com facilidade."',
                review3: '"Profissionalismo e atenção aos detalhes. O resultado superou todas as expectativas."',
                review4: '"Design moderno e funcional. A experiência do usuário melhorou significativamente."',
                review5: '"Comunicação clara e entregas sempre no prazo. Recomendo sem hesitação."',
                review6: '"Transformaram nossa visão em realidade. O processo foi colaborativo e eficiente."',
                review7: '"Estratégia bem definida e execução impecável. Resultados mensuráveis desde o início."',
                review8: '"Equipe muito bem capacitada e competente! Trouxeram soluções que não havíamos considerado."',
                review9: '"Qualidade excepcional em cada etapa do projeto. Parceiros de confiança."',
                review10: '"Metodologia ágil e resultados rápidos. O investimento valeu cada centavo."'
            },
            form: {
                name: 'Nome',
                email: 'Email',
                help: 'Como podemos ajudar?',
                message: 'Mensagem',
                submit: 'Enviar',
                sending: 'Enviando...',
                success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
                error: 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente por email.',
                validationError: 'Por favor, preencha todos os campos obrigatórios.',
                emailError: 'Por favor, insira um email válido.',
                emailjsError: 'EmailJS não está carregado. Por favor, verifique a conexão com a internet.'
            },
            footer: {
                subtitle: 'Fale sobre o seu projeto e vamos construir algo incrível juntos.',
                connect: 'Conecte-se',
                copyright: '© 2026 Kavicki. Todos os direitos reservados.'
            },
            host: {
                hero: {
                    title1: 'Infraestrutura',
                    title2: 'de ponta de',
                    title3: 'forma simples',
                    subtitle: 'Host completo com email em um cloud dedicado para o seu negócio',
                    cta: 'FALE COM A GENTE',
                    badge1: 'cloudz PARTNER CERTIFIED',
                    badge2: 'cloudz LGPD ready!',
                    alt: 'Host & Infraestrutura'
                },
                apps: {
                    label: 'VERSATILIDADE E SIMPLICIDADE',
                    title: 'Construa o que precisar',
                    subtitle: '23 tipos de aplicações com plug and play e configuração automática',
                    wordpress: { desc: 'Plataforma de gerenciamento de conteúdo mais popular do mundo' },
                    mautic: { desc: 'Automação de marketing e email marketing profissional' },
                    woocommerce: { desc: 'E-commerce completo integrado ao Wordpress' },
                    joomla: { desc: 'Sistema de gerenciamento de conteúdo flexível e poderoso' },
                    php: { desc: 'Ambiente PHP completo para suas aplicações' },
                    jenkins: { desc: 'Automação de CI/CD para desenvolvimento' },
                    opencart: { desc: 'Plataforma de e-commerce open source' },
                    prestashop: { desc: 'Solução completa de e-commerce' },
                    n8n: { desc: 'Automação de workflows e integrações' },
                    opensupports: { desc: 'Sistema de suporte ao cliente' },
                    angular: { desc: 'Framework JavaScript para aplicações web' },
                    metabase: { desc: 'Business intelligence e análise de dados' },
                    drupal: { desc: 'CMS enterprise-grade robusto' },
                    moodle: { desc: 'Plataforma de aprendizado online' },
                    cakephp: { desc: 'Framework PHP rápido e flexível' },
                    html: { desc: 'Hospedagem para sites estáticos' },
                    laravel: { desc: 'Framework PHP elegante e moderno' },
                    nodejs: { desc: 'Runtime JavaScript no servidor' },
                    python: { desc: 'Ambiente Python para aplicações' },
                    nextcloud: { desc: 'Solução de armazenamento na nuvem' },
                    react: { desc: 'Biblioteca JavaScript para interfaces' },
                    rails: { desc: 'Framework Ruby on Rails' },
                    magento: { desc: 'Plataforma de e-commerce enterprise' }
                },
                sftp: {
                    label: 'SEGURANÇA AVANÇADA',
                    title: 'Servidor com conexão via SFTP',
                    desc: 'Acesse seus arquivos com segurança através de conexão SFTP, garantindo proteção total dos seus dados e conformidade com os melhores padrões de segurança.',
                    feature1: 'Segurança e Criptografia',
                    feature2: 'Facilidade de Configuração de Firewall (Porta Única)',
                    feature3: 'Autenticação via Chaves SSH',
                    feature4: 'Conformidade (Compliance)',
                    cta: 'COMECE AGORA',
                    image: { alt: 'SFTP Server' }
                },
                plans: {
                    title: 'Hospedagem de qualidade',
                    subtitle: 'Com preços justos, escolha o plano que mais combina com o seu negócio',
                    currency: 'R$',
                    period: '/mês',
                    popular: 'MAIS POPULAR',
                    blog: {
                        title: 'Blog',
                        price: '79,90',
                        desc: 'Para você que publica muito',
                        feature1: 'Cloud compartilhado',
                        feature2: 'Suporte 24/7',
                        feature3: 'SSL gratuito',
                        feature4: 'Backup automático'
                    },
                    static: {
                        title: 'Site estático',
                        price: '59',
                        desc: 'Ideal para começar',
                        feature1: 'Hospedagem estática',
                        feature2: 'CDN global',
                        feature3: 'SSL gratuito',
                        feature4: 'Deploy automático'
                    },
                    store: {
                        title: 'Loja Virtual',
                        price: '189,90',
                        desc: 'Para gestores de lojas virtuais',
                        feature1: 'E-commerce completo',
                        feature2: 'Gateway de pagamento',
                        feature3: 'SSL dedicado',
                        feature4: 'Suporte prioritário'
                    },
                    webapp: {
                        title: 'Web App',
                        price: '329,90',
                        desc: 'Para desenvolvimento web',
                        feature1: 'Servidor dedicado',
                        feature2: 'Escalabilidade',
                        feature3: 'API completa',
                        feature4: 'Monitoramento 24/7'
                    },
                    cta: 'FALE COM A GENTE'
                }
            }
        },
        en: {
            nav: {
                expertise: 'Expertise',
                ai: 'AI Approach',
                portfolio: 'Portfolio',
                about: 'About',
                contact: 'Contact',
                menu: 'Menu',
                theme: 'Toggle theme',
                language: 'Toggle language'
            },
            hero: {
                title1: 'Experts in projects',
                title2: 'designed for people.',
                subtitle: 'Creative and technological solutions to help you and your brand lead the future.',
                cta: 'Talk to us'
            },
            intro: {
                title1: 'USABILITY',
                title2: 'EXPERIENCE',
                title3: 'INTERFACE.',
                label: 'WE TRANSFORM IDEAS INTO \n AMAZING EXPERIENCES.',
                text: 'We help people and companies build the new. We combine future vision with agile methodologies and user-centered design to create high-impact solutions.',
                link: 'Learn how we work'
            },
            services: {
                label: 'What we do',
                title: 'Expertise',
                subtitle: 'From diagnosis to execution, we cover the entire digital journey.',
                ux: {
                    title: 'UX Design',
                    desc: 'Information architecture, navigation flows and wireframes focused on the user journey.'
                },
                ui: {
                    title: 'UI Design',
                    desc: 'Pixel-perfect visual interfaces, scalable Design Systems and high-fidelity prototypes.'
                },
                research: {
                    title: 'UX Research',
                    desc: 'Usability testing, user interviews and data analysis for assertive decisions.'
                },
                motion: {
                    title: 'Motion Design',
                    desc: 'Micro-interactions and animations that bring the product to life and increase engagement.'
                },
                branding: {
                    title: 'Branding & Brand',
                    desc: 'Visual strategy, tone of voice and brand positioning for the digital world.'
                }
            },
            ai: {
                label: 'Innovation & Tech',
                title1: 'Approach with',
                title2: 'Artificial Intelligence',
                desc: 'We don\'t just design, we accelerate. We use the power of generative AI and intelligent automations to optimize processes, generate quick insights and ensure maximum precision in every delivery.',
                item1: 'Design Ops Automation',
                item2: 'Accelerated Prototyping',
                item3: 'Predictive Data Analysis',
                workflow: 'AI-Driven Workflow'
            },
            portfolio: {
                title: 'Our projects',
                hint: '(Explore)'
            },
            steps: {
                title: 'We help you to:',
                diagnose: {
                    title: 'Diagnose',
                    desc: 'We understand your business, your bottlenecks and opportunities to create the best scenario.'
                },
                plan: {
                    title: 'Plan',
                    desc: 'We define the action plan, roadmap and ideal technologies for your project.'
                },
                execute: {
                    title: 'Execute',
                    desc: 'We develop and deliver the solution with quality, testing and follow-up.'
                }
            },
            international: {
                label: 'International Presence',
                title1: 'There are no',
                title2: 'borders.',
                text: 'We serve clients in Brazil, USA, Portugal, Argentina, France, Colombia, delivering global excellence.',
                cta: 'Talk to us'
            },
            team: {
                title: 'Our Team'
            },
            stats: {
                label: 'More than 10 years of journey',
                text: 'We are proud to have helped brands emerge, reinvent themselves and increase their revenue with design and strategies focused on the customer at the center of everything.',
                brands: 'Brands served',
                years: 'More than 10 years of operation',
                projects: 'Projects completed'
            },
            infra: {
                title: 'Complete infrastructure and industry best practices',
                desc: 'Own hosting with full support and compliant with the General Data Protection Law, more than 20 different types of applications with simple setup and intuitive interface',
                security: 'Security',
                privacy: 'Privacy',
                cta: 'Learn more'
            },
            testimonials: {
                title: 'What our clients think about us',
                prev: 'Previous',
                next: 'Next',
                review1: '"Excellence in the journey, beyond deadlines, the quality of delivery was surprising."',
                review2: '"Extremely technical and creative team. They solved complex problems with ease."',
                review3: '"Professionalism and attention to detail. The result exceeded all expectations."',
                review4: '"Modern and functional design. The user experience improved significantly."',
                review5: '"Clear communication and always on-time deliveries. I recommend without hesitation."',
                review6: '"They transformed our vision into reality. The process was collaborative and efficient."',
                review7: '"Well-defined strategy and impeccable execution. Measurable results from the start."',
                review8: '"Very well-trained and competent team! They brought solutions we hadn\'t considered."',
                review9: '"Exceptional quality at every stage of the project. Trusted partners."',
                review10: '"Agile methodology and fast results. The investment was worth every penny."'
            },
            form: {
                name: 'Name',
                email: 'Email',
                help: 'How can we help?',
                message: 'Message',
                submit: 'Send',
                sending: 'Sending...',
                success: 'Message sent successfully! We will contact you soon.',
                error: 'Error sending message. Please try again or contact us directly by email.',
                validationError: 'Please fill in all required fields.',
                emailError: 'Please enter a valid email address.',
                emailjsError: 'EmailJS is not loaded. Please check your internet connection.'
            },
            footer: {
                subtitle: 'Tell us about your project and let\'s build something amazing together.',
                connect: 'Connect',
                copyright: '© 2026 Kavicki. All rights reserved.'
            },
            host: {
                hero: {
                    title1: 'Infrastructure',
                    title2: 'cutting-edge in',
                    title3: 'a simple way',
                    subtitle: 'Complete host with email on a dedicated cloud for your business',
                    cta: 'TALK TO US',
                    badge1: 'cloudz PARTNER CERTIFIED',
                    badge2: 'cloudz LGPD ready!',
                    alt: 'Host & Infrastructure'
                },
                apps: {
                    label: 'VERSATILITY AND SIMPLICITY',
                    title: 'Build what you need',
                    subtitle: '23 types of applications with plug and play and automatic configuration',
                    wordpress: { desc: 'World\'s most popular content management platform' },
                    mautic: { desc: 'Marketing automation and professional email marketing' },
                    woocommerce: { desc: 'Complete e-commerce integrated with Wordpress' },
                    joomla: { desc: 'Flexible and powerful content management system' },
                    php: { desc: 'Complete PHP environment for your applications' },
                    jenkins: { desc: 'CI/CD automation for development' },
                    opencart: { desc: 'Open source e-commerce platform' },
                    prestashop: { desc: 'Complete e-commerce solution' },
                    n8n: { desc: 'Workflow automation and integrations' },
                    opensupports: { desc: 'Customer support system' },
                    angular: { desc: 'JavaScript framework for web applications' },
                    metabase: { desc: 'Business intelligence and data analysis' },
                    drupal: { desc: 'Robust enterprise-grade CMS' },
                    moodle: { desc: 'Online learning platform' },
                    cakephp: { desc: 'Fast and flexible PHP framework' },
                    html: { desc: 'Hosting for static sites' },
                    laravel: { desc: 'Elegant and modern PHP framework' },
                    nodejs: { desc: 'JavaScript runtime on server' },
                    python: { desc: 'Python environment for applications' },
                    nextcloud: { desc: 'Cloud storage solution' },
                    react: { desc: 'JavaScript library for interfaces' },
                    rails: { desc: 'Ruby on Rails framework' },
                    magento: { desc: 'Enterprise e-commerce platform' }
                },
                sftp: {
                    label: 'ADVANCED SECURITY',
                    title: 'Server with SFTP connection',
                    desc: 'Access your files securely through SFTP connection, ensuring total protection of your data and compliance with the best security standards.',
                    feature1: 'Security and Encryption',
                    feature2: 'Easy Firewall Configuration (Single Port)',
                    feature3: 'SSH Key Authentication',
                    feature4: 'Compliance',
                    cta: 'GET STARTED NOW',
                    image: { alt: 'SFTP Server' }
                },
                plans: {
                    title: 'Quality hosting',
                    subtitle: 'With fair prices, choose the plan that best suits your business',
                    currency: '$',
                    period: '/month',
                    popular: 'MOST POPULAR',
                    blog: {
                        title: 'Blog',
                        price: '79.90',
                        desc: 'For those who publish a lot',
                        feature1: 'Shared cloud',
                        feature2: '24/7 support',
                        feature3: 'Free SSL',
                        feature4: 'Automatic backup'
                    },
                    static: {
                        title: 'Static site',
                        price: '59',
                        desc: 'Ideal to get started',
                        feature1: 'Static hosting',
                        feature2: 'Global CDN',
                        feature3: 'Free SSL',
                        feature4: 'Automatic deploy'
                    },
                    store: {
                        title: 'Online store',
                        price: '189.90',
                        desc: 'For online store managers',
                        feature1: 'Complete e-commerce',
                        feature2: 'Payment gateway',
                        feature3: 'Dedicated SSL',
                        feature4: 'Priority support'
                    },
                    webapp: {
                        title: 'Web App',
                        price: '329.90',
                        desc: 'For web development',
                        feature1: 'Dedicated server',
                        feature2: 'Scalability',
                        feature3: 'Complete API',
                        feature4: '24/7 monitoring'
                    },
                    cta: 'TALK TO US'
                }
            }
        }
    };

    // Função para obter valor aninhado do objeto de traduções
    function getTranslationValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    // Função para definir o idioma
    function setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Idioma "${lang}" não encontrado. Usando "pt" como padrão.`);
            lang = 'pt';
        }

        const t = translations[lang];
        
        // Atualizar atributo lang do HTML
        document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
        
        // Atualizar elementos com data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = getTranslationValue(t, key);
            
            if (value !== undefined) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = value;
                } else if (element.tagName === 'SPAN') {
                    // Para spans, sempre atualizar o texto diretamente
                    element.textContent = value.includes('\\n') 
                        ? value.replace(/\\n/g, ' ') 
                        : value;
                } else if (element.children.length > 0) {
                    // Elemento tem filhos (como ícones), preservar e atualizar apenas o texto
                    // Procurar por span filho com data-i18n primeiro
                    const childSpan = element.querySelector('span[data-i18n]');
                    if (childSpan) {
                        // Se há um span filho com data-i18n, ele será processado separadamente
                        return;
                    }
                    
                    // Procurar nós de texto existentes
                    const textNodes = Array.from(element.childNodes).filter(node => 
                        node.nodeType === Node.TEXT_NODE && node.textContent.trim()
                    );
                    
                    if (textNodes.length > 0) {
                        // Atualizar primeiro nó de texto
                        textNodes[0].textContent = value.includes('\\n') 
                            ? value.replace(/\\n/g, ' ') 
                            : value + ' ';
                    } else {
                        // Se não há nó de texto, inserir antes do primeiro filho
                        const textNode = document.createTextNode(
                            (value.includes('\\n') ? value.replace(/\\n/g, ' ') : value) + ' '
                        );
                        element.insertBefore(textNode, element.firstChild);
                    }
                } else {
                    // Elemento sem filhos, atualizar conteúdo
                    if (value.includes('\\n')) {
                        element.innerHTML = value.split('\\n').join('<br>');
                    } else {
                        element.textContent = value;
                    }
                }
            }
        });

        // Atualizar placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const value = getTranslationValue(t, key);
            if (value !== undefined) {
                element.placeholder = value;
            }
        });

        // Atualizar aria-labels
        document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria-label');
            const value = getTranslationValue(t, key);
            if (value !== undefined) {
                element.setAttribute('aria-label', value);
            }
        });

        // Atualizar bandeira do idioma
        const languageFlag = document.getElementById('languageFlag');
        if (languageFlag) {
            languageFlag.src = lang === 'pt' 
                ? 'assets/flags/Flag_of_Brazil.svg' 
                : 'assets/flags/Flag_of_the_United_States.svg';
            languageFlag.alt = lang === 'pt' ? 'Português' : 'English';
        }

        // Salvar preferência
        localStorage.setItem('language', lang);
    }

    // Função para obter idioma atual
    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'pt';
    }

    // Inicializar idioma
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);

    // Event listener para toggle de idioma
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const currentLang = getCurrentLanguage();
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            setLanguage(newLang);
        });
    }

    // ============================================
    // FIM DO SISTEMA DE TRADUÇÃO
    // ============================================
    
    // 0. Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;
    
    // Função para aplicar o tema
    const logoImg = document.getElementById('logoImg');
    
    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        if (theme === 'light') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            if (logoImg) {
                logoImg.src = 'assets/logokavickilight.png';
            }
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            if (logoImg) {
                logoImg.src = 'assets/logokavicki.png';
            }
        }
        localStorage.setItem('theme', theme);
    }
    
    // Carregar tema salvo ou usar dark como padrão
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    // Alternar tema ao clicar no botão
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
    
    // 0. Menu Hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    
    if (menuToggle && menuItems) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menuItems.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const menuLinks = menuItems.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menuItems.classList.remove('active');
            });
        });
    }
    
    // 1. Cursor Follower
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        cursorDot.style.left = `${x}px`;
        cursorDot.style.top = `${y}px`;
        
        cursorCircle.animate({
            left: `${x}px`,
            top: `${y}px`
        }, { duration: 500, fill: "forwards" });
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
    });

    // 2. Reveal Animations (Fade In)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.fade-in, .fade-in-up, .project-item, .service-card, .step-item, .ai-content, .ai-visual, .review-box, .team-card');
    hiddenElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);

    // 3. Number Counter
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; 
                const increment = target / (duration / 16); 

                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = '+' + Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = '+' + target;
                    }
                };
                updateCounter();
            });
            statsObserver.disconnect();
        }
    });

    const statsSection = document.querySelector('.stats-flex');
    if(statsSection) statsObserver.observe(statsSection);

    // 4. Globe 3D with Drag Rotation
    const globeCanvas = document.getElementById('globe-canvas');
    if (globeCanvas && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, globeCanvas.clientWidth / globeCanvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: globeCanvas, alpha: true, antialias: true });
        
        renderer.setSize(globeCanvas.clientWidth, globeCanvas.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Create globe
        const geometry = new THREE.SphereGeometry(2, 64, 64);
        
        // Load Earth textures
        const textureLoader = new THREE.TextureLoader();
        
        // Try multiple texture sources for better compatibility
        const textureBaseUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/';
        
        // Earth texture (diffuse map) - with atmosphere
        const earthTexture = textureLoader.load(
            textureBaseUrl + 'earth_atmos_2048.jpg',
            () => {
                renderer.render(scene, camera);
            },
            undefined,
            () => {
                // Fallback if main texture fails
                console.log('Using fallback Earth texture');
            }
        );
        
        // Normal map for terrain detail
        const normalTexture = textureLoader.load(
            textureBaseUrl + 'earth_normal_2048.jpg',
            undefined,
            undefined,
            () => {
                // Normal map is optional, continue without it if it fails
            }
        );
        
        // Specular map for water reflections
        const specularTexture = textureLoader.load(
            textureBaseUrl + 'earth_specular_2048.jpg',
            undefined,
            undefined,
            () => {
                // Specular map is optional, continue without it if it fails
            }
        );
        
        // Create Earth material with realistic textures
        const material = new THREE.MeshPhongMaterial({ 
            map: earthTexture,
            normalMap: normalTexture,
            specularMap: specularTexture,
            shininess: 30,
            transparent: false
        });
        
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        // Add directional light (sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        // Camera position
        camera.position.z = 4;

        // Rotation variables
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotationX = 0;
        let rotationY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;
        let autoRotate = true;
        let autoRotateSpeed = 0.005;

        // Mouse events
        globeCanvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            autoRotate = false;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        globeCanvas.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMousePosition.x;
                const deltaY = e.clientY - previousMousePosition.y;

                targetRotationY += deltaX * 0.01;
                targetRotationX += deltaY * 0.01;

                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });

        globeCanvas.addEventListener('mouseup', () => {
            isDragging = false;
            // Resume auto-rotation after 2 seconds of inactivity
            setTimeout(() => {
                if (!isDragging) autoRotate = true;
            }, 2000);
        });

        globeCanvas.addEventListener('mouseleave', () => {
            isDragging = false;
            setTimeout(() => {
                if (!isDragging) autoRotate = true;
            }, 2000);
        });

        // Touch events for mobile
        globeCanvas.addEventListener('touchstart', (e) => {
            isDragging = true;
            autoRotate = false;
            const touch = e.touches[0];
            previousMousePosition = { x: touch.clientX, y: touch.clientY };
        });

        globeCanvas.addEventListener('touchmove', (e) => {
            if (isDragging) {
                const touch = e.touches[0];
                const deltaX = touch.clientX - previousMousePosition.x;
                const deltaY = touch.clientY - previousMousePosition.y;

                targetRotationY += deltaX * 0.01;
                targetRotationX += deltaY * 0.01;

                previousMousePosition = { x: touch.clientX, y: touch.clientY };
            }
        });

        globeCanvas.addEventListener('touchend', () => {
            isDragging = false;
            setTimeout(() => {
                if (!isDragging) autoRotate = true;
            }, 2000);
        });

        // Smooth rotation interpolation
        function animate() {
            requestAnimationFrame(animate);

            if (autoRotate && !isDragging) {
                targetRotationY += autoRotateSpeed;
            }

            // Smooth interpolation
            rotationX += (targetRotationX - rotationX) * 0.1;
            rotationY += (targetRotationY - rotationY) * 0.1;

            // Apply rotation
            globe.rotation.y = rotationY;
            globe.rotation.x = rotationX;

            renderer.render(scene, camera);
        }

        // Handle resize
        function handleResize() {
            const container = globeCanvas.parentElement;
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        animate();
    }

    // 5. Testimonials Carousel
    const carousel = document.querySelector('.testimonials-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (carousel && prevBtn && nextBtn) {
        const reviews = carousel.querySelectorAll('.review-box');
        const totalItems = reviews.length;
        
        function getItemsPerView() {
            if (window.innerWidth <= 560) {
                return 1; // Mobile: 1 card
            } else if (window.innerWidth <= 992) {
                return 2; // Tablet: 2 cards
            } else {
                return 3; // Desktop: 3 cards
            }
        }
        
        function getTotalSlides() {
            return Math.ceil(totalItems / getItemsPerView());
        }
        
        let currentIndex = 0;

        // Create dots (one per slide, not per item)
        function createDots() {
            dotsContainer.innerHTML = '';
            const totalSlides = getTotalSlides();
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('carousel-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
            return dotsContainer.querySelectorAll('.carousel-dot');
        }
        
        let dots = createDots();

        function updateCarousel() {
            const itemsPerView = getItemsPerView();
            const gap = 40;
            const wrapper = document.querySelector('.testimonials-carousel-wrapper');
            
            let slideWidth;
            if (itemsPerView === 3 && reviews.length > 0) {
                // For 3 items: use wrapper width to ensure all 3 cards fit
                if (wrapper) {
                    slideWidth = wrapper.getBoundingClientRect().width;
                } else {
                    const firstItem = reviews[0];
                    if (firstItem) {
                        const itemWidth = firstItem.offsetWidth;
                        // 3 cards + 2 gaps
                        slideWidth = (itemWidth * 3) + (gap * 2);
                    } else {
                        slideWidth = carousel.offsetWidth;
                    }
                }
            } else if (itemsPerView === 2 && reviews.length > 0) {
                // For 2 items (tablet): use wrapper width to ensure both cards fit
                if (wrapper) {
                    slideWidth = wrapper.getBoundingClientRect().width;
                } else {
                    const firstItem = reviews[0];
                    if (firstItem) {
                        const itemWidth = firstItem.offsetWidth;
                        // 2 cards + 1 gap
                        slideWidth = (itemWidth * 2) + gap;
                    } else {
                        slideWidth = carousel.offsetWidth;
                    }
                }
            } else if (itemsPerView === 1) {
                // For 1 item (mobile): use wrapper width to ensure card is centered
                if (wrapper) {
                    slideWidth = wrapper.getBoundingClientRect().width;
                } else {
                    const firstItem = reviews[0];
                    if (firstItem) {
                        slideWidth = firstItem.offsetWidth;
                    } else {
                        slideWidth = carousel.offsetWidth;
                    }
                }
            } else {
                // Fallback
                slideWidth = wrapper ? wrapper.getBoundingClientRect().width : carousel.offsetWidth;
            }
            
            const translateX = currentIndex * slideWidth;
            carousel.style.transform = `translateX(-${translateX}px)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            const totalSlides = getTotalSlides();
            currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
            updateCarousel();
        }

        function nextSlide() {
            const totalSlides = getTotalSlides();
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateCarousel();
        }

        function prevSlide() {
            const totalSlides = getTotalSlides();
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1; // Loop to end
            }
            updateCarousel();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Auto-play (optional)
        let autoPlayInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
        if (carouselWrapper) {
            carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
            carouselWrapper.addEventListener('mouseleave', () => {
                autoPlayInterval = setInterval(nextSlide, 5000);
            });
        }

        // Initial update
        updateCarousel();

        // Update on resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                dots = createDots();
                const totalSlides = getTotalSlides();
                if (currentIndex >= totalSlides) {
                    currentIndex = totalSlides - 1;
                }
                updateCarousel();
            }, 250);
        });
    }

    // 6. Parallax Effect - Seção Expertise (Serviços)
    let parallaxTicking = false;
    const parallaxOffsets = new Map(); // Armazena os offsets de parallax por card

    function updateExpertiseParallax() {
        const servicesSection = document.querySelector('#servicos');
        if (!servicesSection) {
            parallaxTicking = false;
            return;
        }

        const rect = servicesSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Verifica se a seção está visível na tela
        const isVisible = rect.bottom > 0 && rect.top < windowHeight;
        
        if (isVisible) {
            // Calcula a posição relativa da seção em relação à viewport
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
            
            // Aplica parallax apenas nos service-cards
            const serviceCards = document.querySelectorAll('#servicos .service-card');
            serviceCards.forEach((card, index) => {
                // Cada card se move com uma velocidade diferente baseada no seu índice
                const speed = (index + 1) * 0.12; // Velocidades diferentes: 0.12, 0.24, 0.36, 0.48, 0.60
                const offset = scrollProgress * 80 * speed;
                
                // Armazena o offset para uso no hover
                parallaxOffsets.set(card, offset);
                
                // Aplica o movimento apenas quando o card está visível
                const cardRect = card.getBoundingClientRect();
                const cardVisible = cardRect.top < windowHeight && cardRect.bottom > 0;
                
                if (cardVisible && !card.matches(':hover')) {
                    card.style.transform = `translateY(${offset}px)`;
                }
            });
        }

        parallaxTicking = false;
    }

    function requestExpertiseParallaxTick() {
        if (!parallaxTicking) {
            window.requestAnimationFrame(updateExpertiseParallax);
            parallaxTicking = true;
        }
    }

    // Mantém o efeito hover preservando o parallax
    const serviceCards = document.querySelectorAll('#servicos .service-card');
    serviceCards.forEach(card => {
        card.style.transition = 'transform 0.3s ease-out, border-color 0.3s, background-color 0.3s';
        card.style.willChange = 'transform';
        
        // Adiciona efeito hover com parallax
        card.addEventListener('mouseenter', function() {
            const offset = parallaxOffsets.get(this) || 0;
            this.style.transform = `translateY(${offset}px) translateX(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            const offset = parallaxOffsets.get(this) || 0;
            this.style.transform = `translateY(${offset}px)`;
        });
    });

    // Adiciona o evento de scroll
    window.addEventListener('scroll', requestExpertiseParallaxTick);
    window.addEventListener('resize', requestExpertiseParallaxTick);
    
    // Executa uma vez ao carregar
    updateExpertiseParallax();

    

    // ============================================
    // FORMULÁRIO DE CONTATO COM EMAILJS
    // ============================================
    
    // CONFIGURAÇÃO NECESSÁRIA:
    // 1. Criar conta gratuita em https://www.emailjs.com/
    // 2. Criar um serviço de email (Gmail, Outlook, etc.)
    // 3. Criar um template de email com as variáveis: {{to_email}}, {{from_name}}, {{from_email}}, {{subject}}, {{message}}
    // 4. Atualizar as credenciais abaixo:
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_c57rm9y',        // Substituir pelo Service ID do EmailJS
        TEMPLATE_ID: 'template_m6iy2oh',      // Substituir pelo Template ID do EmailJS
        PUBLIC_KEY: 'hMLKX6IzN3SvJM-DV'         // Substituir pela Public Key do EmailJS
    };
    
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formMessageFeedback');
    
    // Função para inicializar EmailJS
    function initEmailJS() {
        if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            return true;
        }
        return false;
    }
    
    // Tentar inicializar quando o script carregar
    if (typeof emailjs !== 'undefined') {
        initEmailJS();
    } else {
        // Aguardar o EmailJS carregar
        window.addEventListener('load', () => {
            if (typeof emailjs !== 'undefined') {
                initEmailJS();
            }
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = {
                from_name: document.getElementById('formName').value.trim(),
                from_email: document.getElementById('formEmail').value.trim(),
                subject: document.getElementById('formSubject').value.trim(),
                message: document.getElementById('formMessage').value.trim()
            };

            // Obter idioma atual para mensagens
            const currentLang = getCurrentLanguage();
            const t = translations[currentLang]?.form || translations.pt.form;

            // Validação básica
            if (!formData.from_name || !formData.from_email || !formData.subject) {
                showFormFeedback(t.validationError, 'error');
                return;
            }

            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.from_email)) {
                showFormFeedback(t.emailError, 'error');
                return;
            }

            // Desabilitar botão durante o envio
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            const sendingText = getCurrentLanguage() === 'pt' ? 'Enviando...' : 'Sending...';
            submitButton.innerHTML = `<span data-i18n="form.sending">${sendingText}</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

            try {
                // Verificar se EmailJS está disponível
                if (typeof emailjs === 'undefined') {
                    throw new Error(t.emailjsError);
                }

                // Verificar se as credenciais foram configuradas
                if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
                    EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
                    EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
                    throw new Error('EmailJS não configurado. Por favor, configure as credenciais no código.');
                }

                // Inicializar EmailJS se ainda não foi inicializado
                initEmailJS();

                // Preparar dados para o template
                const templateParams = {
                    to_email: 'jorge@kavicki.com',
                    from_name: formData.from_name,
                    from_email: formData.from_email,
                    subject: formData.subject,
                    message: formData.message || '(Sem mensagem adicional)'
                };

                // Enviar email
                await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams);

                // Sucesso
                showFormFeedback(t.success, 'success');
                contactForm.reset();

            } catch (error) {
                console.error('Erro ao enviar email:', error);
                showFormFeedback(t.error, 'error');
            } finally {
                // Reabilitar botão
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }

    function showFormFeedback(message, type) {
        if (!formFeedback) return;

        formFeedback.textContent = message;
        formFeedback.className = `form-feedback ${type}`;
        formFeedback.style.display = 'block';

        // Scroll suave até o feedback
        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Esconder feedback após 5 segundos para mensagens de sucesso
        if (type === 'success') {
            setTimeout(() => {
                formFeedback.style.display = 'none';
            }, 5000);
        }
    }
});