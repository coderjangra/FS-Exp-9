import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Replace with your EC2 Public IP or ALB DNS after deployment
    const BACKEND_URL = 'http://54.242.232.156'

    fetch(`${BACKEND_URL}/api/data`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Experiment 3.3: Cloud Deployment</h1>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Frontend Status: <span style={{ color: 'green' }}>Online (Firebase/Netlify)</span></h2>
        <h2>Backend Response:</h2>
        {loading ? (
          <p>Connecting to EC2...</p>
        ) : data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p style={{ color: 'red' }}>Could not connect to EC2 backend.</p>
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Scalability & Monitoring</h3>
        <ul>
          <li><strong>Load Balancing:</strong> Configured via AWS ALB</li>
          <li><strong>Monitoring:</strong> AWS CloudWatch + GitHub Actions</li>
          <li><strong>CI/CD:</strong> Automated via GitHub Actions</li>
        </ul>
      </div>
    </div>
  )
}

export default App
