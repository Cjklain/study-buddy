import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper, StyledList } from './UserList.styles';

const UserList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filtredUsers = users.filter((user) => user.name !== name);
    setUsers(filtredUsers);
  };

  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UserListItem key={userData.name} deleteUser={deleteUser} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UserList;
