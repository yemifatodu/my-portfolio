import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import { adidasSalesConfig } from "../data/projects/adidassales.config";

export default function AdidasSalesPage() {
  return <ProjectTemplate project={adidasSalesConfig} />;
}
