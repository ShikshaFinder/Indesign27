export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Indesign27",
	description: "Let's Create Heaven At Home",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
	
		
	
		
		{
			label: "pricing",
			href: "/pricing",
		},
		{
			label: "blog",
			href: "/blog",
		},
		{
			label: "About US",
			href: "/about",
		},
		
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
