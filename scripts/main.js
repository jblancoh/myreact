const React = require('react')
const ReactDOM = require('react-dom')

var data = [
		{
			name: 'Carlos',
			lastName: 'Gonzalez',
			img: 'http://lorempixel.com/output/people-q-c-200-200-4.jpg',
			desc: 'django, css, html, js, React'
		},
		{
			name: 'Jonathan',
			lastName: 'Blanco',
			img: 'http://lorempixel.com/output/people-q-c-200-200-4.jpg',
			desc: 'django, css, html, js, React'
		},
		{
			name: 'O',
			lastName: 'Regardiz',
			img: 'http://lorempixel.com/output/people-q-c-200-200-4.jpg',
			desc: 'django, css, html, js, React'
		}
];
// App_cmp
let App = React.createClass({
	getInitialState: function(){
		return {data}
	},
	handleItemSubmit: function(item){
		var items = this.state.data;
		var newItems = items.concat([item]);
		this.setState({data: newItems})
	},
	render : function(){
		return(
			<div className = 'app-cmp'>
				<Form onItemSubmit={this.handleItemSubmit}/>
				<List data={this.state.data} />
			</div>
		)
	},
})

// Form_cmp

let Form = React.createClass({
	getInitialState: function(){
		return {name: '', lastName: '', img: '', desc: ''}
	},
	handleNameChange: function(e){
		this.setState({name: e.target.value})
	},
	handleLastNameChange: function(e) {
		this.setState({lastName: e.target.value})
	},
	handleImgChange: function(e){
		this.setState({img: e.target.value})
	},
	handleDescChange: function(e){
		this.setState({desc: e.target.value})
	},
	handleSubmit: function(e){
		e.preventDefault()
		var name = this.state.name.trim();
		var lastName = this.state.lastName.trim();
		var	img = this.state.img.trim();
		var desc = this.state.desc.trim();
		if(!lastName || !name || !img || !desc){
			return;
		}
		this.props.onItemSubmit({name: name, lastName: lastName, img: img, desc: desc})
		this.setState({name: '', lastName: '', img: '', desc: ''})
	},
	render : function(){
		return (
		<div className='form-cmp'>
			<form className="addForm" onSubmit={this.handleSubmit}>
				<input
					className='name'
					type='text'
					placeholder='Name'
					value={this.state.name}
					onChange={this.handleNameChange}
				/>
				<input
					className='lastname'
					type='text'
					placeholder='lastName'
					value={this.state.lastName}
					onChange={this.handleLastNameChange}
				/>
				<input
					className='img'
					type='text'
					placeholder='Image url'
					value={this.state.img}
					onChange={this.handleImgChange}
				/>
				<textarea
					className='description'
					placeholder='Description'
					value={this.state.desc}
					onChange={this.handleDescChange}
				>
				</textarea>
				<button type='submit' value='Post'>Add</button>
			</form>
		</div>
		)
	}
})

// List_cmp

let List = React.createClass({
	render : function(){
		var listNodes = this.props.data.map(function(item){
			return(
				<Item key={item.name}>
					{item}
				</Item>
			)
		})
			return(
				<div className='list-cmp'>
					{listNodes}
				</div>
			)
		}
})

// Item_cmp

let Item = React.createClass({
	render : function(){
		return(
			<div className="item">
				<li>{this.props.children.name}</li>
				<li>{this.props.children.lastName}</li>
				<li><img src={this.props.children.img}/></li>
				<li>{this.props.children.desc}</li>
			</div>
		)
	}
})


ReactDOM.render(<App data={data} />, document.getElementById('app'));
