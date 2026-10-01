import React, { useState } from 'react';
import { PROFILE, PROJECTS, PROJECT_GROUPS, ProjectGroupKey, asset } from '../../../constants/profile';
import ResumeDownload from '../ResumeDownload';

export interface ProjectCategoryProps {
    group: ProjectGroupKey;
}

const linkLabel = (url: string) => {
    if (url.includes('github.com')) return 'Buka di GitHub';
    if (url.includes('script.google.com')) return 'Buka Aplikasi';
    return 'Buka Website';
};

// Gambar disembunyikan otomatis kalau filenya belum ada
const Shot: React.FC<{ file: string }> = ({ file }) => {
    const [failed, setFailed] = useState(false);
    if (!file || failed) return null;
    return (
        <div className="mini-shot">
            <img src={asset(file)} alt="" onError={() => setFailed(true)} />
        </div>
    );
};

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ group }) => {
    const info = PROJECT_GROUPS.find((g) => g.key === group)!;
    const items = PROJECTS.filter((p) => p.group === group);

    return (
        <div className="site-page-content">
            <div className="page-heading">
                <h1>{info.heading}</h1>
                <p className="page-sub">{info.intro}</p>
                <div className="rule" />
            </div>
            <ResumeDownload />
            <div style={{ height: 24 }} />

            {items.map((p) => (
                <div className="mini-window" key={p.name}>
                    <div className="mini-title">
                        <p>{p.name}</p>
                        <p className="mini-year">{p.year}</p>
                    </div>
                    <div className="mini-body">
                        <Shot file={p.image} />
                        <div className="chip-row">
                            <span className="chip chip-navy">{p.category}</span>
                            {p.tags.map((t) => (
                                <span className="chip" key={t}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        {p.desc && <p className="mini-desc">{p.desc}</p>}
                        {p.link && (
                            <a
                                className="site-button link-btn"
                                rel="noreferrer"
                                target="_blank"
                                href={p.link}
                                title={p.link}
                            >
                                {linkLabel(p.link)}
                            </a>
                        )}
                    </div>
                </div>
            ))}

            <p>
                <sub>Ada pertanyaan soal proyek di atas? Hubungi lewat halaman kontak. {PROFILE.contactNote}</sub>
            </p>
        </div>
    );
};

export default ProjectCategory;