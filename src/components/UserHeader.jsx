import { PLACEHOLDER_URL } from "../constants";

const UserHeader = ({ user }) => {
  console.log(user);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img width={20} height={20} src={PLACEHOLDER_URL || user.avatarUrl} />
      <p>{user.name}</p>
    </div>
  );
};
export default UserHeader;
