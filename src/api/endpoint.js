export default (endpoint) => {
    if (window.location.href.startsWith("http://localhost")) {
        switch (endpoint){
            case "shards":
                return "http://localhost:1324"
            case "website":
                return "https://localhost:8080"
            default:
                return
        }
    }

    switch (endpoint){
        case "shards":
            return "https://shards.tweetshift.com"
        case "website":
            return "https://tweetshift.com"
        default:
            return
    }
    
}