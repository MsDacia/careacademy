import { component } from 'vue-tsx-support'

import NoteForm from '@/components/NoteForm'

export default component({
	name: 'AddNote',
	render() {
		return (
			<section>
				<h3>Add New Note</h3>

				<NoteForm />
			</section>
		)
	},
})
