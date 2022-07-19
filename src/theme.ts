import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto-condensed";
import "@fontsource/oswald";
import "@fontsource/roboto";

export default extendTheme({
    fonts: {
        nav_font: "Roboto Condensed",
        text_font: "Oswald",
        card_font: "Roboto"
    },
    colors: {
        primary: "#27C5B0",
        text_color: "#ACA6A6",
        date_color: "#AAB2BD",
        description_color: "#3C3C3C"
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
            },
        })
    }
})