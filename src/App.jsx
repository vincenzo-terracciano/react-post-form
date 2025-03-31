import { useState } from 'react'
const api_endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  function handleFormData(e) {
    const key = e.target.name;
    const value = e.target.type === 'radio' ? e.target.value === 'true' : e.target.value;
    setFormData({ ...formData, [key]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData);


    fetch(api_endpoint, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })
  }

  return (
    <>
      <h1 className='text-center'>Post form</h1>

      <div className="container">

        <form method='POST' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="author"
              id="author"
              aria-describedby="authorHelp"
              placeholder="Mario Rossi"
              value={formData.author}
              onChange={handleFormData}
            />
            <small id="authorHelp" className="text">Type post's author</small>
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="titleHelp"
              placeholder="Title"
              value={formData.title}
              onChange={handleFormData}
            />
            <small id="titleHelp" className="text">Type post's title</small>
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">Text</label>
            <textarea className="form-control" name="body" id="body" rows="3"
              value={formData.body}
              onChange={handleFormData}></textarea>
            <small id="bodyHelp" className="text">Type post's text</small>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="public" id="public"
              value='true'
              onChange={handleFormData} />
            <label className="form-check-label" htmlFor="public"> Public </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="public" id="draft"
              value='false'
              onChange={handleFormData} />
            <label className="form-check-label" htmlFor="public">
              Draft
            </label>
          </div>

          <button type="submit" className='btn btn-primary my-3'>Submit</button>

        </form>
      </div>
    </>
  )
}

export default App
