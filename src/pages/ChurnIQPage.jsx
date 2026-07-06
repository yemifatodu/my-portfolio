import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import { churniqConfig } from "../data/projects/churniq.config";

export default function ChurnIQPage() {
  return <ProjectTemplate project={churniqConfig} />;
}
