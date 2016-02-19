var React = require('react');
var ReactDOM = require('react-dom');
var VideoHero = require('../lib/react-video-hero');

var variationList = [2, 4];
var whichOne = variationList[Math.round(Math.random())];
var heroProps = {
	poster: "https://raw.githubusercontent.com/AdmiralPotato/react-video-hero-content/master/live_for_the_tacos-"+whichOne+"-large-comp-b-1920-poster.jpg",
	sources: [
		{
			type: "video/webm",
			src: "https://raw.githubusercontent.com/AdmiralPotato/react-video-hero-content/master/live_for_the_tacos-"+whichOne+"-large-comp-b-1920.webm"
		}
	]
};

ReactDOM.render(
	(
		<VideoHero {...heroProps}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<h1>
							<strong>The fastest, easiest way</strong>
							<span> to look at motion graphics in hero banners on the internet!</span>
						</h1>
						<p>New to looking at motion graphics?</p>
						<button className="btn">Get started</button>
					</div>
				</div>
			</div>
		</VideoHero>
	),
	document.getElementById('example-basic')
);
