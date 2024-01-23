 
 const baseUrl='https://api.escuelajs.co/api/v1'
 
const get = async (
  endpoint ,
  params ,
  query ,
) => {
  let url = `${baseUrl}${endpoint}`;
  if (params) {
    Object.values(params).forEach(value => (url = url + `/${value}`));
  }
  if (query) {
    const searchQuery = Object.entries(query || {})
      .map((pair) => pair.map(encodeURIComponent).join('='))
      .join('&');
    url = url + `?${searchQuery}`;
  }

  return await 
    fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.log('Error:', error);
      throw error;
    });
}; 

export { get };
