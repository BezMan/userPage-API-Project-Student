// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance

const apiManager = new APIManager()
const renderer = new Renderer()

apiManager.loadData()

//simulating delay, fetch all data before rendering//
setTimeout(function(){ renderer.render(apiManager.data) }, 1500)

