'use strict';

var axios = require('axios');
var FormData = require('form-data');

var API_URL = process.env.COSMIC_API_URL || 'https://api.cosmicjs.com';
var API_VERSION = process.env.COSMIC_API_VERSION || 'v1';
var URI = API_URL + '/' + API_VERSION;
var Cosmic = function Cosmic(config) {
	axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate';
	if (config && config.token) {
		axios.defaults.headers.common.Authorization = config.token;
	}
	var main_methods = {
		authenticate: function authenticate(params) {
			var endpoint = URI + '/authenticate';
			return axios.post(endpoint, params).then(function (response) {
				return response.data;
			}).catch(function (error) {
				throw error.response.data;
			});
		},
		getBuckets: function getBuckets() {
			var endpoint = URI + '/buckets';
			return axios.get(endpoint).then(function (response) {
				return response.data;
			}).catch(function (error) {
				throw error.response.data;
			});
		},
		addBucket: function addBucket(params) {
			var endpoint = URI + '/buckets';
			return axios.post(endpoint, params).then(function (response) {
				return response.data;
			}).catch(function (error) {
				throw error.response.data;
			});
		},
		deleteBucket: function deleteBucket(params) {
			var endpoint = URI + '/buckets/' + params.id;
			return axios.delete(endpoint, params).then(function (response) {
				return response.data;
			}).catch(function (error) {
				throw error.response.data;
			});
		},
		importBucket: function importBucket(params) {
			var endpoint = URI + '/buckets/' + params.id + '/import';
			return axios.post(endpoint, params).then(function (response) {
				return response.data;
			}).catch(function (error) {
				throw error.response.data;
			});
		},
		deployApp: function deployApp(params) {
			var endpoint = URI + '/buckets/' + params.id + '/deploy';
			return axios.post(endpoint, params).then(function (response) {
				return response.data;
			}).catch(function (error) {
				throw error.response.data;
			});
		}
	};
	var bucketMethods = function bucketMethods(bucket_config) {
		var bucket_methods = {
			getBucket: function getBucket(params) {
				var endpoint = URI + '/' + bucket_config.slug + '/?read_key=' + bucket_config.read_key;
				if (params && params.show_options) {
					endpoint += '&show_options=' + params.show_options;
				}
				if (params && params.props) {
					endpoint += '&props=' + params.props;
				}
				if (params && typeof params.depth !== 'undefined') {
					endpoint += '&depth=' + params.depth;
				}
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			getObjects: function getObjects(params) {
				var endpoint = URI + '/' + bucket_config.slug + '/objects?read_key=' + bucket_config.read_key;
				if (params && params.limit) {
					endpoint += '&limit=' + params.limit;
				}
				if (params && params.skip) {
					endpoint += '&skip=' + params.skip;
				}
				if (params && params.locale) {
					endpoint += '&locale=' + params.locale;
				}
				if (params && params.status) {
					endpoint += '&status=' + params.status;
				}
				if (params && params.sort) {
					endpoint += '&sort=' + params.sort;
				}
				// Type param
				if (params && params.type) {
					endpoint += '&type=' + params.type;
				}
				// Search params
				if (params && params.q) {
					endpoint += '&q=' + params.q;
				}
				if (params && params.metafield_key) {
					endpoint += '&metafield_key=' + params.metafield_key;
				}
				if (params && params.metafield_value) {
					endpoint += '&metafield_value=' + params.metafield_value;
				}
				if (params && params.metafield_object_id) {
					endpoint += '&metafield_object_id=' + params.metafield_object_id;
				}
				if (params && params.hide_metafields) {
					endpoint += '&hide_metafields=' + params.hide_metafields;
				}
				if (params && params.pretty) {
					endpoint += '&pretty=' + params.pretty;
				}
				if (params && params.filters) {
					Object.keys(params.filters).forEach(function (key) {
						endpoint += '&filters[' + key + ']=' + params.filters[key];
					});
				}
				if (params && params.metadata) {
					Object.keys(params.metadata).forEach(function (key) {
						endpoint += '&metadata[' + key + ']=' + params.metadata[key];
					});
				}
				if (params && params.props) {
					endpoint += '&props=' + params.props;
				}
				if (params && typeof params.created_by !== 'undefined') {
					endpoint += '&created_by=' + params.created_by;
				}
				if (params && typeof params.depth !== 'undefined') {
					endpoint += '&depth=' + params.depth;
				}
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			getObject: function getObject(params) {
				if (!params) {
					throw new Error('Must supply params object with object slug');
				}
				var endpoint = URI + '/' + bucket_config.slug + '/object/' + params.slug + '?read_key=' + bucket_config.read_key;
				if (params && params.locale) {
					endpoint += '&locale=' + params.locale;
				}
				if (params && params.status) {
					endpoint += '&status=' + params.status;
				}
				if (params && params.revision) {
					endpoint += '&revision=' + params.revision;
				}
				if (params && params.props) {
					endpoint += '&props=' + params.props;
				}
				if (params && typeof params.depth !== 'undefined') {
					endpoint += '&depth=' + params.depth;
				}
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			getObjectTypes: function getObjectTypes(params) {
				var endpoint = URI + '/' + bucket_config.slug + '/object-types?read_key=' + bucket_config.read_key;
				if (params && params.limit) {
					endpoint += '&limit=' + params.limit;
				}
				if (params && params.skip) {
					endpoint += '&skip=' + params.skip;
				}
				if (params && params.locale) {
					endpoint += '&locale=' + params.locale;
				}
				if (params && params.status) {
					endpoint += '&status=' + params.status;
				}
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			// DEPRECATED
			getObjectsByType: function getObjectsByType(params) {
				var endpoint = URI + '/' + bucket_config.slug + '/object-type/' + params.type_slug + '?read_key=' + bucket_config.read_key;
				if (params && params.limit) {
					endpoint += '&limit=' + params.limit;
				}
				if (params && params.skip) {
					endpoint += '&skip=' + params.skip;
				}
				if (params && params.locale) {
					endpoint += '&locale=' + params.locale;
				}
				if (params && params.status) {
					endpoint += '&status=' + params.status;
				}
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			// DEPRECATED
			searchObjectType: function searchObjectType(params) {
				var searchParams = '/search?metafield_key=' + params.metafield_key;
				if (params.metafield_value) {
					searchParams += '&metafield_value=' + params.metafield_value;
				} else if (params.metafield_object_slug) {
					searchParams += '&metafield_object_slug=' + params.metafield_object_slug;
				} else {
					searchParams += '&metafield_value_has=' + params.metafield_value_has;
				}
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/object-type/' + params.type_slug + searchParams + '&read_key=' + bucket_config.read_key;
				if (params && params.limit) {
					endpoint += '&limit=' + params.limit;
				}
				if (params && params.skip) {
					endpoint += '&skip=' + params.skip;
				}
				if (params && params.sort) {
					endpoint += '&sort=' + params.sort;
				}
				if (params && params.locale) {
					endpoint += '&locale=' + params.locale;
				}
				if (params && params.status) {
					endpoint += '&status=' + params.status;
				}
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			addObjectType: function addObjectType(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/add-object-type';
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key;
				}
				return axios.post(endpoint, params).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			editObjectType: function editObjectType(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/edit-object-type';
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key;
				}
				return axios.put(endpoint, params).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			deleteObjectType: function deleteObjectType(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/object-types/' + params.slug;
				return axios.delete(endpoint, { data: bucket_config }).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			addObject: function addObject(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/add-object';
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key;
				}
				return axios.post(endpoint, params).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			editObject: function editObject(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/edit-object';
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key;
				}
				return axios.put(endpoint, params).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			editObjectMetafields: function editObjectMetafields(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/edit-object-metafields';
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key;
				}
				return axios.patch(endpoint, params).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			deleteObject: function deleteObject(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/objects/' + params.slug;
				var bucket_data = Object.assign({}, bucket_config);
				var data = Object.assign(bucket_data, params);
				return axios.delete(endpoint, { data: data }).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			addMedia: function addMedia(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/media';
				var data = new FormData();
				if (params.media.buffer) {
					data.append('media', params.media.buffer, params.media.originalname);
				} else {
					data.append('media', params.media, params.media.name);
				}
				if (bucket_config.write_key) {
					data.append('write_key', bucket_config.write_key);
				}
				if (params.folder) {
					data.append('folder', params.folder);
				}
				if (params.metadata) {
					data.append('metadata', JSON.stringify(params.metadata));
				}
				var getHeaders = function getHeaders(form) {
					return new Promise(function (resolve, reject) {
						if (params.media.buffer) {
							form.getLength(function (err, length) {
								if (err) reject(err);
								var headers = Object.assign({ 'Content-Length': length }, form.getHeaders());
								resolve(headers);
							});
						} else {
							resolve({ 'Content-Type': 'multipart/form-data' });
						}
					});
				};
				return getHeaders(data).then(function (headers) {
					return axios.post(endpoint, data, { headers: headers }).then(function (response) {
						return response.data;
					}).catch(function (error) {
						throw error.response.data;
					});
				});
			},
			getMedia: function getMedia(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/media?read_key=' + bucket_config.read_key;
				if (params && params.limit) {
					endpoint += '&limit=' + params.limit;
				}
				if (params && params.skip) {
					endpoint += '&skip=' + params.skip;
				}
				if (params && params.locale) {
					endpoint += '&locale=' + params.locale;
				}
				if (params && params.status) {
					endpoint += '&status=' + params.status;
				}
				if (params && params.folder) {
					endpoint += '&folder=' + params.folder;
				}
				if (params && params.props) {
					endpoint += '&props=' + params.props;
				}
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			deleteMedia: function deleteMedia(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/media/' + params.id;
				return axios.delete(endpoint, { data: bucket_config }).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			addWebhook: function addWebhook(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/webhooks';
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key;
				}
				return axios.post(endpoint, params).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			deleteWebhook: function deleteWebhook(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/webhooks/' + params.id;
				return axios.delete(endpoint, { data: bucket_config }).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			addExtension: function addExtension(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/extensions';
				var data = void 0;
				if (params.zip) {
					data = new FormData();
					if (params.zip.buffer) {
						data.append('zip', params.zip.buffer, params.zip.originalname);
					} else {
						data.append('zip', params.zip, params.zip.name);
					}
					if (bucket_config.write_key) {
						data.append('write_key', bucket_config.write_key);
					}
				} else {
					data = params;
					if (bucket_config.write_key) {
						data.write_key = bucket_config.write_key;
					}
				}
				var getHeaders = function getHeaders(form) {
					return new Promise(function (resolve, reject) {
						if (params.zip) {
							if (params.zip.buffer) {
								form.getLength(function (err, length) {
									if (err) reject(err);
									var headers = Object.assign({ 'Content-Length': length }, form.getHeaders());
									resolve(headers);
								});
							} else {
								resolve({ 'Content-Type': 'multipart/form-data' });
							}
						} else {
							resolve({ 'Content-Type': 'application/json' });
						}
					});
				};
				return getHeaders(data).then(function (headers) {
					return axios.post(endpoint, data, { headers: headers }).then(function (response) {
						return response.data;
					}).catch(function (error) {
						throw error.response.data;
					});
				});
			},
			editExtension: function editExtension(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/extensions/' + params.id;
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key;
				}
				return axios.put(endpoint, params).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			deleteExtension: function deleteExtension(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/extensions/' + params.id;
				return axios.delete(endpoint, { data: bucket_config }).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			addUser: function addUser(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/users';
				if (bucket_config.write_key) {
					params.write_key = bucket_config.write_key;
				}
				return axios.post(endpoint, params).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			getUsers: function getUsers() {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/users';
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			getUser: function getUser(params) {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/users/' + params.id;
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			},
			getWebhooks: function getWebhooks() {
				var endpoint = API_URL + '/' + API_VERSION + '/' + bucket_config.slug + '/webhooks';
				return axios.get(endpoint).then(function (response) {
					return response.data;
				}).catch(function (error) {
					throw error.response.data;
				});
			}
		};
		return bucket_methods;
	}; // end bucketMethods
	// Combine methods
	var methods = {
		bucket: bucketMethods
	};
	methods = Object.assign(main_methods, methods);
	return methods;
};

module.exports = Cosmic;