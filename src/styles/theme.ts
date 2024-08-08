import {createTheme, rem} from "@mantine/core";

export const theme: ReturnType<typeof createTheme> = createTheme({
    fontFamily: "Space Grotesk, sans-serif",
    colors: {
        // Add your colors here
        // crete theme from #F62615
        reddish: [
            "#F62615",
            "#FF7F50",
            "#FF6347",
            "#FF4500",
            "#FF0000",
            "#DC143C",
            "#B22222",
            "#8B0000",
            "#800000",
            "#8B4513",
        ],
    },

    primaryColor: "reddish",
    defaultRadius: "md",
    autoContrast: true,

    shadows: {
        md: "1px 1px 3px rgba(0, 0, 0, .25)",
        xl: "5px 5px 5px 5px rgba(0, 0, 0, .25)",
    },

    headings: {
        fontFamily: "Roboto, sans-serif",
        sizes: {
            h1: {fontSize: rem(36)},
        },
    },
});
