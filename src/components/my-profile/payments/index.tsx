import ContentLeft from '../components/content-left';
import * as S from './index.styles';
import PaymentHistory from './payment-history';

const Payment = () => {
  return (
    <S.ContentWrapper>
      <ContentLeft />
      <S.ContentRight>
        <PaymentHistory />
      </S.ContentRight>
    </S.ContentWrapper>
  );
};

export default Payment;
