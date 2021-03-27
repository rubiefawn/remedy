module.exports = {
	title: 'Remedy',
	tagline: 'Free and simple table-top roleplaying game',
	url: 'https://iansannar.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/logo.svg',
	organizationName: 'iansannar', // Usually your GitHub org/user name.
	projectName: 'remedy', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Home',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'rulebook',
					label: 'Rulebook',
					position: 'left',
				},
				{to: 'blog', label: 'Blog', position: 'left'},
			],
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
							label: 'Blog',
							to: 'blog',
						},
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
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/iansannar/remedy/edit/main/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/iansannar/remedy/edit/main/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
