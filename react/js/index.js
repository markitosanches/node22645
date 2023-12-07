const Footer = (props) => {
    return(
    <footer className="py-3 text-black text-sm text-center mt-5">Copy Right {props.year} - {props.owner}</footer>
    )
}

const Button = ({classProp, onClick, text}) => {
    return(
    <button  type="button" className={`text-white px-4 py-2 rounded ${classProp}`} onClick={onClick}>{text}</button>
    )
}

const Input = ({text, type}) => {
    return(
        <label className="mt-3 block text-gray-600"> {text}
            <input type={type} className="border rounded px-3 py-1 mt-1 w-full" placeholder={`Insert your ${text}`}/>
        </label>
    )
}

const ReactAppFromCDN = () => {
    const onClickPrimary = () => {
        console.log('Primary')
    }
    const onClickSecondary = () => {
        console.log('Secondary')
    }
    return(
        <div className="container mx-auto text-white bg-blue-300 sm:bg-white sm:text-blue-500">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="text-4xl font-bold">React CDN with Tail Wind</h1>
                <div className="mx-auto mt-4">
                    <p className="text-xl mb-4">React Component</p>
                    <div className="flex gap-3 justify-center">
                        <Button text="Primary" classProp="bg-blue-500 hover:bg-blue-900" onClick={onClickPrimary}/>
                        <Button text="Secondary" classProp="bg-red-500 hover:bg-red-900" onClick={onClickSecondary}/>
                    </div>
                </div>
            </div>
            <Input text="Name" type="text"/>
            <Input text="Username" type="email"/>
            <Input text="Password" type="Password"/>
            <Footer year="2020-2023" owner="Class React"/> 
        </div>
    )
}

ReactDOM.render(<ReactAppFromCDN/>, document.querySelector('#root'))