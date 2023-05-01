import { Photo, Text, ListItem, List, BoxProfile, BoxInfo} from "./Profile.styled"
import PropTypes from 'prop-types';
  
const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes} }) => {
    return (
    <BoxProfile>
        <BoxInfo>
      <Photo
        src={avatar}
        alt={`${username} avatar`}
      />
      <Text>{username}</Text>
      <Text>{`@${tag}`}</Text>
      <Text>{location}</Text>
        </BoxInfo>
    <List>
      <ListItem>
        <span >Followers </span>
        <span >{followers}</span>
      </ListItem>
      <ListItem>
        <span >Views </span>
        <span >{views}</span>
      </ListItem>
      <ListItem>
        <span >Likes </span>
        <span >{likes}</span>
      </ListItem>
    </List>
  </BoxProfile>
  )}
export default Profile

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
}