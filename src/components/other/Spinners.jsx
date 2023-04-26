import * as React from "react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

export const Spinners = () => {
  return (
    <BeatLoader
      cssOverride={{
        "text-align": "center",
        "margin-top": "200px",
      }}
      margin={0}
      size={42}
      color="#1ea182"
    />
  );
};
