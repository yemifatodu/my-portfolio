import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import { arbitrageiqConfig } from "../data/arbitrageiq.config";

export default function ArbitrageIQPage() {
  return <ProjectTemplate project={arbitrageiqConfig} />;
}
