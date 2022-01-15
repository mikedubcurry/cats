export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { cat } = params;

	const cats = [
		{
			name: 'Humphrey',
			bio: 'Humphrey, or Hump as we call him is an older tuxedo who has a lot of personality. He enjoys breakfast, dinner, and scratching our dining room table. He is also fond of chewing my boot laces from time to time.',
			srcs: ['/hump1.jpg', '/hump2.png', '/hump3.jpg']
		},
		{
			name: 'Hamilton',
			bio: "Hamilton is a curious tripod who is the younger of our two kitties. A pink-nosed tuxedo with all of the personality of his brother, and then some. He doesn't let his disability get in the way of reaching high spots.",
			srcs: ['/ham1.jpg', '/ham2.jpg']
		}
	];

	if (cat !== 'all') {
		let [catData] = cats.filter((c) => c.name.toLowerCase() === cat);

		return {
			body: {
				cat: catData
			}
		};
	} else {
		return {
			body: {
				cats
			}
		};
	}
}
