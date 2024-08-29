const linksOne = [
	{
		name: 'About Frylow',
		href: '#',
	},
	{
		name: 'Frylow Benefits',
		href: '#',
	},
	{
		name: 'Why Restaurants Love Frylow',
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
