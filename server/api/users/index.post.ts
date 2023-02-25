import FormData from 'form-data'
import axios from 'axios'

export default defineEventHandler(async event => {
	// const data = await readBody(event)
	// // const newPosts = await posts.create(data)
	// return data

	const body: Array<any> = <Array<any>>await readMultipartFormData(event)

	const formData: FormData = new FormData()
	for (const data of body) {
		formData.append(data.name, data.type && data.filename ? data.data : data.data?.toString(), data.filename)
	}
	// formData.append('key', 'Testing data')
	const config1 = {
		method: 'post',
		url: 'http://192.168.1.9:3001/api/user',
		headers: {
			'Content-Type': 'multipart/form-data'
			// ...formData.getHeaders()
		},
		data: formData
	}
	console.log('formData', formData)
	try {
		const result = await (await axios(config1)).data
		// const result = await fetch(config1.url, {
		// 	method: 'POST',
		// 	body: formData,
		// 	headers: {
		// 		'Content-Type': 'multipart/form-data'
		// 	}
		// })
		console.log(result)
		const config = useRuntimeConfig()
		console.log(config.apiBase)
		return result
	} catch (error) {
		return {
			success: false,
			code: 500
		}
	}
})
