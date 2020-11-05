import { component } from 'vue-tsx-support'

import NoteForm from '@/components/NoteForm'

export default component({
	name: 'UpdateNote',
	render() {
		return (
			<section>
				<h3>Update Note</h3>

				<NoteForm />
			</section>
		)
	},
})
