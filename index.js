const axios = require('axios')
const FormData = require('form-data')

const API_URL = process.env.COSMIC_API_URL || 'https://api.cosmicjs.com'
const API_VERSION = process.env.COSMIC_API_VERSION || 'v1'
const URI = `${API_URL}/${API_VERSION}`
const Cosmic = (config) => {
	axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate'
	if (config && config.token) {
		axios.defaults.headers.common.Authorization = config.token
	}
	const main_methods = {
		authenticate: (params) => {
			const endpoint = `${URI}/authenticate`
			return axios.post(endpoint, params)
				.then(response => response.data)
				.catch((error) => {
					throw error.response.data
				})
		},
		getBuckets: () => {
			const endpoint = `${URI}/buckets`
			return axios.get(endpoint)
				.then(response => response.data)
				.catch((error) => {
					throw error.response.data
				})
		},
		addBucket: (params) => {
			const endpoint = `${URI}/buckets`
			return axios.post(endpoint, params)
				.then(response => response.data)
				.catch((error) => {
					throw error.response.data
				})
		},
		deleteBucket: (params) => {
			const endpoint = `${URI}/buckets/${params.id}`
			return axios.delete(endpoint, params)
				.then(response => response.data)
				.catch((error) => {
					throw error.response.data
				})
		},
		importBucket: (params) => {
			const endpoint = `${URI}/buckets/${params.id}/import`
			return axios.post(endpoint, params)
				.then(response => response.data)
				.catch((error) => {
					throw error.response.data
				})
		},
		deployApp: (params) => {
			const endpoint = `${URI}/buckets/${params.id}/deploy`
			return axios.post(endpoint, params)
				.then(response => response.data)
				.catch((error) => {
					throw error.response.data
				})
		}
	}
	const bucketMethods = (bucket_config) => {
		const bucket_methods = {
			getBucket: (params) => {
				let endpoint = `${URI}/${bucket_config.slug}/?read_key=${bucket_config.read_key}`
				if (params && params.show_options) {
					endpoint += `&show_options=${params.show_options}`
				}
				if (params && params.props) {
					endpoint += `&props=${params.props}`
				}
				if (params && typeof params.depth !== 'undefined') {
					endpoint += `&depth=${params.depth}`
				}
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			getObjects: (params) => {
				let endpoint = `${URI}/${bucket_config.slug}/objects?read_key=${bucket_config.read_key}`
				if (params && params.limit) {
					endpoint += `&limit=${params.limit}`
				}
				if (params && params.skip) {
					endpoint += `&skip=${params.skip}`
				}
				if (params && params.locale) {
					endpoint += `&locale=${params.locale}`
				}
				if (params && params.status) {
					endpoint += `&status=${params.status}`
				}
				if (params && params.sort) {
					endpoint += `&sort=${params.sort}`
				}
				// Type param
				if (params && params.type) {
					endpoint += `&type=${params.type}`
				}
				// Search params
				if (params && params.q) {
					endpoint += `&q=${params.q}`
				}
				if (params && params.metafield_key) {
					endpoint += `&metafield_key=${params.metafield_key}`
				}
				if (params && params.metafield_value) {
					endpoint += `&metafield_value=${params.metafield_value}`
				}
				if (params && params.metafield_object_id) {
					endpoint += `&metafield_object_id=${params.metafield_object_id}`
				}
				if (params && params.hide_metafields) {
					endpoint += `&hide_metafields=${params.hide_metafields}`
				}
				if (params && params.pretty) {
					endpoint += `&pretty=${params.pretty}`
				}
				if (params && params.filters) {
					Object.keys(params.filters).forEach((key) => {
						endpoint += `&filters[${key}]=${params.filters[key]}`
					})
				}
				if (params && params.metadata) {
					Object.keys(params.metadata).forEach((key) => {
						endpoint += `&metadata[${key}]=${params.metadata[key]}`
					})
				}
				if (params && params.props) {
					endpoint += `&props=${params.props}`
				}
				if (params && typeof params.created_by !== 'undefined') {
					endpoint += `&created_by=${params.created_by}`
				}
				if (params && typeof params.depth !== 'undefined') {
					endpoint += `&depth=${params.depth}`
				}
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			getObject: (params) => {
				if (!params) {
					throw new Error('Must supply params object with object slug')
				}
				let endpoint = `${URI}/${bucket_config.slug}/object/${params.slug}?read_key=${bucket_config.read_key}`
				if (params && params.locale) {
					endpoint += `&locale=${params.locale}`
				}
				if (params && params.status) {
					endpoint += `&status=${params.status}`
				}
				if (params && params.revision) {
					endpoint += `&revision=${params.revision}`
				}
				if (params && params.props) {
					endpoint += `&props=${params.props}`
				}
				if (params && typeof params.depth !== 'undefined') {
					endpoint += `&depth=${params.depth}`
				}
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			getObjectTypes: (params) => {
				let endpoint = `${URI}/${bucket_config.slug}/object-types?read_key=${bucket_config.read_key}`
				if (params && params.limit) {
					endpoint += `&limit=${params.limit}`
				}
				if (params && params.skip) {
					endpoint += `&skip=${params.skip}`
				}
				if (params && params.locale) {
					endpoint += `&locale=${params.locale}`
				}
				if (params && params.status) {
					endpoint += `&status=${params.status}`
				}
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			// DEPRECATED
			getObjectsByType: (params) => {
				let endpoint = `${URI}/${bucket_config.slug}/object-type/${params.type_slug}?read_key=${bucket_config.read_key}`
				if (params && params.limit) {
					endpoint += `&limit=${params.limit}`
				}
				if (params && params.skip) {
					endpoint += `&skip=${params.skip}`
				}
				if (params && params.locale) {
					endpoint += `&locale=${params.locale}`
				}
				if (params && params.status) {
					endpoint += `&status=${params.status}`
				}
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			// DEPRECATED
			searchObjectType: (params) => {
				let searchParams = `/search?metafield_key=${params.metafield_key}`
				if (params.metafield_value) {
					searchParams += `&metafield_value=${params.metafield_value}`
				} else if (params.metafield_object_slug) {
					searchParams += `&metafield_object_slug=${params.metafield_object_slug}`
				} else {
					searchParams += `&metafield_value_has=${params.metafield_value_has}`
				}
				let endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/object-type/${params.type_slug}${searchParams}&read_key=${bucket_config.read_key}`
				if (params && params.limit) {
					endpoint += `&limit=${params.limit}`
				}
				if (params && params.skip) {
					endpoint += `&skip=${params.skip}`
				}
				if (params && params.sort) {
					endpoint += `&sort=${params.sort}`
				}
				if (params && params.locale) {
					endpoint += `&locale=${params.locale}`
				}
				if (params && params.status) {
					endpoint += `&status=${params.status}`
				}
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			addObjectType: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/add-object-type`
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key
				}
				return axios.post(endpoint, params)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			editObjectType: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/edit-object-type`
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key
				}
				return axios.put(endpoint, params)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			deleteObjectType: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/object-types/${params.slug}`
				return axios.delete(endpoint, { data: bucket_config })
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			addObject: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/add-object`
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key
				}
				return axios.post(endpoint, params)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			editObject: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/edit-object`
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key
				}
				return axios.put(endpoint, params)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			editObjectMetafields: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/edit-object-metafields`
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key
				}
				return axios.patch(endpoint, params)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			deleteObject: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/objects/${params.slug}`
				const bucket_data = Object.assign({}, bucket_config)
				const data = Object.assign(bucket_data, params)
				return axios.delete(endpoint, { data })
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			addMedia: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/media`
				const data = new FormData()
				if (params.media.buffer) {
					data.append('media', params.media.buffer, params.media.originalname)
				} else {
					data.append('media', params.media, params.media.name)
				}
				if (bucket_config.write_key) {
					data.append('write_key', bucket_config.write_key)
				}
				if (params.folder) {
					data.append('folder', params.folder)
				}
				if (params.metadata) {
					data.append('metadata', JSON.stringify(params.metadata))
				}
				const getHeaders = (form =>
					new Promise((resolve, reject) => {
						if (params.media.buffer) {
							form.getLength((err, length) => {
								if (err) reject(err)
								const headers = Object.assign({ 'Content-Length': length }, form.getHeaders())
								resolve(headers)
							})
						} else {
							resolve({ 'Content-Type': 'multipart/form-data' })
						}
					})
				)
				return getHeaders(data)
					.then(headers => axios.post(endpoint, data, { headers })
						.then(response => response.data)
						.catch((error) => {
							throw error.response.data
						}))
			},
			getMedia: (params) => {
				let endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/media?read_key=${bucket_config.read_key}`
				if (params && params.limit) {
					endpoint += `&limit=${params.limit}`
				}
				if (params && params.skip) {
					endpoint += `&skip=${params.skip}`
				}
				if (params && params.locale) {
					endpoint += `&locale=${params.locale}`
				}
				if (params && params.status) {
					endpoint += `&status=${params.status}`
				}
				if (params && params.folder) {
					endpoint += `&folder=${params.folder}`
				}
				if (params && params.props) {
					endpoint += `&props=${params.props}`
				}
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			deleteMedia: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/media/${params.id}`
				return axios.delete(endpoint, { data: bucket_config })
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			addWebhook: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/webhooks`
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key
				}
				return axios.post(endpoint, params)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			deleteWebhook: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/webhooks/${params.id}`
				return axios.delete(endpoint, { data: bucket_config })
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			addExtension: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/extensions`
				let data
				if (params.zip) {
					data = new FormData()
					if (params.zip.buffer) {
						data.append('zip', params.zip.buffer, params.zip.originalname)
					} else {
						data.append('zip', params.zip, params.zip.name)
					}
					if (bucket_config.write_key) {
						data.append('write_key', bucket_config.write_key)
					}
				} else {
					data = params
					if (bucket_config.write_key) {
						data.write_key = bucket_config.write_key
					}
				}
				const getHeaders = (form =>
					new Promise((resolve, reject) => {
						if (params.zip) {
							if (params.zip.buffer) {
								form.getLength((err, length) => {
									if (err) reject(err)
									const headers = Object.assign({ 'Content-Length': length }, form.getHeaders())
									resolve(headers)
								})
							} else {
								resolve({ 'Content-Type': 'multipart/form-data' })
							}
						} else {
							resolve({ 'Content-Type': 'application/json' })
						}
					})
				)
				return getHeaders(data)
					.then(headers => axios.post(endpoint, data, { headers })
						.then(response => response.data)
						.catch((error) => {
							throw error.response.data
						}))
			},
			editExtension: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/extensions/${params.id}`
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key
				}
				return axios.put(endpoint, params)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			deleteExtension: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/extensions/${params.id}`
				return axios.delete(endpoint, { data: bucket_config })
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			addUser: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/users`
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key
				}
				return axios.post(endpoint, params)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			getUsers: () => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/users`
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			getUser: (params) => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/users/${params.id}`
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			},
			getWebhooks: () => {
				const endpoint = `${API_URL}/${API_VERSION}/${bucket_config.slug}/webhooks`
				return axios.get(endpoint)
					.then(response => response.data)
					.catch((error) => {
						throw error.response.data
					})
			}
		}
		return bucket_methods
	} // end bucketMethods
	// Combine methods
	let methods = {
		bucket: bucketMethods
	}
	methods = Object.assign(main_methods, methods)
	return methods
}

module.exports = Cosmic
