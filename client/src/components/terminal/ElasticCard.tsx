import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ORIGIN_Y = -60;
const REST_LENGTH = 120;

// 🔥 tuned for recoil
const STIFFNESS = 320;
const DAMPING = 14;

export default function ElasticCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: STIFFNESS, damping: DAMPING });
  const sy = useSpring(y, { stiffness: STIFFNESS, damping: DAMPING });

  const stringHeight = useTransform(sy, (v) =>
    Math.max(40, v + REST_LENGTH)
  );
  const stringRotate = useTransform(sx, (v) => v * 0.25);

  return (
    <div className="relative w-full h-full flex justify-center items-start select-none">
      {/* STRING */}
      <motion.div
        className="absolute w-[2px] bg-gray-500 origin-top"
        style={{
          top: ORIGIN_Y,
          height: stringHeight,
          rotate: stringRotate,
        }}
      />

      {/* CARD */}
      <motion.div
        drag
        dragElastic={0}
        dragMomentum={false}
        onDrag={(e, info) => {
          x.set(info.offset.x);
          y.set(info.offset.y);
        }}
        onDragEnd={() => {
          // recoil impulse
          x.set(x.get() * -0.15);
          y.set(y.get() * -0.15);

          // return to rest
          x.set(0);
          y.set(0);
        }}
        style={{
          x: sx,
          y: sy,
        }}
        className="relative mt-24 cursor-grab active:cursor-grabbing"
      >
        <div className="w-[220px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-2xl p-4">
          <img
            src="/profile.jpg"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="w-full h-56 object-cover rounded-lg pointer-events-none select-none"
          />

          <div className="mt-3 text-center">
            <p className="text-white font-semibold">
              Katla Sathwik
            </p>
            <p className="text-gray-400 text-sm">
              Machine Learning Engineer
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
