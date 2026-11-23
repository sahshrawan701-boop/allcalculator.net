"use client";

import React from "react";
import GoogleAdContainer, {
  GoogleAdContainerProps,
} from "./GoogleAdContainer";

export default function GoogleAdBanner(props: GoogleAdContainerProps) {
  return <GoogleAdContainer variant="leaderboard" {...props} />;
}
