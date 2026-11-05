import { describe, it, expect } from 'vitest';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';

describe('PortfolioV2 Data Integrity Tests', () => {
  it('should contain correct profile information', () => {
    expect(profileData.name).toBe('Sean Sta Ana');
    expect(profileData.title).toBe('Aspiring Software Engineer');
    expect(profileData.email).toBeDefined();
  });

  it('should have featured projects defined', () => {
    expect(projectsData.length).toBeGreaterThan(0);
    const featured = projectsData.filter(p => p.featured);
    expect(featured.length).toBeGreaterThan(0);
  });

  it('should have skill categories defined', () => {
    expect(skillsData.length).toBe(6);
    skillsData.forEach(cat => {
      expect(cat.title).toBeDefined();
      expect(cat.skills.length).toBeGreaterThan(0);
    });
  });
});
