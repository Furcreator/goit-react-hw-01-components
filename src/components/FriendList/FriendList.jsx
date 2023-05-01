import { FriendListBlock, BoxFriend } from "./FriendList.styled";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
const FriendList = ({ friends }) => {
    return (
        <BoxFriend>
            <FriendListBlock>
                {
                    friends.map(el => (
                        <FriendListItem
                            key={el.id}
                            avatar={el.avatar}
                            name={el.name}
                            isOnline={el.isOnline}
                        />
                    ))}
            </FriendListBlock>
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
    }).isRequired).isRequired
}


