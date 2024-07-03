// import List

function CV({general, education, experience}){
  <>
  <h2>{general.name}</h2>
  <address>
    <ul>
      {general.address & <li>{general.email}</li>}
      {general.phone && <li>{general.phone}</li>}
      {general.linkedin && <li>{general.linkedin}</li>}
      {general.github && <li>{general.github}</li>}
      {general.website && <li>{general.website}</li>}
    </ul>
  </address>
  <h2>Education</h2>
  <ul>
    <List type={education} />
  </ul>

  <h2>Experience</h2>
  <ul>
    <List type={experience}/>
  </ul>
  </>
}