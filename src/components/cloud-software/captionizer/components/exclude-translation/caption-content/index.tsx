import { ICaptionDetail } from '@/interfaces/cloud-software';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized';

import { CaptionItemFor } from './caption-item';
import * as S from './index.styles';

interface IProps {
  defaultCaptions?: ICaptionDetail[];
  handleTextSelected: () => void;
  handleChangeCaptions: (v: string, index: number) => void;
}

// eslint-disable-next-line react/display-name
export const CaptionContent = React.forwardRef<any, IProps>((props, ref) => {
  const { defaultCaptions, handleTextSelected, handleChangeCaptions } = props;

  const { t } = useTranslation(['cloud-software']);
  const inputRefs = React.useRef<{ onRestore: (v: string) => void }[]>([]);

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 150,
  });

  // eslint-disable-next-line no-unused-vars
  const [, setIsResize] = useState<boolean>(false);

  useEffect(() => {
    setIsResize((prev) => !prev);
  }, [defaultCaptions]);

  useImperativeHandle(
    ref,
    function () {
      return {
        onRestore(data?: ICaptionDetail[]) {
          try {
            data?.forEach((item, index) => {
              inputRefs.current[index]?.onRestore(item.text);
            });
          } catch (err) {
            return;
          }
        },
      };
    },
    []
  );

  return (
    <>
      <S.WrapCaptionTitle>
        <S.TimeTitle>{t('translator.time')}</S.TimeTitle>
        <S.ExistCaptionTitle>{t('translator.existing_caption')}</S.ExistCaptionTitle>
      </S.WrapCaptionTitle>
      <S.WrapCaptionItems>
        <AutoSizer style={{ height: 500 }}>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              deferredMeasurementCache={cache}
              rowHeight={cache.rowHeight}
              rowRenderer={({ index, key, style, parent }) => {
                return (
                  <CellMeasurer
                    key={key}
                    cache={cache}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}>
                    {({ registerChild }) => {
                      const captionItem = defaultCaptions?.length ? defaultCaptions[index] : null;
                      if (captionItem) {
                        return (
                          <div style={style} className="row" ref={registerChild as any}>
                            <CaptionItemFor
                              key={index}
                              defaultCaptionDetail={captionItem}
                              handleTextSelected={handleTextSelected}
                              onchangeDefaultCaptionDetail={(v: string) => {
                                handleChangeCaptions(v, index);
                              }}
                              ref={(element) => (inputRefs.current[index] = element)}
                            />
                          </div>
                        );
                      }
                      return null;
                    }}
                  </CellMeasurer>
                );
              }}
              rowCount={defaultCaptions?.length ?? 0}
              overscanRowCount={10}
            />
          )}
        </AutoSizer>
      </S.WrapCaptionItems>
    </>
  );
});
