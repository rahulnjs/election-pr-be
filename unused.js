
fetch('/v1/voters', {
    method: "POST",
    body: JSON.stringify({
        limit: 5,
        filters: {
            age: { $gt: 56 },
            gender: "FEMALE"
        }
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then(r => r.json().then(d => console.log(d)));



/*
fetch('/v1/voters', {
  method: "POST",
  body: JSON.stringify({
    limit: 15
  }),
  headers: {
    "Content-type": "application/json"
  }
}).then(r => r.json().then(d => console.log(d)));
*/