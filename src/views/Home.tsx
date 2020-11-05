import { component } from 'vue-tsx-support'

export default component({
	name: 'Home',
	render() {
		return (
			<main>
				<header>
					<h1>Personal Notes</h1>
				</header>

				<section>
					{/* Notes will go here */}
				</section>

				<aside>
					{/* Add and Update Notes form go here */}
				</aside>
			</main>
		)
	},
})
