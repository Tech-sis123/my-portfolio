"use client";

import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus,
  SiGnubash, SiNodedotjs, SiFlask, SiMongodb,
  SiPostgresql, SiRedis, SiDocker, SiGraphql, SiGit,
  SiGithub, SiFigma, SiNotion, SiVercel, SiSupabase,
  SiLatex, SiArduino, SiEspressif,
  SiTrello, SiAsana, SiGoogledrive, SiBasecamp,
  SiCanva, SiGooglesheets, SiGoogleforms,
} from "react-icons/si";
import {
  FaNetworkWired, FaMicrochip, FaDatabase, FaTerminal,
  FaServer, FaCodeBranch, FaKey, FaTasks, FaSitemap,
  FaFileExcel, FaFilePowerpoint,
} from "react-icons/fa";

type IconEntry = { icon: React.ElementType; color: string };

// Exact brand colors
const iconMap: Array<{ match: (s: string) => boolean } & IconEntry> = [
  { match: s => s.includes("python"), icon: SiPython, color: "#3776AB" },
  { match: s => s.includes("javascript"), icon: SiJavascript, color: "#F7DF1E" },
  { match: s => s.includes("typescript"), icon: SiTypescript, color: "#3178C6" },
  { match: s => s.includes("c / c++") || s === "c++", icon: SiCplusplus, color: "#00599C" },
  { match: s => s.includes("bash"), icon: SiGnubash, color: "#4EAA25" },
  { match: s => s.includes("node"), icon: SiNodedotjs, color: "#339933" },
  { match: s => s.includes("express"), icon: FaServer, color: "#f5f3ef" },
  { match: s => s.includes("flask"), icon: SiFlask, color: "#f5f3ef" },
  { match: s => s.includes("mongo"), icon: SiMongodb, color: "#47A248" },
  { match: s => s.includes("postgres"), icon: SiPostgresql, color: "#4169E1" },
  { match: s => s.includes("redis"), icon: SiRedis, color: "#DC382D" },
  { match: s => s.includes("docker"), icon: SiDocker, color: "#2496ED" },
  { match: s => s.includes("graphql"), icon: SiGraphql, color: "#E10098" },
  { match: s => s === "git", icon: SiGit, color: "#F05032" },
  { match: s => s.includes("github"), icon: SiGithub, color: "#f5f3ef" },
  { match: s => s.includes("figma"), icon: SiFigma, color: "#F24E1E" },
  { match: s => s.includes("notion"), icon: SiNotion, color: "#f5f3ef" },
  { match: s => s.includes("linear"), icon: FaCodeBranch, color: "#5E6AD2" },
  { match: s => s.includes("render"), icon: FaServer, color: "#46E3B7" },
  { match: s => s.includes("vercel"), icon: SiVercel, color: "#f5f3ef" },
  { match: s => s.includes("supabase"), icon: SiSupabase, color: "#3ECF8E" },
  { match: s => s.includes("latex") || s.includes("overleaf"), icon: SiLatex, color: "#008080" },
  { match: s => s.includes("arduino"), icon: SiArduino, color: "#00979D" },
  { match: s => s.includes("esp32"), icon: SiEspressif, color: "#E7352C" },
  { match: s => s.includes("jwt"), icon: FaKey, color: "#D63AFF" },
  { match: s => s === "dsa" || s.includes("data structures"), icon: FaSitemap, color: "#00C9A7" },
  { match: s => s.includes("sql"), icon: FaDatabase, color: "#F29111" },
  { match: s => s.includes("trello"),       icon: SiTrello,      color: "#0052CC" },
  { match: s => s.includes("asana"),        icon: SiAsana,       color: "#F06A6A" },
  { match: s => s.includes("google drive"), icon: SiGoogledrive, color: "#4285F4" },
  { match: s => s.includes("google sheets"), icon: SiGooglesheets, color: "#34A853" },
  { match: s => s.includes("google forms"), icon: SiGoogleforms, color: "#7248B9" },
  { match: s => s.includes("monday"),       icon: FaTasks,       color: "#FF3D57" },
  { match: s => s.includes("basecamp"),     icon: SiBasecamp,    color: "#1D2D35" },
  { match: s => s.includes("canva"),        icon: SiCanva,       color: "#00C4CC" },
  { match: s => s.includes("excel"),        icon: FaFileExcel,   color: "#217346" },
  { match: s => s.includes("powerpoint"),   icon: FaFilePowerpoint, color: "#D24726" },
  {
    match: s => s.includes("rest") || s.includes("websocket") || s.includes("ci/cd"),
    icon: FaNetworkWired, color: "#22d3ee"
  },
  {
    match: s => s.includes("fpga") || s.includes("verilog") || s.includes("vhdl") ||
      s.includes("pcb") || s.includes("circuit") || s.includes("matlab") ||
      s.includes("de10") || s.includes("quartus") || s.includes("max30") ||
      s.includes("3d mod") || s.includes("chip"), icon: FaMicrochip, color: "#fb923c"
  },
  {
    match: s => s.includes("xgboost") || s.includes("scikit") || s.includes("shap") ||
      s.includes("nlp") || s.includes("signal"), icon: FaTerminal, color: "#c084fc"
  },
];

export default function SkillIcon({ skill }: { skill: string }) {
  const s = skill.toLowerCase();
  const entry = iconMap.find(e => e.match(s));
  if (!entry) return null;
  const Icon = entry.icon;
  return <Icon style={{ display: "inline-block", flexShrink: 0, color: entry.color }} />;
}
