export async function Get() {
    return new Reponse(JSON.stringify({message: "Hello from API"},{
        headers:{"Content-Type":"application/json"},
    }))
}