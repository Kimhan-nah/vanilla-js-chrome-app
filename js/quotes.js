const quotes = [
	{
		quote : "Believe in yourself",
		author: "anonymous"
	},
	{
		quote : "Follow your heart",
		author: "anonymous"
	},
	{
		quote : "Seize the day",
		author: "anonymous"
	},
	{
		quote : "Love yourself",
		author: "anonymous"
	},
	{
		quote : "Life is journey",
		author: "anonymous"
	},
	{
		quote : "Life is unfair, get used to it",
		author: "anonymous"
	},
	{
		quote : "Hang in there",
		author: "anonymous"
	},
	{
		quote : "The harder you work, the more likely you can reach the goal",
		author: "anonymous"
	},
	{
		quote : "He can do, she can do, why not me?",
		author: "anonymous"
	},
	{
		quote : "It is not length of life, But depth of life",
		author: "anonymous"
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const rand = Math.floor(Math.random() * quotes.length);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;