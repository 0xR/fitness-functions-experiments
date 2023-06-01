import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { conduitApi } from '~shared/api';
import { addUser } from '../model/sessionModel';

export type User = {
  email: string;
  token: string;
  username: string;
  bio?: string | null;
  image?: string | null;
};

type UseCurrentUserOptions = UseQueryOptions<User, unknown, User, string[]>;

function mapUserDto(userDto: conduitApi.UserDto): User {
  return {
    ...userDto.user,
    ...(!userDto.user.bio && { bio: undefined }),
    ...(!userDto.user.image && { image: undefined }),
  };
}

// TODO: add DI model.addUser(user)
export const useCurrentUser = (options?: UseCurrentUserOptions) =>
  useQuery(
    ['currentUser'],
    async ({ signal }) => {
      const userDto = await conduitApi.Auth.сurrentUser(signal);
      const user = mapUserDto(userDto);

      addUser(user);

      return user;
    },
    options,
  );

type UseRegisterUserOptions = UseMutationOptions<
  conduitApi.UserDto,
  unknown,
  conduitApi.RegisterData,
  unknown
>;

export const useRegisterUser = (options?: UseRegisterUserOptions) =>
  useMutation(
    (data: conduitApi.RegisterData) => conduitApi.Auth.register(data),
    options,
  );

type UseLoginUserOptions = UseMutationOptions<
  conduitApi.UserDto,
  unknown,
  conduitApi.LoginData,
  unknown
>;

export const useLoginUser = (options?: UseLoginUserOptions) =>
  useMutation(
    (userData: conduitApi.LoginData) => conduitApi.Auth.login(userData),
    options,
  );
