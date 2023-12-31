import {
    AppShell,
    Button,
    Group,
    MantineProvider,
    createTheme,
} from "@mantine/core";
import Logo from "./components/logo/logo";
import { IconCake } from "@tabler/icons-react";
import { Notifications, notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Home from "./routes/home/home";
import Login from "./routes/login/login";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={"/home"}></Navigate>,
    },
    {
        path: "/home",
        element: <Home></Home>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
]);

export function App() {
    const theme = createTheme({
        colors: {
            sewio: [
                "#e1f3e7",
                "#b4e1c4",
                "#82cd9c",
                "#50b974",
                "#2baa57",
                "#059b39",
                "#049333",
                "#04892c",
                "#037f24",
                "#016d17",
            ],
        },
        primaryColor: "sewio",
    });

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <Notifications />
                <AppShell header={{ height: 60 }}>
                    <AppShell.Header>
                        <Group h="100%" px="md" justify="space-between">
                            <Logo
                                imageSrc="https://cdn.sewio.net/wp-content/uploads/2018/05/Sewio_Symbol_2018-02-200x200.png"
                                text="Žijeme IT"
                            ></Logo>
                            <Button
                                leftSection={<IconCake size={14} />}
                                variant="default"
                                onClick={() =>
                                    notifications.show({
                                        withBorder: true,
                                        color: "red",
                                        title: "Do you want cake?",
                                        message:
                                            "Cake is a lie. Cake is a lie. Cake is a lie.",
                                    })
                                }
                            >
                                Click for CAKE!
                            </Button>
                        </Group>
                    </AppShell.Header>
                    <AppShell.Main className="h-[100dvh]">
                        <RouterProvider router={router} />
                    </AppShell.Main>
                </AppShell>
            </MantineProvider>
        </QueryClientProvider>
    );
}

export default App;
