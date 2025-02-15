import Svg, { Path } from "react-native-svg";

export default function CrownIcon({ size }: { size?: number }) {
    return (
        <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
            <Path
                d="m12 8 3 5.2 3-2.7-.7 3.5H6.7L6 10.5l3 2.7L12 8m0-4-3.5 6L3 5l2 11h14l2-11-5.5 5L12 4m7 14H5v1c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-1Z"
                fill="#afb2bf"
            />
        </Svg>
    );
}
