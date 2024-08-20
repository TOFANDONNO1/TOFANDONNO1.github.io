import { Link } from '@chakra-ui/react';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import "./Resume.css"
import Soumya from "./SOUMYA-RANAJNA-FULL_STACK WEB DEVLOPER.pdf";

const ResumeButton = () => {
  return (

    <Link
    id="resume-link-1"
    onClick={() =>
      window.open(
        "https://drive.google.com/file/d/1dAj3ECvN8zoMcFI9-BUKDgqSEQNVMY45/view?usp=sharing"
      )
    }
    href={Soumya}
    target={"_blank"}
          rel="noopener noreferrer"
    download
     className="resume-button"
  >
   <FaDownload className="resume-icon" />
   <span>Resume</span>
  </Link>
   
  );
};

export default ResumeButton;
