function General(){
  return (
<section>
        <h2>General</h2>
        <fieldset>
          <legend>Name</legend>
          <div>
            <label htmlFor="First">First</label>
            <input id="First" type="text" />
          </div>
          <div>
            <label htmlFor="Last">Last</label>
            <input id="Last" type="text" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Contact</legend>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" />
          </div>
          <div>
            <label htmlFor="linkedin">Linkedin</label>
            <input id="linkedin" type="text" />
          </div>
          <div>
            <label htmlFor="github">Github</label>
            <input id="github" type="text" />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input id="website" type="text" />
          </div>
        </fieldset>
      </section>
  )
}

export default General