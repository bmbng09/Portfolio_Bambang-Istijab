import React from 'react';
import ResumeDownload from './ResumeDownload';
import { EDUCATION, EXPERIENCE } from '../../constants/profile';

export interface ExperienceProps {}

interface EntryProps {
    title: string;
    sub: string;
    period: string;
    kind?: string;
    desc?: string;
}

const Entry: React.FC<EntryProps> = ({ title, sub, period, kind, desc }) => {
    const active = /sekarang/i.test(period);
    return (
        <div className="tl-item">
            <div className="tl-node" />
            <div className="tl-card">
                <p className="tl-period">
                    <b>{period}</b>
                </p>
                <h3 className="tl-title">{title}</h3>
                <p className="tl-sub">{sub}</p>
                {(kind || active) && (
                    <div className="chip-row" style={{ marginTop: 10 }}>
                        {kind && <span className="chip">{kind}</span>}
                        {active && <span className="chip chip-navy">AKTIF</span>}
                    </div>
                )}
                {desc && <p className="tl-desc">{desc}</p>}
            </div>
        </div>
    );
};

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div className="page-heading">
                <h1>Pengalaman</h1>
                <div className="rule" />
            </div>

            <div className="section-title">
                <h2>Organisasi</h2>
            </div>
            <div className="timeline">
                {EXPERIENCE.map((e) => (
                    <Entry
                        key={`${e.org}-${e.role}`}
                        title={e.role}
                        sub={e.org}
                        period={e.period}
                        kind={e.kind}
                        desc={e.desc}
                    />
                ))}
            </div>

            <div className="section-title">
                <h2>Pendidikan</h2>
            </div>
            <div className="timeline">
                {EDUCATION.map((e) => (
                    <Entry
                        key={`${e.org}-${e.role}`}
                        title={e.org}
                        sub={e.role}
                        period={e.period}
                        desc={e.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experience;