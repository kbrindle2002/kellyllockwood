export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="text-center py-12 bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-900">Kelly L. Lockwood</h1>
        <p className="text-lg mt-2 text-blue-700">Systems Engineer | Resume Site</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">About Me</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          Experienced IT Professional with 15+ years in systems administration, network engineering, and endpoint support.
          Passionate about delivering secure, scalable solutions across cloud and hybrid environments.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Skills</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Windows Server, Active Directory, Entra ID</li>
          <li>VPN, Firewalls, TCP/IP, DNS, DHCP</li>
          <li>PowerShell, Group Policy, Microsoft 365</li>
          <li>ServiceNow, Synchro MSP, Endpoint Imaging</li>
        </ul>
      </section>

      <section className="text-center py-6">
        <a
          href="/kelly-lockwood-resume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📄 Download My Resume
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-4 border-t mt-10">
        © {new Date().getFullYear()} Kelly L. Lockwood · Racine, WI
      </footer>
    </main>
  );
}
