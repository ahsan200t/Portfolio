import { FaNode, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="p-4 mt-10">
      <h2 className="text-2xl font-bold border-b-4 text-white md:w-1/3">Technologies that I know :</h2>
      <div className="md:flex text-white justify-around mt-10">
       <div className="flex items-center gap-2 text-4xl">
       <FaHtml5 />
       <p>HTML</p>
       </div>
       <div className="flex items-center gap-2 text-4xl">
       <RiTailwindCssFill className="text-green-500" />
       <p>Tailwind CSS</p>
       </div>
       <div className="flex items-center gap-2 text-4xl">
       <SiJavascript />
       <p>Javascript</p>
       </div>
      </div>
      <div className="md:flex text-white justify-around md:mt-10">
         <div className="flex items-center gap-2 text-4xl">
         <FaReact className="text-green-500" />
         <p>React.js</p>
         </div>
         <div className="flex items-center gap-2 text-4xl">
         <FaNode className="text-green-600" />
         <p>node.js</p>
         </div>
         <div className="flex items-center gap-2 text-4xl">
         <SiExpress />
         <p>Express.js</p>
         </div>
      </div>
      <div className="text-white md:flex items-center justify-center md:mt-8 gap-10">
        <div className="flex items-center gap-2 text-4xl">
        <SiFirebase className="text-red-600" />
        <p>Firebase</p>
        </div>
        <div className="flex items-center gap-2 text-4xl">
        <SiMongodb className="text-green-700"/>
        <p>mongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
