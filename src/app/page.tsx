"use client";

import { useState, useRef } from "react";

const tools = [
  {
    id: "1",
    pic: "/1.svg",
    name: "LOR Learn",
    exp: "One stop shop for all things learning.",
    desc: "Find all things to do with learning on LOR Learn, including 20,000 digital courses from LinkedIn Learning and our internal specialists, Guilds, Mentors and more.",
    link: "ok",
    guideLink: "ok",
  },
  {
    id: "2",
    pic: "/2.svg",
    name: "Coins",
    exp: "Asite",
    desc: "Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.",
    link: "",
    guideLink: "",
  },
  {
    id: "2",
    pic: "/2.svg",
    name: "Coins",
    exp: "Asite",
    desc: "Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.",
    link: "",
    guideLink: "",
  },
  {
    id: "2",
    pic: "/2.svg",
    name: "Coins",
    exp: "Asite",
    desc: "Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.",
    link: "",
    guideLink: "",
  },
];

export default function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTools, setFilteredTools] = useState(tools);
  // const imageRef = useRef<HTMLImageElement | null>(null);
  // const [showList, setShowList] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.exp.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTools(filteredItems);
  };
  return (
    <>
      {/* <div class="rjc-revamp" style="padding: 0 30px; border-top: 8px red solid; background-color: white;"></div> */}

      <main className="white-bg flex min-h-screen flex-col lor-border-red p-[30px]">
        {/* <div className="divide-y divide-red-200"></div> */}
        <div className="flex flex-row mb-12">
          <input
            className="w-6/12 md:w-5/12 h-12 p-4 rounded-l sb-grey"
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Search for tool or action e.g. timesheets"
          />
          <button className="w-1/12 md:w-24 h-12 p-2 rounded-r lor-yellow strong inline-block align-middle">
            Search
          </button>
        </div>
        <ul className="w-11/12 md:w-[918px]">
          {filteredTools.map((tool) => (
            <li key={tool.id} className="box-content p-4 pl-0 rounded mt-1">
              <div className="flex justify-between">
                <div className="min-w-36 h-36 mr-10 flex flex-col rounded strong sb-grey justify-center">
                  <img className="min-w-20 h-20" src={tool.pic} alt="lorlearn" />
                  <div className="text-[15px] mt-2 flex justify-center uppercase">{tool.name}</div>
                </div>
                <div>
                  <div className="text-[20px] font-bold">{tool.exp}</div>
                  <div className="text-[15px] leading-6 mt-2">{tool.desc}</div>
                  <div className="flex">
                    <a
                      href={tool.link}
                      target="_blank"
                      className={
                        (tool.link != "" ? "block " : "hidden ") +
                        "text-[14px] font-bold w-1/12 mt-4 md:w-24 h-9 p-2 rounded lor-yellow inline-block align-middle flex justify-center"
                      }
                    >
                      Go there
                    </a>
                    <a
                      href={tool.guideLink}
                      target="_blank"
                      className={
                        (tool.guideLink != "" ? "block " : "hidden ") +
                        "text-[14px] font-bold w-3/12 mt-4 md:w-32 ml-3 h-9 p-2 rounded lor-yellow inline-block align-middle flex justify-center"
                      }
                    >
                      Watch a guide
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
