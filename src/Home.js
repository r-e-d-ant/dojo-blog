const Home = () => {
    let name = 'mario';

    const handleClick = () => {
        name = 'luigi';
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;