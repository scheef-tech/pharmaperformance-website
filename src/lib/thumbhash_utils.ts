import { thumbHashToDataURL, thumbHashToRGBA } from 'thumbhash';

export function thumbhashToCssBackground(thumbhash: string): string {
	if (!thumbhash) return 'none';
	const thumbhashArray = decodeThumbhash(thumbhash);
	return `url("${thumbHashToDataURL(thumbhashArray)}") center / cover no-repeat`;
}

export function thumbhashToCssGradient(thumbhash: string): string {
	if (!thumbhash) return 'linear-gradient(to bottom right, #fff, #fff)';

	const thumbhashArray = decodeThumbhash(thumbhash);
	const rgba = thumbHashToRGBA(thumbhashArray);
	return pixelsToCssGradients(rgba.rgba, rgba.w, rgba.h).join(', ');
}

// New helper function to decode thumbhash
function decodeThumbhash(thumbhash: string): Uint8Array {
	return new Uint8Array(
		atob(thumbhash)
			.split('')
			.map((char) => char.charCodeAt(0))
	);
}

const toHex = (n: number): string => {
	const hex = n.toString(16);
	return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (() => {
	const hexCache: { [key: string]: string } = {};
	return (r: number, g: number, b: number): string => {
		const key = `${r},${g},${b}`;
		if (hexCache[key]) return hexCache[key];
		const hex = '#' + toHex(r) + toHex(g) + toHex(b);
		hexCache[key] = hex;
		return hex;
	};
})();

// Save some bytes
function percentOrZero(num: number): string | 0 {
	if (num === 0) return 0;
	return `${num}%`;
}
/**
 * Converts raw RGBA pixels to an array of CSS gradients
 */
export function pixelsToCssGradients(
	pixels: Uint8Array | Uint8ClampedArray,
	columns: number,
	rows: number
): Array<string> {
	const stops: string[] = [];
	const colsMinusOne = columns - 1;
	const rowsMinusOne = rows - 1;

	for (let i = 0, j = 0; i < pixels.length; i += 4, j++) {
		const col = j % columns;
		const row = Math.floor(j / columns);

		const percentX = Math.round((col / colsMinusOne) * 100);
		const percentY = Math.round((row / rowsMinusOne) * 100);

		const r = pixels[i];
		const g = pixels[i + 1];
		const b = pixels[i + 2];

		stops.push(
			`radial-gradient(at ${percentOrZero(percentX)} ${percentOrZero(percentY)},${rgbToHex(r, g, b)},#00000000 50%)`
		);
	}
	return stops;
}

function rgbaToCSS(rgba: Uint8Array): string {
	return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3] / 255})`;
}
