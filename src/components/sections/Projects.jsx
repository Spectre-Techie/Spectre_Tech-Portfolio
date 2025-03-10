import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () =>{
    return  <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured projects 
            </h2>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4">ResourceLink Platform</h3>
                    <p className="text-gray-400 mb-4" >
                     A community Resource Sharing Platform that emphasizes on sharing resources and building connections and also enables you to lend, borrow, and share resources with people around you.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Html", "CSS", "Bootsrap", "Javascript", "Node.js"].map((tech,key)=> (
                            <span key={key}  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡</a>
                    </div>
                    {/* <div>
                        <img className="  max-w-76 max-h-100  hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" src="images\resourcelink project.jpg" alt="ResourceLink Project" />
                    </div> */}
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4">E-Commerce Web App</h3>
                    <p className="text-gray-400 mb-4" >
                     Full stack e-commerce with modern UI , secure payment integration and customizable product inventory.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React js",  "Tailwind CSS", "Php", "PostgreSQL"].map((tech,key)=> (
                            <span key={key}  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡</a>
                    </div>
                    {/* <div>
                        <img className="  max-w-76 max-h-100  hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" src="images\resourcelink project.jpg" alt="ResourceLink Project" />
                    </div> */}
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4">Real-Time Chat App </h3>
                    <p className="text-gray-400 mb-4" >
                    Scalable chat platform supporting real-time messaging, presence and group chat features.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React js", "Tail", "Bootsrap", "Javascript", "Node.js"].map((tech,key)=> (
                            <span key={key}  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡</a>
                    </div>
                    {/* <div>
                        <img className="  max-w-76 max-h-100  hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" src="images\resourcelink project.jpg" alt="ResourceLink Project" />
                    </div> */}
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4">Dev Connect Platform</h3>
                    <p className="text-gray-400 mb-4" >
                    A Web App that opens room for develpers to connect, collaborate, ask and answer each other's questions, solve tasks and help each other.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React js", "Tailwind CSS", "Php", "MongoDB"].map((tech,key)=> (
                            <span key={key}  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡</a>
                    </div>
                    {/* <div>
                        <img className="  max-w-76 max-h-100  hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" src="images\resourcelink project.jpg" alt="ResourceLink Project" />
                    </div> */}
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}