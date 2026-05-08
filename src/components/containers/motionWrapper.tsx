'use client';
import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';

type MotionWrapperProps = {
  className?: string;
  delay?: number;
};

export default function MotionWrapper({
  className = '',
  delay = 0,
  children,
}: PropsWithChildren<MotionWrapperProps>) {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ opacity: 0, translateY: '32px' }}
      transition={{ duration: 0.5, ease: 'easeIn', delay }}
      whileInView={{ opacity: 1, translateY: 0 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
