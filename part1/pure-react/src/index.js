const react=document.getElementById('root');
const reactRoot=ReactDOM.createRoot(react);
const sayHello=(props)=>{
   return (React.createElement('h1',{className:'hello'},`Hello ${props.name}`));
}
const App=(props)=>{
    return (React.createElement(sayHello,{name:'Lucyy'}));
}
reactRoot.render(React.createElement(App));
