interface StepHeaderProps {
    currentStep: number;
    title: string;
    subtitle?: string;
}

export default function StepHeader({ currentStep, title, subtitle }: StepHeaderProps) {
    const allSteps = ["Format Selection", "Team Setup", "Match Preview", "Finalize"];

    return (
        <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="text-sm text-gray-500 font-medium mb-2">
                {allSteps.map((step, index) => (
                    <span key={index}>
                        <span className={index + 1 === currentStep ? "text-blue-600 font-semibold" : "text-gray-500"}>
                            {index + 1} {step}
                        </span>
                        {index < allSteps.length - 1 && <span className="mx-1 text-gray-400">›</span>}
                    </span>
                ))}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
    );
}