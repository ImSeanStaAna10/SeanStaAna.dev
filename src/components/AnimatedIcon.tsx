import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';

type IconMotion = 'draw' | 'wave' | 'spin' | 'pulse' | 'float' | 'spark';

interface AnimatedIconProps {
  icon: LucideIcon;
  variant?: IconMotion;
  size?: number;
  loop?: boolean;
  delay?: number;
  className?: string;
}

/** Decorative motion stays separate from the control's accessible name. */
export function AnimatedIcon({ icon: Icon, variant = 'draw', size = 22, loop = false, delay = 0, className = '' }: AnimatedIconProps) {
  return (
    <span
      className={`animated-icon icon-${variant}${loop ? ' is-looping' : ''} ${className}`.trim()}
      style={{ '--icon-delay': `${delay}ms` } as CSSProperties}
      aria-hidden="true"
    >
      <Icon size={size} strokeWidth={1.8} focusable="false" />
    </span>
  );
}