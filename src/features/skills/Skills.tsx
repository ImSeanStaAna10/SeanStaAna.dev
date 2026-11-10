import React from 'react';
import {
  BrainCircuit,
  CloudCog,
  CodeXml,
  Database,
  FlaskConical,
  PanelsTopLeft,
  ServerCog,
  SquareTerminal,
  Star,
} from 'lucide-react';
import { skillsData, type SkillItem } from '../../data/skills';

const icons = [CodeXml, ServerCog, PanelsTopLeft, Database, CloudCog, FlaskConical, BrainCircuit, SquareTerminal];
const experienceStars: Record<SkillItem['proficiency'], number> = {
  Familiar: 1,
  Intermediate: 2,
  Proficient: 3,
};

function StarRating({ level }: { level: SkillItem['proficiency'] }) {
  const count = experienceStars[level];

  return (
    <span className="skill-rating" role="img" aria-label={level + ', ' + count + ' of 3 stars'}>
      {[1, 2, 3].map(star => (
        <Star
          key={star}
          size={18}
          strokeWidth={1.8}
          className={star <= count ? 'rating-star-filled' : 'rating-star-empty'}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export const Skills: React.FC = () => (
  <section id="skills" className="section site-container" aria-labelledby="skills-heading">
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span>03</span> THE TOOLKIT</p>
        <h2 id="skills-heading">The right tools.<br /><span>A thoughtful approach.</span></h2>
      </div>
      <p>
        From the first API endpoint to the final interface. A toolkit built through
        coursework, personal projects, and hands-on learning.
      </p>
    </div>

    <div className="skills-legend" role="group" aria-label="Star rating guide">
      <p>Hands-on experience, at a glance.</p>
      <ul>
        {(['Familiar', 'Intermediate', 'Proficient'] as const).map(level => (
          <li key={level}>
            <StarRating level={level} />
            <span>{level}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="skills-grid">
      {skillsData.map((category, index) => {
        const Icon = icons[index] || CodeXml;
        const headingId = 'skill-category-' + index;

        return (
          <article key={category.title} className="skill-group" aria-labelledby={headingId}>
            <div className="skill-group-top">
              <span className="skill-group-icon"><Icon size={28} strokeWidth={1.8} aria-hidden="true" /></span>
              <span className="skill-group-number">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 id={headingId}>{category.title}</h3>
            <p className="muted">{category.description}</p>
            <ul className="skill-list" aria-label={category.title + ' skills'}>
              {category.skills.map(skill => (
                <li key={skill.name}>
                  <span className="skill-name">{skill.name}</span>
                  <StarRating level={skill.proficiency} />
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  </section>
);