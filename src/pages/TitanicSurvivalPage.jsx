import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import { titanicSurvivalConfig } from "../data/projects/titanicSurvival.config";
export default function TitanicSurvivalPage() {
  return <ProjectTemplate project={titanicSurvivalConfig} />;
}
