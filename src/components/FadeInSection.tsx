import { useInView } from '../hooks/useInView';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export default function FadeInSection({ children, delay = 0, direction = 'up' }: FadeInSectionProps) {
  const { ref, inView } = useInView();

  const directionClass = {
    up: 'translate-y-16',
    left: '-translate-x-16',
    right: 'translate-x-16',
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClass}`
      }`}
    >
      {children}
    </div>
  );
}
