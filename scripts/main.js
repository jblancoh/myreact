const React = require('react')
const ReactDOM = require('react-dom')



// App_cmp
let App = React.createClass({
	getInitialState: function(){
		return{
			'sdfs' : {
				name: 'Carlos',
				lastName: 'Gonzalez',
				img: 'http://lorempixel.com/output/people-q-c-640-480-4.jpg',
				desc: 'django, css, html, js, React'
			},
			'asdf' : {
				name: 'Jonathan',
				lastName: 'Blanco',
				img: 'http://lorempixel.com/output/people-q-c-640-480-4.jpg',
				desc: 'django, css, html, js, React'
			},
			'3sdfsd' : {
				name: 'Carlos',
				lastName: 'Regardiz',
				img: 'http://lorempixel.com/output/people-q-c-640-480-4.jpg',
				desc: 'django, css, html, js, React'
			}
		}
	},
	render : function(){
		return(
			<div className = 'container app-cmp'>
				<Form />
				<List items = {this.state} />
			</div>
		)
	},
})

// Form_cmp

let Form = React.createClass({
	render : function(){
		return (
			<form >
				<div className='row form-cmp'>
					<div className='six columns'>
						<input className='name u-full-width' type='text' placeholder='Name'/>
					</div>
					<div className='six columns'>
						<input className='lastname u-full-width' type='text' placeholder='lastName'/>
					</div>
					<div className='twelve columns'>
						<input className='img' type='file' placeholder='Image url'/>
					</div>
					<div className='twelve columns'>
						<textarea className='description u-full-width' placeholder='Description'>
						</textarea>
					</div>
					<button type='submit' className='button-primary' value='Submit'>Add</button>
				</div>
			</form>
		)
	}
})

// List_cmp

let List = React.createClass({
	renderItem: function(key){
		return <Item item={this.props.items[key]} key = {key}/>
	},
	render : function(){
		return(
		<div className='list-cmp'>
			<ul>
			 	{
					Object.keys(this.props.items).map(this.renderItem)
				}
			</ul>
		</div>
		)
	}
})

// Item_cmp

let Item = React.createClass({
	render : function(){
		var item = this.props.item
		return(
			<div className= 'row item-cmp '>
				<li className = 'two columns'>
					<img src={item.img}/>
				</li>
				<li className = 'ten columns'>
					<span> {item.name} {item.lastName}</span>
					<p/>
					<span>{item.desc}</span>
				</li>
			</div>
		)
	}
})


ReactDOM.render(<App/>, document.getElementById('app'))
