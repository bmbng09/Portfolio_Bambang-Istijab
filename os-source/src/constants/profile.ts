// Semua isi pribadi ada di file ini, jadi cukup edit di sini untuk mengubah tampilan OS.
// Gambar proyek dan foto ditaruh di folder public/ (di repo 3D: static/os/).

export const asset = (file: string) =>
    `${process.env.PUBLIC_URL}/${encodeURI(file)}`;

export type ProjectGroupKey = 'web' | 'data' | 'design';

export interface Project {
    name: string;
    group: ProjectGroupKey;
    category: string;
    year: string;
    desc: string;
    tags: string[];
    link: string;
    image: string;
}

export const PROFILE = {
    name: 'Bambang Istijab',
    firstName: 'Bambang',
    lastName: 'Istijab',
    nickname: 'Bams',
    title: 'Web & Application Developer',
    tagline: 'Ide matang, dieksekusi dengan presisi tenang.',
    location: 'Legok, Tangerang',
    status: 'Aktif belajar & ngoding sejak 2022',
    // Isi kalau mau menampilkan email di halaman Tentang dan Kontak
    email: '',
    // Isi dengan nama file PDF di folder public/ kalau mau menampilkan tombol resume, contoh: 'resume.pdf'
    resumeFile: '',
    photo: 'foto1.png',
    photoCaption: 'Bams',
    intro:
        'Nama saya Bambang Istijab, biasa dipanggil Bams, mahasiswa Informatika di Universitas Pertamina yang senang mengubah masalah sehari-hari jadi sistem yang beneran jalan. Dari presensi sekolah berbasis RFID, riset data & LLM, sampai ngurusin Media & IT sekolah, saya belajar sambil terus bikin sesuatu yang nyata dipakai orang.',
    highlights: [
        'Komunikasi jelas & progress selalu keliatan',
        'Bikin sistem yang beneran dipakai, bukan cuma demo',
        'Belajar cepat, kerjaan tetap rapi',
    ],
    stats: [
        { value: '7+', label: 'Proyek dikerjakan' },
        { value: '3.34', label: 'IPK kuliah' },
        { value: '5+', label: 'Tahun ngoding' },
        { value: '10+', label: 'Tools dikuasai' },
    ],
    skillsIntro:
        'Ini beberapa tools yang paling sering aku pakai buat ngerjain proyek, dari bikin web sampai riset data.',
    skills: [
        { name: 'HTML & CSS', pct: 90 },
        { name: 'JavaScript', pct: 80 },
        { name: 'Python', pct: 75 },
        { name: 'Google Apps Script', pct: 85 },
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Apps Script', 'Canva'],
    services: [
        {
            title: 'Desain Aplikasi',
            desc: 'Merancang alur dan antarmuka aplikasi berdasarkan kebutuhan nyata pengguna.',
        },
        {
            title: 'Pengembangan Web',
            desc: 'Membangun & merawat solusi berbasis web pakai HTML, CSS, dan JavaScript.',
        },
        {
            title: 'Sistem Sekolah Digital',
            desc: 'Mengembangkan sistem presensi dan informasi sekolah berbasis web.',
        },
        {
            title: 'Riset Data & LLM',
            desc: 'Pemrosesan data dan evaluasi sistematis teknik prompting untuk LLM.',
        },
    ],
    contactIntro:
        'Punya proyek di kepala? Yuk, mulai kerjain bareng. Ceritain proyek yang lagi kamu pikirin lewat formulir di bawah.',
    contactNote: 'Saya balas paling lambat 1 hari kerja.',
    socials: {
        github: 'https://github.com/bmbng09',
        linkedin: 'https://www.linkedin.com/in/bambang-istijab-596453334/',
        twitter: 'https://x.com/ijab09',
        instagram: 'https://www.instagram.com/bmbng.i_/',
    },
};

export const EXPERIENCE = [
    {
        org: 'SMP YUPPENTEK 1 Legok',
        role: 'Media & IT Sekolah',
        period: 'Jun 2025 - Sekarang',
        kind: 'Organisasi Sekolah',
        desc: 'Pengelolaan konten digital & infrastruktur IT sekolah.',
    },
    {
        org: 'PERBARINDO',
        role: 'TIM SMKI',
        period: 'Jun 2025 - Jun 2026',
        kind: 'Organisasi Perbankan',
        desc: '',
    },
];

export const EDUCATION = [
    {
        org: 'Universitas Pertamina',
        role: 'S1 Informatika',
        period: '2022 - Sekarang',
        desc: 'IPK 3.34 / 4.00',
    },
    {
        org: 'SMK Negeri 12 Kab. Tangerang',
        role: 'Teknik Komputer & Jaringan',
        period: '2019 - 2022',
        desc: '',
    },
    {
        org: 'SMP YUPPENTEK 1 Legok',
        role: 'Pendidikan Menengah Pertama',
        period: '2016 - 2019',
        desc: '',
    },
    {
        org: 'SDN Palasari IV',
        role: 'Pendidikan Dasar',
        period: '2010 - 2016',
        desc: '',
    },
];

export const PROJECT_GROUPS: {
    key: ProjectGroupKey;
    title: string;
    subtitle: string;
    heading: string;
    intro: string;
}[] = [
    {
        key: 'web',
        title: 'Web & Aplikasi',
        subtitle: 'PROYEK',
        heading: 'Web & Aplikasi',
        intro: 'Sistem presensi, website sekolah, dan prototipe aplikasi yang saya bangun dari ide sampai rilis.',
    },
    {
        key: 'data',
        title: 'Data & Riset',
        subtitle: 'ANALISIS',
        heading: 'Data & Riset',
        intro: 'Analisis data, machine learning, dan riset seputar teknik prompting untuk LLM.',
    },
    {
        key: 'design',
        title: 'Desain Grafis',
        subtitle: 'MEDIA',
        heading: 'Desain Grafis',
        intro: 'Karya desain untuk media sekolah.',
    },
];

// Catatan: deskripsi, tag, dan link untuk dua proyek terakhir dikosongkan karena
// di versi HTML sebelumnya isinya salinan dari proyek presensi. Isi sendiri di sini.
export const PROJECTS: Project[] = [
    {
        name: 'Smart Attendance System (RFID + IoT)',
        group: 'web',
        category: 'Web Development',
        year: '2024',
        desc: 'Sistem presensi siswa otomatis pakai RFID dan ESP32, data absensi terkirim real-time lewat Wi-Fi ke Google Sheets via IFTTT.',
        tags: ['ESP32', 'RFID', 'IoT', 'Google Sheets'],
        link: 'https://github.com/bmbng09/Smart-Attendance-System-dengan-RFID-IoT',
        image: 'iott.png',
    },
    {
        name: 'NongkiYuk!',
        group: 'web',
        category: 'Application Design',
        year: '2024',
        desc: 'Prototipe aplikasi user-centered design buat cari tempat nongkrong hits di Jakarta Selatan, lengkap prediksi tingkat keramaian.',
        tags: ['UI/UX Design', 'User-Centered Design', 'Prototype'],
        link: 'https://github.com/bmbng09/nongki_yuk',
        image: 'mobilee.jpg',
    },
    {
        name: 'Website SMP YUPPENTEK 1 Legok',
        group: 'web',
        category: 'Web Development',
        year: '2025',
        desc: 'Website informasi sekolah resmi (profil, berita, prestasi siswa, dan dokumentasi kegiatan) dalam tampilan modern & responsif.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://smpyuppentek-1-legok.vercel.app/',
        image: 'web.png',
    },
    {
        name: 'Sistem Presensi Siswa SMP YUPPENTEK 1 Legok',
        group: 'web',
        category: 'Web Development',
        year: '2025',
        desc: 'Sistem presensi siswa berbasis web terintegrasi Google Apps Script dan Spreadsheet, simpel dan mudah dipakai staf sekolah.',
        tags: ['Google Apps Script', 'Google Spreadsheet', 'JavaScript'],
        link: 'https://script.google.com/macros/s/AKfycbz2hShK_kX980c4okDL4Ab2y3tskHrl91y_uE1ez-iOHZY_DKnRByJn_ruo007lWKtE/exec',
        image: 'app.png',
    },
    {
        name: 'Analisis Aksen Bicara dengan MFCC',
        group: 'data',
        category: 'Data & ML',
        year: '2023',
        desc: 'Riset karakteristik akustik logat mahasiswa dari 5 wilayah Indonesia pakai ekstraksi fitur MFCC dari 100 rekaman suara.',
        tags: ['Python', 'Librosa', 'MFCC', 'Data Visualization'],
        link: 'https://github.com/bmbng09/SpeechAccent-MFCC',
        image: 'psd.png',
    },
    {
        name: 'Prediksi Harga Saham Energi Terbarukan',
        group: 'data',
        category: 'Data & ML',
        year: '2025',
        desc: 'Forecasting harga saham PGEO, BREN, dan KEEN 30 hari ke depan pakai perbandingan model LSTM, GRU, dan Hybrid LSTM-GRU.',
        tags: ['LSTM', 'GRU', 'Time Series', 'RMSE/MAE/MAPE'],
        link: '',
        image: 'visdat.png',
    },
    {
        name: 'Dashboard Monitoring Sampah Regional',
        group: 'data',
        category: 'Data & ML',
        year: '2024',
        desc: 'Dashboard interaktif buat memantau tren timbulan dan daur ulang sampah antar wilayah, dengan filter tahun dan region.',
        tags: ['Data Visualization', 'Dashboard', 'Interactive Charts'],
        link: 'https://github.com/bmbng09/DashboardMonitoringSampah',
        image: 'ml (2).png',
    },
    {
        name: 'Analisis Komparatif Teknik Prompting Pada Large Language Models Untuk Studi Literatur Ilmiah',
        group: 'data',
        category: 'Research',
        year: '2025',
        desc: '',
        tags: [],
        link: '',
        image: '',
    },
    {
        name: 'Media Sekolah SMP YUPPENTEK 1 Legok',
        group: 'design',
        category: 'Desain Grafis',
        year: '2025',
        desc: '',
        tags: [],
        link: '',
        image: '',
    },
];