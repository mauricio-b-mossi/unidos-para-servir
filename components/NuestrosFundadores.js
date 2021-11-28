import React from "react";
import Members from "../components/Members";
import { sanityClient } from "../sanity";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function NuestrosFundadores({members}) {
  return (
    <div className="flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="flex flex-col justify-center items-center min-h-screen max-w-7xl  space-y-20 border-t-2">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold leading-snug pt-12">
            <h3 className="flex max-w-xl text-center">Nuestras Fundadores.</h3>
          </div>
          <div className="flex max-w-md text-center">
            <p>
              Every five seconds one child dies in Africa due to malnutrition
              and related diseases, and you can help!
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center md:flex-row">
          <AnimateSharedLayout>
            <motion.div
              layout
              className="grid lg:grid-cols-2 xl:grid-cols-3 h-full flex-grow "
            >
              {members &&
                members.map((member, index) => (
                  <Members member={member} key={index} />
                ))}
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </div>
    </div>
  );
}
