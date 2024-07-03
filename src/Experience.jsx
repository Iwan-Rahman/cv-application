function Experience(){
  return (
    <section>
        <h2>Experience</h2>
        <fieldset className="experience">
          <legend>Experience</legend>
          <div>
            <label htmlFor="company">Company</label>
            <input id="company" type="text" />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input id="position" type="text" />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input id="startDate" type="text" />
          </div>
          <div>
            <label htmlFor="endDate">End Date</label>
            <input id="endDate" type="text" />
          </div>
          <div>
            <label htmlFor="jobDesc">Description</label>
            <textarea name="jobDesc" id="jobDesc"></textarea>
          </div>
        </fieldset>
      </section>
  )
}

export default Experience;