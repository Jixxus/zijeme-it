import { ThreeElements, useFrame } from "@react-three/fiber";
import THREE from "three";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import axios from "axios";
import { Api } from "@shared/interfaces";

export function Box(props: ThreeElements["mesh"]) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    useFrame((state, delta) => (meshRef.current.rotation.x += delta));

    const query = useQuery({
        queryKey: ["api"],
        refetchInterval: 1000,
        queryFn: ({ signal }) => axios.get<Api>("/api", { signal }),
    });

    if (query.isLoading) {
        return (
            <mesh {...props} ref={meshRef} scale={1}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"blue"} />
            </mesh>
        );
    }

    if (query.isError) {
        return (
            <mesh {...props} ref={meshRef} scale={1}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
        );
    }

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={query.data?.data.message || 1}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    );
}

export default Box;
