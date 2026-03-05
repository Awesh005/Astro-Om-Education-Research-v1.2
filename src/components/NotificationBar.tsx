import { motion } from 'motion/react';

export default function NotificationBar() {
  return (
    <div className="bg-indigo-900 text-white py-2.5 overflow-hidden relative z-[60]">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          className="flex gap-8 items-center text-sm font-medium tracking-wide"
        >
          {/* Repeating the content to ensure it spans enough width for a smooth effect if needed, 
              though x: 100% to -100% just moves the block across the screen. 
              For a continuous loop without gaps, we'd need a different technique, 
              but a standard marquee (entering from right, exiting left) seems to be what's requested "slides in".
          */}
          <span>Our fee only one cup Tea / coffee &nbsp;&nbsp;|&nbsp;&nbsp; Admission started 26-27 &nbsp;&nbsp;|</span>
          <span>Our fee only one cup Tea / coffee &nbsp;&nbsp;|&nbsp;&nbsp; Admission started 26-27 &nbsp;&nbsp;|</span>
          <span>Our fee only one cup Tea / coffee &nbsp;&nbsp;|&nbsp;&nbsp; Admission started 26-27 &nbsp;&nbsp;|</span>
          <span>Our fee only one cup Tea / coffee &nbsp;&nbsp;|&nbsp;&nbsp; Admission started 26-27 &nbsp;&nbsp;|</span>
        </motion.div>
      </div>
    </div>
  );
}
