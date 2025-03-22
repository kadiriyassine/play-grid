import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import jsPDF from "jspdf";
import StepHeader from "@/components/StepHeader";

export default function MatchSchedule() {
    const router = useRouter();
    const { teams, matchType } = router.query;
    const parsedTeams = useMemo(() => (teams ? JSON.parse(teams as string) : []), [teams]);
    const [schedule, setSchedule] = useState<{ round: number; home: string; away: string }[]>([]);

    const generateSchedule = useCallback(() => {
        const newSchedule = [];
        const totalRounds = matchType === "Home & Away" ? (parsedTeams.length - 1) * 2 : parsedTeams.length - 1;
        const totalTeams = parsedTeams.length;
        const tempTeams = [...parsedTeams];

        for (let round = 1; round <= totalRounds; round++) {
            for (let i = 0; i < totalTeams / 2; i++) {
                const home = tempTeams[i];
                const away = tempTeams[totalTeams - 1 - i];

                if (matchType === "Home & Away" && round % 2 === 0) {
                    newSchedule.push({ round, home: away, away: home });
                } else {
                    newSchedule.push({ round, home, away });
                }
            }
            tempTeams.splice(1, 0, tempTeams.pop());
        }
        setSchedule(newSchedule);
    }, [matchType, parsedTeams]);

    useEffect(() => {
        if (parsedTeams.length > 0 && schedule.length === 0) {
            generateSchedule();
        }
    }, [parsedTeams, schedule.length, generateSchedule]);

    const handleRegenerate = () => {
        const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);
        const shuffledTeams = shuffleArray([...parsedTeams]);
        const newSchedule = [];
        const totalRounds = matchType === "Home & Away" ? (shuffledTeams.length - 1) * 2 : shuffledTeams.length - 1;
        const totalTeams = shuffledTeams.length;
        const tempTeams = [...shuffledTeams];

        for (let round = 1; round <= totalRounds; round++) {
            for (let i = 0; i < totalTeams / 2; i++) {
                const home = tempTeams[i];
                const away = tempTeams[totalTeams - 1 - i];

                if (matchType === "Home & Away" && round % 2 === 0) {
                    newSchedule.push({ round, home: away, away: home });
                } else {
                    newSchedule.push({ round, home, away });
                }
            }
            tempTeams.splice(1, 0, tempTeams.pop());
        }

        setSchedule(shuffleArray(newSchedule));
    };

    const handleSaveScheduleAsPDF = () => {
        const doc = new jsPDF();
        let yOffset = 30;

        // Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.setTextColor(0, 51, 102);
        doc.text("Tournament Match Schedule", 105, 20, { align: "center" });

        const rounds = [...new Set(schedule.map((m) => m.round))];

        rounds.forEach((round) => {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text(`Round ${round}`, 14, yOffset);
            yOffset += 8;

            // Table Header
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text("#", 14, yOffset);
            doc.text("Home", 24, yOffset);
            doc.text("VS", 100, yOffset);
            doc.text("Away", 114, yOffset);
            yOffset += 6;

            // Match Rows
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            schedule
                .filter((match) => match.round === round)
                .forEach((match, index) => {
                    doc.text(`${index + 1}`, 14, yOffset);
                    doc.text(match.home, 24, yOffset);
                    doc.text("VS", 100, yOffset);
                    doc.text(match.away, 114, yOffset);
                    yOffset += 6;

                    if (yOffset > 270) {
                        doc.addPage();
                        yOffset = 30;
                    }
                });

            yOffset += 6;
        });

        doc.save("match-schedule.pdf");
    };

    return (
        <>
            <section className="container mx-auto py-10 px-6 bg-gray-50 min-h-screen">
                <div className="flex justify-between">
                    <button onClick={() => {
                        console.log("Regenerate Schedule button clicked");
                        handleRegenerate();
                    }} className="bg-gray-200 px-6 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-300 transition">
                        Regenerate Schedule
                    </button>
                </div>
                <StepHeader
                    currentStep={3}
                    title="Match Schedule Overview"
                    subtitle="Preview the automatically generated schedule"
                />

                <div className="bg-blue-100 text-blue-700 p-4 rounded-md mt-4 text-center">
                    ⚠️ All teams will play against each other at least once, with balanced home and away distributions.
                </div>

                <div className="mt-8 bg-white shadow-md p-6 rounded-lg max-w-3xl mx-auto">
                    {schedule.length > 0 ? (
                        [...new Set(schedule.map((m) => m.round))].map((round) => (
                            <div key={round} className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Round {round}</h3>
                                <div className="border border-gray-200 rounded-lg p-4 mt-2">
                                    {schedule
                                        .filter((match) => match.round === round)
                                        .map((match, index) => (
                                            <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                                                <span className="text-gray-900">{match.home} (Home)</span>
                                                <span className="text-gray-600">VS</span>
                                                <span className="text-gray-900">{match.away} (Away)</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No matches generated yet.</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white shadow-md p-4 rounded-lg text-center">
                        <h4 className="text-lg font-semibold text-gray-900">🔄 Match Distribution</h4>
                        <p className="text-gray-600 text-sm">Even distribution of home/away matches for all teams</p>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-lg text-center">
                        <h4 className="text-lg font-semibold text-gray-900">⚖️ Fixture Balance</h4>
                        <p className="text-gray-600 text-sm">All teams play equal number of matches</p>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-lg text-center">
                        <h4 className="text-lg font-semibold text-gray-900">🔄 Mirror Matches</h4>
                        <p className="text-gray-600 text-sm">Home/away fixtures properly mirrored</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-between max-w-3xl mx-auto">
                    <button onClick={() => router.push("/teams-setup")} className="bg-gray-200 px-6 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-300 transition">
                        ← Previous Step
                    </button>
                    <button onClick={handleSaveScheduleAsPDF} className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-md">
                        Save Schedule
                    </button>
                </div>

                <div className="mt-10 text-center text-gray-500 text-sm">
                    <button className="text-gray-500 hover:text-gray-700">View Documentation</button> •
                    <button className="text-gray-500 hover:text-gray-700 ml-2">Contact Support</button>
                </div>
            </section>
        </>
    );
}