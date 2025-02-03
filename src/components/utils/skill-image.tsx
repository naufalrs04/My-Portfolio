import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, 
  FaGithub, FaBootstrap, 
  FaLaravel
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql
} from 'react-icons/si';

const skillsImage = (skill: string) => {
  switch (skill) {
    case 'HTML':
      return <FaHtml5 size={40} color="#E34F26" />;
    case 'CSS':
      return <FaCss3Alt size={40} color="#1572B6" />;
    case 'Javascript':
      return <FaJsSquare size={40} color="#F7DF1E" />;
    case 'Typescript':
      return <SiTypescript size={40} color="#3178C6" />;
    case 'React':
      return <FaReact size={40} color="#61DAFB" />;
    case 'Next JS':
      return <SiNextdotjs size={40} color="black" />;
    case 'Tailwind':
      return <SiTailwindcss size={40} color="#06B6D4" />;
    case 'MySQL':
      return <SiMysql size={40} color="#4479A1" />;
    case 'Bootstrap':
      return <FaBootstrap size={40} color="#7952B3" />;
    case 'Laravel':
      return <FaLaravel size={40} color="#FF2D20" />;
    case 'GitHub' :
      return <FaGithub size={40} color="black" />;
    default:
      return null;
  }
};

export default skillsImage;
