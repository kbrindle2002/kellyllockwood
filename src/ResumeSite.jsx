
import { useState } from "react";

export default function ResumeSite() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="p-6 shadow-lg flex justify-between items-center">
        <h1 className="text-3xl font-bold">Kelly L. Lockwood</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 border rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <section className="p-6" id="about">
        <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
        <p>
          Results-driven IT Professional with over 15 years of experience in system administration, network
          engineering, and endpoint support. Proven track record in reducing resolution time, boosting system uptime,
          and managing large-scale deployments across on-prem, hybrid, and cloud infrastructures. Skilled in Microsoft
          Entra ID, Windows Server, M365, PowerShell, and ITSM tools. Committed to secure, efficient IT operations and
          user-centered service delivery.
        </p>
      </section>

      <section className="p-6" id="skills">
        <h2 className="text-2xl font-semibold mb-2">Core Competencies</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Windows Server (2012–2022), DNS, DHCP, GPO, M365, Azure AD / Entra ID</li>
          <li>VPNs, Firewalls (FortiGate), TCP/IP, SNMP, Patch Management</li>
          <li>Tier II/III Escalations, ServiceNow, Remedy, Imaging (Ghost, MDT)</li>
          <li>PowerShell, MDT, Windows ADK, Group Policy Automation</li>
          <li>SOPs, Technical Documentation, End-user Training, KPI Monitoring</li>
        </ul>
      </section>

      <section className="p-6" id="experience">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold">Desktop Support Engineer (Contract)</h3>
          <p className="italic">SC Johnson – Sturtevant, WI | Mar 2024 – May 2024</p>
          <ul className="list-disc ml-6">
            <li>Resolved 25+ technical issues per week with 98% first-call resolution rate.</li>
            <li>Ensured 100% compliance with monthly security patch rollouts across 200+ endpoints.</li>
            <li>Delivered desk-side support and training to 40+ users.</li>
            <li>Documented all issues in ServiceNow to improve knowledge base.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">Founder / Systems Consultant</h3>
          <p className="italic">Brindle IT Solutions LLC – Mayfield Heights, OH | 2019 – Present</p>
          <ul className="list-disc ml-6">
            <li>Completed 30+ client projects involving Microsoft Entra ID, M365, and Windows 11 migrations.</li>
            <li>Reduced client downtime by 45% through proactive maintenance and automation scripts.</li>
            <li>Designed and deployed Windows 10 IoT LTSC environment for manufacturing client.</li>
            <li>Maintained 100% SLA compliance with ticket handling using Synchro MSP.</li>
          </ul>
        </div>
      </section>

      <section className="p-6" id="contact">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p><strong>Address:</strong> 1137 Park Ave, Racine, WI 53403</p>
        <p><strong>Phone:</strong> (262) 417-2461</p>
        <p><strong>Email:</strong> kbrindle2002@yahoo.com</p>
        <p><strong>LinkedIn:</strong> <a className="underline text-blue-400" href="https://linkedin.com/in/klockwok" target="_blank">linkedin.com/in/klockwok</a></p>
      </section>
    </div>
  );
}
