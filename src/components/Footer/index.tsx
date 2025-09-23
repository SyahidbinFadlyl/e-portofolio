import { Box, IconButton, Stack, Typography } from "@mui/material";

export default function Footer() {
    return <Box
        sx={{

            pb: { xs: 16, sm: 0 },
            fontSize: "0.875rem",
            color: "text.secondary",
        }}
    >
        <Typography sx={{
            fontSize: "0.875rem",
            color: "text.secondary",
        }}>
            {'Web design from '}
            <span
                onClick={() => {
                    window?.open("https://brittanychiang.com/");
                }}
                style={{
                    color: '#e2e8f0',
                    fontWeight: 500,
                    cursor: "pointer"
                }}
            >
                brittanychiang.com
            </span>
            {/* {` ( I don't know how to design web yet). `} */}
            {/* <br /> */}
            {'. Coded in '}
            <span
                onClick={() => {
                    window?.open("https://code.visualstudio.com/");
                }}
                style={{
                    color: '#e2e8f0',
                    fontWeight: 500,
                    cursor: "pointer"
                }}
            >
                Visual Studio Code
            </span>
            {' by myself. Built with '}
            <span
                onClick={() => {
                    window?.open("https://nextjs.org/");
                }}
                style={{
                    color: '#e2e8f0',
                    fontWeight: 500,
                    cursor: "pointer"
                }}
            >
                Next.js
            </span>
            {' and '}
            <span
                onClick={() => {
                    window?.open("https://mui.com/");
                }}
                style={{
                    color: '#e2e8f0',
                    fontWeight: 500,
                    cursor: "pointer"
                }}
            >
                MUI
            </span>
            {','}
            {/* <br /> */}
            {' deployed with '}
            <span
                onClick={() => {
                    window?.open("https://vercel.com/");
                }}
                style={{
                    color: '#e2e8f0',
                    fontWeight: 500,
                    cursor: "pointer"
                }}
            >
                Vercel
            </span>
            {'.'}
        </Typography>

    </Box>
}