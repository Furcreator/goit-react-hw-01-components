import { FriendItem, IsOn, IsOff } from "./FriendList.styled";
import PropTypes from 'prop-types';

export default function FriendListItem({ isOnline, avatar, name, id }) {
    return (
        <FriendItem key={id}>
            {isOnline ? <IsOn></IsOn> : <IsOff></IsOff>}
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </FriendItem>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };