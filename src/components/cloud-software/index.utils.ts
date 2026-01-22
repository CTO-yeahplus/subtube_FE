import {
  useConnectYoutube,
  useDeleteYoutubeMutate,
  useGetListYoutube,
  useRefreshTotalVideo,
} from '@/hooks/features/useYoutubeAccount';
import { IDataPagination, IPaginationParams, ResponseData } from '@/interfaces';
import { IListYoutubeAccount, IRefreshTotalVideo } from '@/interfaces/cloud-software';
import { QueryObserverResult, RefetchOptions, UseMutateFunction } from '@tanstack/react-query';

interface IYoutubeAccount {
  dataListYoutube: IListYoutubeAccount[];
  dataPagination: IDataPagination;
  loadingListYoutube: boolean;
  mutateConnectYoutube: UseMutateFunction<ResponseData<any>, Error, any, unknown>;
  mutateDisconnectYoutube: UseMutateFunction<ResponseData<any>, Error, any, unknown>;
  mutateRefreshTotalVideo: UseMutateFunction<ResponseData<any>, Error, IRefreshTotalVideo, unknown>;
  refetchListYoutube: (
    options?: RefetchOptions | undefined
  ) => Promise<void | QueryObserverResult<
    ResponseData<{ entities: IListYoutubeAccount[] }>,
    unknown
  >>;
}
export default function useYoutubeAccount(
  params: IPaginationParams,
  enabled?: boolean
): IYoutubeAccount {
  const { mutate: mutateConnectYoutube } = useConnectYoutube();
  const { mutate: mutateDisconnectYoutube } = useDeleteYoutubeMutate();
  const { mutate: mutateRefreshTotalVideo } = useRefreshTotalVideo();
  const {
    data: dataListYoutube,
    refetch: refetchListYoutube,
    isFetching: loadingListYoutube,
  } = useGetListYoutube(params, enabled);

  const sortData = dataListYoutube?.data.entities?.sort((a, b) => {
    return a.name_channel?.toLowerCase() > b.name_channel?.toLowerCase() ? 1 : -1;
  });

  return {
    dataListYoutube: sortData ?? [],
    dataPagination: dataListYoutube?.data?.pagination as IDataPagination,
    loadingListYoutube,
    refetchListYoutube,
    mutateRefreshTotalVideo,
    mutateConnectYoutube,
    mutateDisconnectYoutube,
  };
}
