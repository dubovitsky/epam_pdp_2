import React, { useContext } from 'react';
import { Context } from "context/Context.js";

export default function Results () {
    const [context] = useContext(Context);
    const { total } = context;

    return (
        <div>{total} moview found</div>
    )
}
