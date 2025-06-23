import { Stack, Box, Typography, Button } from "@mui/material";

export default function Timings({ period, timings }) {
  return (
    <Stack sx={{ p: 3 }} borderBottom="2px solid #ededf2">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 6 }}
        alignItems="center"
      >
        <Typography variant="p" fontSize="18px" color="#414146" minWidth="90px">
          {period}
        </Typography>
        <Box
          display="flex"
          gap={3}
          alignItems="center"
          flexWrap="wrap"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {timings.map((time) => {
            return (
              <Button variant="outlined" key={time}>
                <Typography
                  variant="p"
                  fontSize="18px"
                  color="#2AA7FF"
                  fontWeight={400}
                >
                  {time}
                </Typography>
              </Button>
            );
          })}
        </Box>
      </Stack>
    </Stack>
  );
}
