import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const App = () => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    "Welcome to MAINFRAME TERMINAL v2.0",
    "Type HELP for commands",
  ]);
  const [cobolInput, setCobolInput] = useState("");
  const [translatedJS, setTranslatedJS] = useState("");

  // COBOL translator logic
  const handleTranslate = () => {
    let result = cobolInput;
    result = result.replace(/MOVE (\d+) TO (\w+)/g, "let $2 = $1;");
    result = result.replace(/MOVE (\w+) TO (\w+)/g, "let $2 = $1;");
    result = result.replace(/DISPLAY '([^']+)'/g, "console.log('$1');");
    result = result.replace(/IF (\w+) > (\d+) THEN/g, "if ($1 > $2) {");
    result = result.replace(/END-IF/g, "}");
    result = result.replace(/ADD (\w+) TO (\w+)/g, "$2 += $1;");
    result = result.replace(/SUBTRACT (\w+) FROM (\w+)/g, "$2 -= $1;");
    setTranslatedJS(result || "// No translation rules matched");
  };

  // Terminal commands
  const handleTerminalCommand = async (e) => {
    if (e.key === "Enter" && terminalInput.trim()) {
      const cmd = terminalInput.trim().toUpperCase();
      let response;

      switch (cmd) {
        case "HELP":
          response = "Available: LIST, SHOW SKILLS, STATUS, CLEAR, HELP";
          break;
        case "LIST":
          try {
            const res = await fetch(
              "https://api.github.com/users/yourusername/repos",
            );
            const data = await res.json();
            response = data
              .map((repo, i) => `${i + 1}. ${repo.name}`)
              .join("\n");
          } catch {
            response = "Error fetching repos. Set your GitHub username.";
          }
          break;
        case "SHOW SKILLS":
          response =
            "COBOL, JCL, CICS, DB2, VSAM | Node.js, TypeScript, React, Docker, AWS";
          break;
        case "STATUS":
          response = "API Metrics: RPS: 1,200 | Memory: 84MB | Latency: 45ms";
          break;
        case "CLEAR":
          setTerminalOutput([]);
          setTerminalInput("");
          return;
        default:
          response = `Unknown command: ${cmd}. Type HELP for options.`;
      }

      setTerminalOutput([...terminalOutput, `> ${cmd}`, response]);
      setTerminalInput("");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen overflow-auto">
      {/* HERO SECTION - Your style */}
      <div className="text-center pt-12 pb-8">
        <div className="text-white text-6xl md:text-8xl font-bold">
          PARVEEN SAHRAWAT
        </div>
        <div className="text-cyan-200 text-2xl md:text-4xl mt-3">
          Mainframe + Node.js Full-Stack Engineer
        </div>

        {/* Floating Photo */}
        <div
          className="flex flex-col items-center justify-center mt-8"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <img
            className="rounded-full h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-400/30"
            src="/myphoto.jpeg"
            alt="Parveen Sahrawat"
          />
          <div className="text-white text-lg md:text-2xl mt-3">
            Senior Software Consultant{" "}
            <span className="text-cyan-400">@ Vedsar India Pvt. Ltd.</span>
          </div>
          <div className="text-cyan-200/70 text-sm md:text-base mt-1">
            Bridging Legacy Mainframe & Modern Node.js Ecosystems
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-cyan-200 flex flex-row gap-6 md:gap-8 justify-center mt-6">
          <a
            href="https://www.linkedin.com/in/parveen-sahrawat-1723b485/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-10 h-10 md:w-14 md:h-14 hover:scale-110 transition-transform cursor-pointer hover:text-white" />
          </a>
          <a
            href="https://github.com/Parveen539"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-10 h-10 md:w-14 md:h-14 hover:scale-110 transition-transform cursor-pointer hover:text-white" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61560514198422"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-10 h-10 md:w-14 md:h-14 hover:scale-110 transition-transform cursor-pointer hover:text-white" />
          </a>
        </div>
      </div>

      {/* 2. TECH RADAR */}
      <section className="max-w-6xl mx-auto px-4 my-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Tech Radar
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="border border-cyan-500/30 p-6 rounded-lg flex-1 max-w-md bg-gray-900/50 backdrop-blur">
            <h3 className="font-bold text-xl mb-4 text-center text-cyan-300">
              Legacy Core
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["COBOL", "JCL", "CICS", "DB2", "VSAM"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-cyan-300 rounded-lg text-sm font-mono border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-cyan-500/30 p-6 rounded-lg flex-1 max-w-md bg-gray-900/50 backdrop-blur">
            <h3 className="font-bold text-xl mb-4 text-center text-cyan-300">
              Modern Stack
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Node.js", "TypeScript", "React", "Docker", "AWS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-cyan-900/30 text-cyan-200 rounded-lg text-sm font-mono border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS - Updated */}
      <section className="max-w-6xl mx-auto px-4 my-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Key Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pure Mainframe Project */}
          <div className="border-l-4 border-cyan-400 p-5 bg-gray-900/50 rounded-r backdrop-blur">
            <h4 className="font-bold text-lg text-white">
              Pure Mainframe Project
            </h4>
            <div className="text-gray-300 space-y-1 text-sm mt-2">
              <p>
                <span className="text-cyan-300">Project:</span> Telephone
                Banking System
              </p>
              <p>
                <span className="text-cyan-300">Scale:</span> Serving 2 million
                customers
              </p>
              <p>
                <span className="text-cyan-300">Tech:</span> COBOL, CICS, DB2,
                VSAM
              </p>
              <p>
                <span className="text-cyan-300">Impact:</span> ⚡ 24/7
                availability for banking operations
              </p>
            </div>
          </div>

          {/* Integration Project */}
          <div className="border-l-4 border-cyan-400 p-5 bg-gray-900/50 rounded-r backdrop-blur">
            <h4 className="font-bold text-lg text-white">
              Integration Project
            </h4>
            <div className="text-gray-300 space-y-1 text-sm mt-2">
              <p>
                <span className="text-cyan-300">Project:</span> Property &
                Casualty Insurance
              </p>
              <p>
                <span className="text-cyan-300">Scale:</span> Serving 13 US
                States
              </p>
              <p>
                <span className="text-cyan-300">Architecture:</span> Mainframe +
                Modern Hybrid
              </p>
              <p>
                <span className="text-cyan-300">Tech:</span> Mainframe, Node.js,
                Snowflake, DB2, PostgreSQL
              </p>
              <p>
                <span className="text-cyan-300">Integration:</span> Seamless
                data flow across all platforms
              </p>
            </div>
          </div>

          {/* Pure Node.js Projects - First Row */}
          <div className="border-l-4 border-cyan-400 p-5 bg-gray-900/50 rounded-r backdrop-blur">
            <h4 className="font-bold text-lg text-white">
              Pure Node.js Project
            </h4>
            <div className="text-gray-300 space-y-1 text-sm mt-2">
              <p>
                <span className="text-cyan-300">Project:</span> HRMS System
              </p>
              <p>
                <span className="text-cyan-300">Client:</span> Autonomous Body
                Under Government of India
              </p>
              <p>
                <span className="text-cyan-300">Tech:</span> Node.js, Express,
                MongoDB/PostgreSQL
              </p>
              <p>
                <span className="text-cyan-300">Impact:</span> 👥 Streamlined HR
                operations for government office
              </p>
            </div>
          </div>

          <div className="border-l-4 border-cyan-400 p-5 bg-gray-900/50 rounded-r backdrop-blur">
            <h4 className="font-bold text-lg text-white">
              Pure Node.js Project
            </h4>
            <div className="text-gray-300 space-y-1 text-sm mt-2">
              <p>
                <span className="text-cyan-300">Project:</span> Packers and
                Movers Platform
              </p>
              <p>
                <span className="text-cyan-300">Type:</span> Full-stack
                Application
              </p>
              <p>
                <span className="text-cyan-300">Tech:</span> Node.js, React,
                MongoDB
              </p>
              <p>
                <span className="text-cyan-300">Features:</span> 🚚 Booking,
                tracking, inventory management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE DASHBOARD */}
      <section className="max-w-6xl mx-auto px-4 my-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Live API Metrics
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-gray-900/50 backdrop-blur px-8 py-6 rounded-xl border border-cyan-500/30 text-center min-w-[150px]">
            <div className="text-4xl font-bold text-cyan-400">1,200</div>
            <div className="text-gray-400 text-sm mt-1">Requests/sec</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur px-8 py-6 rounded-xl border border-cyan-500/30 text-center min-w-[150px]">
            <div className="text-4xl font-bold text-green-400">84MB</div>
            <div className="text-gray-400 text-sm mt-1">Memory Heap</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur px-8 py-6 rounded-xl border border-cyan-500/30 text-center min-w-[150px]">
            <div className="text-4xl font-bold text-purple-400">45ms</div>
            <div className="text-gray-400 text-sm mt-1">Avg Latency</div>
          </div>
        </div>
      </section>

      {/* 5. COBOL-TO-JS TRANSLATOR */}
      <section className="max-w-4xl mx-auto px-4 my-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          COBOL → JS Translator
        </h2>
        <div className="bg-gray-900/50 backdrop-blur p-6 rounded-xl border border-cyan-500/30">
          <textarea
            className="w-full h-24 font-mono p-3 bg-gray-800 text-cyan-300 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            placeholder="Paste COBOL (e.g., MOVE 100 TO WS-COUNT)"
            value={cobolInput}
            onChange={(e) => setCobolInput(e.target.value)}
          />
          <button
            onClick={handleTranslate}
            className="mt-3 bg-cyan-500 hover:bg-cyan-600 text-gray-950 px-6 py-2 rounded-lg transition font-semibold"
          >
            Translate
          </button>
          {translatedJS && (
            <pre className="mt-4 bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-700">
              {translatedJS}
            </pre>
          )}
        </div>
      </section>

      {/* 6. 3270 TERMINAL SIMULATOR */}
      <section className="max-w-4xl mx-auto px-4 my-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Green-Screen Simulator
        </h2>
        <div className="bg-black border border-cyan-500/30 p-5 rounded-xl font-mono min-h-[250px] shadow-lg shadow-cyan-500/10">
          <div className="text-cyan-500/50 text-sm mb-2">
            MAINFRAME TERMINAL v2.0
          </div>
          <div className="whitespace-pre-wrap text-cyan-400">
            {terminalOutput.map((line, i) => (
              <div
                key={i}
                className={
                  line.startsWith("> ") ? "text-cyan-300" : "text-cyan-400/80"
                }
              >
                {line}
              </div>
            ))}
          </div>
          <div className="flex items-center mt-3">
            <span className="text-cyan-400 mr-2">&gt;</span>
            <input
              className="flex-1 bg-transparent text-cyan-300 outline-none font-mono caret-cyan-400"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyDown={handleTerminalCommand}
              placeholder="Type HELP and press Enter"
              autoFocus
            />
            <span className="animate-pulse text-cyan-400">▌</span>
          </div>
        </div>
      </section>

      {/* 7. PHILOSOPHY */}
      <section className="max-w-4xl mx-auto px-4 my-12 pb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Enterprise Mindset
        </h2>
        <div className="bg-gray-900/50 backdrop-blur p-8 rounded-xl border border-cyan-500/30 space-y-4">
          <p className="border-l-4 border-cyan-400 pl-4 text-cyan-200/90 text-lg italic">
            "I treat every API transaction with the ACID rigor of a DB2 commit."
          </p>
          <p className="border-l-4 border-cyan-400 pl-4 text-cyan-200/90 text-lg italic">
            "Zero-downtime discipline from CICS to Node.js clusters."
          </p>
          <p className="border-l-4 border-cyan-400 pl-4 text-cyan-200/90 text-lg italic">
            "Writing Node.js with mainframe reliability."
          </p>
        </div>
      </section>

      {/* Floating Animation CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default App;
