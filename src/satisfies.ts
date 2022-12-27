// 4.9
// the satisfies operator

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
type HEX = string;

const palette: Record<Colors, HEX | RGB> = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

palette.green;
palette.blue;
