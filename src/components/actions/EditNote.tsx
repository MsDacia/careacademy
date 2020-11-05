import { component } from 'vue-tsx-support'

import NoteForm from '@/components/NoteForm'

export default component({
	name: 'EditNote',
	render() {
		return (
			<section class="container-form">
				<h3 class="enhanced-style">Edit Note</h3>

				<NoteForm />
			</section>
		)
	},
})
