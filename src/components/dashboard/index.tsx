import { getDetailUser } from '@/api/users';
import ComingSoon from '@/assets/images/dashboard/coming-soon.png';
import Image1 from '@/assets/images/dashboard/image1.png';
import Image2 from '@/assets/images/dashboard/image2.png';
import Image3 from '@/assets/images/dashboard/image3.png';
import Icon1 from '@/assets/images/svg/dashboard/icon1.svg';
import Icon2 from '@/assets/images/svg/dashboard/icon2.svg';
import Icon3 from '@/assets/images/svg/dashboard/icon3.svg';
import Icon4 from '@/assets/images/svg/dashboard/icon4.svg';
import Icon5 from '@/assets/images/svg/dashboard/icon5.svg';
import Icon6 from '@/assets/images/svg/dashboard/icon6.svg';
import IconLogo2 from '@/assets/images/svg/logo2.svg';
import IconLogo from '@/assets/images/svg/logo.svg';
import IconChecked from '@/assets/images/svg/my-profile/icon-checked.svg';
import { DEFAULT_LOCALE, ROUTER_PATH } from '@/constants';
import { PRICE } from '@/constants/price';
import { LEVEL_USER } from '@/interfaces';
import { selectCurrentUser, updateUserInfo } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { formatNumberWithCommas } from '@/utils';
import cookies from '@/utils/cookie';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { IConLevel } from '../cloud-software/youtube-account/icon-level';
import { BaseAvatar } from '../common/base-avatar';
import { BaseCol } from '../common/base-col';
import { BaseRow } from '../common/base-row';
import LanguageSwitcher from '../language-switcher';
import * as S from './index.styles';

const videoId = 'mquDsw0-erk';

const DashBoard = () => {
  const { t } = useTranslation(['dashboard', 'common']);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleGetUserDetail = useCallback(async () => {
    try {
      const res = await getDetailUser();
      if (res?.data) {
        dispatch(updateUserInfo(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    const accessToken = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');
    if (!accessToken && !refreshToken) return;

    handleGetUserDetail();
  }, [handleGetUserDetail]);

  const user = useAppSelector(selectCurrentUser);
  const fName = user?.first_name?.charAt(0).toUpperCase();

  const handleGetStarted = () => {
    if (user) {
      router.push(ROUTER_PATH.YOUTUBE_ACCOUNT);
    } else {
      router.push(ROUTER_PATH.REGISTER);
    }
  };

  const handleScrollElement = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const locale = cookies.get('locale') ?? DEFAULT_LOCALE;

  const handleClickTermsOfUse = () => {
    window.open(`/pdf/${locale}/terms-of-use.pdf`);
  };

  const handleClickPolicy = () => {
    window.open(`/pdf/${locale}/privacy-policy.pdf`);
  };

  const cardData = [
    {
      title: 'expand.card.title1',
      icon: <Icon1 />,
      description: 'expand.card.desc1',
    },
    {
      title: 'expand.card.title2',
      icon: <Icon2 />,
      description: 'expand.card.desc2',
    },
    {
      title: 'expand.card.title3',
      icon: <Icon3 />,
      description: 'expand.card.desc3',
    },
    {
      title: 'expand.card.title4',
      icon: <Icon4 />,
      description: 'expand.card.desc4',
    },
    {
      title: 'expand.card.title5',
      icon: <Icon5 />,
      description: 'expand.card.desc5',
    },
    {
      title: 'expand.card.title6',
      icon: <Icon6 />,
      description: 'expand.card.desc6',
    },
  ];

  const memberData = [
    {
      src: Image1.src,
      name: 'CHLOE',
      date: 'member.date1',
      description:
        'Sub-Tube was key in growing my YouTube channel to 230K+ subscribers in a year. It lets me focus on content creation with its top-notch features.',
    },
    {
      src: Image2.src,
      name: 'NETNINJAS',
      date: 'member.date2',
      description:
        "In just 6 months, my YouTube channel hit over 800 subscribers, and monetization is now within reach. It's my fifth channel, and this one is growing faster than any before.",
    },
    {
      src: Image3.src,
      name: 'SNAPSNACKS',
      date: 'member.date3',
      description:
        "Our 8th channel, and for the first time, our country's viewership is under 13%. This wouldn't have been possible without Sub-Tube.",
    },
  ];

  const planData = [
    {
      level: LEVEL_USER.BRONZE,
      title: 'pricing.plan-overview.bronze',
      description: 'pricing.plan-overview.12-languages',
      currentPriceYear: Number(PRICE[LEVEL_USER.BRONZE].currentPrice.toFixed(1)),
      currentPriceMonth: Number((Number(PRICE[LEVEL_USER.BRONZE].currentPrice) / 12).toFixed(1)),
      salePriceYear: Number(PRICE[LEVEL_USER.BRONZE].salePrice.toFixed(1)),
      salePriceMonth: Number((Number(PRICE[LEVEL_USER.BRONZE].salePrice) / 12).toFixed(1)),
      info: [
        'pricing.plan-overview.1-account-checked',
        'pricing.plan-overview.12-languages-checked',
      ],
    },
    {
      level: LEVEL_USER.SILVER,
      title: 'pricing.plan-overview.silver',
      description: 'pricing.plan-overview.40-languages',
      currentPriceYear: Number(PRICE[LEVEL_USER.SILVER].currentPrice.toFixed(1)),
      currentPriceMonth: Number((Number(PRICE[LEVEL_USER.SILVER].currentPrice) / 12).toFixed(1)),
      salePriceYear: Number(PRICE[LEVEL_USER.SILVER].salePrice.toFixed(1)),
      salePriceMonth: Number((Number(PRICE[LEVEL_USER.SILVER].salePrice) / 12).toFixed(1)),
      mostPopular: true,
      info: [
        'pricing.plan-overview.5-account-checked',
        'pricing.plan-overview.40-languages-checked',
      ],
    },
    {
      level: LEVEL_USER.GOLD,
      title: 'pricing.plan-overview.gold',
      description: 'pricing.plan-overview.unlimited-languages',
      currentPriceYear: Number(PRICE[LEVEL_USER.GOLD].currentPrice.toFixed(1)),
      currentPriceMonth: Number((Number(PRICE[LEVEL_USER.GOLD].currentPrice) / 12).toFixed(1)),
      salePriceYear: Number(PRICE[LEVEL_USER.GOLD].salePrice.toFixed(1)),
      salePriceMonth: Number((Number(PRICE[LEVEL_USER.GOLD].salePrice) / 12).toFixed(1)),
      info: [
        'pricing.plan-overview.unlimited-account-checked',
        'pricing.plan-overview.unlimited-languages-checked',
      ],
    },
  ];

  return (
    <S.LayoutMaster>
      <S.WrapperSlideContainer>
        <S.WrapperHeader>
          <IconLogo />

          <S.WrapperMenu>
            <S.MenuItem onClick={() => handleScrollElement('insight')}>
              {t('menu.insight')}
            </S.MenuItem>
            <S.MenuItem onClick={() => handleScrollElement('testimonial')}>
              {t('menu.testimonial')}
            </S.MenuItem>
            <S.MenuItem onClick={() => handleScrollElement('guidance')}>
              {t('menu.guidance')}
            </S.MenuItem>
            <S.MenuItem onClick={() => handleScrollElement('pricing')}>
              {t('menu.pricing')}
            </S.MenuItem>
          </S.WrapperMenu>

          <BaseRow justify="space-between" align="middle">
            <LanguageSwitcher />

            <BaseRow justify="space-between" align="middle">
              {user ? (
                <S.ProfileDropdownHeader
                  as={BaseRow}
                  gutter={[10, 10]}
                  align="middle"
                  onClick={() => router.push(ROUTER_PATH.YOUTUBE_ACCOUNT)}>
                  <BaseCol>
                    <BaseAvatar alt="User" shape="circle" size={40}>
                      <S.NameAvatar>{`${fName}`}</S.NameAvatar>
                    </BaseAvatar>
                  </BaseCol>
                  <BaseCol>
                    <S.Name title={`${user?.first_name} ${user?.last_name}`}>
                      {user?.first_name} {user?.last_name}
                    </S.Name>
                  </BaseCol>
                </S.ProfileDropdownHeader>
              ) : (
                <>
                  <S.ButtonLogin type="primary" onClick={() => router.push(ROUTER_PATH.LOGIN)}>
                    {t('menu.logIn')}
                  </S.ButtonLogin>
                  <S.ButtonSignUp onClick={() => router.push(ROUTER_PATH.REGISTER)}>
                    {t('menu.signup')}
                  </S.ButtonSignUp>
                </>
              )}
            </BaseRow>
          </BaseRow>
        </S.WrapperHeader>

        <S.SwiperContainer
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}>
          <SwiperSlide>
            <S.WrapperSlideItem>
              <S.SlideTitle style={{ fontSize: '48px' }}>{t('slide.title1')}</S.SlideTitle>
              <S.SlideDesc style={{ margin: '100px 0px' }}>{t('slide.desc1')}</S.SlideDesc>
              <S.GetStarted style={{ marginBottom: '100px' }} onClick={handleGetStarted}>
                {t('getStarted')} &gt;
              </S.GetStarted>
            </S.WrapperSlideItem>
          </SwiperSlide>

          <SwiperSlide>
            <S.WrapperSlideItem>
              <S.SlideTitle style={{ fontSize: '44px' }}>{t('slide.title2')}</S.SlideTitle>
              <S.SlideDesc style={{ margin: '94px 0px' }}>{t('slide.desc2')}</S.SlideDesc>
              <S.GetStarted style={{ marginBottom: '94px' }} onClick={handleGetStarted}>
                {t('getStarted')} &gt;
              </S.GetStarted>
            </S.WrapperSlideItem>
          </SwiperSlide>
        </S.SwiperContainer>
      </S.WrapperSlideContainer>

      <S.WrapperContent>
        <S.TitlePage id="insight">{t('numberLanguage')}</S.TitlePage>

        <S.SizeMarket>
          <S.SizeMarketTitle>{t('sizeMarket.title')}</S.SizeMarketTitle>
          <S.SizeMarketDesc>
            {t('sizeMarket.desc1')}
            <br />
            {t('sizeMarket.desc2')}
            <br />
            {t('sizeMarket.desc3')}
            <br />
            {t('sizeMarket.desc4')}
          </S.SizeMarketDesc>
        </S.SizeMarket>

        <BaseRow justify="space-between" align="middle">
          <S.Column>
            <S.TargetTitle>{t('targets')}</S.TargetTitle>
            <S.TargetDesc>{t('subscribers')}</S.TargetDesc>
            <S.TargetDesc>{t('views')}</S.TargetDesc>
            <S.TargetDesc>{t('comments')}</S.TargetDesc>
            <S.TargetDesc>{t('likes')}</S.TargetDesc>
          </S.Column>

          <S.Column>
            <S.TargetTitle>{t('1-country')}</S.TargetTitle>
            <S.TargetDesc>{t('1M')}</S.TargetDesc>
            <S.TargetDesc>{t('10M')}</S.TargetDesc>
            <S.TargetDesc>{t('10.000')}</S.TargetDesc>
            <S.TargetDesc>{t('100.000')}</S.TargetDesc>
          </S.Column>

          <S.DivideColumn />

          <S.Column>
            <S.TargetTitle>{t('40-countries')}</S.TargetTitle>
            <S.TargetDesc>{t('1B')}</S.TargetDesc>
            <S.TargetDesc>{t('100M-To-1B')}</S.TargetDesc>
            <S.TargetDesc>{t('100.000-To-1M')}</S.TargetDesc>
            <S.TargetDesc>{t('1M-like')}</S.TargetDesc>
          </S.Column>
        </BaseRow>

        <S.DescriptionPage>{t('breaksDown')}</S.DescriptionPage>

        <BaseRow justify="center">
          <S.Button onClick={handleGetStarted}>{t('joinNow')} &gt;</S.Button>
        </BaseRow>

        <S.Divide />

        <S.TitlePage>{t('expand.title')}</S.TitlePage>

        <S.DescriptionPage>{t('expand.desc1')}</S.DescriptionPage>

        <S.WrapperCard>
          {cardData.map((item, index) => (
            <S.Card key={index}>
              <S.CardTitle>{t(item.title)}</S.CardTitle>
              {item.icon}
              <S.CardDescription>{t(item.description)}</S.CardDescription>
            </S.Card>
          ))}
        </S.WrapperCard>

        <S.DescriptionPage>{t('expand.desc2')}</S.DescriptionPage>

        <BaseRow justify="center">
          <S.Button onClick={handleGetStarted}>{t('getStarted')} &gt;</S.Button>
        </BaseRow>

        <S.Divide />

        <S.TitlePage id="testimonial">{t('menu.testimonial')}</S.TitlePage>

        <S.WrapperCard>
          {memberData.map((item, index) => (
            <S.Member key={index}>
              <S.MemberImage>
                <Image src={item.src} width={90} height={90} alt="" />
                <div>
                  <S.MemberName>{item.name}</S.MemberName>
                  <S.MemberInfo>{t(item.date)}</S.MemberInfo>
                </div>
              </S.MemberImage>
              <S.MemberInfo>{item.description}</S.MemberInfo>
            </S.Member>
          ))}
        </S.WrapperCard>

        <S.Divide />

        <S.TitlePage id="guidance">{t('guidance')}</S.TitlePage>

        {videoId ? (
          <S.IFrame
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <Image
            src={ComingSoon.src}
            width={1000}
            height={500}
            style={{ margin: 'auto', marginBottom: '50px' }}
            alt=""
          />
        )}

        <BaseRow justify="center">
          <S.Button onClick={handleGetStarted}>{t('learnMore')} &gt;</S.Button>
        </BaseRow>

        <S.Divide />

        <S.TitlePage id="pricing">{t('pricing.title')}</S.TitlePage>

        <S.DescriptionPage>
          {t('pricing.desc1')}
          <br />
          {t('pricing.desc2')}
        </S.DescriptionPage>

        <S.WrapperCard style={{ maxWidth: 1000, margin: 'auto', marginBottom: '50px' }}>
          {planData.map(
            ({
              level,
              title,
              description,
              currentPriceYear,
              currentPriceMonth,
              salePriceYear,
              info,
            }) => {
              return (
                <S.CardOverview key={level}>
                  <S.ContainerLevel>
                    <S.Level>{t(title)}</S.Level>
                    {<IConLevel size="middle" level={level} />}
                  </S.ContainerLevel>
                  <S.DescriptionOverview
                    dangerouslySetInnerHTML={{ __html: t(description) }}></S.DescriptionOverview>
                  <S.SubSale>
                    <b>${formatNumberWithCommas(currentPriceYear)}</b>/
                    {t('pricing.plan-overview.year')} ~{' '}
                    <b>${formatNumberWithCommas(currentPriceMonth)}</b>/
                    {t('pricing.plan-overview.month')}
                  </S.SubSale>
                  <S.PriceYear>
                    ${formatNumberWithCommas(salePriceYear)}{' '}
                    <S.TextYear>/{t('pricing.plan-overview.year')}</S.TextYear>
                  </S.PriceYear>

                  <S.Infos>
                    <IconChecked />
                    <S.TextInfo
                      dangerouslySetInnerHTML={{
                        __html: t('pricing.plan-overview.2-months-free'),
                      }}></S.TextInfo>
                  </S.Infos>
                  {info.map((item, index) => (
                    <S.Infos key={index}>
                      <IconChecked />
                      <S.TextInfo dangerouslySetInnerHTML={{ __html: t(item) }}></S.TextInfo>
                    </S.Infos>
                  ))}
                </S.CardOverview>
              );
            }
          )}
        </S.WrapperCard>

        <BaseRow justify="center">
          <S.Button onClick={handleGetStarted}>{t('getStarted')} &gt;</S.Button>
        </BaseRow>
      </S.WrapperContent>

      <S.WrapperFooter>
        <S.ContentFooter>
          <IconLogo2 />
          <S.CompanyName>{t('footer.companyName', { ns: 'common' })}</S.CompanyName>
          <div>{t('footer.owner', { ns: 'common' })}</div>
          <div>{t('footer.address', { ns: 'common' })}</div>
          <S.Reserved>
            <div>{t('footer.allRightsReserved', { ns: 'common' })}</div>
            <S.Copyright>
              <div>{t('footer.copyright', { ns: 'common' })}</div>
              <S.LinkUrl onClick={handleClickTermsOfUse}>
                {t('footer.termsOfUse', { ns: 'common' })}
              </S.LinkUrl>
              <S.LinkUrl onClick={handleClickPolicy}>
                {t('footer.privacyPolicy', { ns: 'common' })}
              </S.LinkUrl>
            </S.Copyright>
          </S.Reserved>
        </S.ContentFooter>
      </S.WrapperFooter>
    </S.LayoutMaster>
  );
};

export default DashBoard;
