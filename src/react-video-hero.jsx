var React = require('react');
var ReactDOM = require('react-dom');


var VideoHero = React.createClass({
	getInitialState(){
		return {
			width: 0,
			height: 0,
			needsResizeUpdate: true
		};
	},
	componentDidMount(){
		var slider = this;
		window.addEventListener('resize', slider.invalidateDimensions);
		slider.updateDimensions();
		slider.setState({
			resizeFallbackIntervalId: setInterval(() => {
				slider.fallbackStateUpdate();
			}, 200)
		});
	},
	componentWillUnmount() {
		window.removeEventListener('resize', this.invalidateDimensions);
		this.updateDimensions();
		clearInterval(this.state.resizeFallbackIntervalId);
	},
	invalidateDimensions(){
		this.setState({
			needsResizeUpdate: true
		});
	},

	fallbackStateUpdate(){
		var slider = this;
		var holder = ReactDOM.findDOMNode(slider.refs['holder']);
		var holderWidth = holder ? holder.clientWidth : 0;
		var holderHeight = holder ? holder.clientHeight : 0;
		var holderWidthHasChanged = slider.state.holderWidth !== holderWidth;
		var holderHeightHasChanged = slider.state.holderHeight !== holderHeight;
		if (holderWidthHasChanged || holderHeightHasChanged) {
			slider.invalidateDimensions();
			slider.updateDimensions();
		}
	},

	updateDimensions(){
		var slider = this;
		//reference: http://stackoverflow.com/questions/19014250/reactjs-rerender-on-browser-resize
		if (slider.state.needsResizeUpdate) {
			var holder = ReactDOM.findDOMNode(slider.refs['holder']);
			var holderWidth = holder ? holder.clientWidth : 0;
			var holderHeight = holder ? holder.clientHeight : 0;
			slider.setState({
				width: holderWidth,
				height: holderHeight,
				needsResizeUpdate: false
			});
		}
	},

	render(){
		var props = this.props;
		var sourceList = props.sources.map((source, index) => {
			return (<source key={index} type={source.type} src={source.src}/>);
		});
		var ratioStyle = {};
		var videoRatio = 9 / 16;
		var holderRatio = this.state.height / this.state.width;
		if(videoRatio < holderRatio){
			ratioStyle.height = this.state.height;
		} else {
			ratioStyle.width = this.state.width;
		}
		var videoProps = {
			className: aspect,
			poster: props.poster,
			preload: "auto",
			autoPlay: "autoPlay",
			muted: "muted",
			loop: "loop",
			style: ratioStyle
		};

		var aspect = props.aspect || 'aspect-16_9';
		return (
			<div className="VideoHero" ref="holder">
				<video {...videoProps} webkit-playsinline="">
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
