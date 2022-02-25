import './Header.scss';
import shareIcon from '../assets/share_icon.svg';
import listIcon from '../assets/list_icon.svg';
import profileIcon from '../assets/profile_icon.svg';
import adminIcon from '../assets/admin_icon.svg';
import seaIcon from '../assets/sea_icon.svg';



const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <img className="share-icon icon" src={shareIcon} alt="share icon"/>
        <p>Shares</p>
        <img className="list-icon icon" src={listIcon} alt="3 bullet point list icon" />
        <p>Playlists</p>
        <img className="profile-icon icon" src={profileIcon} alt="silhoutte of head and shoulders" />
        <p>Personal Videos</p>
      </div>
      <div className="header-text-right">
          <img className="admin-icon" src={adminIcon} alt="silhouette of head and shoulders" />
          <img className="sea-icon" src={seaIcon} alt="outline of sun over the ocean" />
          <p>Admin Username</p>
          <p>Aesthetic!</p>
      </div>
    </header>
  )

}

export default Header;