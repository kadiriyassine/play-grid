import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Meta from "@/components/Meta";

interface LayoutProps {
    children: React.ReactNode;
    meta?: React.ReactNode; // Optional custom meta override
}

export default function Layout({ children, meta }: LayoutProps) {
    return (
        <>
            {meta ?? <Meta />}
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}