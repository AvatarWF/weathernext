import { ReactElement } from "react";
import Header from "../header";

interface ILayout {
    children: ReactElement  
}

export default function Layout(props: ILayout){
    return(
        <>
            <main className=" dark:bg-gray-800 p-5">
                {props.children}
            </main>
        </>
    )
}