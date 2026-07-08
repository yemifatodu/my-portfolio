import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import { glucoseiqConfig } from "../data/projects/glucoseiq.config";

export default function GlucoseIQPage() {
  return <ProjectTemplate project={glucoseiqConfig} />;
}