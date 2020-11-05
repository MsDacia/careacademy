import { component } from 'vue-tsx-support'

import NoteForm from '@/components/NoteForm'

export default component({
	name: 'AddNote',
	render() {
		return (
			<section class="container-form">
				<h3 class="enhanced-style">Add New Note</h3>

				<NoteForm />
			</section>
		)
	},
})
