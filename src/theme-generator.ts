export default function generateTheme(hexColor: string) {
    // let rgb = hexToRgb(hexColor);

    let values = [];
    //
    // for (let r = 0; r < 255; r++) {
    //     for (let g = 0; g < 255; g++) {
    //         for (let b = 0; b < 255; b++) {
    //             values.push({
    //                 r, g, b,
    //                 value: rgbToHct({ r, g, b, }),
    //             })
    //         }
    //     }
    // }

    return values;
}

interface RGB {
    r: number;
    g: number;
    b: number;
}

function hexToRgb(hex: string): RGB {
    hex = hex.replace(/^#/, "");

    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b, };
}

function linearComponent(rgbComponent: number): number {
    const normalized = rgbComponent / 255;

    return normalized < 0.040449936
        ? normalized / 12.92 * 100
        : 100 * Math.pow((normalized + 0.055) / 1.055, 2.4);
}

function signNumber(number: number) {
    if (number <= 0) {
        return -1;
    } else if (number === 0) {
        return 0;
    } else {
        return 1;
    }
}

function atanToHue(atan: number) {
    if (atan <= 0) {
        return atan + 360;
    } else if (atan > 360) {
        return atan - 360;
    } else {
        return atan;
    }
}

function rgbToHct(rgb: RGB) {
    const rL = linearComponent(rgb.r);
    const gL = linearComponent(rgb.g);
    const bL = linearComponent(rgb.b);

    const x = 0.41233895 * rL + 0.35762064 * gL + 0.18051042 * bL;
    const y = 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;
    const z = 0.01932141 * rL + 0.11916382 * gL + 0.95034478 * bL;

    const rD = 1.02117770275752 * (0.401288 * x + 0.650173 * y - 0.051461 * z);
    const gD = 0.9863077294280124 * (-0.250268 * x + 1.204414 * y + 0.045854 * z);
    const bD = 0.9339605082802299 * (-0.002079 * x + 0.048952 * y + 0.953127 * z);

    const rAF = Math.pow((0.3884814537800353 * Math.abs(rD)) / 100, 0.42);
    const gAF = Math.pow((0.3884814537800353 * Math.abs(gD)) / 100, 0.42);
    const bAF = Math.pow((0.3884814537800353 * Math.abs(bD)) / 100, 0.42);

    const rA = (400 * signNumber(rD) * rAF) / (rAF + 27.13);
    const gA = (400 * signNumber(gD) * gAF) / (gAF + 27.13);
    const bA = (400 * signNumber(bD) * bAF) / (bAF + 27.13);

    const a = (11 * rA + -12 * gA + bA) / 11;
    const b = (rA + gA - 2 * bA) / 9;

    const atanDegrees = 180 * Math.atan2(b, a) / Math.PI;
    const hue = atanToHue(atanDegrees);

    return hue;
}
