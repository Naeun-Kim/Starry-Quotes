'use client';

import React, { useState, useEffect } from 'react';
import styles from './Cloud.module.scss';
import { randomInt, randomFloat } from '../utils/helpers';

const MIN_CLOUDS = 3;
const MAX_CLOUDS = 5;
const MIN_WIDTH = 200;
const MAX_WIDTH = 600;
const MIN_RATIO = 0.5;
const MAX_RATIO = 0.65;
const MIN_BLUR = 40;
const MAX_BLUR = 100;

type CloudData = {
  id: string;
  width: number;
  height: number;
  top: number;
  left: number;
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  filterId: string;
};

function createCloudData(index: number): CloudData {
  const width = randomInt(MIN_WIDTH, MAX_WIDTH);
  const height = Math.floor(width * randomFloat(MIN_RATIO, MAX_RATIO));
  const top = randomFloat(-height, window.innerHeight);
  const left = randomFloat(-width, window.innerWidth);
  const offsetX = width + 80;
  const offsetY = randomInt(-height, height);
  const blur = randomInt(MIN_BLUR, MAX_BLUR);
  const spread = 0;
  const filterId = `cloud-filter-${index}`;

  return {
    id: `cloud-${index}`,
    width,
    height,
    top,
    left,
    offsetX,
    offsetY,
    blur,
    spread,
    filterId,
  };
}

export default function Cloud() {
  const [clouds, setClouds] = useState<CloudData[]>([]);

  useEffect(() => {
    const count = randomInt(MIN_CLOUDS, MAX_CLOUDS);
    const generated = Array.from({ length: count }, (_, i) =>
      createCloudData(i)
    );
    setClouds(generated);
  }, []);

  return (
    <>
      {clouds.map((c) => (
        <React.Fragment key={c.id}>
          {/* 각 구름마다 고유 필터 정의 */}
          <svg width="0" height="0">
            <filter id={c.filterId}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".01"
                numOctaves="10"
              />
              <feDisplacementMap in="SourceGraphic" scale="180" />
            </filter>
          </svg>

          {/* 구름 원형 + box-shadow */}
          <div
            className={styles.cloud}
            style={{
              width: `${c.width}px`,
              height: `${c.height}px`,
              top: `${c.top}px`,
              left: `${c.left}px`,
              boxShadow: `${c.offsetX}px ${c.offsetY}px ${c.blur}px ${c.spread}px #fff`,
              filter: `url(#${c.filterId})`,
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
}
