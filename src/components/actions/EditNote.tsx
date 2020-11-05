import { component } from 'vue-tsx-support'

import NoteForm from '@/components/NoteForm'

export default component({
	name: 'EditNote',
	render() {
		return (
			<section>
				<h3>Edit Note</h3>

				<NoteForm />
			</section>
		)
	},
})
