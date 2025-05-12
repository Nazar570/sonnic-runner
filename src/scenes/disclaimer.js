import k from "../kaplayCtx";

export default function disclaimer() {
  k.add([
    k.text(
      `Sonic is owned by SEGA.\nThis is a fangame made by Nazarito using assets from Sonic Mania`,
      { font: "mania", size: 32 }
    ),
  ]);

  k.add([
    k.text("Press Space/Click/Touch to Start The Game", {
      font: "mania",
      size: 64,
    }),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y),
  ]);

  k.onButtonPress("jump", () => k.go("main-menu"));

  k.add([k.rect(k.width(), 70), k.pos(0, k.height() - 70), k.color(0, 0, 139)]);

  k.add([
    k.text("2025 Nazarito | All Rights Reserved", {
      font: "mania",
      size: 24,
      color: { r: 255, g: 255, b: 255 },
    }),
    k.anchor("center"),
    k.pos(k.center().x, k.height() - 32.5),
  ]);
}
