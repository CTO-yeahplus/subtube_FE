import CheckCircleFilled from '@/assets/images/svg/icon-check-circle.svg';
import StopFilled from '@/assets/images/svg/icon-error.svg';
import InfoCircleFilled from '@/assets/images/svg/icon-info.svg';
import ExclamationCircleFilled from '@/assets/images/svg/icon-triangle-warning.svg';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { defineColorBySeverity } from '@/utils';
import { CloseOutlined } from '@ant-design/icons';
import type { ArgsProps, IconType, NotificationInstance } from 'antd/es/notification/interface';
import styled, { css } from 'styled-components';

interface IconWrapperProps {
  $isOnlyTitle: boolean;
}

const IconWrapper = styled.div<IconWrapperProps>`
  font-size: ${(props) => (props.$isOnlyTitle ? '2rem' : '3rem')};
  line-height: 2rem;
`;

interface MessageProps extends IconWrapperProps {
  $type: IconType;
}

interface DescriptionProps {
  $type: IconType;
}

const Message = styled.div<MessageProps>`
  display: flex;
  align-items: center;
  margin-bottom: -0.5rem;

  ${(props) =>
    props.$isOnlyTitle
      ? css`
          font-size: ${FONT_SIZE.md};
          min-height: 3rem;
          line-height: 1.2rem;
          font-weight: ${FONT_WEIGHT.semibold};
          margin-inline-start: 12px;
        `
      : css`
          font-size: ${FONT_SIZE.md};
          min-height: 1rem;
          line-height: 1.2rem;
          font-weight: ${FONT_WEIGHT.semibold};
          margin-inline-start: 12px;
        `}

  .ant-notification-notice.ant-notification-notice-${(props) => props.$type} & {
    color: ${(props) => defineColorBySeverity(props.$type)};
  }
`;

const Description = styled.div<DescriptionProps>`
  /* color: ${(props) => defineColorBySeverity(props.$type)}; */
  color: #404040;
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: 1.375rem;
  margin-inline-start: 12px;
  padding-bottom: 8px;
  padding-top: 4px;
`;

const EmptyDescription = styled.div`
  margin-top: -0.75rem;
`;

type NotificationType = Pick<NotificationInstance, IconType>;

type NotificationOpener = (props: Omit<ArgsProps, 'type'>) => void;

const Icons = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  info: InfoCircleFilled,
  error: StopFilled,
} as const;

const open = (type: IconType, notification: NotificationType): NotificationOpener => {
  const Icon = Icons[type];

  const colorType = type === 'info' ? 'primary' : type;

  return ({ message, description, ...props }) =>
    notification[type]({
      icon: (
        <IconWrapper $isOnlyTitle={!description}>
          <Icon className={`ant-notification-notice-icon-${type}`} />
        </IconWrapper>
      ),
      message: (
        <Message $isOnlyTitle={!description} $type={type}>
          {message}
        </Message>
      ),
      description: description ? (
        <Description $type={type}>{description}</Description>
      ) : (
        <EmptyDescription />
      ),
      closeIcon: <CloseOutlined />,
      style: {
        minHeight: '90px',
        border: `0`,
        borderRadius: `8px`,
        background: `var(--notification-${colorType}-color)`,
        maxWidth: '500px',
        display: 'flex',
        alignItems: 'center',
      },
      ...props,
      type,
    });
};

export const notificationController = (
  notification: NotificationType
): Record<IconType, NotificationOpener> => ({
  success: open('success', notification),
  info: open('info', notification),
  warning: open('warning', notification),
  error: open('error', notification),
});
