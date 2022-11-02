import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Hollys from "../images/hollys.jpg";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="" />

      <Avatar
        alt="Travis Howard"
        src="../images/hollys.jpg"
        sx={{ width: "2em" }}
      />
      <Avatar alt="Cindy Baker" src="" />
    </Stack>
  );
}
