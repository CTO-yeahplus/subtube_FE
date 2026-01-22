import IconStep from '@/assets/images/svg/icon-step.svg';
import { CheckCircleFilled } from '@ant-design/icons';
import { Radio } from 'antd';
import React from 'react';

import * as S from './index.styles';

interface CustomStepProps {
  title: string;
  current: number;
  value: number;
}

interface StepItem {
  key: number;
  title: string;
}

interface StepSwitchProps {
  steps: StepItem[];
  current: number;
}

const CustomStep: React.FC<CustomStepProps> = ({ title, current, value }) => {
  const waiting = current < value;
  const inProgress = current === value;
  const finished = current > value;

  return (
    <S.StepItem waiting={waiting.toString()} finished={finished.toString()}>
      <IconStep />
      <S.StepTitle>{title}</S.StepTitle>
      {finished ? (
        <CheckCircleFilled style={{ fontSize: '20px' }} />
      ) : (
        <Radio checked={inProgress} />
      )}
    </S.StepItem>
  );
};

export const StepSwitch: React.FC<StepSwitchProps> = ({ steps, current }) => {
  const items = steps.map((item) => ({
    key: item.key,
    icon: <CustomStep title={item.title} current={current} value={item.key} />,
  }));

  return <S.WrapperStep current={current} items={items} />;
};
