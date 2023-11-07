import { Box } from "@shared/interfaces";
import { BoxComponent } from "../box/box";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";
import { firestore } from "../../../firebase";

/* eslint-disable-next-line */
export interface BoxesProps {}

export function BoxesComponent(props: BoxesProps) {
    const [value, loading, error] = useCollection<Box>(
        collection(firestore, "boxes") as any,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading || error) {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <></>;
    }

    return value?.docs.map((box) => (
        <BoxComponent key={box.id} box={box.data()}></BoxComponent>
    ));
}

export default BoxesComponent;
