import {useSelector} from "react-redux";
import {DirectionProvider, MantineProvider} from "@mantine/core";
import Layout from "routes";
import {RootState} from "redux/store"; // Adjust the import path if necessary
import {theme} from "./styles/theme";
import {messages} from "./translations";
import {IntlProvider} from "react-intl";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/core/styles.css";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";

function App() {
    /* ----------------------------- Redux Dispatch ---------------------------- */
    const settings = useSelector((state: RootState) => state.settings);

    return (
        <>
            <IntlProvider
                locale={settings?.lang}
                messages={messages[settings?.lang as "ar" | "en"]}
            >
                <ToastContainer
                    position={settings.lang === "ar" ? "top-left" : "top-right"}
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={settings.lang === "ar" ? true : false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='colored'
                />
                <DirectionProvider>
                    <MantineProvider
                        theme={theme}
                        defaultColorScheme={settings?.theme === "light" ? "light" : "dark"}
                    >
                        <Layout/>
                    </MantineProvider>
                </DirectionProvider>
            </IntlProvider>
        </>
    );
}

export default App;
