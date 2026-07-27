export const config = {
    developer: {
        name: "Amir",
        fullName: "Amirul Fahrudin",
        title: "Siswa",
        description: "Siswa SMK Krian 1 jurusan Rekayasa Perangkat Lunak (RPL)"
    },
    social: {
        github: "Amirul987",
        email: "amirulfahrudin750@gmail.com",
        location: "Indonesia"
    },
    about: {
        title: "Tentang Saya",
        description: "Saya merupakan lulusan SMPN 2 Krian dan saat ini sedang menempuh pendidikan di SMK Krian 1 dengan mengambil jurusan Rekayasa Perangkat Lunak (RPL). Saya memiliki ketertarikan yang besar terhadap dunia teknologi, khususnya dalam bidang pemrograman, pengembangan website, desain antarmuka, serta pengembangan berbagai aplikasi berbasis web."
    },
    experiences: [
        {
            position: "Learning Something New",
            company: "Self-Development",
            period: "2025 - Present",
            location: "Bangladesh",
            description: "Continuously exploring emerging technologies, researching advanced AI systems, and pushing the boundaries of what's possible in tech.",
            responsibilities: [
                "Researching cutting-edge AI and ML technologies",
                "Experimenting with new frameworks and tools",
                "Contributing to open-source projects",
                "Building innovative personal projects"
            ],
            technologies: ["Research", "Innovation", "Open Source", "New Tech"]
        },
        {
            position: "AI Engineer",
            company: "Freelance & Projects",
            period: "2025",
            location: "Bangladesh",
            description: "Developing intelligent AI systems, chatbots, and machine learning solutions. Building next-gen conversational AI agents and JARVIS-like personal assistants.",
            responsibilities: [
                "Building AI-powered chatbots and conversational agents",
                "Developing machine learning models with TensorFlow and PyTorch",
                "Working with LLMs and transformer architectures",
                "Creating autonomous AI systems and automation tools"
            ],
            technologies: ["Python", "TensorFlow", "PyTorch", "LLMs", "NLP", "AI Agents"]
        },
        {
            position: "Full-Stack Developer",
            company: "Freelance & Projects",
            period: "2024",
            location: "Bangladesh",
            description: "Built complete web applications from frontend to backend. Developed responsive UIs, RESTful APIs, and database solutions for various clients and projects.",
            responsibilities: [
                "Developing full-stack web applications using React and Node.js",
                "Building RESTful APIs and integrating databases",
                "Creating responsive and interactive user interfaces",
                "Deploying and maintaining web applications"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"]
        },
        {
            position: "Python Developer",
            company: "Self-Taught & Projects",
            period: "2023",
            location: "Bangladesh",
            description: "Dove deep into Python programming, building automation scripts, bots, and mastering the fundamentals of software development and problem-solving.",
            responsibilities: [
                "Learning Python programming and core concepts",
                "Building automation scripts and Discord bots",
                "Exploring data structures and algorithms",
                "Participating in competitive programming"
            ],
            technologies: ["Python", "Automation", "Scripting", "Discord.py", "Problem Solving"]
        },
        {
            position: "Graphic Designer",
            company: "Freelance",
            period: "2022",
            location: "Bangladesh",
            description: "Started my creative journey as a graphic designer, creating logos, banners, and visual content. This sparked my passion for technology and digital creation.",
            responsibilities: [
                "Designing logos and brand identity materials",
                "Creating social media graphics and banners",
                "Working with clients on creative projects",
                "Learning design principles and visual aesthetics"
            ],
            technologies: ["Photoshop", "Illustrator", "Canva", "Figma", "Visual Design"]
        },
        {
            position: "Microsoft Office",
            company: "Begin Learning",
            period: "2021",
            location: "Bangladesh",
            description: "Started my journey into the digital world by learning Microsoft Office tools. This foundational step introduced me to computers and sparked my curiosity for technology.",
            responsibilities: [
                "Learning Microsoft Word, Excel, and PowerPoint",
                "Creating documents and presentations",
                "Understanding basic computer operations",
                "Building foundational digital skills"
            ],
            technologies: ["MS Word", "MS Excel", "MS PowerPoint", "Computer Basics"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "IoT Smart Parking System",
            category: "IoT / Web Dashboard",
            technologies: "ESP32, Arduino C++, Blynk, Ultrasonic Sensor, Servo, LCD I2C, PHP, MySQL, JavaScript",
            image: "/images/404.png",
            description: "Sistem parkir pintar berbasis IoT yang menggunakan ESP32 untuk memantau kendaraan secara otomatis. Sistem dilengkapi sensor ultrasonic untuk mendeteksi kendaraan, servo sebagai palang masuk dan keluar, LCD untuk menampilkan informasi parkir, serta integrasi Blynk dan dashboard web untuk memantau jumlah kendaraan, kapasitas maksimum, slot tersedia, riwayat kendaraan, dan statistik secara real-time."
        },
        {
            id: 2,
             title: "WhatsApp Payment Bot",
            category: "Automation / WhatsApp Bot",
            technologies: "Node.js, JavaScript, Baileys, QRIS API, TemanQRIS",
            image: "/images/botwa.png",
            description: "Bot WhatsApp otomatis yang dikembangkan menggunakan Baileys untuk mengelola berbagai kebutuhan berbasis chat. Bot memiliki fitur generate QRIS, proses pembayaran, respons otomatis, serta integrasi layanan pembayaran sehingga pengguna dapat melakukan transaksi melalui percakapan WhatsApp."
        },
        {
            id: 3,
            title: "Jellyfin Media Server",
            category: "Server / Media Streaming",
            technologies: "Linux, Jellyfin, HTML, CSS, JavaScript, Nginx, Tunnel",
            image: "/images/jellyfin.png",
            description: "Media server pribadi yang digunakan untuk mengelola dan melakukan streaming koleksi film dan video melalui jaringan. Sistem dikembangkan dan dikustomisasi pada lingkungan Linux dengan penyesuaian tampilan Jellyfin, custom CSS, logo pribadi, efek glow, serta tema Cyber Neon untuk memberikan pengalaman media streaming yang lebih menarik."
        },
        {
            id: 4,
            title: "Pterodactyl Game Server Panel",
            category: "Server / DevOps",
            technologies: "Linux, Ubuntu, Pterodactyl, Wings, Nginx, PHP, MySQL, Laravel, Docker",
            image: "/images/ptero.png",
            description: "Eksperimen dan pengembangan lingkungan manajemen game server menggunakan Pterodactyl Panel. Project ini mencakup proses instalasi dan konfigurasi panel, Wings, node server, database, Nginx, PHP-FPM, SSL, serta pengelolaan server berbasis container untuk menjalankan berbagai layanan game server."
        },
        {
            id: 5,
            title: "Game Top Up Website",
            category: "E-Commerce / Gaming",
            technologies: "HTML, CSS, JavaScript, PHP, MySQL, QRIS API",
            image: "/images/404.png",
            description: "Konsep platform top up game yang menyediakan layanan pembelian item atau mata uang digital untuk berbagai game populer seperti Free Fire, Mobile Legends, dan PUBG. Website dirancang dengan tema gaming modern dan sistem transaksi digital yang dapat dikembangkan dengan integrasi pembayaran otomatis."
        },
        {
            id: 6,
            title: "Portfolio Website",
            category: "Web Development / Personal",
            technologies: "HTML, CSS, JavaScript, Glassmorphism, Responsive Design",
            image: "/images/404.png",
            description: "Website portfolio pribadi yang menampilkan profil, perjalanan pendidikan, kemampuan, sertifikat, pengalaman, dan berbagai project yang telah dikerjakan. Website menggunakan desain Glassmorphism dengan tampilan modern, responsif, interaktif, serta dilengkapi halaman project yang menampilkan detail, teknologi yang digunakan, fitur, dan link demo."
        },
        {
            id: 7,
            title: "Robot Line Tracer",
            category: "Robotics / Hardware",
            technologies: "Microcontroller, C++, Infrared Sensor, Motor Driver, DC Motor",
            image: "/images/robot.png",
            description: "Project robot line tracer yang dirakit untuk mempelajari dasar-dasar robotika dan sistem kendali otomatis. Robot menggunakan sensor untuk membaca jalur dan mengatur pergerakan motor secara otomatis agar dapat mengikuti lintasan yang telah ditentukan."
        },
        {
            id: 8,
            title: "Code MajuMundur",
            category: "Web Development / Education",
            technologies: "HTML, CSS, JavaScript, Particle.js, Canvas API, Font Awesome",
            image: "/images/404.png",
            description: "Website edukasi dan tutorial pemrograman yang dirancang sebagai tempat untuk berbagi materi, tutorial, dan project pengembangan software. Website memiliki beberapa halaman seperti Home, Tutorials, Projects, About, dan Contact, dilengkapi dengan fitur dark mode, auto theme berdasarkan waktu, navigasi responsif, particle background, interactive canvas, serta berbagai project game."
        }
    ],
    contact: {
        email: "amirulfahrudin750@gmail.com",
        github: "https://github.com/Amirul987",
        linkedin: "https://linkedin.com/in/red1-for-hek",
        twitter: "https://tiktok.com/amir7z7z7",
        facebook: "https://stabilo404.t.me",
        instagram: "https://www.instagram.com/maungeseng2"
    },
    skills: {
        develop: {
            title: "MANAJEMEN HOSTING & SERVER",
            description: "Mengelola lingkungan server dan konfigurasi web hosting",
            details: "Mampu mengonfigurasi dan memelihara panel server, node server game, serta lingkungan web hosting. Berpengalaman dalam alokasi sumber daya server, pengaturan domain, keamanan SSL, dan koneksi basis data.",
            tools: ["Pterodactyl", "cPanel", "phpMyAdmin", "Pengaturan Domain", "Sertifikat SSL", "Log Server", "Manajemen Sumber Daya"]
        },
        design: {
            title: "PENGEMBANGAN WEBSITE",
            description: "Membangun halaman web yang interaktif, modern, dan responsif",
            details: "Mengembangkan antarmuka web yang rapi dan responsif mulai dari struktur HTML, tampilan CSS, hingga interaktivitas JavaScript, yang terintegrasi dengan pengelolaan basis data MySQL melalui phpMyAdmin.",
            tools: ["HTML5", "CSS3", "JavaScript", "phpMyAdmin", "MySQL", "Rest API"]
        }
    }
};


