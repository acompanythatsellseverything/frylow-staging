const linksOne = [
	{
		name: 'About VITO',
		href: '#',
	},
	{
		name: 'VITO Benefits',
		href: '#',
	},
	{
		name: 'Why Restaurants Love VITO',
		href: '#',
	},
	{
		name: 'Why Consumers Care',
		href: '#',
	},
]
const linksTwo = [
	{
		name: 'Reviews',
		href: '#',
	},
	{
		name: 'Expert Endorsements',
		href: '#',
	},
	{
		name: 'FAQ',
		href: '#',
	},
]

const linksThree = [
	{
		name: 'Blog',
		href: '#',
	},
	{
		name: 'See How VITO Works/Videos',
		href: '#',
	},
	{
		name: 'Contact Us',
		href: '#',
	},
]

const addLinks = [
	{
		name: 'Terms and Conditions',
		href: '#',
	},
	{
		name: 'Cookie Policy',
		href: '#',
	},
	{
		name: 'Privacy Policy',
		href: '#',
	},
]

const mobiLinks = [...linksTwo, ...linksThree]
const allLinks = [...linksOne, ...mobiLinks]

export { linksOne, linksTwo, linksThree, mobiLinks, addLinks, allLinks }
