"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface Element {
  number: number;
  symbol: string;
  name: string;
  category: ElementCategory;
  mass: number;
  config: string;
  melt: number | null;
  boil: number | null;
  density: number | null;
  discovered: number | string;
  group: number | null;
  period: number;
  state: "Gas" | "Solid" | "Liquid";
}

type ElementCategory =
  | "alkali-metal"
  | "alkaline-earth"
  | "transition-metal"
  | "post-transition"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide";

// ─── Category Styles ───────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<
  ElementCategory,
  { gradient: string; label: string; dot: string }
> = {
  "alkali-metal": {
    gradient: "from-red-500 to-red-600",
    label: "Alkali Metals",
    dot: "bg-red-500",
  },
  "alkaline-earth": {
    gradient: "from-amber-400 to-amber-500",
    label: "Alkaline Earth Metals",
    dot: "bg-amber-400",
  },
  "transition-metal": {
    gradient: "from-violet-500 to-violet-700",
    label: "Transition Metals",
    dot: "bg-violet-500",
  },
  "post-transition": {
    gradient: "from-slate-500 to-slate-600",
    label: "Post-Transition Metals",
    dot: "bg-slate-500",
  },
  metalloid: {
    gradient: "from-teal-500 to-teal-600",
    label: "Metalloids",
    dot: "bg-teal-500",
  },
  nonmetal: {
    gradient: "from-emerald-500 to-emerald-600",
    label: "Nonmetals",
    dot: "bg-emerald-500",
  },
  halogen: {
    gradient: "from-cyan-500 to-cyan-600",
    label: "Halogens",
    dot: "bg-cyan-500",
  },
  "noble-gas": {
    gradient: "from-pink-500 to-pink-600",
    label: "Noble Gases",
    dot: "bg-pink-500",
  },
  lanthanide: {
    gradient: "from-purple-500 to-purple-700",
    label: "Lanthanides",
    dot: "bg-purple-500",
  },
  actinide: {
    gradient: "from-fuchsia-500 to-fuchsia-700",
    label: "Actinides",
    dot: "bg-fuchsia-500",
  },
};

// ─── Element Data ──────────────────────────────────────────────────────────────

const ELEMENTS: Element[] = [
  // Period 1
  {
    number: 1,
    symbol: "H",
    name: "Hydrogen",
    category: "nonmetal",
    mass: 1.008,
    config: "1s¹",
    melt: -259.16,
    boil: -252.87,
    density: 0.08988,
    discovered: 1766,
    group: 1,
    period: 1,
    state: "Gas",
  },
  {
    number: 2,
    symbol: "He",
    name: "Helium",
    category: "noble-gas",
    mass: 4.0026,
    config: "1s²",
    melt: -272.2,
    boil: -268.93,
    density: 0.1785,
    discovered: 1868,
    group: 18,
    period: 1,
    state: "Gas",
  },
  // Period 2
  {
    number: 3,
    symbol: "Li",
    name: "Lithium",
    category: "alkali-metal",
    mass: 6.94,
    config: "[He] 2s¹",
    melt: 180.54,
    boil: 1342,
    density: 0.534,
    discovered: 1817,
    group: 1,
    period: 2,
    state: "Solid",
  },
  {
    number: 4,
    symbol: "Be",
    name: "Beryllium",
    category: "alkaline-earth",
    mass: 9.0122,
    config: "[He] 2s²",
    melt: 1287,
    boil: 2470,
    density: 1.85,
    discovered: 1798,
    group: 2,
    period: 2,
    state: "Solid",
  },
  {
    number: 5,
    symbol: "B",
    name: "Boron",
    category: "metalloid",
    mass: 10.81,
    config: "[He] 2s² 2p¹",
    melt: 2076,
    boil: 3927,
    density: 2.34,
    discovered: 1808,
    group: 13,
    period: 2,
    state: "Solid",
  },
  {
    number: 6,
    symbol: "C",
    name: "Carbon",
    category: "nonmetal",
    mass: 12.011,
    config: "[He] 2s² 2p²",
    melt: 3550,
    boil: 4027,
    density: 2.267,
    discovered: "Ancient",
    group: 14,
    period: 2,
    state: "Solid",
  },
  {
    number: 7,
    symbol: "N",
    name: "Nitrogen",
    category: "nonmetal",
    mass: 14.007,
    config: "[He] 2s² 2p³",
    melt: -210.01,
    boil: -195.79,
    density: 1.251,
    discovered: 1772,
    group: 15,
    period: 2,
    state: "Gas",
  },
  {
    number: 8,
    symbol: "O",
    name: "Oxygen",
    category: "nonmetal",
    mass: 15.999,
    config: "[He] 2s² 2p⁴",
    melt: -218.79,
    boil: -182.95,
    density: 1.429,
    discovered: 1774,
    group: 16,
    period: 2,
    state: "Gas",
  },
  {
    number: 9,
    symbol: "F",
    name: "Fluorine",
    category: "halogen",
    mass: 18.998,
    config: "[He] 2s² 2p⁵",
    melt: -219.67,
    boil: -188.11,
    density: 1.696,
    discovered: 1886,
    group: 17,
    period: 2,
    state: "Gas",
  },
  {
    number: 10,
    symbol: "Ne",
    name: "Neon",
    category: "noble-gas",
    mass: 20.18,
    config: "[He] 2s² 2p⁶",
    melt: -248.59,
    boil: -246.08,
    density: 0.9002,
    discovered: 1898,
    group: 18,
    period: 2,
    state: "Gas",
  },
  // Period 3
  {
    number: 11,
    symbol: "Na",
    name: "Sodium",
    category: "alkali-metal",
    mass: 22.99,
    config: "[Ne] 3s¹",
    melt: 97.72,
    boil: 883,
    density: 0.968,
    discovered: 1807,
    group: 1,
    period: 3,
    state: "Solid",
  },
  {
    number: 12,
    symbol: "Mg",
    name: "Magnesium",
    category: "alkaline-earth",
    mass: 24.305,
    config: "[Ne] 3s²",
    melt: 650,
    boil: 1091,
    density: 1.738,
    discovered: 1808,
    group: 2,
    period: 3,
    state: "Solid",
  },
  {
    number: 13,
    symbol: "Al",
    name: "Aluminum",
    category: "post-transition",
    mass: 26.982,
    config: "[Ne] 3s² 3p¹",
    melt: 660.32,
    boil: 2519,
    density: 2.7,
    discovered: 1825,
    group: 13,
    period: 3,
    state: "Solid",
  },
  {
    number: 14,
    symbol: "Si",
    name: "Silicon",
    category: "metalloid",
    mass: 28.085,
    config: "[Ne] 3s² 3p²",
    melt: 1414,
    boil: 3265,
    density: 2.329,
    discovered: 1854,
    group: 14,
    period: 3,
    state: "Solid",
  },
  {
    number: 15,
    symbol: "P",
    name: "Phosphorus",
    category: "nonmetal",
    mass: 30.974,
    config: "[Ne] 3s² 3p³",
    melt: 44.15,
    boil: 280.5,
    density: 1.82,
    discovered: 1669,
    group: 15,
    period: 3,
    state: "Solid",
  },
  {
    number: 16,
    symbol: "S",
    name: "Sulfur",
    category: "nonmetal",
    mass: 32.06,
    config: "[Ne] 3s² 3p⁴",
    melt: 115.21,
    boil: 444.72,
    density: 2.07,
    discovered: "Ancient",
    group: 16,
    period: 3,
    state: "Solid",
  },
  {
    number: 17,
    symbol: "Cl",
    name: "Chlorine",
    category: "halogen",
    mass: 35.45,
    config: "[Ne] 3s² 3p⁵",
    melt: -101.5,
    boil: -34.04,
    density: 3.214,
    discovered: 1774,
    group: 17,
    period: 3,
    state: "Gas",
  },
  {
    number: 18,
    symbol: "Ar",
    name: "Argon",
    category: "noble-gas",
    mass: 39.95,
    config: "[Ne] 3s² 3p⁶",
    melt: -189.34,
    boil: -185.85,
    density: 1.784,
    discovered: 1894,
    group: 18,
    period: 3,
    state: "Gas",
  },
  // Period 4
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    category: "alkali-metal",
    mass: 39.098,
    config: "[Ar] 4s¹",
    melt: 63.38,
    boil: 759,
    density: 0.862,
    discovered: 1807,
    group: 1,
    period: 4,
    state: "Solid",
  },
  {
    number: 20,
    symbol: "Ca",
    name: "Calcium",
    category: "alkaline-earth",
    mass: 40.078,
    config: "[Ar] 4s²",
    melt: 842,
    boil: 1484,
    density: 1.54,
    discovered: 1808,
    group: 2,
    period: 4,
    state: "Solid",
  },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    category: "transition-metal",
    mass: 44.956,
    config: "[Ar] 3d¹ 4s²",
    melt: 1541,
    boil: 2836,
    density: 2.985,
    discovered: 1879,
    group: 3,
    period: 4,
    state: "Solid",
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    category: "transition-metal",
    mass: 47.867,
    config: "[Ar] 3d² 4s²",
    melt: 1668,
    boil: 3287,
    density: 4.54,
    discovered: 1791,
    group: 4,
    period: 4,
    state: "Solid",
  },
  {
    number: 23,
    symbol: "V",
    name: "Vanadium",
    category: "transition-metal",
    mass: 50.942,
    config: "[Ar] 3d³ 4s²",
    melt: 1910,
    boil: 3407,
    density: 6.11,
    discovered: 1801,
    group: 5,
    period: 4,
    state: "Solid",
  },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    category: "transition-metal",
    mass: 51.996,
    config: "[Ar] 3d⁵ 4s¹",
    melt: 1907,
    boil: 2671,
    density: 7.15,
    discovered: 1797,
    group: 6,
    period: 4,
    state: "Solid",
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    category: "transition-metal",
    mass: 54.938,
    config: "[Ar] 3d⁵ 4s²",
    melt: 1246,
    boil: 2061,
    density: 7.44,
    discovered: 1774,
    group: 7,
    period: 4,
    state: "Solid",
  },
  {
    number: 26,
    symbol: "Fe",
    name: "Iron",
    category: "transition-metal",
    mass: 55.845,
    config: "[Ar] 3d⁶ 4s²",
    melt: 1538,
    boil: 2861,
    density: 7.874,
    discovered: "Ancient",
    group: 8,
    period: 4,
    state: "Solid",
  },
  {
    number: 27,
    symbol: "Co",
    name: "Cobalt",
    category: "transition-metal",
    mass: 58.933,
    config: "[Ar] 3d⁷ 4s²",
    melt: 1495,
    boil: 2927,
    density: 8.86,
    discovered: 1735,
    group: 9,
    period: 4,
    state: "Solid",
  },
  {
    number: 28,
    symbol: "Ni",
    name: "Nickel",
    category: "transition-metal",
    mass: 58.693,
    config: "[Ar] 3d⁸ 4s²",
    melt: 1455,
    boil: 2913,
    density: 8.912,
    discovered: 1751,
    group: 10,
    period: 4,
    state: "Solid",
  },
  {
    number: 29,
    symbol: "Cu",
    name: "Copper",
    category: "transition-metal",
    mass: 63.546,
    config: "[Ar] 3d¹⁰ 4s¹",
    melt: 1084.62,
    boil: 2562,
    density: 8.96,
    discovered: "Ancient",
    group: 11,
    period: 4,
    state: "Solid",
  },
  {
    number: 30,
    symbol: "Zn",
    name: "Zinc",
    category: "transition-metal",
    mass: 65.38,
    config: "[Ar] 3d¹⁰ 4s²",
    melt: 419.53,
    boil: 907,
    density: 7.134,
    discovered: 1746,
    group: 12,
    period: 4,
    state: "Solid",
  },
  {
    number: 31,
    symbol: "Ga",
    name: "Gallium",
    category: "post-transition",
    mass: 69.723,
    config: "[Ar] 3d¹⁰ 4s² 4p¹",
    melt: 29.76,
    boil: 2204,
    density: 5.907,
    discovered: 1875,
    group: 13,
    period: 4,
    state: "Solid",
  },
  {
    number: 32,
    symbol: "Ge",
    name: "Germanium",
    category: "metalloid",
    mass: 72.63,
    config: "[Ar] 3d¹⁰ 4s² 4p²",
    melt: 938.25,
    boil: 2833,
    density: 5.323,
    discovered: 1886,
    group: 14,
    period: 4,
    state: "Solid",
  },
  {
    number: 33,
    symbol: "As",
    name: "Arsenic",
    category: "metalloid",
    mass: 74.922,
    config: "[Ar] 3d¹⁰ 4s² 4p³",
    melt: 817,
    boil: 613,
    density: 5.776,
    discovered: "Ancient",
    group: 15,
    period: 4,
    state: "Solid",
  },
  {
    number: 34,
    symbol: "Se",
    name: "Selenium",
    category: "nonmetal",
    mass: 78.971,
    config: "[Ar] 3d¹⁰ 4s² 4p⁴",
    melt: 221,
    boil: 685,
    density: 4.809,
    discovered: 1817,
    group: 16,
    period: 4,
    state: "Solid",
  },
  {
    number: 35,
    symbol: "Br",
    name: "Bromine",
    category: "halogen",
    mass: 79.904,
    config: "[Ar] 3d¹⁰ 4s² 4p⁵",
    melt: -7.2,
    boil: 58.8,
    density: 3.1028,
    discovered: 1826,
    group: 17,
    period: 4,
    state: "Liquid",
  },
  {
    number: 36,
    symbol: "Kr",
    name: "Krypton",
    category: "noble-gas",
    mass: 83.798,
    config: "[Ar] 3d¹⁰ 4s² 4p⁶",
    melt: -157.36,
    boil: -153.22,
    density: 3.749,
    discovered: 1898,
    group: 18,
    period: 4,
    state: "Gas",
  },
  // Period 5
  {
    number: 37,
    symbol: "Rb",
    name: "Rubidium",
    category: "alkali-metal",
    mass: 85.468,
    config: "[Kr] 5s¹",
    melt: 39.31,
    boil: 688,
    density: 1.532,
    discovered: 1861,
    group: 1,
    period: 5,
    state: "Solid",
  },
  {
    number: 38,
    symbol: "Sr",
    name: "Strontium",
    category: "alkaline-earth",
    mass: 87.62,
    config: "[Kr] 5s²",
    melt: 777,
    boil: 1382,
    density: 2.64,
    discovered: 1790,
    group: 2,
    period: 5,
    state: "Solid",
  },
  {
    number: 39,
    symbol: "Y",
    name: "Yttrium",
    category: "transition-metal",
    mass: 88.906,
    config: "[Kr] 4d¹ 5s²",
    melt: 1526,
    boil: 3345,
    density: 4.469,
    discovered: 1794,
    group: 3,
    period: 5,
    state: "Solid",
  },
  {
    number: 40,
    symbol: "Zr",
    name: "Zirconium",
    category: "transition-metal",
    mass: 91.224,
    config: "[Kr] 4d² 5s²",
    melt: 1855,
    boil: 4409,
    density: 6.506,
    discovered: 1789,
    group: 4,
    period: 5,
    state: "Solid",
  },
  {
    number: 41,
    symbol: "Nb",
    name: "Niobium",
    category: "transition-metal",
    mass: 92.906,
    config: "[Kr] 4d⁴ 5s¹",
    melt: 2477,
    boil: 4744,
    density: 8.57,
    discovered: 1801,
    group: 5,
    period: 5,
    state: "Solid",
  },
  {
    number: 42,
    symbol: "Mo",
    name: "Molybdenum",
    category: "transition-metal",
    mass: 95.95,
    config: "[Kr] 4d⁵ 5s¹",
    melt: 2623,
    boil: 4639,
    density: 10.28,
    discovered: 1778,
    group: 6,
    period: 5,
    state: "Solid",
  },
  {
    number: 43,
    symbol: "Tc",
    name: "Technetium",
    category: "transition-metal",
    mass: 98,
    config: "[Kr] 4d⁵ 5s²",
    melt: 2157,
    boil: 4265,
    density: 11,
    discovered: 1937,
    group: 7,
    period: 5,
    state: "Solid",
  },
  {
    number: 44,
    symbol: "Ru",
    name: "Ruthenium",
    category: "transition-metal",
    mass: 101.07,
    config: "[Kr] 4d⁷ 5s¹",
    melt: 2334,
    boil: 4150,
    density: 12.45,
    discovered: 1844,
    group: 8,
    period: 5,
    state: "Solid",
  },
  {
    number: 45,
    symbol: "Rh",
    name: "Rhodium",
    category: "transition-metal",
    mass: 102.91,
    config: "[Kr] 4d⁸ 5s¹",
    melt: 1964,
    boil: 3695,
    density: 12.41,
    discovered: 1803,
    group: 9,
    period: 5,
    state: "Solid",
  },
  {
    number: 46,
    symbol: "Pd",
    name: "Palladium",
    category: "transition-metal",
    mass: 106.42,
    config: "[Kr] 4d¹⁰",
    melt: 1554.9,
    boil: 2963,
    density: 12.02,
    discovered: 1803,
    group: 10,
    period: 5,
    state: "Solid",
  },
  {
    number: 47,
    symbol: "Ag",
    name: "Silver",
    category: "transition-metal",
    mass: 107.87,
    config: "[Kr] 4d¹⁰ 5s¹",
    melt: 961.78,
    boil: 2162,
    density: 10.49,
    discovered: "Ancient",
    group: 11,
    period: 5,
    state: "Solid",
  },
  {
    number: 48,
    symbol: "Cd",
    name: "Cadmium",
    category: "transition-metal",
    mass: 112.41,
    config: "[Kr] 4d¹⁰ 5s²",
    melt: 321.07,
    boil: 767,
    density: 8.69,
    discovered: 1817,
    group: 12,
    period: 5,
    state: "Solid",
  },
  {
    number: 49,
    symbol: "In",
    name: "Indium",
    category: "post-transition",
    mass: 114.82,
    config: "[Kr] 4d¹⁰ 5s² 5p¹",
    melt: 156.6,
    boil: 2072,
    density: 7.31,
    discovered: 1863,
    group: 13,
    period: 5,
    state: "Solid",
  },
  {
    number: 50,
    symbol: "Sn",
    name: "Tin",
    category: "post-transition",
    mass: 118.71,
    config: "[Kr] 4d¹⁰ 5s² 5p²",
    melt: 231.93,
    boil: 2602,
    density: 7.287,
    discovered: "Ancient",
    group: 14,
    period: 5,
    state: "Solid",
  },
  {
    number: 51,
    symbol: "Sb",
    name: "Antimony",
    category: "metalloid",
    mass: 121.76,
    config: "[Kr] 4d¹⁰ 5s² 5p³",
    melt: 630.63,
    boil: 1587,
    density: 6.685,
    discovered: "Ancient",
    group: 15,
    period: 5,
    state: "Solid",
  },
  {
    number: 52,
    symbol: "Te",
    name: "Tellurium",
    category: "metalloid",
    mass: 127.6,
    config: "[Kr] 4d¹⁰ 5s² 5p⁴",
    melt: 449.51,
    boil: 988,
    density: 6.232,
    discovered: 1782,
    group: 16,
    period: 5,
    state: "Solid",
  },
  {
    number: 53,
    symbol: "I",
    name: "Iodine",
    category: "halogen",
    mass: 126.9,
    config: "[Kr] 4d¹⁰ 5s² 5p⁵",
    melt: 113.7,
    boil: 184.3,
    density: 4.93,
    discovered: 1811,
    group: 17,
    period: 5,
    state: "Solid",
  },
  {
    number: 54,
    symbol: "Xe",
    name: "Xenon",
    category: "noble-gas",
    mass: 131.29,
    config: "[Kr] 4d¹⁰ 5s² 5p⁶",
    melt: -111.75,
    boil: -108.12,
    density: 5.894,
    discovered: 1898,
    group: 18,
    period: 5,
    state: "Gas",
  },
  // Period 6
  {
    number: 55,
    symbol: "Cs",
    name: "Cesium",
    category: "alkali-metal",
    mass: 132.91,
    config: "[Xe] 6s¹",
    melt: 28.44,
    boil: 671,
    density: 1.873,
    discovered: 1860,
    group: 1,
    period: 6,
    state: "Solid",
  },
  {
    number: 56,
    symbol: "Ba",
    name: "Barium",
    category: "alkaline-earth",
    mass: 137.33,
    config: "[Xe] 6s²",
    melt: 727,
    boil: 1897,
    density: 3.594,
    discovered: 1808,
    group: 2,
    period: 6,
    state: "Solid",
  },
  {
    number: 57,
    symbol: "La",
    name: "Lanthanum",
    category: "lanthanide",
    mass: 138.91,
    config: "[Xe] 5d¹ 6s²",
    melt: 920,
    boil: 3464,
    density: 6.145,
    discovered: 1839,
    group: 3,
    period: 6,
    state: "Solid",
  },
  {
    number: 58,
    symbol: "Ce",
    name: "Cerium",
    category: "lanthanide",
    mass: 140.12,
    config: "[Xe] 4f¹ 5d¹ 6s²",
    melt: 795,
    boil: 3443,
    density: 6.77,
    discovered: 1803,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 59,
    symbol: "Pr",
    name: "Praseodymium",
    category: "lanthanide",
    mass: 140.91,
    config: "[Xe] 4f³ 6s²",
    melt: 935,
    boil: 3520,
    density: 6.773,
    discovered: 1885,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 60,
    symbol: "Nd",
    name: "Neodymium",
    category: "lanthanide",
    mass: 144.24,
    config: "[Xe] 4f⁴ 6s²",
    melt: 1024,
    boil: 3074,
    density: 7.007,
    discovered: 1885,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 61,
    symbol: "Pm",
    name: "Promethium",
    category: "lanthanide",
    mass: 145,
    config: "[Xe] 4f⁵ 6s²",
    melt: 1042,
    boil: 3000,
    density: 7.26,
    discovered: 1945,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 62,
    symbol: "Sm",
    name: "Samarium",
    category: "lanthanide",
    mass: 150.36,
    config: "[Xe] 4f⁶ 6s²",
    melt: 1072,
    boil: 1794,
    density: 7.52,
    discovered: 1853,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 63,
    symbol: "Eu",
    name: "Europium",
    category: "lanthanide",
    mass: 151.96,
    config: "[Xe] 4f⁷ 6s²",
    melt: 822,
    boil: 1529,
    density: 5.243,
    discovered: 1901,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 64,
    symbol: "Gd",
    name: "Gadolinium",
    category: "lanthanide",
    mass: 157.25,
    config: "[Xe] 4f⁷ 5d¹ 6s²",
    melt: 1312,
    boil: 3273,
    density: 7.9,
    discovered: 1880,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 65,
    symbol: "Tb",
    name: "Terbium",
    category: "lanthanide",
    mass: 158.93,
    config: "[Xe] 4f⁹ 6s²",
    melt: 1356,
    boil: 3230,
    density: 8.229,
    discovered: 1843,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 66,
    symbol: "Dy",
    name: "Dysprosium",
    category: "lanthanide",
    mass: 162.5,
    config: "[Xe] 4f¹⁰ 6s²",
    melt: 1407,
    boil: 2567,
    density: 8.55,
    discovered: 1886,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 67,
    symbol: "Ho",
    name: "Holmium",
    category: "lanthanide",
    mass: 164.93,
    config: "[Xe] 4f¹¹ 6s²",
    melt: 1472,
    boil: 2700,
    density: 8.795,
    discovered: 1878,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 68,
    symbol: "Er",
    name: "Erbium",
    category: "lanthanide",
    mass: 167.26,
    config: "[Xe] 4f¹² 6s²",
    melt: 1529,
    boil: 2868,
    density: 9.066,
    discovered: 1843,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 69,
    symbol: "Tm",
    name: "Thulium",
    category: "lanthanide",
    mass: 168.93,
    config: "[Xe] 4f¹³ 6s²",
    melt: 1545,
    boil: 1950,
    density: 9.321,
    discovered: 1879,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 70,
    symbol: "Yb",
    name: "Ytterbium",
    category: "lanthanide",
    mass: 173.05,
    config: "[Xe] 4f¹⁴ 6s²",
    melt: 824,
    boil: 1196,
    density: 6.965,
    discovered: 1878,
    group: null,
    period: 6,
    state: "Solid",
  },
  {
    number: 71,
    symbol: "Lu",
    name: "Lutetium",
    category: "lanthanide",
    mass: 174.97,
    config: "[Xe] 4f¹⁴ 5d¹ 6s²",
    melt: 1663,
    boil: 3402,
    density: 9.84,
    discovered: 1907,
    group: 3,
    period: 6,
    state: "Solid",
  },
  {
    number: 72,
    symbol: "Hf",
    name: "Hafnium",
    category: "transition-metal",
    mass: 178.49,
    config: "[Xe] 4f¹⁴ 5d² 6s²",
    melt: 2233,
    boil: 4603,
    density: 13.31,
    discovered: 1923,
    group: 4,
    period: 6,
    state: "Solid",
  },
  {
    number: 73,
    symbol: "Ta",
    name: "Tantalum",
    category: "transition-metal",
    mass: 180.95,
    config: "[Xe] 4f¹⁴ 5d³ 6s²",
    melt: 3017,
    boil: 5458,
    density: 16.69,
    discovered: 1802,
    group: 5,
    period: 6,
    state: "Solid",
  },
  {
    number: 74,
    symbol: "W",
    name: "Tungsten",
    category: "transition-metal",
    mass: 183.84,
    config: "[Xe] 4f¹⁴ 5d⁴ 6s²",
    melt: 3422,
    boil: 5555,
    density: 19.25,
    discovered: 1783,
    group: 6,
    period: 6,
    state: "Solid",
  },
  {
    number: 75,
    symbol: "Re",
    name: "Rhenium",
    category: "transition-metal",
    mass: 186.21,
    config: "[Xe] 4f¹⁴ 5d⁵ 6s²",
    melt: 3186,
    boil: 5596,
    density: 21.02,
    discovered: 1925,
    group: 7,
    period: 6,
    state: "Solid",
  },
  {
    number: 76,
    symbol: "Os",
    name: "Osmium",
    category: "transition-metal",
    mass: 190.23,
    config: "[Xe] 4f¹⁴ 5d⁶ 6s²",
    melt: 3033,
    boil: 5012,
    density: 22.59,
    discovered: 1803,
    group: 8,
    period: 6,
    state: "Solid",
  },
  {
    number: 77,
    symbol: "Ir",
    name: "Iridium",
    category: "transition-metal",
    mass: 192.22,
    config: "[Xe] 4f¹⁴ 5d⁷ 6s²",
    melt: 2466,
    boil: 4428,
    density: 22.56,
    discovered: 1803,
    group: 9,
    period: 6,
    state: "Solid",
  },
  {
    number: 78,
    symbol: "Pt",
    name: "Platinum",
    category: "transition-metal",
    mass: 195.08,
    config: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
    melt: 1768.3,
    boil: 3825,
    density: 21.45,
    discovered: 1735,
    group: 10,
    period: 6,
    state: "Solid",
  },
  {
    number: 79,
    symbol: "Au",
    name: "Gold",
    category: "transition-metal",
    mass: 196.97,
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    melt: 1064.18,
    boil: 2856,
    density: 19.3,
    discovered: "Ancient",
    group: 11,
    period: 6,
    state: "Solid",
  },
  {
    number: 80,
    symbol: "Hg",
    name: "Mercury",
    category: "transition-metal",
    mass: 200.59,
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    melt: -38.83,
    boil: 356.73,
    density: 13.534,
    discovered: "Ancient",
    group: 12,
    period: 6,
    state: "Liquid",
  },
  {
    number: 81,
    symbol: "Tl",
    name: "Thallium",
    category: "post-transition",
    mass: 204.38,
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    melt: 304,
    boil: 1473,
    density: 11.85,
    discovered: 1861,
    group: 13,
    period: 6,
    state: "Solid",
  },
  {
    number: 82,
    symbol: "Pb",
    name: "Lead",
    category: "post-transition",
    mass: 207.2,
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    melt: 327.46,
    boil: 1749,
    density: 11.34,
    discovered: "Ancient",
    group: 14,
    period: 6,
    state: "Solid",
  },
  {
    number: 83,
    symbol: "Bi",
    name: "Bismuth",
    category: "post-transition",
    mass: 208.98,
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    melt: 271.4,
    boil: 1564,
    density: 9.78,
    discovered: 1753,
    group: 15,
    period: 6,
    state: "Solid",
  },
  {
    number: 84,
    symbol: "Po",
    name: "Polonium",
    category: "post-transition",
    mass: 209,
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    melt: 254,
    boil: 962,
    density: 9.196,
    discovered: 1898,
    group: 16,
    period: 6,
    state: "Solid",
  },
  {
    number: 85,
    symbol: "At",
    name: "Astatine",
    category: "halogen",
    mass: 210,
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    melt: 302,
    boil: 337,
    density: 6.35,
    discovered: 1940,
    group: 17,
    period: 6,
    state: "Solid",
  },
  {
    number: 86,
    symbol: "Rn",
    name: "Radon",
    category: "noble-gas",
    mass: 222,
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    melt: -71,
    boil: -61.7,
    density: 9.73,
    discovered: 1900,
    group: 18,
    period: 6,
    state: "Gas",
  },
  // Period 7
  {
    number: 87,
    symbol: "Fr",
    name: "Francium",
    category: "alkali-metal",
    mass: 223,
    config: "[Rn] 7s¹",
    melt: 27,
    boil: 677,
    density: 1.87,
    discovered: 1939,
    group: 1,
    period: 7,
    state: "Solid",
  },
  {
    number: 88,
    symbol: "Ra",
    name: "Radium",
    category: "alkaline-earth",
    mass: 226,
    config: "[Rn] 7s²",
    melt: 700,
    boil: 1737,
    density: 5.5,
    discovered: 1898,
    group: 2,
    period: 7,
    state: "Solid",
  },
  {
    number: 89,
    symbol: "Ac",
    name: "Actinium",
    category: "actinide",
    mass: 227,
    config: "[Rn] 6d¹ 7s²",
    melt: 1050,
    boil: 3200,
    density: 10.07,
    discovered: 1899,
    group: 3,
    period: 7,
    state: "Solid",
  },
  {
    number: 90,
    symbol: "Th",
    name: "Thorium",
    category: "actinide",
    mass: 232.04,
    config: "[Rn] 6d² 7s²",
    melt: 1750,
    boil: 4788,
    density: 11.72,
    discovered: 1829,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 91,
    symbol: "Pa",
    name: "Protactinium",
    category: "actinide",
    mass: 231.04,
    config: "[Rn] 5f² 6d¹ 7s²",
    melt: 1572,
    boil: 4000,
    density: 15.37,
    discovered: 1913,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 92,
    symbol: "U",
    name: "Uranium",
    category: "actinide",
    mass: 238.03,
    config: "[Rn] 5f³ 6d¹ 7s²",
    melt: 1135,
    boil: 4131,
    density: 19.05,
    discovered: 1789,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 93,
    symbol: "Np",
    name: "Neptunium",
    category: "actinide",
    mass: 237,
    config: "[Rn] 5f⁴ 6d¹ 7s²",
    melt: 644,
    boil: 3902,
    density: 20.45,
    discovered: 1940,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 94,
    symbol: "Pu",
    name: "Plutonium",
    category: "actinide",
    mass: 244,
    config: "[Rn] 5f⁶ 7s²",
    melt: 640,
    boil: 3228,
    density: 19.84,
    discovered: 1940,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 95,
    symbol: "Am",
    name: "Americium",
    category: "actinide",
    mass: 243,
    config: "[Rn] 5f⁷ 7s²",
    melt: 1176,
    boil: 2011,
    density: 13.69,
    discovered: 1944,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 96,
    symbol: "Cm",
    name: "Curium",
    category: "actinide",
    mass: 247,
    config: "[Rn] 5f⁷ 6d¹ 7s²",
    melt: 1345,
    boil: 3110,
    density: 13.51,
    discovered: 1944,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 97,
    symbol: "Bk",
    name: "Berkelium",
    category: "actinide",
    mass: 247,
    config: "[Rn] 5f⁹ 7s²",
    melt: 986,
    boil: 2627,
    density: 14.79,
    discovered: 1949,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 98,
    symbol: "Cf",
    name: "Californium",
    category: "actinide",
    mass: 251,
    config: "[Rn] 5f¹⁰ 7s²",
    melt: 900,
    boil: 1470,
    density: 15.1,
    discovered: 1950,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 99,
    symbol: "Es",
    name: "Einsteinium",
    category: "actinide",
    mass: 252,
    config: "[Rn] 5f¹¹ 7s²",
    melt: 860,
    boil: 996,
    density: 8.84,
    discovered: 1952,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 100,
    symbol: "Fm",
    name: "Fermium",
    category: "actinide",
    mass: 257,
    config: "[Rn] 5f¹² 7s²",
    melt: 1527,
    boil: null,
    density: null,
    discovered: 1952,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 101,
    symbol: "Md",
    name: "Mendelevium",
    category: "actinide",
    mass: 258,
    config: "[Rn] 5f¹³ 7s²",
    melt: 827,
    boil: null,
    density: null,
    discovered: 1955,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 102,
    symbol: "No",
    name: "Nobelium",
    category: "actinide",
    mass: 259,
    config: "[Rn] 5f¹⁴ 7s²",
    melt: 827,
    boil: null,
    density: null,
    discovered: 1958,
    group: null,
    period: 7,
    state: "Solid",
  },
  {
    number: 103,
    symbol: "Lr",
    name: "Lawrencium",
    category: "actinide",
    mass: 262,
    config: "[Rn] 5f¹⁴ 6d¹ 7s²",
    melt: 1627,
    boil: null,
    density: null,
    discovered: 1961,
    group: 3,
    period: 7,
    state: "Solid",
  },
  {
    number: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    category: "transition-metal",
    mass: 267,
    config: "[Rn] 5f¹⁴ 6d² 7s²",
    melt: 2100,
    boil: 5500,
    density: 23.2,
    discovered: 1964,
    group: 4,
    period: 7,
    state: "Solid",
  },
  {
    number: 105,
    symbol: "Db",
    name: "Dubnium",
    category: "transition-metal",
    mass: 268,
    config: "[Rn] 5f¹⁴ 6d³ 7s²",
    melt: null,
    boil: null,
    density: 29.3,
    discovered: 1967,
    group: 5,
    period: 7,
    state: "Solid",
  },
  {
    number: 106,
    symbol: "Sg",
    name: "Seaborgium",
    category: "transition-metal",
    mass: 269,
    config: "[Rn] 5f¹⁴ 6d⁴ 7s²",
    melt: null,
    boil: null,
    density: 35.0,
    discovered: 1974,
    group: 6,
    period: 7,
    state: "Solid",
  },
  {
    number: 107,
    symbol: "Bh",
    name: "Bohrium",
    category: "transition-metal",
    mass: 270,
    config: "[Rn] 5f¹⁴ 6d⁵ 7s²",
    melt: null,
    boil: null,
    density: 37.1,
    discovered: 1976,
    group: 7,
    period: 7,
    state: "Solid",
  },
  {
    number: 108,
    symbol: "Hs",
    name: "Hassium",
    category: "transition-metal",
    mass: 269,
    config: "[Rn] 5f¹⁴ 6d⁶ 7s²",
    melt: null,
    boil: null,
    density: 40.7,
    discovered: 1984,
    group: 8,
    period: 7,
    state: "Solid",
  },
  {
    number: 109,
    symbol: "Mt",
    name: "Meitnerium",
    category: "transition-metal",
    mass: 278,
    config: "[Rn] 5f¹⁴ 6d⁷ 7s²",
    melt: null,
    boil: null,
    density: 37.4,
    discovered: 1982,
    group: 9,
    period: 7,
    state: "Solid",
  },
  {
    number: 110,
    symbol: "Ds",
    name: "Darmstadtium",
    category: "transition-metal",
    mass: 281,
    config: "[Rn] 5f¹⁴ 6d⁹ 7s¹",
    melt: null,
    boil: null,
    density: 34.8,
    discovered: 1994,
    group: 10,
    period: 7,
    state: "Solid",
  },
  {
    number: 111,
    symbol: "Rg",
    name: "Roentgenium",
    category: "transition-metal",
    mass: 282,
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s¹",
    melt: null,
    boil: null,
    density: 28.7,
    discovered: 1994,
    group: 11,
    period: 7,
    state: "Solid",
  },
  {
    number: 112,
    symbol: "Cn",
    name: "Copernicium",
    category: "transition-metal",
    mass: 285,
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    melt: null,
    boil: 357,
    density: 23.7,
    discovered: 1996,
    group: 12,
    period: 7,
    state: "Gas",
  },
  {
    number: 113,
    symbol: "Nh",
    name: "Nihonium",
    category: "post-transition",
    mass: 286,
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    melt: 430,
    boil: 1130,
    density: 16,
    discovered: 2003,
    group: 13,
    period: 7,
    state: "Solid",
  },
  {
    number: 114,
    symbol: "Fl",
    name: "Flerovium",
    category: "post-transition",
    mass: 289,
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    melt: 340,
    boil: 420,
    density: 14,
    discovered: 1998,
    group: 14,
    period: 7,
    state: "Solid",
  },
  {
    number: 115,
    symbol: "Mc",
    name: "Moscovium",
    category: "post-transition",
    mass: 290,
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    melt: 400,
    boil: 1100,
    density: 13.5,
    discovered: 2003,
    group: 15,
    period: 7,
    state: "Solid",
  },
  {
    number: 116,
    symbol: "Lv",
    name: "Livermorium",
    category: "post-transition",
    mass: 293,
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    melt: 364,
    boil: 1085,
    density: 12.9,
    discovered: 2000,
    group: 16,
    period: 7,
    state: "Solid",
  },
  {
    number: 117,
    symbol: "Ts",
    name: "Tennessine",
    category: "halogen",
    mass: 294,
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    melt: 350,
    boil: 883,
    density: 7.1,
    discovered: 2010,
    group: 17,
    period: 7,
    state: "Solid",
  },
  {
    number: 118,
    symbol: "Og",
    name: "Oganesson",
    category: "noble-gas",
    mass: 294,
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    melt: null,
    boil: 350,
    density: 7,
    discovered: 2002,
    group: 18,
    period: 7,
    state: "Solid",
  },
];

// ─── Descriptions ──────────────────────────────────────────────────────────────

const DESCRIPTIONS: Record<number, string> = {
  1: "Hydrogen is the lightest and most abundant chemical element, constituting roughly 75% of all normal matter in the universe.",
  2: "Helium is a colorless, odorless, tasteless, non-toxic, inert monatomic gas. Its boiling and melting points are the lowest among all elements.",
  3: "Lithium is the lightest metal and the lightest solid element. It is highly reactive and flammable.",
  4: "Beryllium is a relatively rare element, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays.",
  5: "Boron is a metalloid produced entirely by cosmic ray spallation and supernovae — not by stellar nucleosynthesis.",
  6: "Carbon is the basis of all known life on Earth and forms more compounds than all other elements combined.",
  7: "Nitrogen makes up 78.09% of Earth's atmosphere and is an essential component of amino acids and nucleic acids.",
  8: "Oxygen makes up about 21% of Earth's atmosphere and is essential for combustion and respiration.",
  9: "Fluorine is the most reactive and electronegative of all elements, reacting with most organic and inorganic substances.",
  10: "Neon gives a distinct reddish-orange glow when used in low-voltage neon lamps or high-voltage discharge tubes.",
  11: "Sodium is a soft, silvery-white, highly reactive metal essential for all animals and some plants.",
  12: "Magnesium bears a close physical resemblance to the other five elements in the second column of the periodic table.",
  13: "Aluminum is the third most abundant element in Earth's crust and the most abundant metal.",
  14: "Silicon is the second most abundant element in Earth's crust and is the basis of most semiconductor technology.",
  15: "Phosphorus is an essential element for life — a component of DNA, RNA, ATP, and phospholipids.",
  16: "Sulfur is a bright yellow crystalline solid that reacts with all elements except gold, platinum, iridium, tellurium, and the noble gases.",
  17: "Chlorine is an extremely reactive element and a strong oxidizing agent used widely in disinfection.",
  18: "Argon is the third-most abundant gas in Earth's atmosphere at 0.934% and is completely inert.",
  19: "Potassium is so soft it can be cut with a knife. It reacts rapidly with atmospheric oxygen to form flaky white potassium peroxide.",
  20: "Calcium is the fifth most abundant element in Earth's crust and is essential for bones and cellular signaling.",
  26: "Iron is essential for life as a component of hemoglobin and is the most widely used of all metals.",
  29: "Copper has been in use for at least 10,000 years and exhibits the highest electrical conductivity of any non-precious metal.",
  47: "Silver exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.",
  79: "Gold has been highly valued throughout history. It is dense, soft, malleable, and unreactive under most conditions.",
  80: "Mercury is the only metallic element that is liquid at standard conditions for temperature and pressure.",
  92: "Uranium is a silvery-white metal that is weakly radioactive. All isotopes of uranium are unstable.",
};

function getDescription(el: Element): string {
  return (
    DESCRIPTIONS[el.number] ??
    `${el.name} is a ${el.category.replace(/-/g, " ")} with atomic number ${el.number}, atomic mass ${el.mass} u, and electron configuration ${el.config}.`
  );
}

// ─── Element Cell ──────────────────────────────────────────────────────────────

interface ElementCellProps {
  element: Element;
  isSelected: boolean;
  isHighlighted: boolean | null; // null = no filter active
  onClick: (el: Element) => void;
  size?: "normal" | "small";
}

function ElementCell({
  element,
  isSelected,
  isHighlighted,
  onClick,
  size = "normal",
}: ElementCellProps) {
  const cfg = CATEGORY_CONFIG[element.category];
  const dimmed = isHighlighted === false;

  return (
    <button
      onClick={() => onClick(element)}
      title={`${element.name} (${element.symbol}) — ${element.category.replace(/-/g, " ")}`}
      aria-label={`${element.name}, atomic number ${element.number}`}
      className={[
        "relative flex flex-col items-center justify-center rounded-lg cursor-pointer select-none",
        "transition-all duration-200 group border-2",
        size === "normal" ? "aspect-square p-0.5" : "aspect-square p-0.5",
        `bg-gradient-to-br ${cfg.gradient} text-white`,
        isSelected
          ? "border-blue-500 scale-105 z-20 shadow-2xl"
          : "border-transparent",
        dimmed
          ? "opacity-20 scale-95"
          : "hover:scale-105 hover:z-20 hover:shadow-sm",
      ].join(" ")}
    >
      <span
        className={[
          "font-mono font-bold leading-none",
          size === "normal"
            ? "text-[0.6rem] sm:text-[0.65rem]"
            : "text-[0.55rem]",
          "absolute top-[2px] left-[3px] opacity-80",
        ].join(" ")}
      >
        {element.number}
      </span>
      <span
        className={[
          "font-black leading-none mt-1",
          size === "normal"
            ? "text-[0.75rem] sm:text-[0.9rem]"
            : "text-[0.7rem]",
        ].join(" ")}
      >
        {element.symbol}
      </span>
      <span
        className={[
          "leading-none text-center truncate w-full px-0.5 opacity-90",
          size === "normal"
            ? "text-[0.42rem] sm:text-[0.48rem]"
            : "text-[0.38rem]",
          "hidden sm:block",
        ].join(" ")}
      >
        {element.name}
      </span>
    </button>
  );
}

// ─── Property Card ─────────────────────────────────────────────────────────────

function PropCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
      <div className="text-[10px] tracking-[0.08em] uppercase mb-1.5 text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
        <span>{icon}</span>
        {label}
      </div>
      <div className="text-sm font-bold text-slate-800 dark:text-slate-100 font-mono break-all">
        {value}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function PeriodicTablePage() {
  const [selected, setSelected] = useState<Element | null>(null);
  const [filterCategory, setFilterCategory] = useState<ElementCategory | null>(
    null,
  );
  const [showLegend, setShowLegend] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [searchMatch, setSearchMatch] = useState<Element | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Build the 7×18 main grid (lanthanides/actinides shown as placeholder in rows 6/7 col 3)
  const mainGrid = useMemo(() => {
    const grid: (Element | null)[][] = Array.from({ length: 7 }, () =>
      Array(18).fill(null),
    );
    for (const el of ELEMENTS) {
      if (el.group !== null) {
        grid[el.period - 1][el.group - 1] = el;
      }
    }
    return grid;
  }, []);

  const lanthanides = useMemo(
    () =>
      ELEMENTS.filter((e) => e.category === "lanthanide" && e.group === null),
    [],
  );
  const actinides = useMemo(
    () => ELEMENTS.filter((e) => e.category === "actinide" && e.group === null),
    [],
  );

  const handleCellClick = useCallback((el: Element) => {
    setSelected((prev) => (prev?.number === el.number ? null : el));
    setShowLegend(false);
  }, []);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const q = searchQuery.trim().toLowerCase();
      if (!q) return;
      let found =
        ELEMENTS.find((el) => el.symbol.toLowerCase() === q) ||
        ELEMENTS.find((el) => el.name.toLowerCase().includes(q)) ||
        (!isNaN(Number(q))
          ? ELEMENTS.find((el) => el.number === parseInt(q))
          : undefined) ||
        ELEMENTS.find((el) => el.symbol.toLowerCase().includes(q));
      if (found) {
        setSearchMatch(found);
        setSelected(found);
        setFilterCategory(null);
        setShowLegend(false);
        setSearchResult(null);
      } else {
        setSearchMatch(null);
        setSearchResult(`No element found for "${searchQuery}"`);
        setTimeout(() => setSearchResult(null), 3000);
      }
    },
    [searchQuery],
  );

  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);
      
      if (value.trim().length === 0) {
        setSearchMatch(null);
        return;
      }

      const q = value.trim().toLowerCase();
      const found =
        ELEMENTS.find((el) => el.symbol.toLowerCase() === q) ||
        ELEMENTS.find((el) => el.name.toLowerCase().includes(q)) ||
        (!isNaN(Number(q))
          ? ELEMENTS.find((el) => el.number === parseInt(q))
          : undefined);

      if (found) {
        setSearchMatch(found);
      } else {
        setSearchMatch(null);
      }
    },
    [],
  );

  const isHighlighted = useCallback(
    (el: Element): boolean | null => {
      if (filterCategory !== null) {
        return el.category === filterCategory;
      }
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.trim().toLowerCase();
        return (
          el.symbol.toLowerCase().includes(q) ||
          el.name.toLowerCase().includes(q) ||
          el.number.toString().includes(q)
        );
      }
      return null;
    },
    [filterCategory, searchQuery],
  );

  const cfg = selected ? CATEGORY_CONFIG[selected.category] : null;

  return (
    <>
      <div className="max-w-[1400px] mx-auto py-6 pb-16">
        {/* ── Hero ── */}
        <section
          className="rounded-xl overflow-hidden mb-8 text-white py-10 sm:py-14 px-6 sm:px-10 relative"
          style={{
            background:
              "linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.18),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,.10),transparent_50%)]" />
          <div className="relative z-10 max-w-3xl">
            
           
            <div className="flex flex-wrap gap-5 mt-5">
              {[
                ["⚛", "118", "Elements"],
                ["📊", "7", "Periods"],
                ["🧪", "18", "Groups"],
              ].map(([icon, n, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/20"
                >
                  <span className="text-xl">{icon}</span>
                  <div>
                    <div className="text-lg font-bold leading-none font-mono">
                      {n}
                    </div>
                    <div className="text-[11px] text-white/75 tracking-wider uppercase">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Search + Controls ── */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 mb-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-1 w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none z-10">
                🔍
              </span>
              <input
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search by name, symbol, or atomic number…"
                className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-lg text-sm outline-none transition-all focus:border-blue-400 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-400/10 font-mono"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSearchMatch(null);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 transition-colors z-10"
                  aria-label="Clear search"
                >
                  <i className="fas fa-times text-sm" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                type="submit"
                className="flex-1 sm:flex-none bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-3 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowLegend((v) => !v);
                  setSelected(null);
                  setFilterCategory(null);
                }}
                className={`flex-1 sm:flex-none px-4 py-3 rounded-lg text-sm font-semibold transition-all border-2 whitespace-nowrap ${
                  showLegend
                    ? "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-400 text-indigo-600 dark:text-indigo-400"
                    : "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-400 hover:border-slate-200"
                }`}
              >
                🎨 Legend
              </button>
              <button
                type="button"
                onClick={() => setViewMode((v) => (v === "grid" ? "list" : "grid"))}
                className={`flex-1 sm:flex-none px-4 py-3 rounded-lg text-sm font-semibold transition-all border-2 whitespace-nowrap ${
                  viewMode === "list"
                    ? "bg-blue-50 dark:bg-blue-900/30 border-blue-400 text-blue-600 dark:text-blue-400"
                    : "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-400 hover:border-slate-200"
                }`}
              >
                {viewMode === "grid" ? "📋 List" : "🔲 Grid"}
              </button>
              {filterCategory && (
                <button
                  type="button"
                  onClick={() => setFilterCategory(null)}
                  className="flex-1 sm:flex-none px-4 py-3 rounded-lg text-sm font-semibold bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 transition-all hover:bg-red-100 whitespace-nowrap"
                >
                  ✕ Clear
                </button>
              )}
            </div>
          </form>
          
          {searchResult && (
            <p className="mt-3 text-sm text-red-500 dark:text-red-400">
              {searchResult}
            </p>
          )}
        </section>

        {/* ── Search Result Detail Panel ── */}
        {searchMatch && (() => {
          const cfg = CATEGORY_CONFIG[searchMatch.category];
          return (
            <section className="bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 mb-6 overflow-hidden animate-[fadeInUp_.35s_ease-out_both]">
              {/* Header band */}
              <div
                className={`bg-gradient-to-br ${cfg.gradient} p-5 sm:p-7 relative overflow-hidden`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,255,255,.2),transparent_50%)]" />
                <div className="relative z-10 flex items-start gap-5 flex-wrap">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center border border-white/30 flex-shrink-0">
                    <span className="text-[11px] text-white/70 font-mono">
                      {searchMatch.number}
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-white leading-none">
                      {searchMatch.symbol}
                    </span>
                    <span className="text-[10px] text-white/75 font-mono mt-0.5">
                      {searchMatch.mass}
                    </span>
                  </div>
                  <div className="flex-1 min-w-[160px]">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-1">
                      {searchMatch.name}
                    </h2>
                    <p className="text-white/80 text-sm font-mono capitalize">
                      {searchMatch.category.replace(/-/g, " ")} · {searchMatch.state} at
                      STP
                    </p>
                    <p className="text-white/70 text-sm mt-3 leading-relaxed max-w-lg">
                      {getDescription(searchMatch)}
                    </p>
                  </div>
                  <button
                    onClick={() => setSearchMatch(null)}
                    className="ml-auto bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-xl w-9 h-9 flex items-center justify-center transition-all hover:rotate-90 flex-shrink-0"
                    aria-label="Close detail"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Properties grid */}
              <div className="p-5 sm:p-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  <PropCard
                    icon="#"
                    label="Atomic Number"
                    value={searchMatch.number}
                  />
                  <PropCard
                    icon="⚖"
                    label="Atomic Mass"
                    value={`${searchMatch.mass} u`}
                  />
                  <PropCard
                    icon="🌡"
                    label="Melt Point"
                    value={
                      searchMatch.melt !== null ? `${searchMatch.melt} °C` : "Unknown"
                    }
                  />
                  <PropCard
                    icon="💨"
                    label="Boil Point"
                    value={
                      searchMatch.boil !== null ? `${searchMatch.boil} °C` : "Unknown"
                    }
                  />
                  <PropCard
                    icon="⚗"
                    label="Density"
                    value={
                      searchMatch.density !== null
                        ? `${searchMatch.density} g/cm³`
                        : "Unknown"
                    }
                  />
                  <PropCard
                    icon="📅"
                    label="Discovered"
                    value={String(searchMatch.discovered)}
                  />
                  <PropCard
                    icon="🔢"
                    label="Group"
                    value={searchMatch.group ?? "N/A"}
                  />
                  <PropCard icon="📊" label="Period" value={searchMatch.period} />
                  <PropCard
                    icon="🔬"
                    label="State at STP"
                    value={searchMatch.state}
                  />
                  <PropCard
                    icon="⚛"
                    label="Configuration"
                    value={searchMatch.config}
                  />
                  <PropCard
                    icon="🏷"
                    label="Category"
                    value={CATEGORY_CONFIG[searchMatch.category].label}
                  />
                  <PropCard
                    icon="🧱"
                    label="Block"
                    value={
                      searchMatch.config.includes("f")
                        ? "f-block"
                        : searchMatch.config.includes("d")
                          ? "d-block"
                          : searchMatch.config.includes("p")
                            ? "p-block"
                            : "s-block"
                    }
                  />
                </div>
              </div>
            </section>
          );
        })()}

        {/* ── Legend Panel ── */}
        {showLegend && (
          <section className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 mb-6 animate-[fadeInUp_.3s_ease-out_both]">
            <h2 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2">
              🎨 <span>Element Categories</span>
              <span className="text-[10px] sm:text-xs font-normal text-slate-400 dark:text-slate-400 ml-1">
                — click to filter
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5">
              {(
                Object.entries(CATEGORY_CONFIG) as [
                  ElementCategory,
                  (typeof CATEGORY_CONFIG)[ElementCategory],
                ][]
              ).map(([cat, config]) => (
                <button
                  key={cat}
                  onClick={() =>
                    setFilterCategory((prev) => (prev === cat ? null : cat))
                  }
                  className={[
                    "flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl border-2 transition-all text-left",
                    filterCategory === cat
                      ? "border-slate-400 dark:border-slate-500 bg-slate-50 dark:bg-slate-900 shadow-md scale-105"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-200 dark:hover:border-slate-600",
                  ].join(" ")}
                >
                  <span
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 bg-gradient-to-br ${config.gradient}`}
                  />
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-800 dark:text-slate-400 leading-tight">
                    {config.label}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ── Main Table ── */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-3 sm:p-5 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 mb-6">
          {viewMode === "grid" ? (
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* 7×18 grid */}
                <div
                  className="grid gap-[3px]"
                  style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))" }}
                >
                  {mainGrid.map((row, ri) =>
                    row.map((el, ci) => {
                      const isLaPlaceholder = ri === 5 && ci === 2 && el === null;
                      const isAcPlaceholder = ri === 6 && ci === 2 && el === null;

                      if (el === null && !isLaPlaceholder && !isAcPlaceholder) {
                        return (
                          <div key={`${ri}-${ci}`} className="aspect-square" />
                        );
                      }
                      if (isLaPlaceholder || isAcPlaceholder) {
                        return (
                          <div
                            key={`${ri}-${ci}`}
                            className={`aspect-square rounded-lg flex items-center justify-center text-[0.45rem] font-mono font-bold text-white opacity-60 ${isLaPlaceholder ? "bg-gradient-to-br from-purple-400 to-purple-600" : "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600"}`}
                          >
                            {isLaPlaceholder ? "57–71" : "89–103"}
                          </div>
                        );
                      }
                      return (
                        <ElementCell
                          key={el!.number}
                          element={el!}
                          isSelected={selected?.number === el!.number}
                          isHighlighted={isHighlighted(el!)}
                          onClick={handleCellClick}
                        />
                      );
                    }),
                  )}
                </div>

                {/* Lanthanides row */}
                <div className="mt-4 border-t border-dashed border-slate-200 dark:border-slate-800 pt-4">
                  <p className="text-[10px] tracking-[0.1em] uppercase text-slate-400 dark:text-slate-400 font-mono mb-2 pl-1">
                    Lanthanides (57–71)
                  </p>
                  <div
                    className="grid gap-[3px]"
                    style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}
                  >
                    {ELEMENTS.filter((e) => e.category === "lanthanide").map(
                      (el) => (
                        <ElementCell
                          key={el.number}
                          element={el}
                          isSelected={selected?.number === el.number}
                          isHighlighted={isHighlighted(el)}
                          onClick={handleCellClick}
                          size="small"
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* Actinides row */}
                <div className="mt-3">
                  <p className="text-[10px] tracking-[0.1em] uppercase text-slate-400 dark:text-slate-400 font-mono mb-2 pl-1">
                    Actinides (89–103)
                  </p>
                  <div
                    className="grid gap-[3px]"
                    style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}
                  >
                    {ELEMENTS.filter((e) => e.category === "actinide").map((el) => (
                      <ElementCell
                        key={el.number}
                        element={el}
                        isSelected={selected?.number === el.number}
                        isHighlighted={isHighlighted(el)}
                        onClick={handleCellClick}
                        size="small"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {ELEMENTS.map((el) => {
                const cfg = CATEGORY_CONFIG[el.category];
                return (
                  <button
                    key={el.number}
                    onClick={() => handleCellClick(el)}
                    className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all ${
                      selected?.number === el.number
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${cfg.gradient} flex items-center justify-center mb-1.5`}
                    >
                      <span className="text-lg sm:text-xl font-black text-white leading-none">
                        {el.symbol}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-slate-400 dark:text-slate-500">
                      {el.number}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 truncate w-full text-center">
                      {el.name}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Element Detail ── */}
        {selected && cfg && (
          <section className="bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 mb-6 overflow-hidden animate-[fadeInUp_.35s_ease-out_both]">
            {/* Header band */}
            <div
              className={`bg-gradient-to-br ${cfg.gradient} p-4 sm:p-6 relative overflow-hidden`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,255,255,.2),transparent_50%)]" />
              <div className="relative z-10 flex items-start gap-4 sm:gap-5 flex-wrap">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center border border-white/30 flex-shrink-0">
                  <span className="text-[10px] sm:text-[11px] text-white/70 font-mono">
                    {selected.number}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                    {selected.symbol}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-white/75 font-mono mt-0.5">
                    {selected.mass}
                  </span>
                </div>
                <div className="flex-1 min-w-[140px]">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                    {selected.name}
                  </h2>
                  <p className="text-white/80 text-xs sm:text-sm font-mono capitalize">
                    {selected.category.replace(/-/g, " ")} · {selected.state} at
                    STP
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed max-w-lg">
                    {getDescription(selected)}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="ml-auto bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-xl w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-all hover:rotate-90 flex-shrink-0"
                  aria-label="Close detail"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Properties grid */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                <PropCard
                  icon="#"
                  label="Atomic Number"
                  value={selected.number}
                />
                <PropCard
                  icon="⚖"
                  label="Atomic Mass"
                  value={`${selected.mass} u`}
                />
                <PropCard
                  icon="🌡"
                  label="Melt Point"
                  value={
                    selected.melt !== null ? `${selected.melt} °C` : "Unknown"
                  }
                />
                <PropCard
                  icon="💨"
                  label="Boil Point"
                  value={
                    selected.boil !== null ? `${selected.boil} °C` : "Unknown"
                  }
                />
                <PropCard
                  icon="⚗"
                  label="Density"
                  value={
                    selected.density !== null
                      ? `${selected.density} g/cm³`
                      : "Unknown"
                  }
                />
                <PropCard
                  icon="📅"
                  label="Discovered"
                  value={String(selected.discovered)}
                />
                <PropCard
                  icon="🔢"
                  label="Group"
                  value={selected.group ?? "N/A"}
                />
                <PropCard icon="📊" label="Period" value={selected.period} />
                <PropCard
                  icon="🔬"
                  label="State at STP"
                  value={selected.state}
                />
                <PropCard
                  icon="⚛"
                  label="Configuration"
                  value={selected.config}
                />
                <PropCard
                  icon="🏷"
                  label="Category"
                  value={CATEGORY_CONFIG[selected.category].label}
                />
                <PropCard
                  icon="🧱"
                  label="Block"
                  value={
                    selected.config.includes("f")
                      ? "f-block"
                      : selected.config.includes("d")
                        ? "d-block"
                        : selected.config.includes("p")
                          ? "p-block"
                          : "s-block"
                  }
                />
              </div>
            </div>
          </section>
        )}

        {/* ── Quick Picks ── */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 tracking-wide uppercase font-mono">
            Notable Elements
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {[
              "H",
              "C",
              "O",
              "Fe",
              "Au",
              "U",
              "He",
              "Na",
              "Si",
              "Ca",
              "Ag",
              "Cu",
              "Pt",
              "Pb",
              "Ra",
            ].map((sym) => {
              const el = ELEMENTS.find((e) => e.symbol === sym)!;
              const c = CATEGORY_CONFIG[el.category];
              return (
                <button
                  key={sym}
                  onClick={() => handleCellClick(el)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl border-2 transition-all text-xs sm:text-sm font-semibold ${
                    selected?.symbol === sym
                      ? "border-slate-400 dark:border-slate-500 bg-slate-50 dark:bg-slate-900 scale-105"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-200"
                  }`}
                >
                  <span
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-br ${c.gradient}`}
                  />
                  <span className="font-mono text-slate-800 dark:text-slate-100">
                    {sym}
                  </span>
                  <span className="text-slate-400 dark:text-slate-400 text-[10px] sm:text-[11px] hidden sm:inline">
                    {el.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── About Info ── */}
        <article className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm sm:text-lg">
              ℹ
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
              About the Periodic Table
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-slate-800 dark:text-slate-400 leading-relaxed">
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1.5 sm:mb-2">
                Organisation
              </h3>
              <p>
                The periodic table arranges all 118 known elements by increasing
                atomic number. Elements in the same column (group) share similar
                chemical properties, while rows (periods) represent filled
                electron shells.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1.5 sm:mb-2">
                Element Categories
              </h3>
              <ul className="space-y-1 sm:space-y-1.5">
                {[
                  [
                    "🔴",
                    "Alkali & Alkaline Earth Metals",
                    "Highly reactive s-block metals",
                  ],
                  [
                    "🟣",
                    "Transition Metals",
                    "d-block metals with variable oxidation states",
                  ],
                  [
                    "🟢",
                    "Nonmetals & Halogens",
                    "Electronegative p-block elements",
                  ],
                  [
                    "🩷",
                    "Noble Gases",
                    "Inert, stable electron configurations",
                  ],
                ].map(([icon, title, desc]) => (
                  <li key={title as string} className="flex items-start gap-1.5 sm:gap-2">
                    <span className="mt-0.5 flex-shrink-0">{icon}</span>
                    <span>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">
                        {title}:
                      </span>{" "}
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}