import styled from 'styled-components';

export const ContentFooter = styled.div`
  display: flex;
  padding: 12px 32px 0px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  border-top: 1px solid #d9d9d9;
`;

export const CompanyInfo = styled.div`
  color: #404040;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Reserved = styled.div`
  border-top: 1px solid #404040;
  display: flex;
  padding: 6px 0px 8px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  font-size: 13px;
  font-weight: 400;
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
`;

export const LinkUrl = styled.div`
  cursor: pointer;
  color: #404040;
  &:hover {
    color: #404040;
  }
`;
