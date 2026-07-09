import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate"; // Adjust path if needed
import { arbitrageiqConfig } from "../../../data/projects/arbitrageiq.config"; // Adjust path if needed

export default function ArbitrageIQPage() {
  return <ProjectTemplate project={arbitrageiqConfig} />;
}
