import { IsOff, IsOn, FriendItem, FriendListItem, BoxFriend } from "./Friends.styled";
import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
    return (
        <BoxFriend>
            <FriendListItem>
                {
                    friends.map(el => (

                        <FriendItem key={el.id}>
                            {el.isOnline ? <IsOn></IsOn> : <IsOff></IsOff>}
                            <img src={el.avatar} alt="User avatar" width="48" />
                            <p>{el.name}</p>
                        </FriendItem>

                    ))}
            </FriendListItem>
        </BoxFriend>

    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}


