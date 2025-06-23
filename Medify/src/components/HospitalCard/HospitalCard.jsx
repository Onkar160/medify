import { Box } from "@mui/material";
import Card from "./Card";
import Calender from "../Calender/Calender";
import { useState } from "react";

export default function HospitalCard({ type }) {
  const [open, setOpen] = useState(false);

  return (
    <article>
      <Box bgcolor="white" p={3} borderRadius={3}>
        <Card open={open} setOpen={setOpen} type={type} />
        <Box pt={3} display={open ? "block" : "none"}>
          <Calender />
        </Box>
      </Box>
    </article>
  );
}
