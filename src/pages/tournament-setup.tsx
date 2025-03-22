import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import StepHeader from "@/components/StepHeader";

export default function TournamentSetup() {
    const router = useRouter();
    const [tournamentFormat, setTournamentFormat] = useState("Group Phase");
    const [matchType, setMatchType] = useState("Single Leg");
    const [numGroups, setNumGroups] = useState(4);
    const [teamsPerGroup, setTeamsPerGroup] = useState(4);
    const totalTeams = numGroups * teamsPerGroup;

    useEffect(() => {
        if (!tournamentFormat) {
            router.push("/");
        }
    }, [tournamentFormat, router]);

    const handleProceedToTeamSetup = () => {
        router.push({
            pathname: "/teams-setup",
            query: {
                format: tournamentFormat,
                matchType,
                groups: numGroups,
                teamsPerGroup,
            },
        });
    };

    return (
        <>
            <section className="container mx-auto py-10 px-6 bg-gray-50 min-h-screen">
                <StepHeader
                    currentStep={1}
                    title="Tournament Format"
                    subtitle="Choose the format and configuration of your tournament"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {[
                        { type: "Group Phase", description: "Teams compete in groups, playing against each other for points." },
                        { type: "Knockout", description: "Direct elimination matches until the final." },
                        { type: "Combined", description: "Group phase followed by knockout rounds." }
                    ].map(({ type, description }) => (
                        <button
                            key={type}
                            className={`w-full border rounded-lg p-4 text-left transition ${tournamentFormat === type
                                ? "border-blue-500 bg-blue-100 text-blue-700 shadow-md"
                                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                            onClick={() => setTournamentFormat(type)}
                        >
                            <span className="font-semibold">{type}</span>
                            <p className="text-sm text-gray-600 mt-1">{description}</p>
                        </button>
                    ))}
                </div>

                {/* Match Configuration */}
                <div className="bg-white shadow-sm p-6 rounded-lg mt-8 max-w-2xl mx-auto border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Match Configuration</h3>

                    {/* Match Format Selection */}
                    <div className="mt-4 flex space-x-3">
                        {["Single Leg", "Home & Away"].map((type) => (
                            <button
                                key={type}
                                className={`px-6 py-2 rounded-lg text-sm font-medium border transition ${matchType === type
                                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                                onClick={() => setMatchType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Number of Groups & Teams Per Group */}
                    <div className="mt-6 flex flex-col gap-6">
                        {[
                            { label: "Number of Groups", value: numGroups, setValue: setNumGroups },
                            { label: "Teams per Group", value: teamsPerGroup, setValue: setTeamsPerGroup }
                        ].map(({ label, value, setValue }) => (
                            <div key={label} className="flex items-center justify-between">
                                <span className="text-gray-700 font-medium">{label}</span>
                                <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg border border-gray-300 w-28 justify-between">
                                    <button
                                        onClick={() => setValue(value - 1)}
                                        disabled={value <= 1}
                                        className="px-3 py-1 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
                                    >
                                        −
                                    </button>
                                    <div className="text-blue-600 font-bold text-lg">
                                        {value}
                                    </div>
                                    <button
                                        onClick={() => setValue(value + 1)}
                                        className="px-3 py-1 text-gray-500 hover:text-gray-700"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Format Summary */}
                <div className="bg-white shadow-sm p-6 rounded-lg mt-6 max-w-2xl mx-auto border border-gray-200 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Format Summary</h3>
                        <ul className="text-gray-600 mt-2 text-sm">
                            <li>• {numGroups} groups with {teamsPerGroup} teams each</li>
                            <li>• {matchType} matches in group stage</li>
                            <li>• {totalTeams} Teams Total</li>
                        </ul>
                    </div>
                    <div className="text-gray-900 font-semibold text-lg">{totalTeams} Teams Total</div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between max-w-2xl mx-auto">
                    <button onClick={() => router.push("/")} className="bg-gray-200 px-6 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-300 transition shadow-sm">
                        Back
                    </button>
                    <button onClick={handleProceedToTeamSetup} className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-md">
                        Continue to Team Setup
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-10 text-center text-gray-500 text-sm">
                    Step 1 of 3: Format Selection
                </div>
            </section>
        </>
    );
}