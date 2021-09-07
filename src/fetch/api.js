export default async function (url, method = 'GET', body, apiSide) {
    try{
        let api = url;
        let token = "c56685e39e86b7ca12434f0a727f9531b772c8d5";
        //let query = { lat:45.01530198999212, lon:39.01245117187501};
        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: body})
        }

        let res = await fetch(api, options)
        return  res.json()
    }
    catch (e) {
        return {error: e}
    }
}