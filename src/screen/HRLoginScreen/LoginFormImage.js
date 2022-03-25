import { Stack, Typography } from "@mui/material";
import React from "react";

function LoginFormImage() {
    return (
        <div>
            <Stack direction={"column"} margin={2}>
                <Typography variant="h6">
                    India's No-1 App To Sell Online
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="p">
                    NDHGO platform enables any business small or large to go
                    online in less than a minute. NDHGO aims to provide online
                    store to India's 60 Million small businesses.
                    <br />
                    The platform allows you to set up and run your online store
                    and empowers you to compete with the e-commerce giants. You
                    can create your online store from your phone with a
                    professional-looking product catalog. You can share a link
                    of your store easily with your customers through trending
                    Social Media platforms and WhatsApp. If you are an
                    individual entrepreneur and urge to sell your products
                    online, then your best and wise choice would be NDHGO, which
                    is a free platform!
                </Typography>
            </Stack>
        </div>
    );
}

export default LoginFormImage;
