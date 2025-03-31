import { useState } from 'react'


function App() {

  return (
    <>
      <h1 className='text-center'>Post form</h1>

      <div className="container">

        <div class="mb-3">
          <label for="author" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            name="author"
            id="author"
            aria-describedby="authorHelp"
            placeholder="Mario Rossi"
          />
          <small id="authorHelp" class="form-text text-muted">Type post's author</small>
        </div>

        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            name="title"
            id="title"
            aria-describedby="titleHelp"
            placeholder="Title"
          />
          <small id="titleHelp" class="form-text text-muted">Type post's title</small>
        </div>


      </div>
    </>
  )
}

export default App
