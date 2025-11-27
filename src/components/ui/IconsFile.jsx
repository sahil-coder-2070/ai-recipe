import { motion } from "motion/react";

const IconsFile = () => {
  return <div>IconsFile</div>;
};

export default IconsFile;

export const BrifCaseIconLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-briefcase-icon lucide-briefcase text-[#6A38C2]"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
};

export const StartLogoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-cooking-pot-icon lucide-cooking-pot mr-2"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        d="M2 12h20"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        d="m4 8 16-4"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
      />
    </svg>
  );
};
