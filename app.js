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


const players = [
    {
        name: "Guil",
        score: 50,
        id: 1
    },
    {
        name: "Treasure",
        score: 85,
        id: 2
    },
    {
        name: "Ashley",
        score: 95,
        id: 3
    },
    {
        name: "James",
        score: 80,
        id: 4
    }
];




//Component as function
//Stateless functional component
const Header = (props) => {
    return (
        //If the function just returns JSX, you can delete the "return" part
        <header>
            <h1>{props.title}</h1>
            <span className="stats"> Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    );
}

//Component as class
class Counter extends React.Component {

    state = {
        score: 0,
    };

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> -</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment"> +</button>
            </div>
        );
    }
}


const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Here is a title!" totalPlayers = {props.initialPlayers.length}/>

            {/*Players List*/}
            {props.initialPlayers.map(player =>
                    <Player
                        name={player.name}
                        score={player.score}
                        key={player.id.toString()}
                    />
            )}
        </div>
    );
}


ReactDOM.render(
    <App initialPlayers = {players}/>,
    document.getElementById('root')
);
