import { useUser } from "../context/UserContext";

const Profile = () => {
  const { user } = useUser();
  return <div>Xin chào, {user.name}</div>;
};
export default Profile;
