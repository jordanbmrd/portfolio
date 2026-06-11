import { Icons } from "@/components/icons";
import { PaperclipIcon, FigmaIcon, GraduationCapIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jordan Baumard",
  initials: "JB",
  url: "https://jordanbaumard.fr",
  location: "Nantes, France",
  locationLink: "https://www.google.com/maps/place/nantes",
  description:
    "Software Engineer and student passionate about Computer Science. I love building things and helping people.",
  summary:
    "Keen on new technologies and computer programming since I was young, my ambition is to become a **Software Engineer**. Currently in my **third year of the M.Sc. in Engineering program** in France, I have created **real-world projects**, including showcase websites, e-commerce websites or online games, showcasing my ability to create **large-scale and impactful projects**. **Passionate, hardworking, and a strong team player**, I am committed to delivering **high-quality solutions** that make a difference.",
  avatarUrl: "/profile_picture.jpg",
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Java", "Spring Boot", "Symfony", "PHP", "FastAPI", "Python", "C"],
    },
    {
      category: "Data",
      items: ["MySQL", "MongoDB", "ElasticSearch", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "AWS", "CI/CD", "Git", "Terraform", "Distributed Systems"],
    },
    {
      category: "AI / ML",
      items: ["Machine Learning", "LLMs", "RAG"],
    },
    {
      category: "Design",
      items: ["Figma"],
    },
    {
      category: "Soft Skills",
      items: ["Team Spirit", "Problem Solving", "Autonomous", "Self-Starter"],
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://resume.jordanbaumard.fr", icon: PaperclipIcon, label: "CV" },
  ],
  contact: {
    email: "jordanbmrd@gmail.com",
    tel: "+33781334762",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jordanbmrd",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jordanbaumard/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,
      //
      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Renault Group",
      href: "https://www.renaultgroup.com",
      badges: [],
      location: "Le Mans, France",
      title: "Software Engineer (Work-study program)",
      logoUrl: "/renault_group.jpeg",
      start: "2023",
      end: "Current",
      description:
        "- Developed multiple full-stack web applications for industrial process optimization<br />- Analysis of requirements and proposal of appropriate solutions<br />- Led a key project-management app generating €630k annual savings across Renault’s French plants.<br />- Set up CI/CD pipelines to automate the deployment of our applications.<br />- Operated in agile mode (Scrum).<br /><br />Technical stack :<br />- Frontend : Next.js (TypeScript)<br />- Backend : Symfony (PHP), API Platform<br />- Database : MySQL<br />- Tests : Playwright",
    },
    {
      company: "De Montfort University",
      href: "https://www.dmu.ac.uk/",
      badges: [],
      location: "Leicester, United Kingdom",
      title: "ML Research Intern",
      logoUrl: "/dmu.png",
      start: "may 2025",
      end: "aug 2025",
      description:
        "- Collaborated with university researchers to develop a machine learning model for predicting architectural issues in Python projects.",
    },
    {
      company: "Ministry of Armed Forces",
      badges: [],
      href: "https://www.defense.gouv.fr",
      location: "Paris, France",
      title: "Software Engineer (Work-study program)",
      logoUrl: "/ministere_des_armees.jpeg",
      start: "2022",
      end: "2023",
      description:
        "- Developed and maintained a data visualization web application using React.js and Java.<br />- Conceived complex new features to increase the efficiency of the company.<br />- Introduced a gamification module that doubled the number of users in 6 months.<br /><br />Technical stack :<br />- Frontend : React.js (TypeScript)<br />- Backend : Java, Spring<br />- Database : MySQL, ElasticSearch<br />- Microservices architecture",
    },
    {
      company: "Cartesia Junior",
      href: "",
      badges: [],
      location: "Paris, France",
      title: "Chief Technical Officer",
      logoUrl: "/cartesia_junior.jpeg",
      start: "2022",
      end: "2023",
      description:
        "Junior-Enterprise of the Paris Institute of Technology (Paris Cité University)<br/><br />- Management and coordination of a team of 8 people<br />- Participation in decision-making to improve services and performance<br />- Administration of IT infrastructure<br />- Implementation of web infrastructure on AWS (Docker, Nginx)",
    },
  ],
  education: [
    {
      school: "IMT Atlantique",
      href: "https://www.imt-atlantique.fr/",
      degree: "MSc in Engineering",
      logoUrl: "/imt_atlantique.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "IUT de Paris - Rives de Seine",
      href: "https://iutparis-seine.u-paris.fr",
      degree: "BS in Computer Science",
      logoUrl: "iut_paris_rives_de_seine.jpeg",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Mon Plein Éco",
      href: "https://apps.apple.com/fr/app/mon-plein-%C3%A9co-prix-carburant/id6762117420",
      active: true,
      description:
        "Mon Plein Éco is an iOS app to find the cheapest fuel stations around you and along your route. With 400+ users and a 5-star average rating, it helps drivers save money on every fill-up.",
      technologies: [
        "iOS",
        "Swift",
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/fr/app/mon-plein-%C3%A9co-prix-carburant/id6762117420",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://monpleineco.fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/monpleineco.png",
      video: "",
    },
    {
      title: "OmnyAI",
      href: "https://jordanbmrd.github.io/lp-omny-ai/",
      active: true,
      description:
        "OmnyAI gave access to all the best AI models on the market, both through a chat interface and via API. Its key advantage was pay-as-you-go pricing (around €10/month for typical usage). It also supported Canvas and image generation models. The project was discontinued in May 2025.",
      technologies: [
        "Next.js",
        "TypeScript",
        "AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://jordanbmrd.github.io/lp-omny-ai/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/OmnyAI.mp4",
    },
    {
      title: "Tennis Computer Analysis",
      href: "https://github.com/jordanbmrd/tennis-computer-analysis",
      active: true,
      description:
        "Analyses a tennis game on a video. It detects players and the ball using Yolo and uses CNNs to extract court key points.",
      technologies: [
        "Python",
        "YOLOv5",
        "Machine Learning"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jordanbmrd/tennis-computer-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/TennisComputerAnalysis.mp4",
    },
    {
      title: "AI User Data Repository",
      href: "",
      active: true,
      description:
        "Built for Devoteam, this platform syncs files from multiple sources (Google Drive, etc.) into a single knowledge base. It is enhanced with AI through automatic tagging and a RAG-powered chatbot, giving Devoteam a unified source of knowledge and boosting productivity.",
      technologies: [
        "Next.js",
        "TypeScript",
        "RAG",
        "Python",
      ],
      links: [],
      image: "",
      video: "/videos/AIUserDataRepository.mp4",
    },
  ],
  hackathons: [
    {
      title: "HAKS 2026 - Airbus x IBM x AWS",
      dates: "June 11th, 2026",
      location: "Télécom Paris, Palaiseau, France",
      description: "Organized by HAKS2026 and KRYPTOSPHERE® FRANCE.<br />" +
        "Sponsored by Airbus, IBM, and AWS.<br /><br />" +
        "A full-day competition where student teams tackle real aerospace industry challenges.<br /><br />" +
        "Participants develop solutions using \"Bob\", IBM's AI coding tool, alongside AWS cloud infrastructure, before pitching to a jury panel.",
      image:
        "/haks2026.png",
      links: [],
    },
    {
      title: "AI for Business w/ AWS x Centrale Nantes Études",
      dates: "March 21th - 22th, 2026",
      location: "Le Mans, France",
      description: "Organized by Centrale Nantes Études.<br />" +
        "Sponsored by AWS, BNP Paribas, Lovable, Red Bull, Orange Business, ALTEN, Ippon, and more.<br /><br />" +
        "Today, this is a time-consuming task that requires manually cross-referencing a large amount of data (contracts, financial flows, significant life events, etc.).<br /><br />" +
        "That's why we worked alongside BNP Paribas to develop an AI tool for bank advisors: an interface that allows them to analyze customer data and obtain concrete recommendations before a meeting.<br /><br />" +
        "Tech Stack :<br />" +
        "↳ Frontend : React + Vite<br />" +
        "↳ Backend : Python + FastAPI<br />" +
        "↳ AI : Multi-agent architecture (3 specialist agents working in parallel + 1 synthesizer agent)<br />" +
        "↳ Infrastructure : Full deployment on AWS<br />",
      image:
        "/ai_for_business_2026.avif",
      links: [
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_winner-hackathon-ai-for-business-amazon-activity-7452238639310401536-Dqi8",
        },
      ],
      position: "first"
    },
    {
      title: "24 hours of code",
      dates: "March 21th - 22th, 2026",
      location: "Le Mans, France",
      description: "Create autonomous AI agents capable of playing and winning 10 different games via a REST API, and accumulating as many points as possible in 24 hours.",
      image:
        "/24h_du_code_2026.png",
      links: [
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/ugcPost-7441997203365085184-tm3m",
        },
      ],
      position: "first"
    },
    {
      title: "LLM x Law Hackathon",
      dates: "June 20th - 22th 2025",
      location: "Cambridge, United Kingdom",
      description:
        "Organized by University of Cambridge, King's College Cambridge and CodeX (the Stanford Center for Legal Informatics).<br />" +
        "Sponsored by Google, Jus Mundi, Clifford Chance, and more.<br /><br />" +
        "We tried to answer one big question : how can GenAI transform the practice of law ?<br /><br />" +
        "With our amazing team Nivar Anwer Alina Ahmed Valentin Colomer and Alexander Plester, we tackled the challenge of building the lawyer's digital mind set by Jus Mundi and CodeX, The Stanford Center for Legal Informatics<br /><br />" +
        "We created Dialogue AI :<br />" +
        "↳ A multi-agent AI co-counsel<br />" +
        "↳ Tests & optimises legal strategies for arbitration<br />" +
        "↳ Backed by real case law<br /><br />" +
        "We won the 2nd place overall and a special Google Cloud prize for using their tools to build our solution.",
      image:
        "/university_of_cambridge.png",
      links: [
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_3-days-150-cracked-people-people-from-activity-7346202255911469056-ooWW"
        },
      ],
      position: "second",
    },
    {
      title: "From LLM to AI Agents",
      dates: "April 4th - 6th 2025",
      location: "Cergy, France",
      description:
        "Organized by Kryptosphere and Utopia.<br />" +
        "Sponsored by Mistral AI, AWS, Google, Ledger, Bpifrance.<br /><br />" +
        "With our team, we started from a key observation :<br />" +
        "In 2024, 75% of French people had already been exposed to an attempted scam through Social Engineering (source: cybermalveillance.gouv.fr).<br />" +
        "Many individuals are still being scammed daily on well-known marketplaces such as eBay, Vinted or Leboncoin.<br /><br />" +
        "Here comes Trustee :<br />" +
        "Trustee is an AI agent that detect scams via Social Engineering.<br /><br />" +
        "Trustee is :<br />" +
        "↳ a trust score based on multiple criterias : listing, conversation, etc.<br />" +
        "↳ a conversational assistant that suggests questions to ask to ensure you don't get scammed<br />" +
        "↳ compatible across all marketplaces (eBay, Vinted, LeBonCoin, etc.)<br /><br />" +
        "With Trustee, we won the first place overall and also got the top spot in the Cybersecurity special track. It would not have been possible without the invaluable support and guidance of the mentors — thank you !<br /><br />",
      image:
        "/kryptosphere.png",
      links: [
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_hackathon-first-place-across-all-tracks-activity-7315028317865193473-41j6",
        },
      ],
      position: "first",
    },
    {
      title: "Startup Weekend",
      dates: "November 15th - 17th 2024",
      location: "Nantes, France",
      description:
        "Coming soon...",
      image:
        "/startup_weekend.jpg",
      links: [
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_startupweekend-entrepreuneuriat-innovation-activity-7264284341185175555-0E7q",
        },
      ],
      position: null,
    },
    {
      title: "24 hours of code",
      dates: "April 6th - 7th, 2024",
      location: "Le Mans, France",
      description: "I wanted to tackle new technical challenges by taking part in the 24H du Code with Enzo Desbois and Samy Bouhamidi. Our aim was to produce a board game (Loup-garou) playable by a human being against several AIs playing the different roles.<br /><br />After implementing an LLM (Mistral-7B-Instruct-v0.2) on Google Colab and learning new things like quantization and the use of Langchain, we set up an original GUI with Three.js (see video below) and made it communicate with our server and the LLM.<br /><br />With +200 participants divided into 49 teams and facing 5 different topics, the competition was tough, but we managed to stand out and come in 1st in the topic led by Le Mans School of AI.",
      image:
        "/24h_du_code_2024.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/jordanbmrd/24h-du-code-2024",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_24hcode-24hducode-activity-7182793006045876226-08qD",
        },
      ],
      position: "first"
    },
    {
      title: "IT for Green",
      dates: "January 26th - 27th, 2024",
      location: "Paris, France",
      description:
        "We thought about how to meet tomorrow's environmental challenges by putting our IT skills to the test. Today, digital technology accounts for 4% of global CO2 emissions, so we need to use it wisely.<br /><br />We were awarded 1st prize in the “IT4Green” competition for our e-commerce platform project featuring eco-responsible businesses, giving visibility to local events that benefit the environment, and including innovative educational content on ecology (DIY, repairs, etc.).",
      image:
        "/it_for_green.jpg",
      links: [
        {
          title: "Figma",
          icon: <FigmaIcon className="h-4 w-4" />,
          href: "https://www.figma.com/design/wCZI18HxVh2QMbfqtCmHyl/Maquette-Appli?node-id=0-1&t=YIYagnzw4d5uNnzP-1",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_hackathon-it-for-green-janvier-2024-activity-7157281146723078144-DN8g",
        },
      ],
      position: "first"
    },
    {
      title: "Accenture x AWS Deepracer Cup",
      dates: "March 23rd - 24th, 2018",
      location: "Brest, France",
      description:
        "Organized by Accenture France in collaboration with Amazon Web Services (AWS), AWS DeepRacer is a competition that develops artificial intelligence skills by training a small car to drive autonomously using machine learning.<br /><br />We got the 2nd prize !",
      icon: "public",
      image:
        "/deepracer.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/jordanbmrd/aws-accenture-deepracer-cup",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_awsdeepracer-challengeaccepted-machinelearning-activity-7143601069070192640-Lria",
        },
      ],
      position: "second"
    },
    {
      title: "24 hours of IUT",
      dates: "May 12th - 13th, 2023",
      location: "Lyon, France",
      description:
        "On the program: Forensic, Pentest, OSINT, Reverse engineering, Steganography, etc. We learned new skills and met some great people !<br /><br />Here are some highlights of our participation with 23 teams present :<br /> - 2nd place in web development<br /> - 3rd place in cybersecurity<br /> - 7th place in algo/prog<br /> - An epic all-nighter",
      image:
        "/univ_lyon.png",
      links: [
        {
          title: "Article (Université Paris Cité)",
          icon: <GraduationCapIcon className="h-4 w-4" />,
          href: "https://iutparis-seine.u-paris.fr/lequipe-paris-descartes-arrive-3eme-au-challenge-national-des-24h-info-des-iut/",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_24h-des-iut-mai-2023-retour-sur-activity-7063825915960553472-_e7_",
        },
      ],
      position: "second"
    },
    {
      title: "Startup Weekend",
      dates: "Whatever month 2018",
      location: "Le Mans, France",
      description:
        "I met a lot of interesting people and we created together an MVP of an educational web application for young children.",
      image:
        "/startup_weekend.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
      position: null,
    },
  ],
} as const;
