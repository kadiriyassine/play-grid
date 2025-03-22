import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import StepHeader from "@/components/StepHeader";

export default function TeamsSetup() {
    const router = useRouter();
    const { teamsPerGroup, groups } = router.query as { teamsPerGroup?: string; groups?: string };

    // Calculate the total number of teams from query parameters
    const totalTeams = teamsPerGroup && groups ? parseInt(teamsPerGroup) * parseInt(groups) : 4;

    const [teams, setTeams] = useState<string[]>([]);

    useEffect(() => {
        setTeams(Array.from({ length: totalTeams }, () => ""));
    }, [totalTeams]);

    const handleTeamChange = (index: number, value: string) => {
        const updatedTeams = [...teams];
        updatedTeams[index] = value;
        setTeams(updatedTeams);
    };

    const useDefaultNames = () => {
        setTeams(Array.from({ length: totalTeams }, (_, i) => `Team ${i + 1}`));
    };

    const handleContinue = () => {
        router.push({
            pathname: "/match-schedule",
            query: { teams: JSON.stringify(teams) },
        });
    };

    return (
        <>
            <section className="container mx-auto py-10 px-6 bg-gray-50 min-h-screen">
                <StepHeader
                    currentStep={2}
                    title="Team Setup"
                    subtitle="Enter your team names or use our smart placeholders"
                />

                {/* Teams Configuration */}
                <div className="bg-white shadow-md p-6 rounded-lg max-w-3xl mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900">Teams Configuration</h3>
                        <button
                            onClick={useDefaultNames}
                            className="text-blue-600 text-sm flex items-center hover:text-blue-800 transition"
                        >
                            🔄 Use Default Names
                        </button>
                    </div>

                    {/* Team Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {teams.map((team, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700 text-sm font-medium">
                                    {index + 1}
                                </span>
                                <input
                                    type="text"
                                    value={team}
                                    onChange={(e) => handleTeamChange(index, e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between max-w-3xl mx-auto">
                    <button onClick={() => router.push("/tournament-setup")} className="bg-gray-200 px-6 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-300 transition">
                        ← Previous Step
                    </button>
                    <button onClick={handleContinue} className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-md">
                        Continue to Schedule →
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-10 text-center text-gray-500 text-sm">
                    <button className="text-gray-500 hover:text-gray-700">Help</button> •
                    <button className="text-gray-500 hover:text-gray-700 ml-2">Reset</button>
                </div>
            </section>
        </>
    );
}
