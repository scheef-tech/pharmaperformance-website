// Should only be used in the client
export const getImageUrl = (imageId: string, accountId: string, host: string) => {
	// Ensure the host doesn't include the protocol
	const cleanHost = host.replace(/^https?:\/\//, '');
	return `https://${cleanHost}/cdn-cgi/imagedelivery/${accountId}/${imageId}`;
};

type ImageOptions = {
	accountId?: string;
	publicVariant?: boolean;
	host?: string;
};

export const imgSrc = (image: string, imgOptions?: ImageOptions) => {
	let hname =
		imgOptions?.host ?? (typeof window !== 'undefined' ? window.location.hostname : 'medella.si');

	// Remove any protocol from hname if present
	hname = hname.replace(/^https?:\/\//, '');

	if (hname === 'localhost') hname = 'medella.si';

	const accountId = imgOptions?.accountId ?? 'coO5-ODUTOt3Xy0qRkHGhQ';

	if (imgOptions?.publicVariant) {
		return getImageUrl(image, accountId, hname) + '/public';
	}

	return getImageUrl(image, accountId, hname);
};
