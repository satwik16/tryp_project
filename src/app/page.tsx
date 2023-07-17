"use client";
import "../app/globals.css";

// @ts-ignore
import TableComponent from "./TableComponent.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  return <TableComponent />;
}
