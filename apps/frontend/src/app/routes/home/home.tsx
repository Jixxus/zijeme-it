import { Canvas } from "@react-three/fiber";
import BoxesComponent from "../../components/boxes/boxes";
import { OrbitControls } from "@react-three/drei";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { Navigate } from "react-router";
import { Loader } from "@mantine/core";

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <Loader></Loader>
            </div>
        );
    }

    if (!user || error) {
        return <Navigate to="/login"></Navigate>;
    }

    return (
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
            <BoxesComponent></BoxesComponent>
            <OrbitControls></OrbitControls>
        </Canvas>
    );
}

export default Home;
