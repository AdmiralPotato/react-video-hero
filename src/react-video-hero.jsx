var React = require('react');
var ReactDOM = require('react-dom');


var VideoHero = React.createClass({
	render(){
		var props = this.props;
		var sourceList = props.sources.map((source, index) => {
			return (<source key={index} type={source.type} src={source.src}/>);
		});
		var aspect = props.aspect || 'aspect-16_9';
		return (
			<div className={"VideoHero " + aspect}>
				<video poster={props.poster} preload="auto" autoPlay="autoPlay" muted="muted" loop="loop" webkit-playsinline="">
					{sourceList}
				</video>
				<div className="children">
					{props.children}
				</div>
			</div>
		);
	}
});

module.exports = VideoHero;
