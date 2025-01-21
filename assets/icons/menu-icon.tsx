import Svg, { Path } from "react-native-svg"

/* SVGR has dropped some elements not supported by react-native-svg: title */
export default function MenuIcon() {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24">
            <Path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" fill="#fafafa" />
        </Svg>
    );
};