import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto-condensed";

export default extendTheme({
    fonts: {
        nav_font: "Roboto Condensed",
    },
    colors: {
        primary: "#27C5B0",
    },
    styles: {
        global: (props: any)=>({
            "*": {
                margin:0,
                padding:0,
                outline:0,
                boxSizing:"border-box"
            },
            "html, body": {
                backgroundColor: "white",
            }
        })
    }
})