import './style'
import Image from '../../src/preact'
import { Component } from 'preact'

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<Image src="https://res.cloudinary.com/stackpie/image/upload/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg" />
			</div>
		)
	}
}