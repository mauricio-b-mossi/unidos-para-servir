import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Content from "./Content";

const Members = ({ member }) => {
 

  const { name, position, bio, image } = member;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      //   initial={{ borderRadius: 10 }}
      className="flex flex-col items-center justify-content"
    >
      <motion.div
        layout
        className="relative flex justify-center items-center p-8 md:p-16 rounded-lg"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 h-40 md:w-52 md:h-52 relative">
            <Image
              className="rounded-full cursor-pointer "
              src={image.asset.url}
              alt=""
              width="300"
              height="300"
              priority={true}
              onClick={toggleOpen}
            />
          </div>

          {/* TODO: Add this "md:hidden" to make responsive again */}
          <AnimatePresence>
            <div className="block p-2">{isOpen && <Content text={bio} />}</div>
          </AnimatePresence>

          <h1 className="font-black pt-3">{name}</h1>

          <h3 className="font-semibold text-blue-500">{position}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Members;
