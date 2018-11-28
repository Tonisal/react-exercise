// const title = "this is a headline";
// const desc = "this is a paragraph";
// const myTitleID = 'main-title';
//
// const header = (
//     <header id ={ myTitleID }>
//         <h1>{ title }</h1>
//         <p>{ desc }</p>
//     </header>
// );

//Component as function
const Header = () => (
    //If the function just returns JSX, you can delete the "return" part
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
);

const Player = () => {
    return(
        <div className="player">
            <span className="player-name">
                Guil
            </span>
            <Counter />
        </div>
    );
}


const Counter = () => {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}


const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/*Players List*/}
            <Player />
        </div>
    );
}





ReactDOM.render(
    <App />,
    document.getElementById('root')
);
