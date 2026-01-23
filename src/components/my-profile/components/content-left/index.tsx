import { BaseAvatar } from '@/components/common/base-avatar';
import { useAppSelector } from '@/stores/hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import * as S from './index.styles';
import { arrayPath } from './index.utils';

const ContentLeft = () => {
  const router = useRouter();
  const { t } = useTranslation('my-profile');

  const user = useAppSelector((state) => state.auth.user);
  const name = user?.first_name?.charAt(0).toUpperCase();

  return (
    <S.ContentLeftWrapper>
      <S.AvatarWrapper>
        <BaseAvatar alt="User" shape="circle" size={163}>
          <S.NameAvatar>{name}</S.NameAvatar>
        </BaseAvatar>
      </S.AvatarWrapper>
      <S.Name title={`${user?.first_name} ${user?.last_name}`}>
        {user?.first_name} {user?.last_name}
      </S.Name>
      {arrayPath.map((item, index) => (
        <S.Path
          key={index}
          href={item.path}
          activepath={(item.path === router.pathname).toString()}>
          <S.PathIcon color={item.color} />
          <S.PathName>{t(item.name)}</S.PathName>
        </S.Path>
      ))}
    </S.ContentLeftWrapper>
  );
};

export default ContentLeft;
