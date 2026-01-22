import styled from 'styled-components';

export const Country = styled.a`
  display: flex;

  .countrys {
    ul {
      margin-top: 15px;
      li {
        padding: 1rem !important;
        border-radius: 0 !important;

        &:first-child {
          border-bottom: 1px solid #ccc;
        }

        > span {
          padding: 0 1.5rem;
          text-align: center;

          font-weight: 500;
        }
      }
    }
  }
`;
