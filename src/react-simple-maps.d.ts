// types/react-simple-maps.d.ts
import { ProjectionConfig } from "react-simple-maps";

declare module "react-simple-maps" {
    interface ProjectionConfig {
        translate?: [number, number];
        // 可添加其他缺失属性
        clipAngle?: number;
        clipExtent?: [[number, number], [number, number]];
    }
}