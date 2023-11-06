import { Box } from "@shared/interfaces";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BoxComponent } from "../box/box";

/* eslint-disable-next-line */
export interface BoxesProps {}

export function BoxesComponent(props: BoxesProps) {
    const query = useQuery({
        queryKey: ["boxes"],
        refetchInterval: 1000,
        queryFn: ({ signal }) => axios.get<Box[]>("/api/boxes", { signal }),
    });

    if (query.isLoading || query.isError) {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <></>;
    }

    return query.data?.data.map((box) => (
        <BoxComponent box={box}></BoxComponent>
    ));
}

export default BoxesComponent;
