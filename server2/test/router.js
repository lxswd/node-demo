exports.route = (pathname, handle, req, res)=> {
    // console.log('route',pathname)
    // console.log('ccccccc',typeof pathname)
    // console.log('bbbbbbbbbb', typeof handle[pathname])
    if(typeof handle[pathname] == 'function') {
        handle[pathname](req, res)
    } else {
        res.writeHead('404', {
            "Content-Type": "text/plain"
        })
        res.end('404 Not found')
    }
}