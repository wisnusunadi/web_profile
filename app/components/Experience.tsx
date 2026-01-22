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
    <div className="px-5 py-4 mb-10 mx-4 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:translate-x-[5px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-10 p-4   ">
      
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-20 h-20 relative">
            <Image
              src={`/${logo}`}
              alt="Company Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">{role}</h3>
            <p className="font-medium">{company}</p>
            <p className="lg:hidden text-cyan-600">{year}</p>
          </div>
        </div>

        {/* Bagian kanan: year */}
        <div className="mt-2 hidden lg:block lg:mt-0 font-medium text-cyan-600 text-right">
          {year}
        </div>
      </div>
      <div className="mt-2">
        <ul className="list-disc list-inside">
          {jobdesc.map((item, index) => (
            <li className="text-justify mb-2" key={index}>
              {lang === "en" ? item.en : item.id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
