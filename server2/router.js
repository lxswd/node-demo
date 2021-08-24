exports.route = (pathname, handle, res, req) => {
    console.log('About to route a request for', pathname)
    if(typeof handle[pathname] === 'function') {
        handle[pathname](res,req);
    } else {
        console.log(`No request handler found for ${pathname}`)
        res.writeHead(404,{
            "content-Type": "text/plain"
        })
        res.write('404 Not Found')
        res.end();
    }
}