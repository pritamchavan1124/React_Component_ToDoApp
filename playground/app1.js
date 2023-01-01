
class App extends React.Component {
    render(){
        const items = [
             { id: 1, title: 'read java book', status: 'complete' },
             { id: 2, title: 'read react book', status: 'pending' },
             { id: 1, title: 'read sql book', status: 'open' },
             { id: 1, title: 'read dotnet book', status: 'start' }
        ]
        return(
            <div>
                <Header title="Its Pritam" subtitle="Happy new year to all" />
               {/* // <Header title="CHAVAN" subtitle="Happy new year to all" />
               // <Header title="PRATIK PATHAK" subtitle="Happy new year to all" /> */}
                {/* <AddToDoItem /> */}
                <ToDoItemList items={items}/>
                <Footer message="copyrighted to PRITAM CHAVAN"/> 
                

            </div>
        )
    }

}

class Header extends React.Component{
    render(){
        return(
            <div className="title">
            <h2>{this.props.title}</h2>
            <p>{this.props.subtitle}</p>
        </div>
        )
    }
}
class AddToDoItem extends React.Component{
    render(){
        return(
            <div className="add-todo">
            <form>
            <div className="input-group mb-3">
                <textarea name="itemtext" className="form-control" rows="3" placeholder="Enter your ToDo app hear"></textarea>

                <button className="btn btn-success" type="submit" id="button-addon2">ADD</button>
            </div>
            </form>
        </div>
        )
    }
}
class ToDoItemList extends React.Component{
    render(){
        return(
            <div className="item-list">
            {
                this.props.items.map(item => {
                    return <div className='item'>
                        <div class="input-group mb-3">
                            <input value={item.title} type="text" className="form-control" readonly></input>
                            <button onClick={()=>{
                                markItemComplete(item)
                            }} className="btn btn-danger" type="button" id="button-addon2">Complete</button>
                        </div>
                    </div>
                })
            }
        </div>
        )
     
          
    }
}
class Footer extends React.Component{
    render(){
        return(
            <div className="footer"><h3>{this.props.message}</h3></div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'))