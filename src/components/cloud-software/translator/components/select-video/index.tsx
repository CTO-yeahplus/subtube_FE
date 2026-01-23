import SearchIcon from '@/assets/images/svg/icon-search.svg';
import { NoData } from '@/components/common/no-data';
import { IVideoYoutube } from '@/interfaces/cloud-software';
import { debounce } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useRef } from 'react';

import * as S from './index.styles';
import useSelectVideo from './index.utils';

interface IOption {
  label: string;
  value: string;
}

export interface IProps {
  dataTable: IVideoYoutube[];
  totalResults: number;
  listOptionsAccount: IOption[];
  accountSelected: string;
  videoSelected: any;
  handleChangeAccount: (value: string) => void;
  handleRefreshVideo: () => void;
  handleParamsChange: (value: string) => void;
  handleGetListVideo: () => void;
  handleChangeVideo: (value: any) => void;
  handleLoadMoreAccount: () => void;
}

const SelectVideo = (props: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const ref = useRef(null);

  const {
    listOptionsAccount,
    accountSelected,
    videoSelected,
    columns,
    tableData,
    totalResults,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleGetListVideo,
    handleChangeVideo,
    handleLoadMoreAccount,
  } = useSelectVideo(props);

  const onReachBottom = useCallback(() => {
    if (tableData.data.length && tableData.data.length < totalResults) handleGetListVideo();
  }, [tableData.data.length, totalResults, handleGetListVideo]);

  useEffect(() => {
    const tableVideoContainer = ref.current as any;
    const tableBody = tableVideoContainer?.querySelector('.ant-table-body');
    if (tableBody) {
      const onScroll = () => {
        if (Math.abs(tableBody.scrollHeight - tableBody.scrollTop - tableBody.clientHeight) <= 1)
          onReachBottom();
      };

      tableBody.addEventListener('scroll', onScroll);

      return () => {
        tableBody.removeEventListener('scroll', onScroll);
      };
    }
  }, [tableData, onReachBottom]);

  const onLoadMoreAccount = (element: HTMLElement) => {
    if (element) {
      if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) <= 1) {
        handleLoadMoreAccount();
      }
    }
  };

  return (
    <>
      <S.SelectedAccount>
        <S.WrapperAccount>
          <S.Text>{t('translator.account')}</S.Text>
          <S.Select
            showSearch
            optionFilterProp="label"
            options={listOptionsAccount}
            value={accountSelected}
            onChange={(value) => handleChangeAccount(value as string)}
            getPopupContainer={(triggerNode) => triggerNode.parentElement}
            onPopupScroll={(event) => onLoadMoreAccount(event.target as HTMLElement)}
            virtual={false}
          />
          <S.RefreshButton type="primary" onClick={handleRefreshVideo}>
            <S.IconButton />
            {t('translator.refresh')}
          </S.RefreshButton>
        </S.WrapperAccount>

        <S.WrapperAccount>
          <S.Text>{t('translator.filters')}</S.Text>
          <S.SearchInput
            placeholder={t('translator.typeToFilter')}
            suffix={<SearchIcon />}
            onChange={debounce((e) => handleParamsChange(e.target.value), 300)}
            maxLength={128}
          />
        </S.WrapperAccount>
      </S.SelectedAccount>

      <S.TableVideoContainer ref={ref}>
        <S.TableVideo
          rowClassName={(record) =>
            videoSelected && record.id === videoSelected.id ? 'active' : ''
          }
          columns={columns}
          dataSource={tableData.data}
          pagination={false}
          scroll={{
            scrollToFirstRowOnChange: false,
            y: 500,
          }}
          onRow={(record) => {
            return {
              onClick: () => handleChangeVideo(record),
            };
          }}
          locale={{
            emptyText: <NoData />,
          }}
        />
      </S.TableVideoContainer>
    </>
  );
};

export default SelectVideo;
