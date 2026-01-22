import { BaseInput } from '@/components/common/inputs/base-input';
import { ICaptionDetail } from '@/interfaces/cloud-software';
import { formatFrame, htmlDecode } from '@/utils';
import _ from 'lodash';
import React, { useEffect, useImperativeHandle, useState } from 'react';

import * as S from './index.styles';

interface IProps {
  defaultCaptionDetail: ICaptionDetail;
  onchangeDefaultCaptionDetail: (v: string) => void;
  handleTextSelected: () => void;
}

// eslint-disable-next-line react/display-name
export const CaptionItemFor = React.forwardRef<any, IProps>((props, ref) => {
  const { defaultCaptionDetail, onchangeDefaultCaptionDetail, handleTextSelected } = props;
  const [text, setText] = useState<string>(props.defaultCaptionDetail.text);
  const debounce = _.debounce((value: string) => onchangeDefaultCaptionDetail(value), 0);

  useEffect(() => {
    const decode = htmlDecode(defaultCaptionDetail?.text);
    decode && setText(decode);
  }, []);

  const onchange = (v: string) => {
    debounce(v);
    setText(v);
  };

  useImperativeHandle(
    ref,
    function () {
      return {
        onRestore(data?: string) {
          const decode = data ? htmlDecode(data) : '';
          decode && setText(decode);
        },
      };
    },
    []
  );

  return (
    <>
      {/* <S.PseudoMargin /> */}
      <S.CaptionItem>
        <S.Time>
          <BaseInput
            value={
              formatFrame(defaultCaptionDetail.begin) +
              ' - ' +
              formatFrame(defaultCaptionDetail.end)
            }
          />
        </S.Time>
        <S.WrapperTextarea>
          <S.Textarea
            value={text}
            onSelect={() => handleTextSelected()}
            onChange={(e) => {
              onchange(e.target.value);
            }}
          />
        </S.WrapperTextarea>
      </S.CaptionItem>
    </>
  );
});
