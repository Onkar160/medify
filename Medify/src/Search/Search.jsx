import NavBar from "../components/NavBar/NavBar";
import FAQs from "../components/Sections/FAQs/FAQ";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";
import Footer from "../components/Footer/Footer";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import { Box, Container, Typography, Stack } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import Banner from "../assets/appointment_banner.png";
import { GoVerified } from "react-icons/go";
import MyContext from "./MyContext";

export default function Search() {
  const [params, setParams] = useSearchParams();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const timing = useMemo(
    () => [
      { period: "Morning", timings: ["11:30 AM"] },
      {
        period: "Afternoon",
        timings: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      },
      {
        period: "Evening",
        timings: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      },
    ],
    []
  );

  useEffect(() => {
    // console.log(params.get("city"), params.get("state"));
    const state = params.get("state");
    const city = params.get("city");
    if (state && city) {
      setSelectedState(state);
      setSelectedCity(city);
    }
  }, [params]);

  return (
    <MyContext.Provider value={{ timing }}>
      <div>
        <NavBar background="white" />
        <Box
          sx={{
            background:
              "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
          }}
        >
          <Box
            width="100%"
            height={{ xs: "260px", md: "110px" }}
            sx={{
              background: "linear-gradient(to right, #2AA7FF, #0C8CE5)",
              display: "flex",
              justifyContent: "center",
            }}
            position="relative"
            borderRadius="0px 0px 16px 16px"
          >
            <Box
              position="absolute"
              top={55}
              width="82%"
              backgroundColor="white"
              p={3}
              borderRadius={4}
            >
              <SearchHospital />
            </Box>
          </Box>
        </Box>

        <Container
          disableGutters
          maxWidth={false}
          sx={{
            px: { xs: 5, md: 15 },
            pt: 20,
            background:
              "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
            pb: 10,
          }}
        >
          <Stack spacing={1} pb={5}>
            <Typography variant="h1" fontSize={28} fontWeight={500}>
              12 medical centers available in the alaska
            </Typography>
            <Typography
              color="#787887"
              variant="h5"
              fontSize={18}
              display="flex"
              alignItems="center"
            >
              <GoVerified fontSize="25" style={{ marginRight: "20px" }} />
              Book appointments with minimum wait-time & verified doctor details
            </Typography>
          </Stack>
          <Box
            width="100%"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
            }}
          >
            {/* <Box
            width={{ sm: "100%", md: "70%" }}
            backgroundColor="white"
            height="fit-content"
            p={3}
            borderRadius={6}
          >
            <Typography variant="h4" fontWeight={500}>
              Select state and city
            </Typography>
          </Box> */}
            <Box width={{ sm: "100%", md: "70%" }}>
              <HospitalCard type="Hospital Card" />
            </Box>
            <Box width={{ sm: "100%", md: "30%" }}>
              <Box component="img" src={Banner} alt="Banner" width="100%" />
            </Box>
          </Box>
        </Container>

        <FAQs />
        <DownloadApp />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}
