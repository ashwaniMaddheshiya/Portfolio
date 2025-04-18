import Button from "../UI/Button";
import githubIcon from "/public/github.svg";
import linkedinIcon from "/public/linkedin.svg";
import Image from "next/image";
import Link from "next/link";
import greetIcon from "/public/greeting.svg";

const Header = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="border border-[#232323] rounded-3xl w-full p-10">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center ">
          <div className="flex gap-3">
            <Image src={greetIcon} alt="" width={40} height={40} />
            <div className="flex flex-col">
              <span>Hey, I&apos;m Ashwani</span>
              <span>Frontend Developer</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/ashwaniMaddheshiya"
              className="px-3 py-1 border border-gray-500 text-white transition duration-300 rounded-full"
            >
              <Image src={githubIcon} alt="Github" width={20} height={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/ashwaniMaddheshiya"
              className="px-3 py-1 border border-gray-500 text-white transition duration-300 rounded-full"
            >
              <Image src={linkedinIcon} alt="Linkedin" width={20} height={20} />
            </Link>
            <span className="">
              <Button onClick={handleScrollToContact}>Get In Touch</Button>
            </span>
          </div>
        </div>

        <div className="text-3xl font-bold leading-tight my-3">
          Crafting elegant UIs <br /> and exploring the future of tech.
        </div>

        <div>
          Hi, I&apos;m Ashwani, a frontend developer passionate about crafting
          intuitive, visually captivating UIs. With a solid foundation in React
          and Next.js, I specialize in building responsive, pixel-perfect
          interfaces. Alongside, I&apos;m diving into backend development and
          blockchain to expand my technical expertise.
        </div>
      </div>

      {/* <div className="relative border border-[#232323] rounded-3xl lg:w-1/3 overflow-hidden h-auto w-full">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatedSkillsBackground />
        </div>
        <div className="px-10 pt-4 w-full h-[300px] object-contain relative z-10"></div>
        
      </div> */}
    </div>
  );
};

export default Header;
