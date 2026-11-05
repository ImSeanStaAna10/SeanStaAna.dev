

title: PortfolioV2 — Software Design Specification  
aliases:

- PortfolioV2 Specifications
    
- PortfolioV2 SDD
    
- Personal Portfolio Specification  
    type: software-specification  
    project: PortfolioV2  
    status: planning  
    version: 1.0  
    created: 2026-11-05  
    last_updated: 2026-11-05  
    tags:
    
- portfolio
    
- software-engineering
    
- sdd
    
- react
    
- typescript
    
- web-development
    

---

# PortfolioV2 — Software Design Specification

> [!abstract] Document Purpose  
> This document defines the product requirements, functional specifications, technical architecture, design standards, and implementation expectations for PortfolioV2.
> 
> It serves as the project's primary source of truth throughout planning, development, testing, and deployment.

---

# 1. Project Overview

## 1.1 Project Name

**PortfolioV2 — Personal Portfolio Website**

## 1.2 Project Description

PortfolioV2 is a modern, responsive, and interactive personal portfolio website designed to present professional identity, technical capabilities, projects, experience, education, certifications, and contact information.

The website will serve as a centralized professional presence that can be shared with recruiters, hiring managers, companies, developers, potential clients, and collaborators.

It should demonstrate not only the owner's technical skills but also their ability to design, develop, organize, and deploy a complete web application.

## 1.3 Project Vision

Build a professional and visually engaging personal portfolio that communicates credibility, technical competence, continuous learning, and personal identity.

The website should balance:

- Professional presentation
    
- Modern UI/UX
    
- Meaningful interactivity
    
- Technical depth
    
- Performance
    
- Accessibility
    
- Maintainability
    

## 1.4 Primary Tagline

**"Learning, building, and continuously improving."**

## 1.5 Professional Identity

- Professional title: Aspiring Software Engineer
    
- Website language: English
    
- Communication tone: Professional and approachable
    
- Content style: Authentic, concise, and recruiter-friendly
    

Actual biography, professional summary, achievements, and career information will be supplied by the owner.

---

# 2. Project Goals and Objectives

## 2.1 Primary Goals

1. Establish a professional online presence.
    
2. Showcase technical skills and technologies.
    
3. Present projects with meaningful technical explanations.
    
4. Demonstrate software development experience and learning progress.
    
5. Make CV access and contact straightforward.
    
6. Demonstrate practical frontend development capabilities.
    
7. Provide an accessible and responsive user experience.
    
8. Create a maintainable application that can evolve over time.
    

## 2.2 Success Criteria

The project will be considered successful when:

- Visitors can understand the owner's professional identity quickly.
    
- Recruiters can easily find the CV, projects, skills, and contact information.
    
- Project case studies provide enough technical context to understand the work.
    
- The website works across mobile, tablet, and desktop.
    
- All important navigation and interactions work correctly.
    
- The contact form can successfully submit messages.
    
- GitHub information is presented with graceful fallback behavior.
    
- The website meets its performance, accessibility, and SEO objectives.
    
- The application can be maintained and extended without unnecessary complexity.
    

---

# 3. Target Audience

The website must support six audience groups.

|Audience|Primary Need|
|---|---|
|Recruiters and HR|Quickly evaluate qualifications and CV|
|Companies and Hiring Managers|Understand technical capabilities and project experience|
|Developers and Tech Community|Explore technologies, repositories, and implementation details|
|Potential Clients|Evaluate capabilities and contact the owner|
|General Visitors|Understand the owner's background and interests|
|Potential Collaborators|Discover shared interests and collaboration opportunities|

## 3.1 Content Prioritization

The website should prioritize information that helps visitors evaluate professional capability.

Recommended content hierarchy:

1. Professional identity
    
2. CV access
    
3. Featured projects
    
4. Technical skills
    
5. Experience and education
    
6. GitHub activity
    
7. Certifications and achievements
    
8. Contact information
    

---

# 4. Scope and Feature Priorities

## 4.1 MVP Scope

The initial release should include:

- Responsive single-page portfolio
    
- Hero section
    
- About Me section
    
- Skills and Technologies
    
- Project showcase
    
- Dedicated project detail routes
    
- GitHub Activity Dashboard
    
- Experience and Education timeline
    
- Certifications and Achievements
    
- CV preview and download
    
- Functional contact form
    
- Light and Dark themes
    
- Responsive navigation
    
- SEO fundamentals
    
- Accessibility requirements
    
- Testing
    
- GitHub Actions CI/CD
    
- Vercel deployment
    

## 4.2 Future Enhancements

The following features are not required for the initial release:

- Advanced portfolio analytics
    
- Visitor tracking and identification
    
- Admin dashboard or CMS
    
- Database-backed portfolio content
    
- Custom backend for contact submissions
    
- Authentication
    
- AI-powered portfolio features
    
- Advanced personalization
    
- Complex 3D animations
    
- Blog or article management system
    

These features should only be considered when they provide clear value.

> [!important] Scope Control  
> Avoid adding features simply because they are technically possible. Prioritize the core portfolio experience and maintainability.

---

# 5. Information Architecture

## 5.1 Main Website Structure

The application will use a single-page scrolling portfolio with dedicated project detail routes.

### Main Portfolio Sections

1. Home / Hero
    
2. About Me
    
3. Skills & Technologies
    
4. Projects / Portfolio
    
5. GitHub Activity Dashboard
    
6. Experience & Education
    
7. Certifications & Achievements
    
8. CV Preview & Download
    
9. Contact
    
10. Footer
    

### Application Routes

|Route|Description|
|---|---|
|`/`|Main portfolio|
|`/projects/:slug`|Individual project case study|

Example project routes:

- `/projects/careervault`
    
- `/projects/issue-tracker`
    

The examples represent possible project slugs, not a requirement to include a project unless its information is ready.

## 5.2 Navigation Behavior

- Sticky navigation bar.
    
- Smooth scrolling to portfolio sections.
    
- Active section indicator.
    
- Mobile slide-out navigation drawer.
    
- Theme switcher.
    
- CV action.
    
- Dedicated project routes.
    
- Browser back and forward support.
    
- Keyboard-accessible navigation.
    
- Respect reduced-motion preferences.
    

---

# 6. Functional Specifications

# 6.1 Home / Hero Section

## Purpose

Introduce the owner immediately and communicate professional identity.

## Layout

- Split layout on desktop.
    
- Introduction on the left.
    
- Professional profile photo on the right.
    
- Responsive stacked layout on mobile.
    
- Full viewport-height presentation where screen size permits.
    

Use modern viewport sizing such as `100svh` where appropriate. The section must be allowed to grow naturally on small screens instead of clipping content.

## Required Content

1. Greeting / Introduction
    
2. Full name
    
3. Professional title
    
4. Primary tagline
    
5. Short professional summary
    
6. Primary and secondary CTA buttons
    
7. Social and professional links
    
8. Availability status badge
    

## Visual Requirements

- Professional profile photo.
    
- Rounded rectangle image shape.
    
- Natural proportions.
    
- `object-fit: cover`.
    
- Subtle emerald gradient over a neutral background.
    
- Consistent Light and Dark theme variants.
    

## CTA Buttons

|Button|Priority|Action|
|---|---|---|
|Download / View My CV|Primary|Open or download CV|
|Contact Me|Secondary|Navigate to Contact|
|Explore My Projects|Secondary|Navigate to Projects|

Primary CTA uses a filled style.

Secondary CTAs use outlined styles.

All buttons must include hover, focus, active, and disabled states where appropriate.

## Availability Badge

The Hero section must display the current availability status.

Supported examples:

- Open to Work
    
- Open to Internship
    
- Not Currently Available
    

The value must be manually controlled through a static data file.

No administrative dashboard is required.

---

# 6.2 About Me Section

## Purpose

Communicate the owner's background, journey, motivations, and professional values.

## Layout

Two-column desktop layout:

- Left: Personal introduction and narrative.
    
- Right: Personal Highlights cards.
    

The layout stacks on mobile.

A full-width personal journey timeline appears below the two-column content.

## Required Topics

1. Personal and educational background
    
2. Software development journey
    
3. Technical interests and specialization
    
4. Career goals and aspirations
    
5. Personal values and work philosophy
    

Actual biography wording will be provided separately.

## Personal Highlights

Four static cards:

|Card|Content|
|---|---|
|Technical Interests|Technologies and areas of development that interest the owner|
|Career Goals|Professional direction and aspirations|
|Core Values|Principles followed during learning and development|
|Personal Motto|A short personal statement|

Requirements:

- 2×2 desktop grid.
    
- Responsive layout on smaller screens.
    
- Consistent icons and card styling.
    
- Concise descriptions.
    
- Emerald accents.
    
- Subtle hover effects.
    
- No clickable, flip, or expandable card behavior.
    

## Personal Journey Timeline

The timeline appears below the About Me two-column layout.

### Milestones

1. Education / Academic Background
    
2. Started Learning Programming
    
3. First Programming Project
    
4. Started Learning Web Development
    
5. First Full-Stack Project
    
6. Professional / Internship Experience
    
7. Current Learning & Development
    

### Layout

- Horizontal timeline on desktop.
    
- Vertical timeline on mobile.
    
- Chronological order.
    
- Clear milestone titles and dates.
    
- Short descriptions.
    
- Timeline markers and optional icons.
    
- Support ongoing milestones.
    

Dates and achievements must never be invented.

---

# 6.3 Skills & Technologies Section

## Purpose

Showcase the owner's technical capabilities and familiarity with relevant technologies.

## Layout

Category-based card grid.

Six category cards:

1. Frontend Development
    
2. Backend Development
    
3. Database & Data Management
    
4. Tools & Development Technologies
    
5. DevOps & Cloud
    
6. Other Technical Skills
    

## Card Content

Each category card contains:

- Category title
    
- Short description
    
- Technology icons
    
- Technology names
    
- Proficiency badges
    

## Recommended Desktop Arrangement

- Desktop: 3 columns × 2 rows.
    
- Tablet: 2 columns.
    
- Mobile: 1 column.
    

## Technology Icons

Use official brand icons where available.

Requirements:

- Preserve recognizable brand appearances.
    
- Consistent icon sizing and alignment.
    
- Display technology names alongside icons.
    
- Ensure visibility in both themes.
    
- Use reliable icon sources.
    

## Proficiency Labels

Use small badges beside each technology.

Supported levels:

- Familiar
    
- Intermediate
    
- Proficient
    

Do not use percentage-based proficiency bars.

The owner must assign honest proficiency labels.

## Interaction

Cards are static.

Use subtle hover effects only. All important information must be immediately visible.

## Data Source

Centralized `skills.ts` file.

---

# 6.4 Projects / Portfolio Section

## Purpose

Demonstrate practical software development experience through completed or actively developed projects.

## Organization

- Featured projects appear first.
    
- All other projects appear afterward.
    
- Three featured projects.
    
- Interactive technology and category filters.
    

## Project Cards

Each card should include:

- Project title
    
- Short description
    
- Preview image or screenshot
    
- Main technologies
    
- Category
    
- Project status, where useful
    
- Links to GitHub repository
    
- Live demonstration link, when available
    
- View Details action
    

## Project Details

Each project must support a dedicated route.

A project case study should support:

1. Project overview
    
2. Problem or motivation
    
3. Goals and objectives
    
4. Key features
    
5. Technologies and tools
    
6. Architecture and technical design
    
7. System diagrams, where useful
    
8. Screenshots
    
9. Challenges encountered
    
10. Solutions implemented
    
11. Important technical decisions
    
12. Individual contributions and responsibilities
    
13. GitHub repository link
    
14. Live demonstration link
    
15. Future improvements
    

Optional fields should not create empty or misleading sections.

## Filtering

Visitors can filter projects by:

- Technology
    
- Category
    

Requirements:

- Clear active filter state.
    
- Useful empty state.
    
- Responsive filter controls.
    
- Keyboard accessibility.
    
- Ability to reset filters.
    

## Project Navigation

- Each project has a unique slug.
    
- Direct URL access must work.
    
- Browser refresh must work.
    
- Browser back and forward must work.
    
- Project pages must have appropriate SEO metadata.
    
- Visitors must have a clear way to return to the main portfolio.
    

---

# 6.5 GitHub Activity Dashboard

## Purpose

Present the owner's public GitHub activity and repositories.

## Layout

Developer Dashboard-style presentation.

The section must remain visible even when GitHub API data cannot be retrieved.

## Statistics

Display:

1. Public repositories
    
2. Followers
    
3. Total stars received
    
4. Contribution activity
    
5. Most-used programming languages
    

## Contribution Graph

Use a GitHub-style contribution heatmap.

Requirements:

- Calendar grid.
    
- Contribution intensity levels.
    
- Tooltips.
    
- Accessible labels.
    
- Responsive behavior.
    
- Light and Dark theme support.
    
- Appropriate empty state.
    

## Featured Repositories

Display four manually selected repositories.

Each repository card should support:

- Repository name
    
- Description
    
- Primary programming language
    
- Star count
    
- Repository link
    

The owner manually selects and orders featured repositories through a static data file.

Do not automatically replace repositories based on stars or creation date.

## Integration

Use the GitHub REST API.

Requirements:

- Fetch public profile and repository information.
    
- Handle API rate limits.
    
- Cache responses.
    
- Refresh data every 24 hours.
    
- Use cached information when possible.
    
- Fall back to the last successful cached data.
    
- Show loading and error states.
    
- Keep the layout stable when some metrics are unavailable.
    

## Contribution Data Consideration

The standard GitHub REST API does not directly provide every contribution-calendar detail required for a complete heatmap.

Evaluate an appropriate supported data source or visualization strategy before implementation.

Do not expose private GitHub tokens in frontend code.

---

# 6.6 Experience & Education Section

## Purpose

Present educational background and professional experience chronologically.

## Layout

Combined vertical timeline.

## Entry Information

Each entry should support:

- Entry title
    
- Institution or organization
    
- Entry type: Education or Experience
    
- Start date
    
- End date
    
- Ongoing status
    
- Short description
    
- Responsibilities
    
- Achievements
    
- Relevant technologies or skills
    

## Requirements

- Clear distinction between education and experience.
    
- Chronological ordering.
    
- Support ongoing entries without an end date.
    
- Responsive layout.
    
- No invented employment history or achievements.
    

---

# 6.7 Certifications & Achievements Section

## Purpose

Provide evidence of learning, professional development, and recognized accomplishments.

## Layout

Responsive card-based grid.

## Credential Information

Each card should support:

- Certification or achievement title
    
- Issuer
    
- Date issued
    
- Credential ID, when available
    
- Verification URL
    
- Certificate image or preview
    

## Requirements

- Centralized `certifications.ts`.
    
- Reusable credential card component.
    
- Clickable verification links.
    
- Graceful handling of missing optional information.
    
- Responsive layout.
    
- Accessible image descriptions.
    

Only genuine credentials and achievements may be published.

---

# 6.8 CV Preview & Download

## Purpose

Allow recruiters and visitors to access the owner's professional CV.

## Behavior

Two supported actions:

**Preview**

- Open the CV PDF in a new browser tab.
    

**Download**

- Download the PDF directly.
    

## Requirements

- Store the CV as a static PDF asset.
    
- Use a clear filename.
    
- Make the document easy to replace.
    
- Ensure mobile and desktop accessibility.
    
- Provide clear action labels.
    

The actual CV content and PDF will be supplied by the owner.

---

# 6.9 Contact Section

## Purpose

Provide a straightforward way for visitors to send professional inquiries.

## Contact Form Fields

|Field|Requirement|
|---|---|
|Full Name|Required|
|Email|Required, valid email format|
|Subject|Required|
|Message|Required|

## Integration

Use Web3Forms for form submission and email notifications.

No custom backend is required initially.

## Submission Behavior

The form must support:

- Client-side validation.
    
- Loading state.
    
- Duplicate-submission prevention.
    
- Inline success confirmation.
    
- Inline error feedback.
    
- Field clearing after successful submission.
    
- Ability to send another message after success.
    
- Email notification to the designated professional email.
    

## Spam Protection

Use:

- Web3Forms built-in protection.
    
- Honeypot field.
    

No CAPTCHA is required initially.

## Security

- Configure the Web3Forms access key appropriately.
    
- Do not expose private credentials.
    
- Validate inputs.
    
- Handle errors safely.
    
- Never display sensitive provider responses to visitors.
    

---

# 6.10 Footer

## Recommended Content

- Owner's name or personal brand.
    
- Professional title.
    
- Social links.
    
- GitHub link.
    
- LinkedIn link.
    
- Email link.
    
- Copyright notice.
    
- Back-to-top action.
    

## Requirements

- Consistent with the overall design.
    
- Responsive layout.
    
- Accessible links.
    
- Appropriate hover and focus states.
    
- No unnecessary decorative elements.
    

---

# 7. Visual Design System

## 7.1 Design Direction

**Minimalist & Professional**

The website should feel:

- Modern
    
- Clean
    
- Trustworthy
    
- Approachable
    
- Technically polished
    
- Visually consistent
    

Avoid excessive gradients, glow effects, visual clutter, and unnecessary animations.

## 7.2 Color Palette

Primary direction: Neutral colors with Emerald Green accents.

Reference colors:

|Purpose|Color|
|---|---|
|Neutral background|`#F8F9FA`|
|Light emerald|`#A7F3D0`|
|Emerald accent|`#34D399`|
|Primary emerald|`#059669`|
|Dark emerald|`#064E3B`|

These are reference values. Final semantic color tokens must be validated for contrast in both themes.

Define reusable design tokens rather than scattering hardcoded colors throughout components.

## 7.3 Theme Modes

Support:

- Light Mode
    
- Dark Mode
    
- System Preference
    

Initial theme behavior:

1. Detect system preference on first visit.
    
2. Apply saved manual preference when available.
    
3. Allow manual switching.
    
4. Persist manual preference using `localStorage`.
    
5. Apply the saved theme early to avoid a flash of the wrong theme.
    
6. Maintain consistency across routes.
    

## 7.4 Typography

Use a modern sans-serif typography system.

Recommended combination:

- Plus Jakarta Sans — Headings
    
- Inter — Body text and UI
    

Use consistent typography tokens:

- Display
    
- Heading 1–6
    
- Body
    
- Small text
    
- Labels
    
- Buttons
    

Optimize font loading and avoid unnecessary font weights.

## 7.5 Components and Visual Consistency

Create reusable design patterns for:

- Buttons
    
- Cards
    
- Badges
    
- Inputs
    
- Navigation
    
- Section headings
    
- Timeline entries
    
- Modal or preview elements, if needed
    
- Loading indicators
    
- Error and empty states
    

All shared components must support both themes.

---

# 8. Interaction and Animation

## 8.1 Animation Strategy

Use a hybrid approach:

- CSS and Tailwind for simple transitions and micro-interactions.
    
- Motion for React for more complex animation sequences where justified.
    

## 8.2 Animation Intensity

Balanced.

Animations should improve clarity and perceived quality rather than distract from content.

## 8.3 Supported Interactions

- Smooth scrolling
    
- Scroll reveal
    
- Hover effects
    
- Micro-interactions
    
- Project filters
    
- Active navigation indicator
    
- Theme switching
    
- Mobile navigation drawer
    
- Loading animations
    
- Page transitions where useful
    

## 8.4 Accessibility

Respect `prefers-reduced-motion`.

Avoid animations that cause:

- Unnecessary movement
    
- Poor readability
    
- Navigation confusion
    
- Performance problems
    

---

# 9. Responsive Design

## 9.1 Supported Devices

- Mobile
    
- Tablet
    
- Laptop
    
- Desktop
    

## 9.2 Strategy

Use a mobile-first approach.

## 9.3 Responsive Requirements

- Flexible layouts.
    
- Responsive typography.
    
- Proper image sizing.
    
- Mobile navigation drawer.
    
- Adaptive grids.
    
- Readable spacing.
    
- Touch-friendly interactive elements.
    
- No horizontal overflow.
    
- Responsive timelines.
    
- Accessible forms.
    

Recommended grid behavior:

|Component|Desktop|Tablet|Mobile|
|---|---|---|---|
|Skills grid|3 columns|2 columns|1 column|
|About highlights|2 columns|2 columns|1 column|
|Projects grid|3 columns|2 columns|1 column|
|Certification cards|3 columns|2 columns|1 column|

Final breakpoints should follow the actual content rather than relying exclusively on device categories.

---

# 10. Accessibility Requirements

Accessibility must be considered throughout implementation.

Required standards:

- Semantic HTML.
    
- Logical heading hierarchy.
    
- Keyboard navigation.
    
- Visible focus indicators.
    
- Accessible form labels.
    
- Appropriate ARIA attributes where necessary.
    
- Readable color contrast.
    
- Descriptive alt text for meaningful images.
    
- Accessible icons.
    
- Reduced-motion support.
    
- Appropriate link and button semantics.
    
- Screen-reader-friendly status messages.
    

Target: WCAG 2.2 AA as a practical accessibility objective.

---

# 11. Technical Stack

## 11.1 Core Technologies

|Technology|Purpose|
|---|---|
|React|UI development|
|TypeScript|Type safety|
|Vite|Development and build tooling|
|Tailwind CSS|Styling|
|React Router|Application routing|
|Motion for React|Advanced animations|
|Git|Version control|
|GitHub|Repository hosting|
|Vercel|Deployment|

## 11.2 Supporting Tools

|Tool|Purpose|
|---|---|
|Vitest|Unit testing|
|React Testing Library|Component testing|
|Playwright|End-to-end testing|
|Lighthouse|Performance and accessibility audits|
|GitHub Actions|CI/CD|

Use dependencies only when they provide clear value.

Verify current compatibility and official installation instructions before adding packages.

---

# 12. Application Architecture

## 12.1 Architecture Style

Use a hybrid architecture combining:

- Shared reusable components.
    
- Feature-based organization.
    
- Centralized static data.
    
- Clear separation of concerns.
    

Avoid unnecessary abstraction.

## 12.2 Coding Principles

Apply:

1. SOLID
    
2. DRY
    
3. KISS
    
4. Separation of Concerns
    
5. Clean Code
    
6. Readability
    
7. Composition over unnecessary inheritance
    

Apply these principles pragmatically.

## 12.3 Recommended Folder Structure

```
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── navigation/
│   └── ui/
│
├── features/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── github/
│   ├── experience/
│   ├── certifications/
│   ├── cv/
│   └── contact/
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── certifications.ts
│   └── availability.ts
│
├── hooks/
├── lib/
├── routes/
├── styles/
├── types/
├── utils/
│
├── App.tsx
└── main.tsx
```

This is a recommended target structure. Adjust it to the actual project as it develops.

## 12.4 Component Responsibilities

- `components/common`: Shared components used across multiple features.
    
- `components/layout`: Global page layout.
    
- `components/navigation`: Navbar and navigation behavior.
    
- `components/ui`: Reusable UI primitives.
    
- `features`: Section-specific components and logic.
    
- `data`: Static content.
    
- `hooks`: Reusable React hooks.
    
- `lib`: External integrations and library configuration.
    
- `routes`: Route definitions and route-level components.
    
- `styles`: Global styles and design tokens.
    
- `types`: Shared TypeScript types and interfaces.
    
- `utils`: Small reusable utility functions.
    

## 12.5 Component Design Principles

- Keep components focused on one responsibility.
    
- Prefer composition over unnecessary complexity.
    
- Use props for component configuration.
    
- Define appropriate TypeScript interfaces or types.
    
- Avoid duplicating business or presentation logic.
    
- Keep data separate from presentation.
    
- Avoid oversized components.
    
- Use reusable components when there is genuine reuse.
    

---

# 13. Data Management

## 13.1 Strategy

Use static TypeScript data files for portfolio content.

No database is required for the initial portfolio.

## 13.2 Data Sources

|File|Responsibility|
|---|---|
|`profile.ts`|Name, title, summary, social links|
|`projects.ts`|Project information and case studies|
|`skills.ts`|Skill categories and proficiency|
|`experience.ts`|Professional experience|
|`education.ts`|Educational background|
|`certifications.ts`|Certifications and achievements|
|`availability.ts`|Current availability status|

## 13.3 Data Modeling

Use explicit TypeScript types for structured content.

Requirements:

- Strongly typed data.
    
- Consistent property naming.
    
- Optional properties only when appropriate.
    
- Reusable interfaces where justified.
    
- No duplicated content unnecessarily.
    
- Validate external data before using it.
    

## 13.4 Content Integrity

The application must never invent:

- Employment history
    
- Educational credentials
    
- Certifications
    
- Project accomplishments
    
- Performance metrics
    
- Dates
    
- Professional experience
    

Use clearly marked placeholders until real information is available.

---

# 14. Routing and Navigation Architecture

Use React Router.

## 14.1 Route Requirements

- `/` displays the main portfolio.
    
- `/projects/:slug` displays project details.
    

## 14.2 Navigation Requirements

- Main section navigation uses anchor-based scrolling.
    
- Project details use dedicated routes.
    
- Browser back and forward work correctly.
    
- Direct navigation and refresh work.
    
- Unknown routes display a meaningful not-found page.
    
- Active section indicators work correctly.
    
- Navigation remains keyboard-accessible.
    

## 14.3 Scroll Behavior

Use smooth scrolling where appropriate.

Respect reduced-motion preferences and account for sticky navigation when navigating to section anchors.

---

# 15. External Integrations

## 15.1 GitHub REST API

Purpose:

- Public profile information.
    
- Repository information.
    
- Repository statistics.
    
- Featured repository data.
    

Requirements:

- Handle rate limits.
    
- Cache results.
    
- Refresh every 24 hours.
    
- Provide fallback data.
    
- Avoid exposing private credentials.
    

## 15.2 Web3Forms

Purpose:

- Contact form submissions.
    
- Email notifications.
    

Requirements:

- Secure configuration.
    
- Client-side validation.
    
- Loading and submission states.
    
- Success and error feedback.
    
- Spam protection.
    
- Duplicate-submission prevention.
    

## 15.3 External Links

Supported professional links:

- GitHub
    
- LinkedIn
    
- Email
    

Display links in:

- Hero section
    
- Footer
    

Store links centrally in `profile.ts`.

Use appropriate URL validation and safe external-link behavior.

---

# 16. Security and Privacy

Security requirements:

1. Validate user input.
    
2. Use safe form handling.
    
3. Protect access keys and configuration.
    
4. Never expose private tokens in frontend code.
    
5. Perform dependency and vulnerability checks.
    
6. Use HTTPS in production.
    
7. Apply appropriate security headers.
    
8. Configure Content Security Policy where practical.
    
9. Handle errors without exposing sensitive information.
    
10. Use safe external-link handling.
    
11. Avoid unnecessary tracking scripts.
    

## 16.1 Privacy

No visitor analytics or visitor identification will be implemented initially.

Collect only information necessary for the contact form.

Do not add unnecessary personal-data collection.

---

# 17. SEO Requirements

SEO priority: Advanced.

Required features:

- Page title.
    
- Meta description.
    
- Relevant metadata.
    
- Semantic HTML.
    
- Proper heading hierarchy.
    
- Open Graph metadata.
    
- Social preview images.
    
- XML sitemap.
    
- `robots.txt`.
    
- Schema.org structured data for the personal profile.
    
- Mobile-friendly presentation.
    
- Performance-conscious implementation.
    

## 17.1 Project SEO

Each project detail route should support:

- Unique title.
    
- Unique description.
    
- Relevant metadata.
    
- Appropriate social sharing information.
    

Avoid duplicate or misleading metadata.

---

# 18. Performance Requirements

Performance priority: High.

Requirements:

- Optimize images.
    
- Use lazy loading for appropriate images.
    
- Use code splitting where beneficial.
    
- Lazy-load heavy route components where appropriate.
    
- Avoid unnecessary dependencies.
    
- Optimize font loading.
    
- Reduce unnecessary re-renders.
    
- Cache external API responses.
    
- Avoid oversized assets.
    
- Maintain stable layouts while content loads.
    

## 18.1 Performance Evaluation

Use Lighthouse to evaluate:

- Performance
    
- Accessibility
    
- Best Practices
    
- SEO
    

Recommended target: aim for scores of 90 or higher where practical, without sacrificing accessibility or functionality.

These are goals, not guarantees.

---

# 19. Testing and Quality Assurance

Testing strategy includes:

1. Manual testing
    
2. Unit testing
    
3. Component testing
    
4. End-to-end testing
    
5. Responsive testing
    
6. Cross-browser testing
    
7. Accessibility testing
    
8. Performance testing
    

## 19.1 Testing Tools

|Tool|Responsibility|
|---|---|
|Vitest|Unit tests|
|React Testing Library|Component behavior|
|Playwright|Browser and end-to-end tests|
|Lighthouse|Performance and accessibility audits|

## 19.2 Critical User Flows

The following flows must be tested:

- Navigate through all portfolio sections.
    
- Switch between Light and Dark themes.
    
- Refresh the page and retain the selected theme.
    
- Open and close mobile navigation.
    
- Filter projects.
    
- Open a project detail route directly.
    
- Navigate backward and forward between routes.
    
- Open and download the CV.
    
- Submit a valid contact form.
    
- Reject invalid form inputs.
    
- Display submission success and failure states.
    
- Display GitHub data or fallback content.
    
- Navigate using keyboard controls.
    

## 19.3 Responsive Testing

Test representative screen sizes:

- Small mobile
    
- Large mobile
    
- Tablet
    
- Laptop
    
- Desktop
    

Test common modern browsers.

---

# 20. Git Workflow and CI/CD

## 20.1 Branching Strategy

Use a Gitflow-style workflow.

```
feature/*
    |
    v
develop
    |
    v
main
    |
    v
Production Deployment
```

### Branch Responsibilities

|Branch|Responsibility|
|---|---|
|`feature/*`|Individual feature development|
|`develop`|Integration and development testing|
|`main`|Stable production-ready code|

## 20.2 Pull Request Workflow

1. Create a feature branch.
    
2. Implement the feature.
    
3. Run local checks.
    
4. Create a PR into `develop`.
    
5. Run automated CI checks.
    
6. Review and test changes.
    
7. Merge into `develop`.
    
8. Prepare a release PR into `main`.
    
9. Validate production readiness.
    
10. Merge into `main`.
    

## 20.3 CI/CD

Use GitHub Actions.

Required checks should include:

- Dependency installation.
    
- TypeScript type checking.
    
- Linting.
    
- Automated tests.
    
- Production build.
    

Production deployment should occur only after changes are merged into `main`.

Preview deployments should be available for review.

## 20.4 Deployment

Hosting provider: Vercel.

Production URL: Free Vercel subdomain.

Example:

`yourname.vercel.app`

Requirements:

- Configure production and preview environments.
    
- Configure environment variables.
    
- Ensure SPA route refresh works.
    
- Verify the production build.
    
- Document deployment steps.
    

---

# 21. Non-Functional Requirements

|Category|Requirement|
|---|---|
|Performance|Fast loading and optimized assets|
|Accessibility|Keyboard and screen-reader-friendly experience|
|Responsiveness|Support mobile, tablet, laptop, and desktop|
|Security|Safe form handling and protected credentials|
|Maintainability|Clear component and feature organization|
|Scalability|Allow new sections and projects without major restructuring|
|Reliability|Graceful API and integration failure handling|
|SEO|Search-engine-friendly metadata and structure|
|Usability|Clear navigation and meaningful interactions|
|Compatibility|Support common modern browsers|

---

# 22. Acceptance Criteria

The project is ready for its initial production release when the following criteria are met.

## Overall Website

- All required sections are present.
    
- The navigation works correctly.
    
- The site is responsive.
    
- Light and Dark themes work.
    
- Theme preference persists.
    
- No major layout overflow or clipping.
    
- No critical console errors.
    

## Hero

- Professional identity is visible.
    
- CTA buttons work.
    
- Social links work.
    
- Availability status is visible.
    
- Profile image has an appropriate fallback.
    

## About Me

- Biography content is displayed.
    
- Four Personal Highlights cards are present.
    
- Journey timeline displays all available milestones.
    
- Timeline works on mobile.
    

## Skills

- Six skill categories are supported.
    
- Each category has a title and description.
    
- Technologies display official icons and names.
    
- Proficiency badges are visible.
    
- Grid responds to screen size.
    

## Projects

- Featured projects appear first.
    
- Project filters work.
    
- Project cards display required information.
    
- Dedicated project routes work.
    
- Direct URL access and refresh work.
    
- Case studies display available technical details.
    

## GitHub Dashboard

- Required statistics are displayed when available.
    
- Four featured repositories are supported.
    
- Contribution heatmap is displayed when supported data is available.
    
- Loading and error states work.
    
- Cached fallback data works.
    
- The section remains visible when the API fails.
    

## Experience and Education

- Entries display chronologically.
    
- Education and experience are distinguishable.
    
- Ongoing entries are supported.
    

## Certifications

- Cards display available credential information.
    
- Verification links work.
    
- Missing optional fields are handled gracefully.
    

## CV

- Preview opens the PDF in a new tab.
    
- Download works.
    
- PDF is accessible on mobile and desktop.
    

## Contact

- Required fields are validated.
    
- Valid submissions work.
    
- Loading state is displayed.
    
- Duplicate submissions are prevented.
    
- Success feedback is inline.
    
- Errors are handled clearly.
    
- Spam protection is configured.
    

## Quality and Deployment

- Unit tests pass.
    
- Component tests pass.
    
- Critical E2E flows pass.
    
- Type checking passes.
    
- Linting passes.
    
- Production build succeeds.
    
- Lighthouse audits have been reviewed.
    
- Production deployment works.
    
- Project routes work after refresh.
    

---

# 23. Implementation Roadmap

The following is the recommended development sequence.

## Phase 1 — Project Foundation

- Review existing repository.
    
- Confirm React, TypeScript, and Vite setup.
    
- Configure Tailwind CSS.
    
- Establish folder structure.
    
- Configure routing.
    
- Establish design tokens.
    
- Configure global typography.
    
- Establish reusable layout components.
    

## Phase 2 — Global UI

- Implement navbar.
    
- Implement responsive navigation.
    
- Implement theme switching.
    
- Implement theme persistence.
    
- Implement footer.
    
- Establish shared buttons, cards, badges, and form controls.
    

## Phase 3 — Main Portfolio Sections

- Hero
    
- About Me
    
- Skills & Technologies
    
- Projects
    
- Experience & Education
    
- Certifications & Achievements
    
- CV
    
- Contact
    

## Phase 4 — Project Detail Experience

- Create project detail route.
    
- Create project case study layout.
    
- Implement dynamic project data.
    
- Add project navigation.
    
- Add project-specific SEO metadata.
    

## Phase 5 — GitHub Integration

- Connect GitHub REST API.
    
- Retrieve profile information.
    
- Retrieve repository information.
    
- Implement featured repositories.
    
- Implement caching.
    
- Implement contribution visualization strategy.
    
- Add fallback states.
    

## Phase 6 — Integrations and Functionality

- Configure Web3Forms.
    
- Implement contact form validation.
    
- Implement submission states.
    
- Verify CV preview and download.
    
- Verify all external links.
    

## Phase 7 — Quality Assurance

- Add unit tests.
    
- Add component tests.
    
- Add E2E tests.
    
- Perform responsive testing.
    
- Perform accessibility review.
    
- Perform performance audits.
    
- Fix critical issues.
    

## Phase 8 — CI/CD and Deployment

- Configure GitHub Actions.
    
- Configure Vercel.
    
- Configure environment variables.
    
- Verify preview deployments.
    
- Verify production deployment.
    
- Test production routes.
    
- Complete final QA.
    

---

# 24. Assumptions and Constraints

## 24.1 Assumptions

- Portfolio content is primarily static.
    
- The owner controls content updates through TypeScript data files.
    
- GitHub information is public.
    
- Contact form submissions use Web3Forms.
    
- No custom backend is needed for the initial release.
    
- Vercel provides the hosting environment.
    
- GitHub is the source-code repository.
    
- English is the only supported website language initially.
    

## 24.2 Constraints

- The project should remain manageable for an individual developer.
    
- Avoid unnecessary backend infrastructure.
    
- Avoid introducing complex dependencies without justification.
    
- Do not publish unverified personal or professional information.
    
- External API availability is not guaranteed.
    
- Free hosting and service limits may affect certain features.
    

---

# 25. Risks and Mitigation

|Risk|Mitigation|
|---|---|
|GitHub API rate limits|Cache data and handle failures|
|GitHub contribution data limitations|Evaluate a suitable data source|
|Contact form service outage|Display useful error feedback|
|Excessive animation|Use purposeful animations and reduced-motion support|
|Large image assets|Optimize and lazy-load images|
|Scope expansion|Keep MVP and future enhancements separate|
|Inconsistent content|Centralize content in typed data files|
|Theme flashing|Apply saved theme early|
|Mobile layout problems|Use mobile-first development and responsive testing|
|Exposed credentials|Never place private secrets in frontend code|

---

# 26. Content Requirements and Placeholders

The following information must be provided or verified before production.

- Full name
    
- Professional profile photo
    
- Professional summary
    
- Actual About Me biography
    
- Personal Highlights descriptions
    
- Personal journey dates and descriptions
    
- Actual technical skills and proficiency labels
    
- Project descriptions and screenshots
    
- Project repositories and live links
    
- Project case study details
    
- Education history
    
- Professional or internship experience
    
- Certifications and achievements
    
- CV PDF
    
- GitHub username
    
- LinkedIn URL
    
- Professional email address
    
- Web3Forms access key
    
- Availability status
    

> [!warning] Content Accuracy  
> Do not use fabricated credentials, employment history, project results, statistics, or dates. Placeholder content must be replaced with verified information before production.

---

# 27. Definition of Done

A feature is considered complete when:

1. It meets its functional requirements.
    
2. Its UI follows the design system.
    
3. It works on supported screen sizes.
    
4. It supports Light and Dark themes where applicable.
    
5. It meets accessibility requirements.
    
6. It has appropriate TypeScript types.
    
7. It has no unnecessary duplicated logic.
    
8. Its important behavior is tested.
    
9. Its error and empty states are handled.
    
10. Its documentation is updated when necessary.
    
11. It passes relevant CI checks.
    

A production release is complete when all critical acceptance criteria have been met and the deployed application has passed final QA.

---

# 28. Project Development Principles

The following principles guide all implementation decisions.

## 28.1 Build with Understanding

The owner should understand the code being written.

Use AI assistance as a mentor, reviewer, and improvement partner rather than blindly accepting generated implementations.

## 28.2 Plan Before Implementing

Before implementing a feature:

1. Understand the requirement.
    
2. Identify the affected components.
    
3. Define the expected behavior.
    
4. Identify required data.
    
5. Plan the implementation.
    
6. Implement incrementally.
    
7. Test the result.
    
8. Review and improve.
    

## 28.3 Preserve Code Integrity

- Avoid unnecessary rewrites.
    
- Avoid changing unrelated files.
    
- Prefer small, focused changes.
    
- Explain architectural decisions.
    
- Review changes before merging.
    
- Keep the application working after each development milestone.
    

## 28.4 Keep It Practical

Use production-minded practices without overengineering.

The goal is not to use every available technology. The goal is to build a reliable, maintainable, and impressive portfolio.

---

# 29. Final Project Summary

|Area|Final Direction|
|---|---|
|Product|Personal portfolio website|
|Identity|Aspiring Software Engineer|
|Tagline|Learning, building, and continuously improving.|
|UI Direction|Minimalist and Professional|
|Themes|Light and Dark|
|Accent|Emerald Green|
|Layout|Responsive single-page portfolio|
|Project Details|Dedicated routes|
|Frontend|React + TypeScript|
|Build Tool|Vite|
|Styling|Tailwind CSS|
|Routing|React Router|
|Animation|CSS/Tailwind + Motion for React|
|Content Management|Static TypeScript data|
|GitHub Integration|GitHub REST API|
|Contact Form|Web3Forms|
|Testing|Vitest, React Testing Library, Playwright|
|Version Control|Git + GitHub|
|Workflow|Feature → Develop → Main|
|CI/CD|GitHub Actions|
|Hosting|Vercel|
|Database|Not required initially|
|Backend|Not required initially|
|Analytics|Not included initially|

---

# 30. Related Documentation

Recommended future Obsidian notes:

- [[PortfolioV2 - Product Requirements]]
    
- [[PortfolioV2 - Software Architecture]]
    
- [[PortfolioV2 - Design System]]
    
- [[PortfolioV2 - Component Architecture]]
    
- [[PortfolioV2 - Data Models]]
    
- [[PortfolioV2 - API Integrations]]
    
- [[PortfolioV2 - Testing Strategy]]
    
- [[PortfolioV2 - Deployment Guide]]
    
- [[PortfolioV2 - Development Roadmap]]
    
- [[PortfolioV2 - Decision Log]]
    

These can be created as separate documents when the project grows. This specification remains the main reference.

---

# Document Status

**Status:** Planning Specification

**Version:** 1.0

**Next Step:** Review the existing PortfolioV2 repository and compare its current implementation against this specification before starting the next development phase.

**Source of Truth:** This document defines the approved project direction. Changes to requirements should be reflected here before or alongside implementation.