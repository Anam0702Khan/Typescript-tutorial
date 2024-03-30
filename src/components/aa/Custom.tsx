import React from "react";
import { Greet } from "../Greet";

export const Custom = (props : React.ComponentProps<typeof Greet>) => {
    return(
        <div>
            {props.name}
        </div>
    )
}  // when u want to other component's props in to other components...