const Tweet = ({username="default", date="99/99/99", message="nothing to see here"}) => (
    <div>
        <p>{message}</p>
        <p>by {username}, {date}</p>
    </div>
);