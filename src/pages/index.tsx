import Meta from "@/components/Meta";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <>
            <section className="bg-white text-center py-16 px-6 sm:px-12">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Football Tournament Generator
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        A powerful frontend-only tournament management system built with modern web technologies
                    </p>

                    {/* Technology Stack */}
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        {["Next.js", "React", "Tailwind CSS", "Storybook", "Jest"].map((tech, index) => (
                            <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Hero Image */}
                    <div className="mt-10 flex justify-center">
                        <img src="/images/hero.jpg" alt="Tournament Bracket UI" className="rounded-lg shadow-lg w-full max-w-3xl" />
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="bg-gray-100 py-16 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { title: "Tournament Format", description: "Choose between group phase, knockout, or combined formats with flexible match configurations." },
                            { title: "Team Management", description: "Enter team names manually or use smart placeholders with seamless data flow." },
                            { title: "Smart Scheduling", description: "Balanced match generation with proper home-and-away distribution." }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow text-left">
                                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Improvements */}
            <section className="bg-white py-16 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Recent Improvements</h2>
                    <div className="mt-6 text-left max-w-2xl mx-auto">
                        {[
                            { title: "Enhanced Match Scheduling", description: "Implemented balanced scheduling algorithm ensuring fair distribution of home and away matches." },
                            { title: "Unbiased Team Shuffling", description: "Advanced shuffling mechanism to prevent predictable patterns in team matchups." },
                            { title: "Smart Navigation", description: "Automatic redirection system when required tournament data is missing or incomplete." }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 mb-4">
                                <span className="text-green-500 text-xl">✔</span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Roadmap */}
            <section className="bg-gray-100 py-16 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Development Roadmap</h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { title: "Match Scheduling", description: "Adding support for match dates and venue management." },
                            { title: "Bracket Visualization", description: "Interactive tournament brackets for knockout rounds." },
                            { title: "UX Refinements", description: "Streamlining the tournament creation workflow." }
                        ].map((roadmap, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow text-left">
                                <h3 className="text-lg font-bold text-gray-900">{roadmap.title}</h3>
                                <p className="text-gray-600 mt-2">{roadmap.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}