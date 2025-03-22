import Head from "next/head";

interface MetaProps {
    title?: string;
    description?: string;
    image?: string;
}

export default function Meta({
    title = "PlayGrid - Football Tournament Generator",
    description = "Generate and manage football tournaments with ease using PlayGrid.",
    image = "/images/hero.jpg",
}: MetaProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="PlayGrid Team" />
            <meta name="keywords" content="football, tournament, generator, scheduler, web app, nextjs, react" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}