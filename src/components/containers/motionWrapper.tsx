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
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      whileInView={{ opacity: 1, y: 0 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
