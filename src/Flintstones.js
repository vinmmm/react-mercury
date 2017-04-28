class Flintstones extends Component { render(){
return (
<div className="app">
<List id='todo' title="To Do" cards={ this.props.cards.filter((card) => card.status === "todo")
} />
<List id='in-progress' title="In Progress" cards={ this.props.cards.filter((card) => card.status === "in-progress")
} />
<List id='done' title='Done' cards={ this.props.cards.filter((card) => card.status === "done")
} />
</div> );
} }

let cardsList = [ {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
}, {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
{
id: 1,
        name: "ContactList Example",
done: true },
{
id: 2,
        name: "Kanban Example",
        done: false
      },
{
id: 3,
        name: "My own experiments",
done: false }
] },
];

export default Flintstones;