"use client";

import { FaJava, FaFigma, FaJs } from "react-icons/fa";
import { DiMysql, DiIllustrator } from "react-icons/di";
import { SiNextdotjs, SiSpring, SiDotnet } from "react-icons/si";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Full Stack developer, specialized in backend development. With knowledge of Java and C#, I excel in agile development and collaborative problem solving.",
  items: [
    {
      company: "A&P S.A.C.",
      position: "Java Backend Developer",
      duration: "6 months - 2023",
    },
    {
      company: "IATec",
      position: "Full Stack Developer junior",
      duration: "2022 - 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Systems Engineer recently graduated from Universidad Peruana Unión, with specialization in web development, backend and UI/UX design.",
  items: [
    {
      institution: "Universidad Peruana Unión (UPeU)",
      degree: "Bach. Systems Engineering",
      duration: "2020 - 2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "In this section, you will find a compilation of the technologies that demonstrate my ability to design and develop efficient, scalable and visually appealing web applications. ",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiDotnet />,
      name: ".Net",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <DiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiSpring />,
      name: "Spring",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <DiIllustrator />,
      name: "Illustrator",
    },
  ],
};

//components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  Tooltip,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import boy from "/public/assets/casual-boy.png" 

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 font-jetbrains"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            {/* picture */}
            <div className="mx-auto mt-6 hidden xl:block">
              <Image src={boy} alt="casual-boy" height={170}></Image>
            </div>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-gray-900 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-cyan-500 font-semibold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan-500"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-gray-900 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-cyan-500 font-semibold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan-500"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-gray-900 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-cyan-500 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
