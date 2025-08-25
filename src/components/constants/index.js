const categories = [
  {
    title: "School Projects",
    description: "Academic projects showcasing learning and growth",
    projects: [
      {
        id: 1,
        title: "School 1",
        description:
          "A school website built with React, Tailwind, and Vite to highlight academics, student activities, and modern facilities in a clean layout.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        image: "/images/school1.webp",
        githubUrl: "https://github.com/mku2062022bca11/School1",
        liveUrl: "https://edu-neonym.vercel.app/",
      },
      {
        id: 2,
        title: "School 2",
        image: "/images/school2.webp",
        description:
          "A dynamic school website using React, Tailwind, Vite, and Framer Motion with smooth animations to enhance the user experience.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/school2",
        liveUrl: "https://edu2-neonym.vercel.app/",
      },
      {
        id: 3,
        title: "School 3",
        image: "/images/school3.webp",
        description:
          "A responsive school website crafted with React, Tailwind, and Vite to showcase academics, activities, and infrastructure effectively.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/school3",
        liveUrl: "https://edu3-neonym.vercel.app/",
      },
      {
        id: 4,
        title: "School 4",
        image: "/images/school4.webp",
        description:
          "An elegant school website built with React, Tailwind, and Vite, designed to present academic programs and student activities seamlessly.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/school4",
        liveUrl: "https://edu4-neonym.vercel.app/",
      },
      {
        id: 5,
        title: "School 5",
        image: "/images/school5.webp",
        description:
          "A modern school website developed with React, Tailwind, and Vite to highlight curriculum, events, and infrastructure in a structured layout.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/school5",
        liveUrl: "https://edu5-neonym.vercel.app/",
      },
      {
        id: 6,
        title: "School 6",
        image: "/images/school6.webp",
        description:
          "A feature-rich school website built with React, Tailwind, Vite, and Framer Motion, offering smooth animations for an engaging user journey.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/Arfinusmaan/Edu-6",
        liveUrl: "https://edu6-neonym.vercel.app/",
      },
      {
        id: 7,
        title: "School 7",
        image: "/images/school7.webp",
        description:
          "An interactive school website created with React, Tailwind, Vite, and Framer Motion, featuring smooth transitions for a modern user experience.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School7",
        liveUrl: "https://edu7-neonym.vercel.app/",
      },
      {
        id: 8,
        title: "School 8",
        image: "/images/school8.webp",
        description:
          "A clean and modern school website built with React, Tailwind, and Vite, designed for fast performance and responsive layouts.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/School8",
        liveUrl: "https://edu8-neonym.vercel.app/",
      },
      {
        id: 9,
        title: "School 9",
        image: "/images/school9.webp",
        description:
          "An advanced school website built with React, Tailwind, Vite, and Framer Motion, featuring smooth animations and an engaging user experience.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School9",
        liveUrl: "https://edu9-neonym.vercel.app/",
      },
      {
        id: 10,
        title: "School 10",
        image: "/images/school10.webp",
        description:
          "A sleek and interactive school website built using React, Tailwind CSS, Vite, and Framer Motion, delivering smooth transitions and a modern, dynamic design.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School10",
        liveUrl: "https://edu10-neonym.vercel.app/",
      },
      {
        id: 11,
        title: "School 11",
        image: "/images/school11.webp",
        description:
          "An advanced school website crafted with React, Tailwind CSS, Vite, and Framer Motion, featuring fluid animations and a premium modern look.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School11",
        liveUrl: "https://edu11-neonym.vercel.app/",
      },
      {
        id: 12,
        title: "School 12",
        image: "/images/school13.webp",
        description:
          "A streamlined school website built with React, Tailwind, and Vite, emphasizing performance, clarity, and responsive design for optimal user engagement.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/School13/",
        liveUrl: "https://edu13-neonym.vercel.app/",
      },
      {
        id: 13,
        title: "School 13",
        image: "/images/school14.webp",
        description:
          "An immersive school website built with React, Tailwind CSS, Vite, and Framer Motion, delivering animated interactions and polished user interface.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School14/",
        liveUrl: "https://edu14-neonym.vercel.app/",
      },
      {
        id: 14,
        title: "School 14",
        image: "/images/school15.webp",
        description:
          "A clean and user-centric school website built using React, Tailwind CSS, and Vite, optimized for speed, clarity, and effortless navigation.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/School15/",
        liveUrl: "https://edu15-neonym.vercel.app/",
      },
      {
        id: 15,
        title: "School 15",
        image: "/images/school16.webp",
        description:
          "A clean and user-centric school website built using React, Tailwind CSS, and Vite, optimized for performance, clarity, and responsive layout.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/School16",
        liveUrl: "https://edu16-neonym.vercel.app/",
      },
      {
        id: 16,
        title: "School 16",
        image: "/images/school17.webp",
        description:
          "A focused school website using React, Tailwind, and Vite, prioritized for performance, clarity, and responsive pages without animation overhead.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/School17/",
        liveUrl: "https://edu17-neonym.vercel.app/",
      },
      {
        id: 17,
        title: "School 17",
        image: "/images/school18.webp",
        description:
          "A polished school website built with React, Tailwind CSS, and Vite—streamlined for fast performance, minimal design, and seamless navigation.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/School18/",
        liveUrl: "https://edu18-neonym.vercel.app/",
      },
      {
        id: 18,
        title: "School 18",
        image: "/images/school19.webp",
        description:
          "A modern school website built with React, Tailwind CSS, and Vite, designed for smooth navigation and elegant layouts.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School19",
        liveUrl: "https://edu19-neonym.vercel.app/",
      },
      {
        id: 19,
        title: "School 19",
        image: "/images/school20.webp",
        description:
          "A responsive school website crafted with React, Tailwind CSS, and Vite. Clean design and optimized for fast performance.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/mku2062022bca11/School20",
        liveUrl: "https://edu20-neonym.vercel.app/",
      },
      {
        id: 20,
        title: "School 20",
        image: "/images/school21.webp",
        description:
          "An engaging school website built with React, Tailwind CSS, Vite, and Framer Motion, featuring smooth transitions and animated visuals.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School21",
        liveUrl: "https://edu21-neonym.vercel.app/",
      },
      {
        id: 21,
        title: "School 21",
        image: "/images/school22.webp",
        description:
          "An engaging school website built with React, Tailwind CSS, Vite, and Framer Motion, offering lively animations and seamless page interactions.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School22",
        liveUrl: "https://edu22-neonym.vercel.app/",
      },
      {
        id: 22,
        title: "School 22",
        image: "/images/school23.webp",
        description:
          "A vibrant school website created with React, Tailwind CSS, Vite, and Framer Motion, offering delightful animations and smooth user engagement.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School23/",
        liveUrl: "https://edu23-neonym.vercel.app/",
      },
      {
        id: 23,
        title: "School 23",
        image: "/images/school24.webp",
        description:
          "An interactive school website built with React, Tailwind CSS, Vite, and Framer Motion, delivering dynamic visuals and refined user interactions.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School24/",
        liveUrl: "https://edu24-neonym.vercel.app/",
      },
      {
        id: 24,
        title: "School 24",
        image: "/images/school25.webp",
        description:
          "An expressive school website crafted with React, Tailwind CSS, Vite, and Framer Motion, featuring lively animations and intuitive interaction patterns.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        githubUrl: "https://github.com/mku2062022bca11/School25",
        liveUrl: "https://edu25-neonym.vercel.app/",
      },
    ],
  },
  {
    title: "Academy & Tuition",
    description: "Educational platforms and coaching solutions",
    projects: [
      {
        id: 1,
        title: "Academy 1",
        description:
          "A modern and responsive academy website built with smooth animations, course highlights, and dynamic layouts for institutes.",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/Arfinusmaan/Academy-1",
        liveUrl: "https://academy1-neonym.vercel.app",
        image: "/images/academy1.webp",
      },
      {
        id: 2,
        title: "Academy 2",
        description:
          "Elegant academy website with clean layouts, subject sections, and modern design for institutes.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Academy-2",
        liveUrl: "https://academy2-neonym.vercel.app",
        image: "/images/academy2.webp",
      },
      {
        id: 3,
        title: "Academy 3",
        description:
          "Modern academy website with structured pages, responsive design, and a professional interface.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Academy-3",
        liveUrl: "https://academy3-neonym.vercel.app",
        image: "/images/academy3.webp",
      },
      {
        id: 4,
        title: "Academy 4",
        description:
          "Elegant academy website featuring animations, responsive layouts, and modern UI/UX design.",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/Arfinusmaan/Academy-4",
        liveUrl: "https://academy4-neonym.vercel.app",
        image: "/images/academy4.webp",
      },
      {
        id: 5,
        title: "Academy 5",
        description:
          "Modern academy platform with smooth animations, clean layout, and engaging course sections.",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/Arfinusmaan/Academy-5",
        liveUrl: "https://academy5-neonym.vercel.app",
        image: "/images/academy5.webp",
      },
    ],
  },
  {
    title: "Teacher Portfolios",
    description: "Individual portfolio websites for educators",
    projects: [
      {
        id: 1,
        title: "Teacher 1 Portfolio",
        description:
          "A dynamic teaching portfolio showcasing innovative classroom strategies, student success stories, and a passion for lifelong learning.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-1",
        liveUrl: "https://teacher1-neonym.vercel.app/",
        image: "/images/teacher1.webp",
      },
      {
        id: 2,
        title: "Teacher 2 Portfolio",
        description:
          "A refined educator site built with React, Vite, and Tailwind CSS, spotlighting teaching philosophy, classroom impact, and professional reach.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-2",
        liveUrl: "https://teacher2-neonym.vercel.app/",
        image: "/images/teacher2.webp",
      },
      {
        id: 3,
        title: "Teacher 3 Portfolio",
        description:
          "An elegant portfolio crafted with React, Vite, and Tailwind CSS, showcasing innovative teaching strategies, mentorship stories, and impactful student success journeys.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-3",
        liveUrl: "https://teacher3-neonym.vercel.app/",
        image: "/images/teacher3.webp",
      },
      {
        id: 4,
        title: "Teacher 4 Portfolio",
        description:
          "A refined educator portfolio built using React, Vite, and Tailwind CSS, featuring teaching philosophy, classroom highlights, and mentorship narratives.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-4",
        liveUrl: "https://teacher4-neonym.vercel.app/",
        image: "/images/teacher4.webp",
      },
      {
        id: 5,
        title: "Teacher 5 Portfolio",
        description:
          "A polished teaching portfolio created with React, Vite, and Tailwind CSS, highlighting professional teaching methods, student engagement, and content clarity.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-5",
        liveUrl: "https://teacher5-neonym.vercel.app/",
        image: "/images/teacher5.webp",
      },
      {
        id: 6,
        title: "Teacher 6 Portfolio",
        description:
          "A clean and engaging educator portfolio crafted with React, Vite, and Tailwind CSS—featuring professional highlights, teaching philosophy, and student learning impact.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-6",
        liveUrl: "https://teacher6-neonym.vercel.app/",
        image: "/images/teacher6.webp",
      },
      {
        id: 7,
        title: "Teacher 7 Portfolio",
        description:
          "A modern and inspiring teacher portfolio built with React, Vite, Tailwind CSS, and Framer Motion, showcasing achievements and creative teaching methods.",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-7",
        liveUrl: "https://teacher7-neonym.vercel.app/",
        image: "/images/teacher7.webp",
      },
      {
        id: 8,
        title: "Teacher 8 Portfolio",
        description:
          "A clean, minimalistic portfolio for educators designed with React, Vite, and Tailwind CSS—highlighting teaching philosophy and student success stories.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-8",
        liveUrl: "https://teacher8-neonym.vercel.app/",
        image: "/images/teacher8.webp",
      },
      {
        id: 9,
        title: "Teacher 9 Portfolio",
        description:
          "An elegant teacher portfolio with structured layouts, crafted using React, Vite, and Tailwind CSS to emphasize academic excellence and student outcomes.",
        techStack: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-9",
        liveUrl: "https://teacher9-neonym.vercel.app/",
        image: "/images/teacher9.webp",
      },
      {
        id: 10,
        title: "Teacher 10 Portfolio",
        description:
          "A dynamic and visually striking teacher portfolio leveraging React, Vite, Tailwind CSS, and Framer Motion for smooth animations and an engaging user experience.",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/Arfinusmaan/Teacher-10",
        liveUrl: "https://teacher10-neonym.vercel.app/",
        image: "/images/teacher10.webp",
      },
    ],
  },
  // {
  //   title: 'Local Business',
  //   description: 'Solutions for local businesses and entrepreneurs',
  //   projects: [
  //     {
  //       id: 7,
  //       title: 'Restaurant Website',
  //       description: 'Modern restaurant website with online menu, reservation system, and location details.',
  //       techStack: ['React', 'Node.js', 'Stripe API'],
  //       githubUrl: '#',
  //       liveUrl: '#'
  //     },
  //     {
  //       id: 8,
  //       title: 'Boutique E-commerce',
  //       description: 'Elegant online store for a local boutique with product catalog and shopping cart functionality.',
  //       techStack: ['Next.js', 'Shopify API', 'Tailwind CSS'],
  //       githubUrl: '#',
  //       liveUrl: '#'
  //     }
  //   ]
  // },
  {
    title: "Personal Projects",
    description: "Creative experiments and passion projects",
    projects: [
      {
        id: 1,
        title: "Lyriks Music Platform",
        description:
          "An immersive music platform enabling real-time search, genre filtering, and interactive lyrics display, built with React, Tailwind CSS, Redux Toolkit, and Deezer API for seamless discovery and playback.",
        techStack: ["React", "Tailwind CSS", "Redux Toolkit", "Deezer API"],
        githubUrl: "https://github.com/Arfinusmaan/Lyriks-Music-App",
        liveUrl: "https://lyriks-arfin.vercel.app/",
        image: "/images/lyriks.webp",
      },
      {
        id: 2,
        title: "Nike - Product Landing Page",
        description:
          "A sleek, responsive landing page for Nike sneakers with bold visuals, smooth animations, and refined UI/UX transitions.",
        techStack: ["Vite", "React", "Tailwind CSS"],
        githubUrl: "https://github.com/Arfinusmaan/Nike-Landing-Page",
        liveUrl: "https://nike-arfin.vercel.app",
        image: "/images/nike.webp",
      },
      {
        id: 3,
        title: "Cocktail - Smooth & Animated UI",
        description:
          "An elegant, interactive site with parallax, lively scroll effects, and GSAP animations for a rich, immersive browsing experience.",
        techStack: ["Vite", "React", "Tailwind CSS", "GSAP"],
        githubUrl: "https://github.com/Arfinusmaan/gsap-cocktail",
        liveUrl: "https://cocktail-arfin.vercel.app",
        image: "/images/cocktail.webp",
      },
      {
        id: 4,
        title: "Moodflix - Real-Time Movie Explorer",
        description:
          "A dynamic movie explorer with real-time search, rich previews, and trailer support powered by OMDb API, Appwrite, and React.",
        techStack: ["React", "Tailwind CSS", "Appwrite", "OMDb API", "Vite"],
        githubUrl: "https://github.com/Arfinusmaan/MoodFlix-A-Movie-App",
        liveUrl: "https://moodflix-arfin.vercel.app",
        image: "/images/moodflix.webp",
      },
      {
        id: 5,
        title: "RecipeFinder - Recipes Made Easy",
        description:
          "A recipe discovery app with keyword search, category browsing, and quick meal previews powered by TheMealDB API.",
        techStack: ["React", "Tailwind CSS", "Vite", "TheMealDB API"],
        githubUrl: "https://github.com/Arfinusmaan/Recipe-Finder",
        liveUrl: "https://recipe-arfin.vercel.app",
        image: "/images/recipe.webp",
      },
      {
        id: 6,
        title: "BookStore - Full Stack MERN App",
        description:
          "A full-stack MERN bookstore app with user auth, book management, and seamless browsing and purchase flow.",
        techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
        githubUrl:
          "https://github.com/mku2062022bca11/project1-bookstorewebsite",
        liveUrl: "https://bookstorewebsitefrontend.onrender.com",
        image: "/images/bookstore.webp",
      },
    ],
  },
];

export default categories;
