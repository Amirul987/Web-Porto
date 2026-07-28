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
            position: "Software Engineering Student",
            company: "SMK Krian 1",
            period: "2025 - Present",
            location: "Sidoarjo, Indonesia",
            description: "Sedang menempuh pendidikan di jurusan Rekayasa Perangkat Lunak (RPL) sambil terus mengembangkan kemampuan di bidang pengembangan website, backend, Linux server, IoT, dan teknologi terbaru melalui project pribadi.",
            responsibilities: [
                "Mempelajari pengembangan website frontend dan backend",
                "Membangun project pribadi sebagai media belajar",
                "Mempelajari Linux Server, API, dan database",
                "Terus mengikuti perkembangan teknologi terbaru"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Linux"]
        },
        {
            position: "IoT & Backend Developer",
            company: "Personal Projects",
            period: "2025",
            location: "Sidoarjo, Indonesia",
            description: "Mengembangkan berbagai project berbasis IoT dan backend sebagai sarana belajar, mulai dari dashboard monitoring hingga sistem otomatisasi.",
            responsibilities: [
                "Membuat IoT Smart Parking System menggunakan ESP32",
                "Mengembangkan dashboard berbasis PHP dan MySQL",
                "Mengintegrasikan REST API dan layanan pihak ketiga",
                "Mempelajari sistem monitoring secara real-time"
            ],
            technologies: ["ESP32", "Arduino", "PHP", "MySQL", "JavaScript", "REST API"]
        },
        {
            position: "Panel & Digital Product Seller",
            company: "Independent",
            period: "2023 - 2024",
            location: "Sidoarjo, Indonesia",
            description: "Menjual berbagai produk digital seperti Panel Pterodactyl, VPS, dan Source Code Bot WhatsApp sekaligus mempelajari pengelolaan server Linux dan kebutuhan pelanggan.",
            responsibilities: [
                "Mengelola server VPS berbasis Linux",
                "Membuat dan mengelola Panel Pterodactyl",
                "Menjual Source Code Bot WhatsApp",
                "Memberikan bantuan kepada pelanggan terkait server"
            ],
            technologies: ["Linux", "Ubuntu", "Pterodactyl", "Docker", "Node.js", "Nginx"]
        },
        {
            position: "Website Developer",
            company: "Personal Projects",
            period: "2023",
            location: "Sidoarjo, Indonesia",
            description: "Mulai mendalami pengembangan website dengan membangun berbagai project untuk meningkatkan kemampuan frontend, backend, dan database.",
            responsibilities: [
                "Membangun website menggunakan HTML, CSS, dan JavaScript",
                "Belajar PHP dan MySQL",
                "Membuat dashboard admin sederhana",
                "Mempelajari responsive web design"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
        },
        {
            position: "Graphic Design Enthusiast",
            company: "Self Learning",
            period: "2022",
            location: "Sidoarjo, Indonesia",
            description: "Belajar dasar-dasar desain grafis sebagai bekal untuk membuat antarmuka website yang menarik dan nyaman digunakan.",
            responsibilities: [
                "Belajar desain poster dan banner",
                "Membuat aset grafis sederhana",
                "Mengenal prinsip UI/UX",
                "Menggunakan software desain untuk project pribadi"
            ],
            technologies: ["Photoshop", "Illustrator", "Canva", "Figma"]
        },
        {
            position: "Computer Basics",
            company: "Self Learning",
            period: "2021",
            location: "Sidoarjo, Indonesia",
            description: "Awal mula mengenal dunia komputer melalui Microsoft Office dan dasar-dasar penggunaan sistem operasi sebelum mulai belajar pemrograman.",
            responsibilities: [
                "Belajar Microsoft Word, Excel, dan PowerPoint",
                "Mengenal dasar-dasar komputer",
                "Membuat dokumen dan presentasi",
                "Membangun kemampuan digital dasar"
            ],
            technologies: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Computer Basics"]
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


