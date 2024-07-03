function Education(){
  return (
<section>
        <h2>Education</h2>
        <fieldset className="education">
          <legend>School</legend>
          <div>
            <label htmlFor="schoolName">School</label>
            <input id="schoolName" type="text" />
          </div>
          <div>
            <label htmlFor="enrolled">Enrolled</label>
            <input id="enrolled" type="text" />
          </div>
          <div>
            <label htmlFor="graduation">Graduation</label>
            <input id="graduation" type="text" />
          </div>
          <div>
            <label htmlFor="degree">Degree</label>
            <select name="type" id="degree">
              <option value="bachelors">Bachelors</option>
              <option value="certificate">Certificate</option>
              <option value="diploma">Diploma</option>
              <option value="masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <div>
            <label htmlFor="program">Program</label>
            <input id="program" type="text" />
          </div>
          <div>
            <label htmlFor="gpa">GPA</label>
            <input id="gpa" type="number" />
          </div>
          <div>
            <label htmlFor="schoolDesc">Description</label>
            <textarea name="schoolDesc" id="schoolDesc"></textarea>
          </div>
        </fieldset>
      </section>
  )
}

export default Education;