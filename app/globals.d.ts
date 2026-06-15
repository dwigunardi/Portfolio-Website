export { };

declare module '*.glb';
declare module '*.png';
declare module '*.css';
declare module '*.pdf';

declare module 'meshline' {
    export const MeshLineGeometry: any;
    export const MeshLineMaterial: any;
}

import type { ThreeElements } from '@react-three/fiber'

declare global {
    namespace React {
        namespace JSX {
            interface IntrinsicElements extends ThreeElements {
                meshLineGeometry: any;
                meshLineMaterial: any;
            }
        }
    }
}