"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Code2, Cpu, BrainCircuit } from "lucide-react";
import Image from "next/image";

// 1. DATA PROJECTS
const projects = [
  {
    title: "IoT Vending Machine",
    description: "Rancang bangun sistem mesin penjual otomatis berbasis mikrokontroler dengan integrasi sistem pembayaran digital dan monitoring stok secara real-time.",
    tech: ["C++", "Arduino", "ESP32", "Sensors"],
    image: "/vanding-machine.jpeg",
    icon: <Cpu size={20} className="text-blue-400" />
  },
  {
    title: "Web Service Bank Mini",
    description: "Transformasi digital sistem layanan nasabah dengan mengonversi buku panduan konvensional menjadi aplikasi mobile yang interaktif, mempercepat akses informasi, dan meningkatkan efisiensi pengalaman pengguna secara real-time.",
    tech: ["Laravel", "JWT", "JSON", "MySQL", "REST API", "postman", "Android Studio"],
    image: "/dashboard.jpeg",
    icon: <Code2 size={20} className="text-purple-400" />
  },
  {
    title: "Sistem Klasifikasi Cerdas Daun Durian",
    description: "Mengembangkan aplikasi berbasis Python untuk identifikasi varietas daun durian menggunakan ekstraksi fitur GLCM (tekstur), Canny (tepi), dan Color Moments dengan klasifikasi Support Vector Machine (SVM).",
    tech: ["Python", "OpenCV", "Scikit-Learn", "SVM", "Matplotlib", "Tkinter"],
    image: "/daun-duiran.jpeg",
    icon: <BrainCircuit size={20} className="text-green-400" />
  },
];

const skills: string[] = [
  "React", "Laravel", "Tailwind CSS", "Node.js", "Mysql", "Figma", "Git", "Arduino", "C++", "Python", "PHP", "Microsoft Office"
];

const experiences = [
  {
    company: "Asisten Lab ICT Universitas Budi Luhur",
    role: "Asisten Laboratorium",
    period: "Jan 2023 - Jan 2027",
    description: "Mengelola operasional laboratorium, membantu praktikum mahasiswa, dan maintenance perangkat keras.",
  },
  {
    company: "Tax Center Universitas Budi Luhur",
    role: "Logo Designer",
    period: "April 2024",
    description: "Pembuatan logo organisasi menggunakan Figma untuk keperluan branding dan identitas visual.",
  },
  {
    company: "PT. Inti Prima Jakarta",
    role: "Prakerin (QMR-HRD-QC)",
    period: "Jan 2022 – Feb 2022",
    description: "Melaksanakan input data, mengelola formulir pembelian/penjualan, penggajian, dan laporan keuangan.",
  },
  {
    company: "Universitas Budi Luhur",
    role: "Data Entry (PMB)",
    period: "Agustus 2024",
    description: "Melakukan input data calon mahasiswa baru ke database secara akurat dan efisien.",
  },
  {
    company: "Independent Project",
    role: "Arduino Developer",
    period: "Juli 2025",
    description: "Membangun vending machine berbasis RFID untuk akses eksklusif anggota organisasi.",
  },
  {
    company: "BCA",
    role: "Intern – Divisi Corporate Strategy and Planning | Bank Central Asia (BCA)",
    period: "Juli 2025",
    description: "Berperan aktif dalam proses Quality Assurance (QA) untuk pengembangan aplikasi internal, guna memastikan fungsionalitas dan kualitas sistem berjalan optimal, Membantu tim dalam melakukan penyusunan dan analisis budgeting perusahaan.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HERO --- */}
        <section className="text-center mb-40">
          <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto mb-10">
            <Image src="/foto-aku.jpeg" alt="Rayvano" fill className="rounded-full object-cover border-2 border-white/10" priority />
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent leading-tight">
            Rayvano Putra Pratama
          </h1>
          <div className="flex gap-6 justify-center text-zinc-500 mb-10">
            <a href="https://github.com/RayvanoPutra" target="_blank" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/rayvano-pratama-123740281/" target="_blank" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="https://instagram.com/revanz__zz" target="_blank" className="hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="mailto:rayvanoputrapratama3@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section className="mb-40">
          <h3 className="text-3xl font-bold mb-12 border-l-4 border-blue-500 pl-4 uppercase tracking-tight">Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group bg-zinc-900/30 border border-white/5 p-6 rounded-3xl hover:bg-zinc-900/50 transition-all duration-300">
                <div className="h-40 relative mb-6 rounded-2xl overflow-hidden bg-zinc-800">
                  <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] font-mono border border-zinc-800 px-2 py-0.5 rounded uppercase text-zinc-500">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- TECHNICAL SKILLS --- */}
        <section className="mb-40">
          <h3 className="text-3xl font-bold mb-10 border-l-4 border-blue-500 pl-4 uppercase tracking-tight">Kemampuan</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill: string, i: number) => (
              <span key={i} className="px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-sm font-medium hover:border-blue-500/50 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* --- WORK JOURNEY --- */}
        <section className="mb-40">
          <h3 className="text-3xl font-bold mb-10 border-l-4 border-purple-500 pl-4 uppercase tracking-tight">Pengalaman</h3>
          
          <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar touch-pan-x snap-x">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="min-w-[300px] md:min-w-[400px] snap-start bg-zinc-900/20 border border-white/5 p-8 rounded-[2rem] relative group"
              >
                <div className="text-blue-400 font-mono text-xs mb-4 uppercase tracking-widest">{exp.period}</div>
                <h4 className="text-xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors uppercase italic leading-none">{exp.role}</h4>
                <p className="text-blue-400/60 text-sm italic mb-4 font-medium">{exp.company}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{exp.description}</p>
                
                <div className="absolute top-8 right-8 w-8 h-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <BrainCircuit className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mt-4 flex items-center gap-2">
            <span>Scroll horizontally</span>
            <div className="h-[1px] w-12 bg-zinc-800"></div>
          </div>
        </section>

      </main>

      <footer className="py-16 border-t border-zinc-900 text-center text-zinc-600 text-[10px] tracking-[0.5em] uppercase font-bold">
        © 2024 by Rayvano Putra Pratama
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}