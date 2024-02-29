import "./Education.sass"
import {MdOutlineSchool} from "react-icons/md";

export default function Education() {
  return (
    <div className={"section"}>
      <h1 className={"subheader"}>
        EDUCATION
      </h1>
      <div className={"education"}>
        <MdOutlineSchool size={30} />
        <div className={"education-text"}>
          <p>June 2023</p>
          <p><strong>Bachelor of Science Degree in Software Engineering</strong></p>
          <p>California Polytechnic State University, San Luis Obispo</p>
        </div>
      </div>
    </div>
  );
}
