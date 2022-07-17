import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
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