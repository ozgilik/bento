// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Emrah',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '5b789622d06ff42efbb5823dc792b726', // Write here your API Key
	weatherIcons: 'Dark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '38.167',
	defaultLongitude: '32.500',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '2',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '3',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '4',
			name: 'Kick',
			icon: 'twitch',
			link: 'https://kick.com',
		},
		{
			id: '5',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://gmail.com',
		},
		{
			id: '6',
			name: 'Whatsapp',
			icon: 'message-circle',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '7',
			name: 'Opalstack',
			icon: 'server',
			link: 'https://my.opalstack.com',
		},
		{
			id: '8',
			name: 'Gemini',
			icon: 'dessert',
			link: 'https://gemini.google.com',
		},
		{
			id: '9',
			name: 'Cloudflare',
			icon: 'cloudy',
			link: 'https://dash.cloudflare.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Opalstack',
			icon: 'server-crash',
			link: 'https://opalstack.com',
		},
		{
			id: '2',
			name: 'Notion',
			icon: 'notebook-pen',
			link: 'https://www.notion.so',
		},
		{
			id: '3',
			name: 'Trello',
			icon: 'trello',
			link: 'https://trello.com',
		},
		{
			id: '4',
			name: 'Godaddy',
			icon: 'globe',
			link: 'https://godaddy.com/',
		},
		{
			id: '5',
			name: 'Figma',
			icon: 'figma',
			link: 'https://www.photopea.com/',
		},
		{
			id: '6',
			name: 'Finance',
			icon: 'badge-dollar-sign',
			link: 'https://bigpara.hurriyet.com.tr/doviz/dolar/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'webhook',
			id: '1',
			links: [
				{
					name: 'DeepSeek',
					link: 'https://chat.deepseek.com/',
				},
				{
					name: 'ChatGPT',
					link: 'https://chatgpt.com/',
				},
				{
					name: 'BlueSky',
					link: 'https://bsky.app/',
				},
				{
					name: 'Github',
					link: 'https://github.com/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Opalstack',
					link: 'https://my.opalstack.com/signin/',
				},
				{
					name: 'Notion',
					link: 'https://www.notion.com',
				},
				{
					name: 'Photoshop',
					link: 'https://www.photopea.com/',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
