const App = () => (
    <div>
        <Person name="Timothy Cratchit" age="7" hobbies={["Living Through Christmas", "Walking", "Being Fictional"]} />
        <Person name="Greta Thunberg" age="18" hobbies={["Eco Sciences", "Trees", "Politics"]} />
        <Person name="Elon Musk" age="52" hobbies={["Social Media", "Space", "Memes"]}/>
    </div>
);


ReactDOM.render(<App/>, document.getElementById("root")); 