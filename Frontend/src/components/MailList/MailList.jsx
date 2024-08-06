import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle"> Contact Us to Save time & money!</h1>
            <span className="mailDesc"> send message</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="send your message" />
                <button> Send</button>
            </div>
        </div>
    )
}

export default MailList