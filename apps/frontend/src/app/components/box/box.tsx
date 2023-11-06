import { Vector3 } from "three";
import { Box } from "@shared/interfaces";

export function BoxComponent(props: { box: Box }) {
    return (
        <mesh
            scale={props.box.scale}
            position={new Vector3(props.box.x, props.box.y, props.box.z)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"#" + props.box.color} />
        </mesh>
    );
}

export default BoxComponent;
