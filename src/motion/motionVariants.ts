interface FadeInProps {
  duration: number;
  delay: number;
}

export const fadeInOnScroll = ({ duration, delay }: FadeInProps) => {
  return {
    hidden: {
      opacity: 0, // initioal state: fully transparent
    },
    visible: {
      opacity: 1, // fade-in to fully visible
      transition: {
        duration: duration, // duration of the fade-in effect
        delay: delay, //delay before the animation starts
        ease: [0.42, 0, 0.58, 1], // custom cubic-bezier for smooth animation
      },
    },
  };
};

export const fadeInUpSpring = ({ duration, delay }: FadeInProps) => {
  return {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: 'spring',
        stiffness: 100,
      },
    },
  };
};
