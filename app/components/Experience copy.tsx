import Image from "next/image";

type jobDesc = {
  id: String;
  en: String;
};

type ExperiencePops = {
  lang: String;
  role: String;
  company: String;
  year: String;
  logo: String;
  jobdesc: jobDesc[];
};
export default function Experience({
  lang,
  role,
  company,
  year,
  logo,
  jobdesc,
}: ExperiencePops) {
  return (
    <div className="experience-item ">
      <div className="space-y-2 mt-1">
        <Image
          className="experience-year"
          src={`/${logo}`}
          width={100}
          height={100}
          alt="Company Logo"
        ></Image>
      </div>
      <div className="experience-content w-full">
        <div className="grid grid-cols-[1fr_auto] items-start gap-4">
          <h3>{role}</h3>
          <div className="experience-year text-right">{year}</div>
        </div>
        <p className="company">{company}</p>
        <ul className="list-disc list-outside">
          {jobdesc.map((item, index) => (
            <li key={index}>{lang === "en" ? item.en : item.id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
