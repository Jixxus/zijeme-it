import {
    AppShell,
    Button,
    Group,
    MantineProvider,
    createTheme,
} from "@mantine/core";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Logo from "./components/logo/logo";

import "@mantine/core/styles.css";
import Box from "./components/box/box";

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
        <MantineProvider theme={theme}>
            <AppShell header={{ height: 60 }}>
                <AppShell.Header>
                    <Group h="100%" px="md" justify="space-between">
                        <Logo
                            imageSrc="https://cdn.sewio.net/wp-content/uploads/2018/05/Sewio_Symbol_2018-02-200x200.png"
                            text="Žijeme IT"
                        ></Logo>
                        <Button data-cy="click-button">Click!</Button>
                    </Group>
                </AppShell.Header>
                <AppShell.Main className="h-[100dvh]">
                    <Canvas>
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            decay={0}
                            intensity={Math.PI}
                        />
                        <pointLight
                            position={[-10, -10, -10]}
                            decay={0}
                            intensity={Math.PI}
                        />
                        <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} />
                        <OrbitControls></OrbitControls>
                    </Canvas>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;