import React, {useState, useEffect} from 'react';

function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    .then((response)=>{
      if(!response.ok){
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
    }
    return response.json();
      })
      .then((actualData)=> {setData(actualData);
        setError(null);
      })
      .catch((err) => {setError(err.message);
        setData(null);
      })
      .finally(()=>{
        setLoading(false);
      })
  },);
  return (
    <div>
      <h1>API POST FROM JSON PLACEHOLDER</h1>
      {loading && <p>A moment please...</p>}
      {error && (<p>{`There is a problem fetching data from the post - ${error}`}</p>
      )}
      <ul>
        {data && data.map(({id, title, body})=>(
          <li key={id}>
            <span>{id}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About