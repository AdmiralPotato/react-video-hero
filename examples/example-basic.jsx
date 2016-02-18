var React = require('react');
var ReactDOM = require('react-dom');
var VideoHero = require('../lib/react-video-hero');

ReactDOM.render(
	(
		<VideoHero {...{
			poster: "https://raw.githubusercontent.com/AdmiralPotato/react-video-hero-content/master/glass_fragments-1280-poster.jpg",
			sources: [
				{type: "video/webm", src: "https://raw.githubusercontent.com/AdmiralPotato/react-video-hero-content/master/glass_fragments-1280.webm"},
			]
		}} />
	),
	document.getElementById('example-basic')
);
