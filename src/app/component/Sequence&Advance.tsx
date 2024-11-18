import Image from "next/image";
import React from "react";
import ProgrmFundamentl from "../../../Images/programFundamental.jpg";
import Web2Nextjs from "../../../Images/web2NextJs.jpg";
import EarnAsLearn from "../../../Images/EarnAsLearn.jpg";
import AIImg from "../../../Images/AIImg.jpg";
import Web3 from "../../../Images/Web3.jpg";
import Cloud from "../../../Images/CloudNative.jpg";
import Ambient from "../../../Images/Ambient.jpg";
import Genomics from "../../../Images/Genomics.jpg";
import Automation from "../../../Images/Automation.jpg";

function CourseSequence() {
  return (
    <div className="md:m-20 m-5 space-y-20">
      {/* Core Courses Section */}
      <h1 className="text-[#044E83] md:text-3xl text-2xl font-bold md:text-left text-center">
        Core Courses Sequence
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:px-10 px-4">
        <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
          <div className="h-[80%]">
            <Image
              src={ProgrmFundamentl}
              alt="Programming Fundamentals"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <h1 className="text-center font-bold mt-0">Programming Fundamentals</h1> {/* Set mt to 0 */}
        </div>
        <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
          <div className="h-[80%]">
            <Image
              src={Web2Nextjs}
              alt="Web2 Using NextJS"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <h1 className="text-center font-bold mt-0">Web2 Using NextJS</h1> {/* Set mt to 0 */}
        </div>
        <div className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
          <div className="h-[80%]">
            <Image
              src={EarnAsLearn}
              alt="Earn As You Learn"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <h1 className="text-center font-bold mt-0">Earn As You Learn</h1> {/* Set mt to 0 */}
        </div>
      </div>

      {/* Advanced Courses Section */}
      <div className="space-y-8">
        <h1 className="text-[#044E83] md:text-3xl text-2xl font-bold md:text-left text-center">
          Advanced Courses
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 md:px-10 px-4">
          {[
            { src: AIImg, alt: "Artificial Intelligence", title: "Artificial Intelligence" },
            { src: Web3, alt: "Web 3 and Metaverse", title: "Web 3 and Metaverse" },
            { src: Cloud, alt: "Cloud-Native Computing", title: "Cloud-Native Computing" },
            { src: Ambient, alt: "Ambient Computing and IoT", title: "Ambient Computing and IoT" },
            { src: Genomics, alt: "Genomics and Bioinformatics", title: "Genomics and Bioinformatics" },
            { src: Automation, alt: "Network Programmability and Automation", title: "Network Programmability and Automation" }
          ].map((course, index) => (
            <div key={index} className="h-60 md:w-72 w-full shadow-2xl hover:scale-105">
              <div className="h-[80%]">
                <Image
                  src={course.src}
                  alt={course.alt}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <h1 className="text-center font-bold mt-2">{course.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseSequence;