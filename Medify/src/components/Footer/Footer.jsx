import { Container, Box } from "@mui/material";
import MedifyLogo from "../../assets/medify_logo.png";

export default function Footer() {
    return (
        <footer>
            <Container disableGutters sx={{bgcolor: "#1B3C74"}}>
                <Box>
                    <img src={MedifyLogo} alt="Medify Logo" />
                </Box>
            </Container>
        </footer>
    )
}