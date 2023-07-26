const Error = ({ message }) => {
    return (
        <div>
            <p className="bg-red-800 text-white text-center uppercase p-3 mb-3 rounded-md">{ message }</p>
        </div>
    )
}

export default Error