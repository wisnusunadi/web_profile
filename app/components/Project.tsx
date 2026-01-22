import Image from "next/image";

type Desc = {
  id: String;
  en: String;
};


type ProjectProps = {
  name: String;
  lang : String;
  thumbnail : String;
  stacks: String[];
  desc : Desc;
};

export default function Project({ name, stacks,thumbnail,lang,desc }: ProjectProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image alt="thumbnail" src={`/${thumbnail}`} fill className="object-cover"/>
      </div>
      <div className="project-content">
        <h3>{name}</h3>
        <p>
          {lang === 'en' ? desc.en : desc.id }
         
        </p>
        <div className="project-tags">
          {stacks.map((item, index) => (
            <span className="tag" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
