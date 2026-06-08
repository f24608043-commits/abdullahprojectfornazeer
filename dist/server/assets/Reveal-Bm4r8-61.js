import { jsx, jsxs } from "react/jsx-runtime";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] } }
};
function Reveal({
  children,
  delay = 0,
  className
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      transition: { delay },
      className,
      children
    }
  );
}
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());
  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, count]);
  return /* @__PURE__ */ jsxs("span", { ref, className: "inline-flex items-baseline", children: [
    /* @__PURE__ */ jsx(motion.span, { children: rounded }),
    suffix
  ] });
}
export {
  Counter as C,
  Reveal as R
};
