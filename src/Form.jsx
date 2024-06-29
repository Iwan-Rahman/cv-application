import "./App.css";

function Form() {
  return (
    <form>
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
            <label htmlFor="address">Address</label>
            <input id="address" type="text" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" />
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
    </form>
  );
}

export default Form;
