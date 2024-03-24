"use client";

import { useState, useRef } from "react";
const tools = [
  {
    id: "1",
    pic: "/1.svg",
    name: "LOR Learn",
    exp: "Your one-stop-shop for all things learning.",
    desc: "Find all things to do with learning on LOR Learn, including 20,000 digital courses from LinkedIn Learning and our internal specialists, Guilds, Mentors and more.",
    link: "https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home/jtrYqtnCAAZTz7H7xwAPWf",
    guideLink: "ll-revamp-v2 (1).mp4",
  },
  {
    id: "2",
    pic: "/2.svg",
    name: "Coins",
    exp: "Manage orders, invoicing and payments.",
    desc: "COINS is the business' core functions system for orders, invoicing, and payments. All project cost and sales transactions are managed through COINS. ",
    link: "https://goscoinsprod01/cgi-bin/oalive/wologin.p",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/COINS.aspx",
  },
  {
    id: "3",
    pic: "/3.svg",
    name: "Expenses",
    exp: "Manage expenses you've incurred.",
    desc: "Manage company business expenses.",
    link: "https://mingle-portal.inforcloudsuite.com/LAINGOROURKE_PRD",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/Pages/Expenses_and_allowances.aspx",
  },
  {
    id: "4",
    pic: "/4.svg",
    name: "Holiday & Payroll",
    exp: "Book holiday and check your pay.",
    desc: "Use this system to book annual leave and to also check your pay.",
    link: "https://itrentess.laingorourke.com/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/Pages/Annual%20leave%20-%20iTrent%20Self%20Service.aspx",
  },
  {
    id: "5",
    pic: "/5.svg",
    name: "Delivery Excellence",
    exp: "How to create an optimal work environment.",
    desc: "This Playbook provides standards to create the highest possible levels of safety, health, wellbeing and to work responsibly & sustainably. It's split into how we enable and deliver work, and critical controls.",
    link: "https://laingorourke.sharepoint.com/sites/dep",
    guideLink: "https://vimeo.com/674325389/6417ec0cdc?share=copy",
  },
  {
    id: "6",
    pic: "/6.svg",
    name: "IGMS",
    exp: "A single source of truth for all LOR information.",
    desc: "The integrated group management system (iGMS) contains policies, procedures & guidance on how we work and learn and also acts as a knowledge network.",
    link: "https://laingorourke.sharepoint.com/sites/igms-eu/",
    guideLink: "https://laingorourke.sharepoint.com/sites/igms-eu/Pages/iGMSSupport.aspx",
  },
  {
    id: "7",
    pic: "/7.svg",
    name: "IT Self Service",
    exp: "Get IT support.",
    desc: "The IT Self Service portal is the system through which users can gain support with their communication and technology requirements.",
    link: "https://laingorourke.service-now.com/sp",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/Pages/IT_Self_Service_Now.aspx",
  },
  {
    id: "8",
    pic: "/8.svg",
    name: "Life at LOR Wellbeing Hub",
    exp: "Find emplyee discounts and tips on wellbeing.",
    desc: "Our Employee Discounts programme recognises the hard work of our people by providing a huge range of employee discounts and savings. ",
    link: "http://www.lifeatlor.com/",
    guideLink: "",
  },
  {
    id: "9",
    pic: "/9.svg",
    name: "Logos & brand guide",
    exp: "Our visual identity guidelines.",
    desc: "Find all of LOR's branding guidelines here, including speaking style, publication lay outs, graphics, fonts, logos and the brand colours.",
    link: "https://www.laingorourke.com/media/tzofdtre/0775_lor-identity-guidelines_edition-7-feb22.pdf",
    guideLink: "",
  },
  {
    id: "10",
    pic: "/10.svg",
    name: "Success Factors",
    exp: "Find performance management, goals, learning and other People activities.",
    desc: "Support core HR and payroll, talent management, HR analytics and workforce planning, and employee experience management.",
    link: "https://performancemanager5.successfactors.eu/sf/home?company=LORProd#Shell-home",
    guideLink: "",
  },
  {
    id: "11",
    pic: "/11.svg",
    name: "Time",
    exp: "Fill out your timesheet.",
    desc: "On or before payday each month a timesheet needs to be accurately completed and submitted within the TIME system (link below) by every monthly paid member of staff.",
    link: "http://time.web/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/Pages/Completing%20a%20timesheet.aspx",
  },
  {
    id: "12",
    pic: "/12.svg",
    name: "Yammer",
    exp: "An internal social media platform.",
    desc: "Yammer is the private and secure enterprise social network through which Laing O’Rourke employees connect and collaborate.",
    link: "https://www.yammer.com/laingorourke.com.au/#/home",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/ProcedureDocuments/Communications-Employee/Yammer_one_page_guide.pdf#search=yammer",
  },
  {
    id: "13",
    pic: "/13.svg",
    name: "Book hospitality",
    exp: "Book hospitality in our offices.",
    desc: "The site to go to to make hospitality requests such as coffee and food for workshops.",
    link: "https://hospitalityrequest.web/Home",
    guideLink: "",
  },
  {
    id: "14",
    pic: "/14.svg",
    name: "Book Travel",
    exp: "Book business travel.",
    desc: "Employees often have a requirement to travel on behalf of the company, this section of the iGMS contains information and guidance on how travel must be booked and processed.",
    link: "https://travelrequest.web/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/Pages/Travel_and_Hotel_Accommodation.aspx",
  },
  {
    id: "15",
    pic: "/15.svg",
    name: "Business Mileage",
    exp: "Claim back mileage used as part of work.",
    desc: "Find the details you need to claim back mileage.",
    link: "https://bmr.web/",
    guideLink: "",
  },
  {
    id: "16",
    pic: "/16.svg",
    name: "DOA Calculator",
    exp: "Quickly calculate the correct Approvers/Authoriser/Informeds.",
    desc: "Key corporate and project decisions can only be made by those named in LORs Corporate Delegation of Authority or Project Delegation of Authority. This shows who's accountable and responsible.",
    link: "https://doacalculator.web/Home",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/enterprise/Pages/Project_Delegation_of_Authority.aspx",
  },
  {
    id: "17",
    pic: "/17.svg",
    name: "Event booking",
    exp: "Book events.",
    desc: "Book events.",
    link: "https://eventbooking.web/",
    guideLink: "",
  },
  {
    id: "18",
    pic: "/18.svg",
    name: "Facilities request",
    exp: "For facilities queries regarding any permanent UK location.",
    desc: "Facilities Management is responsible for providing clean, safe, comfortable and efficient work spaces for staff across Laing O’Rourke’s offices and locations.",
    link: "http://facilitiesrequest.web/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/technicalinformation/Pages/FacilitiesManagement.aspx",
  },
  {
    id: "19",
    pic: "/19.svg",
    name: "GAP",
    exp: "Approve and authorise gateways.",
    desc: "The Gateway Authorisation Portal (GAP) enables efficient, semiautomated and confidential process for approval and authorisation of gateways and the storing of gateway evidence documents. ",
    link: "https://laingorourke.sharepoint.com/sites/igms-eu-gap",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/ProcedureDocuments/Gateway%20Governance%20for%20Projects/Gateway_Authorisation_Portal_User_Manual.pdf#search=gap",
  },
  {
    id: "20",
    pic: "/20.svg",
    name: "Gifts & conflicts",
    exp: "Register gifts you get.",
    desc: "This Register is designed to ensure that Laing O'Rourke is completely transparent in all of its business transactions.",
    link: "https://giftreg.web/TandC.aspx",
    guideLink: "",
  },
  {
    id: "21",
    pic: "/21.svg",
    name: "Impact",
    exp: "Record HS&E data and information.",
    desc: "​​​​​IMPACT​ is LORs HS&E data and information recording system, accessed via the internet. It acts as a single repository of HS&E data to allow consistent recording, action close-out, reporting, and analysis.",
    link: "https://impact.info-exchange.com/Default.aspx?ReturnUrl=%2fSecure%2fDefault.aspx",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/Impact.aspx",
  },
  {
    id: "22",
    pic: "/22.svg",
    name: "Internal Job Search",
    exp: "Find internal job vacancies.",
    desc: "Internal Job Board",
    link: "https://career.laingorourke.com/intranet/",
    guideLink: "",
  },
  {
    id: "23",
    pic: "/23.svg",
    name: "IShare",
    exp: "Share project materials and equipment. ",
    desc: "iSHARE is used to share materials and equipment in order to save money and waste. Whenever there is a need to acquire or dispose material and equipment, it might be done so with another site.",
    link: "http://ishare.web/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/iShare.aspx",
  },
  {
    id: "24",
    pic: "/24.svg",
    name: "LORIMedia",
    exp: "Get LOR approved images.",
    desc: "A site of LOR approved imagery taken from across our hubs and sites.",
    link: "https://www.lorimedia.co.uk/home.php",
    guideLink: "",
  },
  {
    id: "25",
    pic: "/25.svg",
    name: "Mobility and DTA application",
    exp: "Claim allowance when working far from home.",
    desc: "​​​​​​​Mobility Allowance is paid to site-based employees who are required to work at a site which is over 75km travel in each direction from their permanent home and who will be away for over four weeks.",
    link: "https://dtaandmobility.web/DTAAndMobilityDetails",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/Pages/Mobility_allowance.aspx",
  },
  {
    id: "26",
    pic: "/26.svg",
    name: "Lunar",
    exp: "Approve a contract review report.",
    desc: "Projects except joint ventures/alliances must gain approval of the Contract Review report within Lunar as part of Gateway 9. Please note that it no longer needs to be issued in GAP. ",
    link: "https://lunar.laingorourke.com.au/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/Gateway_9_Review.aspx",
  },
  {
    id: "27",
    pic: "/27.svg",
    name: "OHPortal",
    exp: "Assess an employees health and fitness for work. ",
    desc: "The Occupational Health Portal.",
    link: "https://www.myohportal.co.uk/suite/login/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/ProcedureDocuments/Ensuring%20an%20employee%20is%20fit%20for%20work/OH_Portal_User_Guide.pdf#search=occupational%20health%20portal",
  },
  {
    id: "28",
    pic: "/28.svg",
    name: "Overtime",
    exp: "The place to submit overtime.",
    desc: "On or before payday each month a timesheet needs to be accurately completed and submitted within the TIME system (link below) by every monthly paid member of staff.",
    link: "https://time.web/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/Pages/Completing%20a%20timesheet.aspx",
  },
  {
    id: "29",
    pic: "/29.svg",
    name: "Productivity Plus",
    exp: "Share ideas that might be useful in other projects.",
    desc: "Productivity+ provides a place for ideas to be harvested and be made visible in a shared dashboard . An idea in Manchester can be shared rapidly with a project in say Sydney and vice versa.",
    link: "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/Productivity_plus.aspx",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/Productivity_plus.aspx",
  },
  {
    id: "30",
    pic: "/30.svg",
    name: "Salesforce",
    exp: "Track customer relationships.",
    desc: "​​​​​​Salesforce is a cloud-based customer relationship and opportunity management system, which is used for tracking external opportunities from initial identification through to contract award.",
    link: "https://laingorourke.my.salesforce.com/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/Salesforce.aspx",
  },
  {
    id: "31",
    pic: "/31.svg",
    name: "SCM",
    exp: "Manage supply chain relationships.",
    desc: "Enabling Contractors and their Supply Chain partners to collaboratively manage supply chain relationships, record key compliance details and work closer together.",
    link: "https://ww2.coinsiportal.com/user/login.php?camefromurl=%2Fcontractor%2Findex.php%3Fsection%3Dhome%26subsection%3Dsummary",
    guideLink: "",
  },
  {
    id: "32",
    pic: "/32.svg",
    name: "Select Hire Desk",
    exp: "See and orde available plants.",
    desc: "Online plant order and hire tool. Users can quickly view lists of available plant, make requests for hire, and end hire periods.​",
    link: "http://select.web/",
    guideLink:
      "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/SelectHireDesk.aspx",
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
            className="w-9/12 md:w-5/12 h-12 p-4 rounded-l sb-grey"
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Search for tool or action e.g. timesheets"
          />
          <button className="w-3/12 md:w-24 h-12 p-2 rounded-r lor-yellow strong inline-block align-middle">
            Search
          </button>
        </div>
        <ul className="w-full md:w-[918px]">
          {filteredTools.map((tool) => (
            <li key={tool.id} className="box-content p-4 pl-0 pr-0 rounded mt-1">
              <div className="flex flex-col md:flex-row">
                <div className="min-w-36 w-full md:w-36 h-36 mr-10 flex flex-col rounded strong sb-grey justify-center">
                  <img className="min-w-20 h-20" src={tool.pic} alt="lorlearn" />
                  <div className="text-[15px] mt-2 flex justify-center uppercase text-center">
                    {tool.name}
                  </div>
                </div>
                <div>
                  <div className="text-[20px] mt-3 md:mt-0 font-bold">{tool.exp}</div>
                  <div className="text-[15px] leading-6 mt-2">{tool.desc}</div>
                  <div className="flex">
                    <a
                      href={tool.link}
                      target="_blank"
                      className={
                        (tool.link != "" ? "block " : "hidden ") +
                        "text-[14px] font-bold w-1/12 mt-4 min-w-24 md:w-24 h-9 p-2 rounded lor-yellow inline-block align-middle flex justify-center"
                      }
                    >
                      Go there
                    </a>
                    <a
                      href={tool.guideLink}
                      target="_blank"
                      className={
                        (tool.guideLink != "" ? "block " : "hidden ") +
                        "text-[14px] font-bold w-3/12 mt-4 min-w-32 md:w-32 ml-3 h-9 p-2 rounded lor-yellow inline-block align-middle flex justify-center"
                      }
                    >
                      Go to a guide
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
