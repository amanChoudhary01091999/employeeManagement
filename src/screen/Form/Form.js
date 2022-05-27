import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, Outlet } from "react-router-dom";
import { ArrowRightAlt, Logout } from "@mui/icons-material";

const pages = [
    "Background verification",
    "Covid Form",
    "Gratuity Form",
    "Employees provident fund",
    "Reference Check Form",
    "Code of conduct",
];

const links = [
    "bgv-form",
    "covid-form",
    "gratuity-form",
    "epf-form",
    "refcheck-form",
    "codeofconduct-form",
];

const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const link = window.location.href.split("/").pop();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
        switch (page) {
            case pages[0]:
                onClickBGV();
                break;
            case pages[1]:
                onClickCovid();
                break;
            case pages[2]:
                onClickGF();
                break;
            case pages[3]:
                onClickEPF();
                break;
            case pages[4]:
                onClickRCAF();
                break;
            case pages[5]:
                onClickCOC();
                break;
            default:
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onClickBGV = () => {
        navigate("/form/bgv-form");
    };
    const onClickCovid = () => {
        navigate("/form/covid-form");
    };
    const onClickEPF = () => {
        navigate("/form/epf-form");
    };
    const onClickRCAF = () => {
        navigate("/form/refcheck-form");
    };
    const onClickGF = () => {
        navigate("/form/gratuity-form");
    };
    const onClickCOC = () => {
        navigate("/form/codeofconduct-form");
    };

    const handleLogout = () => {
        const id = localStorage.getItem("id");
        navigate("/user-login/" + id);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("id");
    };

    return (
        <div>
            <AppBar position="sticky" color="inherit" elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                padding: 4,
                                borderRadius: 1,
                                ml: 0,
                                backgroundColor: "#1976d2",
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 1000,
                                letterSpacing: ".1rem",
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Form Navigator
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            NDHGO
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page, index) => (
                                <Button
                                    key={page}
                                    onClick={() => handleCloseNavMenu(page)}
                                    variant={
                                        link === links[index]
                                            ? "contained"
                                            : "outlined"
                                    }
                                    sx={
                                        link === links[index]
                                            ? {
                                                  my: 2,
                                                  color: "white",
                                                  fontSize: 15,
                                                  display: "block",
                                                  textTransform: "none",
                                              }
                                            : {
                                                  my: 2,
                                                  color: "black",
                                                  fontSize: 15,
                                                  display: "block",
                                                  textTransform: "none",
                                              }
                                    }
                                >
                                    {page}
                                    {index !== 5 && (
                                        <ArrowRightAlt
                                            style={{ marginLeft: 10 }}
                                        />
                                    )}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0, paddingLeft: 4 }}>
                            <Button variant="outlined" onClick={handleLogout}>
                                Logout
                                <span style={{ marginLeft: 5 }}>
                                    <Logout />
                                </span>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </div>
    );
};
export default ResponsiveAppBar;
