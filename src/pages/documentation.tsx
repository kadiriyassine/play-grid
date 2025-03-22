import Head from "next/head";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Documentation() {
    return (
        <>
            <Head>
                <title>Documentation - PlayGrid</title>
            </Head>

            <Header />

            <section className="container mx-auto py-12 px-6 min-h-screen">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">Documentation</h1>
                    <article className="text-gray-800 space-y-10">
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-900">Overview</h2>
                            <p className="mt-2">
                                PlayGrid is a dynamic tool for generating football tournament schedules, offering a variety of formats such as league, knockout, and hybrid stages.
                                Designed for coaches, event organizers, and enthusiasts, it streamlines the process of team input, match generation, and schedule export.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-blue-900">Installation</h2>
                            <p className="mt-2">To install and run PlayGrid locally, ensure you have Node.js and npm installed. Then run the following commands:</p>
                            <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mt-2">
                                <code>git clone https://github.com/your-username/play-grid.git{'\n'}cd play-grid{'\n'}npm install{'\n'}npm run dev</code>
                            </pre>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-blue-900">Configuration</h2>
                            <p className="mt-2">
                                PlayGrid supports URL-based configuration. You can pre-fill the number of teams and groups via query parameters.
                            </p>
                            <div className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mt-2">
                                <code>http://localhost:3000/teams-setup?groups=4&amp;teamsPerGroup=4</code>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-blue-900">Usage</h2>
                            <ol className="list-decimal list-inside mt-2 space-y-1">
                                <li>Input your team names manually or use the auto-generate function.</li>
                                <li>Select the tournament format: League, Knockout, or Combined.</li>
                                <li>Generate the schedule and preview all rounds.</li>
                                <li>Export the schedule as a downloadable PDF.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-blue-900">Advanced Features</h2>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Balanced home/away match distribution</li>
                                <li>Automatic mirroring of fixtures for fairness</li>
                                <li>PDF export with clear formatting and layout</li>
                                <li>Smart bracket and group generation logic</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-blue-900">FAQ</h2>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <h3 className="font-semibold">Can I save tournaments for later?</h3>
                                    <p>Not yet. Currently, PlayGrid is a stateless app. Local storage and user accounts are on the roadmap.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Does it support mobile?</h3>
                                    <p>Yes. The interface is responsive and works across mobile, tablet, and desktop.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Can I customize the match rules?</h3>
                                    <p>Not in this version. A rule customization panel is being considered for future development.</p>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </section>

            <Footer />
        </>
    );
}