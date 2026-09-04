import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"

export function StatCounter({ value, suffix = "", label, inline = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 })
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  if (inline) {
    return (
      <span ref={ref}>
        <motion.span>{display}</motion.span>
        {suffix}
      </span>
    )
  }

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-extrabold text-ink sm:text-5xl">
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <div className="mt-2 text-sm text-ink-faint">{label}</div>
    </div>
  )
}
