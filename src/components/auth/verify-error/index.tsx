import IconWarning from '@/assets/images/svg/icon-triangle-warning.svg';
import * as Auth from '@/layouts/auth-layout/index.styles';
import React from 'react';

interface IProps {
  title: string;
  description: string;
}

const VerifyError = (props: IProps) => {
  const { title, description } = props;

  return (
    <Auth.FormWrapper>
      <Auth.VerifyWrapper>
        <Auth.IconVerify>
          <IconWarning />
        </Auth.IconVerify>
        <Auth.FormTitle>{title}</Auth.FormTitle>
        <Auth.DescriptionVerify>{description}</Auth.DescriptionVerify>
      </Auth.VerifyWrapper>
    </Auth.FormWrapper>
  );
};
export default VerifyError;
