const linksOne = [
	{
		name: 'About Frylow',
		href: '/usa/frylow/about/',
	},
	{
		name: 'Frylow Benefits',
		href: '#',
	},
	{
		name: 'Blog',
		href: '#',
	},

	{
		name: 'FAQ',
		href: '#',
	},
	{
		name: 'Reviews',
		href: '#',
	},
]
const linksTwo = [
	{
		name: 'Expert Endorsements',
		href: '#',
	},
]

const linksThree = [
	{
		name: 'Why Consumers Care',
		href: '#',
	},
	{
		name: 'Why Restaurants Love Frylow',
		href: '#',
	},
	{
		name: 'See How Frylow Works/Videos',
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
