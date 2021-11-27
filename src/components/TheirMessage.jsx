const TheirMessage = ({ lastMessage, message }) => {
const isFirstMessageByThatUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  
return (
    <div className="message-row">
    {isFirstMessageByThatUser && (
        <div
        className="message-avatar"
        style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
    )}
    {message.attachments && message.attachments.length > 0
        ? (
        <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByThatUser ? '4px' : '48px' }}
        />
        )
        : (
        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByThatUser ? '4px' : '48px' }}>
            {message.text}
        </div>
        )}
    </div>
);
};

export default TheirMessage;