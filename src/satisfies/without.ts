// 4.9
// without satisfies operator

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
type HEX = string;

const palette: Record<Colors, HEX | RGB> = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
};

if (typeof palette.green === "string") {
  palette.green;
}

if (Array.isArray(palette.blue)) {
  palette.blue;
}

export {};
