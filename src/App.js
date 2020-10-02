import React, { Component } from 'react';
import './App.scss';

class App extends Component {
	state = {
		page: 'model',
		model: null,
		color: null,
		wheel: null,
	};

	renderModelPage = () => {
		return (
			<div className="model">
				<img src="tesla/model3/model3.png" alt="model3" onClick={() => this.setState({ page: 'exterior', model: 'model3', color: 'white', wheel: 'aero' })} />
				<img src="tesla/models/models.png" alt="models" onClick={() => this.setState({ page: 'exterior', model: 'models', color: 'white', wheel: 'aero' })} />
			</div>
		);
	};

	renderExteriorPage = () => {
		const { model, color, wheel } = this.state;

		return (
			<div className="exterior container">
				<div className="display">
					<img src={`tesla/${model}/exterior${color}${wheel}.png`} className="car" alt="car" />
				</div>
				<div className="menu">
					<div className="color">
						<h3>Select Color</h3>
						<div className="buttons">
							<img src={'tesla/exteriorWhiteButton.png'} alt="exterior white button" onClick={() => this.setState({ color: 'white' })} />
							<img src={'tesla/exteriorBlackButton.png'} alt="exterior black button" onClick={() => this.setState({ color: 'black' })} />
							<img src={'tesla/exteriorSilverButton.png'} alt="exterior silver button" onClick={() => this.setState({ color: 'silver' })} />
							<img src={'tesla/exteriorBlueButton.png'} alt="exterior blue button" onClick={() => this.setState({ color: 'blue' })} />
							<img src={'tesla/exteriorRedButton.png'} alt="exterior red button" onClick={() => this.setState({ color: 'red' })} />
						</div>
					</div>
					<div className="wheel">
						<h3>Select Wheels</h3>
						<div className="buttons">
							<img src={`tesla/${model}/aeroWheelButton.png`} alt="aero wheel button" onClick={() => this.setState({ wheel: 'aero' })} />
							<img src={`tesla/${model}/sportWheelButton.png`} alt="sport wheel button" onClick={() => this.setState({ wheel: 'sport' })} />
						</div>
					</div>
				</div>
			</div>
		);
	};

	renderInteriorPage = () => {
		const { model, color } = this.state;

		return (
			<div className="interior container">
				<div className="display">
					<img src={`tesla/${model}/interior${color}.png`} className="car" alt="car" />
				</div>
				<div className="menu">
					<div className="color">
						<h3>Select Color</h3>
						<div className="buttons">
							<img src={'tesla/interiorBlackButton.png'} alt="interior black button" onClick={() => this.setState({ color: 'black' })} />
							<img src={'tesla/interiorWhiteButton.png'} alt="interior white button" onClick={() => this.setState({ color: 'white' })} />
							{model === 'models' && <img src={'tesla/interiorOakButton.png'} alt="interior oak button" onClick={() => this.setState({ color: 'oak' })} />}
						</div>
					</div>
				</div>
			</div>
		);
	};

	render() {
		const { page, model } = this.state;
		return (
			<div className="app">
				<img src={'tesla/teslaBanner.png'} className="banner" alt="banner" />
				<div className="navigation">
					<span onClick={() => this.setState({ page: 'model' })}>Model</span>
					{model && <span onClick={() => this.setState({ page: 'exterior', color: 'white', wheel: 'aero' })}>Exterior</span>}
					{model && <span onClick={() => this.setState({ page: 'interior', color: 'black' })}>Interior</span>}
				</div>

				{page === 'model' && this.renderModelPage()}
				{page === 'exterior' && this.renderExteriorPage()}
				{page === 'interior' && this.renderInteriorPage()}

				<br />
				<div className="github">
					<a href="https://github.com/robghchen/build-tesla/blob/main/src/App.js" rel="noopener noreferrer" target="_blank">
						Visit Github repo for source code
					</a>
				</div>
			</div>
		);
	}
}

export default App;
