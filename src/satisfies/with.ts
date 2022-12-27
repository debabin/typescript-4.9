// 4.9
// with satisfies operator

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
type HEX = string;

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, HEX | RGB>;

palette.green;
palette.blue;

export {};
