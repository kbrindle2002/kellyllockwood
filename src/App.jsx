export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800 font-sans">
      <section className="text-center py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md">
        <h1 className="text-5xl font-extrabold tracking-tight">Kelly L. Lockwood</h1>
        <p className="text-xl mt-2 font-light">Systems Engineer | Resume Site</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-300 pb-2">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I’m an experienced IT professional with 15+ years of deep expertise in systems administration, network infrastructure,
          and enterprise endpoint security. Known for leading with precision, resolving high-impact issues, and deploying scalable cloud-first environments.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-sm rounded-xl">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc list-inside">
            <li>Windows Server (2012–2022)</li>
            <li>Microsoft Entra ID / Active Directory</li>
            <li>PowerShell scripting</li>
            <li>Microsoft 365 Administration</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>VPN / Firewalls / TCP/IP</li>
            <li>ServiceNow / Remedy / Synchro MSP</li>
            <li>Endpoint Imaging & Deployment</li>
            <li>Cloud / Hybrid Infrastructure</li>
          </ul>
        </div>
      </section>

      <section className="text-center py-10">
        <a
          href="/kelly-lockwood-resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white text-lg font-medium rounded shadow hover:bg-blue-800 transition"
        >
          📄 Download Resume
        </a>
      </section>

      <footer className="text-center text-sm text-gray-600 py-6 border-t">
        &copy; {new Date().getFullYear()} Kelly L. Lockwood · Built with React + Tailwind · Hosted on Azure
      </footer>
    </main>
  );
}
