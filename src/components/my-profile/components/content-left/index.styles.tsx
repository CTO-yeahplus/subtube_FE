import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const ContentLeftWrapper = styled.div`
  padding: 3.125rem 3.625rem;
  border-radius: 0.75rem;
  background-color: var(--white);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  width: 35%;
  max-width: 500px;
  height: fit-content;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

export const AvatarImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const NameAvatar = styled.div`
  color: var(--text-main-color);
  font-size: 60px;
  font-weight: 700;
`;

export const Name = styled.h2`
  color: var(--text-dark-color);
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Path = styled(Link)<{ activepath: string }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  border-radius: 12px;
  padding: 0.375rem 0;
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
  ${(props) =>
    props.activepath === 'true' &&
    css`
      background-color: #fafafa;
    `};
`;

const UserIcon = ({ color }: { color: string }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="36" height="36" rx="4" fill={color} fillOpacity="0.05" />
    <path
      d="M24.4329 23.4951C23.481 21.8495 22.0142 20.6695 20.3023 20.1101C21.1491 19.606 21.8069 18.8379 22.1749 17.9237C22.5429 17.0096 22.6006 15.9999 22.3392 15.0497C22.0778 14.0996 21.5117 13.2615 20.7279 12.6642C19.9441 12.0669 18.9859 11.7434 18.0004 11.7434C17.015 11.7434 16.0567 12.0669 15.2729 12.6642C14.4891 13.2615 13.923 14.0996 13.6616 15.0497C13.4002 15.9999 13.4579 17.0096 13.8259 17.9237C14.1939 18.8379 14.8518 19.606 15.6985 20.1101C13.9867 20.6689 12.5198 21.8489 11.5679 23.4951C11.533 23.552 11.5099 23.6154 11.4998 23.6814C11.4898 23.7474 11.4931 23.8147 11.5095 23.8795C11.5259 23.9442 11.5551 24.0049 11.5954 24.0582C11.6357 24.1114 11.6862 24.1561 11.7441 24.1895C11.8019 24.2229 11.8658 24.2443 11.932 24.2526C11.9983 24.2609 12.0655 24.2559 12.1298 24.2378C12.1941 24.2196 12.2541 24.1888 12.3062 24.1472C12.3584 24.1055 12.4017 24.0538 12.4335 23.9951C13.611 21.9601 15.6923 20.7451 18.0004 20.7451C20.3085 20.7451 22.3898 21.9601 23.5673 23.9951C23.5992 24.0538 23.6424 24.1055 23.6946 24.1472C23.7468 24.1888 23.8068 24.2196 23.871 24.2378C23.9353 24.2559 24.0025 24.2609 24.0688 24.2526C24.135 24.2443 24.199 24.2229 24.2568 24.1895C24.3146 24.1561 24.3651 24.1114 24.4054 24.0582C24.4457 24.0049 24.4749 23.9442 24.4913 23.8795C24.5078 23.8147 24.511 23.7474 24.501 23.6814C24.491 23.6154 24.4678 23.552 24.4329 23.4951ZM14.5004 16.2451C14.5004 15.5529 14.7057 14.8762 15.0903 14.3006C15.4749 13.725 16.0215 13.2764 16.661 13.0115C17.3006 12.7466 18.0043 12.6773 18.6832 12.8124C19.3622 12.9474 19.9858 13.2808 20.4753 13.7702C20.9648 14.2597 21.2981 14.8834 21.4332 15.5623C21.5682 16.2412 21.4989 16.945 21.234 17.5845C20.9691 18.224 20.5205 18.7707 19.9449 19.1553C19.3693 19.5398 18.6926 19.7451 18.0004 19.7451C17.0725 19.7441 16.1828 19.375 15.5266 18.7189C14.8705 18.0627 14.5014 17.1731 14.5004 16.2451Z"
      fill={color}
    />
  </svg>
);

export const PathIcon = styled(UserIcon)``;

export const PathName = styled.span`
  color: var(--text-dark-color);
  font-size: 1rem;
  font-weight: 500;
`;
