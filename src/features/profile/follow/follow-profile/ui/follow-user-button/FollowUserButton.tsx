import { useQueryClient } from '@tanstack/react-query';
import { FollowButton, profileApi } from '~entities/profile';
import { useMutationFollowUser } from '../../model/followUser';

type FollowUserButtonProps = {
  queryKey: unknown[];
  profile: profileApi.Profile;
};

export function FollowUserButton(props: FollowUserButtonProps) {
  const { queryKey, profile } = props;

  const queryClient = useQueryClient();

  const followUser = useMutationFollowUser(queryKey, queryClient);

  const handleClick = () => {
    const newUser: profileApi.Profile = {
      ...profile,
      following: true,
    };
    followUser.mutate(newUser);
  };

  return <FollowButton title={profile.username} onClick={handleClick} />;
}
