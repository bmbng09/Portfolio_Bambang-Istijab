import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import { PROFILE, asset } from '../../constants/profile';

export interface AboutProps {}

// Foto disembunyikan otomatis kalau filenya belum ada
const Photo: React.FC = () => {
    const [failed, setFailed] = useState(false);
    if (failed) return null;
    return (
        <div className="about-photo">
            <img src={asset(PROFILE.photo)} alt="" onError={() => setFailed(true)} />
        </div>
    );
};

const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            <div className="page-heading">
                <h1>Tentang Saya</h1>
                <p className="page-sub">
                    {PROFILE.title} / {PROFILE.location}
                </p>
                <div className="rule" />
            </div>

            <div className="about-top">
                <Photo />
                <div className="about-text">
                    <h3>Halo, saya {PROFILE.nickname}</h3>
                    <p style={{ marginTop: 10 }}>{PROFILE.intro}</p>
                    <div className="chip-row" style={{ marginTop: 14 }}>
                        <span className="chip chip-navy">{PROFILE.status}</span>
                    </div>
                    <p style={{ marginTop: 6 }}>
                        Punya pertanyaan atau ide proyek? Hubungi saya lewat{' '}
                        <Link to="/contact">formulir kontak</Link>
                        {PROFILE.email && (
                            <>
                                {' '}atau kirim email ke{' '}
                                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                            </>
                        )}
                        .
                    </p>
                </div>
            </div>

            <ResumeDownload />

            <div className="section-title">
                <h2>Cara Saya Bekerja</h2>
            </div>
            <div className="field">
                {PROFILE.highlights.map((h) => (
                    <div className="hl" key={h}>
                        <div className="hl-mark" />
                        <p>{h}</p>
                    </div>
                ))}
            </div>

            <div className="section-title">
                <h2>Dalam Angka</h2>
            </div>
            <div className="stat-grid">
                {PROFILE.stats.map((s) => (
                    <div className="raised stat" key={s.label}>
                        <p className="stat-num">{s.value}</p>
                        <p className="stat-label">{s.label}</p>
                    </div>
                ))}
            </div>

            <div className="section-title">
                <h2>Skill & Tools</h2>
            </div>
            <p style={{ marginBottom: 16 }}>{PROFILE.skillsIntro}</p>
            <div className="field">
                {PROFILE.skills.map((s) => (
                    <div className="skill" key={s.name}>
                        <p className="skill-name">{s.name}</p>
                        <div className="skill-track">
                            <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                        </div>
                        <p className="skill-pct">
                            <b>{s.pct}%</b>
                        </p>
                    </div>
                ))}
            </div>
            <div className="chip-row" style={{ marginTop: 14 }}>
                {PROFILE.tools.map((t) => (
                    <span className="chip" key={t}>
                        {t}
                    </span>
                ))}
            </div>

            <div className="section-title">
                <h2>Layanan</h2>
            </div>
            <div className="service-grid">
                {PROFILE.services.map((s) => (
                    <div className="raised service" key={s.title}>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>

            <p style={{ marginTop: 28 }}>
                Mau lihat hasil kerjanya? Buka halaman <Link to="/projects">Proyek</Link> atau{' '}
                <Link to="/experience">Pengalaman</Link>.
            </p>
        </div>
    );
};

export default About;