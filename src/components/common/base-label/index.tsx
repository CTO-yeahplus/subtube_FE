import * as S from './index.styles';

const BaseLabel = ({ label, required }: { label: string; required?: boolean }) => {
  return (
    <S.Label>
      {label} {required && <S.Required>*</S.Required>}
    </S.Label>
  );
};

export default BaseLabel;
