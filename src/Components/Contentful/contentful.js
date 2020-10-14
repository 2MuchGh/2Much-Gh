const client = require('contentful').createClient({
    space:'zfvmqxakp6ee',
    accessToken:'26mhUCW5PeNvksPBKO_-R16pVxD52LBboVY9lp64LkA'
});

const getBlogPosts = () => 
client
.getEntries({
    content_type:'homePost'
})
.then(response=>response.items)

const getSportsBlog=()=>
    client.getEntries({
        content_type:'sports'
    })
    .then(respone=>respone.items)

const getSinglePost = slug => 
client
.getEntries({
'fields.slug':slug,
content_type:"homePost"
        })
.then(respone=>respone.items)

const getSingleSport=slug=>
    client.getEntries({
        'fields.slug':slug,
        content_type:'sports'
    })
    .then(respone=>respone.items)

const getMyBlog=()=>
client.getEntries({
    content_type:'blog'
})
.then(respone=>respone.items)

const getmySingleBlog= slug=>
client.getEntries({
    'fields.slug':slug,
    content_type:'blog'
})

const getEntertainBlog=()=> 
client.getEntries({
    content_type:'entertainment'
})
.then(respone=>respone.items)

const getPoliticBlog=()=>
    client.getEntries({
        content_type:'politics'
    })
    .then(response=>response.items)

  export {
    getBlogPosts,
    getSinglePost,
    getMyBlog,
    getmySingleBlog,
    getSportsBlog,
    getSingleSport,
    getEntertainBlog,
    getPoliticBlog
    };