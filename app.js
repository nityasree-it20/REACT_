
const parent = React.createElement(
    "div",
    {id :"parent"},
    React.createElement("div",
    {id:"child"},
    [
        React.createElement("h1",{},"I am H1 tag"),
        React.createElement("h2",{},"I am H2 tag")
    ]
    )
    )  

const heading = React.createElement(
        "h1",
        {id: "heading" , xyz: "abc"},
        "Hello world from React!!"
        );//tag,object,content
//object --> attributes to class
// render root to heading 
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(parent);
