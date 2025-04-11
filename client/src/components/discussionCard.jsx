
import "../stylesheets/discussionCard.css"

export function DiscussionCard({time, message}){
    return (
        <>
            <div className="discussionCardContainer">
                <div className="discussionCard">
                    <div className="discussion-time">{time}</div>
                    <hr />
                    <div className="discussion-message">
                        {message}
                    </div>
                </div>
            </div>
        </>
    );
};