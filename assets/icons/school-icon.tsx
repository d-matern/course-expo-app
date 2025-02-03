import Svg, { Path } from "react-native-svg";

export default function SchoolIcon({ size }: { size?: number }) {
    return (
        <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
            <Path
                d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16Z"
                fill="#afb2bf"
            />
        </Svg>
    );
}
