import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Reset animation state when route changes
    setIsVisible(false);
  }, [router.asPath]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: desconectar después de la primera animación
          if (options.once !== false) {
            observer.disconnect();
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.once, router.asPath]);

  return [ref, isVisible];
};

export default useScrollAnimation;
