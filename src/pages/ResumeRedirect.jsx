import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
    window.location.href = "/Yemi_Fatodu_CV.pdf";
  }, []);
  return null;
}
