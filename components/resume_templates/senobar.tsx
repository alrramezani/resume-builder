import {
  IoPhonePortraitOutline,
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoGlobeOutline,
} from "react-icons/io5";
const Senobar = () => {
  const personalData: any = {};
  return (
    <section className=" break-words text-sm font-open_sans">
      <div className="flex">
        <div className=" pl-8 relative max-h-[120px] w-[60%] before:content-[''] before:bg-amber-300 before:absolute before:w-4 before:h-full before:left-0">
          <span className=" text-3xl block font-normal mb-1">
            {personalData.firstname || "Alireza"}{" "}
            {personalData.lastname || "Ramezani"}
          </span>
          <span className=" text-2xl block font-normal mb-2">
            {personalData.jobTitle || "Senior Front End Developer"}
          </span>
          <span className="font-normal text-gray-600">
            {personalData.location || "Tehran, Iran"}
          </span>
        </div>
        <ul className="m-0 list-none text-xs p-0 pl-6 relative mt-4">
          <li className="mb-1 flex items-center">
            <IoPhonePortraitOutline className="mr-1" />{" "}
            {personalData.phone || "+989991112233"}
          </li>
          <li className="mb-1 flex items-center">
            <IoMailOutline className="mr-1" />
            {personalData.email || "alireza@sample.com"}
          </li>
          {personalData.linkedin ? (
            <li className="mb-1 flex items-center">
              <IoLogoLinkedin className="mr-1" />
              {personalData.linkedin}
            </li>
          ) : (
            ""
          )}
          {personalData.github ? (
            <li className="mb-1 flex items-center">
              <IoLogoGithub className="mr-1" />
              {personalData.github}
            </li>
          ) : (
            ""
          )}
          {personalData.website ? (
            <li className="mb-1 flex items-center">
              <IoGlobeOutline className="mr-1" />
              {personalData.website}
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <main className=" flex px-4 py-4">
        <div className="w-[37%]">
          <div>
            <h3 className="my-4 text-2xl capitalize">Summary</h3>
            <div className=" leading-5">
              {personalData.summary ||
                "Hardworking College Student seeking employment. Bringing forth a motivated attitude and a variety of powerful skills..."}
            </div>
          </div>
          <div>
            <h3 className="my-4 text-2xl capitalize">Skills</h3>
            <ul className="m-0 p-0 pl-8 list-disc">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>CSS IN JS (Styled-components)</li>
              <li>Less,Sass</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="my-4 text-2xl capitalize">Education</h3>
            <div className="mb-4">
              <div className=" leading-5 mb-1">
                <span className="font-bold block">Bachelor of Science</span>
                <span className="font-bold block">
                  Automotive Engineering Technology
                </span>
              </div>
              <div className="text-gray-500 text-sm">
                <span>2009-09</span>
                <span> - </span>
                <span>2011-06</span>
              </div>
              <span className=" text-gray-500  text-sm">
                Irankhodro Elmi Karbordi University
              </span>
            </div>
          </div>
        </div>

        <div className="w-[63%] ml-8">
          <div>
            <h3 className="my-4 text-2xl">Work History</h3>

            <div className="relative before:content-[''] before:absolute before:bg-black before:w-[1px] before:h-[100%] before:top-[10px] before:left-0">
              <div className=" pl-6 pb-6 relative last:pb-1 after:content-[''] after:absolute after:bg-black after:w-[5px] after:h-[5px] after:top-[8px] after:left-[-2px] after:rounded-full before:content-[''] before:absolute before:border before:border-black before:w-[9px] before:h-[9px] before:top-[6px] before:left-[-4px] before:rounded-full  before:bg-white">
                <span className="text-md font-medium block mb-1">
                  Senior Front End Developer{" "}
                </span>

                <div className=" text-sm flex text-gray-500 mb-3">
                  <span className=" font-bold">ARIAN CAPITAL</span>
                  <span className="mx-2">|</span>
                  <span className="location">Tehran, Iran</span>
                  <span className="mx-2">|</span>
                  <div className=" text-sm">
                    <span className="date-from">2020-06</span>
                    <span> - </span>
                    <span className="date-to">Current</span>
                  </div>
                </div>
                <div className=" leading-5">
                  As a front-end developer, worked on the company’s main website
                  to create a seamless experience for users. The website
                  contents mostly evolved around buy and sell used cars and
                  other vehicles.
                </div>
              </div>
              <div className=" pl-6 pb-6 relative last:pb-1 after:content-[''] after:absolute after:bg-black after:w-[5px] after:h-[5px] after:top-[8px] after:left-[-2px] after:rounded-full before:content-[''] before:absolute before:border before:border-black before:w-[9px] before:h-[9px] before:top-[6px] before:left-[-4px] before:rounded-full  before:bg-white">
                <span className="text-md font-medium block mb-1">
                  Senior Front End Developer{" "}
                </span>
                <div className=" text-sm flex text-gray-500 mb-3">
                  <span className=" font-bold">DAMUS</span>
                  <span className="mx-2">|</span>
                  <span className="location">Tehran, Iran</span>
                  <span className="mx-2">|</span>
                  <div className=" text-sm">
                    <span className="date-from">2020-06</span>
                    <span> - </span>
                    <span className="date-to">2020-06</span>
                  </div>
                </div>
                <span className=" leading-5">
                  I was the lead frontend developer in Damus co. Damus is an
                  online accounting service for industrial companies. The
                  development team and I managed to refactor the company’s
                  website by using React, Redux, to improve performance and UX.
                  As a result, we increased the revenue by around 50 percent.
                </span>
              </div>
              <div className=" pl-6 pb-6 relative last:pb-1 after:content-[''] after:absolute after:bg-black after:w-[5px] after:h-[5px] after:top-[8px] after:left-[-2px] after:rounded-full before:content-[''] before:absolute before:border before:border-black before:w-[9px] before:h-[9px] before:top-[6px] before:left-[-4px] before:rounded-full  before:bg-white">
                <span className="text-md font-medium block mb-1">
                  Full Stack Web Developer
                </span>
                <div className=" text-sm flex text-gray-500 mb-3">
                  <span className=" font-bold">NETBARG</span>
                  <span className="mx-2">|</span>
                  <span className="location">Tehran, Iran</span>
                  <span className="mx-2">|</span>
                  <div className=" text-sm">
                    <span className="date-from">2016-10</span>
                    <span> - </span>
                    <span className="date-to">2018-03</span>
                  </div>
                </div>
                <span className=" leading-5">
                  NetBarg is an online daily deal service. I improved internal
                  routines and developed new features. NetBarg’s website was
                  basically written with PHP and CakePHP framework.
                </span>
              </div>
              <div className=" pl-6 pb-6 relative last:pb-1 after:content-[''] after:absolute after:bg-black after:w-[5px] after:h-[5px] after:top-[8px] after:left-[-2px] after:rounded-full before:content-[''] before:absolute before:border before:border-black before:w-[9px] before:h-[9px] before:top-[6px] before:left-[-4px] before:rounded-full  before:bg-white">
                <span className="text-md font-medium block mb-1">
                  Front End Developer
                </span>
                <div className=" text-sm flex text-gray-500 mb-3">
                  <span className=" font-bold">DOUMAN INVESTMENT</span>
                  <span className="mx-2">|</span>
                  <span className="location">Tehran, Iran</span>
                  <span className="mx-2">|</span>
                  <div className=" text-sm">
                    <span className="date-from">2016-10</span>
                    <span> - </span>
                    <span className="date-to">2018-03</span>
                  </div>
                </div>
                <span className=" leading-5">
                  In Douman we created a platform for investors to track their
                  financial activities which led me to improve my knowledge in
                  financial software and its qualities.
                </span>
              </div>
              <div className=" pl-6 pb-6 relative last:pb-1 after:content-[''] after:absolute after:bg-black after:w-[5px] after:h-[5px] after:top-[8px] after:left-[-2px] after:rounded-full before:content-[''] before:absolute before:border before:border-black before:w-[9px] before:h-[9px] before:top-[6px] before:left-[-4px] before:rounded-full  before:bg-white">
                <span className="text-md font-medium block mb-1">
                  Full Stack Web Developer
                </span>
                <div className=" text-sm flex text-gray-500 mb-3">
                  <span className=" font-bold">MEGAPIL</span>
                  <span className="mx-2">|</span>
                  <span className="location">Tehran, Iran</span>
                  <span className="mx-2">|</span>
                  <div className=" text-sm">
                    <span className="date-from">2016-10</span>
                    <span> - </span>
                    <span className="date-to">2018-03</span>
                  </div>
                </div>
                <span className=" leading-5">
                  Megapil company had many services in it industry. Moror was a
                  service that consisted of web analytics and hit map and it was
                  one of our main projects. With Moror users can easily be
                  informed of website visits with different measurement systems.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Senobar;
