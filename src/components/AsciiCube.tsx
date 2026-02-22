"use client";

import { useEffect, useRef } from "react";

const W = 80;
const H = 36;
const CUBE_W = 14;
const BG = " ";
const K1 = 30;
const DIST = 60;
const STEP = 0.6;

const FACE_CHARS = ["@", "#", "$", "~", ";", "+"];

function calcX(i: number, j: number, k: number, A: number, B: number, C: number) {
  const sA = Math.sin(A), cA = Math.cos(A);
  const sB = Math.sin(B), cB = Math.cos(B);
  const sC = Math.sin(C), cC = Math.cos(C);
  return j * sA * sB * cC - k * cA * sB * cC + j * cA * sC + k * sA * sC + i * cB * cC;
}

function calcY(i: number, j: number, k: number, A: number, B: number, C: number) {
  const sA = Math.sin(A), cA = Math.cos(A);
  const sB = Math.sin(B), cB = Math.cos(B);
  const sC = Math.sin(C), cC = Math.cos(C);
  return j * cA * cC + k * sA * cC - j * sA * sB * sC + k * cA * sB * sC - i * cB * sC;
}

function calcZ(i: number, j: number, k: number, A: number, B: number) {
  const sA = Math.sin(A), cA = Math.cos(A);
  const cB = Math.cos(B), sB = Math.sin(B);
  return k * cA * cB - j * sA * cB + i * sB;
}

function drawFace(
  output: string[],
  zbuf: number[],
  cubeX: number,
  cubeY: number,
  cubeZ: number,
  A: number, B: number, C: number,
  ch: string,
) {
  const x = calcX(cubeX, cubeY, cubeZ, A, B, C);
  const y = calcY(cubeX, cubeY, cubeZ, A, B, C);
  const z = calcZ(cubeX, cubeY, cubeZ, A, B) + DIST;

  const ooz = 1 / z;
  const xp = Math.floor(W / 2 + K1 * ooz * 2 * x);
  const yp = Math.floor(H / 2 - K1 * ooz * y);

  if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
    const idx = yp * W + xp;
    if (ooz > zbuf[idx]) {
      zbuf[idx] = ooz;
      output[idx] = ch;
    }
  }
}

export function AsciiCube() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let raf: number;
    let A = 0;
    let B = 0;
    let C = 0;

    function render() {
      A += 0.008;
      B += 0.012;
      C += 0.004;

      const output = new Array(W * H).fill(BG);
      const zbuf = new Array(W * H).fill(0);

      for (let cu = -CUBE_W; cu < CUBE_W; cu += STEP) {
        for (let cv = -CUBE_W; cv < CUBE_W; cv += STEP) {
          drawFace(output, zbuf, cu, cv, -CUBE_W, A, B, C, FACE_CHARS[0]);
          drawFace(output, zbuf, cu, cv, CUBE_W, A, B, C, FACE_CHARS[1]);
          drawFace(output, zbuf, cu, -CUBE_W, cv, A, B, C, FACE_CHARS[2]);
          drawFace(output, zbuf, cu, CUBE_W, cv, A, B, C, FACE_CHARS[3]);
          drawFace(output, zbuf, -CUBE_W, cu, cv, A, B, C, FACE_CHARS[4]);
          drawFace(output, zbuf, CUBE_W, cu, cv, A, B, C, FACE_CHARS[5]);
        }
      }

      const lines: string[] = [];
      for (let j = 0; j < H; j++) {
        lines.push(output.slice(j * W, (j + 1) * W).join(""));
      }
      if (preRef.current) preRef.current.textContent = lines.join("\n");

      raf = requestAnimationFrame(render);
    }

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <pre
      ref={preRef}
      aria-hidden
      className="pointer-events-none select-none font-mono text-[10px] leading-[1.15] text-accent/80"
    />
  );
}
