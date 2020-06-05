const Pet = ({ name, animal, breed }) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h3", {}, breed)
        ]
    );
};


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt me!"),
            React.createElement(Pet, {
                name: "Fluffy",
                animal: "cat",
                breed: "Persian"
            }),
            React.createElement(Pet, {
                name: "Tommy",
                animal: "dog",
                breed: "Lab"
            }),
        ]
    );
};



ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);