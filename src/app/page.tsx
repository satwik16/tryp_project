"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "../app/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

// @ts-ignore
import TableComponent from "./TableComponent.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  return <TableComponent />;
}
