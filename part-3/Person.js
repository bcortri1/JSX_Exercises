const Person = ({name, age, hobbies=[]}) => (
    <div>
        <p>Learn some information about this person</p>
        <h2>{name.length > 8 ? name.substring(0,6) : name}</h2>
        <h3>{age < 18 ? "you must be 18" : "please go vote" }</h3>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
        <br/>
    </div>
);
