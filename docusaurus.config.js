module.exports = {
	title: 'Remedy',
	tagline: 'Free and simple table-top roleplaying game',
	url: 'https://iansannar.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/icon.svg',
	organizationName: 'iansannar', // Usually your GitHub org/user name.
	projectName: 'remedy', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Remedy',
			logo: {
				alt: 'Remedy RPG Logo',
				src: 'img/logo.svg',
			},
			items: [],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Documentation',
					items: [
						{
							label: 'Get Involved',
							to: 'docs/contributing',
						},
						{
							label: 'License',
							to: 'docs/license',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/qeJvQ5b',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/iansannar/remedy',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Ian Sannar`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/iansannar/remedy/edit/main/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
