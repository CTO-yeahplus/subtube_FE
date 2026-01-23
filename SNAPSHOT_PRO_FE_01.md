# 🧠 Deep Context Snapshot

**Generated at:** 2026-01-23 16:38:26
**Project:** card_secret_fe (0.1.0)
**Tech Stack:** Next.js, React, Firebase

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 342

```text
.
│   ├── next-i18next.config.js
│   ├── next.config.js
│   ├── lint-staged.config.js
│   ├── next-env.d.ts
│   ├── package.json
│   ├── commitlint.config.js
│   ├── tsconfig.json
│   ├── .eslintrc.json
│   .husky/
│   │   _/
│   .yarn/
│   │   releases/
│   public/
│   │   locales/
│   │   │   ko/
│   │   │   │   ├── labelManagement.json
│   │   │   │   ├── my-profile.json
│   │   │   │   ├── common.json
│   │   │   │   ├── cloud-software.json
│   │   │   │   ├── users.json
│   │   │   │   ├── dashboard.json
│   │   │   │   ├── auth.json
│   │   │   │   ├── tags.json
│   │   │   en/
│   │   │   │   ├── labelManagement.json
│   │   │   │   ├── my-profile.json
│   │   │   │   ├── common.json
│   │   │   │   ├── cloud-software.json
│   │   │   │   ├── users.json
│   │   │   │   ├── dashboard.json
│   │   │   │   ├── auth.json
│   │   │   │   ├── tags.json
│   │   pdf/
│   │   │   ko/
│   │   │   en/
│   │   favicon/
│   src/
│   │   ├── middleware.ts
│   │   types/
│   │   │   ├── page.d.ts
│   │   plugins/
│   │   │   ├── firebase.ts
│   │   │   ├── paypal.ts
│   │   constants/
│   │   │   ├── price.ts
│   │   │   ├── regex.ts
│   │   │   ├── common.ts
│   │   │   ├── index.ts
│   │   │   ├── theme.ts
│   │   stores/
│   │   │   ├── hooks.ts
│   │   │   ├── store.ts
│   │   │   ├── provider.tsx
│   │   │   progress/
│   │   │   │   ├── progress.slice.ts
│   │   │   auth/
│   │   │   │   ├── auth.slice.ts
│   │   utils/
│   │   │   ├── dates.ts
│   │   │   ├── common.ts
│   │   │   ├── local-storage.ts
│   │   │   ├── cookie.ts
│   │   │   ├── index.ts
│   │   │   ├── query.ts
│   │   │   ├── theme.ts
│   │   │   ├── react-query.ts
│   │   styles/
│   │   │   ├── theme-global.ts
│   │   │   ├── theme-config.tsx
│   │   │   ├── theme-reset.ts
│   │   │   themes/
│   │   │   │   ├── theme-variables.ts
│   │   │   │   light/
│   │   │   │   │   ├── index.ts
│   │   │   │   dark/
│   │   │   │   │   ├── index.ts
│   │   components/
│   │   │   language-switcher/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── index.styles.ts
│   │   │   cloud-software/
│   │   │   │   ├── index.utils.ts
│   │   │   │   translator/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.utils.ts
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   components/
│   │   │   │   │   │   select-language/
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   │   review-translation/
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   │   exclude-translation/
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   │   select-video/
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── index.utils.tsx
│   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   captionizer/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.utils.ts
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   ├── action-hook.ts
│   │   │   │   │   components/
│   │   │   │   │   │   review-translation/
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   │   exclude-translation/
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   │   │   caption-content/
│   │   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   │   │   │   caption-item/
│   │   │   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   components/
│   │   │   │   │   ├── CardStatistics.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   youtube-account/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   current-plan/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   icon-level/
│   │   │   │   │   │   ├── index.tsx
│   │   │   auth/
│   │   │   │   register-form/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.utils.ts
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   login-form/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   phone-number-form/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   verify-account/
│   │   │   │   │   ├── index.tsx
│   │   │   │   forgot-password-form/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   email-form/
│   │   │   │   │   ├── index.tsx
│   │   │   │   verify-error/
│   │   │   │   │   ├── index.tsx
│   │   │   │   new-password-form/
│   │   │   │   │   ├── index.tsx
│   │   │   modals/
│   │   │   │   modal-plan-overview/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   cancel/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   checkout/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   │   payment-method/
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   downgrage/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   modal-confirm-plan/
│   │   │   │   │   ├── index.tsx
│   │   │   │   modal-route-change/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   modal-finish-update/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   modal-confirm/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   modal-language-limit/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   modal-reminder/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   modal-loading/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   modal-plan/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   dashboard/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── index.styles.ts
│   │   │   common/
│   │   │   │   base-autocomplete/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-badge/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-tooltip/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-plan/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-checkbox/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-hashtag/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-carousel/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   carousel-arrow/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-collapse/
│   │   │   │   │   ├── base-collapse.tsx
│   │   │   │   base-modal/
│   │   │   │   │   ├── BaseModal.tsx
│   │   │   │   base-space/
│   │   │   │   │   ├── index.tsx
│   │   │   │   container-wrapper/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-skeleton/
│   │   │   │   │   ├── index.tsx
│   │   │   │   forms/
│   │   │   │   │   base-buttons-form/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   base-form/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   components/
│   │   │   │   │   │   base-form-title/
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   base-buttons-group/
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   │   base-form-item/
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   base-form-list/
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   base-typography/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-spin/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-cascader/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-loading/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-result/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   not-found/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-tabs/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-breadcrumb/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.tsx
│   │   │   │   base-calendar/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-rate/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-layout/
│   │   │   │   │   ├── index.tsx
│   │   │   │   selects/
│   │   │   │   │   base-select/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   month-select/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   base-progress/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-dropdown/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-card/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-steps/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-spinner/
│   │   │   │   │   ├── global-spinner.tsx
│   │   │   │   error-boundary/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.style.ts
│   │   │   │   base-table/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-status/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-notification/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   calendar-switch/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-slider/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   no-data/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   seo-header/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-button/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-image/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-pagination/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-popover/
│   │   │   │   │   ├── index.tsx
│   │   │   │   date-picker/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── TimeRangePicker.tsx
│   │   │   │   │   ├── index.styled.tsx
│   │   │   │   base-label/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-row/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-switch/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-avatar/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-burger/
│   │   │   │   │   ├── BurgerIcon.tsx
│   │   │   │   base-divider/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-alert/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-article/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-col/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-popconfirm/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-empty/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-tag/
│   │   │   │   │   ├── index.tsx
│   │   │   │   overlay/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-radio/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-feed/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-upload/
│   │   │   │   │   ├── index.tsx
│   │   │   │   base-menu/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   base-list/
│   │   │   │   │   ├── index.tsx
│   │   │   │   step-switch/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   inputs/
│   │   │   │   │   openurl-input/
│   │   │   │   │   │   ├── OpenURLInput.tsx
│   │   │   │   │   masked-input/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   verification-code-input/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   number-input/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   password-input/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   suffix-input/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   base-input/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   clipboard-input/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   search-input/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   my-profile/
│   │   │   │   payments/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   payment-history/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   pesonal-info/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.utils.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   components/
│   │   │   │   │   content-left/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.utils.tsx
│   │   │   │   │   │   ├── index.styles.tsx
│   │   │   │   security-settings/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   header/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── index.styles.ts
│   │   │   │   profile/
│   │   │   │   │   profile-dropdown/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   │   profile-overlay/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── index.styles.ts
│   │   │   │   mobile-header/
│   │   │   │   │   ├── index.tsx
│   │   │   │   desktop-header/
│   │   │   │   │   ├── index.tsx
│   │   layouts/
│   │   │   ├── index.tsx
│   │   │   admin-layout/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── index.styles.ts
│   │   │   │   footer/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   sider/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   content/
│   │   │   │   │   ├── index.tsx
│   │   │   │   sider-menu/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── SiderLogo.tsx
│   │   │   │   │   ├── menu.utils.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   │   header/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.styles.ts
│   │   │   auth-layout/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── index.styles.ts
│   │   │   main-layout/
│   │   │   │   ├── index.tsx
│   │   hooks/
│   │   │   ├── useFeedback.ts
│   │   │   ├── useDimensions.ts
│   │   │   ├── useOnClickOutside.ts
│   │   │   ├── useLoadServerError.ts
│   │   │   ├── useCheckMobile.ts
│   │   │   ├── useAppMutation.ts
│   │   │   ├── use-timer.ts
│   │   │   ├── useMounted.ts
│   │   │   ├── useDebounce.ts
│   │   │   ├── usePagination.ts
│   │   │   ├── useResponsive.ts
│   │   │   ├── useAppQuery.ts
│   │   │   features/
│   │   │   │   ├── useYoutubeAccount.ts
│   │   │   │   ├── useTranslate.ts
│   │   │   │   ├── useSupcriptionPlan.ts
│   │   │   │   ├── useCaptionize.ts
│   │   │   │   ├── useAuth.ts
│   │   │   │   ├── useUsers.ts
│   │   │   │   ├── useTagManagement.ts
│   │   │   │   ├── useLabelManagement.ts
│   │   api/
│   │   │   cloud-software/
│   │   │   │   caption/
│   │   │   │   │   ├── index.ts
│   │   │   │   translate/
│   │   │   │   │   ├── index.ts
│   │   │   │   youtube-accounts/
│   │   │   │   │   ├── index.ts
│   │   │   auth/
│   │   │   │   ├── index.ts
│   │   │   labelManagement/
│   │   │   │   ├── index.ts
│   │   │   users/
│   │   │   │   ├── index.ts
│   │   │   request/
│   │   │   │   ├── index.ts
│   │   │   supcription-plan/
│   │   │   │   ├── index.ts
│   │   │   tag/
│   │   │   │   ├── index.tsx
│   │   controllers/
│   │   │   ├── notification.tsx
│   │   │   ├── modal.tsx
│   │   assets/
│   │   │   images/
│   │   │   │   svg/
│   │   │   │   │   card/
│   │   │   │   │   cloud-software/
│   │   │   │   │   modals/
│   │   │   │   │   dashboard/
│   │   │   │   │   menu/
│   │   │   │   │   my-profile/
│   │   │   │   │   country/
│   │   │   │   auth/
│   │   │   │   translator/
│   │   │   │   dashboard/
│   │   pages/
│   │   │   ├── index.tsx
│   │   │   ├── _document.tsx
│   │   │   ├── _app.tsx
│   │   │   cloud-software/
│   │   │   │   youtube-accounts/
│   │   │   │   │   ├── index.tsx
│   │   │   │   translator/
│   │   │   │   │   ├── index.tsx
│   │   │   │   captionizer/
│   │   │   │   │   ├── index.tsx
│   │   │   auth/
│   │   │   │   verify-password/
│   │   │   │   │   error/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   verify-account/
│   │   │   │   │   ├── index.tsx
│   │   │   │   signup/
│   │   │   │   │   error/
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   register/
│   │   │   │   │   ├── index.tsx
│   │   │   │   new-password/
│   │   │   │   │   ├── index.tsx
│   │   │   │   forgot-password/
│   │   │   │   │   ├── index.tsx
│   │   │   │   login/
│   │   │   │   │   ├── index.tsx
│   │   │   youtube/
│   │   │   │   callback/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── index.utils.ts
│   │   │   my-profile/
│   │   │   │   payment-history/
│   │   │   │   │   ├── index.tsx
│   │   │   │   personal-info/
│   │   │   │   │   ├── index.tsx
│   │   │   │   security-settings/
│   │   │   │   │   ├── index.tsx
│   │   interfaces/
│   │   │   ├── common.ts
│   │   │   ├── plan-overview.ts
│   │   │   ├── labelManagement.ts
│   │   │   ├── users.ts
│   │   │   ├── cloud-software.ts
│   │   │   ├── index.ts
│   │   │   ├── theme.ts
│   │   │   ├── auth.ts
│   │   │   ├── tags.ts
```

---

## 💻 Source Details

        ### 📄 next-i18next.config.js
        > **Context Summary**
        * (No structural elements detected)

        ```js
        // used for SSR (getServerSideProps)
const { resolve } = require('path');

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  localePath: resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

        ### 📄 next.config.js
        > **Context Summary**
        * (No structural elements detected)

        ```js
        // next.config.js

const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;

        ### 📄 lint-staged.config.js
        > **Context Summary**
        * (No structural elements detected)

        ```js
        module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};

        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "card_secret_fe",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:check": "eslint . --ext ts --ext tsx --ext js",
    "lint:fix": "eslint . --ext .ts,.tsx,.js --fix && stylelint '**/*.css' --fix",
    "prettier": "prettier --check \"(*.tsx|*.ts|*.css|*.scss)\"",
    "prettier:fix": "prettier --write \"(*.tsx|*.ts|*.css|*.scss)\"",
    "postinstall": "husky install"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "dependencies": {
    "@ant-design/cssinjs": "^1.13.2",
    "@ant-design/icons": "^5.1.4",
    "@ladjs/country-language": "^1.0.3",
    "@paypal/react-paypal-js": "^8.5.0",
    "@reduxjs/toolkit": "^1.9.5",
    "@types/node": "20.3.3",
    "@types/react": "18.2.14",
    "@types/react-dom": "18.2.6",
    "@types/styled-components": "^5.1.34",
    "antd": "5.8.2",
    "axios": "^1.6.7",
    "crypto": "^1.0.1",
    "dayjs": "^1.11.11",
    "eslint": "8.44.0",
    "eventemitter3": "^5.0.1",
    "express": "^4.19.2",
    "express-session": "^1.18.0",
    "firebase": "^10.12.5",
    "i18next": "^23.2.6",
    "js-cookie": "^3.0.5",
    "lodash": "^4.17.21",
    "net": "^1.0.2",
    "next": "13.4.7",
    "next-redux-wrapper": "^8.1.0",
    "next-transpile-modules": "^10.0.0",
    "react": "18.2.0",
    "react-country-flag": "^3.1.0",
    "react-dom": "18.2.0",
    "react-i18next": "^13.0.1",
    "react-phone-input-2": "^2.15.1",
    "react-redux": "^8.1.1",
    "react-virtualized": "^9.22.5",
    "styled-components": "^6.1.11",
    "swiper": "^11.1.9",
    "typescript": "5.1.6"
  },
  "devDependencies": {
    "@commitlint/config-conventional": "^17.6.6",
    "@svgr/webpack": "^8.0.1",
    "@tanstack/react-query": "^5.24.1",
    "@tanstack/react-query-devtools": "^5.24.1",
    "@trivago/prettier-plugin-sort-imports": "^4.1.1",
    "@types/express": "^4",
    "@types/express-session": "^1",
    "@types/js-cookie": "^3",
    "@types/ladjs__country-language": "^1.0.0",
    "@types/lodash": "^4",
    "@types/react-csv": "^1.1.10",
    "@types/react-slick": "^0",
    "@types/react-virtualized": "^9",
    "@typescript-eslint/eslint-plugin": "^5.61.0",
    "@typescript-eslint/parser": "^5.61.0",
    "antd-mask-input": "^2.0.7",
    "babel-plugin-import": "^1.13.6",
    "classnames": "^2.3.2",
    "commitlint": "^17.6.6",
    "eslint-config-next": "13.4.8",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "husky": "^8.0.3",
    "lint-staged": "^13.2.3",
    "next-i18next": "^14.0.0",
    "nextjs-progressbar": "^0.0.16",
    "prettier": "^2.8.8",
    "react-csv": "^2.2.2",
    "react-infinite-scroll-component": "^6.1.0",
    "react-responsive": "^9.0.2",
    "react-slick": "^0.30.2",
    "react-verification-input": "2.0.3",
    "typeface-montserrat": "^1.1.13"
  },
  "packageManager": "yarn@4.2.2",
  "browser": {
    "fs": false,
    "os": false,
    "path": false
  }
}

        ### 📄 commitlint.config.js
        > **Context Summary**
        * (No structural elements detected)

        ```js
        module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 66], // github commit without being truncated
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'release',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'ci',
        'build',
      ],
    ],
  },
};

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"],
      "@@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "src/layouts/admin-layout"],
  "exclude": ["node_modules"]
}

        ### 📄 .eslintrc.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "plugins": ["react", "@typescript-eslint", "react-hooks", "prettier"],
  "extends": [
    // "next/babel",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true // enable linting for jsx files
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}

        ### 📄 public/locales/ko/labelManagement.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "label": {
    "labelName": "Label Name",
    "labelID": "Label ID",
    "products": "Products",
    "action": "Action"
  }
}

        ### 📄 public/locales/ko/my-profile.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "PersonalInfo": "Personal Info",
  "SecuritySettings": "Security Settings",
  "Payments": "Payment History",
  "Personal": {
    "YourCurrentPlan": "Your current plan:",
    "ValidUntil": "Valid until:",
    "FirstName": "First Name",
    "LastName": "Last Name",
    "PhoneNumber": "Phone Number",
    "Email": "Email",
    "Cancel": "Cancel",
    "Save": "Save",
    "Edit": "Edit",
    "UpdateProfileSuccessfully": "Update profile successfully."
  },
  "ChangePassword": {
    "title": "Change Password",
    "Password": "Password",
    "CurrentPassword": "Current Password",
    "NewPassword": "New Password",
    "ConfirmPassword": "Confirm Password",
    "success": "Change password successfully."
  },
  "PaymentMethod": {
    "title": "Payment Method",
    "ValidThru": "Valid thru",
    "AddNewCard": "Add New Card",
    "MarkAsDefault": "Mark as default",
    "DeleteCard": "Delete Card"
  },
  "PaymentHistory": {
    "title": "Payment History",
    "SubscriptionPlan": "Subscription Plan",
    "Date": "Date",
    "Status": "Status",
    "TotalAmount": "Total Amount"
  },
  "AddCard": {
    "CardNumber": "Card Number",
    "CardholderName": "Cardholder Name",
    "YourName": "Your name",
    "ExpDate": "Exp. Date",
    "CVV": "CVV",
    "Submit": "Submit"
  },
  "DeleteCard": {
    "title": "Delete Card",
    "content": "Are you sure you want to delete this card?",
    "Delete": "Delete"
  }
}

        ### 📄 public/locales/ko/common.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "title": "Wellcome Nextjs",
  "login": "Log In",
  "register": "Register",
  "signUp": "Sign Up",
  "email": "Email",
  "password": "Password",
  "phoneNumber": "Phone number",
  "firstName": "First Name",
  "lastName": "Last Name",
  "here": "here",
  "forgotPass": "Forgot Password",
  "confirmPassword": "Confirm Password",
  "noData": "No Data",
  "tryAdd": "Try add a YouTube account first!",
  "confirmPasswordError": "Confirm passwords do not match.",
  "submit": "Submit",
  "sider": {
    "cloudSoftware": "AI & Cloud SW",
    "youTubeAccounts": "YouTube Accounts",
    "translator": "Translator",
    "captionizer": "CaptionMaster",
    "myProfile": "My Profile",
    "personalInfo": "Personal Info",
    "securitySettings": "Security Settings",
    "paymentHistory": "Payment History"
  },
  "header": {
    "profile": "Profile",
    "myProfile": "My Profile",
    "logout": "Logout",
    "logoutSuccess": "You have logged out successfully!"
  },
  "footer": {
    "companyName": "Company Name: YEAHPLUS",
    "owner": "Owner: Ko Jaehyuk | Personal Info Manager: Ko Jae Hyuk | Phone Number: 010-4490-0518 | Email: cto@yeahplus.co.kr",
    "address": "Address: 3F #304, A318, 33, Gyoha-ro 159beon-gil, Paju-si, Gyeonggi-do | Business Registration Number: 283-88-02519",
    "allRightsReserved": "All rights reserved",
    "copyright": "2024 copyright",
    "termsOfUse": "Terms of Use",
    "privacyPolicy": "Privacy Policy"
  },
  "validate": {
    "requiredField": "This field is required.",
    "notValidEmail": "Please enter a valid format email.",
    "max": "This field cannot exceed {{length}} characters",
    "confirmPasswordNotMatch": "Confirm Password do not match. Please try again!",
    "notContainSpace": "{{name}} cannot contain space characters.",
    "notValidLanguage": "Translation languages must not include default language",
    "notSupportCard": "This card is not supported. Please try another card!",
    "MC1": "This field is required.",
    "MC2": "Please enter a valid format email or phone number.",
    "MC2.1": "Please enter a valid format email.",
    "MC2.2": "Please enter a valid phone number.",
    "MC2.3": "Phone numbers cannot contain space characters.",
    "MC3": "Incorrect email/phone numbers or passwords. Please try again.",
    "MC3.1": "Password length requires 8 to 30 characters, at least a number, an uppercase letter, and a symbol.",
    "MC3.2": "Password cannot contain space characters.",
    "MC3.3": "Confirm passwords do not match.",
    "MC3.4": "Incorrect password. Please try again.",
    "MC4": "Email or Phone Number does not exist. Please try again!",
    "MC4.1": "Email does not exist. Please try again!",
    "MC5": "Add account successfully.",
    "MC5.1": "This YouTube account has been connected to another account.",
    "MC6": "Delete account successfully.",
    "MC7": "Update profile successfully.",
    "MC7.1": "Change password successfully.",
    "MC8": "This email existed. Please use another email address.",
    "MC9": "This number has been used. Please enter another phone number.",
    "MC10": "Add card successfully.",
    "MC10.1": "Error. Unable to verify your card. Please try again later or contact your financial institution for help.",
    "MC11": "Delete card successfully.",
    "MC12": "Please enter a valid card number.",
    "MC12.1": "Please enter a valid expired date.",
    "MC12.2": "Please enter a valid CVV code.",
    "MC12.3": "Please enter a valid card name.",
    "MC13": "Please select at least 1 account to continue",
    "MC14": "Your membership will continue as usual.",
    "MC15": "This email existed but had not been verified yet.",
    "MC16": "This number has been used but had not been verified yet.",
    "MC17": "Network Error. Please try again later!",
    "MC18": "Your account hasn’t been verified yet. Please verify to continue!",
    "MC19": "You already have a schedule to downgrade to this subscription plan!",
    "MC20": "This card has been marked as default",
    "MC21": "Maximum limit is {{number}} characters. Please try again",
    "MC22": "This video does not have captions",
    "MC23": "Invalid OTP. Please try again!",
    "MC23.1": "Expired OTP. Please try again!",
    "MC24": "This action is currently unavailable because you have already paid for the next plan. Please try again after the current plan ends!"
  },
  "message": {
    "addCardSuccess": "Add card successfully",
    "deleteCardSuccess": "Delete card successfully",
    "setDefaultCardSuccess": "This card has been marked as default",
    "progressNotSaved": "You haven’t complete publishing",
    "questionQuit": "If you leave now, your progress will not be saved\n Leaving will make everything reset",
    "networkError": "Network Error. Please try again later!",
    "sendOtpSuccess": "OTP sent successfully",
    "sendOtpFailed": "OTP sent failed",
    "limitOtp": "You have exceeded your daily limit to receive OTP. Please try again later."
  },
  "button": {
    "quit": "Quit",
    "cancel": "Cancel",
    "back": "Back"
  }
}

        ### 📄 public/locales/ko/cloud-software.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "youtube": {
    "youtube-account": "YouTube Account",
    "manage-and-add-your-youtube-accounts": "Manage and add your YouTube accounts",
    "youtube-accounts": "YouTube Accounts",
    "total-videos": "Total Videos",
    "translated-videos": "Translated Videos",
    "translated-captions": "Translated Captions",
    "videos": "videos",
    "video": "video",
    "no-data": "No Data",
    "try-account": "Try add a YouTube account first!",
    "add-account": "Add YouTube Account",
    "refresh-videos": "Refresh videos",
    "refresh-videos-successfully": "Refresh videos successfully",
    "delete-account": "Delete account",
    "delete-account-desc": "Are you sure you want to delete this account?",
    "permanently-deleted": "The account will be permanently deleted!",
    "delete": "Delete",
    "cancel": "Cancel",
    "your-youtube-accounts": "Your Youtube Accounts",
    "connected-account": "{{count}} connected account",
    "connected-accounts": "{{count}} connected accounts",
    "limit-of-connection": "You’ve reached the limit of connection",
    "your-current-plan-level": "Your current plan: <b>{{level}}</b> only supports connecting to <b>{{count}} YouTube accounts</b>",
    "upgrade-your-plan": "Please upgrade your plan to connect to more YouTube accounts",
    "no-thanks": "No, thanks",
    "upgrade": "Upgrade",
    "your-current-plan": "Your current plan:",
    "valid-until": "Valid until",
    "plan-overview": {
      "title": "Getting a Gold Button with a Smart Plan",
      "most-popular": "Most Popular",
      "des1": "Get 2 months free with annual subscription to any plan",
      "des2": "So Sign up for an annual plan and get 2 months free!",
      "12-languages": "Get peace of mind by translating your video into up to <b>12</b> languages.",
      "40-languages": "Meet your goals with up to <b>5</b> connected accounts and <b>40</b> languages.",
      "unlimited-languages": "Achieve your desires with our unlimited plan!",
      "1-account-checked": "Connect only <b style='color:#01509A'>1</b> YouTube account",
      "12-languages-checked": "Translation language options up to <b style='color:#01509A'>12</b>",
      "5-account-checked": "Connect upto <b style='color:#01509A'>5</b> YouTube accounts",
      "40-languages-checked": "Translation language options up to <b style='color:#01509A'>40</b>",
      "unlimited-account-checked": "<b>Unlimited</b> connect YouTube accounts",
      "unlimited-languages-checked": "<b>Unlimited</b> translation languages",
      "cancelMembership": "Cancel Membership",
      "getStarted": "Get Started",
      "currentPlan": "Current Plan",
      "freeAnnually": "Get 2 months FREE annually",
      "planWillChange": "Your plan will change to",
      "restartMembershipDesc": "As requested, your membership will be canceled on",
      "restartMember": "Restart Membership"
    },
    "date": {
      "year": "Year",
      "month": "Month",
      "billAnnually": "Year, billed annually"
    }
  },
  "translator": {
    "translator": "Translator",
    "translateVideos": "Translate videos from your YouTube accounts",
    "selectVideo": "Select Video",
    "languages": "Languages",
    "customize": "Customize",
    "reviewAndPublish": "Review & Publish",
    "previous": "Previous",
    "nextStep": "Next Step",
    "publish": "Publish",
    "noVideo": "No video selected",
    "selectVideoInlist": "To select a video or move to next step, simply click on a video from the list below.",
    "account": "Account:",
    "refresh": "Refresh",
    "filters": "Filters:",
    "typeToFilter": "Type here to filter...",
    "video": "Video",
    "title": "Title",
    "description": "Description",
    "translated": "Translated",
    "captionized": "Captionized",
    "date": "Date",
    "selectLanguages": "Select languages",
    "originalLanguage": "Original Language",
    "translationLanguages": "Translation Languages",
    "totalSelected": "Total Selected: {{number}}",
    "available": "Available: {{number}}",
    "numberLanguage": "language",
    "numberLanguages": "languages",
    "excludeTranslation": "Exclude from translation",
    "exclude": "Exclude",
    "reviewTranslation": "Review translation",
    "restoreTranslation": "Restore translation",
    "captionMaster": "CaptionMaster",
    "translateCaption": "Translate subtitles/captions to different languages",
    "finishedUpdating": "Finished updating!",
    "close": "Close",
    "finishedUpdatingVideo": "Finished updating video details.",
    "finishedUpdatingCaption": "Finished adding captions.",
    "translatingVideo": "Please wait... Translating video",
    "publishingVideos": "Please wait... Publishing Videos details on YouTube",
    "publishingCaptions": "Please wait... Publishing Captions on YouTube",
    "waitingDesc": "It can take upto 60 seconds for the action to complete",
    "waitingTranslateDesc": "It can take up to 5 minutes to finish translating this video",
    "yes": "YES",
    "no": "NO",
    "time": "Time",
    "existing_caption": "Existing caption",
    "read_captions_from_youtube": "Read captions from Youtube",
    "clear_captions": "Clear captions",
    "exclusion": "Exclusion",
    "language-limit-popover": {
      "title": "Your plan’s limit of translation",
      "only-support": "only supports translating to",
      "support": "supports translating to",
      "languages": "{{number}} languages",
      "please-upgrade": "Please upgrade your plan to select more languages",
      "achieve-your-desire": "Achieve your desires with our unlimited plan!",
      "no": "No, thanks",
      "upgrade": "Upgrade",
      "ok": "OK"
    },
    "finish-updating-modal": {
      "click": "Click",
      "here": "here",
      "to-view": "to view the Video on YouTube",
      "translator": {
        "subtext-start": "To view the video title/description in different languages, make sure you",
        "subtext-highlight": "open YouTube in a private page/tab of your browser",
        "subtext-continue": "From the top right menu of YouTube (3 dots) select the Language in which you want to see the title and the description.",
        "subtext-second": "If you are logged in with an account, there is a chance the title/description won’t show in a different language, that’s why we recommend to open a private tab."
      },
      "caption": {
        "subtext-start": "To view the video Captions in different languages,",
        "subtext-highlight": "click in the YouTube player in the bottom right on the captions button",
        "subtext-continue": " and select the captions that you want to see."
      }
    }
  },
  "checkout": {
    "title": "Checkout",
    "or": "or",
    "placeOrder": "Place Order",
    "acceptText": "By clicking <b>Place Order</b>, you accept the <a style='text-decoration: underline' target='_blank' href='https://www.paypal.com/us/legalhub/useragreement-full'>Terms & Conditions</a>",
    "poweredBy": "Powered by",
    "addCard": "Add New Card",
    "tax": "Tax",
    "total": "Total",
    "subTotal": "Sub total",
    "validUntil": "Valid until",
    "startFrom": "Started from",
    "billedAnnually": "Billed annually",
    "remaining": "Remaining",
    "date": {
      "year": "Year"
    },
    "paymentMethod": "Payment Method",
    "saveCards": "Save cards",
    "pay": "Pay",
    "note": "Note:",
    "noteContent1": "We currently only support Visa, MasterCard and American Express cards.",
    "noteContent2": "If you are unable to add your card, please contact us."
  },
  "downgrade": {
    "selectAccount": "Select account to continue",
    "confirmChange": "Confirm change your subscription plan",
    "descripiton1": "Your new plan: <b>{{level}}</b> only supports connecting to <b>{{number}} YouTube account</b>",
    "description2": "Please select the account you will use in the next period:",
    "textSelectAccount": "You can select {{number}} account:",
    "note": "Note",
    "noteContent": "Other YouTube accounts will be deleted when the new plan is applied",
    "yourNewPlan": "Your new plan",
    "startOn": "starts on ",
    "description3": "You’ll still be able to use your current membership privileged until then.",
    "button": {
      "cancel": "Cancel",
      "next": "Next",
      "back": "Back",
      "confirm": "Confirm"
    },
    "currentPlan": "Current Plan",
    "billedAnnually": "Billed annually",
    "validUntil": "Valid until",
    "startFrom": "Start from",
    "newPlan": "New Plan"
  },
  "cancelPlan": {
    "title": "Confirm cancel your membership",
    "note": "Note",
    "noteContent": "All your YouTube accounts will be deleted when the membership cancellation takes effect.",
    "yourNewPlan": "Your new plan",
    "startOn": "starts on ",
    "currentPlan": "Current Plan",
    "billedAnnually": "Billed annually",
    "validUntil": "Valid until",
    "description": "Your membership will be cancelled on ",
    "description2": "You’ll still be able to use your current membership privileged until then.",
    "button": {
      "finish": "Finish Cancellation",
      "keep": "Keep current plan"
    }
  },
  "infoConfirm": {
    "button": {
      "ok": "OK",
      "done": "Done",
      "tryAgain": "Try Again"
    },
    "payment": {
      "success": {
        "title": "Payment Success",
        "description": "Congratulations, your subscription plan has been updated."
      },
      "failed": {
        "title": "Payment Failed",
        "description": "We encountered an error while processing your payment.",
        "tryAgain": "Please try again."
      }
    },
    "downgrade": {
      "success": {
        "title": "We’ve changed your plan",
        "yourNewPlan": "Your new plan starts on ",
        "description": "You’ll still be able to use your current membership privileged until then."
      }
    },
    "cancel": {
      "success": {
        "description": "Your access to all features in the current plan of SubTube will end on",
        "title": "We’re sorry to say goodbye"
      }
    }
  },
  "renewPlan": {
    "title": "Your plan has not been renewed",
    "note": "Note:",
    "noteContent": " If the plan has not been renewed within 30 days, all YouTube accounts connected to your account will be disconnected.",
    "description": "Your plan has not been renewed from <b>{{date}}</b>.",
    "description2": "To continue using the service, please renew your package manually!",
    "button": {
      "close": "Close",
      "renew": "Renew"
    }
  },
  "reminder": {
    "title": "Payment Reminder",
    "description1": "Your current plan will end soon!",
    "description2": "Please renew the plan before <b>{{date}}</b> to keep using the services.",
    "button": {
      "renew": "Renew"
    }
  }
}

        ### 📄 public/locales/ko/users.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "userManagement": {
    "userManagement": "User management",
    "export": "Export",
    "search": "Search",
    "id": "ID",
    "name": "Name",
    "kanaName": "Kana Name",
    "company": "Company",
    "email": "Email",
    "gender": "Gender",
    "birthday": "Birthday",
    "country": "Country",
    "phoneNumber": "Phone Number",
    "shippingAddress": "Shipping Address",
    "magazineSubscription": "Magazine Subscription",
    "purchaseHistory": "Purchase history",
    "yes": "Yes",
    "no": "No",
    "genders": {
      "male": "Male",
      "female": "Female",
      "other": "Other"
    }
  }
}

        ### 📄 public/locales/ko/dashboard.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "menu": {
    "insight": "통찰력",
    "testimonial": "추천서",
    "guidance": "지도",
    "pricing": "가격",
    "logIn": "로그인",
    "signup": "회원가입"
  },
  "slide": {
    "title1": "골드버튼, 실버버튼을 획득한 인플루언서의 멋진 삶을 상상해보세요",
    "desc1": "유튜브를 시작한 초기에도, 지금 이순간도 여러분이 늘 상상하던 삶을 그려보세요. 지금 그 지름길이 여러분 앞에 있습니다. Sub-Tube와 함께라면 유튜브 골드버튼, 실버버튼은 더 이상 특별한 사람의 이야기가 아닙니다.",
    "title2": "글로벌 유튜브 스타가 되는 꿈을 꾸고 계신가요? 국경을 넘어 더 넓은 관객 을 확보하고 싶으신가요?",
    "desc2": "Sub-Tube는 제목, 설명, 자막을 40개 언어로 쉽게 번역할 수 있게 해주어 전 세계 관객과 연결될 수 있게 합니 다. 당신의 독창적인 콘텐츠는 전 세계인들에게 사랑받을 가치가 충분합니다. 한 시장에만 제한되지 마세요 Sub-Tube로 도달 범위를 확장하고, 구독자를 증가시키며, 조회수를 늘리세요. 글로벌 명성을 향한 첫 걸음을 오늘 시작하세요!"
  },
  "numberLanguage": "유투브 콘텐츠를 번역하는 언어의 개수가 왜 그렇게 중요할까요?",
  "sizeMarket": {
    "title": "당신의 가치를 증명할 수 있는 시장 크기",
    "desc1": "하나의 국가를 타겟팅하는 것과 40개국을 타겟팅하는 것을 상상해 보세요.",
    "desc2": "시장 크기의 차이는 엄청납니다. ",
    "desc3": "Sub-Tube를 사용하면 귀하의 콘텐츠가 전 세계 수십억 명의 잠재 시청자에게 접근할 수 있습니다.",
    "desc4": " 다음은 그 영향력입니다:"
  },
  "getStarted": "시작하세요",
  "joinNow": "지금 가입하세요",
  "learnMore": "더 알아보기",
  "targets": "목표",
  "subscribers": "구독자(잠재 구독자 포함)",
  "views": "조회수",
  "comments": "댓글",
  "likes": "좋아요",
  "1-country": "1개국",
  "1M": "수백만 명",
  "10M": "수천만 회",
  "10.000": " 수만 개",
  "100.000": "수십만 개",
  "40-countries": "40개국이상",
  "1B": "수십억 명",
  "100M-To-1B": "수억에서 수십억 회 조회수",
  "100.000-To-1M": "수십만 개에서 수백만 개의 댓글",
  "1M-like": "수백만 개의 좋아요",
  "breaksDown": "Sub-Tube는 언어 장벽을 허물고 전 세계 시청자에게 도달할 수 있도록 도와줍니다. 당신의 독창적인 이야기는 전 세계인들에게 사랑받을 가치가 충분합니다. 채널을 기하급수적으로 성장시킬 수 있는 기회를 놓치지 마세요. 지금 Sub-Tube를 사용해보시고, 귀하의 콘텐츠를 전 세계적으로 접근 가능하게 만드세요!",
  "expand": {
    "title": "브랜드 가치를 글로벌로 확장하세요: Sub-Tube가 도와드립니다!",
    "desc1": "현대의 디지털 시대에서는 크리에이터들이 로컬 시장을 넘어 전 세계적으로 브랜드를 확장하는 것이 그 어느 때보다 중요합니다. Sub-Tube의 번역기가 바로 그 열쇠입니다. 북미, 남미, 아시아, 유럽 등 다양한 시장에서 브랜드 가치를 확장하고 싶은 크리에이터에게 Sub-Tube의 번역기가 제공하는 장점을 설명해드리겠습니다.",
    "desc2": "Sub-Tube의 번역기를 통해 브랜드 가치를 로컬에서 글로벌로 확장하세요. 북미, 남미, 아시아, 유럽 등 다양한 시장에서 성공적인 크리에이터로 자리매김하는 데 Sub-Tube가 함께하겠습 니다. 지금 Sub-Tube를 사용해보시고, 글로벌 크리에이터로서의 무한한 가능성을 열어보세요!",
    "card": {
      "title1": "다국어 접근성",
      "desc1": "Sub-Tube의 번역기는 40개 이상의 언어로 유튜브 제목, 설명, 자막을 번역할 수 있습니다. 이는 귀하의 콘텐츠가 전 세계 다양한 언어를 사용하는 시청자에게 접근 가능하다는 의미입니다. 로컬 시장에 머무르지 않고 글로벌 시장으로 도약할 수 있는 기회를 제공합니다.",
      "title2": "광범위한 도달 범위",
      "desc2": "북미, 남미, 아시아, 유럽 등 각 지역의 다양한 언어와 문화에 맞춰 콘텐츠를 제공함으로써, 더 넓은 도달 범위를 확보할 수 있습니다. 이는 다양한 지역에서 더 많은 구독자, 조회수, 좋아요를 얻는 데 크게 기여합니다.",
      "title3": "향상된 참여와 소통",
      "desc3": "시청자들이 이해할 수 있는 언어로 제공된 콘텐츠는 더 높은 참여율을 이끌어냅니다. 댓글, 공유, 좋아요 등의 상호작용이 증가하며, 이는 채널 성장의 중요한 요소입니다. Sub-Tube는 시청자와의 소통을 강화하여 충성도 높은 팬층을 형성할 수 있게 합니다.",
      "title4": "브랜드 인지도와 신뢰성 증대",
      "desc4": "글로벌 시장에서 여러 언어로 콘텐츠를 제공하면, 브랜드 인지도와 신뢰성이 자연스럽게 증가합니다. 시청자들은 자신의 언어로 된 콘텐츠를 선호하며, 이는 귀하의 브랜드가 글로벌 시장에서도 신뢰할 만한 콘텐츠 제공자임을 입증하는 데 도움이 됩니다.",
      "title5": "시간과 비용 절감",
      "desc5": "전문 번역 서비스를 일일이 이용하는 것에 비해, Sub-Tube의 번역기는 더 빠르고 저렴하게 다국어 콘텐츠를 생성할 수 있습니다. 이는 크리에이터들이 콘텐츠 제작에 더 많은 시간을 투자하고, 비용을 절감하여 다른 중요한 활동에 집중할 수 있게 합니다.",
      "title6": "경쟁력 강화",
      "desc6": "글로벌 시장에서의 경쟁은 치열합니다. Sub-Tube의 번역기를 활용하면 경쟁자보다 한 발 앞서 나갈 수 있습니다. 다국어로 콘텐츠를 제공함으로써 더 많은 시청자에게 도달하고, 글로벌 크리에이터로서의 입지를 강화할 수 있습니다."
    }
  },
  "member": {
    "date1": "2024/07/04",
    "date2": "2024/07/08",
    "date3": "2024/08/28"
  },
  "guidance": "Sub-Tube 가이드 영상(유투브 업로드된 영상의 링크 연결)",
  "pricing": {
    "title": "가격정책(기존과 동일하게)",
    "desc1": "연 단위 결제하시고 2개월 무료 혜택을 누리세요!",
    "desc2": "어떤 플랜이든 연 단위 결제를 선택하시면 2개월 무료 혜택을 드립니다!",
    "plan-overview": {
      "bronze": "브론즈",
      "silver": "실버",
      "gold": "골드",
      "year": "년",
      "month": "월",
      "2-months-free": "연 단위 결제시 <b style='color:#01509A'>2</b>달 무료의 효과",
      "12-languages": "<b>12</b> 개의 언어로 번역할 수 있는 기능을 누리세요",
      "40-languages": "최대 <b>5</b>개의 채널을 연동하고, <b>40</b>개의 언어를 선택할 수 있습니다.",
      "unlimited-languages": "제한없이 누리세요",
      "1-account-checked": "<b style='color:#01509A'>1</b> 개의 유튜브 채널 연동",
      "12-languages-checked": "<b style='color:#01509A'>12</b> 개 언어 중 번역 언어 선택 가능",
      "5-account-checked": "<b style='color:#01509A'>5</b> 개의 유튜브 채널 연동 가능",
      "40-languages-checked": "<b style='color:#01509A'>40</b> 개 언어 중 번역 언어 선택 가능",
      "unlimited-account-checked": "<b style='color:#01509A'>무제한</b> 으로 유튜브 채널 연동",
      "unlimited-languages-checked": "번역 언어 선택 <b style='color:#01509A'>무제한</b>"
    }
  }
}

        ### 📄 public/locales/ko/auth.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "login": {
    "facebookLink": "Continue with Facebook",
    "googleLink": "Continue with Google",
    "loginInfo": "Enter your email address and password to access admin panel",
    "noAccount": "Don't have an account? Create one",
    "rememberMe": "Remember me",
    "signupLink": "here",
    "loginSuccess": "Login Success"
  },
  "register": {
    "agree": "I agree to the",
    "alreadyHaveAccount": "Already have an account? Log in",
    "and": "and",
    "facebookLink": "Sign up with Facebook",
    "googleLink": "Sign up with Google",
    "loginLink": "here",
    "privacyOPolicy": "Privacy Policy",
    "termOfUse": "Terms of Use",
    "checkEmail": "Check Your Email",
    "checkEmailDesc": "We have sent an email with the link to verify your account. Please verify your account as soon as possible. The unverified account will be deleted after 48h without the verification.",
    "receiveLink": "Didn’t receive the link?",
    "resend": "Resend"
  },
  "forgot": {
    "desc": "Enter your email address and we’ll send an verification code to reset your password"
  },
  "reset": {
    "resetPassword": "Reset Password",
    "selectMethod": "Select method",
    "selectMethodDesc": "To continue, please select a method below to reset your password:",
    "emailDesc": "Enter your email address and we’ll send an email with the link to reset your password",
    "messageDesc": "Enter your phone number and we’ll send an OTP to reset your password",
    "sendCode": "Send Code",
    "checkEmail": "Check Your Email",
    "checkEmailDesc": "We have sent an email with the link to reset your password.",
    "checkMessage": "Check Your Message",
    "checkMessageDesc": "We have sent a message with the OTP to reset your password.",
    "receiveLink": "Didn’t receive the link?",
    "receiveMessage": "Didn’t receive the OTP?",
    "resend": "Resend",
    "next": "Next"
  },
  "security": {
    "title": "Check your mail",
    "desc": "We have sent a verification code to your email",
    "noCode": "Didn't get a verification code?"
  },
  "newPass": {
    "title": "Reset Password",
    "desc": "Choose a new password for your account",
    "newPassword": "New Password",
    "confirmPassword": "Confirm Password",
    "setPassword": "Set Password",
    "linkExpired": "Link expired",
    "linkExpiredDesc": "To reset password, return to the login page and select “Forgot password” to get a new link.",
    "goToLogin": "Go To Login"
  },
  "select": {
    "selectMethod": "Select method",
    "selectMethodDesc": "To continue, please select a method below to receive the link to reset your password:",
    "verifyYourAccount": "Verify your account",
    "verifyYourAccountDesc": "We’re almost done. To finish your registration, please select a verification method below to verify your account:",
    "verify": "Verify",
    "goToLogin": "Go To Login"
  },
  "verify": {
    "allSet": "You’re All Set",
    "accountActivated": "Your account has been activated. You can log in to your account and start using the app!",
    "linkExpired": "Link expired",
    "linkExpiredDesc": "Your activation link has been expired. Please signup again and verify your account within 48 hours to finish your resigtration.",
    "goToLogin": "Go To Login"
  }
}

        ### 📄 public/locales/ko/tags.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "tagManagement": {
    "tagManagement": "Tag Management",
    "view": "View Product List",
    "tagName": "Tag name",
    "tagID": "Tag ID",
    "products": "Products",
    "action": "Action"
  }
}

        ### 📄 public/locales/en/labelManagement.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "label": {
    "labelName": "Label Name",
    "labelID": "Label ID",
    "products": "Products",
    "action": "Action"
  }
}

        ### 📄 public/locales/en/my-profile.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "PersonalInfo": "Personal Info",
  "SecuritySettings": "Security Settings",
  "Payments": "Payment History",
  "Personal": {
    "YourCurrentPlan": "Your current plan:",
    "ValidUntil": "Valid until:",
    "FirstName": "First Name",
    "LastName": "Last Name",
    "PhoneNumber": "Phone Number",
    "Email": "Email",
    "Cancel": "Cancel",
    "Save": "Save",
    "Edit": "Edit",
    "UpdateProfileSuccessfully": "Update profile successfully."
  },
  "ChangePassword": {
    "title": "Change Password",
    "Password": "Password",
    "CurrentPassword": "Current Password",
    "NewPassword": "New Password",
    "ConfirmPassword": "Confirm Password",
    "success": "Change password successfully."
  },
  "PaymentMethod": {
    "title": "Payment Method",
    "ValidThru": "Valid thru",
    "AddNewCard": "Add New Card",
    "MarkAsDefault": "Mark as default",
    "DeleteCard": "Delete Card"
  },
  "PaymentHistory": {
    "title": "Payment History",
    "SubscriptionPlan": "Subscription Plan",
    "Date": "Date",
    "Status": "Status",
    "TotalAmount": "Total Amount"
  },
  "AddCard": {
    "CardNumber": "Card Number",
    "CardholderName": "Cardholder Name",
    "YourName": "Your name",
    "ExpDate": "Exp. Date",
    "CVV": "CVV",
    "Submit": "Submit"
  },
  "DeleteCard": {
    "title": "Delete Card",
    "content": "Are you sure you want to delete this card?",
    "Delete": "Delete"
  }
}

        ### 📄 public/locales/en/common.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "title": "Wellcome Nextjs",
  "login": "Log In",
  "register": "Register",
  "signUp": "Sign Up",
  "email": "Email",
  "password": "Password",
  "phoneNumber": "Phone number",
  "firstName": "First Name",
  "lastName": "Last Name",
  "here": "here",
  "forgotPass": "Forgot Password",
  "confirmPassword": "Confirm Password",
  "noData": "No Data",
  "tryAdd": "Try add a YouTube account first!",
  "confirmPasswordError": "Confirm passwords do not match.",
  "submit": "Submit",
  "sider": {
    "cloudSoftware": "AI & Cloud SW",
    "youTubeAccounts": "YouTube Accounts",
    "translator": "Translator",
    "captionizer": "CaptionMaster",
    "myProfile": "My Profile",
    "personalInfo": "Personal Info",
    "securitySettings": "Security Settings",
    "paymentHistory": "Payment History"
  },
  "header": {
    "profile": "Profile",
    "myProfile": "My Profile",
    "logout": "Logout",
    "logoutSuccess": "You have logged out successfully!"
  },
  "footer": {
    "companyName": "Company Name: YEAHPLUS",
    "owner": "Owner: Ko Jaehyuk | Personal Info Manager: Ko Jae Hyuk | Phone Number: 010-4490-0518 | Email: cto@yeahplus.co.kr",
    "address": "Address: 3F #304, A318, 33, Gyoha-ro 159beon-gil, Paju-si, Gyeonggi-do | Business Registration Number: 283-88-02519",
    "allRightsReserved": "All rights reserved",
    "copyright": "2024 copyright",
    "termsOfUse": "Terms of Use",
    "privacyPolicy": "Privacy Policy"
  },
  "validate": {
    "requiredField": "This field is required.",
    "notValidEmail": "Please enter a valid format email.",
    "max": "This field cannot exceed {{length}} characters",
    "confirmPasswordNotMatch": "Confirm Password do not match. Please try again!",
    "notContainSpace": "{{name}} cannot contain space characters.",
    "notValidLanguage": "Translation languages must not include default language",
    "notSupportCard": "This card is not supported. Please try another card!",
    "MC1": "This field is required.",
    "MC2": "Please enter a valid format email or phone number.",
    "MC2.1": "Please enter a valid format email.",
    "MC2.2": "Please enter a valid phone number.",
    "MC2.3": "Phone numbers cannot contain space characters.",
    "MC3": "Incorrect email/phone numbers or passwords. Please try again.",
    "MC3.1": "Password length requires 8 to 30 characters, at least a number, an uppercase letter, and a symbol.",
    "MC3.2": "Password cannot contain space characters.",
    "MC3.3": "Confirm passwords do not match.",
    "MC3.4": "Incorrect password. Please try again.",
    "MC4": "Email or Phone Number does not exist. Please try again!",
    "MC4.1": "Email does not exist. Please try again!",
    "MC5": "Add account successfully.",
    "MC5.1": "This YouTube account has been connected to another account.",
    "MC6": "Delete account successfully.",
    "MC7": "Update profile successfully.",
    "MC7.1": "Change password successfully.",
    "MC8": "This email existed. Please use another email address.",
    "MC9": "This number has been used. Please enter another phone number.",
    "MC10": "Add card successfully.",
    "MC10.1": "Error. Unable to verify your card. Please try again later or contact your financial institution for help.",
    "MC11": "Delete card successfully.",
    "MC12": "Please enter a valid card number.",
    "MC12.1": "Please enter a valid expired date.",
    "MC12.2": "Please enter a valid CVV code.",
    "MC12.3": "Please enter a valid card name.",
    "MC13": "Please select at least 1 account to continue",
    "MC14": "Your membership will continue as usual.",
    "MC15": "This email existed but had not been verified yet.",
    "MC16": "This number has been used but had not been verified yet.",
    "MC17": "Network Error. Please try again later!",
    "MC18": "Your account hasn’t been verified yet. Please verify to continue!",
    "MC19": "You already have a schedule to downgrade to this subscription plan!",
    "MC20": "This card has been marked as default",
    "MC21": "Maximum limit is {{number}} characters. Please try again",
    "MC22": "This video does not have captions",
    "MC23": "Invalid OTP. Please try again!",
    "MC23.1": "Expired OTP. Please try again!",
    "MC24": "This action is currently unavailable because you have already paid for the next plan. Please try again after the current plan ends!"
  },
  "message": {
    "addCardSuccess": "Add card successfully",
    "deleteCardSuccess": "Delete card successfully",
    "setDefaultCardSuccess": "This card has been marked as default",
    "progressNotSaved": "You haven’t complete publishing",
    "questionQuit": "If you leave now, your progress will not be saved\n Leaving will make everything reset",
    "networkError": "Network Error. Please try again later!",
    "sendOtpSuccess": "OTP sent successfully",
    "sendOtpFailed": "OTP sent failed",
    "limitOtp": "You have exceeded your daily limit to receive OTP. Please try again later."
  },
  "button": {
    "quit": "Quit",
    "cancel": "Cancel",
    "back": "Back"
  }
}

        ### 📄 public/locales/en/cloud-software.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "youtube": {
    "youtube-account": "YouTube Account",
    "manage-and-add-your-youtube-accounts": "Manage and add your YouTube accounts",
    "youtube-accounts": "YouTube Accounts",
    "total-videos": "Total Videos",
    "translated-videos": "Translated Videos",
    "translated-captions": "Translated Captions",
    "videos": "videos",
    "video": "video",
    "no-data": "No Data",
    "try-account": "Try add a YouTube account first!",
    "add-account": "Add YouTube Account",
    "refresh-videos": "Refresh videos",
    "refresh-videos-successfully": "Refresh videos successfully",
    "delete-account": "Delete account",
    "delete-account-desc": "Are you sure you want to delete this account?",
    "permanently-deleted": "The account will be permanently deleted!",
    "delete": "Delete",
    "cancel": "Cancel",
    "your-youtube-accounts": "Your Youtube Accounts",
    "connected-account": "{{count}} connected account",
    "connected-accounts": "{{count}} connected accounts",
    "limit-of-connection": "You’ve reached the limit of connection",
    "your-current-plan-level": "Your current plan: <b>{{level}}</b> only supports connecting to <b>{{count}} YouTube accounts</b>",
    "upgrade-your-plan": "Please upgrade your plan to connect to more YouTube accounts",
    "no-thanks": "No, thanks",
    "upgrade": "Upgrade",
    "your-current-plan": "Your current plan:",
    "valid-until": "Valid until",
    "plan-overview": {
      "title": "Getting a Gold Button with a Smart Plan",
      "most-popular": "Most Popular",
      "des1": "Get 2 months free with annual subscription to any plan",
      "des2": "So Sign up for an annual plan and get 2 months free!",
      "12-languages": "Get peace of mind by translating your video into up to <b>12</b> languages.",
      "40-languages": "Meet your goals with up to <b>5</b> connected accounts and <b>40</b> languages.",
      "unlimited-languages": "Achieve your desires with our unlimited plan!",
      "1-account-checked": "Connect only <b style='color:#01509A'>1</b> YouTube account",
      "12-languages-checked": "Translation language options up to <b style='color:#01509A'>12</b>",
      "5-account-checked": "Connect upto <b style='color:#01509A'>5</b> YouTube accounts",
      "40-languages-checked": "Translation language options up to <b style='color:#01509A'>40</b>",
      "unlimited-account-checked": "<b>Unlimited</b> connect YouTube accounts",
      "unlimited-languages-checked": "<b>Unlimited</b> translation languages",
      "cancelMembership": "Cancel Membership",
      "getStarted": "Get Started",
      "currentPlan": "Current Plan",
      "freeAnnually": "Get 2 months FREE annually",
      "planWillChange": "Your plan will change to",
      "restartMembershipDesc": "As requested, your membership will be canceled on",
      "restartMember": "Restart Membership"
    },
    "date": {
      "year": "Year",
      "month": "Month",
      "billAnnually": "Year, billed annually"
    }
  },
  "translator": {
    "translator": "Translator",
    "translateVideos": "Translate videos from your YouTube accounts",
    "selectVideo": "Select Video",
    "languages": "Languages",
    "customize": "Customize",
    "reviewAndPublish": "Review & Publish",
    "previous": "Previous",
    "nextStep": "Next Step",
    "publish": "Publish",
    "noVideo": "No video selected",
    "selectVideoInlist": "To select a video or move to next step, simply click on a video from the list below.",
    "account": "Account:",
    "refresh": "Refresh",
    "filters": "Filters:",
    "typeToFilter": "Type here to filter...",
    "video": "Video",
    "title": "Title",
    "description": "Description",
    "translated": "Translated",
    "captionized": "Captionized",
    "date": "Date",
    "selectLanguages": "Select languages",
    "originalLanguage": "Original Language",
    "translationLanguages": "Translation Languages",
    "totalSelected": "Total Selected: {{number}}",
    "available": "Available: {{number}}",
    "numberLanguage": "language",
    "numberLanguages": "languages",
    "excludeTranslation": "Exclude from translation",
    "exclude": "Exclude",
    "reviewTranslation": "Review translation",
    "restoreTranslation": "Restore translation",
    "captionMaster": "CaptionMaster",
    "translateCaption": "Translate subtitles/captions to different languages",
    "finishedUpdating": "Finished updating!",
    "close": "Close",
    "finishedUpdatingVideo": "Finished updating video details.",
    "finishedUpdatingCaption": "Finished adding captions.",
    "translatingVideo": "Please wait... Translating video",
    "publishingVideos": "Please wait... Publishing Videos details on YouTube",
    "publishingCaptions": "Please wait... Publishing Captions on YouTube",
    "waitingDesc": "It can take upto 60 seconds for the action to complete",
    "waitingTranslateDesc": "It can take up to 5 minutes to finish translating this video",
    "yes": "YES",
    "no": "NO",
    "time": "Time",
    "existing_caption": "Existing caption",
    "read_captions_from_youtube": "Read captions from Youtube",
    "clear_captions": "Clear captions",
    "exclusion": "Exclusion",
    "language-limit-popover": {
      "title": "Your plan’s limit of translation",
      "only-support": "only supports translating to",
      "support": "supports translating to",
      "languages": "{{number}} languages",
      "please-upgrade": "Please upgrade your plan to select more languages",
      "achieve-your-desire": "Achieve your desires with our unlimited plan!",
      "no": "No, thanks",
      "upgrade": "Upgrade",
      "ok": "OK"
    },
    "finish-updating-modal": {
      "click": "Click",
      "here": "here",
      "to-view": "to view the Video on YouTube",
      "translator": {
        "subtext-start": "To view the video title/description in different languages, make sure you",
        "subtext-highlight": "open YouTube in a private page/tab of your browser",
        "subtext-continue": "From the top right menu of YouTube (3 dots) select the Language in which you want to see the title and the description.",
        "subtext-second": "If you are logged in with an account, there is a chance the title/description won’t show in a different language, that’s why we recommend to open a private tab."
      },
      "caption": {
        "subtext-start": "To view the video Captions in different languages,",
        "subtext-highlight": "click in the YouTube player in the bottom right on the captions button",
        "subtext-continue": " and select the captions that you want to see."
      }
    }
  },
  "checkout": {
    "title": "Checkout",
    "or": "or",
    "placeOrder": "Place Order",
    "acceptText": "By clicking <b>Place Order</b>, you accept the <a style='text-decoration: underline' target='_blank' href='https://www.paypal.com/us/legalhub/useragreement-full'>Terms & Conditions</a>",
    "poweredBy": "Powered by",
    "addCard": "Add New Card",
    "tax": "Tax",
    "total": "Total",
    "subTotal": "Sub total",
    "validUntil": "Valid until",
    "startFrom": "Started from",
    "billedAnnually": "Billed annually",
    "remaining": "Remaining",
    "date": {
      "year": "Year"
    },
    "paymentMethod": "Payment Method",
    "saveCards": "Save cards",
    "pay": "Pay",
    "note": "Note:",
    "noteContent1": "We currently only support Visa, MasterCard and American Express cards.",
    "noteContent2": "If you are unable to add your card, please contact us."
  },
  "downgrade": {
    "selectAccount": "Select account to continue",
    "confirmChange": "Confirm change your subscription plan",
    "descripiton1": "Your new plan: <b>{{level}}</b> only supports connecting to <b>{{number}} YouTube account</b>",
    "description2": "Please select the account you will use in the next period:",
    "textSelectAccount": "You can select {{number}} account:",
    "note": "Note",
    "noteContent": "Other YouTube accounts will be deleted when the new plan is applied",
    "yourNewPlan": "Your new plan",
    "startOn": "starts on ",
    "description3": "You’ll still be able to use your current membership privileged until then.",
    "button": {
      "cancel": "Cancel",
      "next": "Next",
      "back": "Back",
      "confirm": "Confirm"
    },
    "currentPlan": "Current Plan",
    "billedAnnually": "Billed annually",
    "validUntil": "Valid until",
    "startFrom": "Start from",
    "newPlan": "New Plan"
  },
  "cancelPlan": {
    "title": "Confirm cancel your membership",
    "note": "Note",
    "noteContent": "All your YouTube accounts will be deleted when the membership cancellation takes effect.",
    "yourNewPlan": "Your new plan",
    "startOn": "starts on ",
    "currentPlan": "Current Plan",
    "billedAnnually": "Billed annually",
    "validUntil": "Valid until",
    "description": "Your membership will be cancelled on ",
    "description2": "You’ll still be able to use your current membership privileged until then.",
    "button": {
      "finish": "Finish Cancellation",
      "keep": "Keep current plan"
    }
  },
  "infoConfirm": {
    "button": {
      "ok": "OK",
      "done": "Done",
      "tryAgain": "Try Again"
    },
    "payment": {
      "success": {
        "title": "Payment Success",
        "description": "Congratulations, your subscription plan has been updated."
      },
      "failed": {
        "title": "Payment Failed",
        "description": "We encountered an error while processing your payment.",
        "tryAgain": "Please try again."
      }
    },
    "downgrade": {
      "success": {
        "title": "We’ve changed your plan",
        "yourNewPlan": "Your new plan starts on ",
        "description": "You’ll still be able to use your current membership privileged until then."
      }
    },
    "cancel": {
      "success": {
        "description": "Your access to all features in the current plan of SubTube will end on",
        "title": "We’re sorry to say goodbye"
      }
    }
  },
  "renewPlan": {
    "title": "Your plan has not been renewed",
    "note": "Note:",
    "noteContent": " If the plan has not been renewed within 30 days, all YouTube accounts connected to your account will be disconnected.",
    "description": "Your plan has not been renewed from <b>{{date}}</b>.",
    "description2": "To continue using the service, please renew your package manually!",
    "button": {
      "close": "Close",
      "renew": "Renew"
    }
  },
  "reminder": {
    "title": "Payment Reminder",
    "description1": "Your current plan will end soon!",
    "description2": "Please renew the plan before <b>{{date}}</b> to keep using the services.",
    "button": {
      "renew": "Renew"
    }
  }
}

        ### 📄 public/locales/en/users.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "userManagement": {
    "userManagement": "User management",
    "export": "Export",
    "search": "Search",
    "id": "ID",
    "name": "Name",
    "kanaName": "Kana Name",
    "company": "Company",
    "email": "Email",
    "gender": "Gender",
    "birthday": "Birthday",
    "country": "Country",
    "phoneNumber": "Phone Number",
    "shippingAddress": "Shipping Address",
    "magazineSubscription": "Magazine Subscription",
    "purchaseHistory": "Purchase history",
    "yes": "Yes",
    "no": "No",
    "genders": {
      "male": "Male",
      "female": "Female",
      "other": "Other"
    }
  }
}

        ### 📄 public/locales/en/dashboard.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "menu": {
    "insight": "Insight",
    "testimonial": "Testimonial",
    "guidance": "Guidance",
    "pricing": "Pricing",
    "logIn": "Log In",
    "signup": "Sign up"
  },
  "slide": {
    "title1": "Imagine the Glamorous Life of Influencers Who Have Earned the Gold and Silver Buttons",
    "desc1": "Picture the life you've always dreamed of, both at the start of your YouTube journey and in this very moment. The shortcut is right in front of you. With Sub-Tube, the YouTube Gold and Silver Buttons are no longer just stories for special people.",
    "title2": "Are you dreaming of becoming a global YouTube star? Do you want to expand your audience beyond borders?",
    "desc2": "Sub-Tube makes it easy to translate titles, descriptions, and subtitles into 40 languages, connecting you with audiences worldwide. Your unique content deserves to be loved by people all over the world. Don’t limit yourself to one market. Expand your reach, increase subscribers, and boost views with Sub-Tube. Start your journey to global fame today!"
  },
  "numberLanguage": "Why is the number of languages you translate your YouTube content into so important?",
  "sizeMarket": {
    "title": "The Size of the Market that Can Prove Your Worth",
    "desc1": "Imagine targeting one country versus targeting 40 countries.",
    "desc2": "The difference in market size is tremendous.",
    "desc3": "With Sub-Tube, your content can reach billions of potential viewers around the world.",
    "desc4": "Here’s the impact:"
  },
  "getStarted": "Get Started",
  "joinNow": "Join Now",
  "learnMore": "Learn More",
  "targets": "Targets",
  "subscribers": "Subscribers (Including Potential Subscribers)",
  "views": "Views",
  "comments": "Comments",
  "likes": "Likes",
  "1-country": "1 country",
  "1M": "1M+",
  "10M": "10M+",
  "10.000": "10.000+",
  "100.000": "100.000+",
  "40-countries": "40+ countries",
  "1B": "1B+",
  "100M-To-1B": "100M+ to 1B+",
  "100.000-To-1M": "100.000+ to 1M+",
  "1M-like": "1M+",
  "breaksDown": "Sub-Tube breaks down language barriers and helps you reach viewers worldwide. Your unique story deserves to be loved by people around the world. Don’t miss the opportunity to exponentially grow your channel. Try Sub-Tube now and make your content accessible globally!",
  "expand": {
    "title": "Expand Your Brand Value Globally: Sub-Tube Can Help!",
    "desc1": "In today's digital age, it is more important than ever for creators to expand their brand beyond local markets and reach a global audience. Sub-Tube's translator is the key. Here’s how Sub-Tube's translator can benefit creators looking to expand their brand value in various markets such as North America, South America, Asia, and Europe.",
    "desc2": "Expand your brand value from local to global with Sub-Tube's translator. Sub-Tube will assist you in becoming a successful creator in various markets such as North America, South America, Asia, and Europe. Try Sub-Tube now and unlock the limitless possibilities as a global creator!",
    "card": {
      "title1": "Multilingual Accessibility",
      "desc1": "Sub-Tube's translator can translate YouTube titles, descriptions, and subtitles into over 40 languages. This means your content is accessible to viewers who speak different languages around the world. It provides an opportunity to leap from the local market to the global market.",
      "title2": "Wide Reach",
      "desc2": "By providing content tailored to the various languages and cultures of regions such as North America, South America, Asia, and Europe, you can secure a wider reach. This greatly contributes to gaining more subscribers, views, and likes from diverse regions.",
      "title3": "Enhanced Engagement and Interaction",
      "desc3": "Content provided in a language that viewers can understand leads to higher engagement rates. Increased interactions such as comments, shares, and likes are key to channel growth. Sub-Tube strengthens communication with viewers, helping to form a loyal fan base.",
      "title4": "Increased Brand Awareness and Credibility",
      "desc4": "Providing content in multiple languages in the global market naturally increases brand awareness and credibility. Viewers prefer content in their own language, which helps prove that your brand is a reliable content provider in the global market.",
      "title5": "Time and Cost Savings",
      "desc5": "Compared to using professional translation services individually, Sub-Tube’s translator can generate multilingual content faster and cheaper. This allows creators to invest more time in content creation and save costs to focus on other important activities.",
      "title6": "Enhanced Competitiveness",
      "desc6": "Competition in the global market is fierce. Using Sub-Tube's translator can give you an edge over competitors. By providing content in multiple languages, you can reach more viewers and strengthen your position as a global creator."
    }
  },
  "member": {
    "date1": "04/07/2024",
    "date2": "08/07/2024",
    "date3": "28/08/2024"
  },
  "guidance": "Guidance",
  "pricing": {
    "title": "Pricing",
    "desc1": "Get 2 months free with annual subscription to any plan",
    "desc2": "So Sign up for an annual plan and get 2 months free!",
    "plan-overview": {
      "bronze": "Bronze",
      "silver": "Silver",
      "gold": "Gold",
      "year": "year",
      "month": "month",
      "2-months-free": "<b style='color:#01509A'>2</b> months free",
      "12-languages": "Get peace of mind by translating your video into up to <b>12</b> languages.",
      "40-languages": "Meet your goals with up to <b>5</b> connected accounts and <b>40</b> languages.",
      "unlimited-languages": "Achieve your desires with our unlimited plan!",
      "1-account-checked": "<b style='color:#01509A'>1</b> YouTube account",
      "12-languages-checked": "<b style='color:#01509A'>12</b> translation languages",
      "5-account-checked": "<b style='color:#01509A'>5</b> YouTube accounts",
      "40-languages-checked": "<b style='color:#01509A'>40</b> translation languages",
      "unlimited-account-checked": "<b style='color:#01509A'>Unlimited</b> YouTube accounts",
      "unlimited-languages-checked": "<b style='color:#01509A'>Unlimited</b> translation languages"
    }
  }
}

        ### 📄 public/locales/en/auth.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "login": {
    "facebookLink": "Continue with Facebook",
    "googleLink": "Continue with Google",
    "loginInfo": "Enter your email address and password to access admin panel",
    "noAccount": "Don't have an account? Create one",
    "rememberMe": "Remember me",
    "signupLink": "here",
    "loginSuccess": "Login Success"
  },
  "register": {
    "agree": "I agree to the",
    "alreadyHaveAccount": "Already have an account? Log in",
    "and": "and",
    "facebookLink": "Sign up with Facebook",
    "googleLink": "Sign up with Google",
    "loginLink": "here",
    "privacyOPolicy": "Privacy Policy",
    "termOfUse": "Terms of Use",
    "checkEmail": "Check Your Email",
    "checkEmailDesc": "We have sent an email with the link to verify your account. Please verify your account as soon as possible. The unverified account will be deleted after 48h without the verification.",
    "receiveLink": "Didn’t receive the link?",
    "resend": "Resend"
  },
  "forgot": {
    "desc": "Enter your email address and we’ll send an verification code to reset your password"
  },
  "reset": {
    "resetPassword": "Reset Password",
    "selectMethod": "Select method",
    "selectMethodDesc": "To continue, please select a method below to reset your password:",
    "emailDesc": "Enter your email address and we’ll send an email with the link to reset your password",
    "messageDesc": "Enter your phone number and we’ll send an OTP to reset your password",
    "sendCode": "Send Code",
    "checkEmail": "Check Your Email",
    "checkEmailDesc": "We have sent an email with the link to reset your password.",
    "checkMessage": "Check Your Message",
    "checkMessageDesc": "We have sent a message with the OTP to reset your password.",
    "receiveLink": "Didn’t receive the link?",
    "receiveMessage": "Didn’t receive the OTP?",
    "resend": "Resend",
    "next": "Next"
  },
  "security": {
    "title": "Check your mail",
    "desc": "We have sent a verification code to your email",
    "noCode": "Didn't get a verification code?"
  },
  "newPass": {
    "title": "Reset Password",
    "desc": "Choose a new password for your account",
    "newPassword": "New Password",
    "confirmPassword": "Confirm Password",
    "setPassword": "Set Password",
    "linkExpired": "Link expired",
    "linkExpiredDesc": "To reset password, return to the login page and select “Forgot password” to get a new link.",
    "goToLogin": "Go To Login"
  },
  "select": {
    "selectMethod": "Select method",
    "selectMethodDesc": "To continue, please select a method below to receive the link to reset your password:",
    "verifyYourAccount": "Verify your account",
    "verifyYourAccountDesc": "We’re almost done. To finish your registration, please select a verification method below to verify your account:",
    "verify": "Verify",
    "goToLogin": "Go To Login"
  },
  "verify": {
    "allSet": "You’re All Set",
    "accountActivated": "Your account has been activated. You can log in to your account and start using the app!",
    "linkExpired": "Link expired",
    "linkExpiredDesc": "Your activation link has been expired. Please signup again and verify your account within 48 hours to finish your resigtration.",
    "goToLogin": "Go To Login"
  }
}

        ### 📄 public/locales/en/tags.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "tagManagement": {
    "tagManagement": "Tag Management",
    "view": "View Product List",
    "tagName": "Tag name",
    "tagID": "Tag ID",
    "products": "Products",
    "action": "Action"
  }
}

        ### 📄 src/middleware.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, next/server`
* wf **Function:** `middleware`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { AUTH_ROUTE, PRIVATE_ROUTE, ROUTER_PATH } from '@/constants';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentToken = request.cookies.get('access_token');

  if (PRIVATE_ROUTE.includes(request.nextUrl.pathname) && !currentToken) {
    request.cookies.delete('access_token');
    const response = NextResponse.redirect(new URL(ROUTER_PATH.LOGIN, request.url));
    response.cookies.delete('access_token');
    return response;
  }

  if (AUTH_ROUTE.includes(request.nextUrl.pathname) && currentToken) {
    return NextResponse.redirect(new URL(ROUTER_PATH.YOUTUBE_ACCOUNT, request.url));
  }

  // if (request.nextUrl.pathname === ROUTER_PATH.DASHBOARD) {
  //   return NextResponse.redirect(new URL(ROUTER_PATH.YOUTUBE_ACCOUNT, request.url));
  // }
}

        ### 📄 src/types/page.d.ts
        > **Context Summary**
        * 🔗 **Imports:** `next, react`
* wb **Type/Intf:** `Page`

        ```ts
        /* eslint-disable @typescript-eslint/ban-types */
import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

        ### 📄 src/plugins/firebase.ts
        > **Context Summary**
        * 🔗 **Imports:** `firebase/app, firebase/auth`

        ```ts
        import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

        ### 📄 src/plugins/paypal.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        export const paypalConfig = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
  dataSdkIntegrationSource: 'integrationbuilder_ac',
  disableFunding: ['paylater', 'venmo'],
  currency: 'USD',
};

        ### 📄 src/constants/price.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces`

        ```ts
        import { LEVEL_USER, Price } from '@/interfaces';

export const PRICE: Price = {
  [LEVEL_USER.BRONZE]: {
    currentPrice: 144,
    salePrice: 119,
  },
  [LEVEL_USER.SILVER]: {
    currentPrice: 360,
    salePrice: 299,
  },
  [LEVEL_USER.GOLD]: {
    currentPrice: 1188,
    salePrice: 989,
  },
};

        ### 📄 src/constants/regex.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        export const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,30}$/;

export const REGEX_EMAIL = /^[\w-+\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const REGEX_PHONE = /^\+(\d{1,3})(\d{9,12})$/;

        ### 📄 src/constants/common.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces`

        ```ts
        import { CurrencyTypeEnum, LEVEL_USER } from '@/interfaces';

import { PRICE } from './price';

export enum ROUTER_PATH {
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  FORGOT_PASSWORD = '/auth/forgot-password',
  NEW_PASSWORD = '/auth/new-password',
  DASHBOARD = '/',
  YOUTUBE_ACCOUNT = '/cloud-software/youtube-accounts',
  TRANSLATOR = '/cloud-software/translator',
  CAPTION = '/cloud-software/captionizer',
  PERSONAL_INFO = '/my-profile/personal-info',
  SECURITY_SETTINGS = '/my-profile/security-settings',
  PAYMENT_HISTORY = '/my-profile/payment-history',
}

export const PRIVATE_ROUTE: string[] = [
  // ROUTER_PATH.DASHBOARD,
  ROUTER_PATH.YOUTUBE_ACCOUNT,
  ROUTER_PATH.TRANSLATOR,
  ROUTER_PATH.CAPTION,
  ROUTER_PATH.PERSONAL_INFO,
  ROUTER_PATH.SECURITY_SETTINGS,
  ROUTER_PATH.PAYMENT_HISTORY,
];
export const AUTH_ROUTE: string[] = [
  ROUTER_PATH.LOGIN,
  ROUTER_PATH.REGISTER,
  ROUTER_PATH.FORGOT_PASSWORD,
];

export const SCREENS = {
  DESKTOP: 1024,
};

export const LOCALE = {
  EN: 'en',
  KO: 'ko',
};

export const DEFAULT_LOCALE = LOCALE.EN;

export enum RESPONSE_CODE {
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  PERMISSION = 403,
  SERVER_ERROR = 500,
  VALIDATION_ERROR = 422,
}

export enum Priority {
  INFO,
  LOW,
  MEDIUM,
  HIGH,
}

export enum SORT_TYPE {
  DESC = 'desc',
  desc = 'desc',
  ASC = 'ASC',
  asc = 'asc',
}

export const DATE_FORMAT = {
  MONTH_YEAR: 'MM/YY',
  BASIC: 'DD-MM-YYYY',
  DATE_FULL: 'YYYY/MM/DD HH:mm',
  DAY_MONTH_YEAR: 'DD/MM/YYYY',
  YEAR_MONTH_DAY: 'YYYY/MM/DD',
  FULL_DATE_WITH_TIME: 'HH:mm DD/MM/YYYY',
  LONG_DATE: 'MMMM D, YYYY',
};

export const currencies = {
  [CurrencyTypeEnum.USD]: {
    text: 'USD',
    icon: '$',
  },
  [CurrencyTypeEnum.BTC]: {
    text: 'BTC',
    icon: '₿',
  },
  [CurrencyTypeEnum.ETH]: {
    text: 'ETH',
    icon: 'Ξ',
  },
};

export const passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

export const websitePattern =
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?/gi;

export const NUMBER_CHARACTERS = {
  phone: {
    max: 15,
    min: 8,
  },
  title: {
    max: 100,
    min: 1,
  },
  description: {
    max: 5000,
    min: 0,
  },
};

export const INVALID_CODE = 'INVALID_CODE';

export const LIST_COUNTRY_CODE = [
  '1',
  '7',
  '20',
  '27',
  '30',
  '31',
  '32',
  '33',
  '34',
  '36',
  '39',
  '40',
  '41',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '81',
  '82',
  '84',
  '86',
  '90',
  '91',
  '92',
  '93',
  '94',
  '95',
  '98',
  '211',
  '212',
  '213',
  '216',
  '218',
  '220',
  '221',
  '222',
  '223',
  '224',
  '225',
  '226',
  '227',
  '228',
  '229',
  '230',
  '231',
  '232',
  '233',
  '234',
  '235',
  '236',
  '237',
  '238',
  '239',
  '240',
  '241',
  '242',
  '243',
  '244',
  '245',
  '246',
  '248',
  '249',
  '250',
  '251',
  '252',
  '253',
  '254',
  '255',
  '256',
  '257',
  '258',
  '260',
  '261',
  '262',
  '263',
  '264',
  '265',
  '266',
  '267',
  '268',
  '269',
  '291',
  '297',
  '351',
  '352',
  '353',
  '354',
  '355',
  '356',
  '357',
  '358',
  '359',
  '370',
  '371',
  '372',
  '373',
  '374',
  '375',
  '376',
  '377',
  '378',
  '380',
  '381',
  '382',
  '383',
  '385',
  '386',
  '387',
  '389',
  '420',
  '421',
  '423',
  '501',
  '502',
  '503',
  '504',
  '505',
  '506',
  '507',
  '509',
  '590',
  '591',
  '592',
  '593',
  '594',
  '595',
  '596',
  '597',
  '598',
  '599',
  '670',
  '673',
  '674',
  '675',
  '676',
  '677',
  '678',
  '679',
  '680',
  '685',
  '686',
  '687',
  '688',
  '689',
  '691',
  '692',
  '850',
  '852',
  '853',
  '855',
  '856',
  '880',
  '886',
  '960',
  '961',
  '962',
  '963',
  '964',
  '965',
  '966',
  '967',
  '968',
  '970',
  '971',
  '972',
  '973',
  '974',
  '975',
  '976',
  '977',
  '992',
  '993',
  '994',
  '995',
  '996',
  '998',
  '1242',
  '1246',
  '1268',
  '1473',
  '1671',
  '1758',
  '1767',
  '1784',
  '1868',
  '1869',
  '1876',
];

export const MESSAGES_ERROR = {
  WRONG_PASS_LOGIN: 'WRONG_PASS_LOGIN',
  PHONE_HAS_TAKEN: 'PHONE_HAS_TAKEN',
  EMAIL_OR_PHONE_NOT_EXIST: 'EMAIL_OR_PHONE_NOT_EXIST',
  EMAIL_TAKEN: 'EMAIL_TAKEN',
  PHONE_TAKEN: 'PHONE_TAKEN',
  EMAIL_EXISTED_NOT_VERIFIED: 'EMAIL_EXISTED_NOT_VERIFIED',
  NUMBER_USED_NOT_VERIFIED: 'NUMBER_USED_NOT_VERIFIED',
};

export const FIREBASE_ERROR = {
  INVALID_CODE: 'auth/invalid-verification-code',
  CODE_EXPIRED: 'auth/code-expired',
  QUOTA_EXCEEDED: 'auth/quota-exceeded',
};

export const STEP_TRANSLATE = {
  STEP_1: 0,
  STEP_2: 1,
  STEP_3: 2,
  STEP_4: 3,
};

export const RANK_NAME = {
  [LEVEL_USER.BRONZE]: 'Bronze',
  [LEVEL_USER.SILVER]: 'Silver',
  [LEVEL_USER.GOLD]: 'Gold',
  [LEVEL_USER.DEFAULT]: '',
};

export const planData = [
  {
    level: LEVEL_USER.BRONZE,
    title: 'Bronze',
    description: 'youtube.plan-overview.12-languages',
    currentPriceYear: Number(PRICE[LEVEL_USER.BRONZE].currentPrice.toFixed(1)),
    currentPriceMonth: Number((Number(PRICE[LEVEL_USER.BRONZE].currentPrice) / 12).toFixed(1)),
    salePriceYear: Number(PRICE[LEVEL_USER.BRONZE].salePrice.toFixed(1)),
    salePriceMonth: Number((Number(PRICE[LEVEL_USER.BRONZE].salePrice) / 12).toFixed(1)),
    info: ['youtube.plan-overview.1-account-checked', 'youtube.plan-overview.12-languages-checked'],
  },
  {
    level: LEVEL_USER.SILVER,
    title: 'Silver',
    description: 'youtube.plan-overview.40-languages',
    currentPriceYear: Number(PRICE[LEVEL_USER.SILVER].currentPrice.toFixed(1)),
    currentPriceMonth: Number((Number(PRICE[LEVEL_USER.SILVER].currentPrice) / 12).toFixed(1)),
    salePriceYear: Number(PRICE[LEVEL_USER.SILVER].salePrice.toFixed(1)),
    salePriceMonth: Number((Number(PRICE[LEVEL_USER.SILVER].salePrice) / 12).toFixed(1)),
    mostPopular: true,
    info: ['youtube.plan-overview.5-account-checked', 'youtube.plan-overview.40-languages-checked'],
  },
  {
    level: LEVEL_USER.GOLD,
    title: 'Gold',
    description: 'youtube.plan-overview.unlimited-languages',
    currentPriceYear: Number(PRICE[LEVEL_USER.GOLD].currentPrice.toFixed(1)),
    currentPriceMonth: Number((Number(PRICE[LEVEL_USER.GOLD].currentPrice) / 12).toFixed(1)),
    salePriceYear: Number(PRICE[LEVEL_USER.GOLD].salePrice.toFixed(1)),
    salePriceMonth: Number((Number(PRICE[LEVEL_USER.GOLD].salePrice) / 12).toFixed(1)),
    info: [
      'youtube.plan-overview.unlimited-account-checked',
      'youtube.plan-overview.unlimited-languages-checked',
    ],
  },
];

export enum TType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  SAD = 'sad',
  REMINDER = 'reminder',
}

export enum TypeConfirm {
  PAYMENT_SUCCESS = 'payment-success',
  PAYMENT_FAIL = 'payment-fail',
  DOWNGRADE_SUCCESS = 'downgrade-success',
  CANCEL_SUCCESS = 'cancel-success',
}

export enum PaymentStatus {
  PAID = 'PAID',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
}

        ### 📄 src/constants/index.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        export * from './common';
export * from './theme';

        ### 📄 src/constants/theme.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `StatisticColor`

        ```ts
        import { FC } from 'react';

export type StatisticColor = 'primary' | 'error' | 'secondary' | 'success';
interface ConfigStatistic {
  id: number;
  name: string;
  title: string;
  color: StatisticColor;
  Icon: FC | null;
}
export const BORDER_RADIUS = '7px';

export const BASE_COLORS = {
  white: '#ffffff',
  black: '#000000',
  green: '#008000',
  orange: '#ffb155',
  gray: '#808080',
  lightgrey: '#c5d3e0',
  violet: '#ee82ee',
  lightgreen: '#89dca0',
  pink: '#ffc0cb',
  blue: '#0000ff',
  skyblue: '#35a0dc',
  red: '#ff5252',
} as const;

export const LAYOUT = {
  mobile: {
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    headerHeight: '4.25rem',
    headerPadding: '1rem',
  },
  desktop: {
    paddingVertical: '2.25rem',
    paddingHorizontal: '2rem',
    headerHeight: '3.75rem',
  },
} as const;

export const FONT_FAMILY = {
  main: 'Inter',
  secondary: 'Lato',
  montserrat: 'Montserrat',
} as const;

export const FONT_SIZE = {
  xxs: '0.75rem',
  xs: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '1.625rem',
  xxxxl: '2rem',
} as const;

export const FONT_WEIGHT = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
} as const;

export const HEIGHT = {
  xxs: '1.5rem',
  xs: '2rem',
  sm: '2.5rem',
  md: '3.125rem',
  lg: '4rem',
} as const;

export const BREAKPOINTS = {
  xs: 360,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1920,
  xxxl: 2400,
} as const;

const getMedia = <T extends number>(breakpoint: T): `(min-width: ${T}px)` =>
  `(min-width: ${breakpoint}px)`;

export const media = {
  xs: getMedia(BREAKPOINTS.xs),
  sm: getMedia(BREAKPOINTS.sm),
  md: getMedia(BREAKPOINTS.md),
  lg: getMedia(BREAKPOINTS.lg),
  xl: getMedia(BREAKPOINTS.xl),
  xxl: getMedia(BREAKPOINTS.xxl),
  xxxl: getMedia(BREAKPOINTS.xxxl),
};

interface DefaultPadding {
  mobile: [number, number];
  tablet: [number, number];
  desktop: [number, number];
}

export const defaultPaddings: DefaultPadding = {
  mobile: [30, 16],
  tablet: [40, 30],
  desktop: [50, 60],
};

interface ModalSizes {
  small: string;
  medium: string;
  large: string;
}

export const modalSizes: ModalSizes = {
  small: '400px',
  medium: '600px',
  large: '800px',
};

interface Specifity {
  id: number;
  name: string;
}

export const specifities: Specifity[] = [
  {
    id: 1,
    name: 'surgeon',
  },
  {
    id: 2,
    name: 'dermatologist',
  },
  {
    id: 3,
    name: 'oncologist',
  },
  {
    id: 4,
    name: 'cardiologist',
  },
  {
    id: 5,
    name: 'therapist',
  },
  {
    id: 6,
    name: 'ophthalmologist',
  },
  {
    id: 7,
    name: 'neurologist',
  },
];

export const statistics: ConfigStatistic[] = [
  {
    id: 1,
    name: 'protein',
    title: 'medical-dashboard.protein',
    color: 'success',
    Icon: null,
  },
  {
    id: 2,
    name: 'fat',
    title: 'medical-dashboard.fat',
    color: 'error',
    Icon: null,
  },
  {
    id: 3,
    name: 'bones',
    title: 'medical-dashboard.bones',
    color: 'primary',
    Icon: null,
  },
  {
    id: 4,
    name: 'water',
    title: 'medical-dashboard.water',
    color: 'secondary',
    Icon: null,
  },
];

        ### 📄 src/stores/hooks.ts
        > **Context Summary**
        * 🔗 **Imports:** `react-redux`

        ```ts
        import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

        ### 📄 src/stores/store.ts
        > **Context Summary**
        * 🔗 **Imports:** `@reduxjs/toolkit, next-redux-wrapper`
* wb **Type/Intf:** `RootState`
* wb **Type/Intf:** `AppDispatch`
* wb **Type/Intf:** `AppStore`

        ```ts
        import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import authReducer from './auth/auth.slice';
import progressReducer from './progress/progress.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  progress: progressReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

        ### 📄 src/stores/provider.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, react-redux`
* wf **Function:** `Providers`

        ```typescript
        'use client';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

        ### 📄 src/stores/progress/progress.slice.ts
        > **Context Summary**
        * 🔗 **Imports:** `@reduxjs/toolkit`

        ```ts
        import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type State = {
  isProgress: boolean;
  isOpenRenewPlan: boolean;
  isOpenPlanOverview: boolean;
  isOpenReminderPayment: boolean;
};

const slice = createSlice({
  name: 'plan',
  initialState: {
    isProgress: false,
    isOpenRenewPlan: false,
    isOpenPlanOverview: false,
    isOpenReminderPayment: false,
  } as State,
  reducers: {
    setIsProgress: (state, { payload }: PayloadAction<boolean>) => {
      state.isProgress = payload;
    },

    setIsOpenRenewPlan: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenRenewPlan = payload;
    },

    setIsOpenPlanOverview: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenPlanOverview = payload;
    },

    setIsOpenReminderPayment: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenReminderPayment = payload;
    },
  },
});

export const {
  setIsProgress,
  setIsOpenRenewPlan,
  setIsOpenPlanOverview,
  setIsOpenReminderPayment,
} = slice.actions;

export default slice.reducer;

export const selectIsProgress = (state: RootState) => state.progress.isProgress;

export const selectIsOpenRenewPlan = (state: RootState) => state.progress.isOpenRenewPlan;

export const selectIsOpenPlanOverview = (state: RootState) => state.progress.isOpenPlanOverview;

export const selectIsOpenReminderPayment = (state: RootState) =>
  state.progress.isOpenReminderPayment;

        ### 📄 src/stores/auth/auth.slice.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/utils/cookie, @reduxjs/toolkit`

        ```ts
        import cookies from '@/utils/cookie';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { User } from '../../interfaces/auth';
import type { RootState } from '../store';

interface AuthState {
  user: User | null;
  token: string | null;
}

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, bannerInfo: {} } as AuthState,
  reducers: {
    setCredentials: (state, { payload: { token } }: PayloadAction<{ token: string }>) => {
      state.token = token;
    },

    removeCredentials: (state) => {
      state.user = null;
      state.token = null;
      cookies.remove('access_token');
      cookies.remove('refresh_token');
      cookies.remove('reminder');
    },

    updateUserInfo: (state, payload) => {
      state.user = {
        ...state.user,
        ...payload.payload,
      };
    },
    // updateAvatar: (state, payload) => {
    //   state.user = {
    //     ...state.user,
    //     avatar: payload.payload,
    //   };
    // },
  },
});

export const { setCredentials, removeCredentials, updateUserInfo } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

        ### 📄 src/utils/dates.ts
        > **Context Summary**
        * 🔗 **Imports:** `dayjs/plugin/duration, dayjs/plugin/isBetween, dayjs/plugin/localeData, dayjs/plugin/localizedFormat, dayjs/plugin/utc`
* wb **Type/Intf:** `AppDate`

        ```ts
        import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/de';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import localeData from 'dayjs/plugin/localeData';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(LocalizedFormat);
dayjs.extend(localeData);
dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.extend(utc);

export type AppDate = Dayjs;

export class Dates {
  static setLocale(locale: string): void {
    dayjs.locale(locale);
  }

  static getToday(): AppDate {
    return dayjs();
  }

  static getClearDate(): AppDate {
    return this.getToday().hour(0).minute(0).second(0).millisecond(0);
  }

  static getMonths(): string[] {
    return dayjs.months();
  }

  static getDays(): string[] {
    return dayjs.weekdaysShort();
  }

  static getDate(date: number | string): AppDate {
    return dayjs(date);
  }

  static format(date: AppDate | string | number, query: string): string {
    if (typeof date === 'string' || typeof date === 'number') {
      return dayjs(date).format(query);
    } else {
      return date.format(query);
    }
  }
}

        ### 📄 src/utils/common.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-badge, @/components/common/base-notification, @/constants, @/constants, @/interfaces`...

        ```ts
        import { BaseBadgeProps } from '@/components/common/base-badge';
import { NotificationType } from '@/components/common/base-notification';
import { Priority } from '@/constants';
import { currencies } from '@/constants';
import { CurrencyTypeEnum, LEVEL_USER, Severity } from '@/interfaces';
import countryLanguage from '@ladjs/country-language';
import dayjs from 'dayjs';

export const camelize = (string: string): string => {
  return string
    .split(' ')
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
};

export const getCurrencyPrice = (
  price: number | string,
  currency: CurrencyTypeEnum,
  isIcon = true
): string => {
  const currencySymbol = currencies[currency][isIcon ? 'icon' : 'text'];

  return isIcon ? `${currencySymbol}${price}` : `${price} ${currencySymbol}`;
};

type MarkArea = {
  xAxis: number;
};

export const getMarkAreaData = (data: string[] | number[]): MarkArea[][] =>
  data.map((el, index) => [
    {
      xAxis: 2 * index,
    },
    {
      xAxis: 2 * index + 1,
    },
  ]);

export const capitalize = (word: string): string => `${word[0].toUpperCase()}${word.slice(1)}`;

export const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
};

export const getDifference = (value: number, prevValue: number): string | null =>
  prevValue !== 0 ? `${((Math.abs(value - prevValue) / prevValue) * 100).toFixed(0)}%` : '100%';

export const normalizeProp = (prop: string | number | [number, number]): string =>
  typeof prop === 'number'
    ? `${prop}px`
    : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString();

export const defineColorByPriority = (priority: Priority): string => {
  switch (priority) {
    case Priority.INFO:
      return 'var(--primary-color)';
    case Priority.LOW:
      return 'var(--success-color)';
    case Priority.MEDIUM:
      return 'var(--warning-color)';
    case Priority.HIGH:
      return 'var(--error-color)';
    default:
      return 'var(--success-color)';
  }
};

export const defineColorBySeverity = (
  severity: NotificationType | undefined,
  rgb = false
): string => {
  const postfix = rgb ? 'rgb-color' : 'color';
  switch (severity) {
    case 'error':
    case 'warning':
    case 'success':
      return `var(--${severity}-${postfix})`;
    case 'info':
    default:
      return `var(--primary-${postfix})`;
  }
};

export const mergeBy = (a: any[], b: any[], key: string): any[] =>
  a.filter((elem) => !b.find((subElem) => subElem[key] === elem[key])).concat(b);

export const getSmoothRandom = (factor: number, start: number): number => {
  const halfEnvelope = 1 / factor / 2;
  const max = Math.min(1, start + halfEnvelope);
  const min = Math.max(0, start - halfEnvelope);

  return Math.random() * (max - min) + min;
};

export const shadeColor = (color: string, percent: number): string => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString());
  G = parseInt(((G * (100 + percent)) / 100).toString());
  B = parseInt(((B * (100 + percent)) / 100).toString());

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};

export const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    (r /= 255), (g /= 255), (b /= 255);
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    return {
      h,
      s,
      l,
    };
  } else {
    throw new Error('Non valid HEX color');
  }
};

export const formatNumberWithCommas = (value: number): string => {
  const isDecimal = Boolean(Number(value.toString().split('.')[1]));

  if (!isDecimal) {
    const numStr = value?.toString().split('.')[0];
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const numStr = value?.toString().split('.');
  numStr[0] = numStr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numStr.join('.');
};
export const msToH = (ms: number): number => Math.floor(ms / 3600000);

export const hToMS = (h: number): number => h * 3600000;

export const mapBadgeStatus = (status: BaseBadgeProps['status']): Severity => {
  if (!status || status === 'default' || status === 'processing') {
    return 'info';
  }

  return status;
};

export const _renderLevelUser = (level: string) => {
  const upperCaseLevel = level.toUpperCase();

  switch (upperCaseLevel) {
    case LEVEL_USER.BRONZE:
      return { level: LEVEL_USER.BRONZE, count: 1 };
    case LEVEL_USER.SILVER:
      return { level: LEVEL_USER.SILVER, count: 5 };
    default:
      return { level: LEVEL_USER.BRONZE, count: 1 };
  }
};

export const formatCardNumber = (str: string) => {
  if (!str) return '';
  return str.replace(/(\d{4})(?=\d)/g, '$1 ');
};

export const fromLangCodeToCountryCode = (langCode: string) => {
  let countryCode = null;

  try {
    const countries = countryLanguage.getLanguageCountries(langCode);

    switch (langCode) {
      case 'en':
        countryCode = 'GB';
        break;
      case 'zh-CN':
      case 'zh-TW':
      case 'zh':
        countryCode = 'CN';
        break;
      case 'ko':
        countryCode = 'KR';
        break;
      case 'es':
        countryCode = 'ES';
        break;
      default:
        countries?.every((item) => {
          if (
            item.code_2.charAt(0).toLocaleLowerCase() === langCode.charAt(0).toLocaleLowerCase()
          ) {
            countryCode = item.code_2;
            return false;
          } else {
            return true;
          }
        });
        if (countryCode === null && countries?.length) countryCode = countries[0].code_2;
        break;
    }
  } catch (err) {
    countryCode = null;
  }
  return countryCode;
};

export const formatFrame = (rawTime: string) => {
  try {
    const times = rawTime.split('.');
    const timeString = times[0];
    const milisecond = times[1];
    const timeBreaks = timeString.split(':');
    const hours = timeBreaks[0];
    const minutes = timeBreaks[1];
    const sencond = timeBreaks[2];

    const frame = Math.ceil(parseInt(milisecond) * 0.03);
    const frameString = (frame < 10 ? '0' : '') + frame.toString();

    if (hours === '00') {
      return `${minutes}:${sencond}:${frameString}`;
    }
    return `${hours}:${minutes}:${sencond}:${frameString}`;
  } catch (err) {
    return '';
  }
};

export const htmlDecode = (input: string) => {
  try {
    // eslint-disable-next-line no-useless-escape
    const removeBreakLineTag = input?.replace(/<br\s*[\/]?>/gi, '\n') ?? '';
    var doc = new DOMParser().parseFromString(removeBreakLineTag, 'text/html');
    return doc.documentElement.textContent;
  } catch (err) {
    return '';
  }
};

export const checkExpiredDate = (date: string) => {
  return dayjs().isAfter(dayjs(date, 'day'));
};

export const checkDateBeforeExpired = (expire_date: string, day: number) => {
  const currentDate = dayjs();
  const remainingTime = dayjs(expire_date).diff(currentDate, 'second');
  return remainingTime > 0 && remainingTime < day * 24 * 60 * 60;
};

export const checkDateAfterExpired = (expire_date: string, day: number) => {
  const currentDate = dayjs();
  const remainingTime = dayjs(currentDate).diff(expire_date, 'second');
  return remainingTime > 0 && remainingTime < day * 24 * 60 * 60;
};

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

        ### 📄 src/utils/local-storage.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces`

        ```ts
        import { UserModel } from '@/interfaces';

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : null;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');

        ### 📄 src/utils/cookie.ts
        > **Context Summary**
        * 🔗 **Imports:** `js-cookie`

        ```ts
        import Cookies from 'js-cookie';

const cookies = {
  set: (name: string, value: string) => {
    Cookies.set(name, value);
  },
  get: (name: string) => {
    return Cookies.get(name);
  },
  remove: (name: string) => {
    Cookies.remove(name);
  },
};

export default cookies;

        ### 📄 src/utils/index.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        export * from './common';
export * from './local-storage';
export * from './query';
export * from './dates';

        ### 📄 src/utils/query.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/stores/auth/auth.slice, @/stores/store, @/stores/store, @reduxjs/toolkit/query/react`...

        ```ts
        import { RESPONSE_CODE } from '@/constants';
import { removeCredentials } from '@/stores/auth/auth.slice';
import { RootState } from '@/stores/store';
import { store } from '@/stores/store';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import Router from 'next/router';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithAuthentication: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error && result?.error?.status === RESPONSE_CODE.UNAUTHORIZED) {
    store.dispatch(removeCredentials());
    Router.push('/login');
  }

  return result;
};

        ### 📄 src/utils/theme.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        export const capitalize = (word: string): string => `${word[0].toUpperCase()}${word.slice(1)}`;

export const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
};

export const shadeColor = (color: string, percent: number): string => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString());
  G = parseInt(((G * (100 + percent)) / 100).toString());
  B = parseInt(((B * (100 + percent)) / 100).toString());

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};

        ### 📄 src/utils/react-query.ts
        > **Context Summary**
        * 🔗 **Imports:** `@tanstack/react-query`

        ```ts
        import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

        ### 📄 src/styles/theme-global.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants`

        ```ts
        import { FONT_FAMILY } from '@/constants';
import 'react-phone-input-2/lib/style.css';
import * as styled from 'styled-components';

import { resetCss } from './theme-reset';
import { commonThemeVariables, getThemeVariables } from './themes/theme-variables';

export default styled.createGlobalStyle`
  ${resetCss}

  [data-theme='light'],
  :root {
    ${getThemeVariables('light')}
  }

  [data-theme='dark'] {
    ${getThemeVariables('dark')}
  }

  :root {
    ${commonThemeVariables};
  }

  [data-no-transition] * {
    transition: none !important;
  }

  button,
  input {
    font-family: ${FONT_FAMILY.main}, sans-serif;
  }

  a {
    color: var(--primary-color);

    &:hover,
    :active {
      color: var(--ant-primary-5);
    }
  }
`;

        ### 📄 src/styles/theme-config.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/utils`

        ```typescript
        import {
  BASE_COLORS,
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  HEIGHT,
} from '@/constants';
import type { ThemeType } from '@/interfaces';
import { hexToRGB } from '@/utils';
import type { ThemeConfig } from 'antd';

import { antThemeObject, themeObject } from './themes/theme-variables';

const remToPixels = (s: `${number}rem`) => parseFloat(s) * 16;

const parseNumber = (s: `${number}` | `${number}px`) => parseFloat(s);

const fontFamily = `'${FONT_FAMILY.main}', sans-serif`;

const borderRadius = parseNumber(BORDER_RADIUS);

const modalBoxShadow =
  '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)';

export const getThemeConfig = (theme: ThemeType): ThemeConfig => {
  const currentTheme = themeObject[theme];
  const antTheme = antThemeObject[theme];

  const colorFillAlter = `rgba(${hexToRGB(currentTheme.primary)}, 0.05)`;

  const controlOutline = `rgba(${hexToRGB(currentTheme.primary)}, 0.2)`;

  // In some properties CSS variables are not parsed properly.
  return {
    token: {
      colorPrimary: currentTheme.primary,
      colorInfo: currentTheme.primary,
      colorSuccess: currentTheme.success,
      colorError: currentTheme.error,
      colorWarning: currentTheme.warning,
      boxShadow: currentTheme.boxShadow,
      colorTextHeading: currentTheme.heading,
      colorTextDescription: currentTheme.subText,
      colorBgContainer: currentTheme.background,
      colorText: currentTheme.textMain,
      controlItemBgHover: currentTheme.itemHoverBg,
      colorBgBase: currentTheme.backgroundColorBase,
      colorBorder: currentTheme.borderBase,
      colorBgContainerDisabled: currentTheme.disabledBg,
      colorTextDisabled: currentTheme.disable,
      colorBgElevated: currentTheme.background,
      colorFillAlter,
      colorTextPlaceholder: currentTheme.inputPlaceholder,
      colorPrimaryHover: antTheme.primary5,
      ...(theme === 'dark'
        ? {
            colorSuccessBg: antThemeObject[theme].successBg,
            colorSuccessBorder: antThemeObject[theme].successBorder,
          }
        : {}),
      fontFamily,
      fontFamilyCode: fontFamily,
      fontSize: remToPixels(FONT_SIZE.md),
      fontSizeSM: remToPixels(FONT_SIZE.xs),
      controlHeightSM: remToPixels(HEIGHT.xs),
      controlHeight: remToPixels(HEIGHT.md),
      controlHeightLG: remToPixels(HEIGHT.lg),
      borderRadiusXS: borderRadius,
      borderRadiusSM: borderRadius,
      borderRadius,
      borderRadiusLG: borderRadius,
      borderRadiusOuter: borderRadius,
      colorSplit: '#f0f0f0',
      controlOutline,
      controlTmpOutline: controlOutline,
      controlOutlineWidth: 2,
      lineWidthFocus: 0,
      screenXSMin: 0,
      screenXS: BREAKPOINTS.xs,
      screenXSMax: BREAKPOINTS.sm - 1,
      screenSMMin: BREAKPOINTS.sm,
      screenSM: BREAKPOINTS.sm,
      screenSMMax: BREAKPOINTS.md - 1,
      screenMDMin: BREAKPOINTS.md,
      screenMD: BREAKPOINTS.md,
      screenMDMax: BREAKPOINTS.lg - 1,
      screenLGMin: BREAKPOINTS.lg,
      screenLG: BREAKPOINTS.lg,
      screenLGMax: BREAKPOINTS.xl - 1,
      screenXLMin: BREAKPOINTS.xl,
      screenXL: BREAKPOINTS.xl,
      screenXLMax: BREAKPOINTS.xxl - 1,
      screenXXLMin: BREAKPOINTS.xxl,
      screenXXL: BREAKPOINTS.xxl,
    },
    components: {
      Layout: {
        controlHeight: 34,
        controlHeightLG: 12.8,
        colorBgBody: currentTheme.layoutBodyBg,
        colorBgHeader: currentTheme.layoutSiderBg,
      },
      Alert: {
        colorInfoBg: '#dfefff',
        colorText: BASE_COLORS.black,
        colorTextHeading: BASE_COLORS.black,
        marginSM: 15,
        paddingContentVerticalSM: 8,
        paddingMD: 15,
        paddingContentHorizontalLG: 15,
      },
      Card: {
        colorTextHeading: currentTheme.textMain,
        padding: 20,
        paddingLG: 20,
        boxShadowTertiary: currentTheme.boxShadow,
      },
      Tabs: {
        colorPrimaryHover: antTheme.primary5,
        colorPrimary: currentTheme.primary,
        colorPrimaryActive: antTheme.primary7,
        colorTextDisabled: currentTheme.disable,
        colorBorderSecondary: '#f0f0f0',
      },
      Tree: {
        controlHeightSM: remToPixels(HEIGHT.xxs),
        controlInteractiveSize: 16,
      },
      Table: {
        borderRadiusLG: 0,
        colorBorderSecondary: '#b3cbe1',
        colorTextHeading: currentTheme.primary,
        colorFillAlter,
        controlItemBgActive: antTheme.primary1,
        colorSplit: 'rgba(0, 0, 0, 0.15)',
        controlItemBgActiveHover: `rgba(${hexToRGB(currentTheme.primary)}, 0.12)`,
      },
      Checkbox: {
        colorBgContainer: 'transparent',
        colorPrimary: currentTheme.primary,
        colorTextDisabled: currentTheme.disable,
        controlInteractiveSize: 16,
        marginXS: 8,
      },
      Tag: {
        fontSize: remToPixels(FONT_SIZE.xs),
      },
      Select: {
        fontSizeSM: remToPixels(FONT_SIZE.xs),
        colorTextTertiary: currentTheme.icon,
        colorTextQuaternary: currentTheme.textMain, // arrow color
        colorFillSecondary: currentTheme.backgroundColorBase,
        colorIcon: currentTheme.icon,
        colorIconHover: currentTheme.iconHover,
        colorPrimary: currentTheme.primary,
        colorPrimaryHover: antTheme.primary5,
        controlItemBgActive: antTheme.primary1,
        controlItemBgHover: currentTheme.itemHoverBg,
      },
      Steps: {
        wireframe: true,
        iconSize: remToPixels(HEIGHT.xs),
        iconFontSize: remToPixels(FONT_SIZE.lg),
        controlHeight: remToPixels(HEIGHT.md),
        controlHeightSM: remToPixels(HEIGHT.xxs),
        fontSizeHeading3: remToPixels(FONT_SIZE.xxl),
        colorPrimary: currentTheme.primary,
      },
      Spin: {
        controlHeight: remToPixels(HEIGHT.xs),
        controlHeightLG: remToPixels(HEIGHT.sm),
        colorPrimary: currentTheme.primary,
      },
      Skeleton: {
        controlHeightXS: 16,
        controlHeightSM: remToPixels(HEIGHT.xs),
        controlHeight: remToPixels(HEIGHT.md),
        controlHeightLG: remToPixels(HEIGHT.lg),
        gradientFromColor: 'rgba(190, 190, 190, 0.2)',
      },
      Switch: {
        controlHeight: remToPixels(HEIGHT.xs),
        colorPrimary: currentTheme.primary,
        colorWhite: currentTheme.background,
        lineHeight: 1.375,
        colorPrimaryBorder: antTheme.primary1,
        opacityLoading: 0.4,
      },
      Menu: {
        controlHeightLG: remToPixels(HEIGHT.md),
        fontSize: remToPixels(FONT_SIZE.xs),
        colorFillAlter: `rgba(${hexToRGB(antThemeObject['light'].primary6)}, 0.05)`,
        colorBgContainer: 'unset',
        controlItemBgActive: 'unset',
        colorBgTextHover: 'transparent',
        itemSelectedColor: currentTheme.textSiderPrimary,
        colorText: currentTheme.textSiderSecondary,
        colorSplit: 'transparent',
        activeBarWidth: 2,
        marginXXS: 4,
        controlHeightSM: 30,
        itemMarginInline: 0,
      },
      Divider: {
        colorSplit: 'rgba(0, 0, 0, 0.06)',
      },
      Popover: {
        zIndexPopup: 2000,
        wireframe: true,
        controlHeight: 34,
        sizePopupArrow: 20,
      },
      Popconfirm: {
        fontWeightStrong: parseNumber(FONT_WEIGHT.semibold),
        colorPrimary: currentTheme.primary,
      },
      Notification: {
        zIndexPopup: 9999,
        width: 36 * 16,
        paddingMD: 20,
        paddingLG: 20,
        paddingContentHorizontalLG: 2 * 16,
        lineHeightLG: 2,
        colorSuccess: currentTheme.success,
        colorInfo: currentTheme.primary,
        colorWarning: currentTheme.warning,
        colorError: currentTheme.error,
        colorIconHover: 'rgba(0, 0, 0, 0.67)',
        fontSizeLG: remToPixels(FONT_SIZE.xxl),
        marginSM: 0,
        boxShadow: modalBoxShadow,
        controlHeightLG: 15 / 0.55,
        wireframe: true,
      },
      Empty: {
        controlHeightLG: remToPixels(HEIGHT.sm),
      },
      Input: {
        colorTextPlaceholder: currentTheme.inputPlaceholder,
        colorTextDisabled: currentTheme.disable,
        colorPrimaryHover: antTheme.primary5,
        fontWeightStrong: parseNumber(FONT_WEIGHT.semibold),
        colorFillAlter,
        controlOutlineWidth: 0,
      },
      InputNumber: {
        colorPrimary: antTheme.primary5,
      },
      Form: {
        marginLG: 16,
        colorInfoBorderHover: antTheme.primary5,
      },
      Avatar: {
        colorTextPlaceholder: currentTheme.avatarBg,
        colorBorderBg: BASE_COLORS.white,
        controlHeightSM: remToPixels(HEIGHT.xxs),
        controlHeight: remToPixels(HEIGHT.xs),
        controlHeightLG: remToPixels(HEIGHT.sm),
      },
      Badge: {
        colorPrimary: currentTheme.primary,
        colorTextPlaceholder: '#d9d9d9',
        fontSizeSM: remToPixels(FONT_SIZE.xxs),
      },
      Button: {
        colorPrimary: currentTheme.primary,
        colorLinkHover: antTheme.primary5,
        controlOutlineWidth: 0,
      },
      Breadcrumb: {
        fontSizeIcon: 10,
        colorTextDescription: currentTheme.breadcrumb,
      },
      Rate: {
        starColor: '#ffc24b',
        colorFillContent: '#f0f0f0',
      },
      Radio: {
        colorPrimary: currentTheme.primary,
        wireframe: true,
        controlItemBgActiveDisabled: '#e6e6e6',
      },
      Result: {
        fontSizeHeading3: remToPixels(FONT_SIZE.xxl),
        lineHeightHeading3: 1.8,
      },
      Pagination: {
        wireframe: true,
        colorPrimary: currentTheme.primary,
        controlItemBgActiveDisabled: '#e6e6e6',
        itemSizeSM: 24,
        controlHeightLG: remToPixels(HEIGHT.sm),
      },
      Slider: {
        colorPrimaryBorder: antTheme.primary3,
        colorPrimary: antTheme.primary4,
        colorPrimaryBorderHover: antTheme.primary4,
        colorFillSecondary: '#e1e1e1',
        colorBorderSecondary: '#e1e1e1',
        colorFillContentHover: '#e1e1e1',
        colorFillTertiary: currentTheme.backgroundColorBase,
        handleSize: 11,
        handleSizeHover: 11,
        handleLineWidth: 2,
        handleLineWidthHover: 2,
        colorTextDisabled: currentTheme.disable,
      },
      Calendar: {
        controlHeightSM: remToPixels(HEIGHT.xs) / 1.5,
      },
      Modal: {
        colorTextDescription: currentTheme.icon,
        colorIcon: currentTheme.icon,
        boxShadow: modalBoxShadow,
        wireframe: true,
        lineHeight: 1.57,
      },
      Progress: {
        marginXS: 0,
        colorFillSecondary: currentTheme.backgroundColorBase,
      },
      DatePicker: {
        colorIcon: currentTheme.textLight,
        colorTextDisabled: currentTheme.textLight,
        colorPrimary: '#1c68a6',
        controlItemBgActive: antTheme.primary1,
        colorTextPlaceholder: currentTheme.inputPlaceholder,
        fontWeightStrong: parseNumber(FONT_WEIGHT.medium),
        controlHeightSM: remToPixels(HEIGHT.xxs),
        controlHeightLG: remToPixels(HEIGHT.sm),
        padding: 13,
        paddingXXS: 2,
      },
      Dropdown: {
        paddingXXS: 0,
        fontSizeIcon: 10,
        controlHeight: 34,
      },
      Upload: {
        colorFillAlter,
        colorPrimaryHover: antTheme.primary5,
      },
    },
  };
};

        ### 📄 src/styles/theme-reset.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import { css } from 'styled-components';

export const resetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll-color);
    border-radius: 1.25rem;
    border: 0.375rem solid transparent;
    background-clip: content-box;
  }

  body {
    font-weight: 500;
  }

  img {
    display: block;
  }
`;

        ### 📄 src/styles/themes/theme-variables.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/interfaces, @/utils, styled-components`

        ```ts
        import { BASE_COLORS } from '@/constants';
import { ThemeType } from '@/interfaces';
import { hexToRGB } from '@/utils';
import { css } from 'styled-components';

import { antDarkColorsTheme, darkColorsTheme } from './dark';
import { antLightColorsTheme, lightColorsTheme } from './light';

export const themeObject = {
  light: lightColorsTheme,
  dark: darkColorsTheme,
};

export const antThemeObject = {
  light: antLightColorsTheme,
  dark: antDarkColorsTheme,
};

export const getThemeVariables = (theme: ThemeType) => css`
  color-scheme: ${theme};
  --primary-color: ${themeObject[theme].primary};
  --primary1-color: ${themeObject[theme].primary1};
  --primary-gradient-color: ${themeObject[theme].primaryGradient};
  --info-color: var(--primary-color);
  --secondary-color: ${themeObject[theme].secondary};
  --error-color: ${themeObject[theme].error};
  --warning-color: ${themeObject[theme].warning};
  --success-color: ${themeObject[theme].success};
  --background-color: ${themeObject[theme].background};
  --secondary-background-color: ${themeObject[theme].secondaryBackground};
  --secondary-background-selected-color: ${themeObject[theme].secondaryBackgroundSelected};
  --additional-background-color: ${themeObject[theme].additionalBackground};
  --collapse-background-color: ${themeObject[theme].collapseBackground};
  --timeline-background-color: ${themeObject[theme].timelineBackground};
  --spinner-base-color: ${themeObject[theme].spinnerBase};
  --sider-background-color: ${themeObject[theme].siderBackground};
  --shadow-color: ${themeObject[theme].shadow};
  --border-color: ${themeObject[theme].border};
  --border-nft-color: ${themeObject[theme].borderNft};
  --scroll-color: ${themeObject[theme].scroll};

  --primary-rgb-color: ${hexToRGB(themeObject[theme].primary)};
  --info-rgb-color: ${hexToRGB(themeObject[theme].primary)};
  --secondary-rgb-color: ${hexToRGB(themeObject[theme].secondary)};
  --error-rgb-color: ${hexToRGB(themeObject[theme].error)};
  --warning-rgb-color: ${hexToRGB(themeObject[theme].warning)};
  --success-rgb-color: ${hexToRGB(themeObject[theme].success)};
  --background-rgb-color: ${hexToRGB(themeObject[theme].background)};

  --text-main-color: ${themeObject[theme].textMain};
  --text-light-color: ${themeObject[theme].textLight};
  --text-superLight-color: ${themeObject[theme].textSuperLight};
  --text-secondary-color: ${themeObject[theme].textSecondary};
  --text-dark-color: ${themeObject[theme].textDark};
  --text-nft-light-color: ${themeObject[theme].textNftLight};
  --text-sider-primary-color: ${themeObject[theme].textSiderPrimary};
  --text-sider-secondary-color: ${themeObject[theme].textSiderSecondary};
  --subtext-color: ${themeObject[theme].subText};

  --dashboard-map-background-color: ${themeObject[theme].dashboardMapBackground};
  --dashboard-map-circle-color: ${themeObject[theme].dashboardMapCircleColor};
  --dashboard-map-control-disabled-background-color: ${themeObject[theme]
    .dashboardMapControlDisabledBackground};

  --notification-success-color: ${themeObject[theme].notificationSuccess};
  --notification-primary-color: ${themeObject[theme].notificationPrimary};
  --notification-warning-color: ${themeObject[theme].notificationWarning};
  --notification-error-color: ${themeObject[theme].notificationError};

  --icon-color: ${themeObject[theme].icon};
  --icon-hover-color: ${themeObject[theme].iconHover};
  --box-shadow: ${themeObject[theme].boxShadow};
  --box-shadow-hover: ${themeObject[theme].boxShadowHover};
  --box-shadow-nft-color: ${themeObject[theme].boxShadowNft};
  --box-shadow-nft-secondary-color: ${themeObject[theme].boxShadowNftSecondary};

  --heading-color: ${themeObject[theme].heading};
  --item-hover-bg: ${themeObject[theme].itemHoverBg};
  --background-base-color: ${themeObject[theme].backgroundColorBase};
  --border-base-color: ${themeObject[theme].borderBase};
  --disabled-color: ${themeObject[theme].disable};
  --disabled-bg-color: ${themeObject[theme].disabledBg};
  --layout-body-bg-color: ${themeObject[theme].layoutBodyBg};
  --layout-header-bg-color: ${themeObject[theme].layoutHeaderBg};
  --layout-sider-bg-color: ${themeObject[theme].layoutSiderBg};
  --input-placeholder-color: ${themeObject[theme].inputPlaceholder};
  --avatar-bg: ${themeObject[theme].avatarBg};
  --alert-text-color: ${themeObject[theme].alertTextColor};
  --breadcrumb-color: ${themeObject[theme].breadcrumb};

  --ant-primary-1: ${antThemeObject[theme].primary1};
  --ant-primary-2: ${antThemeObject[theme].primary2};
  --ant-primary-3: ${antThemeObject[theme].primary3};
  --ant-primary-4: ${antThemeObject[theme].primary4};
  --ant-primary-5: ${antThemeObject[theme].primary5};
  --ant-primary-6: ${antThemeObject[theme].primary6};
  --ant-primary-7: ${antThemeObject[theme].primary7};
  --ant-primary-8: ${antThemeObject[theme].primary8};
  --ant-primary-9: ${antThemeObject[theme].primary9};
  --ant-primary-10: ${antThemeObject[theme].primary10};
`;

export const commonThemeVariables = css`
  color-scheme: light dark;
  --white: ${BASE_COLORS.white};
  --black: ${BASE_COLORS.black};
  --green: ${BASE_COLORS.green};
  --orange: ${BASE_COLORS.orange};
  --gray: ${BASE_COLORS.gray};
  --lightgrey: ${BASE_COLORS.lightgrey};
  --violet: ${BASE_COLORS.violet};
  --lightgreen: ${BASE_COLORS.lightgreen};
  --pink: ${BASE_COLORS.pink};
  --blue: ${BASE_COLORS.blue};
  --skyblue: ${BASE_COLORS.skyblue};
  --red: ${BASE_COLORS.red};
`;

        ### 📄 src/styles/themes/light/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/utils`

        ```ts
        import { BASE_COLORS } from '@/constants';
import { shadeColor } from '@/utils';

export const lightColorsTheme = {
  primary: '#01509A',
  primary1: '#f5f5f5',
  primaryGradient: 'linear-gradient(211.49deg, #006CCF 15.89%, #00509A 48.97%)',
  light: '#C5D3E0',
  secondary: '#0085FF',
  error: '#FF5252',
  warning: '#FFB155',
  success: '#30AF5B',
  background: BASE_COLORS.white,
  secondaryBackground: '#F8FBFF',
  secondaryBackgroundSelected: shadeColor('#F8FBFF', -5),
  additionalBackground: '#ffffff',
  collapseBackground: 'rgb(0, 108, 207)',
  timelineBackground: '#F8FBFF',
  siderBackground: '#ffffff',
  spinnerBase: '#f42f25',
  scroll: '#c5d3e0',
  border: '#cce1f4',
  borderNft: '#79819A',
  textMain: '#404040',
  textLight: '#9A9B9F',
  textSuperLight: '#BEC0C6',
  textSecondary: BASE_COLORS.white,
  textDark: '#404040',
  textNftLight: '#79819A',
  textSiderPrimary: '#FFB765',
  textSiderSecondary: '#ffffff',
  subText: 'rgba(0, 0, 0, 0.45)',
  shadow: 'rgba(0, 0, 0, 0.07)',
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
  boxShadowHover: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
  boxShadowNft:
    '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  boxShadowNftSecondary:
    '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  dashboardMapBackground: '#EAF5FF',
  dashboardMapCircleColor: '#9BC2E7',
  dashboardMapControlDisabledBackground: '#c5d3e0',
  notificationSuccess: '#EFFFF4',
  notificationPrimary: '#D7EBFF',
  notificationWarning: '#FFF4E7',
  notificationError: '#FFE2E2',
  heading: '#13264d',
  borderBase: '#bec0c6',
  disable: 'rgba(0, 0, 0, 0.25)',
  disabledBg: '#c5d3e0',
  layoutBodyBg: '#f8fbff',
  layoutHeaderBg: 'transparent',
  layoutSiderBg: 'linear-gradient(261.31deg, #006ccf -29.57%, #00509a 121.11%)',
  inputPlaceholder: '#cccccc',
  itemHoverBg: '#f5f5f5',
  backgroundColorBase: '#F5F5F5',
  avatarBg: '#ccc',
  alertTextColor: BASE_COLORS.white,
  breadcrumb: 'rgba(0, 0, 0, 0.45)',
  icon: '#a9a9a9',
  iconHover: 'rgba(0, 0, 0, 0.75)',
};

export const antLightColorsTheme = {
  primary1: lightColorsTheme.primary1,
  primary2: '#85b3cc',
  primary3: '#5e9abf',
  primary4: '#3b81b3',
  primary5: '#01509A',
  primary6: '#01509a',
  primary7: '#003773',
  primary8: '#00224d',
  primary9: '#001026',
  primary10: '#000000',
};

        ### 📄 src/styles/themes/dark/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/utils`

        ```ts
        import { BASE_COLORS } from '@/constants';
import { shadeColor } from '@/utils';

export const darkColorsTheme = {
  primary: '#339CFD',
  primary1: '#7568f6',
  primaryGradient: 'linear-gradient(211.49deg, #dc88f5 15.89%, #339CFD 48.97%)',
  light: '#696969',
  secondary: '#0072DD',
  error: '#FF5252',
  warning: '#FFB765',
  success: '#57D682',
  background: '#25284B',
  secondaryBackground: '#1c2137',
  secondaryBackgroundSelected: shadeColor('#1c2137', -5),
  additionalBackground: '#1D203E',
  collapseBackground: '#1D203E',
  timelineBackground: '#f5f5f5',
  siderBackground: '#121430',
  spinnerBase: '#339CFD',
  scroll: '#797C9A',
  border: '#ffffff',
  borderNft: '#797C9A',
  textMain: '#ffffff',
  textLight: '#9A9B9F',
  textSuperLight: '#444',
  textSecondary: '#ffffff',
  textDark: '#404040',
  textNftLight: '#797C9A',
  textSiderPrimary: '#339CFD',
  textSiderSecondary: '#797C9A',
  subText: '#a9a9a9',
  shadow: 'rgba(0, 0, 0, 0.07)',
  boxShadow: 'none',
  boxShadowHover: 'none',
  boxShadowNft:
    '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  boxShadowNftSecondary:
    '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  dashboardMapBackground: '#25284b',
  dashboardMapCircleColor: '#ACAEC1',
  dashboardMapControlDisabledBackground: '#7e7e7e',
  notificationSuccess: '#EFFFF4',
  notificationPrimary: '#D7EBFF',
  notificationWarning: '#FFF4E7',
  notificationError: '#FFE2E2',
  heading: BASE_COLORS.white,
  borderBase: '#a9a9a9',
  disable: '#7e7e7e',
  disabledBg: '#1c2137',
  layoutBodyBg: '#1e2142',
  layoutHeaderBg: '#1e2142',
  layoutSiderBg: '#121430',
  inputPlaceholder: 'rgba(255, 255, 255, 0.5)',
  itemHoverBg: '#1c2137',
  backgroundColorBase: '#1c2137',
  avatarBg: '#1c2137',
  alertTextColor: '#000',
  breadcrumb: '#a9a9a9',
  icon: '#a9a9a9',
  iconHover: '#ffffff',
};

export const antDarkColorsTheme = {
  primary1: darkColorsTheme.primary1,
  primary2: '#d6f1ff',
  primary3: '#ade0ff',
  primary4: '#85ccff',
  primary5: '#5cb6ff',
  primary6: '#339cfd',
  primary7: '#2078d6',
  primary8: '#1259b0',
  primary9: '#073d8a',
  primary10: '#042963',
  successBg: '#e6fff2',
  successBorder: '#79fcc4',
};

        ### 📄 src/components/language-switcher/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/country/icon-korea.svg, @/assets/images/svg/country/icon-usa.svg, @/components/common/base-dropdown, @/utils/cookie, antd`...
* 🧩 **Component (Default):** `LanguageSwitcher`
* ww **Hooks:** `useEffect, useState, useRouter`

        ```typescript
        import IconKorea from '@/assets/images/svg/country/icon-korea.svg';
import IconUSA from '@/assets/images/svg/country/icon-usa.svg';
import { BaseDropdown } from '@/components/common/base-dropdown';
import cookies from '@/utils/cookie';
import { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import * as S from './index.styles';

const languages: MenuProps['items'] = [
  {
    label: 'English',
    key: 'en',
    icon: <IconUSA />,
  },
  {
    label: '한국어',
    key: 'ko',
    icon: <IconKorea />,
  },
];

export default function LanguageSwitcher() {
  const { push, pathname, asPath, query, locale } = useRouter();

  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (locale) {
      cookies.set('locale', locale);
      setLang(locale);
    }
  }, [locale]);

  return (
    <>
      <BaseDropdown
        overlayClassName="countrys"
        menu={{
          items: languages,
          onClick: async ({ key }) => {
            setLang(key);
            cookies.set('locale', key);

            await push(
              {
                pathname: pathname,
                query: query,
              },
              asPath,
              { locale: key }
            );
          },
        }}
        placement="bottomRight"
        trigger={['click']}
      >
        <S.Country onClick={(e) => e.preventDefault()}>
          {lang === 'en' ? <IconUSA /> : <IconKorea />}
        </S.Country>
      </BaseDropdown>
    </>
  );
}

        ### 📄 src/components/language-switcher/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
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

        ### 📄 src/components/cloud-software/index.utils.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/hooks/features/useYoutubeAccount, @/interfaces, @/interfaces/cloud-software, @tanstack/react-query`
* 🧩 **Component (Default):** `useYoutubeAccount`
* ww **Hooks:** `useDeleteYoutubeMutate, useGetListYoutube, useRefreshTotalVideo, useYoutubeAccount, useConnectYoutube`

        ```ts
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

        ### 📄 src/components/cloud-software/translator/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-arrow-left.svg, @/assets/images/svg/icon-arrow-right.svg, @/assets/images/translator/no-video.png, @/components/common/base-image, @/components/common/step-switch`...
* ww **Hooks:** `useTranslateVideo, useTranslation, useContext`

        ```typescript
        import IconArrowLeft from '@/assets/images/svg/icon-arrow-left.svg';
import IconArrowRight from '@/assets/images/svg/icon-arrow-right.svg';
import NoVideo from '@/assets/images/translator/no-video.png';
import { BaseImage } from '@/components/common/base-image';
import { StepSwitch } from '@/components/common/step-switch';
import ModalFinishUpdate from '@/components/modals/modal-finish-update';
import ModalLoading from '@/components/modals/modal-loading';
import { DATE_FORMAT, STEP_TRANSLATE } from '@/constants';
import { ITranslateVideo } from '@/interfaces/cloud-software';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { createContext, useContext } from 'react';

import CurrentPlan from '../youtube-account/current-plan';
import ExcludeTranslation from './components/exclude-translation';
import ReviewTranslation from './components/review-translation';
import SelectLanguage from './components/select-language';
import SelectVideo from './components/select-video';
import * as S from './index.styles';
import useTranslateVideo from './index.utils';

interface ITranslator {
  listVideoTranslated: ITranslateVideo[];
  setListVideoTranslated: React.Dispatch<React.SetStateAction<ITranslateVideo[]>>;
}

const TranslatorContext = createContext<ITranslator | null>(null);

export const useTranslator = () => useContext(TranslatorContext) as ITranslator;

const TranslatorComponent = () => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const {
    steps,
    current,
    prev,
    next,
    dataTable,
    totalResults,
    listOptionsAccount,
    accountSelected,
    videoSelected,
    handleGetListVideo,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleChangeVideo,
    defaultLanguage,
    listOptionsLanguage,
    listOptionsYoutubeLanguage,
    originalLanguageSelected,
    translationLanguageSelected,
    originalLanguageError,
    translationLanguageError,
    setOriginalLanguageSelected,
    setTranslationLanguageSelected,
    setOriginalLanguageError,
    setTranslationLanguageError,
    refetchListLanguage,
    refetchDetailVideo,
    refetchVideoHistory,
    refetchListYoutubeLanguage,
    defaultTitle,
    defaultDescription,
    excludeTitle,
    excludeDescription,
    titleError,
    setExcludeTitle,
    setExcludeDescription,
    setDefaultTitle,
    setDefaultDescription,
    setTitleError,
    loadingTranslate,
    listTranslationLanguage,
    listVideoTranslated,
    listTranslationLanguageError,
    setListVideoTranslated,
    loadingPublishVideo,
    openModalFinish,
    handleToggleModalFinish,
    disabledNextBtn,
    disabledPublishBtn,
    handlePublish,
    handleRestoreTranslation,
    handleLoadMoreAccount,
  } = useTranslateVideo();

  const renderStep = () => {
    switch (current) {
      case STEP_TRANSLATE.STEP_1:
        return (
          <SelectVideo
            dataTable={dataTable}
            totalResults={totalResults}
            listOptionsAccount={listOptionsAccount}
            accountSelected={accountSelected}
            videoSelected={videoSelected}
            handleChangeAccount={handleChangeAccount}
            handleRefreshVideo={handleRefreshVideo}
            handleParamsChange={handleParamsChange}
            handleGetListVideo={handleGetListVideo}
            handleChangeVideo={handleChangeVideo}
            handleLoadMoreAccount={handleLoadMoreAccount}
          />
        );

      case STEP_TRANSLATE.STEP_2:
        return (
          <SelectLanguage
            accountSelected={accountSelected}
            videoSelected={videoSelected}
            defaultLanguage={defaultLanguage}
            listOptionsLanguage={listOptionsLanguage}
            listOptionsYoutubeLanguage={listOptionsYoutubeLanguage}
            originalLanguageSelected={originalLanguageSelected}
            translationLanguageSelected={translationLanguageSelected}
            originalLanguageError={originalLanguageError}
            translationLanguageError={translationLanguageError}
            setOriginalLanguageSelected={setOriginalLanguageSelected}
            setTranslationLanguageSelected={setTranslationLanguageSelected}
            setOriginalLanguageError={setOriginalLanguageError}
            setTranslationLanguageError={setTranslationLanguageError}
            refetchListLanguage={refetchListLanguage}
            refetchDetailVideo={refetchDetailVideo}
            refetchVideoHistory={refetchVideoHistory}
            refetchListYoutubeLanguage={refetchListYoutubeLanguage}
          />
        );

      case STEP_TRANSLATE.STEP_3:
        return (
          <ExcludeTranslation
            defaultTitle={defaultTitle}
            defaultDescription={defaultDescription}
            excludeTitle={excludeTitle}
            excludeDescription={excludeDescription}
            titleError={titleError}
            setExcludeTitle={setExcludeTitle}
            setExcludeDescription={setExcludeDescription}
            setDefaultTitle={setDefaultTitle}
            setDefaultDescription={setDefaultDescription}
            setTitleError={setTitleError}
          />
        );

      case STEP_TRANSLATE.STEP_4:
        return (
          <ReviewTranslation
            loadingTranslate={loadingTranslate}
            translationLanguageSelected={translationLanguageSelected}
            listOptionsLanguage={listOptionsLanguage}
            listTranslationLanguage={listTranslationLanguage}
            listTranslationLanguageError={listTranslationLanguageError}
            handleRestoreTranslation={handleRestoreTranslation}
          />
        );

      default:
        break;
    }
  };

  return (
    <TranslatorContext.Provider value={{ listVideoTranslated, setListVideoTranslated }}>
      <S.ContainerTitle>
        <S.ContainerTitleLeft>
          <S.Title>{t('translator.translator')}</S.Title>
          <S.SubTitle>{t('translator.translateVideos')}</S.SubTitle>
        </S.ContainerTitleLeft>
        <CurrentPlan />
      </S.ContainerTitle>

      <StepSwitch steps={steps} current={current} />

      <S.ButtonWrapper>
        <S.StepButton type="primary" disabled={current === STEP_TRANSLATE.STEP_1} onClick={prev}>
          <IconArrowLeft />
          {t('translator.previous')}
        </S.StepButton>

        <S.SelectedVideo>
          <S.ImageWrapper>
            <BaseImage
              width={120}
              height={90}
              src={videoSelected ? videoSelected.picture : NoVideo.src}
              alt=""
              preview={false}
            />
          </S.ImageWrapper>
          <div>
            <S.SelectedTitle>
              {videoSelected ? (
                <Link href={`https://youtu.be/${videoSelected.id}`} target="_blank">
                  {videoSelected.title}
                </Link>
              ) : (
                t('translator.noVideo')
              )}
            </S.SelectedTitle>
            {videoSelected && (
              <S.SelectedDate>
                {dayjs(videoSelected.date).format(DATE_FORMAT.DAY_MONTH_YEAR)}
              </S.SelectedDate>
            )}
            <S.SelectedDesc>
              {videoSelected ? videoSelected.description : t('translator.selectVideoInlist')}
            </S.SelectedDesc>
          </div>
        </S.SelectedVideo>

        {current < steps.length - 1 && (
          <S.StepButton type="primary" onClick={next} disabled={disabledNextBtn}>
            {t('translator.nextStep')}
            <IconArrowRight />
          </S.StepButton>
        )}
        {current === steps.length - 1 && (
          <S.PublishButton type="primary" onClick={handlePublish} disabled={disabledPublishBtn}>
            {t('translator.publish')}
            <IconArrowRight />
          </S.PublishButton>
        )}
      </S.ButtonWrapper>

      <div>{renderStep()}</div>

      <ModalLoading
        isOpen={loadingPublishVideo}
        title={t('translator.publishingVideos')}
        desc={t('translator.waitingDesc')}
      />

      <ModalFinishUpdate
        isOpen={openModalFinish}
        onClose={handleToggleModalFinish}
        text={t('translator.finishedUpdatingVideo')}
        subText={{
          start: t('translator.finish-updating-modal.translator.subtext-start'),
          hightlight: t('translator.finish-updating-modal.translator.subtext-highlight'),
          continue: t('translator.finish-updating-modal.translator.subtext-continue'),
          second: t('translator.finish-updating-modal.translator.subtext-second'),
        }}
        videoId={videoSelected?.id}
      />
    </TranslatorContext.Provider>
  );
};

export default TranslatorComponent;

        ### 📄 src/components/cloud-software/translator/index.utils.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/cloud-software/youtube-accounts, @/constants, @/hooks/features/useTranslate, @/hooks/features/useYoutubeAccount, @/hooks/useFeedback`...
* ww **Hooks:** `useEffect, useTranslateText, useGetListLanguage, useTranslation, useGetListYoutubeLanguage, useState, useRefreshVideosMutate`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { videosYoutube } from '@/api/cloud-software/youtube-accounts';
import { NUMBER_CHARACTERS, STEP_TRANSLATE } from '@/constants';
import {
  useGetListLanguage,
  useGetListYoutubeLanguage,
  useTranslateText,
} from '@/hooks/features/useTranslate';
import {
  useGetDetailVideoYoutube,
  useGetVideoHistory,
  usePublishVideoMutate,
  useRefreshVideosMutate,
} from '@/hooks/features/useYoutubeAccount';
import { useFeedback } from '@/hooks/useFeedback';
import { usePagination } from '@/hooks/usePagination';
import {
  IListYoutubeAccount,
  ILocalizations,
  ITranslateVideo,
  IVideoYoutube,
} from '@/interfaces/cloud-software';
import { useAppDispatch } from '@/stores/hooks';
import { setIsProgress } from '@/stores/progress/progress.slice';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

import useYoutubeAccount from '../index.utils';

const useTranslateVideo = () => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const { notification } = useFeedback();

  const pagination = usePagination();

  const { loadingListYoutube, dataPagination, refetchListYoutube } = useYoutubeAccount(
    pagination.params,
    false
  );

  const [dataListYoutube, setDataListYoutube] = useState<IListYoutubeAccount[]>([]);

  useEffect(() => {
    (async () => {
      const data = await refetchListYoutube();
      if (data?.data?.data.entities) {
        const listAccount = [...dataListYoutube, ...data.data.data.entities];
        const sortData = listAccount.sort((a, b) => {
          return a.name_channel?.toLowerCase() > b.name_channel?.toLowerCase() ? 1 : -1;
        });
        setDataListYoutube(sortData);
      }
    })();
  }, [pagination.currentPage]);

  const handleLoadMoreAccount = () => {
    const total = dataPagination?.total ?? 0;
    const hasMore = dataListYoutube.length > 0 && dataListYoutube.length < total;
    if (!loadingListYoutube && hasMore) {
      pagination.onChange(pagination.currentPage + 1);
    }
  };

  const translateText = useTranslateText();
  const publishVideo = usePublishVideoMutate();

  const loadingTranslate = translateText.isPending;
  const loadingPublishVideo = publishVideo.isPending;

  const steps = [
    {
      key: STEP_TRANSLATE.STEP_1,
      title: t('translator.selectVideo'),
    },
    {
      key: STEP_TRANSLATE.STEP_2,
      title: t('translator.languages'),
    },
    {
      key: STEP_TRANSLATE.STEP_3,
      title: t('translator.customize'),
    },
    {
      key: STEP_TRANSLATE.STEP_4,
      title: t('translator.reviewAndPublish'),
    },
  ];

  const [current, setCurrent] = useState(STEP_TRANSLATE.STEP_1);
  const [videoSelected, setVideoSelected] = useState<any>(null);
  const [accountSelected, setAccountSelected] = useState<string>('');
  const [dataTable, setDataTable] = useState<IVideoYoutube[]>([]);
  const [pageToken, setPageToken] = useState<string>('');
  const [totalResults, setTotalResults] = useState<number>(0);
  const [originalLanguageSelected, setOriginalLanguageSelected] = useState<string | null>(null);
  const [translationLanguageSelected, setTranslationLanguageSelected] = useState<string[]>([]);
  const [excludeTitle, setExcludeTitle] = useState<string[]>([]);
  const [excludeDescription, setExcludeDescription] = useState<string[]>([]);
  const [listVideoTranslated, setListVideoTranslated] = useState<ITranslateVideo[]>([]);
  const [openModalFinish, setOpenModalFinish] = useState<boolean>(false);
  const [originalLanguageError, setOriginalLanguageError] = useState<string>('');
  const [translationLanguageError, setTranslationLanguageError] = useState<string>('');
  const [defaultTitle, setDefaultTitle] = useState<string>('');
  const [defaultDescription, setDefaultDescription] = useState<string>('');
  const [titleError, setTitleError] = useState<string>('');
  const [searchParams, setSearchParams] = useState<string>('');
  const [refreshVideo, setRefreshVideo] = useState<boolean>(false);
  const [listTranslationLanguage, setListTranslationLanguage] = useState<string[]>([]);
  const [listTranslationLanguageError, setListTranslationLanguageError] = useState<string[]>([]);
  const videoIdRef = useRef<string>('');
  const titleRef = useRef<string>('');
  const descriptionRef = useRef<string>('');
  const excludeTitleRef = useRef<string[]>([]);
  const excludeDescriptionRef = useRef<string[]>([]);
  const listVideoTranslatedRef = useRef<ITranslateVideo[]>([]);
  const dispatch = useAppDispatch();

  const {
    data: dataListLanguage,
    refetch: refetchListLanguage,
    isFetching: loadingListLanguage,
  } = useGetListLanguage(
    {
      youtube_account_id: Number(accountSelected),
    },
    false
  );

  const {
    data: dataListYoutubeLanguage,
    refetch: refetchListYoutubeLanguage,
    isFetching: loadingListYoutubeLanguage,
  } = useGetListYoutubeLanguage(
    {
      youtube_account_id: Number(accountSelected),
    },
    false
  );

  const listOptionsAccount = dataListYoutube
    ? dataListYoutube.map((item) => {
        return {
          value: item.id.toString(),
          label: item.name_channel,
        };
      })
    : [];

  const listOptionsLanguage = dataListLanguage?.data
    ? dataListLanguage.data.map((item) => {
        return {
          value: item.code,
          label: item.name,
        };
      })
    : [];

  const listOptionsYoutubeLanguage = dataListYoutubeLanguage?.data?.items
    ? dataListYoutubeLanguage?.data?.items?.map((item) => {
        return {
          value: item.id,
          label: item.snippet.name,
        };
      })
    : [];

  useEffect(() => {
    if (listOptionsAccount && !accountSelected) {
      setAccountSelected(listOptionsAccount[0]?.value ?? '');
    }
  }, [listOptionsAccount, accountSelected]);

  useEffect(() => {
    dispatch(setIsProgress(!!videoSelected));
  }, [videoSelected, setIsProgress]);

  const refreshVideoMutate = useRefreshVideosMutate();

  const handleGetListVideo = async () => {
    if (!accountSelected) return;

    try {
      let params: any = {
        youtube_account_id: Number(accountSelected),
      };

      if (pageToken) {
        params = {
          youtube_account_id: Number(accountSelected),
          page_token: pageToken,
        };
      }

      if (searchParams) {
        params = {
          youtube_account_id: Number(accountSelected),
          page_token: pageToken,
          text: searchParams,
        };
      }

      const dataListVideo = await videosYoutube(params);

      const nextPageToken = dataListVideo?.data?.nextPageToken ?? '';
      const totalResults = dataListVideo?.data?.pageInfo?.totalResults ?? 0;
      setPageToken(nextPageToken);
      setTotalResults(totalResults);

      setDataTable([...dataTable, ...dataListVideo.data.items]);
    } catch (error: any) {
      if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
      notification.error({ message: error.data.message });
    }
  };

  const handleChangeAccount = (value: string) => {
    setAccountSelected(value);
    setVideoSelected(null);
    setDataTable([]);
    setPageToken('');
  };

  const handleRefreshVideo = () => {
    const payload = { youtube_account_id: Number(accountSelected) };

    refreshVideoMutate.mutate(payload, {
      onSuccess() {
        setVideoSelected(null);
        setDataTable([]);
        setPageToken('');
        setRefreshVideo((prev) => !prev);
      },
    });
  };

  const handleParamsChange = (value: string) => {
    setSearchParams(value);
    setVideoSelected(null);
    setDataTable([]);
    setPageToken('');
  };

  useEffect(() => {
    handleGetListVideo();
  }, [accountSelected, searchParams, refreshVideo]);

  const {
    data: detailVideo,
    refetch: refetchDetailVideo,
    isFetching: loadingDetailVideo,
  } = useGetDetailVideoYoutube(
    {
      youtube_account_id: Number(accountSelected),
      video_id: videoSelected?.id,
    },
    false
  );

  const {
    data: videoHistory,
    refetch: refetchVideoHistory,
    isFetching: loadingVideoHistory,
  } = useGetVideoHistory(
    {
      youtube_account_id: Number(accountSelected),
      video_id: videoSelected?.id,
    },
    false
  );

  const categoryId = detailVideo?.data?.snippet?.categoryId ?? '';
  const defaultLanguage = detailVideo?.data?.snippet?.defaultLanguage ?? 'en';
  const defaultLocalized = detailVideo?.data?.snippet?.localized;

  useEffect(() => {
    if (!defaultLanguage) return;
    setOriginalLanguageSelected(defaultLanguage);
  }, [defaultLanguage, videoSelected]);

  useEffect(() => {
    if (!defaultLocalized && !videoSelected) return;
    setDefaultTitle(videoSelected?.title || defaultLocalized?.title);
    setDefaultDescription(videoSelected?.description || defaultLocalized?.description);
  }, [defaultLocalized, videoSelected]);

  useEffect(() => {
    if (videoSelected && videoSelected.translated && videoHistory?.data) {
      const translateLocalizations: ILocalizations[] = JSON.parse(
        videoHistory?.data?.localizations
      );
      const defaultLanguage = videoHistory?.data?.default_lang;
      const excludeTitle = JSON.parse(videoHistory?.data?.exclude_title) ?? [];
      const excludeDescription = JSON.parse(videoHistory?.data?.exclude_description) ?? [];

      const findDefaultLocalized = translateLocalizations.find(
        (item) => item.lang === defaultLanguage
      );

      const filterLocalizations = translateLocalizations.filter(
        (item) => item.lang !== defaultLanguage
      );
      const translationLanguageSelected = filterLocalizations.map((item) => item.lang);

      const listVideo = filterLocalizations.map((item) => {
        return {
          title: item.title,
          description: item.description,
          language: item.lang,
        };
      });

      setTranslationLanguageSelected(translationLanguageSelected);
      setExcludeTitle(excludeTitle);
      setExcludeDescription(excludeDescription);
      setListVideoTranslated(listVideo);
      videoIdRef.current = videoSelected.id;
      titleRef.current = videoSelected?.title || findDefaultLocalized?.title;
      descriptionRef.current = videoSelected?.description || findDefaultLocalized?.description;
      excludeTitleRef.current = excludeTitle;
      excludeDescriptionRef.current = excludeDescription;
      listVideoTranslatedRef.current = listVideo;
    }
  }, [videoHistory, videoSelected]);

  useEffect(() => {
    const updateLanguageError = listVideoTranslated
      .filter((item) => {
        return !item.title ||
          item.title.length > NUMBER_CHARACTERS.title.max ||
          item.description.length > NUMBER_CHARACTERS.description.max
          ? true
          : false;
      })
      .map((item) => item.language);

    setListTranslationLanguageError(updateLanguageError);
  }, [listVideoTranslated]);

  const disabledNextBtn =
    loadingListYoutube ||
    loadingListLanguage ||
    loadingDetailVideo ||
    loadingVideoHistory ||
    loadingListYoutubeLanguage ||
    !listOptionsAccount.length;

  const handleToggleModalFinish = () => {
    setOpenModalFinish((prev) => !prev);
  };

  const handleTranslateText = () => {
    if (!accountSelected || !videoSelected || !translationLanguageSelected.length) return;

    const currentTranslationLanguage = listVideoTranslated.map((item) => item.language);

    const changeTranslationLanguage = translationLanguageSelected.filter((newLocale) => {
      const result = currentTranslationLanguage.find(
        (currentLocale) => currentLocale === newLocale
      );
      return result ? false : true;
    });

    const isChangeDefaultTitle = titleRef.current !== defaultTitle;
    const isChangeDefaultDescription = descriptionRef.current !== defaultDescription;

    const isChangeVideoId = videoIdRef.current !== videoSelected.id;

    const changeExcludeTitle =
      excludeTitleRef.current.length > excludeTitle.length
        ? excludeTitleRef.current.filter(
            (currentExcludeTitle) => !excludeTitle.includes(currentExcludeTitle)
          )
        : excludeTitle.filter(
            (newExcludeTitle) => !excludeTitleRef.current.includes(newExcludeTitle)
          );

    const changeExcludeDescription =
      excludeDescriptionRef.current.length > excludeDescription.length
        ? excludeDescriptionRef.current.filter(
            (currentExcludeDescription) => !excludeDescription.includes(currentExcludeDescription)
          )
        : excludeDescription.filter(
            (newExcludeDescription) =>
              !excludeDescriptionRef.current.includes(newExcludeDescription)
          );

    const isChangeExcludeTitle = changeExcludeTitle.length > 0;
    const isChangeExcludeDescription = changeExcludeDescription.length > 0;

    const isTranslateAllLocale =
      isChangeVideoId ||
      isChangeDefaultTitle ||
      isChangeDefaultDescription ||
      isChangeExcludeTitle ||
      isChangeExcludeDescription;

    const isTranslateChangeLocale =
      !isChangeVideoId &&
      !isChangeDefaultTitle &&
      !isChangeDefaultDescription &&
      !isChangeExcludeTitle &&
      !isChangeExcludeDescription &&
      changeTranslationLanguage.length > 0;

    const isTranslateVideo = isTranslateAllLocale || isTranslateChangeLocale;

    if (!isTranslateVideo) return;

    const languages = isTranslateAllLocale
      ? translationLanguageSelected
      : changeTranslationLanguage;

    setListTranslationLanguage(languages);

    const payload = {
      title: defaultTitle,
      description: defaultDescription,
      languages: languages,
      exclude_titles: excludeTitle,
      exclude_descriptions: excludeDescription,
    };

    translateText.mutate(payload, {
      onSuccess(response) {
        const filterVideoTranslated = languages.map((locale) => {
          const findVideo = response.data.find((item) => item.language === locale);
          return findVideo;
        });

        const excludeTranslationLanguage = translationLanguageSelected.filter(
          (locale) => !languages.includes(locale)
        );

        const excludeVideoTranslated = excludeTranslationLanguage.map((locale) => {
          const findVideo = listVideoTranslated.find((item) => item.language === locale);
          return findVideo;
        });

        const listVideo = isTranslateAllLocale
          ? filterVideoTranslated
          : [...excludeVideoTranslated, ...filterVideoTranslated];

        setListVideoTranslated(listVideo as ITranslateVideo[]);
        videoIdRef.current = videoSelected.id;
        titleRef.current = defaultTitle;
        descriptionRef.current = defaultDescription;
        excludeTitleRef.current = excludeTitle;
        excludeDescriptionRef.current = excludeDescription;
        listVideoTranslatedRef.current = listVideo as ITranslateVideo[];
      },
      onError() {
        setListTranslationLanguageError(languages);
      },
    });
  };

  const next = () => {
    if (disabledNextBtn) return;

    if (current === STEP_TRANSLATE.STEP_1 && !videoSelected) {
      notification.error({ message: t('translator.noVideo') });
      return;
    }
    if (current === STEP_TRANSLATE.STEP_2) {
      if (!originalLanguageSelected) {
        setOriginalLanguageError(t('validate.requiredField', { ns: 'common' }));
        return;
      }
      if (!translationLanguageSelected.length) {
        setTranslationLanguageError(t('validate.requiredField', { ns: 'common' }));
        return;
      }
      if (originalLanguageError || translationLanguageError) return;
    }
    if (current === STEP_TRANSLATE.STEP_3) {
      if (!defaultTitle) {
        setTitleError(t('validate.requiredField', { ns: 'common' }));
        return;
      }
      if (titleError) return;

      handleTranslateText();
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const disabledPublishBtn =
    !accountSelected ||
    !videoSelected ||
    !listVideoTranslated.length ||
    !originalLanguageSelected ||
    !categoryId ||
    listTranslationLanguageError.length > 0;

  const handlePublish = () => {
    if (disabledPublishBtn) return;

    const translatedLocalizations = listVideoTranslated.map((item) => {
      return {
        lang: item.language,
        title: item.title,
        description: item.description,
      };
    });

    const localizations = [
      {
        lang: originalLanguageSelected,
        title: defaultTitle,
        description: defaultDescription,
      },
      ...translatedLocalizations,
    ];

    const payload = {
      youtube_account_id: Number(accountSelected),
      video_id: videoSelected.id,
      localizations: JSON.stringify(localizations),
      default_lang: originalLanguageSelected,
      category_id: categoryId,
      exclude_title: JSON.stringify(excludeTitle),
      exclude_description: JSON.stringify(excludeDescription),
    };

    publishVideo.mutate(payload, {
      onSuccess(response) {
        setCurrent(STEP_TRANSLATE.STEP_1);
        handleToggleModalFinish();

        const payload = { youtube_account_id: Number(accountSelected) };

        refreshVideoMutate.mutate(payload, {
          onSuccess() {
            const updateTable = dataTable.map((item) => {
              return item.id.videoId === response.data.id
                ? { ...item, snippet: response.data.snippet, is_push: true }
                : item;
            });
            setDataTable(updateTable);

            const findVideo = updateTable.find((item) => item.id.videoId === response.data.id);
            if (!findVideo) return;

            const updateVideoSelected = {
              key: findVideo.id.videoId,
              id: findVideo.id.videoId,
              picture: findVideo.snippet.thumbnails.default.url,
              channelId: findVideo.snippet.channelId,
              channelTitle: findVideo.snippet.channelTitle,
              title: findVideo.snippet.title,
              description: findVideo.snippet.description,
              date: findVideo.snippet.publishedAt,
              translated: findVideo?.is_push,
              captionized: false,
            };

            setVideoSelected(updateVideoSelected);
          },
        });
      },
      onError(error: any) {
        if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
        notification.error({ message: error.data.message });
      },
    });
  };

  const handleResetState = () => {
    setOriginalLanguageSelected('');
    setTranslationLanguageSelected([]);
    setOriginalLanguageError('');
    setTranslationLanguageError('');
    setDefaultTitle('');
    setDefaultDescription('');
    setExcludeTitle([]);
    setExcludeDescription([]);
    setTitleError('');
    setListVideoTranslated([]);
    setListTranslationLanguage([]);
    setListTranslationLanguageError([]);
    videoIdRef.current = '';
    titleRef.current = '';
    descriptionRef.current = '';
    excludeTitleRef.current = [];
    excludeDescriptionRef.current = [];
    listVideoTranslatedRef.current = [];
  };

  const handleChangeVideo = (record: any) => {
    if (videoSelected && record.id === videoSelected.id) return;
    setVideoSelected(record);
    handleResetState();
  };

  const handleRestoreTranslation = () => {
    const restoreListVideo = [...listVideoTranslatedRef.current];
    setListVideoTranslated(restoreListVideo);
    return restoreListVideo;
  };

  return {
    steps,
    current,
    prev,
    next,
    dataTable,
    totalResults,
    listOptionsAccount,
    accountSelected,
    videoSelected,
    setVideoSelected,
    handleGetListVideo,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleChangeVideo,
    defaultLanguage,
    listOptionsLanguage,
    listOptionsYoutubeLanguage,
    originalLanguageSelected,
    translationLanguageSelected,
    originalLanguageError,
    translationLanguageError,
    setOriginalLanguageSelected,
    setTranslationLanguageSelected,
    setOriginalLanguageError,
    setTranslationLanguageError,
    refetchListLanguage,
    refetchListYoutubeLanguage,
    refetchDetailVideo,
    refetchVideoHistory,
    defaultTitle,
    defaultDescription,
    excludeTitle,
    excludeDescription,
    titleError,
    setExcludeTitle,
    setExcludeDescription,
    setDefaultTitle,
    setDefaultDescription,
    setTitleError,
    loadingTranslate,
    listTranslationLanguage,
    listVideoTranslated,
    listTranslationLanguageError,
    setListVideoTranslated,
    loadingPublishVideo,
    openModalFinish,
    handleToggleModalFinish,
    disabledNextBtn,
    disabledPublishBtn,
    handlePublish,
    handleRestoreTranslation,
    handleLoadMoreAccount,
  };
};

export default useTranslateVideo;

        ### 📄 src/components/cloud-software/translator/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/constants, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ContainerTitleLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SubTitle = styled.h2`
  color: var(--text-main-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContainerTitleRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.div`
  color: var(--primary-color);
  font-size: 26px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const StepButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  gap: 12px;
  &:disabled {
    color: var(--white);
    background: #99b9d7;
  }
`;

export const PublishButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  background: #28b473 !important;
  gap: 12px;
  &:hover {
    background: #28b473 !important;
  }
  &:disabled {
    color: var(--white);
    opacity: 0.6;
  }
`;

export const SelectedVideo = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--border-base-color);
  width: 860px;
  padding: 12px;
`;

export const ImageWrapper = styled.div`
  width: 131px;
  height: 90px;
  margin-right: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const SelectedTitle = styled.div`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
  text-transform: capitalize;

  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
`;

export const SelectedDesc = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};

  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
`;

export const SelectedDate = styled.div`
  color: #d9d9d9;
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
`;

        ### 📄 src/components/cloud-software/translator/components/select-language/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/modals/modal-language-limit, @/interfaces, @/stores/auth/auth.slice, @/stores/hooks, next-i18next`
* ww **Hooks:** `useEffect, useMemo, useTranslation, useAppSelector`

        ```typescript
        import { ModalLanguageLimit } from '@/components/modals/modal-language-limit';
import { LEVEL_USER, LEVEL_USER_LIMIT_LANGUAGE } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useMemo, useState } from 'react';

import * as S from './index.styles';

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  videoSelected: any;
  accountSelected: string;
  defaultLanguage: string;
  originalLanguageError: string;
  translationLanguageError: string;
  listOptionsLanguage: IOption[];
  originalLanguageSelected: string | null;
  translationLanguageSelected: string[];
  setOriginalLanguageSelected: React.Dispatch<React.SetStateAction<string | null>>;
  setTranslationLanguageSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setOriginalLanguageError: React.Dispatch<React.SetStateAction<string>>;
  setTranslationLanguageError: React.Dispatch<React.SetStateAction<string>>;
  refetchListLanguage: () => void;
  listOptionsYoutubeLanguage: IOption[];
  refetchListYoutubeLanguage: () => void;
  refetchDetailVideo?: () => void;
  refetchVideoHistory?: () => void;
}

const SelectLanguage = (props: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const user = useAppSelector(selectCurrentUser);

  const {
    videoSelected,
    accountSelected,
    defaultLanguage,
    listOptionsLanguage,
    listOptionsYoutubeLanguage,
    originalLanguageSelected,
    translationLanguageSelected,
    originalLanguageError,
    translationLanguageError,
    setOriginalLanguageSelected,
    setTranslationLanguageSelected,
    setOriginalLanguageError,
    setTranslationLanguageError,
    refetchListLanguage,
    refetchListYoutubeLanguage,
    refetchDetailVideo,
    refetchVideoHistory,
  } = props;

  const [isOpenModalLanguageLimit, setIsOpenModalLanguageLimit] = useState<boolean>(false);
  const sortedListOptionsLanguage = listOptionsLanguage.sort((a, b) =>
    a.label > b.label ? 1 : -1
  );
  const sortedListOptionsYoutubeLanguage = listOptionsYoutubeLanguage.sort((a, b) =>
    a.label > b.label ? 1 : -1
  );

  useEffect(() => {
    if (!videoSelected || !accountSelected) return;
    refetchListLanguage && refetchListLanguage();
    refetchListYoutubeLanguage && refetchListYoutubeLanguage();
    refetchDetailVideo && refetchDetailVideo();

    if (videoSelected.translated) {
      refetchVideoHistory && refetchVideoHistory();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSelected]);

  const findDefaultLanguage = sortedListOptionsYoutubeLanguage.find(
    (item) => item.value === defaultLanguage
  );

  const filterLanguage = sortedListOptionsYoutubeLanguage.filter(
    (item) => item.value !== defaultLanguage
  );

  const listOriginalLanguage = findDefaultLanguage
    ? [
        { value: findDefaultLanguage.value, label: `${findDefaultLanguage.label} (Default)` },
        ...filterLanguage,
      ]
    : sortedListOptionsYoutubeLanguage;

  const translationErrorMessage = t('validate.notValidLanguage', { ns: 'common' });

  const handleChangeOriginalLanguage = (value: string) => {
    if (value && translationLanguageSelected.includes(value)) {
      setTranslationLanguageError(translationErrorMessage);
    } else {
      setTranslationLanguageError('');
    }

    setOriginalLanguageError('');

    setOriginalLanguageSelected(value);
  };

  const handleChangeTranslationLanguage = (value: string[]) => {
    if (originalLanguageSelected && value.includes(originalLanguageSelected)) {
      setTranslationLanguageError(translationErrorMessage);
    } else {
      setTranslationLanguageError('');
    }
  };

  const numberAvailableLanguage = useMemo(() => {
    switch (user?.level?.toLocaleUpperCase()) {
      case LEVEL_USER.GOLD:
        return listOptionsLanguage.length;
      case LEVEL_USER.SILVER:
        return LEVEL_USER_LIMIT_LANGUAGE.SILVER;
      case LEVEL_USER.BRONZE:
        return LEVEL_USER_LIMIT_LANGUAGE.BRONZE;
      default:
        return LEVEL_USER_LIMIT_LANGUAGE.DEFAULT;
    }
  }, [user, listOptionsLanguage]);

  const remainningAvailableLanguage = numberAvailableLanguage - translationLanguageSelected.length;

  const handleSelectTranslationLanguage = (value: string) => {
    if (translationLanguageSelected.length >= numberAvailableLanguage) {
      setIsOpenModalLanguageLimit(true);
      return;
    }
    setTranslationLanguageSelected([...translationLanguageSelected, value]);
  };

  const handleDeselectTranslationLanguage = (value: string) => {
    const filterLanguage = translationLanguageSelected.filter((item) => item !== value);
    setTranslationLanguageSelected(filterLanguage);
  };

  const handleClearTranslationLanguage = () => {
    setTranslationLanguageSelected([]);
  };

  return (
    <S.Wrapper>
      <ModalLanguageLimit
        isOpen={isOpenModalLanguageLimit}
        onClose={() => setIsOpenModalLanguageLimit(false)}
      />
      <S.Title>{t('translator.selectLanguages')}</S.Title>
      <S.WrapperSelect>
        <div>
          <S.SelectTitle>
            {t('translator.originalLanguage')} <S.Required>*</S.Required>
          </S.SelectTitle>

          <S.Select
            showSearch
            allowClear
            value={originalLanguageSelected}
            options={listOriginalLanguage}
            placeholder={t('translator.typeToFilter')}
            onChange={(value) => handleChangeOriginalLanguage(value as string)}
            filterOption={(inputValue, option) =>
              option?.label.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            }
          />

          {originalLanguageError && <S.TextError>{originalLanguageError}</S.TextError>}
        </div>

        <div>
          <S.SelectTitle>
            {t('translator.translationLanguages')} <S.Required>*</S.Required>
          </S.SelectTitle>

          <S.Select
            allowClear
            value={translationLanguageSelected}
            options={sortedListOptionsLanguage}
            mode="multiple"
            placeholder={t('translator.typeToFilter')}
            onChange={(value) => handleChangeTranslationLanguage(value as string[])}
            onSelect={(value) => handleSelectTranslationLanguage(value as string)}
            onDeselect={(value) => handleDeselectTranslationLanguage(value as string)}
            onClear={() => handleClearTranslationLanguage()}
            filterOption={(inputValue, option) =>
              option?.label.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            }
          />

          {translationLanguageError && <S.TextError>{translationLanguageError}</S.TextError>}

          <S.LanguageInfo>
            <div>
              {t('translator.totalSelected', { number: translationLanguageSelected.length })}{' '}
              {translationLanguageSelected.length <= 1
                ? t('translator.numberLanguage')
                : t('translator.numberLanguages')}
            </div>
            <S.Available>
              <S.IconQuestion onClick={() => setIsOpenModalLanguageLimit(true)} />
              {t('translator.available', {
                number: remainningAvailableLanguage >= 0 ? remainningAvailableLanguage : 0,
              })}{' '}
              {remainningAvailableLanguage <= 1
                ? t('translator.numberLanguage')
                : t('translator.numberLanguages')}
            </S.Available>
          </S.LanguageInfo>
        </div>
      </S.WrapperSelect>
    </S.Wrapper>
  );
};

export default SelectLanguage;

        ### 📄 src/components/cloud-software/translator/components/select-language/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-question.svg, @/components/common/selects/base-select, @/constants, styled-components`

        ```ts
        import IconQS from '@/assets/images/svg/icon-question.svg';
import { BaseSelect } from '@/components/common/selects/base-select';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  padding: 24px;
`;

export const Title = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const WrapperSelect = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectTitle = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-top: 24px;
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const Select = styled(BaseSelect)`
  width: 560px;
  margin-top: 12px;
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;

export const LanguageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Available = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconQuestion = styled(IconQS)`
  cursor: pointer;
`;

        ### 📄 src/components/cloud-software/translator/components/review-translation/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-loading.svg, @/assets/images/translator/unknow-flag.png, @/constants, @/interfaces/cloud-software, @/utils`...
* ww **Hooks:** `useEffect, useImperativeHandle, useTranslation, useMemo, useState, useTranslator`

        ```typescript
        import IconLoading from '@/assets/images/svg/icon-loading.svg';
import UnknowFlagImage from '@/assets/images/translator/unknow-flag.png';
import { NUMBER_CHARACTERS } from '@/constants';
import { ITranslateVideo } from '@/interfaces/cloud-software';
import { fromLangCodeToCountryCode } from '@/utils';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useEffect, useImperativeHandle, useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { useTranslator } from '../..';
import * as S from './index.styles';

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  loadingTranslate: boolean;
  translationLanguageSelected: string[];
  listOptionsLanguage: IOption[];
  listTranslationLanguage: string[];
  listTranslationLanguageError: string[];
  handleRestoreTranslation: () => ITranslateVideo[];
}

interface ITranslationContent {
  locale: string;
}

// eslint-disable-next-line react/display-name
const TranslationContent = React.forwardRef<any, ITranslationContent>((props, ref) => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const { locale } = props;

  const { listVideoTranslated, setListVideoTranslated } = useTranslator();

  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  const [titleError, setTitleError] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  useEffect(() => {
    const content = listVideoTranslated?.find((item) => item.language === locale);
    setInputTitle(content?.title ?? '');
    setInputDescription(content?.description ?? '');
  }, [locale]);

  useEffect(() => {
    const content = listVideoTranslated.find((item) => item.language === locale);

    if (!content?.title) {
      setTitleError(t('validate.requiredField', { ns: 'common' }));
    } else if (content?.title && content.title.length > NUMBER_CHARACTERS.title.max) {
      setTitleError(
        t('validate.MC21', {
          number: NUMBER_CHARACTERS.title.max,
          ns: 'common',
        })
      );
    } else {
      setTitleError('');
    }

    if (content?.description && content.description.length > NUMBER_CHARACTERS.description.max) {
      setDescriptionError(
        t('validate.MC21', {
          number: NUMBER_CHARACTERS.description.max,
          ns: 'common',
        })
      );
    } else {
      setDescriptionError('');
    }
  }, [listVideoTranslated, locale]);

  const handleChangeTitle = (value: string) => {
    if (/[><]/.test(value)) return;

    if (!value) {
      setTitleError(t('validate.requiredField', { ns: 'common' }));
    } else if (value && value.length > NUMBER_CHARACTERS.title.max) {
      setTitleError(
        t('validate.MC21', {
          number: NUMBER_CHARACTERS.title.max,
          ns: 'common',
        })
      );
    } else {
      setTitleError('');
    }

    const data = listVideoTranslated.map((item) =>
      item.language === locale ? { ...item, title: value } : item
    );
    setListVideoTranslated(data);
    setInputTitle(value);
  };

  const handleChangeDescription = (value: string) => {
    if (/[><]/.test(value)) return;

    if (value && value.length > NUMBER_CHARACTERS.description.max) {
      setDescriptionError(
        t('validate.MC21', {
          number: NUMBER_CHARACTERS.description.max,
          ns: 'common',
        })
      );
    } else {
      setDescriptionError('');
    }

    const data = listVideoTranslated.map((item) =>
      item.language === locale ? { ...item, description: value } : item
    );
    setListVideoTranslated(data);
    setInputDescription(value);
  };

  useImperativeHandle(
    ref,
    function () {
      return {
        onRestore(data?: { title: string; description: string }) {
          try {
            setInputTitle(data?.title ?? '');
            setInputDescription(data?.description ?? '');
          } catch (err) {
            return;
          }
        },
      };
    },
    []
  );

  return (
    <S.WrapperContent>
      <S.InputTitle>
        {t('translator.title')} <S.Required>*</S.Required>
      </S.InputTitle>

      <S.Input
        value={inputTitle}
        onChange={(e) => handleChangeTitle(e.target.value)}
        maxLength={NUMBER_CHARACTERS.title.max}
      />

      {titleError && <S.TextError>{titleError}</S.TextError>}

      <S.InputDescription>{t('translator.description')}</S.InputDescription>

      <S.Textarea
        value={inputDescription}
        onChange={(e) => handleChangeDescription(e.target.value)}
        maxLength={NUMBER_CHARACTERS.description.max}
        autoSize={{ maxRows: 5 }}
      />

      {descriptionError && <S.TextError>{descriptionError}</S.TextError>}
    </S.WrapperContent>
  );
});

const ReviewTranslation = (props: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const { listVideoTranslated, setListVideoTranslated } = useTranslator();

  const TranslationContentRefs = React.useRef<
    { onRestore: (data: { title: string; description: string }) => void }[]
  >([]);

  const {
    loadingTranslate,
    translationLanguageSelected,
    listOptionsLanguage,
    listTranslationLanguage,
    listTranslationLanguageError,
    handleRestoreTranslation,
  } = props;

  const defaultPanes = useMemo(
    () =>
      translationLanguageSelected.map((locale, index) => {
        const optionlanguage = listOptionsLanguage.find((item) => item.value === locale);
        const countryCode = fromLangCodeToCountryCode(locale);

        return {
          key: index.toString(),
          title: optionlanguage?.label,
          content: (
            <TranslationContent
              locale={locale}
              ref={(element) => (TranslationContentRefs.current[index] = element)}
            />
          ),
          locale: locale,
          icon: countryCode ? (
            <ReactCountryFlag countryCode={countryCode} svg />
          ) : (
            <Image src={UnknowFlagImage} alt="unknow" width={20} height={16} />
          ),
        };
      }),
    [
      listVideoTranslated,
      loadingTranslate,
      translationLanguageSelected,
      listOptionsLanguage,
      listTranslationLanguage,
      listTranslationLanguageError,
    ]
  );

  const [activeKey, setActiveKey] = useState(defaultPanes[0]?.key ?? '');

  const [items, setItems] = useState(defaultPanes);

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const remove = (targetKey: string, locale: string) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);

    const updateListVideoTranslated = listVideoTranslated.filter(
      (item) => item.language !== locale
    );
    setListVideoTranslated(updateListVideoTranslated);
  };

  const handleClickRestore = () => {
    setItems(defaultPanes);
    const restoreList = handleRestoreTranslation();
    restoreList?.map((item, index) => {
      TranslationContentRefs.current[index]?.onRestore({
        title: item.title,
        description: item.description,
      });
    });
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>{t('translator.reviewTranslation')}</S.Title>

        {items.length > 0 && (
          <S.TabList tabPosition="left" activeKey={activeKey} onChange={onChange}>
            {items.map((pane) => (
              <S.WrapperTabItem
                tab={
                  <S.TabItem>
                    <S.LanguageItem>
                      <S.Flag>{pane.icon}</S.Flag>
                      <S.Language>{pane.title}</S.Language>
                      {!loadingTranslate && listTranslationLanguageError.includes(pane.locale) && (
                        <S.IconErrorText />
                      )}
                    </S.LanguageItem>

                    {loadingTranslate ? (
                      listTranslationLanguage.includes(pane.locale) ? (
                        <S.IconLoadingTab />
                      ) : (
                        pane.key === activeKey && (
                          <S.IconClose onClick={() => remove(pane.key, pane.locale)} />
                        )
                      )
                    ) : (
                      pane.key === activeKey && (
                        <S.IconClose onClick={() => remove(pane.key, pane.locale)} />
                      )
                    )}
                  </S.TabItem>
                }
                key={pane.key}
              >
                {loadingTranslate && listTranslationLanguage.includes(pane.locale) ? (
                  <S.WrapperLoading>
                    <S.Icon>
                      <IconLoading />
                    </S.Icon>
                    <S.Text>{t('translator.translatingVideo')}</S.Text>
                    <S.Text>{t('translator.waitingTranslateDesc')}</S.Text>
                  </S.WrapperLoading>
                ) : (
                  pane.content
                )}
              </S.WrapperTabItem>
            ))}
          </S.TabList>
        )}
      </S.Wrapper>

      <S.WrapperButton>
        <S.RestoreButton type="primary" onClick={handleClickRestore}>
          <S.IconButton />
          {t('translator.restoreTranslation')}
        </S.RestoreButton>
      </S.WrapperButton>
    </>
  );
};

export default ReviewTranslation;

        ### 📄 src/components/cloud-software/translator/components/review-translation/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/cloud-software/icon-refresh.svg, @/assets/images/svg/icon-error.svg, @/assets/images/svg/icon-loading.svg, @/components/common/base-button, @/components/common/inputs/base-input`...

        ```ts
        import IconRefresh from '@/assets/images/svg/cloud-software/icon-refresh.svg';
import IconError from '@/assets/images/svg/icon-error.svg';
import IconLoading from '@/assets/images/svg/icon-loading.svg';
import { BaseButton } from '@/components/common/base-button';
import { BaseInput } from '@/components/common/inputs/base-input';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { CloseCircleFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import styled from 'styled-components';

const { TabPane } = Tabs;

export const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  padding: 24px;
`;

export const Title = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const TabList = styled(Tabs)`
  margin-top: 24px;

  .ant-tabs-content {
    position: sticky;
    top: 0;
  }

  .ant-tabs-tab {
    padding: 18px 36px !important;
    border: 1px solid var(--border-base-color);
    border-top: none;
    border-right: none;
    margin: 0 !important;
    width: 350px;
    height: 60px;

    &:first-child {
      border-top: 1px solid var(--border-base-color);
      border-radius: 8px 0px 0px 0px;
    }

    &.ant-tabs-tab-active {
      background: #f5f5f5;
      div {
        span {
          font-weight: ${FONT_WEIGHT.bold};
        }
      }
    }
  }

  .ant-tabs-tab-btn {
    width: 100%;
  }

  .ant-tabs-content-holder {
    border-radius: 0px 8px 8px 0px;
    border: 1px solid var(--border-base-color);
  }

  .ant-tabs-ink-bar {
    background: #ff5252;
    width: 4px !important;
  }
`;

export const WrapperTabItem = styled(TabPane)``;

export const TabItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LanguageItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Flag = styled.span`
  margin-right: 16px;
`;

export const Language = styled.span`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.regular};
`;

export const IconClose = styled(CloseCircleFilled)`
  margin-left: 1rem;
  path {
    fill: #bec0c6;
  }
`;

export const IconErrorText = styled(IconError)`
  zoom: 0.4 !important;
  margin-left: 2rem;
`;

export const IconLoadingTab = styled(IconLoading)`
  zoom: 0.3 !important;
  margin-left: 2rem;
`;

export const WrapperContent = styled.div`
  padding: 24px;
  padding-left: 0px;
`;

export const InputTitle = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 12px;
`;

export const InputDescription = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 12px;
  margin-top: 32px;
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const Input = styled(BaseInput)``;

export const Textarea = styled(BaseInput.TextArea)``;

export const WrapperButton = styled.span`
  display: flex;
  justify-content: center;
`;

export const RestoreButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 32px;
  margin-bottom: 1rem;
  padding: 0 24px;
  background: #28b473 !important;
  gap: 12px;
  &:hover {
    background: #28b473 !important;
  }
`;

export const IconButton = styled(IconRefresh)`
  path {
    fill: var(--white);
  }
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;

export const WrapperLoading = styled.div`
  padding: 24px;
  padding-left: 0px;
  height: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  color: #404040;
  text-align: center;
  font-size: 16px;
  font-weight: ${FONT_WEIGHT.medium};
  margin-bottom: 1rem;
`;

        ### 📄 src/components/cloud-software/translator/components/exclude-translation/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @ant-design/icons, next-i18next`
* ww **Hooks:** `useTranslation`

        ```typescript
        import { NUMBER_CHARACTERS } from '@/constants';
import { CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import React, { useRef } from 'react';

import * as S from './index.styles';

interface IProps {
  defaultTitle: string;
  defaultDescription: string;
  excludeTitle: string[];
  excludeDescription: string[];
  titleError: string;
  setExcludeTitle: React.Dispatch<React.SetStateAction<string[]>>;
  setExcludeDescription: React.Dispatch<React.SetStateAction<string[]>>;
  setDefaultTitle: React.Dispatch<any>;
  setDefaultDescription: React.Dispatch<any>;
  setTitleError: React.Dispatch<string>;
}

const ExcludeTranslation = (props: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const {
    defaultTitle,
    defaultDescription,
    excludeTitle,
    excludeDescription,
    titleError,
    setExcludeTitle,
    setExcludeDescription,
    setDefaultTitle,
    setDefaultDescription,
    setTitleError,
  } = props;

  const titleSelectedRef = useRef<string>('');
  const descriptionSelectedRef = useRef<string>('');

  const handleTextSelected = (type: string) => {
    let textSelected = '';

    if (window.getSelection) {
      textSelected = window.getSelection()?.toString().trim() ?? '';
    } else if (document.getSelection) {
      textSelected = document.getSelection()?.toString().trim() ?? '';
    }

    if (type === 'title') {
      titleSelectedRef.current = textSelected;
    } else if (type === 'description') {
      descriptionSelectedRef.current = textSelected;
    }
  };

  const handleExcludeTitle = () => {
    setExcludeTitle((prev) => {
      return titleSelectedRef.current && !prev.includes(titleSelectedRef.current)
        ? [...prev, titleSelectedRef.current]
        : prev;
    });

    titleSelectedRef.current = '';
  };

  const handleExcludeDescription = () => {
    setExcludeDescription((prev) => {
      return descriptionSelectedRef.current && !prev.includes(descriptionSelectedRef.current)
        ? [...prev, descriptionSelectedRef.current]
        : prev;
    });

    descriptionSelectedRef.current = '';
  };

  const handleRemoveTitle = (text: string) => {
    setExcludeTitle((prev) => prev.filter((item) => item !== text));
  };

  const handleRemoveDescription = (text: string) => {
    setExcludeDescription((prev) => prev.filter((item) => item !== text));
  };

  const handleChangeTitle = (title: string) => {
    if (/[><]/.test(title)) return;

    setDefaultTitle(title);
    setTitleError('');
  };

  const handleChangeDescription = (description: string) => {
    if (/[><]/.test(description)) return;

    setDefaultDescription(description);
  };

  return (
    <S.Wrapper>
      <S.Title>{t('translator.excludeTranslation')}</S.Title>

      <S.InputTitle>
        {t('translator.title')} <S.Required>*</S.Required>
      </S.InputTitle>

      <S.WrapperInput>
        <S.Input
          value={defaultTitle ?? ''}
          onSelect={() => handleTextSelected('title')}
          onChange={(e) => handleChangeTitle(e.target.value)}
          maxLength={NUMBER_CHARACTERS.title.max}
        />

        <S.InputButton type="primary" onClick={handleExcludeTitle}>
          {t('translator.exclude')}
        </S.InputButton>
      </S.WrapperInput>

      {titleError && <S.TextError>{titleError}</S.TextError>}

      <S.WrapperExclusionTag>
        {excludeTitle.map((text, index) => (
          <S.ExclusionTag key={index}>
            {text}
            <CloseOutlined style={{ fontSize: '10px' }} onClick={() => handleRemoveTitle(text)} />
          </S.ExclusionTag>
        ))}
      </S.WrapperExclusionTag>

      <S.InputDescription>{t('translator.description')}</S.InputDescription>

      <S.WrapperTextarea>
        <S.Textarea
          value={defaultDescription ?? ''}
          onSelect={() => handleTextSelected('description')}
          onChange={(e) => handleChangeDescription(e.target.value)}
          maxLength={NUMBER_CHARACTERS.description.max}
          autoSize={{ maxRows: 5 }}
        />

        <S.InputButton type="primary" onClick={handleExcludeDescription}>
          {t('translator.exclude')}
        </S.InputButton>
      </S.WrapperTextarea>

      <S.WrapperExclusionTag>
        {excludeDescription.map((text, index) => (
          <S.ExclusionTag key={index}>
            {text}
            <CloseOutlined
              style={{ fontSize: '10px' }}
              onClick={() => handleRemoveDescription(text)}
            />
          </S.ExclusionTag>
        ))}
      </S.WrapperExclusionTag>
    </S.Wrapper>
  );
};

export default ExcludeTranslation;

        ### 📄 src/components/cloud-software/translator/components/exclude-translation/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/components/common/inputs/base-input, @/constants, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { BaseInput } from '@/components/common/inputs/base-input';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  padding: 24px;
`;

export const Title = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  height: 50px;
`;

export const Input = styled(BaseInput)``;

export const InputTitle = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const InputDescription = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 12px;
  margin-top: 32px;
`;

export const InputButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  gap: 12px;
  &:disabled {
    color: var(--white);
    background: #99b9d7;
  }
`;

export const WrapperTextarea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const Textarea = styled(BaseInput.TextArea)`
  resize: none !important;
  overflow: auto !important;
`;

export const WrapperExclusionTag = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;

export const ExclusionTag = styled.div`
  display: flex;
  padding: 4px 4px 4px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #d04545;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.regular};
  color: var(--white);
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;

        ### 📄 src/components/cloud-software/translator/components/select-video/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-search.svg, @/components/common/no-data, @/interfaces/cloud-software, lodash, next-i18next`...
* wb **Type/Intf:** `IProps`
* ww **Hooks:** `useEffect, useTranslation, useSelectVideo, useRef`

        ```typescript
        import SearchIcon from '@/assets/images/svg/icon-search.svg';
import { NoData } from '@/components/common/no-data';
import { IVideoYoutube } from '@/interfaces/cloud-software';
import { debounce } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';

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

  const onReachBottom = () => {
    if (tableData.data.length && tableData.data.length < totalResults) handleGetListVideo();
  };

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
  }, [tableData]);

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

        ### 📄 src/components/cloud-software/translator/components/select-video/index.utils.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/translator/no-video.png, @/constants, dayjs, next-i18next, next/link`...
* 🧩 **Component (Default):** `useSelectVideo`
* ww **Hooks:** `useMemo, useTranslation, useSelectVideo, useRouter`

        ```typescript
        import NoVideo from '@/assets/images/translator/no-video.png';
import { DATE_FORMAT, ROUTER_PATH } from '@/constants';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { IProps } from './';
import * as S from './index.styles';

export default function useSelectVideo(props: IProps) {
  const { t } = useTranslation(['cloud-software', 'common']);

  const router = useRouter();

  const {
    dataTable,
    listOptionsAccount,
    accountSelected,
    videoSelected,
    totalResults,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleGetListVideo,
    handleChangeVideo,
    handleLoadMoreAccount,
  } = props;

  const isTranslateCaption = router.pathname === ROUTER_PATH.CAPTION;

  const statusColumns = isTranslateCaption
    ? [
        {
          title: t('translator.captionized'),
          width: '10%',
          dataIndex: 'captionized',
          key: 'captionized',
          render: (data: string) => {
            return data ? (
              <S.TextSuccess>{t('translator.yes')}</S.TextSuccess>
            ) : (
              <S.TextError>{t('translator.no')}</S.TextError>
            );
          },
        },
        {
          title: t('translator.translated'),
          width: '10%',
          dataIndex: 'translated',
          key: 'translated',
          render: (data: string) => {
            return data ? (
              <S.TextSuccess>{t('translator.yes')}</S.TextSuccess>
            ) : (
              <S.TextError>{t('translator.no')}</S.TextError>
            );
          },
        },
      ]
    : [
        {
          title: t('translator.translated'),
          width: '10%',
          dataIndex: 'translated',
          key: 'translated',
          render: (data: string) => {
            return data ? (
              <S.TextSuccess>{t('translator.yes')}</S.TextSuccess>
            ) : (
              <S.TextError>{t('translator.no')}</S.TextError>
            );
          },
        },
      ];

  const columns = [
    {
      title: t('translator.video'),
      width: '10%',
      dataIndex: 'picture',
      key: 'picture',
      render: (thumbnail: string) => {
        return (
          <S.Action>
            <S.Image src={thumbnail ?? NoVideo.src} alt={''} preview={false} />
          </S.Action>
        );
      },
    },
    {
      title: t('translator.title'),
      width: '20%',
      key: 'title',
      render: (data: any) => {
        return (
          <S.TableTitle>
            <Link href={`https://youtu.be/${data.id}}`} target="_blank">
              {data.title}
            </Link>
          </S.TableTitle>
        );
      },
    },
    {
      title: t('translator.description'),
      width: '40%',
      dataIndex: 'description',
      key: 'description',
      render: (data: string) => {
        return <S.TableDescription>{data}</S.TableDescription>;
      },
    },
    ...statusColumns,
    {
      title: t('translator.date'),
      width: '10%',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => {
        return dayjs(date).format(DATE_FORMAT.DAY_MONTH_YEAR);
      },
    },
  ];

  const tableData = useMemo(() => {
    return {
      data:
        dataTable
          .filter((item) => item.snippet)
          .map((video) => {
            return {
              key: video.id.videoId,
              id: video.id.videoId,
              picture: video.snippet.thumbnails.default.url,
              channelId: video.snippet.channelId,
              channelTitle: video.snippet.channelTitle,
              title: video.snippet.title,
              description: video.snippet.description,
              date: video.snippet.publishedAt,
              translated: video?.is_push,
              captionized: video?.is_push_caption,
            };
          }) || [],
    };
  }, [dataTable]);

  return {
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
  };
}

        ### 📄 src/components/cloud-software/translator/components/select-video/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/cloud-software/icon-refresh.svg, @/components/common/base-button, @/components/common/base-image, @/components/common/base-table, @/components/common/inputs/base-input`...

        ```ts
        import IconRefresh from '@/assets/images/svg/cloud-software/icon-refresh.svg';
import { BaseButton } from '@/components/common/base-button';
import { BaseImage } from '@/components/common/base-image';
import { BaseTable } from '@/components/common/base-table';
import { BaseInput } from '@/components/common/inputs/base-input';
import { BaseSelect } from '@/components/common/selects/base-select';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Image = styled(BaseImage)`
  width: 100%;
  max-width: 116px;
  max-height: 80px;
  border-radius: 0.5rem;
`;

export const SelectedAccount = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 32px 0;
`;

export const WrapperAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const Text = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
`;

export const Select = styled(BaseSelect)`
  width: 250px;
`;

export const IconButton = styled(IconRefresh)`
  path {
    fill: var(--white);
  }
`;

export const RefreshButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  background: #28b473 !important;
  gap: 12px;
  &:hover {
    background: #28b473 !important;
  }
`;

export const SearchInput = styled(BaseInput)``;

export const TableVideoContainer = styled.div``;

export const TableVideo = styled(BaseTable)`
  .ant-table-container {
    border: 1px solid #bec0c6;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
  }

  .ant-table-cell {
    &::before {
      background-color: unset !important;
    }
  }

  .ant-table-row {
    cursor: pointer;
  }

  .active {
    background: var(--notification-primary-color);
  }
`;

export const TableTitle = styled.div`
  color: var(--primary-color);
  font-weight: ${FONT_WEIGHT.medium};
  text-transform: capitalize;

  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
`;

export const TextSuccess = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #78cd94;
  color: var(--white);
`;

export const TextError = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #ff5252;
  color: var(--white);
`;

export const TableDescription = styled.div`
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
`;

        ### 📄 src/components/cloud-software/captionizer/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-arrow-left.svg, @/assets/images/svg/icon-arrow-right.svg, @/assets/images/translator/no-video.png, @/components/common/base-image, @/components/common/step-switch`...
* ww **Hooks:** `useTranslateCaption, useTranslation, useContext`

        ```typescript
        import IconArrowLeft from '@/assets/images/svg/icon-arrow-left.svg';
import IconArrowRight from '@/assets/images/svg/icon-arrow-right.svg';
import NoVideo from '@/assets/images/translator/no-video.png';
import { BaseImage } from '@/components/common/base-image';
import { StepSwitch } from '@/components/common/step-switch';
import ModalFinishUpdate from '@/components/modals/modal-finish-update';
import ModalLoading from '@/components/modals/modal-loading';
import { DATE_FORMAT, STEP_TRANSLATE } from '@/constants';
import { ICaptionDetail } from '@/interfaces/cloud-software';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import React, { createContext, useContext } from 'react';

import SelectLanguage from '../translator/components/select-language';
import SelectVideo from '../translator/components/select-video';
import CurrentPlan from '../youtube-account/current-plan';
import ExcludeTranslation from './components/exclude-translation';
import ReviewTranslation from './components/review-translation';
import * as S from './index.styles';
import useTranslateCaption from './index.utils';

interface ITranslator {
  listVideoTranslated: {
    lang: string;
    content: ICaptionDetail[];
  }[];
  setListVideoTranslated: React.Dispatch<
    React.SetStateAction<
      {
        lang: string;
        content: ICaptionDetail[];
      }[]
    >
  >;
}

const TranslatorContext = createContext<ITranslator | null>(null);

export const useTranslator = () => useContext(TranslatorContext) as ITranslator;

const CaptionComponent = () => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const {
    steps,
    current,
    prev,
    next,
    dataTable,
    totalResults,
    listOptionsAccount,
    accountSelected,
    videoSelected,
    handleGetListVideo,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleChangeVideo,
    defaultLanguage,
    listOptionsLanguage,
    listOptionsYoutubeLanguage,
    originalLanguageSelected,
    translationLanguageSelected,
    originalLanguageError,
    translationLanguageError,
    setOriginalLanguageSelected,
    setTranslationLanguageSelected,
    setOriginalLanguageError,
    setTranslationLanguageError,
    refetchListLanguage,
    refetchListYoutubeLanguage,
    refetchDetailVideo,
    openModalFinish,
    handleToggleModalFinish,
    disabledNextBtn,
    handlePublish,
    defaultCaptions,
    excludeCaptions,
    setDefaultCaptions,
    setExcludeCaptions,
    onGetCaptionDetail,
    getCaptionDetailPending,
    listVideoTranslated,
    setListVideoTranslated,
    loadingTranslate,
    listTranslationLanguage,
    listTranslationLanguageError,
    handleClearCaption,
    loadingPublish,
    disabledPublishBtn,
    handleRestoreTranslation,
    handleLoadMoreAccount,
  } = useTranslateCaption();

  const renderStep = () => {
    switch (current) {
      case STEP_TRANSLATE.STEP_1:
        return (
          <SelectVideo
            dataTable={dataTable}
            totalResults={totalResults}
            listOptionsAccount={listOptionsAccount}
            accountSelected={accountSelected}
            videoSelected={videoSelected}
            handleChangeAccount={handleChangeAccount}
            handleRefreshVideo={handleRefreshVideo}
            handleParamsChange={handleParamsChange}
            handleGetListVideo={handleGetListVideo}
            handleChangeVideo={handleChangeVideo}
            handleLoadMoreAccount={handleLoadMoreAccount}
          />
        );

      case STEP_TRANSLATE.STEP_2:
        return (
          <SelectLanguage
            accountSelected={accountSelected}
            videoSelected={videoSelected}
            defaultLanguage={defaultLanguage}
            listOptionsLanguage={listOptionsLanguage}
            listOptionsYoutubeLanguage={listOptionsYoutubeLanguage}
            originalLanguageSelected={originalLanguageSelected}
            translationLanguageSelected={translationLanguageSelected}
            originalLanguageError={originalLanguageError}
            translationLanguageError={translationLanguageError}
            setOriginalLanguageSelected={setOriginalLanguageSelected}
            setTranslationLanguageSelected={setTranslationLanguageSelected}
            setOriginalLanguageError={setOriginalLanguageError}
            setTranslationLanguageError={setTranslationLanguageError}
            refetchListLanguage={refetchListLanguage}
            refetchDetailVideo={refetchDetailVideo}
            refetchListYoutubeLanguage={refetchListYoutubeLanguage}
          />
        );

      case STEP_TRANSLATE.STEP_3:
        return (
          <ExcludeTranslation
            handleClearCaptions={handleClearCaption}
            defaultCaptions={defaultCaptions}
            excludeCaptions={excludeCaptions}
            setDefaultCaptions={setDefaultCaptions}
            setExcludeCaptions={setExcludeCaptions}
            onGetCaptionDetail={onGetCaptionDetail}
            getCaptionDetailPending={getCaptionDetailPending}
          />
        );

      case STEP_TRANSLATE.STEP_4:
        return (
          <ReviewTranslation
            loadingTranslate={loadingTranslate}
            translationLanguageSelected={translationLanguageSelected}
            listOptionsLanguage={listOptionsLanguage}
            listTranslationLanguageError={listTranslationLanguageError}
            listTranslationLanguage={listTranslationLanguage}
            handleRestoreTranslation={handleRestoreTranslation}
          />
        );

      default:
        break;
    }
  };

  return (
    <TranslatorContext.Provider value={{ listVideoTranslated, setListVideoTranslated }}>
      <S.ContainerTitle>
        <S.ContainerTitleLeft>
          <S.Title>{t('translator.captionMaster')}</S.Title>
          <S.SubTitle>{t('translator.translateCaption')}</S.SubTitle>
        </S.ContainerTitleLeft>
        <CurrentPlan />
      </S.ContainerTitle>

      <StepSwitch steps={steps} current={current} />

      <S.ButtonWrapper>
        <S.StepButton type="primary" disabled={current === STEP_TRANSLATE.STEP_1} onClick={prev}>
          <IconArrowLeft />
          {t('translator.previous')}
        </S.StepButton>

        <S.SelectedVideo>
          <S.ImageWrapper>
            <BaseImage
              width={120}
              height={90}
              src={videoSelected ? videoSelected.picture : NoVideo.src}
              alt=""
              preview={false}
            />
          </S.ImageWrapper>

          <div>
            <S.SelectedTitle>
              {videoSelected ? videoSelected.title : t('translator.noVideo')}
            </S.SelectedTitle>
            {videoSelected && (
              <S.SelectedDate>
                {dayjs(videoSelected.date).format(DATE_FORMAT.DAY_MONTH_YEAR)}
              </S.SelectedDate>
            )}
            <S.SelectedDesc>
              {videoSelected ? videoSelected.description : t('translator.selectVideoInlist')}
            </S.SelectedDesc>
          </div>
        </S.SelectedVideo>

        {current < steps.length - 1 && (
          <S.StepButton type="primary" onClick={next} disabled={disabledNextBtn}>
            {t('translator.nextStep')}
            <IconArrowRight />
          </S.StepButton>
        )}
        {current === steps.length - 1 && (
          <S.PublishButton
            type="primary"
            onClick={handlePublish}
            loading={loadingPublish}
            disabled={disabledPublishBtn}
          >
            {t('translator.publish')}
            <IconArrowRight />
          </S.PublishButton>
        )}
      </S.ButtonWrapper>

      <div>{renderStep()}</div>

      <ModalLoading
        isOpen={loadingPublish}
        title={t('translator.publishingCaptions')}
        desc={t('translator.waitingDesc')}
      />

      <ModalFinishUpdate
        isOpen={openModalFinish}
        onClose={handleToggleModalFinish}
        text={t('translator.finishedUpdatingCaption')}
        subText={{
          start: t('translator.finish-updating-modal.caption.subtext-start'),
          hightlight: t('translator.finish-updating-modal.caption.subtext-highlight'),
          continue: t('translator.finish-updating-modal.caption.subtext-continue'),
        }}
        videoId={videoSelected?.id}
      />
    </TranslatorContext.Provider>
  );
};

export default CaptionComponent;

        ### 📄 src/components/cloud-software/captionizer/index.utils.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/cloud-software/youtube-accounts, @/constants, @/hooks/features/useCaptionize, @/hooks/features/useTranslate, @/hooks/features/useYoutubeAccount`...
* ww **Hooks:** `useEffect, useTransCaption, usePublishCaption, useRefreshVideosMutate, useTranslation, useGetListLanguage, useState`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { videosYoutube } from '@/api/cloud-software/youtube-accounts';
import { STEP_TRANSLATE } from '@/constants';
import {
  useGetCaptionDetail,
  useGetCaptionPushHistoryMutation,
} from '@/hooks/features/useCaptionize';
import { useGetListLanguage, useGetListYoutubeLanguage } from '@/hooks/features/useTranslate';
import {
  useGetDetailVideoYoutube,
  useRefreshVideosMutate,
} from '@/hooks/features/useYoutubeAccount';
import { useFeedback } from '@/hooks/useFeedback';
import { usePagination } from '@/hooks/usePagination';
import { ICaptionDetail, IListYoutubeAccount, IVideoYoutube } from '@/interfaces/cloud-software';
import { useAppDispatch } from '@/stores/hooks';
import { setIsProgress } from '@/stores/progress/progress.slice';
import { htmlDecode } from '@/utils';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

import useYoutubeAccount from '../index.utils';
import { usePublishCaption, useTransCaption } from './action-hook';

const useTranslateCaption = () => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const { notification } = useFeedback();

  const pagination = usePagination();

  const { loadingListYoutube, dataPagination, refetchListYoutube } = useYoutubeAccount(
    pagination.params,
    false
  );

  const [dataListYoutube, setDataListYoutube] = useState<IListYoutubeAccount[]>([]);

  useEffect(() => {
    (async () => {
      const data = await refetchListYoutube();
      if (data?.data?.data.entities) {
        const listAccount = [...dataListYoutube, ...data.data.data.entities];
        const sortData = listAccount.sort((a, b) => {
          return a.name_channel?.toLowerCase() > b.name_channel?.toLowerCase() ? 1 : -1;
        });
        setDataListYoutube(sortData);
      }
    })();
  }, [pagination.currentPage]);

  const handleLoadMoreAccount = () => {
    const total = dataPagination?.total ?? 0;
    const hasMore = dataListYoutube.length > 0 && dataListYoutube.length < total;
    if (!loadingListYoutube && hasMore) {
      pagination.onChange(pagination.currentPage + 1);
    }
  };

  const steps = [
    {
      key: STEP_TRANSLATE.STEP_1,
      title: t('translator.selectVideo'),
    },
    {
      key: STEP_TRANSLATE.STEP_2,
      title: t('translator.languages'),
    },
    {
      key: STEP_TRANSLATE.STEP_3,
      title: t('translator.customize'),
    },
    {
      key: STEP_TRANSLATE.STEP_4,
      title: t('translator.reviewAndPublish'),
    },
  ];

  const [current, setCurrent] = useState(STEP_TRANSLATE.STEP_1);
  const [videoSelected, setVideoSelected] = useState<any>(null);
  const [accountSelected, setAccountSelected] = useState<string>('');
  const [dataTable, setDataTable] = useState<IVideoYoutube[]>([]);
  const [pageToken, setPageToken] = useState<string>('');
  const [totalResults, setTotalResults] = useState<number>(0);
  const [originalLanguageSelected, setOriginalLanguageSelected] = useState<string | null>(null);
  const [translationLanguageSelected, setTranslationLanguageSelected] = useState<string[]>([]);
  const [openModalFinish, setOpenModalFinish] = useState<boolean>(false);
  const [originalLanguageError, setOriginalLanguageError] = useState<string>('');
  const [translationLanguageError, setTranslationLanguageError] = useState<string>('');
  const [searchParams, setSearchParams] = useState<string>('');
  const [refreshVideo, setRefreshVideo] = useState<boolean>(false);
  const [defaultCaptions, setDefaultCaptions] = useState<ICaptionDetail[]>([]);
  const [excludeCaptions, setExcludeCaptions] = useState<string[]>([]);
  const [listVideoTranslated, setListVideoTranslated] = useState<
    {
      lang: string;
      content: ICaptionDetail[];
    }[]
  >([]);
  const [listTranslationLanguage, setListTranslationLanguage] = useState<string[]>([]);
  const [listTranslationLanguageError, setListTranslationLanguageError] = useState<string[]>([]);
  const videoIdRef = useRef<string>('');
  const excludeCaptionRef = useRef<string[]>([]);
  const captionRef = useRef<ICaptionDetail[]>([]);
  const listVideoTranslatedRef = useRef<{ lang: string; content: ICaptionDetail[] }[]>([]);

  const refreshVideoMutate = useRefreshVideosMutate();
  const publishCaption = usePublishCaption();
  const getCaptionPushHistory = useGetCaptionPushHistoryMutation();
  const dispatch = useAppDispatch();
  const translateCaption = useTransCaption();

  const {
    data: dataListLanguage,
    refetch: refetchListLanguage,
    isFetching: loadingListLanguage,
  } = useGetListLanguage(
    {
      youtube_account_id: Number(accountSelected),
    },
    false
  );

  const {
    data: dataListYoutubeLanguage,
    refetch: refetchListYoutubeLanguage,
    isFetching: loadingListYoutubeLanguage,
  } = useGetListYoutubeLanguage(
    {
      youtube_account_id: Number(accountSelected),
    },
    false
  );

  const { mutate: getCaptionDetailMutate, isPending: getCaptionDetailPending } =
    useGetCaptionDetail();

  const listOptionsAccount = dataListYoutube
    ? dataListYoutube.map((item) => {
        return {
          value: item.id.toString(),
          label: item.name_channel,
        };
      })
    : [];

  const listOptionsLanguage = dataListLanguage?.data
    ? dataListLanguage?.data?.map((item) => {
        return {
          value: item.code,
          label: item.name,
        };
      })
    : [];

  const listOptionsYoutubeLanguage = dataListYoutubeLanguage?.data?.items
    ? dataListYoutubeLanguage?.data?.items?.map((item) => {
        return {
          value: item.id,
          label: item.snippet.name,
        };
      })
    : [];

  useEffect(() => {
    if (listOptionsAccount && !accountSelected) {
      setAccountSelected(listOptionsAccount[0]?.value ?? '');
    }
  }, [listOptionsAccount, accountSelected]);

  useEffect(() => {
    dispatch(setIsProgress(!!videoSelected));
  }, [videoSelected, setIsProgress]);

  const handleGetListVideo = async () => {
    if (!accountSelected) return;

    try {
      let params: any = {
        youtube_account_id: Number(accountSelected),
      };

      if (pageToken) {
        params = {
          youtube_account_id: Number(accountSelected),
          page_token: pageToken,
        };
      }

      if (searchParams) {
        params = {
          youtube_account_id: Number(accountSelected),
          page_token: pageToken,
          text: searchParams,
        };
      }

      const dataListVideo = await videosYoutube(params);

      const nextPageToken = dataListVideo?.data?.nextPageToken ?? '';
      const totalResults = dataListVideo?.data?.pageInfo?.totalResults ?? 0;
      setPageToken(nextPageToken);
      setTotalResults(totalResults);

      setDataTable([...dataTable, ...dataListVideo.data.items]);
    } catch (error: any) {
      if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
      notification.error({ message: error.data.message });
    }
  };

  const handleChangeAccount = (value: string) => {
    setAccountSelected(value);
    setVideoSelected(null);
    setDataTable([]);
    setPageToken('');
  };

  const handleRefreshVideo = () => {
    const payload = { youtube_account_id: Number(accountSelected) };

    refreshVideoMutate.mutate(payload, {
      onSuccess() {
        setVideoSelected(null);
        setDataTable([]);
        setPageToken('');
        setRefreshVideo((prev) => !prev);
      },
    });
  };

  const handleParamsChange = (value: string) => {
    setSearchParams(value);
    setVideoSelected(null);
    setDataTable([]);
    setPageToken('');
  };

  useEffect(() => {
    handleGetListVideo();
  }, [accountSelected, searchParams, refreshVideo]);

  const {
    data: detailVideo,
    refetch: refetchDetailVideo,
    isFetching: loadingDetailVideo,
  } = useGetDetailVideoYoutube(
    {
      youtube_account_id: Number(accountSelected),
      video_id: videoSelected?.id,
    },
    false
  );

  const defaultLanguage = detailVideo?.data?.snippet?.defaultAudioLanguage ?? 'en';

  useEffect(() => {
    if (!defaultLanguage) return;
    setOriginalLanguageSelected(defaultLanguage);
  }, [defaultLanguage, videoSelected]);

  const disabledNextBtn =
    loadingListYoutube ||
    loadingListLanguage ||
    loadingListYoutubeLanguage ||
    loadingDetailVideo ||
    getCaptionDetailPending ||
    !listOptionsAccount.length ||
    (current === STEP_TRANSLATE.STEP_3 && !defaultCaptions.length);

  const handleToggleModalFinish = () => {
    setOpenModalFinish((prev) => !prev);
  };

  const handleTranslateText = () => {
    if (!accountSelected || !videoSelected || !translationLanguageSelected.length) return;

    const currentTranslationLanguage = listVideoTranslated.map((item) => item.lang);

    const changeTranslationLanguage = translationLanguageSelected.filter((newLocale) => {
      const result = currentTranslationLanguage.find(
        (currentLocale) => currentLocale === newLocale
      );
      return result ? false : true;
    });

    const isChangeDefaultCaptions =
      JSON.stringify(defaultCaptions) !== JSON.stringify(captionRef.current);

    const isChangeVideoId = videoIdRef.current !== videoSelected.id;

    const changeExcludeCaption =
      excludeCaptionRef.current.length > excludeCaptions.length
        ? excludeCaptionRef.current.filter(
            (currentExclude) => !excludeCaptions.includes(currentExclude)
          )
        : excludeCaptions.filter((newExclude) => !excludeCaptionRef.current.includes(newExclude));

    const isChangeExcludeCaption = changeExcludeCaption.length > 0;

    const isTranslateAllLocale =
      isChangeVideoId || isChangeDefaultCaptions || isChangeExcludeCaption;

    const isTranslateChangeLocale =
      !isChangeVideoId &&
      !isChangeDefaultCaptions &&
      !isChangeExcludeCaption &&
      changeTranslationLanguage.length > 0;

    const isTranslateVideo = isTranslateAllLocale || isTranslateChangeLocale;

    if (!isTranslateVideo) return;

    const languages = isTranslateAllLocale
      ? translationLanguageSelected
      : changeTranslationLanguage;

    setListTranslationLanguage(languages);

    const parseDefaultCaptions = defaultCaptions.map((item) => {
      return { ...item, text: htmlDecode(item.text) ?? '' };
    });

    translateCaption.onTranslate(
      {
        languages: languages,
        exclude_captions: excludeCaptions,
        captions: parseDefaultCaptions,
      },
      {
        onSuccess(response) {
          const filterVideoTranslated = languages.map((locale) => {
            const findVideo = response.find(
              (item: { lang: string; content: ICaptionDetail[] }) => item.lang === locale
            );
            return findVideo;
          });
          const otherTranslationLanguage = translationLanguageSelected.filter(
            (locale) => !languages.includes(locale)
          );
          const excludeVideoTranslated = otherTranslationLanguage.map((locale) => {
            const findVideo = listVideoTranslated.find((item) => item.lang === locale);
            return findVideo;
          });
          const listVideo = isTranslateAllLocale
            ? filterVideoTranslated
            : [...excludeVideoTranslated, ...filterVideoTranslated];
          setListVideoTranslated(listVideo as { lang: string; content: ICaptionDetail[] }[]);
          videoIdRef.current = videoSelected.id;
          captionRef.current = defaultCaptions;
          excludeCaptionRef.current = excludeCaptions;
          listVideoTranslatedRef.current = JSON.parse(JSON.stringify(listVideo)) as {
            lang: string;
            content: ICaptionDetail[];
          }[];
        },
        onError() {
          setListTranslationLanguageError(languages);
        },
      }
    );
  };

  const handleGetCaptionHistoryPush = () => {
    if (accountSelected && videoSelected?.id) {
      getCaptionPushHistory.mutate(
        {
          youtube_account_id: accountSelected,
          video_id: videoSelected?.id,
        },
        {
          onSuccess(response) {
            const captions = JSON.parse(response?.data?.content);
            const defaultLanguage = response?.data?.default_lang;

            const findCaptionDefaults = captions.find(
              (item: { lang: string; content: ICaptionDetail[] }) => item.lang === defaultLanguage
            );

            const otherCaptions = captions.filter(
              (item: { lang: string; content: ICaptionDetail[] }) => item.lang !== defaultLanguage
            );

            const excludes = response.data?.exclude_text
              ? JSON.parse(response.data?.exclude_text)
              : [];

            const translationLanguageSelected = otherCaptions.map((item: any) => item.lang);

            const listVideo = otherCaptions;

            setTranslationLanguageSelected(translationLanguageSelected);
            setListVideoTranslated(listVideo);
            findCaptionDefaults && setDefaultCaptions(findCaptionDefaults.content);
            setExcludeCaptions(excludes);
            videoIdRef.current = videoSelected.id;
            listVideoTranslatedRef.current = JSON.parse(JSON.stringify(listVideo));
            excludeCaptionRef.current = JSON.parse(JSON.stringify(excludes));
            captionRef.current = JSON.parse(JSON.stringify(findCaptionDefaults.content));
          },
        }
      );
    }
  };

  const next = () => {
    if (disabledNextBtn) return;

    if (current === STEP_TRANSLATE.STEP_1) {
      if (!videoSelected) {
        notification.error({ message: t('translator.noVideo') });
        return;
      }
      handleGetCaptionHistoryPush();
    }
    if (current === STEP_TRANSLATE.STEP_2) {
      if (!originalLanguageSelected) {
        setOriginalLanguageError(t('validate.requiredField', { ns: 'common' }));
        return;
      }
      if (!translationLanguageSelected.length) {
        setTranslationLanguageError(t('validate.requiredField', { ns: 'common' }));
        return;
      }
      if (originalLanguageError || translationLanguageError) return;
    }
    if (current === STEP_TRANSLATE.STEP_3) {
      handleTranslateText();
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleResetState = () => {
    setOriginalLanguageSelected('');
    setTranslationLanguageSelected([]);
    setOriginalLanguageError('');
    setTranslationLanguageError('');
    setExcludeCaptions([]);
    setDefaultCaptions([]);
    setListVideoTranslated([]);
    setListTranslationLanguage([]);
    setListTranslationLanguageError([]);
    videoIdRef.current = '';
    excludeCaptionRef.current = [];
    captionRef.current = [];
    listVideoTranslatedRef.current = [];
  };

  const handleChangeVideo = (record: any) => {
    if (videoSelected && record.id === videoSelected.id) return;
    setVideoSelected(record);
    handleResetState();
  };

  const onGetCaptionDetail = () => {
    return new Promise<ICaptionDetail[]>((resolve) => {
      originalLanguageSelected &&
        getCaptionDetailMutate(
          {
            youtube_account_id: accountSelected,
            video_id: videoSelected.id,
            default_lang: defaultLanguage,
            original_lang: originalLanguageSelected,
          },
          {
            onSuccess(response) {
              setDefaultCaptions(response.data);
              resolve(response.data);
            },
            onError(error: any) {
              if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
              notification.error({ message: error.data.message });
            },
          }
        );
    });
  };

  const disabledPublishBtn =
    !accountSelected ||
    !videoSelected ||
    !listVideoTranslated.length ||
    !originalLanguageSelected ||
    listTranslationLanguageError.length > 0;

  const handlePublish = () => {
    if (disabledPublishBtn) return;

    const isDuplicateDefaultLanguage =
      translationLanguageSelected.includes(defaultLanguage) ||
      originalLanguageSelected === defaultLanguage;

    const content = [
      {
        lang: originalLanguageSelected,
        content: defaultCaptions,
      },
      ...(!isDuplicateDefaultLanguage ? [{ lang: defaultLanguage, content: defaultCaptions }] : []),
      ...listVideoTranslated,
    ];

    publishCaption.onPublish(
      {
        video_id: videoSelected.id,
        youtube_account_id: accountSelected,
        content: content,
        defaultLang: originalLanguageSelected,
        exclude_text: JSON.stringify(excludeCaptions),
      },
      {
        onSuccess(response) {
          setCurrent(STEP_TRANSLATE.STEP_1);
          handleToggleModalFinish();

          const payload = { youtube_account_id: Number(accountSelected) };

          refreshVideoMutate.mutate(payload, {
            onSuccess() {
              const updateTable = dataTable.map((item) => {
                return item.id.videoId === response.id
                  ? {
                      ...item,
                      is_push_caption: true,
                    }
                  : item;
              });
              setDataTable(updateTable);

              const findVideo = updateTable.find((item) => item.id.videoId === response.id);
              if (!findVideo) return;

              const updateVideoSelected = {
                key: findVideo.id.videoId,
                id: findVideo.id.videoId,
                picture: findVideo.snippet.thumbnails.default.url,
                channelId: findVideo.snippet.channelId,
                channelTitle: findVideo.snippet.channelTitle,
                title: findVideo.snippet.title,
                description: findVideo.snippet.description,
                date: findVideo.snippet.publishedAt,
                translated: findVideo?.is_push,
                captionized: true,
              };

              setVideoSelected(updateVideoSelected);
            },
          });
        },
      }
    );
  };

  const handleClearCaption = () => {
    setDefaultCaptions([]);
    setExcludeCaptions([]);
  };

  const handleRestoreTranslation = () => {
    const restoreListVideo = JSON.parse(JSON.stringify(listVideoTranslatedRef.current));
    setListVideoTranslated(restoreListVideo);
    return restoreListVideo;
  };

  return {
    steps,
    current,
    prev,
    next,
    dataTable,
    totalResults,
    listOptionsAccount,
    accountSelected,
    videoSelected,
    setVideoSelected,
    handleGetListVideo,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleChangeVideo,
    defaultLanguage,
    listOptionsLanguage,
    listOptionsYoutubeLanguage,
    originalLanguageSelected,
    translationLanguageSelected,
    originalLanguageError,
    translationLanguageError,
    setOriginalLanguageSelected,
    setTranslationLanguageSelected,
    setOriginalLanguageError,
    setTranslationLanguageError,
    refetchListLanguage,
    refetchListYoutubeLanguage,
    refetchDetailVideo,
    openModalFinish,
    handleToggleModalFinish,
    disabledNextBtn,
    handlePublish,
    getCaptionDetailPending,
    onGetCaptionDetail,
    defaultCaptions,
    setDefaultCaptions,
    excludeCaptions,
    setExcludeCaptions,
    listVideoTranslated,
    setListVideoTranslated,
    loadingTranslate: translateCaption.isPending,
    listTranslationLanguage,
    listTranslationLanguageError,
    handleClearCaption,
    loadingPublish: publishCaption.isPending,
    disabledPublishBtn,
    handleRestoreTranslation,
    handleLoadMoreAccount,
  };
};

export default useTranslateCaption;

        ### 📄 src/components/cloud-software/captionizer/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/constants, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ContainerTitleLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SubTitle = styled.h2`
  color: var(--text-main-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContainerTitleRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.div`
  color: var(--primary-color);
  font-size: 26px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const StepButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  gap: 12px;
  &:disabled {
    color: var(--white);
    background: #99b9d7;
  }
`;

export const PublishButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  background: #28b473 !important;
  gap: 12px;
  &:hover {
    background: #28b473 !important;
  }
  &:disabled {
    color: var(--white);
    opacity: 0.6;
  }
`;

export const SelectedVideo = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--border-base-color);
  width: 860px;
  padding: 12px;
`;

export const ImageWrapper = styled.div`
  width: 131px;
  height: 90px;
  margin-right: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const SelectedTitle = styled.div`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
  text-transform: capitalize;

  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
`;

export const SelectedDesc = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};

  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
`;

export const SelectedDate = styled.div`
  color: #d9d9d9;
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
`;

        ### 📄 src/components/cloud-software/captionizer/action-hook.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/hooks/features/useCaptionize, @/hooks/useFeedback, @/interfaces/cloud-software, react`
* ww **Hooks:** `useTranslateCaptionMutation, usePublishCaptionMutation, useFeedback`

        ```ts
        import {
  usePublishCaptionMutation,
  useTranslateCaptionMutation,
} from '@/hooks/features/useCaptionize';
import { useFeedback } from '@/hooks/useFeedback';
import { ICaptionDetail } from '@/interfaces/cloud-software';
import { useState } from 'react';

export const usePublishCaption = () => {
  const publishCaption = usePublishCaptionMutation();
  const [isPending, setIsPending] = useState<boolean>(false);
  const { notification } = useFeedback();

  const onPublish = async (
    {
      video_id,
      youtube_account_id,
      content,
      exclude_text,
      defaultLang,
    }: {
      video_id: string;
      youtube_account_id: string;
      content: { lang: string; content: ICaptionDetail[] }[];
      defaultLang: string;
      exclude_text: string;
    },
    { onSuccess }: { onSuccess: (response: { id: string | number }) => void }
  ) => {
    setIsPending(true);
    try {
      for (const contentItem of content) {
        const payload = {
          youtube_account_id,
          video_id,
          lang: contentItem.lang,
          content: JSON.stringify(contentItem.content),
          exclude_text: exclude_text,
          is_default_lang: defaultLang === contentItem.lang,
        };
        await publishCaption.mutateAsync(payload);
      }
      setIsPending(false);
      onSuccess({ id: video_id });
    } catch (error: any) {
      setIsPending(false);
      if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
      notification.error({ message: error.data.message });
    }
  };

  return {
    onPublish,
    isPending,
  };
};

export const useTransCaption = () => {
  const translateCaption = useTranslateCaptionMutation();
  const [isPending, setIsPending] = useState<boolean>(false);

  const onTranslate = async (
    {
      languages,
      exclude_captions,
      captions,
    }: {
      languages: string[];
      exclude_captions: string[];
      captions: ICaptionDetail[];
    },
    {
      onSuccess,
      onError,
    }: {
      onSuccess: (response: { lang: string; content: ICaptionDetail[] }[]) => void;
      onError: () => void;
    }
  ) => {
    const result = [];
    setIsPending(true);
    try {
      for (const lang of languages) {
        const response = await translateCaption.mutateAsync({
          languages: [lang],
          exclude_captions: exclude_captions,
          captions: captions,
        });
        result.push(...response.data);
      }
      onSuccess(result);
      setIsPending(false);
    } catch (err) {
      onError();
      setIsPending(false);
    }
  };
  return {
    onTranslate,
    isPending,
  };
};

        ### 📄 src/components/cloud-software/captionizer/components/review-translation/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-loading.svg, @/assets/images/translator/unknow-flag.png, @/interfaces/cloud-software, @/utils, next-i18next`...
* 🧩 **Component (Arrow):** `ReviewTranslation`
* ww **Hooks:** `useMemo, useState, useTranslation, useTranslator`

        ```typescript
        import IconLoading from '@/assets/images/svg/icon-loading.svg';
import UnknowFlagImage from '@/assets/images/translator/unknow-flag.png';
import { ICaptionDetail } from '@/interfaces/cloud-software';
import { fromLangCodeToCountryCode, sleep } from '@/utils';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { CaptionContent } from '../exclude-translation/caption-content';
import { useTranslator } from './../../';
import * as S from './index.styles';

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  loadingTranslate: boolean;
  translationLanguageSelected: string[];
  listOptionsLanguage: IOption[];
  listTranslationLanguageError: string[];
  listTranslationLanguage: string[];
  handleRestoreTranslation: () => { lang: string; content: ICaptionDetail[] }[];
}

// eslint-disable-next-line react/display-name
const ContentItem = React.forwardRef<
  any,
  {
    locale: string;
    indexContent: number;
  }
>((props, ref) => {
  const { locale, indexContent } = props;
  const { listVideoTranslated, setListVideoTranslated } = useTranslator();
  const captionContent = listVideoTranslated.find((item) => item.lang === locale);

  const onChangeCaptions = (v: string, itemIndex: number) => {
    const cloneList = [...listVideoTranslated];
    try {
      cloneList[indexContent].content[itemIndex].text = v;
      setListVideoTranslated(cloneList);
    } catch (err) {
      return;
    }
  };

  return (
    <CaptionContent
      defaultCaptions={captionContent?.content}
      handleTextSelected={() => null}
      handleChangeCaptions={onChangeCaptions}
      ref={ref}
    />
  );
});

const ReviewTranslation: React.FC<IProps> = (props) => {
  const {
    loadingTranslate,
    translationLanguageSelected,
    listOptionsLanguage,
    listTranslationLanguage,
    listTranslationLanguageError,
    handleRestoreTranslation,
  } = props;

  const { t } = useTranslation(['cloud-software', 'common']);
  const { listVideoTranslated, setListVideoTranslated } = useTranslator();

  const captionContentRefs = React.useRef<{ onRestore: (v: ICaptionDetail[]) => void }[]>([]);

  const defaultPanes = useMemo(
    () =>
      translationLanguageSelected.map((locale, index) => {
        const optionlanguage = listOptionsLanguage.find((item) => item.value === locale);
        const countryCode = fromLangCodeToCountryCode(locale);

        return {
          key: index.toString(),
          title: optionlanguage?.label,
          content: (
            <ContentItem
              locale={locale}
              indexContent={index}
              ref={(element) => (captionContentRefs.current[index] = element)}
            />
          ),
          locale: locale,
          icon: countryCode ? (
            <ReactCountryFlag countryCode={countryCode} svg />
          ) : (
            <Image src={UnknowFlagImage} alt="unknow" width={20} height={16} />
          ),
        };
      }),
    [
      loadingTranslate,
      translationLanguageSelected,
      listOptionsLanguage,
      listTranslationLanguage,
      listTranslationLanguageError,
      listVideoTranslated,
    ]
  );

  const [activeKey, setActiveKey] = useState(defaultPanes[0]?.key ?? '');

  const [items, setItems] = useState(defaultPanes);

  const onChange = (key: string) => {
    setActiveKey(key);
    setItems([]);
    sleep(50).then(() => {
      setItems(defaultPanes);
    });
  };

  const remove = (targetKey: string, locale: string) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);

    const updateListVideoTranslated = listVideoTranslated.filter((item) => item.lang !== locale);
    setListVideoTranslated(updateListVideoTranslated);
  };

  const handleClickRestore = () => {
    setItems(defaultPanes);
    const restoreList = handleRestoreTranslation();
    try {
      restoreList?.map((item, index) => {
        captionContentRefs.current[index]?.onRestore(item.content);
      });
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>{t('translator.reviewTranslation')}</S.Title>
        {items.length > 0 ? (
          <S.TabList tabPosition="left" activeKey={activeKey} onChange={onChange}>
            {items?.map((pane) => (
              <S.WrapperTabItem
                tab={
                  <S.TabItem>
                    <S.LanguageItem>
                      <S.Flag>{pane.icon}</S.Flag>
                      <S.Language>{pane.title}</S.Language>
                      {!loadingTranslate && listTranslationLanguageError.includes(pane.locale) && (
                        <S.IconErrorText />
                      )}
                    </S.LanguageItem>

                    {loadingTranslate ? (
                      listTranslationLanguage.includes(pane.locale) ? (
                        <S.IconLoadingTab />
                      ) : (
                        pane.key === activeKey && (
                          <S.IconClose onClick={() => remove(pane.key, pane.locale)} />
                        )
                      )
                    ) : (
                      pane.key === activeKey && (
                        <S.IconClose onClick={() => remove(pane.key, pane.locale)} />
                      )
                    )}
                  </S.TabItem>
                }
                key={pane.key}
              >
                {loadingTranslate && listTranslationLanguage.includes(pane.locale) ? (
                  <S.WrapperLoading>
                    <S.Icon>
                      <IconLoading />
                    </S.Icon>
                    <S.Text>{t('translator.translatingVideo')}</S.Text>
                    <S.Text>{t('translator.waitingTranslateDesc')}</S.Text>
                  </S.WrapperLoading>
                ) : (
                  pane.content
                )}
              </S.WrapperTabItem>
            ))}
          </S.TabList>
        ) : (
          <div style={{ height: 500 }}></div>
        )}
      </S.Wrapper>

      <S.WrapperButton>
        <S.RestoreButton type="primary" onClick={handleClickRestore}>
          <S.IconButton />
          {t('translator.restoreTranslation')}
        </S.RestoreButton>
      </S.WrapperButton>
    </>
  );
};

export default ReviewTranslation;

        ### 📄 src/components/cloud-software/captionizer/components/review-translation/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/cloud-software/icon-refresh.svg, @/assets/images/svg/icon-error.svg, @/assets/images/svg/icon-loading.svg, @/components/common/base-button, @/components/common/inputs/base-input`...

        ```ts
        import IconRefresh from '@/assets/images/svg/cloud-software/icon-refresh.svg';
import IconError from '@/assets/images/svg/icon-error.svg';
import IconLoading from '@/assets/images/svg/icon-loading.svg';
import { BaseButton } from '@/components/common/base-button';
import { BaseInput } from '@/components/common/inputs/base-input';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { CloseCircleFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import styled from 'styled-components';

const { TabPane } = Tabs;

export const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  padding: 24px;
`;

export const Title = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const TabList = styled(Tabs)`
  margin-top: 24px;

  .ant-tabs-content {
    position: sticky;
    top: 0;
  }

  .ant-tabs-tabpane {
    padding-right: 24px;
  }

  .ant-tabs-tab {
    padding: 18px 36px !important;
    border: 1px solid var(--border-base-color);
    border-top: none;
    border-right: none;
    margin: 0 !important;
    width: 350px;
    height: 60px;
    padding-right: 24px !important;

    &:first-child {
      border-top: 1px solid var(--border-base-color);
      border-radius: 8px 0px 0px 0px;
    }

    &.ant-tabs-tab-active {
      background: #f5f5f5;
      div {
        span {
          font-weight: ${FONT_WEIGHT.bold};
        }
      }
    }
  }

  .ant-tabs-tab-btn {
    width: 100%;
  }

  .ant-tabs-content-holder {
    border-radius: 0px 8px 8px 0px;
    border: 1px solid var(--border-base-color);
  }

  .ant-tabs-ink-bar {
    background: #ff5252;
    width: 4px !important;
  }
`;

export const WrapperTabItem = styled(TabPane)``;

export const TabItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LanguageItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Flag = styled.span`
  margin-right: 16px;
`;

export const Language = styled.span`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.regular};
`;

export const IconClose = styled(CloseCircleFilled)`
  margin-left: 1rem;
  path {
    fill: #bec0c6;
  }
`;

export const IconErrorText = styled(IconError)`
  zoom: 0.4 !important;
  margin-left: 2rem;
`;

export const IconLoadingTab = styled(IconLoading)`
  zoom: 0.3 !important;
  margin-left: 2rem;
`;

export const WrapperContent = styled.div`
  padding: 24px;
  padding-left: 0px;
`;

export const InputTitle = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 12px;
`;

export const InputDescription = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 12px;
  margin-top: 32px;
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const Input = styled(BaseInput)``;

export const Textarea = styled(BaseInput.TextArea)``;

export const WrapperButton = styled.span`
  display: flex;
  justify-content: center;
`;

export const RestoreButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 32px;
  margin-bottom: 1rem;
  padding: 0 24px;
  background: #28b473 !important;
  gap: 12px;
  &:hover {
    background: #28b473 !important;
  }
`;

export const IconButton = styled(IconRefresh)`
  path {
    fill: var(--white);
  }
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;

export const WrapperLoading = styled.div`
  padding: 24px;
  padding-left: 0px;
  height: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  color: #404040;
  text-align: center;
  font-size: 16px;
  font-weight: ${FONT_WEIGHT.medium};
  margin-bottom: 1rem;
`;

        ### 📄 src/components/cloud-software/captionizer/components/exclude-translation/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/interfaces/cloud-software, @ant-design/icons, next-i18next`
* 🧩 **Component (Arrow):** `ExcludeTranslation`
* ww **Hooks:** `useTranslation`

        ```typescript
        import { BaseButton } from '@/components/common/base-button';
import { ICaptionDetail } from '@/interfaces/cloud-software';
import { CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import React, { useRef } from 'react';

import { CaptionContent } from './caption-content';
import * as S from './index.styles';

interface IProps {
  defaultCaptions: ICaptionDetail[];
  excludeCaptions: string[];
  setExcludeCaptions: React.Dispatch<React.SetStateAction<string[]>>;
  setDefaultCaptions: React.Dispatch<React.SetStateAction<ICaptionDetail[]>>;
  onGetCaptionDetail: () => Promise<ICaptionDetail[]>;
  getCaptionDetailPending: boolean;
  handleClearCaptions: () => void;
}

const ExcludeTranslation: React.FC<IProps> = (props) => {
  const {
    defaultCaptions,
    excludeCaptions,
    getCaptionDetailPending,
    setExcludeCaptions,
    onGetCaptionDetail,
    setDefaultCaptions,
    handleClearCaptions,
  } = props;

  const { t } = useTranslation(['cloud-software', 'common']);

  const existCaptionRef = useRef<string>('');
  const captioncontentRef = useRef<{ onRestore: (v: ICaptionDetail[]) => void }>();

  const handleTextSelected = () => {
    let textSelected = '';

    if (window.getSelection) {
      textSelected = window.getSelection()?.toString().trim() ?? '';
    } else if (document.getSelection) {
      textSelected = document.getSelection()?.toString().trim() ?? '';
    }
    existCaptionRef.current = textSelected;
  };

  const handleChangeCaptions = (v: string, index: number) => {
    const cloneDefaultCaptions = [...defaultCaptions];
    cloneDefaultCaptions[index] = {
      ...cloneDefaultCaptions[index],
      text: v,
    };
    setDefaultCaptions(cloneDefaultCaptions);
  };

  const handleExclude = () => {
    setExcludeCaptions((prev) => {
      return existCaptionRef.current && !prev.includes(existCaptionRef.current)
        ? [...prev, existCaptionRef.current]
        : prev;
    });
    existCaptionRef.current = '';
  };

  const handleRemoveTitle = (text: string) => {
    setExcludeCaptions((prev) => prev.filter((item) => item !== text));
  };

  const onReadCaptionFromYoutube = () => {
    onGetCaptionDetail().then((data) => {
      captioncontentRef.current?.onRestore(data);
    });
  };

  return (
    <S.Wrapper>
      <S.Title>{t('translator.excludeTranslation')}</S.Title>
      <S.WrapButton>
        <S.ReadButton
          type="primary"
          onClick={onReadCaptionFromYoutube}
          loading={getCaptionDetailPending}
        >
          {t('translator.read_captions_from_youtube')}
        </S.ReadButton>
        <BaseButton type="primary" danger onClick={handleClearCaptions}>
          {t('translator.clear_captions')}
        </BaseButton>
      </S.WrapButton>

      <S.WrapExclusion>
        <S.ExclusionTitle>{t('translator.exclusion')}:</S.ExclusionTitle>
        <S.WrapperExclusionTag>
          {excludeCaptions.map((text, index) => (
            <S.ExclusionTag key={index}>
              {text}
              <CloseOutlined style={{ fontSize: '10px' }} onClick={() => handleRemoveTitle(text)} />
            </S.ExclusionTag>
          ))}
        </S.WrapperExclusionTag>
      </S.WrapExclusion>

      {!!defaultCaptions?.length && (
        <CaptionContent
          defaultCaptions={defaultCaptions}
          handleTextSelected={handleTextSelected}
          handleChangeCaptions={handleChangeCaptions}
          ref={captioncontentRef}
        />
      )}

      {!!defaultCaptions?.length && (
        <S.WrapExcludeButton>
          <BaseButton type="primary" onClick={handleExclude}>
            {t('translator.exclude')}
          </BaseButton>
        </S.WrapExcludeButton>
      )}
    </S.Wrapper>
  );
};

export default ExcludeTranslation;

        ### 📄 src/components/cloud-software/captionizer/components/exclude-translation/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/constants, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  padding: 24px;
`;

export const Title = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const WrapperExclusionTag = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ExclusionTag = styled.div`
  display: flex;
  padding: 4px 4px 4px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #d04545;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.regular};
  color: var(--white);
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const WrapExclusion = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
  align-items: center;
`;

export const ExclusionTitle = styled.p`
  color: var(--primary-color);
  font-weight: ${FONT_WEIGHT.bold};
`;

export const WrapExcludeButton = styled.div`
  display: flex;
  margin-top: 1.6rem;
  align-items: center;
  flex-direction: column;
`;

export const TextError = styled.p`
  color: #ff0000;
`;

export const ReadButton = styled(BaseButton)`
  background: #28b473 !important;
  &:hover {
    background: #28b473 !important;
  }
`;

        ### 📄 src/components/cloud-software/captionizer/components/exclude-translation/caption-content/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces/cloud-software, next-i18next, react-virtualized`
* ww **Hooks:** `useEffect, useImperativeHandle, useTranslation`

        ```typescript
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
  const [_, setIsResize] = useState<boolean>(false);

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
                    rowIndex={index}
                  >
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

        ### 📄 src/components/cloud-software/captionizer/components/exclude-translation/caption-content/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants/theme, styled-components`

        ```ts
        import { FONT_WEIGHT } from '@/constants/theme';
import styled from 'styled-components';

export const WrapCaptionTitle = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1.4rem;
`;

export const TimeTitle = styled.div`
  width: 260px;
  color: var(--primary-color);
  font-weight: ${FONT_WEIGHT.bold};
`;

export const ExistCaptionTitle = styled.div`
  color: var(--primary-color);
  font-weight: ${FONT_WEIGHT.bold};
`;

export const WrapCaptionItems = styled.div`
  /* max-height: 500px; */
  /* overflow-y: auto; */
  padding-bottom: 2rem;
`;

        ### 📄 src/components/cloud-software/captionizer/components/exclude-translation/caption-content/caption-item/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/inputs/base-input, @/interfaces/cloud-software, @/utils, lodash`
* ww **Hooks:** `useEffect, useImperativeHandle`

        ```typescript
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

        ### 📄 src/components/cloud-software/captionizer/components/exclude-translation/caption-content/caption-item/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/inputs/base-input, styled-components`

        ```ts
        import { BaseInput } from '@/components/common/inputs/base-input';
import styled from 'styled-components';

export const Time = styled.div`
  width: 260px;
`;

export const WrapperTextarea = styled.div`
  flex: 1;
`;

export const Textarea = styled(BaseInput.TextArea)`
  resize: none !important;
  overflow: auto !important;
  min-height: 85px !important;
`;

export const Input = styled(BaseInput)`
  height: 100% !important;
`;

export const CaptionItem = styled.div`
  display: flex;
  gap: 1.4rem;
  margin-top: 16px;
  margin-bottom: 5px;
`;

export const PseudoMargin = styled.div`
  height: 1.1rem;
`;

        ### 📄 src/components/cloud-software/components/CardStatistics.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`

        ```typescript
        import React from 'react';

import * as S from './index.styles';

interface ICardStatistics {
  count: number;
  title: string;
  backgroundColor: string;
  boxShadowColor: string;
  icon: React.ReactNode;
  positionIcon?: boolean; // true: right & false: left
}

const CardStatistics = ({
  count,
  title,
  backgroundColor,
  boxShadowColor,
  icon,
  positionIcon = true,
}: ICardStatistics) => {
  return (
    <S.Card $bgColor={backgroundColor} $boxShadowColor={boxShadowColor}>
      {positionIcon ? (
        <>
          <S.LeftInsideCard>
            <S.NumberInsideCard>{count}</S.NumberInsideCard>
            <S.SubTitleInsideCard>{title}</S.SubTitleInsideCard>
          </S.LeftInsideCard>
          <S.RightInsideCard>{icon}</S.RightInsideCard>
        </>
      ) : (
        <>
          <S.RightInsideCard>{icon}</S.RightInsideCard>
          <S.LeftInsideCard>
            <S.NumberInsideCardLeft>{count}</S.NumberInsideCardLeft>
            <S.SubTitleInsideCard>{title}</S.SubTitleInsideCard>
          </S.LeftInsideCard>
        </>
      )}
    </S.Card>
  );
};

export default CardStatistics;

        ### 📄 src/components/cloud-software/components/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

interface CardProps {
  $bgColor?: string;
  $boxShadowColor?: string;
}

export const Card = styled.div<CardProps>`
  width: 100%;
  height: 113px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: ${({ $bgColor }) => $bgColor};
  box-shadow: ${({ $boxShadowColor }) => `0px 0px 16px 0px ${$boxShadowColor} !important`};
`;

export const LeftInsideCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 8px;
`;

export const RightInsideCard = styled.div`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NumberInsideCard = styled.h2`
  color: var(--colors-nutral-white-white-main, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
`;

export const NumberInsideCardLeft = styled.h2`
  color: var(--colors-nutral-white-white-main, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: end;
`;

export const SubTitleInsideCard = styled.h2`
  color: var(--colors-nutral-white-white-main, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

        ### 📄 src/components/cloud-software/youtube-account/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/cloud-software/icon-menu.svg, @/assets/images/svg/cloud-software/icon-refresh.svg, @/assets/images/svg/cloud-software/icon-total-video.svg, @/assets/images/svg/cloud-software/icon-translated-captions.svg, @/assets/images/svg/cloud-software/icon-translated-videos.svg`...
* ww **Hooks:** `useEffect, useGetDetailUserQuery, useTranslation, useMemo, useAppDispatch, useGetTotalVideoInfo, usePagination`

        ```typescript
        import IconMenu from '@/assets/images/svg/cloud-software/icon-menu.svg';
import IconRefresh from '@/assets/images/svg/cloud-software/icon-refresh.svg';
import IconTotalVideos from '@/assets/images/svg/cloud-software/icon-total-video.svg';
import IconTransCaption from '@/assets/images/svg/cloud-software/icon-translated-captions.svg';
import IconTransVideo from '@/assets/images/svg/cloud-software/icon-translated-videos.svg';
import IconTrash from '@/assets/images/svg/cloud-software/icon-trash.svg';
import IconLimitOfConnect from '@/assets/images/svg/cloud-software/icon-x-limit-of-connect.svg';
import IconYTBAccount from '@/assets/images/svg/cloud-software/icon-ytb-account.svg';
import IconWarning from '@/assets/images/svg/icon-warning.svg';
import { BasePagination } from '@/components/common/base-pagination';
import { NoData } from '@/components/common/no-data';
import { useGetDetailUserQuery } from '@/hooks/features/useUsers';
import { useGetTotalVideoInfo } from '@/hooks/features/useYoutubeAccount';
import { useFeedback } from '@/hooks/useFeedback';
import { usePagination } from '@/hooks/usePagination';
import { LEVEL_USER, LEVEL_USER_LIMIT_CONNECT, User } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import {
  setIsOpenPlanOverview,
  setIsOpenReminderPayment,
  setIsOpenRenewPlan,
} from '@/stores/progress/progress.slice';
import {
  _renderLevelUser,
  checkDateAfterExpired,
  checkDateBeforeExpired,
  checkExpiredDate,
} from '@/utils';
import cookies from '@/utils/cookie';
import { EventEmitter } from 'eventemitter3';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useMemo, useState } from 'react';

import CardStatistics from '../components/CardStatistics';
import useYoutubeAccount from '../index.utils';
import CurrentPlan from './current-plan';
import * as S from './index.styles';

declare global {
  interface Window {
    eventEmitter: EventEmitter;
  }
}

const YoutubeAccountComponent = () => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const { notification } = useFeedback();
  const useDetail = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  // const eventEmitter = new EventEmitter();
  // let newWindow: any;
  const pagination = usePagination();
  const { refetch } = useGetDetailUserQuery(false);

  const {
    dataListYoutube,
    dataPagination,
    refetchListYoutube,
    mutateRefreshTotalVideo,
    mutateConnectYoutube,
    mutateDisconnectYoutube,
  } = useYoutubeAccount(pagination.params);

  const { data: totalVideoInfo, refetch: refetchTotalVideoInfo } = useGetTotalVideoInfo();

  const [itemId, setItemId] = useState<string>('');
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const [isOpenModalLimitConnect, setIsOpenModalLimitConnect] = useState<boolean>(false);
  const [isOpenPopOver, setIsOpenPopOver] = useState<boolean>(false);

  const handleDelete = () => {
    mutateDisconnectYoutube(
      { id: itemId },
      {
        onSuccess() {
          notification.error({ message: t('validate.MC6', { ns: 'common' }) });
          setIsOpenModalDelete(false);
          refetchListYoutube();
          refetchTotalVideoInfo();
        },
      }
    );
  };

  const getTypeUSer = useCallback(
    (user: User) => ({
      isExpired: user?.expire_date && checkExpiredDate(user.expire_date),
      isBeforeExpired: user?.expire_date && checkDateBeforeExpired(user.expire_date, 3),
      isNewUser: !user.level,
    }),
    []
  );

  useEffect(() => {
    if (
      useDetail &&
      getTypeUSer(useDetail).isExpired &&
      checkDateAfterExpired(useDetail.expire_date, 30)
    ) {
      dispatch(setIsOpenRenewPlan(true));
    }
  }, [useDetail, dispatch, getTypeUSer]);

  const isReminder = cookies.get('reminder') ?? 'false';

  const isCanceledPlan = useMemo(() => {
    return (
      !!useDetail?.changeRank &&
      !useDetail?.changeRank.change_rank &&
      !useDetail?.changeRank.keep_yt_account_id.length
    );
  }, [useDetail]);

  useEffect(() => {
    if (
      useDetail &&
      !isCanceledPlan &&
      !useDetail?.payment_before_deadline &&
      getTypeUSer(useDetail).isBeforeExpired
    ) {
      if (JSON.parse(isReminder)) return;
      dispatch(setIsOpenReminderPayment(true));
      cookies.set('reminder', 'true');
    }
  }, [useDetail, dispatch, getTypeUSer]);

  const handleToggleModalDelete = () => {
    setIsOpenModalDelete((prev) => !prev);
  };

  const openSmallWindow = (url: string) => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const width = 500;
    const height = 500;
    const left = screenWidth / 2 - width / 2;
    const top = screenHeight / 2 - height / 2;
    const newWindow = window.open(
      url,
      '',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    // if (newWindow) {
    //   newWindow.eventEmitter = eventEmitter;

    const checkWindowClosed = setInterval(() => {
      if (newWindow?.closed) {
        clearInterval(checkWindowClosed);
        refetchListYoutube();
        refetchTotalVideoInfo();

        try {
          const urlParams = new URLSearchParams(newWindow.location.search);
          const code = urlParams.get('code');
          const message = urlParams.get('message');

          if (code === '400') {
            notification.error({ message: message?.replaceAll('-', ' ') });
          } else {
            notification.success({ message: t('validate.MC5', { ns: 'common' }) });
          }
        } catch (err) {
          // notification.error({ message: 'Something wrong happens' });
        }
      }
    }, 1000);

    // }

    //   const checkWindowClosed = setInterval(() => {
    //     if (newWindow.closed) {
    //       clearInterval(checkWindowClosed);
    //       refetchListYoutube();
    //     }
    //   }, 1000);
    // }

    // setInterval(() => {
    //   console.log(newWindow?.location.href);
    //   // if (newWindow.closed) {
    //   //   clearInterval(checkWindowClosed);
    //   //   refetchListYoutube();
    //   // }
    // }, 1000);
  };

  // const closeChildWindow = () => {
  //   if (newWindow && !newWindow.closed) {
  //     newWindow.postMessage('close', 'close');
  //   }
  // };

  // setTimeout(closeChildWindow, 5000);

  const handleAddAccount = async () => {
    if (useDetail && checkExpiredDate(useDetail.expire_date)) {
      const result = await refetch();
      const userData = result?.data?.data as User;

      const { isExpired, isNewUser } = getTypeUSer(userData);
      if (isNewUser) {
        dispatch(setIsOpenPlanOverview(true));
        return;
      }
      if (isExpired) {
        if (checkDateAfterExpired(userData.expire_date, 30)) {
          dispatch(setIsOpenRenewPlan(true));
          return;
        } else {
          dispatch(setIsOpenPlanOverview(true));
          return;
        }
      }
    }

    mutateConnectYoutube(null, {
      onSuccess(res: any) {
        openSmallWindow(res.data);
      },
    });
  };

  const handleReachOfLimitConnect = () => {
    const level = useDetail?.level?.toUpperCase();
    let limitConnect;
    switch (level) {
      case undefined:
        dispatch(setIsOpenPlanOverview(true));
        return;
      case LEVEL_USER.BRONZE:
        limitConnect = LEVEL_USER_LIMIT_CONNECT.BRONZE;
        break;
      case LEVEL_USER.SILVER:
        limitConnect = LEVEL_USER_LIMIT_CONNECT.SILVER;
        break;
      case LEVEL_USER.GOLD:
        return handleAddAccount();
    }
    return dataListYoutube?.length === limitConnect
      ? setIsOpenModalLimitConnect(true)
      : handleAddAccount();
  };

  const cardStatics = [
    {
      id: 1,
      count: totalVideoInfo?.data?.total_account_youtube ?? 0,
      title: t('youtube.youtube-accounts'),
      backgroundColor: '#369FFF',
      boxShadowColor: 'rgba(54, 159, 255, 0.5)',
      icon: <IconYTBAccount />,
    },
    {
      id: 2,
      count: totalVideoInfo?.data?.total_video ?? 0,
      title: t('youtube.total-videos'),
      backgroundColor: '#FF993A',
      boxShadowColor: 'rgba(255, 153, 58, 0.50)',
      icon: <IconTotalVideos />,
    },
    {
      id: 3,
      count: totalVideoInfo?.data?.total_translated_video ?? 0,
      title: t('youtube.translated-videos'),
      backgroundColor: '#8AC53E',
      boxShadowColor: 'rgba(138, 197, 62, 0.50)',
      icon: <IconTransVideo />,
      positionIcon: false,
    },
    {
      id: 4,
      count: totalVideoInfo?.data?.total_translated_Caption ?? 0,
      title: t('youtube.translated-captions'),
      backgroundColor: '#FFD143',
      boxShadowColor: 'rgba(255, 209, 67, 0.50)',
      icon: <IconTransCaption />,
      positionIcon: false,
    },
  ];

  return (
    <S.Wrapper>
      <S.ContainerTitle>
        <S.ContainerTitleLeft>
          <S.Title>{t('youtube.youtube-account')}</S.Title>
          <S.SubTitle>{t('youtube.manage-and-add-your-youtube-accounts')}</S.SubTitle>
        </S.ContainerTitleLeft>
        <CurrentPlan />
      </S.ContainerTitle>
      <S.ContainerCard>
        {cardStatics &&
          cardStatics.length > 0 &&
          cardStatics.map((el) => (
            <CardStatistics
              key={el.id}
              count={el.count}
              title={el.title}
              backgroundColor={el.backgroundColor}
              boxShadowColor={el.boxShadowColor}
              icon={el.icon}
              positionIcon={el.positionIcon}
            />
          ))}
      </S.ContainerCard>
      <S.ContainerYourAccount>
        <S.WrapperAccount>
          <S.AccountTitle>{t('youtube.your-youtube-accounts')}</S.AccountTitle>
          <S.AccountDesc>
            {dataListYoutube?.length > 1
              ? t('youtube.connected-accounts', {
                  count: dataListYoutube?.length,
                })
              : t('youtube.connected-account', {
                  count: dataListYoutube?.length,
                })}
          </S.AccountDesc>
        </S.WrapperAccount>

        <S.AddAccountButton
          type="primary"
          loading={false}
          onClick={() => handleReachOfLimitConnect()}
        >
          {t('youtube.add-account')}
        </S.AddAccountButton>
      </S.ContainerYourAccount>

      {dataListYoutube?.length > 0 ? (
        <S.ContainerChannel>
          {dataListYoutube?.map((item) => (
            <S.CardYoutubeChannel key={item.id}>
              <S.Avatar
                width={60}
                height={60}
                loader={() => item.picture ?? ''}
                src={item.picture ?? ''}
                alt="avatar"
              ></S.Avatar>
              <S.ChannelInfo>
                <S.ChannelTitle>{item?.name_channel}</S.ChannelTitle>
                <S.ChannelVideo>
                  {item.total_video}{' '}
                  {item.total_video > 1 ? t('youtube.videos') : t('youtube.video')}
                </S.ChannelVideo>
              </S.ChannelInfo>
              <S.Popover
                placement="bottom"
                trigger="click"
                open={item.id === itemId && isOpenPopOver}
                onOpenChange={() => {
                  setItemId(item.id);
                  setIsOpenPopOver(!isOpenPopOver);
                }}
                content={
                  <>
                    <S.MenuButton
                      onClick={async () => {
                        setIsOpenPopOver(false);
                        if (useDetail && checkExpiredDate(useDetail.expire_date)) {
                          const result = await refetch();
                          const userData = result?.data?.data as User;
                          if (getTypeUSer(userData).isExpired) {
                            if (checkDateAfterExpired(userData.expire_date, 30)) {
                              dispatch(setIsOpenRenewPlan(true));
                              return;
                            } else {
                              dispatch(setIsOpenPlanOverview(true));
                              return;
                            }
                          }
                        }

                        mutateRefreshTotalVideo(
                          {
                            id: item.id,
                          },
                          {
                            onSuccess() {
                              notification.success({
                                message: t('youtube.refresh-videos-successfully'),
                              });
                              refetchListYoutube();
                              refetchTotalVideoInfo();
                            },
                            onError(error: any) {
                              if (typeof error?.data?.message !== 'string' || !error?.data?.message)
                                return;
                              notification.error({ message: error.data.message });
                            },
                          }
                        );
                      }}
                    >
                      {t('youtube.refresh-videos')}
                      <IconRefresh />
                    </S.MenuButton>
                    <S.Divider />
                    <S.MenuButton
                      onClick={() => {
                        setIsOpenPopOver(false);
                        handleToggleModalDelete();
                        setItemId(item.id);
                      }}
                    >
                      {t('youtube.delete-account')}
                      <IconTrash />
                    </S.MenuButton>
                  </>
                }
              >
                <S.InfoButton>
                  <IconMenu />
                </S.InfoButton>
              </S.Popover>
            </S.CardYoutubeChannel>
          ))}
        </S.ContainerChannel>
      ) : (
        <NoData subText={t('tryAdd', { ns: 'common' })} titleSize="md" />
      )}
      <S.Pagination>
        {dataPagination && (
          <BasePagination
            current={pagination.currentPage}
            pageSize={pagination.LIMIT}
            onChange={pagination.onChange}
            total={dataPagination?.total ?? 0}
            hideOnSinglePage
          />
        )}
      </S.Pagination>
      {isOpenModalDelete && (
        <S.ModalDelete
          open={isOpenModalDelete}
          onCancel={handleToggleModalDelete}
          footer={false}
          closeIcon={false}
          centered
        >
          <S.ContainerModal>
            <S.ModalTitle>{t('youtube.delete-account')}</S.ModalTitle>
            <S.Icon>
              <IconWarning />
            </S.Icon>
            <S.ModalDesc>
              {t('youtube.delete-account-desc')}
              <br /> {t('youtube.permanently-deleted')}
            </S.ModalDesc>
            <S.ModalBtn>
              <S.Button danger type="primary" onClick={handleDelete}>
                {t('youtube.delete')}
              </S.Button>
              <S.Button onClick={handleToggleModalDelete}>{t('youtube.cancel')}</S.Button>
            </S.ModalBtn>
          </S.ContainerModal>
        </S.ModalDelete>
      )}

      {isOpenModalLimitConnect && (
        <S.ModalLimitConnect
          open={isOpenModalLimitConnect}
          onCancel={() => setIsOpenModalLimitConnect(false)}
          footer={false}
          closeIcon={false}
          width={690}
          centered
        >
          <S.ContainerModal>
            <S.ModalTitle>{t('youtube.limit-of-connection')}</S.ModalTitle>
            <S.Icon>
              <IconLimitOfConnect />
            </S.Icon>
            <div>
              <S.ModalDesc
                dangerouslySetInnerHTML={{
                  __html: t(
                    'youtube.your-current-plan-level',
                    _renderLevelUser(useDetail?.level || '')
                  ),
                }}
              ></S.ModalDesc>
              <S.ModalDesc>{t('youtube.upgrade-your-plan')}</S.ModalDesc>
            </div>
            <S.ModalBtn>
              <S.Button onClick={() => setIsOpenModalLimitConnect(false)}>
                {t('youtube.no-thanks')}
              </S.Button>
              <S.Button
                type="primary"
                onClick={() => {
                  setIsOpenModalLimitConnect(false);
                  dispatch(setIsOpenPlanOverview(true));
                }}
              >
                {t('youtube.upgrade')}
              </S.Button>
            </S.ModalBtn>
          </S.ContainerModal>
        </S.ModalLimitConnect>
      )}
    </S.Wrapper>
  );
};

export default YoutubeAccountComponent;

        ### 📄 src/components/cloud-software/youtube-account/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/components/common/base-modal/BaseModal, @/components/common/base-popover, @/constants, next/image`...

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { BasePopover } from '@/components/common/base-popover';
import { FONT_SIZE, FONT_WEIGHT, media } from '@/constants';
import Image from 'next/image';
import styled from 'styled-components';

interface ButtonProps {
  $bgColor?: string;
  $color?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerTitleLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContainerTitleRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.h1`
  color: #01509a;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  color: var(--text-main-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 16px;
`;

export const ContainerYourAccount = styled.div`
  display: flex;
  padding: 16px 50px;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  border-radius: 12px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const WrapperAccount = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountTitle = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: 700;
`;

export const AccountDesc = styled.div`
  color: var(--text-main-color);
  font-size: 16px;
  font-weight: 500;
`;

export const AddAccountButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
`;

export const ContainerChannel = styled.div`
  display: grid;
  flex-wrap: wrap;
  gap: 16px;
  @media only screen and ${media.xs} {
    grid-template-columns: 1fr;
  }

  @media only screen and ${media.sm} {
    grid-template-columns: 1fr;
  }

  @media only screen and ${media.lg} {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and ${media.xl} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and ${media.xxl} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media only screen and ${media.xxxl} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const CardYoutubeChannel = styled.div`
  height: 140px;
  padding: 16px;
  align-items: center;
  gap: 16px;

  position: relative;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ChannelInfo = styled.div`
  margin: 0 3rem 0 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const ChannelTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-main-color);
  font-size: 18px;
  font-weight: 700;
  width: 100%;
`;

export const Popover = styled(BasePopover)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
`;

export const ChannelVideo = styled.div`
  color: var(--text-main-color);
  font-size: 16px;
  font-weight: 500;
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  background-color: #d9d9d9;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const NoDataTitle = styled.div`
  color: var(--text-main-color);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const NoDataDesc = styled.div`
  color: var(--text-main-color);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled(BaseButton)<ButtonProps>`
  width: 150px;
  height: 50px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};
  &:hover {
    background-color: ${({ $bgColor }) => $bgColor};
    color: ${({ $color }) => $color};
  }
  &:focus {
    background-color: ${({ $bgColor }) => $bgColor};
    color: ${({ $color }) => $color};
  }
  &:active {
    background-color: ${({ $bgColor }) => $bgColor};
    color: ${({ $color }) => $color};
  }
`;

export const MenuButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  cursor: pointer;
`;

export const InfoButton = styled.div`
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--text-main-color);
  margin: 10px 0;
`;

export const ModalDelete = styled(BaseModal)``;
export const ModalLimitConnect = styled(BaseModal)``;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalTitle = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const ModalDesc = styled.div`
  color: var(--text-main-color);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ModalBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  margin: auto;
`;

export const Icon = styled.div`
  text-align: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: end;
`;

        ### 📄 src/components/cloud-software/youtube-account/current-plan/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/my-profile/icon-question-circle.svg, @/components/cloud-software/youtube-account/icon-level, @/constants, @/stores/auth/auth.slice, @/stores/hooks`...
* ww **Hooks:** `useMemo, useAppDispatch, useTranslation, useAppSelector`

        ```typescript
        import IconQuestion from '@/assets/images/svg/my-profile/icon-question-circle.svg';
import { IConLevel } from '@/components/cloud-software/youtube-account/icon-level';
import { DATE_FORMAT } from '@/constants';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { setIsOpenPlanOverview } from '@/stores/progress/progress.slice';
import { checkExpiredDate } from '@/utils';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import * as S from './index.styles';

const CurrentPlan = () => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const isExpiredDate = useMemo(() => {
    return user?.expire_date && checkExpiredDate(user.expire_date);
  }, [user]);

  return (
    <>
      {user?.level && !isExpiredDate && (
        <S.Wrapper onClick={() => dispatch(setIsOpenPlanOverview(true))}>
          <S.SubTitle>
            <IconQuestion />
            {t('youtube.your-current-plan')}
          </S.SubTitle>
          <IConLevel level={user?.level?.toUpperCase()} />
          <S.SubTitle>
            {t('youtube.valid-until')}:
            <br />
            {dayjs(user.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR)}
          </S.SubTitle>
        </S.Wrapper>
      )}
    </>
  );
};

export default CurrentPlan;

        ### 📄 src/components/cloud-software/youtube-account/current-plan/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

export const SubTitle = styled.h2`
  color: var(--text-main-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
`;

        ### 📄 src/components/cloud-software/youtube-account/icon-level/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/my-profile/icon-bronze-large.svg, @/assets/images/svg/my-profile/icon-bronze-middle.svg, @/assets/images/svg/my-profile/icon-bronze.svg, @/assets/images/svg/my-profile/icon-gold-large.svg, @/assets/images/svg/my-profile/icon-gold-middle.svg`...
* 🧩 **Component (Arrow):** `IConLevel`

        ```typescript
        import IconBronzeLarge from '@/assets/images/svg/my-profile/icon-bronze-large.svg';
import IconBronzeMiddle from '@/assets/images/svg/my-profile/icon-bronze-middle.svg';
import IconBronze from '@/assets/images/svg/my-profile/icon-bronze.svg';
import IconGoldLarge from '@/assets/images/svg/my-profile/icon-gold-large.svg';
import IconGoldMiddle from '@/assets/images/svg/my-profile/icon-gold-middle.svg';
import IconGold from '@/assets/images/svg/my-profile/icon-gold.svg';
import IconSilverLarge from '@/assets/images/svg/my-profile/icon-silver-large.svg';
import IconSilverMiddle from '@/assets/images/svg/my-profile/icon-silver-middle.svg';
import IconSilver from '@/assets/images/svg/my-profile/icon-silver.svg';
import { LEVEL_USER } from '@/interfaces';
import React from 'react';

interface IProps {
  level?: string;
  size?: 'normal' | 'middle' | 'large';
}

const IconType: Record<
  string,
  { normal: React.ReactNode; middle: React.ReactNode; large: React.ReactNode }
> = {
  [LEVEL_USER.DEFAULT]: {
    large: <IconBronzeLarge />,
    middle: <IconBronzeMiddle />,
    normal: <IconBronze />,
  },
  [LEVEL_USER.BRONZE]: {
    large: <IconBronzeLarge />,
    middle: <IconBronzeMiddle />,
    normal: <IconBronze />,
  },
  [LEVEL_USER.SILVER]: {
    large: <IconSilverLarge />,
    middle: <IconSilverMiddle />,
    normal: <IconSilver />,
  },
  [LEVEL_USER.GOLD]: {
    large: <IconGoldLarge />,
    middle: <IconGoldMiddle />,
    normal: <IconGold />,
  },
};

export const IConLevel: React.FC<IProps> = ({ level, size = 'normal' }: IProps) => {
  return level ? IconType[level][size] : null;
};

        ### 📄 src/components/auth/register-form/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-label, @/components/common/forms/base-form, @/constants, @/constants/regex, next-i18next`...
* 🧩 **Component (Arrow):** `RegisterForm`
* ww **Hooks:** `useTranslation, useRegisterForm, useRouter`

        ```typescript
        import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { NUMBER_CHARACTERS, ROUTER_PATH } from '@/constants';
import { REGEX_EMAIL } from '@/constants/regex';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { CountryData } from 'react-phone-input-2';

import * as S from './index.styles';
import useRegisterForm from './index.utils';

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  termOfUse: false,
};

export const RegisterForm: React.FC = () => {
  const { t } = useTranslation(['common', 'auth']);

  const {
    isRegister,
    form,
    isResend,
    time,
    phoneCodeValid,
    countryCode,
    handleResend,
    handleRegister,
    handleBack,
    handleAddCountryCode,
    setPhoneCodeValid,
  } = useRegisterForm();

  const router = useRouter();

  return (
    <Auth.FormWrapper>
      {!isRegister ? (
        <BaseForm
          form={form}
          layout="vertical"
          onFinish={handleRegister}
          requiredMark="optional"
          initialValues={initValues}
        >
          <S.Title>{t('signUp')}</S.Title>
          <Auth.FormItem
            name="firstName"
            label={<BaseLabel label={t('firstName')} required />}
            rules={[{ required: true, whitespace: true, message: t('validate.requiredField') }]}
          >
            <Auth.FormInput placeholder="E.g. David" maxLength={64} />
          </Auth.FormItem>
          <Auth.FormItem
            name="lastName"
            label={<BaseLabel label={t('lastName')} required />}
            rules={[{ required: true, whitespace: true, message: t('validate.requiredField') }]}
          >
            <Auth.FormInput placeholder="E.g. Wayne" maxLength={64} />
          </Auth.FormItem>
          <Auth.FormItem
            name="email"
            normalize={(value) => value.trim()}
            label={<BaseLabel label={t('email')} required />}
            rules={[
              { required: true, whitespace: true, message: t('validate.requiredField') },
              {
                pattern: REGEX_EMAIL,
                message: t('validate.notValidEmail'),
              },
            ]}
          >
            <Auth.FormInput placeholder="E.g. translate@youtube.com" maxLength={64} />
          </Auth.FormItem>
          <Auth.FormItem
            name="phone"
            label={<BaseLabel label={t('phoneNumber')} required />}
            rules={[
              { required: true, whitespace: true, message: t('validate.requiredField') },
              () => ({
                validator(_, value) {
                  const phoneNumber = value?.slice(countryCode?.phone_code?.length);
                  const rawPhone = phoneNumber.startsWith('0')
                    ? phoneNumber?.slice(1)
                    : phoneNumber;
                  if (!phoneCodeValid || rawPhone.length < NUMBER_CHARACTERS.phone.min) {
                    return Promise.reject(new Error(t('validate.MC2.2')));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <S.PhoneNumber
              country={'kr'}
              onChange={(value, country: CountryData) => {
                handleAddCountryCode('phone_code', country.dialCode);
                if (country) {
                  form.setFieldValue('countryCode', country.dialCode);
                  const code = value?.slice(0, country.dialCode.length);
                  const valid = code === country.dialCode;
                  setPhoneCodeValid(valid);
                }
              }}
              placeholder="(+ xx) xxxx xxxx"
              phoneCodeValid={phoneCodeValid}
            />
          </Auth.FormItem>
          <Auth.FormItem name="countryCode" style={{ display: 'none' }}></Auth.FormItem>
          <Auth.FormItem
            label={<BaseLabel label={t('password')} required />}
            name="password"
            normalize={(value) => value.trim()}
            rules={[
              { required: true, whitespace: true, message: t('validate.requiredField') },
              () => ({
                validator(_, value) {
                  if (/\s/.test(value)) {
                    return Promise.reject(
                      new Error(
                        t('validate.notContainSpace', {
                          name: t('password'),
                        })
                      )
                    );
                  }
                  if (
                    value.length < 8 ||
                    value.length > 30 ||
                    !/[A-Z]/.test(value) ||
                    !/[0-9]/.test(value) ||
                    !/[!@#$%^&*(),.?":{}|<>]/.test(value)
                  ) {
                    return Promise.reject(new Error(t('validate.MC3.1')));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
          </Auth.FormItem>
          <Auth.FormItem
            label={<BaseLabel label={t('confirmPassword')} required />}
            normalize={(value) => value.trim()}
            name="confirmPassword"
            rules={[
              { required: true, message: t('validate.requiredField', { ns: 'common' }) },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('confirmPasswordError')));
                },
              }),
            ]}
          >
            <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
          </Auth.FormItem>
          {/* <Auth.ActionsWrapper>
            <BaseForm.Item name="termOfUse" valuePropName="checked" noStyle>
              <Auth.FormCheckbox>
                <Auth.Text>
                  {t('register.agree', { ns: 'auth' })}{' '}
                  <Link href="/" target="_blank">
                    <Auth.LinkText>{t('register.termOfUse', { ns: 'auth' })}</Auth.LinkText>
                  </Link>{' '}
                  {t('register.and', { ns: 'auth' })}{' '}
                  <Link href="/" target="_blank">
                    <Auth.LinkText>{t('register.privacyOPolicy', { ns: 'auth' })}</Auth.LinkText>
                  </Link>
                </Auth.Text>
              </Auth.FormCheckbox>
            </BaseForm.Item>
          </Auth.ActionsWrapper> */}
          <BaseForm.Item noStyle>
            <Auth.SubmitButton type="primary" htmlType="submit">
              {t('signUp')}
            </Auth.SubmitButton>
          </BaseForm.Item>
          <Auth.FooterWrapper>
            <Auth.Text>
              {t('register.alreadyHaveAccount', { ns: 'auth' })}{' '}
              <Link href={ROUTER_PATH.LOGIN}>
                <Auth.LinkText>{t('here')}</Auth.LinkText>
              </Link>
            </Auth.Text>
          </Auth.FooterWrapper>
        </BaseForm>
      ) : (
        <>
          <Auth.BackWrapper onClick={handleBack}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('register.checkEmail', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('register.checkEmailDesc', { ns: 'auth' })}</Auth.Description>
          <Auth.Text>
            {t('register.receiveLink', { ns: 'auth' })}
            <Auth.LinkButton disabled={isResend} onClick={handleResend}>
              {t('register.resend', { ns: 'auth' })}
            </Auth.LinkButton>
            {isResend && <>{`(${time})`}</>}
          </Auth.Text>
          <Auth.SubmitButton type="primary" onClick={() => router.push(ROUTER_PATH.LOGIN)}>
            {t('select.goToLogin', { ns: 'auth' })}
          </Auth.SubmitButton>
        </>
      )}
    </Auth.FormWrapper>
  );
};

        ### 📄 src/components/auth/register-form/index.utils.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/hooks/features/useAuth, @/hooks/use-timer, @/hooks/useFeedback, antd`...
* ww **Hooks:** `useResendVerifyMutate, useRegisterMutate, useTranslation, useTimer, useFeedback, useState, useForm`

        ```ts
        import { MESSAGES_ERROR } from '@/constants';
import { useRegisterMutate, useResendVerifyMutate } from '@/hooks/features/useAuth';
import { useTimer } from '@/hooks/use-timer';
import { useFeedback } from '@/hooks/useFeedback';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  termOfUse: boolean;
}

interface ICountryCode {
  country_code?: string;
  phone_code?: string;
}

const useRegisterForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [countryCode, setCountryCode] = useState<ICountryCode>();
  const [form] = Form.useForm();
  const [phoneCodeValid, setPhoneCodeValid] = useState(true);

  const { notification } = useFeedback();

  const { t } = useTranslation(['common', 'auth']);

  const { mutate, isPending } = useRegisterMutate();

  const resendVerify = useResendVerifyMutate();

  const handleRegister = (value: SignUpFormData) => {
    if (!countryCode?.phone_code) return;

    const phoneNumber = value.phone?.slice(countryCode.phone_code.length);
    const rawPhone = phoneNumber.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

    const payload = {
      first_name: value.firstName,
      last_name: value.lastName,
      email: value.email,
      password: value.password,
      phone: rawPhone,
      phone_code: `+${countryCode.phone_code}`,
    };

    mutate(payload, {
      onSuccess: () => {
        setIsRegister(true);
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        if (error?.data?.error === MESSAGES_ERROR.EMAIL_TAKEN) {
          form.setFields([{ name: 'email', errors: [t('validate.MC8')] }]);
        }
        if (error?.data?.error === MESSAGES_ERROR.PHONE_TAKEN) {
          form.setFields([{ name: 'phone', errors: [t('validate.MC9')] }]);
        }
        if (error?.data?.error === MESSAGES_ERROR.EMAIL_EXISTED_NOT_VERIFIED) {
          form.setFields([{ name: 'email', errors: [t('validate.MC15')] }]);
        }
        if (error?.data?.error === MESSAGES_ERROR.NUMBER_USED_NOT_VERIFIED) {
          form.setFields([{ name: 'phone', errors: [t('validate.MC16')] }]);
        }
      },
    });
  };

  const handleBack = () => {
    setIsRegister(false);
  };

  const handleAddCountryCode = (key: string, value: unknown) => {
    setCountryCode((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [isResend, setIsResend] = useState(false);

  const handleEndTime = () => {
    setIsResend(false);
  };

  const [second, start] = useTimer(30, handleEndTime);

  const time = dayjs(new Date(second * 1000)).format('ss');

  const handleResend = () => {
    const email = form.getFieldValue('email');

    const payload = {
      email_or_phone: email,
      phone_code: '',
    };

    resendVerify.mutate(payload, {
      onSuccess() {
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        notification.error({ message: error?.data?.message });
      },
    });
  };

  return {
    isRegister,
    loading: isPending,
    form,
    isResend,
    time,
    phoneCodeValid,
    countryCode,
    handleResend,
    handleRegister,
    handleBack,
    handleAddCountryCode,
    setPhoneCodeValid,
  };
};

export default useRegisterForm;

        ### 📄 src/components/auth/register-form/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/layouts/auth-layout/index.styles, react-phone-input-2`

        ```ts
        import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { FormTitle } from '@/layouts/auth-layout/index.styles';
import PhoneInput from 'react-phone-input-2';
import styled, { css } from 'styled-components';

export const Title = styled(FormTitle)`
  margin-bottom: 1.875rem;
  font-size: ${FONT_SIZE.xxxl};
`;

export const PhoneNumber = styled(PhoneInput)<{ phoneCodeValid: boolean }>`
  border-radius: 6px;

  input.form-control {
    font-size: ${FONT_SIZE.md};
    background: var(--white);
    font-weight: ${FONT_WEIGHT.light};
    width: 100%;
    height: 50px;
    color: black;
  }

  .flag-dropdown {
    border: none;
    outline: none;
    background: transparent;
  }

  .flag-dropdown.open,
  .selected-flag .open {
    background: var(--white) !important;
  }

  .selected-flag {
    background: var(--white) !important;
    border: 1px solid #cacaca;

    ${(props) =>
      !props.phoneCodeValid &&
      css`
        .flag {
          background-image: none;
        }
      `}
  }
`;

        ### 📄 src/components/auth/login-form/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/api/auth, @/components/common/base-label, @/components/common/forms/base-form, @/constants, @/constants/regex`...
* 🧩 **Component (Arrow):** `LoginForm`
* ww **Hooks:** `useResendVerifyMutate, useTranslation, useRouter, useAppDispatch, useTimer, useFeedback, useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        import { login } from '@/api/auth';
import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { INVALID_CODE, LIST_COUNTRY_CODE, MESSAGES_ERROR, ROUTER_PATH } from '@/constants';
import { REGEX_EMAIL, REGEX_PHONE } from '@/constants/regex';
import { useResendVerifyMutate } from '@/hooks/features/useAuth';
import { useTimer } from '@/hooks/use-timer';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { setCredentials } from '@/stores/auth/auth.slice';
import { useAppDispatch } from '@/stores/hooks';
import cookies from '@/utils/cookie';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import * as S from './index.styles';

interface LoginFormData {
  emailOrPhone: string;
  password: string;
}

export const initValues: LoginFormData = {
  emailOrPhone: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const { t } = useTranslation(['common', 'auth']);
  const [form] = Form.useForm();
  const router = useRouter();
  const { notification } = useFeedback();

  const dispatch = useAppDispatch();
  const [isPending, setIsPending] = useState(false);

  const resendVerify = useResendVerifyMutate();

  const [isVerifyAccount, setIsVerifyAccount] = useState(false);

  const [isResend, setIsResend] = useState(false);

  const handleEndTime = () => {
    setIsResend(false);
  };

  const [second, start] = useTimer(30, handleEndTime);

  const time = dayjs(new Date(second * 1000)).format('ss');

  const [formSubmit, setFormSubmit] = useState<any>();

  const handleResend = () => {
    if (!formSubmit) return;

    resendVerify.mutate(formSubmit, {
      onSuccess() {
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        notification.error({ message: error?.data?.message });
      },
    });
  };

  const handleBack = () => {
    setIsVerifyAccount(false);
  };

  const checkPhoneNumber = (phone: string) => {
    const pp = phone.split('');
    const countryCode = pp[1];
    const nextTwoDigits = pp[1] + pp[2];
    const nextThreeDigits = pp[1] + pp[2] + pp[3];
    const nextFourDigits = pp[1] + pp[2] + pp[3] + pp[4];

    if (LIST_COUNTRY_CODE.includes(countryCode)) {
      return countryCode;
    } else if (LIST_COUNTRY_CODE.includes(nextTwoDigits)) {
      return nextTwoDigits;
    } else if (LIST_COUNTRY_CODE.includes(nextThreeDigits)) {
      return nextThreeDigits;
    } else if (LIST_COUNTRY_CODE.includes(nextFourDigits)) {
      return nextFourDigits;
    } else {
      return INVALID_CODE;
    }
  };

  const checkPayload = (values: LoginFormData) => {
    if (REGEX_EMAIL.test(values.emailOrPhone)) {
      return {
        email_or_phone: values.emailOrPhone,
        password: values.password,
        phone_code: '',
      };
    } else if (REGEX_PHONE.test(values.emailOrPhone)) {
      const rs = checkPhoneNumber(values.emailOrPhone);

      if (rs === INVALID_CODE) {
        form.setFields([{ name: 'emailOrPhone', errors: [t('validate.MC2.2')] }]);
        return false;
      } else {
        const countryCode = rs;
        const phoneNumber = values.emailOrPhone?.slice(rs.length + 1);

        return {
          email_or_phone: phoneNumber,
          phone_code: `+${countryCode}`,
          password: values.password,
        };
      }
    } else {
      form.setFields([{ name: 'emailOrPhone', errors: [t('validate.MC2')] }]);
      return false;
    }
  };

  const handleSubmit = async (values: LoginFormData) => {
    const payload = checkPayload(values);

    if (!payload) return;

    try {
      setIsPending(true);
      const responses = await login(payload);
      setIsPending(false);

      if (responses) {
        cookies.set('access_token', responses.data.access_token);
        cookies.set('refresh_token', responses.data.refresh_token);
        dispatch(setCredentials({ token: responses.data.access_token }));
        router.push(ROUTER_PATH.YOUTUBE_ACCOUNT);
        notification.success({ message: t('login.loginSuccess', { ns: 'auth' }) });
      }
    } catch (error: any) {
      setIsPending(false);

      if (error?.data?.data?.is_verify === false) {
        const values = {
          email_or_phone: payload.email_or_phone,
          phone_code: payload.phone_code,
        };
        setFormSubmit(values);

        setIsVerifyAccount(true);

        resendVerify.mutate(values, {
          onSuccess() {
            setIsResend(true);
            start();
          },
          onError: (error: any) => {
            notification.error({ message: error?.data?.message });
          },
        });
        return;
      }

      if (error?.data?.error === MESSAGES_ERROR.EMAIL_OR_PHONE_NOT_EXIST) {
        form.setFields([{ name: 'emailOrPhone', errors: [t('validate.MC4')] }]);
        return;
      }

      if (error?.data?.error === MESSAGES_ERROR.WRONG_PASS_LOGIN) {
        form.setFields([{ name: 'password', errors: [t('validate.MC3.4')] }]);
        return;
      }

      notification.error({ message: error?.data?.message });
    }
  };

  return (
    <Auth.FormWrapper>
      {!isVerifyAccount ? (
        <BaseForm
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark="optional"
          initialValues={initValues}
        >
          <Auth.FormTitle>{t('login')}</Auth.FormTitle>
          <Auth.Description>{t('login.loginInfo', { ns: 'auth' })}</Auth.Description>
          <Auth.FormItem
            name="emailOrPhone"
            label={<BaseLabel label={`${t('email')} / ${t('phoneNumber')}`} required />}
            rules={[
              { required: true, message: t('validate.requiredField') },
              {
                max: 64,
                message: t('validate.max', { length: 64 }),
              },
            ]}
          >
            <Auth.FormInput placeholder="Eg: translate@youtube.com" maxLength={64} />
          </Auth.FormItem>
          <Auth.FormItem
            label={<BaseLabel label={t('password')} required />}
            name="password"
            normalize={(value) => value.trim()}
            rules={[
              {
                required: true,
                whitespace: true,
                message: t('validate.requiredField'),
              },
              () => ({
                validator(_, value) {
                  if (/\s/.test(value)) {
                    return Promise.reject(
                      new Error(
                        t('validate.notContainSpace', {
                          name: t('password'),
                        })
                      )
                    );
                  }
                  if (
                    value.length < 8 ||
                    value.length > 30 ||
                    !/[A-Z]/.test(value) ||
                    !/[0-9]/.test(value) ||
                    !/[!@#$%^&*(),.?":{}|<>]/.test(value)
                  ) {
                    return Promise.reject(new Error(t('validate.MC3.1')));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
          </Auth.FormItem>
          <Auth.Text>
            <Link href="/auth/forgot-password">
              <S.ForgotPasswordText>{t('forgotPass')}</S.ForgotPasswordText>
            </Link>
          </Auth.Text>
          {/* <Auth.ActionsWrapper>
          <BaseForm.Item name="rememberMe" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <S.RememberMeText>{t('login.rememberMe')}</S.RememberMeText>
            </Auth.FormCheckbox>
          </BaseForm.Item>
          <Link href="/auth/forgot-password">
            <S.ForgotPasswordText>{t('forgotPass')}</S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper> */}
          <BaseForm.Item noStyle>
            <Auth.SubmitButton type="primary" htmlType="submit" loading={isPending}>
              {t('login')}
            </Auth.SubmitButton>
          </BaseForm.Item>
          <Auth.FooterWrapper>
            <Auth.Text>
              {t('login.noAccount', { ns: 'auth' })}{' '}
              <Link href="/auth/register">
                <Auth.LinkText>{t('here')}</Auth.LinkText>
              </Link>
            </Auth.Text>
          </Auth.FooterWrapper>
        </BaseForm>
      ) : (
        <>
          <Auth.BackWrapper onClick={handleBack}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('register.checkEmail', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('register.checkEmailDesc', { ns: 'auth' })}</Auth.Description>
          <Auth.Text>
            {t('register.receiveLink', { ns: 'auth' })}
            <Auth.LinkButton disabled={isResend} onClick={handleResend}>
              {t('register.resend', { ns: 'auth' })}
            </Auth.LinkButton>
            {isResend && <>{`(${time})`}</>}
          </Auth.Text>
          <Auth.SubmitButton type="primary" onClick={handleBack}>
            {t('select.goToLogin', { ns: 'auth' })}
          </Auth.SubmitButton>
        </>
      )}
    </Auth.FormWrapper>
  );
};

        ### 📄 src/components/auth/login-form/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, styled-components`

        ```ts
        import { FONT_SIZE } from '@/constants';
import styled from 'styled-components';

export const RememberMeText = styled.span`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
`;

export const ForgotPasswordText = styled.div`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.xs};
  text-decoration: underline;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

        ### 📄 src/components/auth/phone-number-form/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/api/auth, @/components/common/base-label, @/components/common/forms/base-form, @/constants, @/hooks/use-timer`...
* ww **Hooks:** `useTranslation, useRouter, useTimer, useFeedback, useState, useForm`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        import { verifyForgotPasswordSms } from '@/api/auth';
import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { FIREBASE_ERROR, NUMBER_CHARACTERS, ROUTER_PATH } from '@/constants';
import { useTimer } from '@/hooks/use-timer';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { auth } from '@/plugins/firebase';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { CountryData } from 'react-phone-input-2';

import * as S from './index.styles';

interface ICountryCode {
  country_code?: string;
  phone_code?: string;
}

interface IProps {
  handleBack: () => void;
}

declare global {
  interface Window {
    confirmationResult?: ConfirmationResult;
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

const initValues = {
  phone: '',
};

const PhoneNumberForm = (props: IProps) => {
  const { t } = useTranslation(['common', 'auth']);

  const { handleBack } = props;
  const { notification } = useFeedback();
  const router = useRouter();

  const [form] = Form.useForm();
  const [phoneCodeValid, setPhoneCodeValid] = useState(true);
  const [countryCode, setCountryCode] = useState<ICountryCode>();

  const handleAddCountryCode = (key: string, value: unknown) => {
    setCountryCode((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [isResend, setIsResend] = useState(false);

  const handleEndTime = () => {
    setIsResend(false);
  };

  const [second, start] = useTimer(30, handleEndTime);

  const time = dayjs(new Date(second * 1000)).format('ss');

  const [verificationCode, setVerificationCode] = useState('');

  const [invalidCode, setInvalidCode] = useState('');

  const [isShowOtp, setIsShowOtp] = useState(false);

  const [loading, setLoading] = useState(false);

  const [loadingVerify, setLoadingVerify] = useState(false);

  const recaptchaWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleCaptchaVerify = (phone: string) => {
    if (!window.recaptchaVerifier) {
      const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          const formatPhoneNumber = `+${phone}`;

          setLoading(true);
          signInWithPhoneNumber(auth, formatPhoneNumber, appVerifier)
            .then((confirmationResult) => {
              window.confirmationResult = confirmationResult;
              notification.success({ message: t('message.sendOtpSuccess') });

              setLoading(false);
              setIsShowOtp(true);
              setIsResend(true);
              start();
            })
            .catch((error: any) => {
              setLoading(false);

              if (error?.code === FIREBASE_ERROR.QUOTA_EXCEEDED) {
                notification.error({ message: t('message.limitOtp') });
              } else {
                notification.error({ message: t('message.sendOtpFailed') });
              }
            });
        },
        'expired-callback': () => {
          setLoading(false);
        },
      });

      window.recaptchaVerifier = appVerifier;
      return appVerifier;
    }

    return window.recaptchaVerifier;
  };

  const handleCheckPhoneNumber = async (rawPhone: string, countryCode: string) => {
    if (!rawPhone || !countryCode) return false;

    try {
      setLoading(true);
      const response = await verifyForgotPasswordSms({
        phone: rawPhone,
        phone_code: `+${countryCode}`,
      });
      setLoading(false);

      return response.success ? true : false;
    } catch (error: any) {
      setLoading(false);
      error?.data?.message && notification.error({ message: error.data.message });
      return false;
    }
  };

  const handleSendCode = async (values: { phone: string }) => {
    if (!countryCode?.phone_code) return;

    try {
      const phoneNumber = values.phone?.slice(countryCode.phone_code.length);
      const rawPhone = phoneNumber.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

      const isInvalidPhoneNumber = await handleCheckPhoneNumber(rawPhone, countryCode.phone_code);

      if (!isInvalidPhoneNumber) return;

      const appVerifier: any = handleCaptchaVerify(values.phone);

      if (appVerifier.widgetId === null) {
        setLoading(true);
        await appVerifier.render();
        setLoading(false);
      }

      await appVerifier.verify();

      window.recaptchaVerifier = undefined;
      appVerifier?.recaptcha?.reset();

      if (!recaptchaWrapperRef.current) return;
      recaptchaWrapperRef.current.innerHTML = '<div id="recaptcha-container"></div>';
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleVerifycode = async () => {
    if (!verificationCode) {
      setInvalidCode(t('validate.requiredField'));
      return;
    }

    if (verificationCode.length < 6) {
      setInvalidCode(t('validate.MC23'));
      return;
    }

    if (!window.confirmationResult || !countryCode?.phone_code) return;

    const phone = form.getFieldValue('phone');
    const phoneNumber = phone?.slice(countryCode.phone_code.length);
    const rawPhone = phoneNumber.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

    try {
      const isInvalidPhoneNumber = await handleCheckPhoneNumber(rawPhone, countryCode.phone_code);

      if (!isInvalidPhoneNumber) return;

      setLoadingVerify(true);
      const response: any = await window.confirmationResult.confirm(verificationCode);
      setLoadingVerify(false);

      if (!response?.user?.accessToken) return;

      router.push({
        pathname: ROUTER_PATH.NEW_PASSWORD,
        query: {
          accessTokenSMS: response.user.accessToken,
          phone: rawPhone,
          countryCode: countryCode.phone_code,
        },
      });
    } catch (error: any) {
      setLoadingVerify(false);

      if (error?.code === FIREBASE_ERROR.INVALID_CODE) {
        setInvalidCode(t('validate.MC23'));
      }
      if (error?.code === FIREBASE_ERROR.CODE_EXPIRED) {
        setInvalidCode(t('validate.MC23.1'));
      }
    }
  };

  const handleResendPhoneNumber = () => {
    handleSendCode({ phone: form.getFieldValue('phone') });
  };

  return (
    <>
      {!isShowOtp ? (
        <BaseForm
          form={form}
          layout="vertical"
          onFinish={handleSendCode}
          requiredMark="optional"
          initialValues={initValues}
        >
          <Auth.BackWrapper
            onClick={() => {
              window.recaptchaVerifier = undefined;
              handleBack();
            }}
          >
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('reset.resetPassword', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('reset.messageDesc', { ns: 'auth' })}</Auth.Description>

          <Auth.FormItem
            name="phone"
            label={<BaseLabel label={t('phoneNumber')} required />}
            rules={[
              { required: true, whitespace: true, message: t('validate.requiredField') },
              () => ({
                validator(_, value) {
                  const phoneNumber = value?.slice(countryCode?.phone_code?.length);
                  const rawPhone = phoneNumber.startsWith('0')
                    ? phoneNumber?.slice(1)
                    : phoneNumber;
                  if (!phoneCodeValid || rawPhone.length < NUMBER_CHARACTERS.phone.min) {
                    return Promise.reject(new Error(t('validate.MC2.2')));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <S.PhoneNumber
              country={'kr'}
              onChange={(value, country: CountryData) => {
                handleAddCountryCode('phone_code', country.dialCode);
                if (country) {
                  form.setFieldValue('countryCode', country.dialCode);
                  const code = value?.slice(0, country.dialCode.length);
                  const valid = code === country.dialCode;
                  setPhoneCodeValid(valid);
                }
              }}
              placeholder="(+ xx) xxxx xxxx"
              phoneCodeValid={phoneCodeValid}
            />
          </Auth.FormItem>
          <Auth.FormItem name="countryCode" style={{ display: 'none' }}></Auth.FormItem>

          <div ref={recaptchaWrapperRef} style={{ display: 'none' }}>
            <div id="recaptcha-container"></div>
          </div>

          <BaseForm.Item noStyle>
            <Auth.SubmitButton type="primary" htmlType="submit" loading={loading}>
              {t('reset.next', { ns: 'auth' })}
            </Auth.SubmitButton>
          </BaseForm.Item>
        </BaseForm>
      ) : (
        <>
          <Auth.BackWrapper
            onClick={() => {
              window.recaptchaVerifier = undefined;
              setIsShowOtp(false);
              setVerificationCode('');
              setInvalidCode('');
            }}
          >
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('reset.checkMessage', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('reset.checkMessageDesc', { ns: 'auth' })}</Auth.Description>

          <S.VerificationCodeInputWrapper
            autoFocus
            validChars="0-9"
            onChange={(value) => {
              setVerificationCode(value);
              setInvalidCode('');
            }}
            invalid={!!invalidCode}
          />
          {invalidCode && <S.TextError>{invalidCode}</S.TextError>}

          <div ref={recaptchaWrapperRef} style={{ display: 'none' }}>
            <div id="recaptcha-container"></div>
          </div>

          <Auth.Text>
            {t('reset.receiveMessage', { ns: 'auth' })}
            <Auth.LinkButton
              style={{ height: '100%', marginTop: '1rem' }}
              disabled={isResend || loading || loadingVerify}
              onClick={handleResendPhoneNumber}
            >
              {t('reset.resend', { ns: 'auth' })}
            </Auth.LinkButton>
            {isResend && <>{`(${time})`}</>}
          </Auth.Text>
          <Auth.SubmitButton
            type="primary"
            onClick={handleVerifycode}
            loading={loadingVerify}
            disabled={loading}
          >
            {t('select.verify', { ns: 'auth' })}
          </Auth.SubmitButton>
        </>
      )}
    </>
  );
};

export default PhoneNumberForm;

        ### 📄 src/components/auth/phone-number-form/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/inputs/verification-code-input, @/constants, react-phone-input-2`

        ```ts
        import { VerificationCodeInput } from '@/components/common/inputs/verification-code-input';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import PhoneInput from 'react-phone-input-2';
import styled, { css } from 'styled-components';

export const PhoneNumber = styled(PhoneInput)<{ phoneCodeValid: boolean }>`
  border-radius: 6px;

  input.form-control {
    font-size: ${FONT_SIZE.md};
    background: var(--white);
    font-weight: ${FONT_WEIGHT.light};
    width: 100%;
    height: 50px;
    color: black;
  }

  .flag-dropdown {
    border: none;
    outline: none;
    background: transparent;
  }

  .flag-dropdown.open,
  .selected-flag .open {
    background: var(--white) !important;
  }

  .selected-flag {
    background: var(--white) !important;
    border: 1px solid #cacaca;

    ${(props) =>
      !props.phoneCodeValid &&
      css`
        .flag {
          background-image: none;
        }
      `}
  }

  .country-list {
    position: fixed;
  }
`;

export const VerificationCodeInputWrapper = styled(VerificationCodeInput)<{ invalid: boolean }>`
  .vi__character--default {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => (props.invalid ? '1px solid #ff0000' : '1px solid #bec0c6')};
    /* outline: ${(props) => (props.invalid ? 'none' : '')}; */
  }

  .vi__character--inactive--default.character--inactive {
    background-color: var(--white);
  }
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;

        ### 📄 src/components/auth/verify-account/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-check-circle.svg, @/constants, @/layouts/auth-layout, next, next-i18next`...
* ww **Hooks:** `useTranslation, useRouter`

        ```typescript
        import IconSuccess from '@/assets/images/svg/icon-check-circle.svg';
import { DEFAULT_LOCALE, ROUTER_PATH } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const VerifyRegister = () => {
  const { t } = useTranslation(['auth', 'common']);

  const router = useRouter();

  return (
    <Auth.FormWrapper>
      <Auth.VerifyWrapper>
        <Auth.IconVerify>
          <IconSuccess />
        </Auth.IconVerify>
        <Auth.FormTitle>{t('verify.allSet')}</Auth.FormTitle>
        <Auth.DescriptionVerify>{t('verify.accountActivated')}</Auth.DescriptionVerify>
        <Auth.SubmitButton type="primary" onClick={() => router.push(ROUTER_PATH.LOGIN)}>
          {t('verify.goToLogin')}
        </Auth.SubmitButton>
      </Auth.VerifyWrapper>
    </Auth.FormWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

VerifyRegister.layout = AuthLayout;
export default VerifyRegister;

        ### 📄 src/components/auth/forgot-password-form/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, next-i18next, next/router`
* 🧩 **Component (Arrow):** `ForgotPasswordForm`
* ww **Hooks:** `useTranslation, useRouter`

        ```typescript
        import { ROUTER_PATH } from '@/constants';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { Radio } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import EmailForm from '../email-form';
import PhoneNumberForm from '../phone-number-form';
import * as S from './index.styles';

export const METHOD_TYPE = {
  EMAIL: 'Email',
  PHONE: 'Phone',
};

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation(['common', 'auth']);
  const { push } = useRouter();

  const [isSelectMethod, setIsSelectMethod] = useState<boolean>(false);

  const [method, setMethod] = useState<string>(METHOD_TYPE.EMAIL);

  const handleChangeMethod = (method: string) => {
    setMethod(method);
  };

  const handleBack = () => {
    setIsSelectMethod(false);
  };

  return (
    <>
      <Auth.FormWrapper>
        {!isSelectMethod ? (
          <>
            <Auth.BackWrapper onClick={() => push(ROUTER_PATH.LOGIN)}>
              <Auth.BackIcon />
              {t('button.back', { ns: 'common' })}
            </Auth.BackWrapper>
            <Auth.FormTitle>{t('reset.selectMethod', { ns: 'auth' })}</Auth.FormTitle>
            <Auth.Description>{t('reset.selectMethodDesc', { ns: 'auth' })}</Auth.Description>
            <S.RadioSelect
              defaultValue={method}
              onChange={(e) => handleChangeMethod(e.target.value)}
            >
              <S.Space>
                <Radio value={METHOD_TYPE.EMAIL}>{t('email', { ns: 'common' })}</Radio>
                <Radio value={METHOD_TYPE.PHONE}>{t('phoneNumber', { ns: 'common' })}</Radio>
              </S.Space>
            </S.RadioSelect>
            <Auth.SubmitButton type="primary" onClick={() => setIsSelectMethod(true)}>
              {t('reset.next', { ns: 'auth' })}
            </Auth.SubmitButton>
          </>
        ) : (
          <>
            {method === METHOD_TYPE.EMAIL && <EmailForm handleBack={handleBack} />}
            {method === METHOD_TYPE.PHONE && <PhoneNumberForm handleBack={handleBack} />}
          </>
        )}
      </Auth.FormWrapper>
    </>
  );
};

        ### 📄 src/components/auth/forgot-password-form/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-radio, styled-components`

        ```ts
        import { BaseRadio } from '@/components/common/base-radio';
import styled from 'styled-components';

export const RadioSelect = styled(BaseRadio.Group)``;

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

        ### 📄 src/components/auth/email-form/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-label, @/components/common/forms/base-form, @/constants, @/constants/regex, @/hooks/features/useAuth`...
* ww **Hooks:** `useTranslation, useRouter, useTimer, useFeedback, useForgotPasswordMutate, useState, useForm`

        ```typescript
        import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { ROUTER_PATH } from '@/constants';
import { REGEX_EMAIL } from '@/constants/regex';
import { useForgotPasswordMutate } from '@/hooks/features/useAuth';
import { useTimer } from '@/hooks/use-timer';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { METHOD_TYPE } from '../forgot-password-form';

interface IProps {
  handleBack: () => void;
}

const initValues = {
  email: '',
};

const EmailForm = (props: IProps) => {
  const { t } = useTranslation(['common', 'auth']);
  const [form] = Form.useForm();
  const { notification } = useFeedback();
  const router = useRouter();

  const { handleBack } = props;

  const [isSendCode, setIsSendCode] = useState(false);

  const [isResend, setIsResend] = useState(false);

  const handleEndTime = () => {
    setIsResend(false);
  };

  const [second, start] = useTimer(30, handleEndTime);

  const time = dayjs(new Date(second * 1000)).format('ss');

  const forgotPassword = useForgotPasswordMutate();

  const handleVerifyEmail = (values: { email: string }) => {
    const payload = {
      email: values.email,
      method: METHOD_TYPE.EMAIL,
    };

    forgotPassword.mutate(payload, {
      onSuccess() {
        setIsSendCode(true);
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        notification.error({ message: error?.data?.message });
      },
    });
  };

  const handleResendEmail = () => {
    const email = form.getFieldValue('email');

    const payload = {
      email: email,
      method: METHOD_TYPE.EMAIL,
    };

    forgotPassword.mutate(payload, {
      onSuccess() {
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        notification.error({ message: error?.data?.message });
      },
    });
  };

  return (
    <>
      {!isSendCode ? (
        <BaseForm
          form={form}
          layout="vertical"
          onFinish={handleVerifyEmail}
          requiredMark="optional"
          initialValues={initValues}
        >
          <Auth.BackWrapper onClick={handleBack}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('reset.resetPassword', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('reset.emailDesc', { ns: 'auth' })}</Auth.Description>
          <Auth.FormItem
            name="email"
            label={<BaseLabel label={t('email')} required />}
            normalize={(value) => value.trim()}
            rules={[
              { required: true, message: t('validate.requiredField') },
              {
                pattern: REGEX_EMAIL,
                message: t('validate.notValidEmail'),
              },
            ]}
          >
            <Auth.FormInput placeholder="Eg: translate@youtube.com" maxLength={64} />
          </Auth.FormItem>
          <BaseForm.Item noStyle>
            <Auth.SubmitButton type="primary" htmlType="submit" loading={forgotPassword.isPending}>
              {t('reset.next', { ns: 'auth' })}
            </Auth.SubmitButton>
          </BaseForm.Item>
        </BaseForm>
      ) : (
        <>
          <Auth.BackWrapper onClick={() => setIsSendCode(false)}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('reset.checkEmail', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('reset.checkEmailDesc', { ns: 'auth' })}</Auth.Description>
          <Auth.Text>
            {t('reset.receiveLink', { ns: 'auth' })}
            <Auth.LinkButton
              disabled={isResend || forgotPassword.isPending}
              onClick={handleResendEmail}
            >
              {t('reset.resend', { ns: 'auth' })}
            </Auth.LinkButton>
            {isResend && <>{`(${time})`}</>}
          </Auth.Text>
          <Auth.SubmitButton type="primary" onClick={() => router.push(ROUTER_PATH.LOGIN)}>
            {t('select.goToLogin', { ns: 'auth' })}
          </Auth.SubmitButton>
        </>
      )}
    </>
  );
};

export default EmailForm;

        ### 📄 src/components/auth/verify-error/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-triangle-warning.svg, react`

        ```typescript
        import IconWarning from '@/assets/images/svg/icon-triangle-warning.svg';
import * as Auth from '@/layouts/auth-layout/index.styles';
import React from 'react';

interface IProps {
  title: string;
  description: string;
}

const VerifyError = (props: IProps) => {
  const { title, description } = props;

  return (
    <Auth.FormWrapper>
      <Auth.VerifyWrapper>
        <Auth.IconVerify>
          <IconWarning />
        </Auth.IconVerify>
        <Auth.FormTitle>{title}</Auth.FormTitle>
        <Auth.DescriptionVerify>{description}</Auth.DescriptionVerify>
      </Auth.VerifyWrapper>
    </Auth.FormWrapper>
  );
};
export default VerifyError;

        ### 📄 src/components/auth/new-password-form/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-label, @/components/common/forms/base-form, @/constants, @/hooks/features/useAuth, @/hooks/useFeedback`...
* 🧩 **Component (Arrow):** `NewPasswordForm`
* ww **Hooks:** `useResetPasswordMutate, useTranslation, useRouter, useFeedback, useForm`

        ```typescript
        import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { ROUTER_PATH } from '@/constants';
import { useResetPasswordMutate } from '@/hooks/features/useAuth';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { Form } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

import { METHOD_TYPE } from '../forgot-password-form';

interface NewPasswordFormData {
  password: string;
  confirmPassword: string;
}

const initStates = {
  password: '',
  confirmPassword: '',
};

export const NewPasswordForm: React.FC = () => {
  const { t } = useTranslation(['auth', 'common']);

  const { mutate, isPending } = useResetPasswordMutate();
  const { notification } = useFeedback();
  const [form] = Form.useForm();

  const router = useRouter();

  const token = router.query.token as string;
  const accessTokenSMS = router.query.accessTokenSMS as string;
  const phone = router.query.phone as string;
  const countryCode = router.query.countryCode as string;

  const handleSubmit = (values: NewPasswordFormData) => {
    if (!token && !accessTokenSMS) return;

    const payload = {
      code: accessTokenSMS ? accessTokenSMS : token,
      password: values.password,
      method: accessTokenSMS ? METHOD_TYPE.PHONE : METHOD_TYPE.EMAIL,
      phone: accessTokenSMS ? phone : '',
      phone_code: accessTokenSMS ? `+${countryCode}` : '',
    };

    mutate(payload, {
      onSuccess: (responses) => {
        if (responses.success) {
          notification.success({ message: responses.message });
          router.replace(ROUTER_PATH.LOGIN);
        }
      },
    });
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initStates}
      >
        <Auth.FormTitle>{t('newPass.title')}</Auth.FormTitle>
        <Auth.Description>{t('newPass.desc')}</Auth.Description>
        <Auth.FormItem
          name="password"
          normalize={(value) => value.trim()}
          label={<BaseLabel label={t('newPass.newPassword')} required />}
          rules={[
            {
              required: true,
              whitespace: true,
              message: t('validate.requiredField', { ns: 'common' }),
            },
            () => ({
              validator(_, value) {
                if (/\s/.test(value)) {
                  return Promise.reject(
                    new Error(
                      t('validate.notContainSpace', {
                        name: t('password', { ns: 'common' }),
                        ns: 'common',
                      })
                    )
                  );
                }
                if (
                  value.length < 8 ||
                  value.length > 30 ||
                  !/[A-Z]/.test(value) ||
                  !/[0-9]/.test(value) ||
                  !/[!@#$%^&*(),.?":{}|<>]/.test(value)
                ) {
                  return Promise.reject(new Error(t('validate.MC3.1', { ns: 'common' })));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
        </Auth.FormItem>
        <Auth.FormItem
          name="confirmPassword"
          normalize={(value) => value.trim()}
          label={<BaseLabel label={t('newPass.confirmPassword')} required />}
          rules={[
            { required: true, message: t('validate.requiredField', { ns: 'common' }) },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('confirmPasswordError', { ns: 'common' })));
              },
            }),
          ]}
        >
          <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
        </Auth.FormItem>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isPending}>
            {t('newPass.setPassword')}
          </Auth.SubmitButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};

        ### 📄 src/components/modals/modal-plan-overview/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/api/supcription-plan, @/assets/images/svg/cloud-software/icon-info.svg, @/assets/images/svg/my-profile/icon-close-big.svg, @/components/common/base-modal/BaseModal, @/components/common/base-plan`...
* ww **Hooks:** `useChangePlan, useTranslation, usePaymentCapture, useRouter, useMemo, useAppDispatch, useAppSelector`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        import { getOrderDetail } from '@/api/supcription-plan';
import IconInfo from '@/assets/images/svg/cloud-software/icon-info.svg';
import IconClose from '@/assets/images/svg/my-profile/icon-close-big.svg';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { BaseCardPlan } from '@/components/common/base-plan';
import { DATE_FORMAT, PaymentStatus, RANK_NAME, TypeConfirm, planData } from '@/constants';
import {
  useChangePlan,
  usePaymentCapture,
  usePaymentOrder,
} from '@/hooks/features/useSupcriptionPlan';
import { useFeedback } from '@/hooks/useFeedback';
import { LEVELTYPE, LEVEL_USER, TYPE_PURCHARE_PLAN } from '@/interfaces';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsOpenPlanOverview, setIsOpenPlanOverview } from '@/stores/progress/progress.slice';
import { checkExpiredDate } from '@/utils';
import cookies from '@/utils/cookie';
import { queryClient } from '@/utils/react-query';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';

import ModalPlanConfirm from '../modal-confirm-plan';
import CancelPlanModal from './cancel';
import Checkout from './checkout';
import DownGradePlan from './downgrage';
import * as S from './index.styles';

const POINT_LEVEL = {
  [LEVEL_USER.DEFAULT]: 0,
  [LEVEL_USER.BRONZE]: 1,
  [LEVEL_USER.SILVER]: 2,
  [LEVEL_USER.GOLD]: 3,
} as const;

const ModalPlanOverview = () => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const [isOpenCheckout, setIsOpenCheckOut] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenDowngrade, setIsOpenDowngrade] = useState(false);
  const [isOpenCancelPlan, setIsOpenCancelPlan] = useState(false);
  const [typeConfirmModal, setTypeConfirmModal] = useState<TypeConfirm>(
    TypeConfirm.PAYMENT_SUCCESS
  );
  const { notification } = useFeedback();
  const { push } = useRouter();

  const [newPlan, setNewPlan] = useState<LEVELTYPE>(LEVEL_USER.DEFAULT);
  const [newPlanInfo, setNewPlanInfo] = useState<InfoPlan | null>(null);
  const [typeChangePlan, setTypeChangePlan] = useState<string>('');

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const isOpenPlanOverview = useAppSelector(selectIsOpenPlanOverview);

  const { mutate, isPending: loadingChangePlan } = useChangePlan();

  const paymentOrder = usePaymentOrder();

  const paymentCapture = usePaymentCapture();

  const [loadingOrderDetail, setLoadingOrderDetail] = useState(false);

  const loadingPayment = paymentOrder.isPending || paymentCapture.isPending || loadingOrderDetail;

  // Compare before and after plans
  const getTypeChangePlan = useCallback((newLevel: LEVELTYPE, currentLevel?: LEVELTYPE) => {
    if (!currentLevel) return TYPE_PURCHARE_PLAN.NEW_PURCHASE;
    const levelDifference = POINT_LEVEL[newLevel] - POINT_LEVEL[currentLevel];
    return levelDifference > 0 ? TYPE_PURCHARE_PLAN.UPGRADE : TYPE_PURCHARE_PLAN.DOWNGRADE;
  }, []);

  const currentPlanInfo = planData.find((plan) => plan.level === user?.level?.toUpperCase());

  const handleTogglePlanOVerview = () => dispatch(setIsOpenPlanOverview(!isOpenPlanOverview));

  // button GetStarted click
  const handleGetStarted = (level: LEVELTYPE, data: InfoPlan) => {
    const typeChange = getTypeChangePlan(level, user?.level?.toUpperCase() as LEVELTYPE);
    setNewPlan(level);
    setNewPlanInfo(data);
    setTypeChangePlan(typeChange);

    switch (typeChange) {
      case TYPE_PURCHARE_PLAN.NEW_PURCHASE:
        handleTogglePlanOVerview();
        setIsOpenCheckOut(true);
        break;
      case TYPE_PURCHARE_PLAN.UPGRADE:
        if (user?.payment_before_deadline) {
          notification.error({
            message: t('validate.MC24', { ns: 'common' }),
          });
          return;
        }
        handleTogglePlanOVerview();
        setIsOpenCheckOut(true);
        break;
      case TYPE_PURCHARE_PLAN.DOWNGRADE:
        if (user?.changeRank?.change_rank?.toUpperCase() === level) {
          notification.error({
            message: t('validate.MC19', { ns: 'common' }),
          });
          return;
        }
        if (user?.payment_before_deadline) {
          notification.error({
            message: t('validate.MC24', { ns: 'common' }),
          });
          return;
        }
        handleTogglePlanOVerview();
        setIsOpenDowngrade(true);
        break;
      default:
        break;
    }

    return { level, data };
  };

  // back checkout click
  const handleBackCheckout = () => {
    setIsOpenCheckOut(false);
    handleTogglePlanOVerview();
  };

  const paymentCalculator = () => {
    const expireDate = user?.expire_date ? dayjs(user.expire_date) : dayjs();
    const currentDate = dayjs();

    const remainingTime = expireDate.diff(currentDate, 'day');

    const remainingValue = (Number(currentPlanInfo?.salePriceYear ?? 0) * remainingTime) / 365;

    const subTotal =
      typeChangePlan === TYPE_PURCHARE_PLAN.UPGRADE
        ? Number(newPlanInfo?.salePriceYear ?? 0) - remainingValue
        : Number(newPlanInfo?.salePriceYear ?? 0);

    const defaultTax = 0;

    const tax = (subTotal * defaultTax) / 100;

    const total = subTotal + tax;

    return {
      defaultTax,
      tax: Number(tax.toFixed(2)).toString(),
      remainingValue: Number(remainingValue.toFixed(2)).toString(),
      subTotal: Number(subTotal.toFixed(2)).toString(),
      total: Number(total.toFixed(2)).toString(),
    };
  };

  const createOrder = async () => {
    if (!newPlanInfo) return '';

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      rank: RANK_NAME[newPlan],
      tax: Number(tax),
      sub_total: Number(subTotal),
      total: Number(total),
    };

    try {
      const response = await paymentOrder.mutateAsync(payload);
      return response?.data?.id;
    } catch (error: any) {
      error?.data?.message && notification.error({ message: error.data.message });
    }
  };

  const onApprove = async (data: OnApproveData | CardFieldsOnApproveData) => {
    if (!newPlanInfo) return;

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      order_id: data.orderID,
      rank: RANK_NAME[newPlan],
      tax: Number(tax),
      sub_total: Number(subTotal),
      total: Number(total),
    };

    try {
      setLoadingOrderDetail(true);
      const orderDetail = await getOrderDetail(data.orderID);
      setLoadingOrderDetail(false);
      if (!orderDetail.success) return;

      const response = await paymentCapture.mutateAsync(payload);
      if (response.data.status === PaymentStatus.FAILED) {
        setIsOpenConfirm(true);
        setIsOpenCheckOut(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
      } else if (response.data.status === PaymentStatus.PAID) {
        setIsOpenConfirm(true);
        setIsOpenCheckOut(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_SUCCESS);
        queryClient.invalidateQueries({
          queryKey: ['userDetail'],
        });
        queryClient.invalidateQueries({
          queryKey: ['total-video'],
        });
        queryClient.invalidateQueries({
          queryKey: ['list-youtube'],
        });
      } else {
        if (typeof response?.data?.message !== 'string') return;
        response?.data?.message && notification.error({ message: response.data.message });
      }
    } catch (error: any) {
      setLoadingOrderDetail(false);
      if (error?.data?.data?.['3d_secure']) {
        error?.data?.message && notification.error({ message: error.data.message });
      }

      setIsOpenConfirm(true);
      setIsOpenCheckOut(false);
      setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
    }
  };

  const onError = () => {
    setIsOpenConfirm(true);
    setIsOpenCheckOut(false);
    setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
  };

  // downgrade confirm
  const handleConfirmDownGrade = (ids: number[], currentPlan: string, newPlan: string) => {
    mutate(
      {
        keep_yt_account_id: ids,
        current_rank: currentPlan,
        new_rank: newPlan,
      },
      {
        onSuccess: () => {
          setIsOpenDowngrade(false);
          setIsOpenConfirm(true);
          setTypeConfirmModal(TypeConfirm.DOWNGRADE_SUCCESS);
          queryClient.invalidateQueries({
            queryKey: ['userDetail'],
          });
        },
      }
    );
  };

  // cance downgrade modal
  const handleCancelDowngrade = () => {
    setIsOpenDowngrade(false);
  };

  // open modal cancel
  const handleClickCancelPlan = () => {
    setIsOpenCancelPlan(true);
    handleTogglePlanOVerview();
  };

  // keep plan click
  const handleKeepCancelPlan = () => {
    setIsOpenCancelPlan(false);
  };

  //  finish cancel plan click
  const handleFinishCancelPlan = () => {
    mutate(
      {
        keep_yt_account_id: [],
        current_rank: user?.level || '',
        new_rank: '',
      },
      {
        onSuccess: () => {
          setIsOpenCancelPlan(false);
          setTypeConfirmModal(TypeConfirm.CANCEL_SUCCESS);
          setIsOpenConfirm(true);
          queryClient.invalidateQueries({
            queryKey: ['userDetail'],
          });
        },
      }
    );
  };

  // restart membership
  const handleRestartMembership = () => {
    mutate(
      {
        keep_yt_account_id: [],
        current_rank: user?.level || '',
        new_rank: user?.level || '',
      },
      {
        onSuccess: () => {
          notification.success({ message: t('validate.MC14', { ns: 'common' }) });
          queryClient.invalidateQueries({
            queryKey: ['userDetail'],
          });
          cookies.set('reminder', 'true');
        },
      }
    );
  };

  // handle action case Typeconfirm
  const handleActionConfirmModal = useCallback(() => {
    switch (typeConfirmModal) {
      case TypeConfirm.PAYMENT_SUCCESS: {
        setIsOpenConfirm(false);
        break;
      }
      case TypeConfirm.PAYMENT_FAIL: {
        setIsOpenCheckOut(true);
        setIsOpenConfirm(false);
        break;
      }
      case TypeConfirm.DOWNGRADE_SUCCESS: {
        setIsOpenConfirm(false);
        push('/cloud-software/youtube-accounts');
        break;
      }
      case TypeConfirm.CANCEL_SUCCESS: {
        setIsOpenConfirm(false);
        break;
      }
      default:
        break;
    }
  }, [typeConfirmModal]);

  const isCanceledPlan = useMemo(() => {
    return (
      !!user?.changeRank &&
      !user?.changeRank.change_rank &&
      !user?.changeRank.keep_yt_account_id.length
    );
  }, [user]);

  const isExpiredDate = useMemo(() => {
    return user?.expire_date && checkExpiredDate(user.expire_date);
  }, [user]);

  const notificationPlan = useMemo(() => {
    if (user && user.changeRank) {
      const { changeRank } = user;
      if (changeRank?.change_rank) {
        return (
          <span>
            {t('youtube.plan-overview.planWillChange')} <b>{changeRank.change_rank}</b> on
            <b> {dayjs(user.expire_date).add(1, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR)}.</b>
          </span>
        );
      }

      if (!changeRank?.change_rank && !changeRank?.keep_yt_account_id.length) {
        return (
          <span>
            {t('youtube.plan-overview.restartMembershipDesc')}{' '}
            <b>{dayjs(user.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR)}.</b>{' '}
            <S.Restart onClick={handleRestartMembership}>
              <b>{t('youtube.plan-overview.restartMember')}</b>
            </S.Restart>
          </span>
        );
      }
    }
  }, [user, t]);

  const validUntil = dayjs().add(365, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR);

  return (
    <>
      <S.ModalPlan
        open={isOpenPlanOverview}
        onCancel={handleTogglePlanOVerview}
        footer={false}
        closable={false}
        width={1024}
        centered
      >
        <S.Close>
          <IconClose onClick={handleTogglePlanOVerview} />
        </S.Close>
        <S.Header>
          <S.Title>{t('youtube.plan-overview.title')}</S.Title>
          <S.SubTitle>{t('youtube.plan-overview.des1')}</S.SubTitle>
          <S.SubTitle>{t('youtube.plan-overview.des2')}</S.SubTitle>
        </S.Header>
        {user?.changeRank && user.changeRank.change_rank !== user.level && (
          <S.Notification>
            <IconInfo />
            {notificationPlan}
          </S.Notification>
        )}
        <S.RowPlan gutter={24}>
          {planData.map(
            ({
              level,
              title,
              description,
              currentPriceYear,
              currentPriceMonth,
              salePriceYear,
              salePriceMonth,
              info,
              mostPopular,
            }) => {
              const isCurrentPlan = user?.level?.toUpperCase() === level;

              return (
                <S.ColPlan md={8} key={level}>
                  <BaseCardPlan
                    data={{
                      level,
                      title,
                      description,
                      currentPriceYear,
                      currentPriceMonth,
                      salePriceYear,
                      salePriceMonth,
                      info,
                      mostPopular,
                      currentPlan:
                        isCurrentPlan && !isExpiredDate
                          ? {
                              validUntil: dayjs(user?.expire_date).format(
                                DATE_FORMAT.DAY_MONTH_YEAR
                              ),
                              isCanceled: isCanceledPlan,
                            }
                          : undefined,
                    }}
                    isDisableBtn={isCanceledPlan}
                    onHandleGetStarted={handleGetStarted}
                    onHandleCancel={handleClickCancelPlan}
                  />
                </S.ColPlan>
              );
            }
          )}
        </S.RowPlan>
      </S.ModalPlan>

      <S.CheckoutModal
        open={isOpenCheckout}
        footer={false}
        closable={false}
        width={586}
        centered
        onCancel={() => setIsOpenCheckOut(false)}
        destroyOnClose={true}
      >
        <Checkout
          loadingPayment={loadingPayment}
          validUntil={validUntil}
          currentPlanInfo={currentPlanInfo}
          newPlanInfo={newPlanInfo}
          typeChangePlan={typeChangePlan}
          onHandleBack={handleBackCheckout}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          paymentCalculator={paymentCalculator}
        />
      </S.CheckoutModal>

      <ModalPlanConfirm
        isOpen={isOpenConfirm}
        typeConfirm={typeConfirmModal}
        onOK={handleActionConfirmModal}
      />

      {isOpenDowngrade && (
        <S.DowngradeModal
          open={isOpenDowngrade}
          footer={false}
          width={650}
          centered
          onCancel={handleCancelDowngrade}
        >
          <DownGradePlan
            plan={newPlan}
            currentPlanInfo={currentPlanInfo}
            newPlanInfo={newPlanInfo}
            onCancel={handleCancelDowngrade}
            onConfirm={handleConfirmDownGrade}
            loadingBtn={loadingChangePlan}
          />
        </S.DowngradeModal>
      )}

      <BaseModal
        open={isOpenCancelPlan}
        footer={false}
        width={650}
        centered
        onCancel={handleKeepCancelPlan}
      >
        <CancelPlanModal
          currentPlanInfo={currentPlanInfo}
          onKeep={handleKeepCancelPlan}
          onFinish={handleFinishCancelPlan}
          loadingBtn={loadingChangePlan}
        />
      </BaseModal>
    </>
  );
};

export default ModalPlanOverview;

        ### 📄 src/components/modals/modal-plan-overview/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-modal/BaseModal, antd, styled-components`

        ```ts
        import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { Col, Row } from 'antd';
import styled from 'styled-components';

export const ModalPlan = styled(BaseModal)`
  display: flex;
  flex-direction: column;
  .ant-modal-content {
    border-radius: 30px;
  }
  .ant-modal-body {
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  svg {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  text-align: center;
  color: #404040;
  font-weight: 700;
  line-height: normal;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 24px;
`;

export const Notification = styled.div`
  font-size: 14px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #01509a;
  background: #d7ebff;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  span {
    color: #01509a;
    margin-left: 24px;
  }
`;

export const RowPlan = styled(Row)`
  width: 100%;
  margin-top: 20px;
`;

export const ColPlan = styled(Col)``;

export const CheckoutModal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 40px;
    background: #f8fbff;
  }
  .ant-modal-body {
    padding: 32px;
  }
`;

export const DowngradeModal = styled(BaseModal)`
  .ant-modal-content {
    background: #f8fbff;
  }
`;

export const Restart = styled.span`
  margin-left: 24px;
  text-decoration: underline;
  cursor: pointer;
`;

        ### 📄 src/components/modals/modal-plan-overview/cancel/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/interfaces/plan-overview, @/stores/auth/auth.slice, @/stores/hooks, dayjs`...
* ww **Hooks:** `useMemo, useTranslation, useAppSelector`

        ```typescript
        import { DATE_FORMAT } from '@/constants';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import * as S from './index.styles';

interface IProps {
  currentPlanInfo?: InfoPlan;
  onFinish: () => void;
  onKeep: () => void;
  loadingBtn: boolean;
}

const CancelPlanModal = ({ currentPlanInfo, onFinish, onKeep, loadingBtn }: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const user = useAppSelector(selectCurrentUser);

  const untilDateValue = useMemo(() => {
    return user ? dayjs(user.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR) : '';
  }, [user]);

  if (!user) return;

  return (
    <S.Wrapper>
      <S.Title>{t('cancelPlan.title')}</S.Title>
      <S.Card>
        <S.PlanName>
          {t('cancelPlan.currentPlan')}: <b>{user.level}</b>
        </S.PlanName>
        <S.PlanData>
          <span>
            ${currentPlanInfo?.salePriceYear ?? 0}/year - {t('cancelPlan.billedAnnually')}
          </span>
          <span>
            {t('cancelPlan.validUntil')}:
            <b> {dayjs(user.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR)}</b>
          </span>
        </S.PlanData>
      </S.Card>

      <S.Note>
        <span>{t('cancelPlan.note')}:</span>
        <i> {t('cancelPlan.noteContent')}</i>
      </S.Note>
      <S.PlanDescription>
        <p>
          {t('cancelPlan.description')}
          <b>{untilDateValue}</b>
        </p>
        <p>{t('cancelPlan.description2')}</p>
      </S.PlanDescription>

      <S.ButtonGroup>
        <S.Button onClick={onFinish} loading={loadingBtn}>
          {t('cancelPlan.button.finish')}
        </S.Button>
        <S.Button type="primary" onClick={onKeep}>
          {t('cancelPlan.button.keep')}
        </S.Button>
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default CancelPlanModal;

        ### 📄 src/components/modals/modal-plan-overview/cancel/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 48px;
`;

export const Button = styled(BaseButton)`
  width: 190px;

  &.ant-btn-default {
    border: 1px solid #01509a;
    color: #01509a;
  }
`;

export const Card = styled.div`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 24px;
  border-radius: 12px;
  background-color: var(--white);
  margin-bottom: 24px;
`;

export const Note = styled.p`
  margin-bottom: 24px;
  span {
    text-decoration: underline;
    font-weight: 500;
  }
`;

export const PlanDescription = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const PlanName = styled.div`
  margin-bottom: 12px;

  b {
    font-size: 18px;
  }
`;

export const PlanData = styled.div`
  display: flex;
  justify-content: space-between;
`;

        ### 📄 src/components/modals/modal-plan-overview/checkout/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-back-circle.svg, @/assets/images/svg/my-profile/icon-paypal.svg, @/constants, @/interfaces, @/interfaces/plan-overview`...
* ww **Hooks:** `useTranslation, useAppSelector`

        ```typescript
        import IconBack from '@/assets/images/svg/icon-back-circle.svg';
import IconPaypal from '@/assets/images/svg/my-profile/icon-paypal.svg';
import { DATE_FORMAT } from '@/constants';
import { TYPE_PURCHARE_PLAN } from '@/interfaces';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import { formatNumberWithCommas } from '@/utils';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';

import * as S from './index.styles';
import PaymentMethod from './payment-method';

interface Price {
  defaultTax: number;
  tax: string;
  remainingValue: string;
  subTotal: string;
  total: string;
}

interface IProps {
  loadingPayment: boolean;
  validUntil: string;
  currentPlanInfo?: InfoPlan;
  newPlanInfo: InfoPlan | null;
  typeChangePlan: string;
  onHandleBack: () => void;
  createOrder: () => Promise<string>;
  onApprove: (data: OnApproveData | CardFieldsOnApproveData) => Promise<void>;
  onError: () => void;
  paymentCalculator: () => Price;
}

const Checkout = ({
  loadingPayment,
  validUntil,
  currentPlanInfo,
  newPlanInfo,
  typeChangePlan,
  onHandleBack,
  createOrder,
  onApprove,
  onError,
  paymentCalculator,
}: IProps) => {
  const { t } = useTranslation(['cloud-software']);

  const { defaultTax, tax, remainingValue, subTotal, total } = paymentCalculator();

  const user = useAppSelector(selectCurrentUser);

  const startFrom = user?.start_date
    ? dayjs(user.start_date).format(DATE_FORMAT.DAY_MONTH_YEAR)
    : '';

  return (
    <S.Wrapper>
      <S.Header>
        <IconBack onClick={onHandleBack} />
        <S.Title>{t('checkout.title')}</S.Title>
      </S.Header>
      <S.Body>
        <S.Card>
          <S.PriceInfos>
            <S.InfoItem>
              <span>{newPlanInfo?.title} Plan</span>
              <span>${formatNumberWithCommas(Number(newPlanInfo?.salePriceYear) ?? 0)}</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>
                ${formatNumberWithCommas(Number(newPlanInfo?.salePriceYear) ?? 0)}/year -{' '}
                {t('checkout.billedAnnually')}
              </span>
              <S.Date>
                {t('checkout.validUntil')}: <b>{validUntil}</b>
              </S.Date>
            </S.InfoItem>
          </S.PriceInfos>

          {typeChangePlan === TYPE_PURCHARE_PLAN.UPGRADE && (
            <S.PriceInfos>
              <S.InfoItem>
                <span>
                  {currentPlanInfo?.title} Plan ({t('checkout.remaining')})
                </span>
                <span>-${formatNumberWithCommas(Number(remainingValue))}</span>
              </S.InfoItem>
              <S.InfoItem>
                <span>
                  ${formatNumberWithCommas(Number(currentPlanInfo?.salePriceYear) ?? 0)}/year -{' '}
                  {t('checkout.billedAnnually')}
                </span>
                <S.Date>
                  {t('checkout.startFrom')}: <b>{startFrom}</b>
                </S.Date>
              </S.InfoItem>
            </S.PriceInfos>
          )}

          <S.PriceTotal>
            <S.InfoItem>
              <span>{t('checkout.subTotal')}</span>
              <span>${formatNumberWithCommas(Number(subTotal))}</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>
                {t('checkout.tax')} ({defaultTax}%)
              </span>
              <b>${tax}</b>
            </S.InfoItem>
            <S.InfoItem>
              <span>{t('checkout.total')}</span>
              <span>${formatNumberWithCommas(Number(total))}</span>
            </S.InfoItem>
          </S.PriceTotal>
        </S.Card>

        <S.Card>
          <S.CardHeader>
            <S.CardTitle>{t('checkout.paymentMethod')}</S.CardTitle>
          </S.CardHeader>
          <S.CardsWrapper>
            <PaymentMethod
              loadingPayment={loadingPayment}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </S.CardsWrapper>
        </S.Card>
      </S.Body>

      <S.CardDesc>
        {t('checkout.poweredBy')} <IconPaypal />
      </S.CardDesc>
    </S.Wrapper>
  );
};

export default Checkout;

        ### 📄 src/components/modals/modal-plan-overview/checkout/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const Body = styled.div`
  max-height: 550px;
  overflow: auto;
`;

export const Card = styled.div`
  border-radius: 12px;
  background-color: var(--white);
  padding: 24px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  &:nth-last-of-type(1) {
    margin-top: 32px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const PriceInfos = styled.div`
  margin-bottom: 16px;
  ${InfoItem} {
    &:first-child {
      font-size: 18px;
      font-weight: 700;
    }

    &:last-child {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const PriceTotal = styled.div`
  font-size: 14px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #d9d9d9;
  ${InfoItem} {
    &:first-child {
      font-size: 16px;
      font-weight: 600;
    }

    &:last-child {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const Date = styled.div``;

export const CardHeader = styled.div`
  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const CardsWrapper = styled.div`
  margin-top: 40px;
`;

export const CardDesc = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #404040;
  line-height: normal;
  font-style: normal;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  svg {
    margin-left: 6px;
    margin-top: 3px;
  }
`;

        ### 📄 src/components/modals/modal-plan-overview/checkout/payment-method/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/plugins/paypal, @paypal/react-paypal-js, @paypal/react-paypal-js, next-i18next`
* ww **Hooks:** `useEffect, useImperativeHandle, useTranslation, useState, usePayPalCardFields`

        ```typescript
        import { paypalConfig } from '@/plugins/paypal';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import { PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
import {
  PayPalButtons,
  PayPalCardFieldsComponent,
  PayPalCardFieldsProvider,
  usePayPalCardFields,
} from '@paypal/react-paypal-js';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

import * as S from './index.styles';

interface IPaymentProps {
  loadingPayment: boolean;
  createOrder: () => Promise<string>;
  onApprove: (data: OnApproveData | CardFieldsOnApproveData) => Promise<void>;
  onError: () => void;
}

interface ISubmitPaymentProps {
  loadingPayment: boolean;
  onError: () => void;
}

const style: Record<string, any> = {
  input: {
    padding: '16px 12px',
    outline: 'none',
    color: '#3a3a3a',
    height: '50px',
    width: '100%',
    border: '1px solid #bec0c6',
    'font-size': '16px',
    'border-radius': '8px',
  },
  body: {
    padding: '0px',
  },
  ':focus': {
    'box-shadow': 'none',
  },
  ':focus.invalid': {
    'box-shadow': 'none',
  },
};

// eslint-disable-next-line react/display-name
const SubmitPayment = React.forwardRef<any, ISubmitPaymentProps>((props, ref) => {
  const { t } = useTranslation(['cloud-software']);

  const { loadingPayment, onError } = props;

  const { cardFieldsForm } = usePayPalCardFields();
  const [isInitForm, setIsInitForm] = useState(false);

  useImperativeHandle(ref, () => {
    return cardFieldsForm;
  });

  useEffect(() => {
    if (!cardFieldsForm) return;
    (async () => {
      try {
        setIsInitForm(true);
        await cardFieldsForm.getState();
        setIsInitForm(false);
      } catch (error) {
        setIsInitForm(false);
      }
    })();
  }, [cardFieldsForm]);

  const handlePlaceOrder = async () => {
    if (!cardFieldsForm) return;

    const formState = await cardFieldsForm.getState();

    if (!formState.isFormValid) return;

    cardFieldsForm.submit().catch((error) => {
      if (error?.message === 'Window closed for postrobot_method before response') return;
      onError();
    });
  };

  return (
    <>
      <S.ButtonPay
        type="primary"
        block
        onClick={handlePlaceOrder}
        loading={loadingPayment}
        disabled={isInitForm}
        style={!isInitForm ? { display: 'block' } : { display: 'none' }}
      >
        {t('checkout.placeOrder')}
      </S.ButtonPay>

      {!isInitForm && (
        <>
          <S.Note>
            <S.Required>*</S.Required> <S.NoteTitle>{t('checkout.note')}</S.NoteTitle>{' '}
            <S.NoteContent>{t('checkout.noteContent1')}</S.NoteContent>
            <br />
            <S.NoteContent>{t('checkout.noteContent2')}</S.NoteContent>
          </S.Note>

          <S.AcceptText
            dangerouslySetInnerHTML={{ __html: t('checkout.acceptText') }}
          ></S.AcceptText>
        </>
      )}
    </>
  );
});

const PaymentMethod = (props: IPaymentProps) => {
  const initialOptions: ReactPayPalScriptOptions = {
    ...paypalConfig,
    components: ['card-fields', 'buttons'],
  };

  const { t } = useTranslation(['cloud-software']);

  const { loadingPayment, createOrder, onApprove, onError } = props;

  const cardFieldsFormRef = useRef<PayPalCardFieldsComponent | null>(null);

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          shape: 'rect',
          layout: 'vertical',
        }}
        disabled={loadingPayment}
        fundingSource="paypal"
        createOrder={createOrder}
        onApprove={onApprove}
      />

      <PayPalCardFieldsProvider
        createOrder={createOrder}
        onApprove={onApprove}
        onError={() => {}}
        style={style}
      >
        <S.WrapperDivide>
          <S.Divide />
          <S.DivideText>{t('checkout.or')}</S.DivideText>
          <S.Divide />
        </S.WrapperDivide>

        <S.CardNumber />
        <S.TextError id="card-number-error"></S.TextError>

        <S.CardName placeholder="Cardholder Name" />
        <S.TextError id="card-name-error"></S.TextError>

        <S.Container>
          <S.Item>
            <S.CardExpiry />
            <S.TextError id="expiration-date-error"></S.TextError>
          </S.Item>

          <S.Item>
            <S.CardCvv />
            <S.TextError id="cvv-error"></S.TextError>
          </S.Item>
        </S.Container>

        <SubmitPayment loadingPayment={loadingPayment} ref={cardFieldsFormRef} onError={onError} />
      </PayPalCardFieldsProvider>
    </PayPalScriptProvider>
  );
};

export default PaymentMethod;

        ### 📄 src/components/modals/modal-plan-overview/checkout/payment-method/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @paypal/react-paypal-js, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import {
  PayPalCVVField,
  PayPalExpiryField,
  PayPalNameField,
  PayPalNumberField,
} from '@paypal/react-paypal-js';
import styled from 'styled-components';

export const ButtonPay = styled(BaseButton)`
  margin-bottom: 24px;
`;

export const WrapperDivide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  margin: 17px 0px 24px 0px;
`;

export const DivideText = styled.span`
  color: #404040;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Divide = styled.div`
  background: #d9d9d9;
  height: 1px;
  flex: 1 0 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const Item = styled.div`
  width: 50%;
`;

export const AcceptText = styled.div`
  color: #404040;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const Note = styled.div`
  margin-bottom: 24px;
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const NoteTitle = styled.span`
  color: #404040;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

export const NoteContent = styled.span`
  color: #404040;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CardNumber = styled(PayPalNumberField)`
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const CardName = styled(PayPalNameField)`
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const CardExpiry = styled(PayPalExpiryField)`
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const CardCvv = styled(PayPalCVVField)`
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const TextError = styled.div`
  color: #ff0000;
  font-size: 14px;
  height: 20px;
  margin: 6px 0px;
`;

        ### 📄 src/components/modals/modal-plan-overview/downgrage/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/cloud-software/index.utils, @/components/common/base-checkbox, @/constants, @/hooks/usePagination, @/interfaces`...
* ww **Hooks:** `useEffect, useTranslation, useMemo, useAppDispatch, useAppSelector, usePagination, useRef`

        ```typescript
        import useYoutubeAccount from '@/components/cloud-software/index.utils';
import { BaseCheckbox } from '@/components/common/base-checkbox';
import { DATE_FORMAT, RANK_NAME } from '@/constants';
import { usePagination } from '@/hooks/usePagination';
import { LEVELTYPE, LEVEL_USER, LEVEL_USER_LIMIT_CONNECT } from '@/interfaces';
import { IListYoutubeAccount } from '@/interfaces/cloud-software';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { setIsOpenPlanOverview } from '@/stores/progress/progress.slice';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo, useRef, useState } from 'react';

import * as S from './index.styles';

interface IProps {
  currentPlanInfo?: InfoPlan;
  newPlanInfo: InfoPlan | null;
  onCancel: () => void;
  onConfirm: (ids: number[], currentPlan: string, newPlan: string) => void;
  plan: LEVELTYPE;
  loadingBtn: boolean;
}

const DownGradePlan = ({
  currentPlanInfo,
  newPlanInfo,
  onCancel,
  onConfirm,
  plan,
  loadingBtn,
}: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const [accounts, setAccounts] = useState<CheckboxValueType[]>([]);

  const [isConfirm, setIsConfirm] = useState(false);

  const accountRef = useRef(null);

  const pagination = usePagination();

  const { loadingListYoutube, dataPagination, refetchListYoutube } = useYoutubeAccount(
    pagination.params,
    false
  );

  const [dataListYoutube, setDataListYoutube] = useState<IListYoutubeAccount[]>([]);

  useEffect(() => {
    (async () => {
      const data = await refetchListYoutube();
      if (data?.data?.data.entities) {
        const listAccount = [...dataListYoutube, ...data.data.data.entities];
        const sortData = listAccount.sort((a, b) => {
          return a.name_channel?.toLowerCase() > b.name_channel?.toLowerCase() ? 1 : -1;
        });
        setDataListYoutube(sortData);
      }
    })();
  }, [pagination.currentPage]);

  const handleLoadMoreAccount = () => {
    const total = dataPagination?.total ?? 0;
    const hasMore = dataListYoutube.length > 0 && dataListYoutube.length < total;
    if (!loadingListYoutube && hasMore) {
      pagination.onChange(pagination.currentPage + 1);
    }
  };

  useEffect(() => {
    const element = accountRef.current as any;
    if (element) {
      const onScroll = () => {
        if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) <= 1)
          handleLoadMoreAccount();
      };

      element.addEventListener('scroll', onScroll);

      return () => {
        element.removeEventListener('scroll', onScroll);
      };
    }
  });

  const accountOptions = useMemo(() => {
    const result = dataListYoutube.map((item) => ({
      label: item.name_channel,
      value: item.id,
    }));
    return result || [];
  }, [dataListYoutube]);

  useEffect(() => {
    if (!accountOptions.length) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  }, [accountOptions]);

  const onChangeAccounts = (checkedValues: CheckboxValueType[]) => {
    if (plan === LEVEL_USER.BRONZE) {
      setAccounts(checkedValues.length ? [checkedValues[checkedValues.length - 1]] : []);
    } else setAccounts(checkedValues);
  };

  const handleOk = () => {
    if (isConfirm) {
      onConfirm(accounts as number[], user?.level ?? '', RANK_NAME[plan]);
    } else {
      setIsConfirm(true);
    }
  };

  const handleCancel = () => {
    if (isConfirm) {
      setIsConfirm(false);
      if (!accountOptions.length) {
        dispatch(setIsOpenPlanOverview(true));
        onCancel();
      }
    } else {
      onCancel();
    }
  };

  const infoPlan = useMemo(() => {
    return plan === LEVEL_USER.BRONZE
      ? {
          numberAcc: LEVEL_USER_LIMIT_CONNECT.BRONZE,
          text: RANK_NAME[LEVEL_USER.BRONZE],
        }
      : {
          numberAcc: LEVEL_USER_LIMIT_CONNECT.SILVER,
          text: RANK_NAME[LEVEL_USER.SILVER],
        };
  }, [plan]);

  return (
    <S.Wrapper>
      <S.Title>{t(isConfirm ? 'downgrade.confirmChange' : 'downgrade.selectAccount')}</S.Title>
      {!isConfirm ? (
        <S.AccoutSelectWrapper>
          <S.Description>
            <p
              dangerouslySetInnerHTML={{
                __html: t('downgrade.descripiton1', {
                  number: infoPlan.numberAcc,
                  level: infoPlan.text,
                }),
              }}
            ></p>
            <p>{t('downgrade.description2')}</p>
          </S.Description>
          <S.Label>{t('downgrade.textSelectAccount', { number: infoPlan.numberAcc })}</S.Label>
          <S.CheckboxWrapper ref={accountRef}>
            <BaseCheckbox.Group value={accounts} onChange={onChangeAccounts}>
              {accountOptions.map(({ label, value }) => {
                const isDisable =
                  accounts.length === LEVEL_USER_LIMIT_CONNECT.SILVER && !accounts.includes(value);
                return (
                  <BaseCheckbox value={value} disabled={isDisable} key={label}>
                    {label}
                  </BaseCheckbox>
                );
              })}
            </BaseCheckbox.Group>
          </S.CheckboxWrapper>

          <S.Note>
            <span>{t('downgrade.note')}:</span>
            <i> {t('downgrade.noteContent')}</i>
          </S.Note>
        </S.AccoutSelectWrapper>
      ) : (
        <S.InfoCard>
          <S.InfoItem>
            <S.PlanName>
              {t('downgrade.currentPlan')}: <b>{user?.level}</b>
            </S.PlanName>
            <S.PlanData>
              <span>
                ${currentPlanInfo?.salePriceYear ?? 0}/year - {t('downgrade.billedAnnually')}
              </span>
              <span>
                {t('downgrade.validUntil')}:
                <b> {dayjs(user?.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR)}</b>
              </span>
            </S.PlanData>
          </S.InfoItem>
          <S.InfoItem>
            <S.PlanName>
              {t('downgrade.newPlan')}: <b>{infoPlan.text}</b>
            </S.PlanName>
            <S.PlanData>
              <span>
                ${newPlanInfo?.salePriceYear ?? 0}/year - {t('downgrade.billedAnnually')}
              </span>
              <span>
                {t('downgrade.startFrom')}:
                <b> {dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR)}</b>
              </span>
            </S.PlanData>
          </S.InfoItem>
        </S.InfoCard>
      )}
      <S.PlanDescription>
        <p>
          {t('downgrade.yourNewPlan')}: <b>{infoPlan.text}</b> {t('downgrade.startOn')}
          <b>{dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.LONG_DATE)}.</b>
        </p>
        <p>{t('downgrade.description3')}</p>
      </S.PlanDescription>

      <S.ButtonGroup>
        <S.Button onClick={handleCancel}>
          {t(isConfirm ? 'downgrade.button.back' : 'downgrade.button.cancel')}
        </S.Button>
        <S.Button type="primary" onClick={handleOk} loading={loadingBtn}>
          {t(isConfirm ? 'downgrade.button.confirm' : 'downgrade.button.next')}
        </S.Button>
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default DownGradePlan;

        ### 📄 src/components/modals/modal-plan-overview/downgrage/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  .ant-checkbox-group {
    flex-direction: column;
    padding: 0 23px;
    > label {
      margin-bottom: 24px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
`;

export const AccoutSelectWrapper = styled.div``;

export const CheckboxWrapper = styled.div`
  max-height: 200px;
  overflow: scroll;
`;

export const Description = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Note = styled.p`
  margin-bottom: 24px;
  span {
    text-decoration: underline;
    font-weight: 500;
  }
`;

export const PlanDescription = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 48px;
`;

export const Button = styled(BaseButton)`
  width: 190px;

  &.ant-btn-default {
    border: 1px solid #01509a;
    color: #01509a;
  }
`;

export const InfoCard = styled.ul`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 24px;
  border-radius: 12px;
  background-color: var(--white);
  margin-bottom: 24px;
`;

export const InfoItem = styled.li`
  &:first-child {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 2px solid #d9d9d9;
  }
`;

export const PlanName = styled.div`
  margin-bottom: 12px;

  b {
    font-size: 18px;
  }
`;

export const PlanData = styled.div`
  display: flex;
  justify-content: space-between;
`;

        ### 📄 src/components/modals/modal-confirm-plan/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/stores/auth/auth.slice, @/stores/hooks, dayjs, next-i18next`...
* ww **Hooks:** `useMemo, useTranslation, useAppSelector`

        ```typescript
        import { DATE_FORMAT, TType, TypeConfirm } from '@/constants';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import ModalConfirm from '../modal-confirm';

interface IProps {
  typeConfirm: TypeConfirm;
  isOpen: boolean;
  onOK: () => void;
}

const ModalPlanConfirm = ({ typeConfirm, isOpen, onOK }: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const user = useAppSelector(selectCurrentUser);

  const infoModalConfirm = useMemo(() => {
    const data = {
      [TypeConfirm.PAYMENT_SUCCESS]: {
        title: t('infoConfirm.payment.success.title'),
        type: TType.SUCCESS,
        btnOk: {
          text: t('infoConfirm.button.ok'),
        },
        content: (
          <div style={{ textAlign: 'center' }}>{t('infoConfirm.payment.success.description')}</div>
        ),
      },
      [TypeConfirm.PAYMENT_FAIL]: {
        title: t('infoConfirm.payment.failed.title'),
        type: TType.ERROR,
        btnOk: {
          text: t('infoConfirm.button.tryAgain'),
        },
        content: (
          <div style={{ textAlign: 'center' }}>
            <div>{t('infoConfirm.payment.failed.description')}</div>
            <div>{t('infoConfirm.payment.failed.tryAgain')}</div>
          </div>
        ),
      },
      [TypeConfirm.DOWNGRADE_SUCCESS]: {
        title: t('infoConfirm.downgrade.success.title'),
        type: TType.SUCCESS,
        btnOk: {
          text: t('infoConfirm.button.done'),
        },
        content: (
          <div style={{ textAlign: 'center' }}>
            <p>
              {t('infoConfirm.downgrade.success.yourNewPlan')}{' '}
              <b>{dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR)}.</b>
            </p>
            <p> {t('infoConfirm.downgrade.success.description')}</p>
          </div>
        ),
      },
      [TypeConfirm.CANCEL_SUCCESS]: {
        title: t('infoConfirm.cancel.success.title'),
        type: TType.SAD,
        btnOk: {
          text: t('infoConfirm.button.done'),
        },
        content: (
          <div style={{ textAlign: 'center' }}>
            <p>
              {t('infoConfirm.cancel.success.description')}
              <b> {dayjs(user?.expire_date).format(DATE_FORMAT.LONG_DATE)}</b>
            </p>
          </div>
        ),
      },
    };

    return data[typeConfirm];
  }, [typeConfirm, user, t]);

  if (!user) return;

  return (
    <ModalConfirm
      isOpen={isOpen}
      title={infoModalConfirm.title}
      onClose={() => {}}
      btnOk={{
        action: onOK,
        name: infoModalConfirm.btnOk.text,
      }}
      type={infoModalConfirm.type}
    >
      {infoModalConfirm.content}
    </ModalConfirm>
  );
};

export default ModalPlanConfirm;

        ### 📄 src/components/modals/modal-route-change/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/modals/modal-confirm, @/constants, @/stores/auth/auth.slice, @/stores/hooks, @/stores/progress/progress.slice`...
* ww **Hooks:** `useEffect, useTranslation, useRouter, useMemo, useAppDispatch, useAppSelector, useState`

        ```typescript
        import ModalConfirm from '@/components/modals/modal-confirm';
import { TType } from '@/constants';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsProgress, setIsProgress } from '@/stores/progress/progress.slice';
import { checkExpiredDate } from '@/utils';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import * as S from './index.styles';

const RouteChangeWrapper = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [nextUrl, setNextUrl] = useState<string>();
  const dispatch = useAppDispatch();
  const isProgress = useAppSelector(selectIsProgress);
  const user = useAppSelector(selectCurrentUser);

  const isExpiredDate = useMemo(() => {
    return user?.expire_date && checkExpiredDate(user.expire_date);
  }, [user]);

  const isNewUser = useMemo(() => !user?.level, [user]);

  useEffect(() => {
    if (user && (isExpiredDate || isNewUser)) {
      router.push('/cloud-software/youtube-accounts');
    }
  }, [user, router, isNewUser, isExpiredDate]);

  useEffect(() => {
    const handleWindowClose = (e: any) => {
      if (isProgress) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    const handleRouteChange = (url: string) => {
      let newUrl = url;
      if (url.startsWith('/ko')) {
        newUrl = url.replace(/^\/ko/, '');
      }

      if (newUrl === router.pathname) return;

      if (!nextUrl && newUrl !== '/auth/login' && isProgress) {
        setOpenModal(true);
        setNextUrl(url);
        router.events.emit('routeChangeError', '', '', {
          shallow: false,
        });
        throw 'RouteChange aborted.';
      }
    };

    window.addEventListener('beforeunload', handleWindowClose);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, nextUrl, isProgress]);

  const onClose = () => {
    setNextUrl(undefined);
    setOpenModal(false);
  };

  const onOk = () => {
    if (nextUrl) {
      router.push(nextUrl);
      dispatch(setIsProgress(false));
    }
  };

  if (!user || isExpiredDate || isNewUser) return;

  return (
    <>
      <ModalConfirm
        type={TType.WARNING}
        isOpen={openModal}
        onClose={onClose}
        title={t('message.progressNotSaved')}
        btnOk={{
          action: onOk,
          name: t('button.quit'),
        }}
        btnCancel={{
          action: onClose,
        }}
      >
        <S.ModalDesc>{t('message.questionQuit')}</S.ModalDesc>
      </ModalConfirm>
      {children}
    </>
  );
};

export default RouteChangeWrapper;

        ### 📄 src/components/modals/modal-route-change/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

export const ModalDesc = styled.div`
  color: var(--text-main-color);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  white-space: break-spaces;
`;

        ### 📄 src/components/modals/modal-finish-update/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/modals/success.svg, @/components/common/base-modal/BaseModal, next-i18next, react`
* ww **Hooks:** `useTranslation`

        ```typescript
        import IconSuccess from '@/assets/images/svg/modals/success.svg';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

type ModalFinishUpdateProps = {
  isOpen: boolean;
  text: string;
  subText: {
    start: string;
    hightlight: string;
    continue: string;
    second?: string;
  };
  onClose: () => void;
  videoId?: string;
};

const ModalFinishUpdate = ({ isOpen, text, subText, onClose, videoId }: ModalFinishUpdateProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);

  return (
    <BaseModal
      centered
      open={isOpen}
      onCancel={onClose}
      footer={false}
      closeIcon={false}
      width={745}
      destroyOnClose={true}
    >
      <S.Title>{t('translator.finishedUpdating')}</S.Title>

      <S.Icon>
        <IconSuccess />
      </S.Icon>

      <S.Text>
        {text}&nbsp;
        {t('translator.finish-updating-modal.click')}&nbsp;
        <S.Link target="_blank" href={`https://youtu.be/${videoId}`}>
          {t('translator.finish-updating-modal.here')}
        </S.Link>
        &nbsp;
        {t('translator.finish-updating-modal.to-view')}
      </S.Text>

      <S.SubTextContainer>
        <S.SubText>
          <S.SubTextItem>{subText.start}</S.SubTextItem>&nbsp;
          <S.SubTextItem highlight={true}>{subText.hightlight}</S.SubTextItem>,
          <S.SubTextItem>{subText.continue}</S.SubTextItem>
        </S.SubText>

        <S.SubText>
          <S.SubTextItem>{subText.second}</S.SubTextItem>
        </S.SubText>
      </S.SubTextContainer>

      <S.IFrame
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <S.WrapperButton>
        <S.CloseButton type="primary" onClick={onClose}>
          {t('translator.close')}
        </S.CloseButton>
      </S.WrapperButton>
    </BaseModal>
  );
};

export default ModalFinishUpdate;

        ### 📄 src/components/modals/modal-finish-update/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/constants, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Title = styled.div`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 2rem;
  text-align: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  color: #404040;
  text-align: center;
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.medium};
  margin-bottom: 2rem;
`;

export const SubTextItem = styled.span<{ highlight?: boolean }>`
  color: #404040;
  text-align: center;
  font-size: ${FONT_SIZE.md};
  font-weight: ${(props) => (props.highlight ? FONT_WEIGHT.bold : FONT_WEIGHT.medium)};
`;

export const SubText = styled.div`
  color: #404040;
  text-align: center;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.medium};
`;

export const SubTextContainer = styled.div`
  margin-bottom: 2rem;
`;

export const WrapperButton = styled.span`
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  padding: 0 24px;
  width: 150px;
  height: 50px;
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 315px;
`;

export const Link = styled.a`
  text-decoration: underline;
`;

        ### 📄 src/components/modals/modal-confirm/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/modals/error.svg, @/assets/images/svg/modals/reminder.svg, @/assets/images/svg/modals/sad-face.svg, @/assets/images/svg/modals/success.svg, @/assets/images/svg/modals/warning.svg`...

        ```typescript
        import IconError from '@/assets/images/svg/modals/error.svg';
import IconReminder from '@/assets/images/svg/modals/reminder.svg';
import IconSad from '@/assets/images/svg/modals/sad-face.svg';
import IconSuccess from '@/assets/images/svg/modals/success.svg';
import IconWarning from '@/assets/images/svg/modals/warning.svg';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { TType } from '@/constants';
import React from 'react';

import * as S from './index.styles';

type ModalConfirmProps = {
  title: string;
  type: TType;
  isOpen: boolean;
  onClose: () => void;
  btnCancel?: {
    name?: string;
    loading?: boolean;
    disable?: boolean;
    action: () => void;
  };
  btnOk?: {
    name?: string;
    loading?: boolean;
    disable?: boolean;
    action: () => void;
  };
  children: React.ReactNode;
  closeIcon?: boolean;
};

const _renderIcon = (type: TType) => {
  switch (type) {
    case TType.WARNING:
      return <IconWarning />;
    case TType.SUCCESS:
      return <IconSuccess />;
    case TType.ERROR:
      return <IconError />;
    case TType.SAD:
      return <IconSad />;
    case TType.REMINDER:
      return <IconReminder />;
    default:
      return null;
  }
};

const getStyleBtn = (type: TType) => {
  switch (type) {
    case TType.WARNING:
      return {
        btnOk: {
          bg: '#FF5252',
          color: '#fff',
          border: '',
        },
        btnCancel: {
          bg: 'transparent',
          color: '#404040',
          border: '1px solid #404040',
        },
      };
    default:
      return {
        btnOk: {
          bg: '',
          color: '',
          border: '',
        },
        btnCancel: {
          bg: '',
          color: '',
          border: '',
        },
      };
  }
};

const ModalConfirm = ({
  title,
  type,
  isOpen,
  onClose,
  btnCancel,
  btnOk,
  children,
  closeIcon = false,
}: ModalConfirmProps) => {
  const styleBtn = getStyleBtn(type);

  return (
    <BaseModal open={isOpen} onCancel={onClose} footer={false} closeIcon={closeIcon} centered>
      <S.Title>{title}</S.Title>
      {type && <S.Icon>{_renderIcon(type)}</S.Icon>}
      <S.Content>{children}</S.Content>
      <S.ButtonWrapper>
        {btnOk && (
          <S.Button
            bg={styleBtn.btnOk.bg}
            border={styleBtn.btnOk.border}
            color={styleBtn.btnOk.color}
            type="primary"
            onClick={btnOk?.action}
            loading={btnOk?.loading}
          >
            {btnOk.name || 'Submit'}
          </S.Button>
        )}
        {btnCancel && (
          <S.Button
            bg={styleBtn.btnCancel.bg}
            border={styleBtn.btnCancel.border}
            color={styleBtn.btnCancel.color}
            type="primary"
            onClick={btnCancel?.action}
          >
            {btnCancel.name || 'Cancel'}
          </S.Button>
        )}
      </S.ButtonWrapper>
    </BaseModal>
  );
};

export default ModalConfirm;

        ### 📄 src/components/modals/modal-confirm/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/constants, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${FONT_SIZE.xxl};
  font-weight: ${FONT_WEIGHT.bold};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Content = styled.div`
  margin-bottom: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.25rem;
`;

export const Button = styled(BaseButton)<{ bg: string; color: string; border: string }>`
  border-radius: 0.5rem;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  background-color: ${({ bg }) => bg} !important;
  color: ${({ color }) => color} !important;
  border: ${({ border }) => border};
  min-width: 150px;
`;

        ### 📄 src/components/modals/modal-language-limit/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/cloud-software/youtube-account/icon-level, @/components/common/base-modal/BaseModal, @/interfaces, @/stores/auth/auth.slice, @/stores/hooks`...
* 🧩 **Component (Arrow):** `ModalLanguageLimit`
* ww **Hooks:** `useAppDispatch, useTranslation, useAppSelector`

        ```typescript
        import { IConLevel } from '@/components/cloud-software/youtube-account/icon-level';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { LEVEL_USER, LEVEL_USER_LIMIT_LANGUAGE } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { setIsOpenPlanOverview } from '@/stores/progress/progress.slice';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLanguageLimit: React.FC<IProps> = (props) => {
  const { isOpen, onClose } = props;
  const { t } = useTranslation(['cloud-software']);
  const useDetail = useAppSelector(selectCurrentUser);
  const level = useDetail?.level?.toUpperCase();
  const dispatch = useAppDispatch();

  const _renderPlan = (currentPlan?: string) => {
    switch (currentPlan) {
      case LEVEL_USER.BRONZE:
      case LEVEL_USER.SILVER:
        return (
          <>
            <S.WrapSubtitle>
              <S.SubtitleText>{t('youtube.your-current-plan')}</S.SubtitleText>&nbsp;
              <S.SubtitleTextBold>{useDetail?.level}</S.SubtitleTextBold>&nbsp;
              <S.SubtitleText>{t('translator.language-limit-popover.only-support')}</S.SubtitleText>
              &nbsp;
              <S.SubtitleTextBold>
                {t('translator.language-limit-popover.languages', {
                  number: _renderNumberLanguage(level),
                })}
              </S.SubtitleTextBold>
            </S.WrapSubtitle>

            <S.WrapSubtitle>
              <S.SubtitleText>
                {t('translator.language-limit-popover.please-upgrade')}
              </S.SubtitleText>
            </S.WrapSubtitle>

            <S.WrapActionButton>
              <S.ActionButton onClick={onClose}>
                {t('translator.language-limit-popover.no')}
              </S.ActionButton>
              <S.ActionButton
                type="primary"
                onClick={() => {
                  dispatch(setIsOpenPlanOverview(true));
                  onClose();
                }}
              >
                {t('translator.language-limit-popover.upgrade')}
              </S.ActionButton>
            </S.WrapActionButton>
          </>
        );
      case LEVEL_USER.GOLD:
        return (
          <>
            <S.WrapSubtitle>
              <S.SubtitleText>{t('youtube.your-current-plan')}</S.SubtitleText>&nbsp;
              <S.SubtitleTextBold>{useDetail?.level}</S.SubtitleTextBold>&nbsp;
              <S.SubtitleText>{t('translator.language-limit-popover.support')}</S.SubtitleText>
              &nbsp;
              <S.SubtitleTextBold>
                {t('translator.language-limit-popover.languages', {
                  number: _renderNumberLanguage(level),
                })}
              </S.SubtitleTextBold>
            </S.WrapSubtitle>

            <S.WrapSubtitle>
              <S.SubtitleText>
                {t('translator.language-limit-popover.achieve-your-desire')}
              </S.SubtitleText>
            </S.WrapSubtitle>

            <S.WrapActionButton>
              <S.ActionButton onClick={onClose}>
                {t('translator.language-limit-popover.ok')}
              </S.ActionButton>
            </S.WrapActionButton>
          </>
        );
    }
  };

  const _renderNumberLanguage = (currentPlan?: string) => {
    switch (currentPlan) {
      case LEVEL_USER.GOLD:
        return LEVEL_USER_LIMIT_LANGUAGE.GOLD;
      case LEVEL_USER.SILVER:
        return LEVEL_USER_LIMIT_LANGUAGE.SILVER;
      case LEVEL_USER.BRONZE:
        return LEVEL_USER_LIMIT_LANGUAGE.BRONZE;
      default:
        return LEVEL_USER_LIMIT_LANGUAGE.DEFAULT;
    }
  };

  return (
    <>
      <BaseModal
        closeIcon={null}
        open={isOpen}
        footer={null}
        centered
        onCancel={onClose}
        width={650}
      >
        <S.PopupContent>
          <S.Title>{t('translator.language-limit-popover.title')}</S.Title>
          <S.WrapIconLevel>
            <IConLevel level={level} size="large" />
          </S.WrapIconLevel>
          {_renderPlan(level)}
        </S.PopupContent>
      </BaseModal>
    </>
  );
};

        ### 📄 src/components/modals/modal-language-limit/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/constants, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const PopupContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled('p')`
  font-size: ${FONT_SIZE.xxl};
  font-weight: ${FONT_WEIGHT.bold};
  text-align: center;
`;

export const WrapSubtitle = styled('p')`
  /* text-align: center; */
  /* display: flex; */
  text-align: center;
`;

export const SubtitleText = styled('span')``;

export const SubtitleTextBold = styled('span')`
  font-weight: ${FONT_WEIGHT.bold};
`;

export const WrapActionButton = styled('div')`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const WrapIconLevel = styled('div')`
  margin: 2rem 0;
`;

export const ActionButton = styled(BaseButton)`
  width: 190px !important;
`;

        ### 📄 src/components/modals/modal-reminder/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/api/supcription-plan, @/components/modals/modal-confirm, @/components/modals/modal-plan-overview, @/components/modals/modal-plan-overview/checkout, @/constants`...
* ww **Hooks:** `useTranslation, usePaymentCapture, useMemo, useAppDispatch, useAppSelector, useCallback, useFeedback`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        import { getOrderDetail } from '@/api/supcription-plan';
import ModalConfirm from '@/components/modals/modal-confirm';
import ModalPlanOverview from '@/components/modals/modal-plan-overview';
import Checkout from '@/components/modals/modal-plan-overview/checkout';
import { DATE_FORMAT, PaymentStatus, RANK_NAME, TType, TypeConfirm, planData } from '@/constants';
import { usePaymentCapture, usePaymentOrder } from '@/hooks/features/useSupcriptionPlan';
import { useFeedback } from '@/hooks/useFeedback';
import { TYPE_PURCHARE_PLAN } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import {
  selectIsOpenReminderPayment,
  setIsOpenReminderPayment,
} from '@/stores/progress/progress.slice';
import { queryClient } from '@/utils/react-query';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useCallback, useMemo, useState } from 'react';

import ModalPlanConfirm from '../modal-confirm-plan';
import * as S from './index.styles';

const ReminderModal = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['cloud-software']);
  const user = useAppSelector(selectCurrentUser);
  const [isOpenCheckout, setIsOpenCheckout] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [typeConfirmModal, setTypeConfirmModal] = useState<TypeConfirm>(
    TypeConfirm.PAYMENT_SUCCESS
  );

  const { notification } = useFeedback();

  const isOpenReminder = useAppSelector(selectIsOpenReminderPayment);

  const paymentOrder = usePaymentOrder();

  const paymentCapture = usePaymentCapture();

  const [loadingOrderDetail, setLoadingOrderDetail] = useState(false);

  const loadingPayment = paymentOrder.isPending || paymentCapture.isPending || loadingOrderDetail;

  const handleToggleReminderModal = () => dispatch(setIsOpenReminderPayment(!isOpenReminder));

  const handleOpenCheckout = () => {
    setIsOpenCheckout(true);
    handleToggleReminderModal();
  };

  const levelRenew = useMemo(() => {
    return user?.changeRank ? user.changeRank.change_rank : user?.level;
  }, [user]);

  const newPlanInfo = useMemo(() => {
    const data = planData.find((plan) => plan.level === levelRenew?.toUpperCase());
    return data || null;
  }, [user, levelRenew]);

  const paymentCalculator = useCallback(() => {
    const defaultTax = 0;
    const subTotal = newPlanInfo?.salePriceYear || 0;
    const tax = (subTotal * defaultTax) / 100;
    const total = subTotal + tax;
    return {
      defaultTax,
      tax: Number(tax.toFixed(2)).toString(),
      remainingValue: '0',
      subTotal: Number(subTotal.toFixed(2)).toString(),
      total: Number(total.toFixed(2)).toString(),
    };
  }, [newPlanInfo]);

  const handleBack = () => {
    setIsOpenCheckout(false);
    handleToggleReminderModal();
  };

  const handleActionConfirmModal = useCallback(() => {
    if (typeConfirmModal === TypeConfirm.PAYMENT_SUCCESS) {
      setIsOpenConfirm(false);
    } else if (typeConfirmModal === TypeConfirm.PAYMENT_FAIL) {
      setIsOpenCheckout(true);
      setIsOpenConfirm(false);
    }
  }, [typeConfirmModal]);

  const createOrder = async () => {
    if (!newPlanInfo) return '';

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      rank: RANK_NAME[newPlanInfo.level],
      tax: Number(tax),
      sub_total: Number(subTotal),
      total: Number(total),
    };

    try {
      const response = await paymentOrder.mutateAsync(payload);
      return response?.data?.id;
    } catch (error: any) {
      error?.data?.message && notification.error({ message: error.data.message });
    }
  };

  const onApprove = async (data: OnApproveData | CardFieldsOnApproveData) => {
    if (!newPlanInfo) return;

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      order_id: data.orderID,
      rank: RANK_NAME[newPlanInfo.level],
      tax: Number(tax),
      sub_total: Number(subTotal),
      total: Number(total),
    };

    try {
      setLoadingOrderDetail(true);
      const orderDetail = await getOrderDetail(data.orderID);
      setLoadingOrderDetail(false);
      if (!orderDetail.success) return;

      const response = await paymentCapture.mutateAsync(payload);
      if (response.data.status === PaymentStatus.FAILED) {
        setIsOpenConfirm(true);
        setIsOpenCheckout(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
      } else if (response.data.status === PaymentStatus.PAID) {
        setIsOpenConfirm(true);
        setIsOpenCheckout(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_SUCCESS);
        dispatch(setIsOpenReminderPayment(false));
        queryClient.invalidateQueries({
          queryKey: ['userDetail'],
        });
        queryClient.invalidateQueries({
          queryKey: ['total-video'],
        });
        queryClient.invalidateQueries({
          queryKey: ['list-youtube'],
        });
      } else {
        if (typeof response?.data?.message !== 'string') return;
        response?.data?.message && notification.error({ message: response.data.message });
      }
    } catch (error: any) {
      setLoadingOrderDetail(false);
      if (error?.data?.data?.['3d_secure']) {
        error?.data?.message && notification.error({ message: error.data.message });
      }

      setIsOpenConfirm(true);
      setIsOpenCheckout(false);
      setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
    }
  };

  const onError = () => {
    setIsOpenConfirm(true);
    setIsOpenCheckout(false);
    setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
  };

  const expireDate = user?.expire_date ? dayjs(user.expire_date) : dayjs();
  const validUntil = expireDate.add(365, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR);

  return (
    <>
      <ModalConfirm
        title={t('reminder.title')}
        type={TType.REMINDER}
        isOpen={isOpenReminder}
        closeIcon={true}
        onClose={handleToggleReminderModal}
      >
        <S.PlanDescription>
          <p>{t('reminder.description1')}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: t('reminder.description2', {
                date: dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.LONG_DATE),
              }),
            }}
          ></p>
        </S.PlanDescription>
        <S.ButtonGroup>
          <S.Button type="primary" onClick={handleOpenCheckout}>
            {t('reminder.button.renew')}
          </S.Button>
        </S.ButtonGroup>
      </ModalConfirm>

      <ModalPlanOverview />

      <S.CheckoutModal
        open={isOpenCheckout}
        footer={false}
        closable={false}
        width={586}
        centered
        onCancel={() => setIsOpenCheckout(false)}
        destroyOnClose={true}
      >
        <Checkout
          loadingPayment={loadingPayment}
          validUntil={validUntil}
          newPlanInfo={newPlanInfo}
          typeChangePlan={TYPE_PURCHARE_PLAN.NEW_PURCHASE}
          onHandleBack={handleBack}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          paymentCalculator={paymentCalculator}
        />
      </S.CheckoutModal>

      <ModalPlanConfirm
        typeConfirm={typeConfirmModal}
        isOpen={isOpenConfirm}
        onOK={handleActionConfirmModal}
      />
    </>
  );
};

export default ReminderModal;

        ### 📄 src/components/modals/modal-reminder/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/components/common/base-modal/BaseModal, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 48px;
`;

export const Button = styled(BaseButton)`
  width: 190px;

  &.ant-btn-default {
    border: 1px solid #01509a;
    color: #01509a;
  }
`;

export const PlanDescription = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const CheckoutModal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 40px;
    background: #f8fbff;
  }
  .ant-modal-body {
    padding: 32px;
  }
`;

        ### 📄 src/components/modals/modal-loading/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-loading.svg, @/components/common/base-modal/BaseModal, react`

        ```typescript
        import IconLoading from '@/assets/images/svg/icon-loading.svg';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import React from 'react';

import * as S from './index.styles';

type ModalLoadingProps = {
  isOpen: boolean;
  title: string;
  desc: string;
};

const ModalLoading = ({ isOpen, title, desc }: ModalLoadingProps) => {
  return (
    <BaseModal centered open={isOpen} footer={false} closeIcon={false}>
      <S.Title>{title}</S.Title>
      <S.Icon>
        <IconLoading />
      </S.Icon>
      <S.Text>{desc}</S.Text>
    </BaseModal>
  );
};

export default ModalLoading;

        ### 📄 src/components/modals/modal-loading/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, styled-components`

        ```ts
        import { FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Title = styled.div`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: ${FONT_WEIGHT.bold};
  text-align: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  color: #404040;
  text-align: center;
  font-size: 16px;
  font-weight: ${FONT_WEIGHT.medium};
`;

        ### 📄 src/components/modals/modal-plan/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/api/supcription-plan, @/components/modals/modal-confirm, @/components/modals/modal-plan-overview, @/components/modals/modal-plan-overview/checkout, @/constants`...
* ww **Hooks:** `useTranslation, usePaymentCapture, useMemo, useAppDispatch, useAppSelector, useCallback, useFeedback`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        import { getOrderDetail } from '@/api/supcription-plan';
import ModalConfirm from '@/components/modals/modal-confirm';
import ModalPlanOverview from '@/components/modals/modal-plan-overview';
import Checkout from '@/components/modals/modal-plan-overview/checkout';
import { DATE_FORMAT, PaymentStatus, RANK_NAME, TType, TypeConfirm, planData } from '@/constants';
import { usePaymentCapture, usePaymentOrder } from '@/hooks/features/useSupcriptionPlan';
import { useFeedback } from '@/hooks/useFeedback';
import { TYPE_PURCHARE_PLAN } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsOpenRenewPlan, setIsOpenRenewPlan } from '@/stores/progress/progress.slice';
import { queryClient } from '@/utils/react-query';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useCallback, useMemo, useState } from 'react';

import ModalPlanConfirm from '../modal-confirm-plan';
import * as S from './index.styles';

const PlanModal = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['cloud-software']);
  const user = useAppSelector(selectCurrentUser);
  const [isOpenCheckout, setIsOpenCheckout] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [typeConfirmModal, setTypeConfirmModal] = useState<TypeConfirm>(
    TypeConfirm.PAYMENT_SUCCESS
  );

  const { notification } = useFeedback();

  const isOpenRenew = useAppSelector(selectIsOpenRenewPlan);

  const paymentOrder = usePaymentOrder();

  const paymentCapture = usePaymentCapture();

  const [loadingOrderDetail, setLoadingOrderDetail] = useState(false);

  const loadingPayment = paymentOrder.isPending || paymentCapture.isPending || loadingOrderDetail;

  const handleToggleRenewModal = () => dispatch(setIsOpenRenewPlan(!isOpenRenew));

  const handleOpenCheckout = () => {
    setIsOpenCheckout(true);
    handleToggleRenewModal();
  };

  const levelRenew = useMemo(() => {
    return user?.changeRank ? user.changeRank.change_rank : user?.level;
  }, [user]);

  const newPlanInfo = useMemo(() => {
    const data = planData.find((plan) => plan.level === levelRenew?.toUpperCase());
    return data || null;
  }, [user, levelRenew]);

  const paymentCalculator = useCallback(() => {
    const defaultTax = 0;
    const subTotal = newPlanInfo?.salePriceYear || 0;
    const tax = (subTotal * defaultTax) / 100;
    const total = subTotal + tax;
    return {
      defaultTax,
      tax: Number(tax.toFixed(2)).toString(),
      remainingValue: '0',
      subTotal: Number(subTotal.toFixed(2)).toString(),
      total: Number(total.toFixed(2)).toString(),
    };
  }, [newPlanInfo]);

  const handleBack = () => {
    setIsOpenCheckout(false);
    handleToggleRenewModal();
  };

  const handleActionConfirmModal = useCallback(() => {
    if (typeConfirmModal === TypeConfirm.PAYMENT_SUCCESS) {
      setIsOpenConfirm(false);
    } else if (typeConfirmModal === TypeConfirm.PAYMENT_FAIL) {
      setIsOpenCheckout(true);
      setIsOpenConfirm(false);
    }
  }, [typeConfirmModal]);

  const createOrder = async () => {
    if (!newPlanInfo) return '';

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      rank: RANK_NAME[newPlanInfo.level],
      tax: Number(tax),
      sub_total: Number(subTotal),
      total: Number(total),
    };

    try {
      const response = await paymentOrder.mutateAsync(payload);
      return response?.data?.id;
    } catch (error: any) {
      error?.data?.message && notification.error({ message: error.data.message });
    }
  };

  const onApprove = async (data: OnApproveData | CardFieldsOnApproveData) => {
    if (!newPlanInfo) return;

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      order_id: data.orderID,
      rank: RANK_NAME[newPlanInfo.level],
      tax: Number(tax),
      sub_total: Number(subTotal),
      total: Number(total),
    };

    try {
      setLoadingOrderDetail(true);
      const orderDetail = await getOrderDetail(data.orderID);
      setLoadingOrderDetail(false);
      if (!orderDetail.success) return;

      const response = await paymentCapture.mutateAsync(payload);
      if (response.data.status === PaymentStatus.FAILED) {
        setIsOpenConfirm(true);
        setIsOpenCheckout(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
      } else if (response.data.status === PaymentStatus.PAID) {
        setIsOpenConfirm(true);
        setIsOpenCheckout(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_SUCCESS);
        dispatch(setIsOpenRenewPlan(false));
        queryClient.invalidateQueries({
          queryKey: ['userDetail'],
        });
        queryClient.invalidateQueries({
          queryKey: ['total-video'],
        });
        queryClient.invalidateQueries({
          queryKey: ['list-youtube'],
        });
      } else {
        if (typeof response?.data?.message !== 'string') return;
        response?.data?.message && notification.error({ message: response.data.message });
      }
    } catch (error: any) {
      setLoadingOrderDetail(false);
      if (error?.data?.data?.['3d_secure']) {
        error?.data?.message && notification.error({ message: error.data.message });
      }

      setIsOpenConfirm(true);
      setIsOpenCheckout(false);
      setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
    }
  };

  const onError = () => {
    setIsOpenConfirm(true);
    setIsOpenCheckout(false);
    setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
  };

  const validUntil = dayjs().add(365, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR);

  return (
    <>
      <ModalConfirm
        title={t('renewPlan.title')}
        type={TType.SAD}
        isOpen={isOpenRenew}
        onClose={handleToggleRenewModal}
      >
        <S.PlanDescription>
          <p
            dangerouslySetInnerHTML={{
              __html: t('renewPlan.description', {
                // level: levelRenew,
                date: dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.LONG_DATE),
              }),
            }}
          ></p>
          <p>{t('renewPlan.description2')}</p>
          <S.Note>
            <S.Text>{t('renewPlan.note')}</S.Text>
            <span>{t('renewPlan.noteContent')}</span>
          </S.Note>
        </S.PlanDescription>
        <S.ButtonGroup>
          <S.Button onClick={handleToggleRenewModal}>{t('renewPlan.button.close')}</S.Button>
          <S.Button type="primary" onClick={handleOpenCheckout}>
            {t('renewPlan.button.renew')}
          </S.Button>
        </S.ButtonGroup>
      </ModalConfirm>

      <ModalPlanOverview />

      <S.CheckoutModal
        open={isOpenCheckout}
        footer={false}
        closable={false}
        width={586}
        centered
        onCancel={() => setIsOpenCheckout(false)}
        destroyOnClose={true}
      >
        <Checkout
          loadingPayment={loadingPayment}
          validUntil={validUntil}
          newPlanInfo={newPlanInfo}
          typeChangePlan={TYPE_PURCHARE_PLAN.NEW_PURCHASE}
          onHandleBack={handleBack}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          paymentCalculator={paymentCalculator}
        />
      </S.CheckoutModal>

      <ModalPlanConfirm
        typeConfirm={typeConfirmModal}
        isOpen={isOpenConfirm}
        onOK={handleActionConfirmModal}
      />
    </>
  );
};

export default PlanModal;

        ### 📄 src/components/modals/modal-plan/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/components/common/base-modal/BaseModal, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 48px;
`;

export const Button = styled(BaseButton)`
  width: 190px;

  &.ant-btn-default {
    border: 1px solid #01509a;
    color: #01509a;
  }
`;

export const Note = styled.div`
  margin: 12px 0 24px 0;
  text-align: left;
`;

export const Text = styled.span`
  text-decoration: underline;
  font-weight: 500;
`;

export const PlanDescription = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const CheckoutModal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 40px;
    background: #f8fbff;
  }
  .ant-modal-body {
    padding: 32px;
  }
`;

        ### 📄 src/components/dashboard/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/api/users, @/assets/images/dashboard/coming-soon.png, @/assets/images/dashboard/image1.png, @/assets/images/dashboard/image2.png, @/assets/images/dashboard/image3.png`...
* ww **Hooks:** `useEffect, useTranslation, useRouter, useAppDispatch, useAppSelector`
* ⚡ **API Route / Server Action Detected**

        ```typescript
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
import React, { useEffect } from 'react';
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

  const handleGetUserDetail = async () => {
    try {
      const res = await getDetailUser();
      if (res?.data) {
        dispatch(updateUserInfo(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const accessToken = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');
    if (!accessToken && !refreshToken) return;

    handleGetUserDetail();
  }, []);

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
                  onClick={() => router.push(ROUTER_PATH.YOUTUBE_ACCOUNT)}
                >
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
          }}
        >
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
                    dangerouslySetInnerHTML={{ __html: t(description) }}
                  ></S.DescriptionOverview>
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
                      dangerouslySetInnerHTML={{ __html: t('pricing.plan-overview.2-months-free') }}
                    ></S.TextInfo>
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

        ### 📄 src/components/dashboard/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/dashboard/slide-bg.png, @/constants, styled-components, swiper/react`

        ```ts
        import slideBackground from '@/assets/images/dashboard/slide-bg.png';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { BaseButton } from '../common/base-button';
import { BaseLayout } from '../common/base-layout';

export const LayoutMaster = styled(BaseLayout)`
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const WrapperSlideContainer = styled.div`
  background: url(${slideBackground.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    margin: 0px 12px !important;
    background: var(--white);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #5b5b5b;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 1220px;
  margin-top: 10px;
`;

export const LinkUrl = styled.div`
  cursor: pointer;
  color: var(--white);
  &:hover {
    color: var(--white);
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export const MenuItem = styled.div`
  color: #404040;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const ButtonLogin = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  height: 24px;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 48px;
  padding: 18px;
`;

export const ButtonSignUp = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  height: 24px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 18px;
`;

export const ProfileDropdownHeader = styled.div`
  cursor: pointer;
  width: 100%;
  min-width: 220px;
  margin-left: 48px !important;
`;

export const NameAvatar = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: 700;
`;

export const Name = styled.h2`
  color: var(--text-dark-color);
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #404040;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WrapperSlideItem = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: auto;
  padding-top: 100px;
`;

export const SlideTitle = styled.div`
  color: #404040;
  text-align: center;
  font-weight: 700;
  line-height: normal;
`;

export const SlideDesc = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
`;

export const GetStarted = styled.div`
  color: #404040;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const TitlePage = styled.div`
  color: #404040;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  margin-top: 90px;
  margin-bottom: 50px;
`;

export const WrapperContent = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: auto;
  margin-bottom: 80px;
`;

export const SizeMarket = styled.div`
  display: flex;
  padding: 55px 36px;
  flex-direction: column;
  gap: 40px;
  background: #d9d9d9;
  margin-bottom: 40px;
`;

export const SizeMarketTitle = styled.div`
  color: #404040;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
`;

export const SizeMarketDesc = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
`;

export const TargetTitle = styled.div`
  color: #404040;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;
`;

export const TargetDesc = styled.div`
  color: #404040;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
`;

export const DivideColumn = styled.div`
  width: 1px;
  height: 300px;
  background: #404040;
`;

export const DescriptionPage = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 50px 0;
`;

export const Button = styled.div`
  font-size: 32px;
  font-weight: ${FONT_WEIGHT.semibold};
  font-style: normal;
  line-height: normal;
  border-radius: 8px;
  padding: 16px 24px;
  background: #01509a;
  color: var(--white);
  cursor: pointer;
`;

export const Divide = styled.div`
  height: 1px;
  background: #404040;
  margin-top: 90px;
`;

export const Card = styled.div`
  display: flex;
  width: 390px;
  height: 500px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 1px solid #404040;
`;

export const CardTitle = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  min-height: 58px;
`;

export const CardDescription = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Member = styled.div`
  display: flex;
  padding: 48px 36px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  background: #d9d9d9;
  width: 380px;
  height: 354px;
`;

export const MemberImage = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  align-self: stretch;
  img {
    border-radius: 50%;
  }
`;

export const MemberName = styled.div`
  color: #404040;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`;

export const MemberInfo = styled.div`
  color: #404040;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: stretch;
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 500px;
  margin-bottom: 50px;
`;

export const CardOverview = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: start;
  border: 1px solid #404040;
  background: #fff;
  border-radius: 12px;
  width: 300px;
  height: 360px;
`;

export const ContainerLevel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Level = styled.span`
  color: #404040;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

export const DescriptionOverview = styled.div`
  color: #404040;
  font-size: 13px;
  margin-bottom: 16px;
  min-height: 40px;
`;

export const SubSale = styled.del`
  color: #01509a;
  font-size: 16px;
  line-height: normal;
  justify-content: start;
  position: relative;
  width: fit-content;
  margin-bottom: 10px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-top: 3px solid red;
    transform: translateY(-50%);
  }
`;

export const PriceYear = styled.span`
  color: #01509a;
  font-size: 42px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 14px;
`;

export const TextYear = styled.span`
  color: #01509a;
  font-size: 16px;
  line-height: normal;
  font-weight: 400;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const TextInfo = styled.div`
  color: #404040;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;

export const WrapperFooter = styled.div`
  background: #01509a;
  padding-top: 32px;
`;

export const ContentFooter = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 1220px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  color: var(--white);
  font-size: 20px;
  font-weight: 400;
`;

export const CompanyName = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Reserved = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--white);
  font-size: 16px;
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 440px;
`;

        ### 📄 src/components/common/base-autocomplete/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { AutoComplete as BaseAutoComplete } from 'antd';
export type { AutoCompleteProps as BaseAutoCompleteProps } from 'antd';

        ### 📄 src/components/common/base-badge/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/utils, antd, react`
* wb **Type/Intf:** `BaseBadgeProps`

        ```typescript
        import { mapBadgeStatus } from '@/utils';
import { Badge, BadgeProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseBadgeProps = BadgeProps;

interface IBaseBadge extends React.FC<BaseBadgeProps> {
  Ribbon: typeof Badge.Ribbon;
}

export const BaseBadge: IBaseBadge = ({ status, children, count, ...props }) => {
  const countSeverityStatus = count ? { count, $severity: mapBadgeStatus(status) } : { status };
  const transformedProps = status ? countSeverityStatus : { count };
  return (
    <S.Badge {...transformedProps} {...props}>
      {children}
    </S.Badge>
  );
};

BaseBadge.Ribbon = Badge.Ribbon;

        ### 📄 src/components/common/base-badge/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/utils, antd, styled-components`

        ```ts
        import { FONT_SIZE } from '@/constants';
import { defineColorBySeverity } from '@/utils';
import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';

import { NotificationType } from '../base-notification';

interface BadgeProps {
  $severity?: NotificationType;
}

export const Badge = styled(AntBadge)<BadgeProps>`
  .ant-badge-count {
    background: ${(props) => defineColorBySeverity(props.$severity)};
    font-size: ${FONT_SIZE.xs};
  }

  .ant-badge-count-sm {
    font-size: ${FONT_SIZE.xs};
  }
`;

        ### 📄 src/components/common/base-tooltip/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Tooltip as BaseTooltip } from 'antd';
export type { TooltipProps as BaseTooltipProps } from 'antd';

        ### 📄 src/components/common/base-plan/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/cloud-software/icon-cup.svg, @/assets/images/svg/my-profile/icon-checked.svg, @/assets/images/svg/my-profile/icon-fire.svg, @/components/cloud-software/youtube-account/icon-level, @/interfaces`...
* ww **Hooks:** `useTranslation, useAppSelector`

        ```typescript
        import IconCup from '@/assets/images/svg/cloud-software/icon-cup.svg';
import IconChecked from '@/assets/images/svg/my-profile/icon-checked.svg';
import IconFire from '@/assets/images/svg/my-profile/icon-fire.svg';
import { IConLevel } from '@/components/cloud-software/youtube-account/icon-level';
import { LEVEL_USER } from '@/interfaces';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import { formatNumberWithCommas } from '@/utils';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

interface IBaseCardPlan {
  data: InfoPlan;
  isDisableBtn: boolean;
  onHandleGetStarted: (level: keyof typeof LEVEL_USER, data: InfoPlan) => void;
  onHandleCancel: () => void;
}

export const BaseCardPlan = ({
  data,
  isDisableBtn,
  onHandleGetStarted,
  onHandleCancel,
}: IBaseCardPlan) => {
  const { t } = useTranslation(['cloud-software']);
  const user = useAppSelector(selectCurrentUser);

  const {
    level,
    title,
    description,
    currentPriceYear,
    currentPriceMonth,
    salePriceYear,
    salePriceMonth,
    mostPopular,
    currentPlan,
    info,
  } = data;
  return (
    <S.Container $mostPopular={!!mostPopular}>
      {mostPopular && (
        <S.MostPopular>
          {t('youtube.plan-overview.most-popular')} <IconCup />
        </S.MostPopular>
      )}
      <S.Card $mostPopular={!!mostPopular}>
        <S.ContainerLevel>
          <S.Level>{title}</S.Level>
          {<IConLevel size="middle" level={level} />}
        </S.ContainerLevel>
        <S.Description dangerouslySetInnerHTML={{ __html: t(description) }}></S.Description>
        <S.SubSale>
          <b>${formatNumberWithCommas(currentPriceYear)}</b>/{t('youtube.date.year')} ~{' '}
          <b>${formatNumberWithCommas(currentPriceMonth)}</b>/{t('youtube.date.month')}
        </S.SubSale>
        <S.ContainerPrice>
          <S.PriceYear>${formatNumberWithCommas(salePriceYear)}</S.PriceYear>
          <S.PriceMonthDollar>
            ~ ${formatNumberWithCommas(salePriceMonth)}
            <S.PriceMonth>/ {t('youtube.date.month')}</S.PriceMonth>
          </S.PriceMonthDollar>
        </S.ContainerPrice>
        <S.BilledAnnually>/ {t('youtube.date.billAnnually')}</S.BilledAnnually>
        {currentPlan ? (
          <S.DateValid>
            {t('youtube.valid-until')}: {currentPlan.validUntil}
          </S.DateValid>
        ) : (
          <S.Free2MonthContainer>
            <S.Free2Month>
              <IconFire />
              {t('youtube.plan-overview.freeAnnually')}
            </S.Free2Month>
          </S.Free2MonthContainer>
        )}
        {currentPlan ? (
          <S.Button type="default" color="#01509A" style={{ cursor: 'default' }}>
            {t('youtube.plan-overview.currentPlan')}
          </S.Button>
        ) : (
          <S.Button
            type="primary"
            disabled={isDisableBtn}
            onClick={() => onHandleGetStarted(level, data)}
          >
            {t('youtube.plan-overview.getStarted')}
          </S.Button>
        )}
        <S.InfoWrapper>
          {currentPlan && !currentPlan?.isCanceled && !user?.payment_before_deadline && (
            <S.CancelButton onClick={onHandleCancel}>
              {t('youtube.plan-overview.cancelMembership')}
            </S.CancelButton>
          )}
          {info.map((item, index) => (
            <S.Infos key={index}>
              <IconChecked />
              <S.TextInfo dangerouslySetInnerHTML={{ __html: t(item) }}></S.TextInfo>
            </S.Infos>
          ))}
        </S.InfoWrapper>
      </S.Card>
    </S.Container>
  );
};

        ### 📄 src/components/common/base-plan/index.styles.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import styled, { css } from 'styled-components';

import { BaseButton } from '../base-button';

interface ICard {
  $mostPopular: boolean;
}
export const Container = styled.div<ICard>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  ${({ $mostPopular }) =>
    css`
      margin-top: ${$mostPopular ? '0' : '44px'};
    `}
`;

export const MostPopular = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px 12px 0px 0px;
  background: #01509a;
  color: var(--colors-nutral-white-white-main, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

export const Card = styled.div<ICard>`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #404040;
  background: #fff;
  ${({ $mostPopular }) =>
    css`
      border-radius: ${$mostPopular ? '0 0 12px 12px' : '12px'};
    `}
`;

export const ContainerLevel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Level = styled.span`
  color: #404040;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

export const Description = styled.p`
  color: #404040;
  font-size: 13px;
  margin-bottom: 16px;
`;

export const SubSale = styled.del`
  color: #01509a;
  font-size: 16px;
  line-height: normal;
  justify-content: start;
  position: relative;
  width: fit-content;
  margin-bottom: 10px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-top: 3px solid red;
    transform: translateY(-50%);
  }
`;

export const ContainerPrice = styled.div`
  max-width: 235px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceYear = styled.span`
  color: #01509a;
  font-size: 42px;
  font-weight: 700;
  line-height: normal;
`;

export const PriceMonthDollar = styled.b`
  color: #01509a;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const PriceMonth = styled.span`
  color: #01509a;
  font-size: 14px;
  line-height: normal;
`;

export const BilledAnnually = styled.span`
  color: #404040;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const Free2MonthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Free2Month = styled.div`
  display: flex;
  height: 21px;
  width: 250px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 45px;
  background: linear-gradient(90deg, #ed171b 0%, #f89806 100%);
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  svg {
    margin-bottom: 13px;
  }
`;

export const DateValid = styled.span`
  margin-bottom: 12px;
  line-height: 21px;
  font-size: 14px;
  font-weight: 500;
`;

export const Button = styled(BaseButton)<{ color?: string }>`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  ${({ color }) => css`
    color: ${color};
    border-color: ${color};
  `}

  &.ant-btn-primary:disabled {
    background: #99b9d7;
    color: var(--white);
  }
`;

export const CancelButton = styled.div`
  color: #ff5252 !important;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const TextInfo = styled.div`
  color: #404040;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80px;
  margin-top: 8px;
`;

        ### 📄 src/components/common/base-checkbox/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseCheckboxProps`

        ```typescript
        import { CheckboxProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseCheckboxProps = CheckboxProps;

// eslint-disable-next-line react/display-name
const Checkbox = React.forwardRef<HTMLInputElement, BaseCheckboxProps>((props, ref) => {
  return <S.Checkbox {...props} ref={ref} />;
});

type CheckboxForwardRef = typeof Checkbox;

interface IBaseCheckbox extends CheckboxForwardRef {
  Group: typeof S.CheckboxGroup;
}

export const BaseCheckbox = Checkbox as IBaseCheckbox;

BaseCheckbox.Group = S.CheckboxGroup;

        ### 📄 src/components/common/base-checkbox/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Checkbox as AntdCheckbox } from 'antd';
import styled from 'styled-components';

const { Group } = AntdCheckbox;

export const Checkbox = styled(AntdCheckbox)`
  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid var(--primary-color);
  }

  .ant-checkbox-disabled .ant-checkbox-inner {
    border-color: var(--border-base-color);
  }

  &.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--disabled-color);
  }
`;

export const CheckboxGroup = styled(Group)`
  .ant-form-vertical &.ant-checkbox-group {
    display: inline-block;
  }

  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid var(--primary-color);
  }
`;

        ### 📄 src/components/common/base-hashtag/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `IHashTag`
* 🧩 **Component (Arrow):** `BaseHashTag`

        ```typescript
        import React from 'react';

import * as S from './index.styles';

export interface IHashTag {
  id: string;
  title: string;
  bgColor: 'error' | 'success' | 'warning';
}

interface BaseHashTagProps {
  title: string;
  color?: string;
  bgColor?: 'error' | 'success' | 'warning' | 'primary';
  removeTag?: () => void;
}

export const BaseHashTag: React.FC<BaseHashTagProps> = ({
  title,
  color,
  bgColor,
  removeTag,
  ...otherProps
}) => {
  const style = {
    color: color || 'var(--white)',
    backgroundColor: bgColor ? `var(--${bgColor}-color)` : 'var(--orange)',
  };
  return (
    <S.TagWrapper style={style} {...otherProps}>
      #{title}
      {!!removeTag && (
        <S.RemoveTagWrapper
          onClick={(e) => {
            removeTag();
            e.stopPropagation();
          }}
        >
          <S.RemoveTagIcon />
        </S.RemoveTagWrapper>
      )}
    </S.TagWrapper>
  );
};

        ### 📄 src/components/common/base-hashtag/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @ant-design/icons, styled-components`

        ```ts
        import { FONT_SIZE } from '@/constants';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const RemoveTagWrapper = styled.span`
  padding-left: 0.3125rem;
  display: flex;
  align-items: center;
  padding-top: 1px;
`;

export const RemoveTagIcon = styled(CloseOutlined)`
  color: #ffffff;
  font-size: ${FONT_SIZE.xxs};
  cursor: pointer;
`;

export const TagWrapper = styled.span`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem 0.625rem;
  margin: 0;
  font-size: ${FONT_SIZE.xs};
`;

        ### 📄 src/components/common/base-carousel/index.tsx
        > **Context Summary**
        * ww **Hooks:** `useEffect, useCallback, useRef`

        ```typescript
        // @ts-nocheck
import React, { useCallback, useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// eslint-disable-next-line react/display-name
export const BaseCarousel = React.forwardRef<Slider, Settings>(
  (
    {
      slidesToShow = 1,
      arrows = false,
      dots = false,
      infinite = true,
      centerMode = true,
      children,
      ...props
    },
    ref
  ) => {
    const carouselRef = useRef();

    const totalRef = ref || carouselRef;

    const handleScroll = useCallback(
      (event) => {
        const x = event.deltaX;
        const y = event.deltaY;

        if (x > 20 && -5 < y < 5) {
          return totalRef?.current?.slickNext();
        }

        if (x < -20 && -5 < y < 5) {
          return totalRef?.current?.slickPrev();
        }
      },
      [totalRef]
    );

    const handleMouseOn = useCallback(() => {
      document.body.style.overscrollBehaviorX = 'none';
    }, []);

    const handleMouseOff = useCallback(() => {
      document.body.style.overscrollBehaviorX = 'unset';
    }, []);

    useEffect(() => {
      if (totalRef.current) {
        const slickList = totalRef.current?.innerSlider?.list;

        slickList.addEventListener('wheel', handleScroll);

        slickList.addEventListener('mouseover', handleMouseOn);

        slickList.addEventListener('mouseout', handleMouseOff);

        return () => {
          slickList.removeEventListener('wheel', handleScroll);

          slickList.removeEventListener('mouseover', handleMouseOn);

          slickList.removeEventListener('mouseout', handleMouseOff);
        };
      }
    }, [totalRef, handleScroll, handleMouseOn, handleMouseOff]);

    return (
      <Slider
        ref={totalRef}
        slidesToShow={slidesToShow}
        arrows={arrows}
        dots={dots}
        infinite={infinite}
        centerMode={centerMode}
        {...props}
      >
        {children}
      </Slider>
    );
  }
);

        ### 📄 src/components/common/base-carousel/carousel-arrow/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces, react, react-slick`
* 🧩 **Component (Arrow):** `CarouselArrow`

        ```typescript
        import { WithChildrenProps } from '@/interfaces';
import React from 'react';
import { CustomArrowProps } from 'react-slick';

import * as S from './index.styles';

export const CarouselArrow: React.FC<WithChildrenProps<CustomArrowProps>> = ({
  children,
  ...props
}) => {
  return <S.ArrowWrapper {...props}>{children}</S.ArrowWrapper>;
};

        ### 📄 src/components/common/base-carousel/carousel-arrow/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `react-slick, styled-components`

        ```ts
        import { CustomArrowProps } from 'react-slick';
import styled from 'styled-components';

export const ArrowWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentSlide', 'slideCount'].includes(prop),
})<CustomArrowProps>`
  font-size: 1rem;

  color: var(--text-main-color);

  &:before {
    display: none;
  }

  &:hover,
  &:focus {
    color: var(--text-main-color);
  }
`;

        ### 📄 src/components/common/base-collapse/base-collapse.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseCollapseProps`

        ```typescript
        import { Collapse as AntdCollapse, CollapseProps } from 'antd';
import React from 'react';

export type BaseCollapseProps = CollapseProps;

interface IBaseCollapse extends React.FC<BaseCollapseProps> {
  Panel: typeof AntdCollapse.Panel;
}

export const BaseCollapse: IBaseCollapse = (props) => {
  return <AntdCollapse {...props} />;
};

BaseCollapse.Panel = AntdCollapse.Panel;

        ### 📄 src/components/common/base-modal/BaseModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, react`
* 🧩 **Component (Arrow):** `BaseModal`

        ```typescript
        import { modalSizes } from '@/constants';
import { Modal, ModalProps } from 'antd';
import React from 'react';

interface BaseModalProps extends ModalProps {
  size?: 'small' | 'medium' | 'large';
}

export const BaseModal: React.FC<BaseModalProps> = ({ size = 'medium', children, ...props }) => {
  const modalSize = modalSizes[size];

  return (
    <Modal width={modalSize} {...props}>
      {children}
    </Modal>
  );
};

        ### 📄 src/components/common/base-space/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Space as BaseSpace } from 'antd';
export type { SpaceProps as BaseSpaceProps } from 'antd';

        ### 📄 src/components/common/container-wrapper/index.tsx
        > **Context Summary**
        * 🧩 **Component (Arrow):** `ContainerWrapper`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ContainerWrapper: React.FC<Props> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : null;
};

export default ContainerWrapper;

        ### 📄 src/components/common/base-skeleton/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Skeleton as BaseSkeleton } from 'antd';
export type { SkeletonProps as BaseSkeletonProps } from 'antd';

        ### 📄 src/components/common/forms/base-buttons-form/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/forms/base-form, @/components/common/forms/components/base-buttons-group, @/components/common/forms/components/base-form-item, @/components/common/forms/components/base-form-list, @/components/common/forms/components/base-form-title`...
* wb **Type/Intf:** `BaseButtonsFormProps`
* ww **Hooks:** `useForm`

        ```typescript
        import { BaseForm, BaseFormProps, IBaseForm } from '@/components/common/forms/base-form';
import { BaseButtonsGroup } from '@/components/common/forms/components/base-buttons-group';
import { BaseFormItem } from '@/components/common/forms/components/base-form-item';
import { BaseFormList } from '@/components/common/forms/components/base-form-list';
import { BaseFormTitle } from '@/components/common/forms/components/base-form-title';
import React from 'react';

export interface BaseButtonsFormProps extends BaseFormProps {
  isFieldsChanged: boolean;
  setFieldsChanged?: (state: boolean) => void;
  footer?: React.ReactElement;
  loading?: boolean;
}

export const BaseButtonsForm: IBaseForm<BaseButtonsFormProps> = ({
  form,
  isFieldsChanged,
  setFieldsChanged,
  footer,
  loading = false,
  children,
  ...props
}) => {
  const [formDefault] = BaseForm.useForm();
  const currentForm = form || formDefault;

  const onCancel = () => {
    currentForm?.resetFields();
    setFieldsChanged && setFieldsChanged(false);
  };

  return (
    <BaseForm form={currentForm} {...props}>
      {children}
      {isFieldsChanged && (footer || <BaseButtonsGroup loading={loading} onCancel={onCancel} />)}
    </BaseForm>
  );
};

BaseButtonsForm.Title = BaseFormTitle;
BaseButtonsForm.Item = BaseFormItem;
BaseButtonsForm.List = BaseFormList;
BaseButtonsForm.useForm = BaseForm.useForm;
BaseButtonsForm.Provider = BaseForm.Provider;

        ### 📄 src/components/common/forms/base-form/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/forms/components/base-form-item, @/components/common/forms/components/base-form-list, @/components/common/forms/components/base-form-title, antd`
* wb **Type/Intf:** `BaseFormProps`
* wb **Type/Intf:** `BaseFormInstance`
* wb **Type/Intf:** `IBaseForm`
* ww **Hooks:** `useFeedback`

        ```typescript
        import { BaseFormItem } from '@/components/common/forms/components/base-form-item';
import { BaseFormList } from '@/components/common/forms/components/base-form-list';
import { BaseFormTitle } from '@/components/common/forms/components/base-form-title';
// import { useFeedback } from '@/hooks/useFeedback';
import { Form, FormInstance } from 'antd';
// import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React, { ComponentProps } from 'react';

export type BaseFormProps = Omit<ComponentProps<typeof Form>, 'onFinish'> & {
  onFinish?: (values: any) => void;
};

export type BaseFormInstance = FormInstance;

export interface IBaseForm<T> extends React.FC<T> {
  Title: typeof BaseFormTitle;
  Item: typeof BaseFormItem;
  List: typeof BaseFormList;
  useForm: typeof Form.useForm;
  Provider: typeof Form.Provider;
}

export const BaseForm: IBaseForm<BaseFormProps> = ({
  onFinishFailed,
  layout = 'vertical',
  ...props
}) => {
  // const { notification } = useFeedback();

  // const onFinishFailedDefault = (error: ValidateErrorEntity<unknown>) => {
  //   notification.error({
  //     message: 'Error',
  //     description: error.errorFields[0].errors,
  //   });
  // };

  return <Form onFinishFailed={onFinishFailed} layout={layout} {...props} />;
};

BaseForm.Title = BaseFormTitle;
BaseForm.Item = BaseFormItem;
BaseForm.List = BaseFormList;
BaseForm.useForm = Form.useForm;
BaseForm.Provider = Form.Provider;

        ### 📄 src/components/common/forms/components/base-form-title/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-typography, @/constants, styled-components`

        ```ts
        import { BaseTypography } from '@/components/common/base-typography';
import { media } from '@/constants';
import styled from 'styled-components';

export const BaseFormTitle = styled(BaseTypography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and ${media.md} {
    font-size: 1.125rem;
  }
`;

        ### 📄 src/components/common/forms/components/base-buttons-group/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/components/common/base-col, @/components/common/base-row, react`
* 🧩 **Component (Arrow):** `BaseButtonsGroup`

        ```typescript
        import { BaseButton, BaseButtonProps } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseRow } from '@/components/common/base-row';
import React from 'react';

interface BaseButtonsGroupProps extends BaseButtonProps {
  className?: string;
  onCancel: () => void;
  loading?: boolean;
}

export const BaseButtonsGroup: React.FC<BaseButtonsGroupProps> = ({
  className,
  onCancel,
  loading,
  ...props
}) => {
  return (
    <BaseRow className={className} gutter={[10, 10]} wrap={false}>
      <BaseCol span={12}>
        <BaseButton block ghost onClick={onCancel} {...props}>
          Cancel
        </BaseButton>
      </BaseCol>
      <BaseCol span={12}>
        <BaseButton block type="primary" loading={loading} htmlType="submit" {...props}>
          Save
        </BaseButton>
      </BaseCol>
    </BaseRow>
  );
};

        ### 📄 src/components/common/forms/components/base-buttons-group/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import styled from 'styled-components';

export const Btn = styled(BaseButton)`
  width: 100%;
`;

        ### 📄 src/components/common/forms/components/base-form-item/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, react`
* wb **Type/Intf:** `BaseFormItemProps`

        ```ts
        import { FONT_SIZE, media } from '@/constants';
import { Form, FormItemProps } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';

interface InternalFormItemProps {
  $isSuccess?: boolean;
  $successText?: string;
}

export type BaseFormItemProps = FormItemProps;

export const BaseFormItem = styled(Form.Item as React.FC<FormItemProps>)<InternalFormItemProps>`
  .ant-input {
    font-size: 1rem;
  }

  .ant-input:disabled {
    color: var(--disabled-color);
    background-color: var(--disabled-bg-color);
    cursor: not-allowed;
  }

  .ant-form-item-label > label {
    color: var(--primary-color);
    font-size: ${FONT_SIZE.xs};

    .ant-form-item-optional {
      color: var(--subtext-color);
    }
  }

  .ant-input-group-addon:first-of-type {
    font-weight: 600;
    width: 5rem;

    color: var(--primary-color);

    .anticon,
    svg {
      font-size: 1.25rem;
    }

    @media only screen and ${media.md} {
      width: 5.5rem;
      font-size: 1.125rem;
    }

    @media only screen and ${media.xl} {
      font-size: 1.5rem;
    }
  }

  .ant-input-suffix .ant-btn {
    padding: 0;
    width: unset;
    height: unset;
    line-height: 1;
  }

  .ant-form-item-explain-error {
    display: flex;
    margin: 0.5rem 0;
    line-height: 1;

    &:not(:first-of-type) {
      display: none;
    }
  }

  ${(props) =>
    props.$isSuccess &&
    css`
      .ant-input {
        &,
        &:hover {
          border-color: var(--success-color);
        }
      }

      .ant-form-item-control-input {
        display: block;

        &::after {
          content: '✓ ${props.$successText}';
          color: var(--success-color);
        }
      }
    `}

  &.ant-form-item-has-feedback .ant-form-item-children-icon {
    display: none;
  }

  .ant-picker-suffix {
    font-size: 1rem;
  }

  .ant-select-arrow {
    font-size: 1rem;
    width: unset;
    height: unset;
    top: 50%;
  }

  &.ant-form-item-has-error {
    .ant-input,
    .ant-input-affix-wrapper,
    .ant-input:hover,
    .ant-input-affix-wrapper:hover {
      border-color: var(--error-color);
    }
  }

  &.ant-form-item-has-success.ant-form-item-has-feedback {
    .ant-input,
    .ant-input-affix-wrapper,
    .ant-input:hover,
    .ant-input-affix-wrapper:hover {
      border-color: var(--success-color);
    }
  }

  & .ant-form-item-row {
    flex-wrap: inherit;
  }
`;

        ### 📄 src/components/common/forms/components/base-form-list/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Form } from 'antd';
import styled from 'styled-components';

export const BaseFormList = styled(Form.List)``;

        ### 📄 src/components/common/base-typography/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Typography as BaseTypography } from 'antd';
export type { TypographyProps as BaseTypographyProps } from 'antd';

        ### 📄 src/components/common/base-spin/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Spin as BaseSpin } from 'antd';
export type { SpinProps as BaseSpinProps } from 'antd';

        ### 📄 src/components/common/base-cascader/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Cascader as BaseCascader } from 'antd';
export type { CascaderProps as BaseCascaderProps } from 'antd';

        ### 📄 src/components/common/base-loading/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-spinner/global-spinner, @/styles/themes/theme-variables, react, styled-components`
* 🧩 **Component (Arrow):** `BaseLoading`
* ww **Hooks:** `useAppSelector`

        ```typescript
        import { GlobalSpinner } from '@/components/common/base-spinner/global-spinner';
// import { useAppSelector } from "@/hooks/reduxHooks";
import { themeObject } from '@/styles/themes/theme-variables';
import React from 'react';
import styled from 'styled-components';

interface LoadingProps {
  size?: string;
  color?: string;
}

export const BaseLoading: React.FC<LoadingProps> = ({ size, color }) => {
  // const theme = useAppSelector((state) => state.theme.theme);
  const theme = 'light';
  const spinnerColor = color || themeObject[theme].spinnerBase;

  return (
    <SpinnerContainer>
      <GlobalSpinner size={size} color={spinnerColor} />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

        ### 📄 src/components/common/base-result/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseResultProps`
* 🧩 **Component (Arrow):** `BaseResult`

        ```typescript
        import { ResultProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseResultProps = ResultProps;

export const BaseResult: React.FC<BaseResultProps> = (props) => {
  return <S.Result {...props} />;
};

        ### 📄 src/components/common/base-result/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Result as AntResult } from 'antd';
import styled from 'styled-components';

export const Result = styled(AntResult)`
  .ant-result-title {
    margin: 0;
  }
`;

        ### 📄 src/components/common/not-found/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `assets/images/nothing-found.webp, react`
* 🧩 **Component (Arrow):** `NotFound`

        ```typescript
        import notFoundImg from 'assets/images/nothing-found.webp';
import React from 'react';

import { BaseImage } from '../base-image';
import * as S from './index.styles';

export const NotFound: React.FC = () => {
  return (
    <S.NotFoundWrapper>
      <S.ImgWrapper>
        <BaseImage src={notFoundImg as unknown as string} alt="Not found" preview={false} />
      </S.ImgWrapper>
      <S.Text>Not Found</S.Text>
    </S.NotFoundWrapper>
  );
};

        ### 📄 src/components/common/not-found/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

import { BaseTypography } from '../base-typography';

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  max-width: 7.5rem;
`;

export const Text = styled(BaseTypography.Text)`
  font-weight: 700;
  font-size: 1.125rem;
`;

        ### 📄 src/components/common/base-tabs/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseTabsProps`
* 🧩 **Component (Arrow):** `BaseTabs`

        ```typescript
        import { TabsProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseTabsProps = TabsProps;

export const BaseTabs: React.FC<BaseTabsProps> = ({ children, ...props }) => {
  return <S.Tabs {...props}>{children}</S.Tabs>;
};

        ### 📄 src/components/common/base-tabs/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Tabs as AntdTabs } from 'antd';
import styled from 'styled-components';

export const Tabs = styled(AntdTabs)`
  .ant-tabs-tab.ant-tabs-tab-disabled {
    color: var(--disabled-color);
  }

  &.ant-tabs .ant-tabs-tab:not(.ant-tabs-tab-active) {
    .ant-tabs-tab-btn,
    .ant-tabs-tab-remove {
      &:focus-visible {
        color: var(--ant-primary-7);
      }
    }
  }
`;

        ### 📄 src/components/common/base-breadcrumb/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `BaseBreadcrumbItemType`
* wb **Type/Intf:** `BaseBreadcrumbProps`

        ```typescript
        import type { BreadcrumbProps } from 'antd';
import type { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { FC } from 'react';

import * as S from './index.styles';

export type BaseBreadcrumbItemType = BreadcrumbItemType;

export type BaseBreadcrumbProps = BreadcrumbProps;

export const BaseBreadcrumb: FC<BaseBreadcrumbProps> = (props) => {
  return <S.Breadcrumb {...props} />;
};

        ### 📄 src/components/common/base-breadcrumb/index.styles.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```typescript
        import { Breadcrumb as AntBreadcrumb } from 'antd';
import styled from 'styled-components';

export const Breadcrumb = styled(AntBreadcrumb)`
  &.ant-breadcrumb {
    li:last-child {
      .ant-breadcrumb-link {
        color: var(--text-main-color);
      }
    }
  }
`;

        ### 📄 src/components/common/base-calendar/index.tsx
        > **Context Summary**
        * wb **Type/Intf:** `BaseCalendarProps`

        ```typescript
        // import type { CalendarProps } from 'antd';
// import type { Dayjs } from 'dayjs';
// import { FC } from 'react';

// import * as S from './index.styles';

// export type BaseCalendarProps = CalendarProps<Dayjs>;

// export const BaseCalendar: FC<BaseCalendarProps> = (props) => {
//   return <S.Calendar {...props} />;
// };

        ### 📄 src/components/common/base-calendar/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, styled-components`

        ```ts
        import { FONT_WEIGHT } from '@/constants';
import { Calendar as AntCalendar } from 'antd';
import styled from 'styled-components';

export const Calendar = styled(AntCalendar)`
  .ant-picker-cell-in-view .ant-picker-calendar-date-value {
    font-weight: ${FONT_WEIGHT.bold};
  }
`;

        ### 📄 src/components/common/base-rate/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseRateProps`
* 🧩 **Component (Arrow):** `BaseRate`

        ```typescript
        import { RateProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseRateProps = RateProps;

export const BaseRate: React.FC<BaseRateProps> = (props) => {
  return <S.Rate {...props} />;
};

        ### 📄 src/components/common/base-rate/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, styled-components`

        ```ts
        import { FONT_SIZE } from '@/constants';
import { Rate as AntdRate } from 'antd';
import styled from 'styled-components';

export const Rate = styled(AntdRate)`
  font-size: ${FONT_SIZE.lg};
`;

        ### 📄 src/components/common/base-layout/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Layout as BaseLayout } from 'antd';
export type { LayoutProps as BaseLayoutProps } from 'antd';

        ### 📄 src/components/common/selects/base-select/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces, antd, antd/lib/select`
* wb **Type/Intf:** `BaseSelectProps`

        ```typescript
        import { Dimension } from '@/interfaces';
import { Select as AntSelect } from 'antd';
import { RefSelectProps } from 'antd/lib/select';
import React, { ComponentProps } from 'react';

import * as S from './index.styles';

export const { Option } = AntSelect;

export interface BaseSelectProps extends ComponentProps<typeof AntSelect> {
  width?: Dimension;
  shadow?: boolean;
  className?: string;
}

// eslint-disable-next-line react/display-name
export const BaseSelect = React.forwardRef<RefSelectProps, BaseSelectProps>(
  ({ className, width, shadow, children, ...props }, ref) => (
    <S.Select
      getPopupContainer={(triggerNode) => triggerNode}
      ref={ref}
      className={className}
      $width={width}
      $shadow={shadow}
      {...props}
    >
      {children}
    </S.Select>
  )
);

        ### 📄 src/components/common/selects/base-select/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/interfaces, @/utils, antd, styled-components`
* wb **Type/Intf:** `InternalSelectProps`

        ```ts
        import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { Dimension } from '@/interfaces';
import { normalizeProp } from '@/utils';
import { Select as AntSelect } from 'antd';
import styled from 'styled-components';

export interface InternalSelectProps {
  $width?: Dimension;
  $shadow?: boolean;
}

export const Select = styled(AntSelect)<InternalSelectProps>`
  width: ${(props) => props.$width && normalizeProp(props.$width)};

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: ${FONT_WEIGHT.medium};
  }

  box-shadow: ${(props) => props.$shadow && 'var(--box-shadow)'};

  &.ant-select-borderless {
    background: var(--secondary-background-color) !important;
    border-radius: ${BORDER_RADIUS};
  }

  .ant-select-selection-placeholder {
    font-size: ${FONT_SIZE.xs};
  }

  .ant-select-item {
    min-height: unset;
    padding-block: 5px;
  }

  &.ant-select-multiple {
    &.ant-select-disabled .ant-select-selection-item {
      color: #bfbfbf;
      border: 1px solid var(--border-base-color);
    }

    .ant-select-selection-item {
      border: 1px solid #f0f0f0;
      margin-inline-end: 11px;
    }

    .ant-select-selector {
      padding-inline-start: 11px;
    }
  }
`;

        ### 📄 src/components/common/selects/month-select/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/utils`
* 🧩 **Component (Arrow):** `MonthSelect`
* ww **Hooks:** `useMemo`

        ```typescript
        import { Dates } from '@/utils';
import React, { useMemo } from 'react';

import { BaseSelect, BaseSelectProps, Option } from '../base-select';

export const MonthSelect: React.FC<BaseSelectProps> = ({ className, ...props }) => {
  const months = Dates.getMonths();

  const monthsOptions = useMemo(
    () =>
      months.map((month, index) => (
        <Option key={index} value={index}>
          {month}
        </Option>
      )),
    [months]
  );

  return (
    <BaseSelect className={className} {...props}>
      {monthsOptions}
    </BaseSelect>
  );
};

        ### 📄 src/components/common/base-progress/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseProgressProps`
* 🧩 **Component (Arrow):** `BaseProgress`

        ```typescript
        import { Progress, ProgressProps } from 'antd';
import React from 'react';

export type BaseProgressProps = ProgressProps;

export const BaseProgress: React.FC<ProgressProps> = (props) => {
  return <Progress {...props} />;
};

        ### 📄 src/components/common/base-dropdown/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* 🧩 **Component (Arrow):** `BaseDropdown`

        ```typescript
        import { Dropdown, DropdownProps } from 'antd';
import React from 'react';

export const BaseDropdown: React.FC<DropdownProps> = ({ children, ...props }) => {
  return (
    <Dropdown getPopupContainer={(triggerNode) => triggerNode} {...props}>
      {children}
    </Dropdown>
  );
};

        ### 📄 src/components/common/base-card/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/hooks/useResponsive, antd, react`
* wb **Type/Intf:** `BaseCardProps`
* 🧩 **Component (Arrow):** `BaseCard`
* ww **Hooks:** `useResponsive`

        ```typescript
        import { defaultPaddings } from '@/constants';
import { useResponsive } from '@/hooks/useResponsive';
import { CardProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export interface BaseCardProps extends CardProps {
  className?: string;
  padding?: string | number | [number, number];
  autoHeight?: boolean;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  className,
  padding,
  size,
  autoHeight = true,
  children,
  ...props
}) => {
  const { isTablet, isDesktop } = useResponsive();

  return (
    <S.Card
      size={size ? size : isTablet ? 'default' : 'small'}
      className={className}
      bordered={false}
      $padding={
        padding || padding === 0
          ? padding
          : (isDesktop && defaultPaddings.desktop) ||
            (isTablet && defaultPaddings.tablet) ||
            defaultPaddings.mobile
      }
      $autoHeight={autoHeight}
      {...props}
    >
      {children}
    </S.Card>
  );
};

        ### 📄 src/components/common/base-card/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/utils, antd, styled-components`

        ```ts
        import { FONT_SIZE, FONT_WEIGHT, media } from '@/constants';
import { normalizeProp } from '@/utils';
import { Card as AntCard } from 'antd';
import styled from 'styled-components';

interface CardInternalProps {
  $padding: string | number | [number, number];
  $autoHeight: boolean;
}

export const Card = styled(AntCard)<CardInternalProps>`
  display: flex;
  flex-direction: column;

  ${(props) => props.$autoHeight && 'height: 100%'};

  .ant-card-head {
    border-bottom: 0;
    font-weight: ${FONT_WEIGHT.bold};

    padding-top: 15px;
    padding-bottom: 15px;
    min-height: 36px;

    @media only screen and ${media.md} {
      padding-top: 20px;
      padding-bottom: 0;
      min-height: 48px;
    }

    @media only screen and ${media.xl} {
      font-size: ${FONT_SIZE.xxl};
    }

    .ant-card-head-title {
      white-space: unset;
      overflow: unset;
      padding-bottom: 0;

      @media only screen and ${media.xl} {
        padding-bottom: 0.25rem;
      }
    }
  }

  .ant-card-body {
    flex-grow: 1;

    padding: ${(props) => props.$padding && normalizeProp(props.$padding)};
  }

  .ant-card-bordered {
    border-color: #f0f0f0;
  }
`;

        ### 📄 src/components/common/base-steps/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseStepsProps`
* 🧩 **Component (Arrow):** `BaseSteps`

        ```typescript
        import { StepsProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseStepsProps = StepsProps;

export const BaseSteps: React.FC<BaseStepsProps> = ({ children, ...otherProps }) => {
  return <S.Steps {...otherProps}>{children}</S.Steps>;
};

        ### 📄 src/components/common/base-steps/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, styled-components`

        ```ts
        import { FONT_SIZE, FONT_WEIGHT, media } from '@/constants';
import { Steps as AntdSteps } from 'antd';
import styled from 'styled-components';

export const Steps = styled(AntdSteps)`
  font-size: unset;

  &
    .ant-steps-item-process
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.xs};

    @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.md};
    }
  }

  .ant-steps-item-wait
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: var(--text-main-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.xs};

    @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.md};
    }
  }
  .ant-steps-item-wait .ant-steps-item-icon {
    border-color: var(--disabled-color);

    & > .ant-steps-icon {
      color: var(--disabled-color);
    }
  }

  .ant-steps-item-container {
    display: flex;
    align-items: baseline;
  }

  &.ant-steps-vertical {
    .ant-steps-item-container {
      align-items: flex-start;
    }
  }
  &.ant-steps-vertical.ant-steps-small {
    .ant-steps-item-container .ant-steps-item-tail {
      padding: 1.625rem 0 0.375rem;
    }
  }
  & .ant-steps-item {
    &:not(.ant-steps-item-process) {
      .ant-steps-item-description {
        color: var(--subtext-color);
      }
    }
    .ant-steps-item-subtitle {
      color: var(--subtext-color);
    }
  }
`;

        ### 📄 src/components/common/base-spinner/global-spinner.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/utils, styled-components`
* 🧩 **Component (Arrow):** `SpinnerOriginal`
* ww **Hooks:** `useMemo`

        ```typescript
        import { hexToHSL } from '@/utils';
import React, { useMemo } from 'react';
import styled from 'styled-components';

interface SpinnerOriginalProps {
  className?: string;
  color: string;
}

const SpinnerOriginal: React.FC<SpinnerOriginalProps> = ({ className, color }) => {
  const colors = useMemo(
    () =>
      new Array(6).fill(color).map((color, index) => {
        const { h, s, l } = hexToHSL(color);
        const newH = Math.min(360, h * 360 + 10 * index);
        const rounded = [newH, s * 100, l * 100].map(Math.round);

        return `hsl(${rounded[0]}, ${rounded[1]}%, ${rounded[2]}%)`;
      }),
    [color]
  );

  return (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle
        className="pl__ring1"
        cx="64"
        cy="64"
        r="60"
        fill="none"
        stroke={colors[0]}
        strokeWidth="8"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="377 377"
        strokeDashoffset="-376.4"
      />
      <circle
        className="pl__ring2"
        cx="64"
        cy="64"
        r="52.5"
        fill="none"
        stroke={colors[1]}
        strokeWidth="7"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="329.9 329.9"
        strokeDashoffset="-329.3"
      />
      <circle
        className="pl__ring3"
        cx="64"
        cy="64"
        r="46"
        fill="none"
        stroke={colors[2]}
        strokeWidth="6"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="289 289"
        strokeDashoffset="-288.6"
      />
      <circle
        className="pl__ring4"
        cx="64"
        cy="64"
        r="40.5"
        fill="none"
        stroke={colors[3]}
        strokeWidth="5"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="254.5 254.5"
        strokeDashoffset="-254"
      />
      <circle
        className="pl__ring5"
        cx="64"
        cy="64"
        r="36"
        fill="none"
        stroke={colors[4]}
        strokeWidth="4"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="226.2 226.2"
        strokeDashoffset="-225.8"
      />
      <circle
        className="pl__ring6"
        cx="64"
        cy="64"
        r="32.5"
        fill="none"
        stroke={colors[5]}
        strokeWidth="3"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="204.2 204.2"
        strokeDashoffset="-203.9"
      />
    </svg>
  );
};

interface GlobalSpinnerProps {
  size?: string;
}

export const GlobalSpinner = styled(SpinnerOriginal)<GlobalSpinnerProps>`
  width: ${(props) => props.size || '8em'};
  height: ${(props) => props.size || '8em'};

  circle {
    transform-box: fill-box;
    transform-origin: 50% 50%;
  }
  .pl__ring1 {
    animation: ring1 4s 0s ease-in-out infinite;
  }
  .pl__ring2 {
    animation: ring2 4s 0.04s ease-in-out infinite;
  }
  .pl__ring3 {
    animation: ring3 4s 0.08s ease-in-out infinite;
  }
  .pl__ring4 {
    animation: ring4 4s 0.12s ease-in-out infinite;
  }
  .pl__ring5 {
    animation: ring5 4s 0.16s ease-in-out infinite;
  }
  .pl__ring6 {
    animation: ring6 4s 0.2s ease-in-out infinite;
  }

  /* Animations */
  @keyframes ring1 {
    from {
      stroke-dashoffset: -376.237129776;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -94.247778;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -376.237129776;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -94.247778;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -376.237129776;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring2 {
    from {
      stroke-dashoffset: -329.207488554;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -82.46680575;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -329.207488554;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -82.46680575;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -329.207488554;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring3 {
    from {
      stroke-dashoffset: -288.4484661616;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -72.2566298;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -288.4484661616;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -72.2566298;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -288.4484661616;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring4 {
    from {
      stroke-dashoffset: -253.9600625988;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -63.61725015;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -253.9600625988;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -63.61725015;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -253.9600625988;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring5 {
    from {
      stroke-dashoffset: -225.7422778656;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -56.5486668;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -225.7422778656;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -56.5486668;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -225.7422778656;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring6 {
    from {
      stroke-dashoffset: -203.795111962;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -51.05087975;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -203.795111962;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -51.05087975;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -203.795111962;
      transform: rotate(4.75turn);
    }
  }
`;

        ### 📄 src/components/common/error-boundary/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`

        ```typescript
        import React from 'react';

import { BaseTypography } from '../base-typography';
import * as S from './index.style';

interface State {
  hasError: boolean;
}

const { Title } = BaseTypography;

class ErrorBoundary extends React.Component<any, State> {
  constructor(props: {}) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <S.wrapper>
          <Title level={1}>Oops, there is an error!</Title>
          <S.reloadBtn
            onClick={() => {
              this.setState({ hasError: false });
            }}
          >
            Try again?
          </S.reloadBtn>
        </S.wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

        ### 📄 src/components/common/error-boundary/index.style.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, styled-components`

        ```ts
        import { BASE_COLORS } from '@/constants';
import { styled } from 'styled-components';

import { BaseButton } from '../base-button';

export const wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  z-index: 9999;
`;

export const reloadBtn = styled(BaseButton)`
  background-color: ${BASE_COLORS.skyblue} !important;
  color: ${BASE_COLORS.white} !important;
`;

        ### 📄 src/components/common/base-table/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseTableProps`

        ```typescript
        import { TableProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

type AnyRecord = Record<PropertyKey, any>;

export type BaseTableProps<T extends AnyRecord> = TableProps<T>;

// TODO make generic!
export const BaseTable = <T extends AnyRecord>(props: BaseTableProps<T>): React.JSX.Element => {
  return <S.Table {...props} />;
};

        ### 📄 src/components/common/base-table/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, styled-components`

        ```ts
        import { FONT_SIZE } from '@/constants';
import { Table as AntdTable } from 'antd';
import styled from 'styled-components';

export const Table = styled(AntdTable)`
  & .ant-table-content {
    border: 1px solid #d9d9d9;
  }

  & thead .ant-table-cell {
    color: var(--text-main-color) !important;
    background: var(--primary1-color) !important;
    font-size: ${FONT_SIZE.md};
    line-height: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid #d9d9d9 !important;

    /* & .anticon {
      color: var(--primary-color);
    } */
  }

  & tbody .ant-table-cell {
    color: var(--text-main-color);
    font-size: ${FONT_SIZE.md};
    line-height: 1.25rem;
    border-bottom: 1px solid #d9d9d9 !important;
  }

  & tbody .ant-table-row-expand-icon {
    min-height: 1.25rem;
    min-width: 1.25rem;
    border-radius: 0.1875rem;
    margin-top: 0;
  }

  /* Override default antd selector */
  &
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not(
      [colspan]
    )::before {
    background-color: var(--primary-color);
  }

  & .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next,
  .ant-select-selector,
  .ant-select-selection-search-input,
  .ant-select-selection-item,
  .ant-pagination-item {
    min-width: 2.0625rem;
    height: 2.0625rem !important;
    line-height: 2.0625rem !important;
    border-radius: 0;
    font-size: ${FONT_SIZE.xs};
    border-radius: 4px;
  }

  & .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-radius: 4px;
  }

  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid var(--primary-color);
  }

  & .editable-row .ant-form-item-explain {
    position: absolute;
    top: 100%;
    font-size: 0.75rem;
  }

  .ant-table-column-sort {
    background-color: transparent;
  }

  .ant-pagination-item-container .ant-pagination-item-ellipsis {
    color: var(--disabled-color);
  }

  .ant-pagination-disabled {
    .ant-pagination-item-link,
    .ant-pagination-item a {
      color: var(--disabled-color);
    }
  }

  .ant-pagination.ant-pagination-disabled {
    .ant-pagination-item-link,
    .ant-pagination-item a {
      color: var(--disabled-color);
    }
  }

  .ant-pagination .ant-pagination-item-active {
    background: #01509a;
    a {
      color: var(--white);
    }
  }
` as typeof AntdTable;

        ### 📄 src/components/common/base-status/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Arrow):** `Status`

        ```typescript
        import React from 'react';

import * as S from './index.styles';

interface StatusProps {
  color: string;
  text: string;
}

export const Status: React.FC<StatusProps> = ({ color, text }) => (
  <S.StatusTag color={color}>{text}</S.StatusTag>
);

        ### 📄 src/components/common/base-status/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-tag, @/constants, styled-components`

        ```ts
        import { BaseTag } from '@/components/common/base-tag';
import { media } from '@/constants';
import styled from 'styled-components';

export const StatusTag = styled(BaseTag)`
  padding: 0.375rem 0;
  min-width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  @media only screen and ${media.md} {
    min-width: 6.5rem;
  }
`;

        ### 📄 src/components/common/base-notification/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@ant-design/icons, react`
* wb **Type/Intf:** `NotificationType`
* 🧩 **Component (Arrow):** `BaseNotification`

        ```typescript
        import {
  CheckCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
  WarningFilled,
} from '@ant-design/icons';
import React from 'react';

import { BaseSpace } from '../base-space';
import * as S from './index.styles';

interface Icons {
  info: React.ReactNode;
  success: React.ReactNode;
  warning: React.ReactNode;
  error: React.ReactNode;
  mention: React.ReactNode;
}

export type NotificationType = 'info' | 'mention' | 'success' | 'warning' | 'error';

interface BaseNotificationProps {
  type: NotificationType;
  title: React.ReactNode;
  description?: React.ReactNode;
  mentionIconSrc?: React.ReactNode;
}

export const BaseNotification: React.FC<BaseNotificationProps> = ({
  type,
  mentionIconSrc,
  title,
  description,
}) => {
  const icons: Icons = {
    info: <InfoCircleFilled />,
    success: <CheckCircleFilled />,
    warning: <ExclamationCircleFilled />,
    error: <WarningFilled />,
    mention: mentionIconSrc,
  };

  const icon = icons[type] || icons.warning;

  return (
    <S.SpaceWrapper type={type} align="start" size="middle">
      {mentionIconSrc ? <S.NotificationIcon src={icon} alt="User icon" /> : icon}
      <BaseSpace direction="vertical">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </BaseSpace>
    </S.SpaceWrapper>
  );
};

        ### 📄 src/components/common/base-notification/index.styles.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import styled, { css } from 'styled-components';

import { NotificationType } from '.';
import { BaseAvatar } from '../base-avatar';
import { BaseSpace } from '../base-space';
import { BaseTypography } from '../base-typography';

interface SpacewWrapperProps {
  type: NotificationType;
}

export const NotificationIcon = styled(BaseAvatar)``;

export const Title = styled(BaseTypography.Text)`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Description = styled(BaseTypography.Text)`
  font-size: 0.875rem;
`;

export const SpaceWrapper = styled(BaseSpace)<SpacewWrapperProps>`
  background-color: var(--background-color);

  & ${Title}, span[role='img'] {
    ${(props) => {
      switch (props.type) {
        case 'error':
        case 'warning':
        case 'success':
          return css`
            color: var(--${props.type}-color);
          `;
        case 'info':
        case 'mention':
          return css`
            color: var(--primary-color);
          `;
        default:
          return '';
      }
    }}
  }

  & span[role='img'] {
    font-size: 2rem;
  }
`;

        ### 📄 src/components/common/calendar-switch/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@ant-design/icons, react`
* wb **Type/Intf:** `CalendarSwitchProps`
* 🧩 **Component (Arrow):** `CalendarSwitch`

        ```typescript
        import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';

import { BaseButton } from '../base-button';
import * as S from './index.styles';

export interface CalendarSwitchProps {
  dateFormatted: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onToday: () => void;
}

export const CalendarSwitch: React.FC<CalendarSwitchProps> = ({
  dateFormatted,
  onIncrease,
  onDecrease,
  onToday,
}) => {
  return (
    <S.CalendarSwitch>
      <S.Text>{dateFormatted}</S.Text>
      <S.ButtonGroup>
        <BaseButton type="text" onClick={onDecrease} size="small">
          <LeftOutlined />
        </BaseButton>
        <BaseButton type="text" onClick={onToday} size="small">
          today
        </BaseButton>
        <BaseButton type="text" onClick={onIncrease} size="small">
          <RightOutlined />
        </BaseButton>
      </S.ButtonGroup>
    </S.CalendarSwitch>
  );
};

        ### 📄 src/components/common/calendar-switch/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, styled-components`

        ```ts
        import { FONT_SIZE, media } from '@/constants';
import styled from 'styled-components';

import { BaseTypography } from '../base-typography';

export const CalendarSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled(BaseTypography.Text)`
  font-weight: bold;
  font-size: ${FONT_SIZE.xs};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  & > * {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
`;

        ### 📄 src/components/common/base-slider/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseSliderProps`
* 🧩 **Component (Arrow):** `BaseSlider`

        ```typescript
        import { SliderSingleProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseSliderProps = SliderSingleProps;

export const BaseSlider: React.FC<SliderSingleProps> = (props) => {
  return <S.Slider {...props} />;
};

        ### 📄 src/components/common/base-slider/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Slider as AntdSlider } from 'antd';
import styled from 'styled-components';

export const Slider = styled(AntdSlider)`
  &.ant-slider.ant-slider-disabled .ant-slider-rail {
    background-color: var(--background-base-color) !important;
  }

  &.ant-slider .ant-slider-handle:focus::after {
    outline: 6px solid rgba(var(--primary-color), 0.2);
  }

  & .ant-slider-mark-text:not(.ant-slider-mark-text-active) {
    color: var(--subtext-color);
  }
`;

        ### 📄 src/components/common/no-data/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-no-data.svg, next-i18next, react`
* 🧩 **Component (Arrow):** `NoData`
* ww **Hooks:** `useTranslation`

        ```typescript
        import IconNoData from '@/assets/images/svg/icon-no-data.svg';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

interface IProps {
  subText?: string;
  titleSize?: 'md' | 'sm';
}

export const NoData: React.FC<IProps> = (props) => {
  const { subText, titleSize } = props;
  const { t } = useTranslation();
  return (
    <S.NotFoundWrapper>
      <S.ImgWrapper>
        <IconNoData />
      </S.ImgWrapper>
      <S.Text size={titleSize}>{t('noData')}</S.Text>
      {subText && <S.SubText>{subText}</S.SubText>}
    </S.NotFoundWrapper>
  );
};

        ### 📄 src/components/common/no-data/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

import { BaseTypography } from '../base-typography';

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const ImgWrapper = styled.div`
  max-width: 7.5rem;
`;

export const Text = styled(BaseTypography.Text)<{ size?: string }>`
  color: #404040;
  text-align: center;
  font-size: ${(props) => (props.size === 'md' ? '20px' : '16px')};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubText = styled(BaseTypography.Text)`
  color: #404040;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

        ### 📄 src/components/common/seo-header/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/head, next/router`
* ww **Hooks:** `useRouter`

        ```typescript
        import Head from 'next/head';
import { useRouter } from 'next/router';

interface MetaProps {
  title?: string;
  siteName?: string;
  templateTitle?: string;
  description?: string;
  date?: string;
  url?: string;
  type?: string;
  robots?: string;
  image?: string;
  author?: string;
}

// Default value for some meta data
const defaultMeta = {
  title: 'Card secret',
  siteName: 'Card secret',
  description: 'Card secret',
  // change base url of your web (without '/' at the end)
  url: '',
  type: 'website',
  robots: 'follow, index',
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  image: '',
  author: '',
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props: MetaProps) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:secure_url" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@F2aldi" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta name="publish_date" property="og:publish_date" content={meta.date} />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-touch-icon.png',
  },

  {
    rel: 'icon',
    href: '/favicon.ico',
  },

  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },

  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },

  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-chrome-192x192.png',
  },

  {
    rel: 'icon',
    type: 'image/png',
    sizes: '512x512',
    href: '/favicon/android-chrome-512x512.png',
  },

  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
];

export default SeoHead;

        ### 📄 src/components/common/base-button/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseButtonProps`

        ```typescript
        import type { Severity } from '@/interfaces';
import { ButtonProps as AntButtonProps, Button as AntdButton } from 'antd';
import React from 'react';

import * as S from './index.styles';

export const { Group: ButtonGroup } = AntdButton;

export interface BaseButtonProps extends AntButtonProps {
  severity?: Severity;
  noStyle?: boolean;
}

// eslint-disable-next-line react/display-name
export const BaseButton = React.forwardRef<HTMLElement, BaseButtonProps>(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.Button>
  )
);

        ### 📄 src/components/common/base-button/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/interfaces, @/utils, antd`

        ```ts
        import { FONT_WEIGHT } from '@/constants';
import { Severity } from '@/interfaces';
import { defineColorBySeverity } from '@/utils';
import { Button as AntButton } from 'antd';
import styled, { css } from 'styled-components';

interface BtnProps {
  $severity?: Severity;
  $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  transition-duration: 0.3s;

  font-weight: ${FONT_WEIGHT.semibold};
  box-shadow: none;

  ${(props) =>
    props.$noStyle &&
    css`
      width: unset;
      padding: 0;
      height: unset;
    `}

  &.ant-btn-dangerous {
    &.ant-btn-text {
      &:focus,
      &:not(:disabled):hover {
        background: rgba(0, 0, 0, 0.018);
      }
    }
  }

  ${(props) =>
    !props.danger &&
    css`
      &.ant-btn-background-ghost {
        color: var(--primary-color);
        border-color: var(--primary-color);

        &:disabled {
          background-color: var(--disabled-bg-color);
        }
      }

      &.ant-btn-link {
        span,
        a {
          text-decoration: underline;
        }
      }

      &:focus,
      &:not(:disabled):hover {
        &.ant-btn-default,
        &.ant-btn-dashed {
          color: var(--ant-primary-5);
          border-color: var(--ant-primary-5);
        }
      }

      &:focus {
        &.ant-btn-link,
        &.ant-btn-background-ghost {
          color: var(--ant-primary-5);
        }

        &.ant-btn-text {
          background-color: rgba(0, 0, 0, 0.018);
        }

        &.ant-btn-primary {
          background-color: var(--ant-primary-5);
        }

        &.ant-btn-primary,
        &.ant-btn-background-ghost {
          border-color: var(--ant-primary-5);
        }
      }

      &:not(:disabled):hover {
        &.ant-btn-primary {
          background-color: var(--secondary-color);
        }

        &.ant-btn-text,
        &.ant-btn-background-ghost {
          color: var(--secondary-color);
          background-color: transparent;
        }

        &.ant-btn-primary,
        &.ant-btn-background-ghost {
          border-color: var(--secondary-color);
        }
      }

      ${props.$severity &&
      css`
        background-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.2);
        border-color: ${defineColorBySeverity(props.$severity)};
        color: ${defineColorBySeverity(props.$severity)};

        &.ant-btn-default {
          &:focus,
          &:not(:disabled):hover {
            background-color: var(--background-color);
            border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
            color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
          }
        }
      `}
    `}
`;

        ### 📄 src/components/common/base-image/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Image as BaseImage } from 'antd';
export type { ImageProps as BaseImageProps } from 'antd';

        ### 📄 src/components/common/base-pagination/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BasePaginationProps`
* 🧩 **Component (Arrow):** `BasePagination`

        ```typescript
        import { ConfigProvider, PaginationProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BasePaginationProps = PaginationProps;

export const BasePagination: React.FC<BasePaginationProps> = (props) => (
  <ConfigProvider
    theme={{
      components: { Pagination: { wireframe: props.size !== 'small' } },
    }}
  >
    <S.Pagination {...props} />
  </ConfigProvider>
);

        ### 📄 src/components/common/base-pagination/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd`

        ```ts
        import { Pagination as AntdPagination } from 'antd';
import styled, { css } from 'styled-components';

export const Pagination = styled(AntdPagination)`
  ${(props) =>
    !props.disabled &&
    css`
      .ant-pagination-item:not(.ant-pagination-item-active) {
        &:hover,
        &:focus-visible {
          a {
            color: var(--primary-color);
          }
        }
      }

      .ant-pagination-item-active:focus-visible {
        a {
          color: var(--ant-primary-5);
        }

        border-color: var(--ant-primary-5);
      }

      &.ant-pagination-mini {
        .ant-pagination-prev,
        .ant-pagination-next {
          &:not(.ant-pagination-disabled) {
            &:hover,
            &:focus-visible {
              .ant-pagination-item-link {
                color: var(--primary-color);
                background-color: transparent;
              }
            }
          }
        }

        .ant-pagination-item:not(.ant-pagination-item-active):hover {
          background-color: transparent;
        }
      }

      &:not(.ant-pagination-mini) {
        .ant-pagination-prev,
        .ant-pagination-next {
          &:focus-visible .ant-pagination-item-link {
            color: var(--primary-color);
            border-color: var(--primary-color);
          }
        }

        .ant-pagination-item:not(.ant-pagination-item-active):focus-visible {
          border-color: var(--primary-color);
        }
      }
    `}

  .ant-select-arrow {
    color: var(--disabled-color);
  }
`;

        ### 📄 src/components/common/base-popover/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Popover as BasePopover } from 'antd';
export type { PopoverProps as BasePopoverProps } from 'antd';

        ### 📄 src/components/common/date-picker/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd`
* wb **Type/Intf:** `BaseDatePickerProps`

        ```typescript
        /* eslint-disable */
import { DatePickerProps } from 'antd';
import React, { Ref } from 'react';

import * as S from './index.styled';

export type BaseDatePickerProps = DatePickerProps;

// eslint-disable-next-line react/display-name
const DatePicker = React.forwardRef<React.Component<BaseDatePickerProps>, BaseDatePickerProps>(
  ({ className, ...props }, ref) => <S.DatePicker ref={ref} className={className} {...props} />
);

type DatePickerForwardRef = typeof DatePicker;

interface IBaseDatePicker extends DatePickerForwardRef {
  RangePicker: typeof S.RangePicker;
  TimePicker: typeof S.TimePicker;
}

export const BaseDatePicker = DatePicker as IBaseDatePicker;

BaseDatePicker.RangePicker = S.RangePicker;
BaseDatePicker.TimePicker = S.TimePicker;

        ### 📄 src/components/common/date-picker/TimeRangePicker.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/date-picker, @/utils`
* 🧩 **Component (Arrow):** `TimeRangePicker`
* ww **Hooks:** `useMemo`

        ```typescript
        import { BaseDatePicker } from '@/components/common/date-picker';
import { AppDate, Dates } from '@/utils';
import React, { useMemo } from 'react';

const clearDate = Dates.getToday().hour(0).minute(0).second(0).millisecond(0);
const clearDateMs = +clearDate;

interface TimePickerProps {
  timeRange: number[];
  setTimeRange: (timeRange: number[]) => void;
}

export const TimeRangePicker: React.FC<TimePickerProps> = ({ timeRange, setTimeRange }) => {
  const timeRangePrepared = useMemo(
    () => timeRange.map((time) => clearDate.add(time)),
    [timeRange]
  );

  const onChange = (timeRange: any) => {
    const timeRangeSinceTodayMs = timeRange
      .map((time: AppDate) => time.subtract(clearDateMs, 'ms'))
      .map((time: AppDate) => +time);

    setTimeRange(timeRangeSinceTodayMs);
  };

  return (
    <BaseDatePicker.RangePicker
      value={[timeRangePrepared[0], timeRangePrepared[1]]}
      picker="time"
      format="HH:mm"
      onChange={onChange}
      allowClear={false}
      order={false}
    />
  );
};

        ### 📄 src/components/common/date-picker/index.styled.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd`

        ```typescript
        import { DatePicker as AntDatePicker } from 'antd';
import styled, { css } from 'styled-components';

const datePickerSizes = css`
  &.ant-picker {
    &.ant-picker-small {
      padding: 3.1px 7px;
    }
    &.ant-picker-large {
      padding: 17.6px 11px;
    }
  }
`;

export const DatePicker = styled(AntDatePicker)`
  ${datePickerSizes}
`;

export const RangePicker = styled(AntDatePicker.RangePicker)`
  ${datePickerSizes}
`;

export const TimePicker = styled(AntDatePicker.TimePicker)`
  ${datePickerSizes}
`;

        ### 📄 src/components/common/base-label/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        import * as S from './index.styles';

const BaseLabel = ({ label, required }: { label: string; required?: boolean }) => {
  return (
    <S.Label>
      {label} {required && <S.Required>*</S.Required>}
    </S.Label>
  );
};

export default BaseLabel;

        ### 📄 src/components/common/base-label/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, styled-components`

        ```ts
        import { FONT_SIZE } from '@/constants';
import styled from 'styled-components';

export const Label = styled.span`
  font-size: ${FONT_SIZE.xs};
  font-weight: 400;
`;
export const Required = styled.span`
  color: #ff0000;
`;

        ### 📄 src/components/common/base-row/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `BaseRowProps`

        ```typescript
        import type { RowProps } from 'antd';
import { forwardRef } from 'react';

import * as S from './index.styles';

export type BaseRowProps = RowProps;

// eslint-disable-next-line react/display-name
export const BaseRow = forwardRef<HTMLDivElement, BaseRowProps>((props, ref) => (
  <S.Row ref={ref} {...props} />
));

        ### 📄 src/components/common/base-row/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Row as AntRow } from 'antd';
import styled from 'styled-components';

export const Row = styled(AntRow)`
  font-size: unset;
`;

        ### 📄 src/components/common/base-switch/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseSwitchProps`
* 🧩 **Component (Arrow):** `BaseSwitch`

        ```typescript
        import { SwitchProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseSwitchProps = SwitchProps;

export const BaseSwitch: React.FC<SwitchProps> = (props) => {
  return <S.Switch {...props} />;
};

        ### 📄 src/components/common/base-switch/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Switch as AntdSwitch } from 'antd';
import styled from 'styled-components';

export const Switch = styled(AntdSwitch)`
  &.ant-switch-checked:focus {
    box-shadow: 0 0 0 2px var(--ant-primary-1);
  }

  &.ant-switch[aria-checked='false'] {
    background-image: linear-gradient(to right, var(--disabled-color), var(--disabled-color)),
      linear-gradient(to right, var(--background-color), var(--background-color));
  }
`;

        ### 📄 src/components/common/base-avatar/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseAvatarProps`

        ```typescript
        import { Avatar, AvatarProps } from 'antd';
import React from 'react';

export type BaseAvatarProps = AvatarProps;

interface IBaseAvatar extends React.FC<BaseAvatarProps> {
  Group: typeof Avatar.Group;
}

export const BaseAvatar: IBaseAvatar = (props) => {
  return <Avatar {...props} />;
};

BaseAvatar.Group = Avatar.Group;

        ### 📄 src/components/common/base-burger/BurgerIcon.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Arrow):** `Burger`

        ```typescript
        import React from 'react';
import styled, { css } from 'styled-components';

interface BurgerProps {
  className?: string;
  onClick: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ className, onClick }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="280 215 400 220"
    fill="currentColor"
    className={className}
    onClick={onClick}
  >
    <path
      d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
      id="top"
    />
    <path d="M300,320 L540,320" id="middle" />
    <path
      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
      id="bottom"
      transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
    />
  </svg>
);

export const BurgerIcon = styled(Burger)<{ isCross: boolean }>`
  cursor: pointer;
  transform: translate3d(0, 0, 0);

  path {
    fill: none;
    transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
      stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
    stroke-width: 30px;
    stroke-linecap: round;
    stroke: currentColor;
    stroke-dashoffset: 0;

    &#top,
    &#bottom {
      stroke-dasharray: 240px 950px;
    }
    &#middle {
      stroke-dasharray: 240px 240px;
    }

    ${(props) =>
      props.isCross &&
      css`
        &#top,
        &#bottom {
          stroke-dashoffset: -650px;
        }
        &#middle {
          stroke-dashoffset: -115px;
          stroke-dasharray: 1px 220px;
        }
      `}
  }
`;

        ### 📄 src/components/common/base-divider/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Divider as BaseDivider } from 'antd';
export type { DividerProps as BaseDividerProps } from 'antd';

        ### 📄 src/components/common/base-alert/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `BaseAlertProps`
* 🧩 **Component (Arrow):** `BaseAlert`

        ```typescript
        import type { AlertProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseAlertProps = AlertProps;

export const BaseAlert: React.FC<BaseAlertProps> = (props) => {
  return <S.Alert {...props} />;
};

        ### 📄 src/components/common/base-alert/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Alert as AntAlert } from 'antd';
import styled from 'styled-components';

export const Alert = styled(AntAlert)`
  &.ant-alert {
    padding-inline: 15px;
  }

  .ant-alert-action {
    margin-inline-start: 8px;
  }
`;

        ### 📄 src/components/common/base-article/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/utils, react`
* wb **Type/Intf:** `BaseArticleProps`
* 🧩 **Component (Arrow):** `BaseArticle`

        ```typescript
        import { Dates } from '@/utils';
import React from 'react';

import { BaseAvatar } from '../base-avatar';
import { BaseHashTag, IHashTag } from '../base-hashtag';
import { BaseImage } from '../base-image';
import * as S from './index.styles';

export interface BaseArticleProps {
  author?: React.ReactNode;
  imgUrl: string;
  title: string;
  date: number;
  description: string;
  avatar?: string;
  tags?: IHashTag[];
  className?: string;
}

export const BaseArticle: React.FC<BaseArticleProps> = ({
  imgUrl,
  title,
  date,
  description,
  author,
  avatar,
  tags,
  className,
}) => {
  return (
    <S.Wrapper className={className}>
      <S.Header>
        {!!avatar && <BaseAvatar src={avatar} alt="author" size={43} />}
        <S.AuthorWrapper>
          {author && <S.Author>{author}</S.Author>}
          <S.DateTime>{Dates.format(date, 'L')}</S.DateTime>
        </S.AuthorWrapper>
      </S.Header>
      <BaseImage src={imgUrl} alt="article" preview={false} />
      <S.InfoWrapper>
        <S.InfoHeader>
          <S.Title>{title}</S.Title>
        </S.InfoHeader>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>

      {!!tags?.length && (
        <S.TagsWrapper>
          {tags.map((tag) => (
            <BaseHashTag key={tag.bgColor} title={tag.title} bgColor={tag.bgColor} />
          ))}
        </S.TagsWrapper>
      )}
    </S.Wrapper>
  );
};

        ### 📄 src/components/common/base-article/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, styled-components`

        ```ts
        import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@/constants';
import styled from 'styled-components';

import { BaseTypography } from '../base-typography';

export const Header = styled.div`
  height: 5.5rem;
  margin-left: 1.5625rem;
  display: flex;
  align-items: center;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 21.25rem;
  position: relative;
  max-width: 42.5rem;
  box-shadow: var(--box-shadow);
  border-radius: ${BORDER_RADIUS};
  transition: 0.3s;

  [data-theme='dark'] & {
    background: var(--secondary-background-color);
  }

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
`;

export const Author = styled.div`
  font-size: ${FONT_SIZE.lg};
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-main-color);
  line-height: 1.5625rem;
`;

export const InfoWrapper = styled.div`
  padding: 1.25rem;

  @media only screen and ${media.xl} {
    padding: 1rem;
  }

  @media only screen and ${media.xxl} {
    padding: 1.85rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and ${media.md} {
    margin-bottom: 0.625rem;
  }

  @media only screen and ${media.xxl} {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.div`
  font-size: ${FONT_SIZE.xl};
  font-weight: ${FONT_WEIGHT.semibold};
  width: 80%;
  line-height: 1.375rem;

  color: var(--text-main-color);

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xxl};
  }
`;

export const DateTime = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xs};
  color: var(--text-main-color);
  line-height: 1.25rem;
`;

export const Description = styled.div`
  font-size: ${FONT_SIZE.xs};
  color: var(--text-main-color);

  @media only screen and ${media.xxl} {
    font-size: 1rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0 1.25rem 1.25rem;
`;

        ### 📄 src/components/common/base-col/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `BaseColProps`

        ```typescript
        import type { ColProps } from 'antd';
import { forwardRef } from 'react';

import * as S from './index.styles';

export type BaseColProps = ColProps;

// eslint-disable-next-line react/display-name
export const BaseCol = forwardRef<HTMLDivElement, BaseColProps>((props, ref) => (
  <S.Col ref={ref} {...props} />
));

        ### 📄 src/components/common/base-col/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Col as AntCol } from 'antd';
import styled from 'styled-components';

export const Col = styled(AntCol)`
  font-size: unset;
`;

        ### 📄 src/components/common/base-popconfirm/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Popconfirm as BasePopconfirm } from 'antd';
export type { PopconfirmProps as BasePopconfirmProps } from 'antd';

        ### 📄 src/components/common/base-empty/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Empty as BaseEmpty } from 'antd';
export type { EmptyProps as BaseEmptyProps } from 'antd';

        ### 📄 src/components/common/base-tag/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Tag as BaseTag } from 'antd';
export type { TagProps as BaseTagProps } from 'antd';

        ### 📄 src/components/common/overlay/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        import styled, { css } from 'styled-components';

interface OverlayProps {
  show: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  z-index: 1;
  height: 0;

  ${(props) =>
    props.show &&
    css`
      backdrop-filter: blur(6px);
      width: 100vw;
      height: 100vh;
    `}
`;

        ### 📄 src/components/common/base-radio/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseRadioProps`

        ```typescript
        import { Radio, RadioProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseRadioProps = RadioProps;

interface IBaseRadio extends React.FC<BaseRadioProps> {
  Group: typeof Radio.Group;
  Button: typeof Radio.Button;
}

export const BaseRadio: IBaseRadio = (props) => {
  return <S.Radio {...props} />;
};

BaseRadio.Group = Radio.Group;
BaseRadio.Button = S.RadioButton;

        ### 📄 src/components/common/base-radio/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { Radio as AntdRadio } from 'antd';
import styled from 'styled-components';

export const Radio = styled(AntdRadio)`
  .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb-color), 0.12);
  }

  &.ant-radio-wrapper {
    .ant-radio {
      align-self: inherit;
    }

    .ant-radio-inner,
    .ant-radio-inner::after {
      width: 1rem;
      height: 1rem;
    }

    .ant-radio-inner::after {
      transform: scale(0.5);
      margin-block-start: -0.5rem;
      margin-inline-start: -0.5rem;
    }
  }

  .ant-radio-disabled + span {
    color: var(--disabled-color);
  }
`;

export const RadioButton = styled(AntdRadio.Button)`
  &.ant-radio-button-wrapper:has(:focus-visible) {
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb-color), 0.12);
  }

  &.ant-radio-button-wrapper-disabled {
    color: var(--disabled-color);
  }
`;

        ### 📄 src/components/common/base-feed/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, react-infinite-scroll-component`
* wb **Type/Intf:** `BaseFeedProps`
* 🧩 **Component (Arrow):** `BaseFeed`

        ```typescript
        import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { BaseSpin } from '../base-spin';
import * as S from './index.styles';

export interface BaseFeedProps {
  next: () => void;
  hasMore: boolean;
  children: React.ReactNode[];
  target?: string;
}

export const BaseFeed: React.FC<BaseFeedProps> = ({
  next,
  hasMore,
  target = 'main-content',
  children,
}) => {
  return (
    <InfiniteScroll
      dataLength={children.length}
      next={next}
      hasMore={hasMore}
      loader={
        <S.SpinnerWrapper>
          <BaseSpin size="large" />
        </S.SpinnerWrapper>
      }
      scrollableTarget={target}
      style={{ overflow: 'visible' }}
    >
      <S.NewsWrapper>{children}</S.NewsWrapper>
    </InfiniteScroll>
  );
};

        ### 📄 src/components/common/base-feed/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, styled-components`

        ```ts
        import { media } from '@/constants';
import styled from 'styled-components';

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 1.25rem;

    @media only screen and ${media.xl} {
      margin-bottom: 1.5rem;
    }

    @media only screen and ${media.xxl} {
      margin-bottom: 2.5rem;
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
`;

        ### 📄 src/components/common/base-upload/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { Upload as BaseUpload } from 'antd';
export type { UploadProps as BaseUploadProps } from 'antd';

        ### 📄 src/components/common/base-menu/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `BaseMenuProps`

        ```typescript
        import type { MenuProps } from 'antd';
import { FC } from 'react';

import * as S from './index.styles';

export type BaseMenuProps = MenuProps;

export const BaseMenu: FC<BaseMenuProps> = (props) => {
  return <S.Menu {...props} />;
};

        ### 📄 src/components/common/base-menu/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, styled-components`

        ```ts
        import { FONT_SIZE } from '@/constants';
import { Menu as AntMenu } from 'antd';
import styled from 'styled-components';

export const Menu = styled(AntMenu)`
  &.ant-menu .ant-menu-item-icon {
    font-size: ${FONT_SIZE.xl};
    width: 1.25rem;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${FONT_SIZE.xs};
    border-radius: 0;
  }

  .ant-menu-item {
    fill: currentColor;
  }

  .ant-menu-inline,
  .ant-menu-vertical {
    border-right: 0;
  }
`;

        ### 📄 src/components/common/base-list/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        export { List as BaseList } from 'antd';
export type { ListProps as BaseListProps } from 'antd';

        ### 📄 src/components/common/step-switch/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-step.svg, @ant-design/icons, antd, react`
* 🧩 **Component (Arrow):** `CustomStep`
* 🧩 **Component (Arrow):** `StepSwitch`

        ```typescript
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

        ### 📄 src/components/common/step-switch/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-steps`

        ```ts
        import { BaseSteps } from '@/components/common/base-steps';
import styled, { css } from 'styled-components';

export const WrapperStep = styled(BaseSteps)`
  width: 1000px;
  margin: auto;
  .ant-steps-item {
    padding-inline-start: 0 !important;
    .ant-steps-item-container {
      align-items: stretch;
      .ant-steps-item-icon {
        margin: 0;
      }
      .ant-steps-item-title {
        padding-inline-end: 0;
        &::after {
          background: #d9d9d9 !important;
        }
      }
    }
  }
`;

export const StepItem = styled.div<{ waiting: string; finished: string }>`
  display: flex;
  padding: 15px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid #d9d9d9;

  background: var(--white);

  .ant-radio-inner {
    border-color: #d9d9d9 !important;
  }

  ${(props) =>
    props.waiting === 'true' &&
    css`
      background: var(--primary1-color);
      .ant-radio-inner {
        background: var(--primary1-color);
      }
    `};

  ${(props) =>
    props.finished === 'true' &&
    css`
      border: 1px solid var(--ant-primary-5);
      background: var(--notification-primary-color);
    `};
`;

export const StepTitle = styled.div`
  color: var(--text-main-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 3px 0;
`;

        ### 📄 src/components/common/inputs/openurl-input/OpenURLInput.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/constants, @ant-design/icons`
* 🧩 **Component (Arrow):** `OpenURLInput`
* ww **Hooks:** `useMemo`

        ```typescript
        import { BaseButton } from '@/components/common/base-button';
import { websitePattern } from '@/constants';
import { FileTextOutlined } from '@ant-design/icons';
import React, { useMemo } from 'react';

import { BaseTooltip } from '../../base-tooltip';
import { BaseInputProps } from '../base-input';
import { SuffixInput } from '../suffix-input';

interface OpenURLInputProps extends BaseInputProps {
  href?: string;
  target?: string;
}

export const OpenURLInput: React.FC<OpenURLInputProps> = ({
  href,
  target = '_blank',
  ...props
}) => {
  const isMatch = useMemo(() => new RegExp(websitePattern).test(href || ' '), [href]);

  return (
    <SuffixInput
      suffix={
        <BaseTooltip title="Title">
          <BaseButton
            size="small"
            href={href}
            target={target}
            disabled={!isMatch}
            type="text"
            icon={<FileTextOutlined />}
          />
        </BaseTooltip>
      }
      {...props}
    />
  );
};

        ### 📄 src/components/common/inputs/masked-input/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `MaskedInputProps`

        ```typescript
        import type { InputRef } from 'antd';
import type { MaskedInput as AntdMaskedInput } from 'antd-mask-input';
import { ComponentPropsWithRef, forwardRef } from 'react';

import * as S from './index.styles';

export type MaskedInputProps = ComponentPropsWithRef<typeof AntdMaskedInput>;

// eslint-disable-next-line react/display-name
export const MaskedInput = forwardRef<InputRef, MaskedInputProps>((props, ref) => {
  return <S.MaskedInput ref={ref} {...props} />;
});

        ### 📄 src/components/common/inputs/masked-input/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd-mask-input, styled-components`

        ```ts
        import { BORDER_RADIUS } from '@/constants';
import AntdMaskedInput from 'antd-mask-input';
import styled from 'styled-components';

// https://github.com/antoniopresto/antd-mask-input/issues/73
export const MaskedInput = styled(AntdMaskedInput)`
  font-family: inherit;
  color: var(--text-main-color);
  background-color: var(--background-color);
  padding: 11.4px 11px;
  border: 1px solid var(--border-base-color);
  border-radius: ${BORDER_RADIUS};

  &::placeholder {
    color: var(--input-placeholder-color);
  }
`;

        ### 📄 src/components/common/inputs/verification-code-input/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Arrow):** `VerificationCodeInput`

        ```typescript
        import React from 'react';

import * as S from './index.styles';

interface VerificationCodeInputProps {
  autoFocus?: boolean;
  validChars?: string;
  length?: number;
  inputProps?: HTMLInputElement;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const VerificationCodeInput: React.FC<VerificationCodeInputProps> = (props) => {
  return (
    <S.CodeInput
      classNames={{
        container: 'container',
        character: 'character',
        characterInactive: 'character--inactive',
        characterSelected: 'character--selected',
      }}
      placeholder={''}
      {...props}
    />
  );
};

        ### 📄 src/components/common/inputs/verification-code-input/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, react-verification-input, styled-components`

        ```ts
        import { FONT_SIZE, FONT_WEIGHT, media } from '@/constants';
import VerificationInput from 'react-verification-input';
import styled from 'styled-components';

export const CodeInput = styled(VerificationInput)`
  display: flex;
  gap: 0.625rem;

  .character {
    line-height: 5rem;
    font-size: ${FONT_SIZE.xxl};
    font-weight: ${FONT_WEIGHT.bold};
    color: var(--text-main-color);
    border: 3px solid var(--lightgrey);
    border-radius: 0.625rem;
    width: 3.4375rem;
    height: 5rem;
  }

  .character--inactive {
    border: 3px solid var(--lightgrey);
  }

  .character--selected {
    border: 3px solid var(--primary-color);
  }

  @media only screen and ${media.xs} {
    gap: 0.4375rem;
    .character {
      width: 2.5625rem;
      height: 3.75rem;
    }
  }

  @media only screen and ${media.md} {
    gap: 0.625rem;
    .character {
      width: 3.4375rem;
      height: 5rem;
    }
  }

  @media only screen and ${media.xl} {
    gap: 0.625rem;
    .character {
      width: 3.4375rem;
      height: 5rem;
    }
  }
`;

        ### 📄 src/components/common/inputs/number-input/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd`
* wb **Type/Intf:** `InputNumberProps`

        ```typescript
        import { InputNumberProps as AntdInputNumberProps } from 'antd';
import React, { ReactNode } from 'react';

import * as S from './index.styles';

export interface InputNumberProps extends AntdInputNumberProps {
  block?: boolean;
  children: ReactNode;
}

// eslint-disable-next-line react/display-name
export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ children, block, ...props }, ref) => (
    <S.InputNumber ref={ref} $block={block} {...props}>
      {children}
    </S.InputNumber>
  )
);

        ### 📄 src/components/common/inputs/number-input/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `antd, styled-components`

        ```ts
        import { InputNumber as AntInputNumber } from 'antd';
import styled from 'styled-components';

interface InputNumberProps {
  $block?: boolean;
}

export const InputNumber = styled(AntInputNumber)<InputNumberProps>`
  ${(props) => props.$block && 'display: block; width: 100%'};
`;

        ### 📄 src/components/common/inputs/password-input/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`

        ```typescript
        import React from 'react';

import { BaseInputProps, BaseInputRef } from '../base-input';
import * as S from './index.styles';

interface InputPasswordProps extends BaseInputProps {
  className?: string;
  visibilityToggle?: boolean;
  iconRender?: (open: boolean) => React.ReactNode;
}

// eslint-disable-next-line react/display-name
export const InputPassword = React.forwardRef<BaseInputRef, InputPasswordProps>(
  ({ className, children, ...props }, ref) => (
    <S.InputPassword ref={ref} className={className} {...props}>
      {children}
    </S.InputPassword>
  )
);

        ### 📄 src/components/common/inputs/password-input/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

import { BaseInput } from '../base-input';

export const InputPassword = styled(BaseInput.Password)`
  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }
`;

        ### 📄 src/components/common/inputs/suffix-input/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `SuffixInputProps`
* 🧩 **Component (Arrow):** `SuffixInput`

        ```typescript
        import React from 'react';

import { BaseInput, BaseInputProps } from '../base-input';
import * as S from './index.styles';

export interface SuffixInputProps extends BaseInputProps {
  suffix: React.ReactNode;
  isOpenSuffix?: boolean;
}

export const SuffixInput: React.FC<SuffixInputProps> = ({
  suffix,
  isOpenSuffix = true,
  ...props
}) => <BaseInput suffix={<S.Suffix isOpen={isOpenSuffix}>{suffix}</S.Suffix>} {...props} />;

        ### 📄 src/components/common/inputs/suffix-input/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

interface SuffixProps {
  isOpen: boolean;
}

export const Suffix = styled.div<SuffixProps>`
  transition: all 0.5s ease;
  visibility: visible;
  opacity: 1;

  ${(props) => !props.isOpen && 'opacity: 0; visibility: hidden'};
`;

        ### 📄 src/components/common/inputs/base-input/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `antd, react`
* wb **Type/Intf:** `BaseInputRef`
* wb **Type/Intf:** `BaseInputProps`

        ```typescript
        import { Input, InputProps, InputRef } from 'antd';
import React from 'react';

import * as S from './index.styles';

export type BaseInputRef = InputRef;

export type BaseInputProps = InputProps;

interface IBaseInput
  extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>> {
  Group: typeof Input.Group;
  Search: typeof Input.Search;
  TextArea: typeof Input.TextArea;
  Password: typeof Input.Password;
}

// eslint-disable-next-line react/display-name
const InternalInput = React.forwardRef<BaseInputRef, BaseInputProps>(
  ({ className, children, ...props }, ref) => (
    <S.Input ref={ref} className={className} {...props}>
      {children}
    </S.Input>
  )
);

export const BaseInput = InternalInput as IBaseInput;

BaseInput.Group = Input.Group;
BaseInput.Search = Input.Search;
BaseInput.TextArea = Input.TextArea;
BaseInput.Password = Input.Password;

        ### 📄 src/components/common/inputs/base-input/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, antd, styled-components`

        ```ts
        import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { Input as AntInput } from 'antd';
import styled from 'styled-components';

export const Input = styled(AntInput)`
  .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(
      .ant-pagination-size-changer
    ):hover
    .ant-select-selector {
    border-color: transparent;
  }

  .ant-input-group-addon:first-child,
  .ant-input-group-addon:last-child {
    min-width: 5.5rem;
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-group-addon .ant-select {
    .ant-select-selection-item {
      min-width: 5.5rem;
      color: var(--primary-color);
      font-weight: ${FONT_WEIGHT.semibold};
      font-size: ${FONT_SIZE.lg};
    }
  }

  .ant-select-arrow {
    color: var(--disabled-color);
  }
`;

        ### 📄 src/components/common/inputs/clipboard-input/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/hooks/useFeedback, @ant-design/icons`
* 🧩 **Component (Arrow):** `ClipboardInput`
* ww **Hooks:** `useCallback, useFeedback`

        ```typescript
        import { useFeedback } from '@/hooks/useFeedback';
import { CopyOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';

import { BaseButton } from '../../base-button';
import { BaseTooltip } from '../../base-tooltip';
import { BaseInputProps } from '../base-input';
import { SuffixInput } from '../suffix-input';

interface ClipboardInputProps extends BaseInputProps {
  valueToCopy?: string;
}

export const ClipboardInput: React.FC<ClipboardInputProps> = ({ valueToCopy, ...props }) => {
  const { notification } = useFeedback();

  const handleCopy = useCallback(
    () =>
      valueToCopy &&
      navigator.clipboard.writeText(valueToCopy).then(() => {
        notification.info({ message: 'copied' });
      }),
    [valueToCopy, notification]
  );

  return (
    <SuffixInput
      suffix={
        <BaseTooltip title="Copy">
          <BaseButton
            size="small"
            disabled={!valueToCopy}
            type="text"
            icon={<CopyOutlined />}
            onClick={handleCopy}
          />
        </BaseTooltip>
      }
      {...props}
    />
  );
};

        ### 📄 src/components/common/inputs/search-input/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@ant-design/icons, react`

        ```typescript
        import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

import { BaseSpin } from '../../base-spin';
import { BaseInputProps, BaseInputRef } from '../base-input';
import * as S from './index.styles';

interface SearchInputProps extends BaseInputProps {
  loading?: boolean;
  filter?: React.ReactNode;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  enterButton?: React.ReactNode;
  inputPrefixCls?: string;
}

// eslint-disable-next-line react/display-name
export const SearchInput = React.forwardRef<BaseInputRef, SearchInputProps>(
  ({ loading, filter, ...props }, ref) => {
    return (
      <S.SearchInput
        ref={ref}
        prefix={<SearchOutlined />}
        {...(filter && {
          suffix: (
            <S.Space align="center">
              {loading && <BaseSpin size="small" />}
              {filter}
            </S.Space>
          ),
        })}
        {...props}
      />
    );
  }
);

        ### 📄 src/components/common/inputs/search-input/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, styled-components`

        ```ts
        import { FONT_SIZE, FONT_WEIGHT, media } from '@/constants';
import styled from 'styled-components';

import { BaseSpace } from '../../base-space';
import { BaseInput } from '../base-input';

export const SearchInput = styled(BaseInput.Search)`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & .ant-input-search-button {
    height: 3.54875rem;
    box-shadow: none;
  }

  &.ant-input-search-large .ant-input-search-button {
    height: 4.36125rem;
  }

  & input {
    font-weight: 600;
    background-color: var(--background-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }

    &::placeholder {
      font-weight: 500;
    }
  }

  .ant-input-group-addon {
    min-width: 5.5rem;
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-search-button,
  .ant-input-search-button:hover {
    &.ant-btn {
      font-weight: ${FONT_WEIGHT.semibold};

      .anticon {
        color: var(--primary-color);
      }
    }
    width: 100%;
    background-color: rgba(1, 80, 154, 0.05);
    border: 1px solid var(--border-color);
    color: var(--primary-color);
  }
`;

export const Space = styled(BaseSpace)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

        ### 📄 src/components/my-profile/payments/index.tsx
        > **Context Summary**
        * (No structural elements detected)

        ```typescript
        import ContentLeft from '../components/content-left';
import * as S from './index.styles';
import PaymentHistory from './payment-history';

const Payment = () => {
  return (
    <S.ContentWrapper>
      <ContentLeft />
      <S.ContentRight>
        <PaymentHistory />
      </S.ContentRight>
    </S.ContentWrapper>
  );
};

export default Payment;

        ### 📄 src/components/my-profile/payments/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
        import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ContentRight = styled.div`
  flex: 1;
  padding: 3.75rem 3.125rem 0.5rem;
  border-radius: 0.75rem;
  background-color: var(--white);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

        ### 📄 src/components/my-profile/payments/payment-history/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/cloud-software/youtube-account/icon-level, @/components/common/no-data, @/constants, @/hooks/features/useSupcriptionPlan, @/interfaces`...
* ww **Hooks:** `useMemo, useGetPaymentHistory, useTranslation`

        ```typescript
        import { IConLevel } from '@/components/cloud-software/youtube-account/icon-level';
import { NoData } from '@/components/common/no-data';
import { DATE_FORMAT, RANK_NAME, SORT_TYPE } from '@/constants';
import { useGetPaymentHistory } from '@/hooks/features/useSupcriptionPlan';
import { Pagination, PaginationParams } from '@/interfaces';
import { formatNumberWithCommas } from '@/utils';
import dayjs from 'dayjs';
import { pickBy } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';

import * as S from './index.styles';

type TPaymentHistory = {
  key: string;
  subscriptionPlan: string;
  date: string;
  status: string;
  totalAmount: string;
  type: string;
};

const getBgColor = (status: string) => {
  switch (status) {
    case 'PAID':
      return '#30AF5B';
    case 'PENDING':
      return '#FAB106';
    case 'FAILED':
      return '#D04545';
    default:
      return '';
  }
};

const initialPagination: Pagination = {
  current: 1,
  pageSize: 3,
};

const inittialParams = {
  page: 1,
  pageSize: initialPagination.pageSize,
};

const PaymentHistory = () => {
  const { t } = useTranslation('my-profile');

  const columns = [
    {
      key: 'subscriptionPlan',
      width: 200,
      title: <S.THead>{t('PaymentHistory.SubscriptionPlan')}</S.THead>,
      render: (data: TPaymentHistory) => {
        return (
          <S.TSubPlan>
            <IConLevel level={data?.subscriptionPlan?.toUpperCase()} />
            <S.TSubPlanType>{data?.type}</S.TSubPlanType>
          </S.TSubPlan>
        );
      },
    },
    {
      key: 'date',
      title: <S.THead>{t('PaymentHistory.Date')}</S.THead>,
      sorter: true,
      showSorterTooltip: false,
      render: (data: TPaymentHistory) => (
        <S.TDate>
          {data?.date ? dayjs(data?.date).format(DATE_FORMAT.FULL_DATE_WITH_TIME) : ''}
        </S.TDate>
      ),
    },
    {
      key: 'status',
      title: <S.THead>{t('PaymentHistory.Status')}</S.THead>,
      render: (data: TPaymentHistory) => (
        <S.TStatus bg={getBgColor(data?.status)}>{data?.status}</S.TStatus>
      ),
    },
    {
      key: 'totalAmount',
      title: <S.THead>{t('PaymentHistory.TotalAmount')}</S.THead>,
      render: (data: TPaymentHistory) => (
        <S.TAmount>${formatNumberWithCommas(Number(data?.totalAmount))}</S.TAmount>
      ),
    },
  ];

  const [params, setParams] = useState<PaginationParams>(inittialParams);

  const { data, isLoading } = useGetPaymentHistory(pickBy(params));

  const getTypePlan = (level: string) => {
    switch (level) {
      case RANK_NAME.GOLD:
        return 'Gold Plan';
      case RANK_NAME.SILVER:
        return 'Silver Plan';
      case RANK_NAME.BRONZE:
        return 'Bronze Plan';
      default:
        return '';
    }
  };

  const tableData = useMemo(() => {
    return {
      data:
        data?.data?.payments.map((item) => {
          return {
            key: item.id,
            subscriptionPlan: item.rank,
            date: item.payment_date,
            status: item.status,
            totalAmount: item.total,
            type: getTypePlan(item.rank),
          };
        }) || [],
      pagination: {
        current: Number(data?.data.pagination?.current_page) || initialPagination.current,
        pageSize: data?.data?.pagination?.per_page || initialPagination.pageSize,
        total: data?.data?.pagination?.total || initialPagination.total,
      },
    };
  }, [data]);

  const handleTableChange = (pagination: Pagination, _: any, sorter: any) => {
    const sortData = sorter.order
      ? {
          sortField: 'payment_date',
          sortBy: sorter.order === 'ascend' ? SORT_TYPE.asc : SORT_TYPE.desc,
        }
      : {
          sortField: undefined,
          sortBy: undefined,
        };

    setParams((prev) => {
      return {
        ...prev,
        page: pagination.current,
        pageSize: pagination.pageSize,
        ...sortData,
      };
    });
  };

  return (
    <S.PaymentHistory>
      <S.Title>{t('PaymentHistory.title')}</S.Title>
      <S.Table
        columns={columns}
        dataSource={tableData.data}
        pagination={tableData.pagination}
        loading={isLoading}
        onChange={handleTableChange}
        locale={{
          emptyText: <NoData />,
        }}
      />
    </S.PaymentHistory>
  );
};

export default PaymentHistory;

        ### 📄 src/components/my-profile/payments/payment-history/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-table, @/constants, styled-components`

        ```ts
        import { BaseTable } from '@/components/common/base-table';
import { FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const PaymentHistory = styled.div``;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-dark-color);
  margin-bottom: 1.5rem;
`;

export const Table = styled(BaseTable)`
  & .ant-table-container {
    border: 1px solid #ccdceb;
    border-radius: 0.5rem;
  }
  & thead .ant-table-cell {
    padding: 1.5rem !important;
    background: #f5f5f5;
    color: #01509a !important;
    font-weight: ${FONT_WEIGHT.regular} !important;
    font-size: 14px;
    &::before {
      display: none;
    }
  }
  & thead .ant-table-cell:not(:first-child) {
    text-align: center !important;
  }
  & thead .ant-table-cell:last-child {
    border-top-right-radius: 0.5rem !important;
  }
  & thead .ant-table-cell:first-child {
    border-top-left-radius: 0.5rem !important;
  }
  & tbody tr:last-child td {
    border-bottom: none;
  }

  & tbody tr td:first-child {
    padding-left: 1.5rem !important;
  }
`;

export const THead = styled.div`
  font-weight: ${FONT_WEIGHT.regular};
`;

export const TSubPlan = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: 32px;
  }

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    width: 75px;
    > span {
      margin: 5px 0 0;
    }
  }
`;

export const TSubPlanType = styled.span`
  font-size: 0.875rem;
  font-weight: ${FONT_WEIGHT.regular};
`;

export const TDate = styled.div`
  font-weight: ${FONT_WEIGHT.regular};
  text-align: center;
`;

export const TStatus = styled.div<{ bg: string }>`
  font-weight: ${FONT_WEIGHT.bold};
  padding: 0.375rem 0.75rem;
  background-color: ${({ bg }) => bg};
  color: var(--white);
  border-radius: 6px;
  width: 100px;
  text-align: center;
  margin: auto;
`;

export const TAmount = styled.div`
  font-weight: ${FONT_WEIGHT.bold};
  text-align: center;
`;

        ### 📄 src/components/my-profile/pesonal-info/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/cloud-software/youtube-account/current-plan, @/components/common/base-label, @/components/common/forms/base-form, @/components/common/inputs/base-input, @/constants`...
* ww **Hooks:** `usePersonalInfo`

        ```typescript
        import CurrentPlan from '@/components/cloud-software/youtube-account/current-plan';
import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { BaseInput } from '@/components/common/inputs/base-input';
import { NUMBER_CHARACTERS } from '@/constants';
import { Col, Row } from 'antd';
import { CountryData } from 'react-phone-input-2';

import ContentLeft from '../components/content-left';
import * as S from './index.styles';
import usePersonalInfo from './index.utils';

const PersonalInfo = () => {
  const {
    t,
    handleSubmit,
    openEdit,
    toggleEdit,
    form,
    phoneCodeValid,
    setPhoneCodeValid,
    countryCode,
    handleAddCountryCode,
  } = usePersonalInfo();

  const _renderButton = () => {
    if (openEdit) {
      return (
        <Row gutter={36}>
          <Col span={12}>
            <S.BtnCancel onClick={() => toggleEdit()}>{t('Personal.Cancel')}</S.BtnCancel>
          </Col>
          <Col span={12}>
            <S.BtnSave type="primary" htmlType="submit">
              {t('Personal.Save')}
            </S.BtnSave>
          </Col>
        </Row>
      );
    }

    return (
      <Row gutter={36}>
        <Col span={12}>
          <S.BtnCancel onClick={() => toggleEdit()}>{t('Personal.Edit')}</S.BtnCancel>
        </Col>
      </Row>
    );
  };

  return (
    <S.ContentWrapper>
      <ContentLeft />
      <S.ContentRight>
        <S.TopContent>
          <S.Title>{t('PersonalInfo')}</S.Title>
          <S.Plan>
            <CurrentPlan />
          </S.Plan>
        </S.TopContent>

        <BaseForm
          form={form}
          onFinish={handleSubmit}
          validateTrigger={['onFocus', 'onBlur', 'onChange']}
        >
          <Row gutter={36}>
            <Col span={12}>
              <S.FormItem
                name="firstName"
                label={<BaseLabel label={t('Personal.FirstName')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                ]}
                required={false}
              >
                <BaseInput
                  placeholder={t('Personal.FirstName')}
                  disabled={!openEdit}
                  maxLength={64}
                />
              </S.FormItem>
            </Col>
            <Col span={12}>
              <S.FormItem
                name="lastName"
                label={<BaseLabel label={t('Personal.LastName')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                ]}
                required={false}
              >
                <BaseInput
                  placeholder={t('Personal.LastName')}
                  disabled={!openEdit}
                  maxLength={64}
                />
              </S.FormItem>
            </Col>
          </Row>
          <Row gutter={36}>
            <Col span={12}>
              <S.FormItem
                name="phoneNumber"
                label={<BaseLabel label={t('Personal.PhoneNumber')} required />}
                rules={[
                  { required: true, message: t('validate.requiredField', { ns: 'common' }) },
                  () => ({
                    validator(_, value) {
                      const phoneNumber = value?.slice(countryCode?.phone_code?.length);
                      const rawPhone = phoneNumber.startsWith('0')
                        ? phoneNumber?.slice(1)
                        : phoneNumber;
                      if (!phoneCodeValid || rawPhone.length < NUMBER_CHARACTERS.phone.min) {
                        return Promise.reject(new Error(t('validate.MC2.2', { ns: 'common' })));
                      }

                      return Promise.resolve();
                    },
                  }),
                ]}
                required={false}
              >
                <S.PhoneNumber
                  disabled={!openEdit}
                  phoneCodeValid={phoneCodeValid}
                  placeholder="(+ xx) xxxx xxxx"
                  onChange={(value, country: CountryData) => {
                    handleAddCountryCode('phone_code', country.dialCode);
                    if (country) {
                      form.setFieldValue('phoneCode', country.dialCode);
                      const code = value?.slice(0, country.dialCode.length);
                      const valid = code === country.dialCode;
                      setPhoneCodeValid(valid);
                    }
                  }}
                />
              </S.FormItem>
              <S.FormItem name="phoneCode" style={{ display: 'none' }}></S.FormItem>
            </Col>
            <Col span={12}>
              <S.FormItem
                name="email"
                label={<BaseLabel label={t('Personal.Email')} required />}
                rules={[{ required: true, message: t('validate.requiredField', { ns: 'common' }) }]}
                required={false}
              >
                <BaseInput placeholder={t('Personal.Email')} disabled />
              </S.FormItem>
            </Col>
          </Row>
          {_renderButton()}
        </BaseForm>
      </S.ContentRight>
    </S.ContentWrapper>
  );
};

export default PersonalInfo;

        ### 📄 src/components/my-profile/pesonal-info/index.utils.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/hooks/features/useUsers, @/hooks/useFeedback, @/stores/auth/auth.slice, @/stores/hooks`...
* ww **Hooks:** `useEffect, useTranslation, useAppDispatch, useUpdateUserInfo, useAppSelector, useFeedback, useForm`

        ```typescript
        import { MESSAGES_ERROR, NUMBER_CHARACTERS } from '@/constants';
import { useUpdateUserInfo } from '@/hooks/features/useUsers';
import { useFeedback } from '@/hooks/useFeedback';
import { updateUserInfo } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { Form } from 'antd';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

interface PersonalInfoForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  phoneCode: string;
  email: string;
}

interface ICountryCode {
  country_code?: string;
  phone_code?: string;
}

const usePersonalInfo = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('my-profile');
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [phoneCodeValid, setPhoneCodeValid] = useState<boolean>(true);
  const [countryCode, setCountryCode] = useState<ICountryCode>();
  const user = useAppSelector((state) => state.auth.user);
  const [form] = Form.useForm();

  const { mutate } = useUpdateUserInfo();
  const { notification } = useFeedback();

  const handleAddCountryCode = (key: string, value: unknown) => {
    setCountryCode((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleSubmit = (user: PersonalInfoForm) => {
    const phoneCode = user.phoneCode.startsWith('+') ? user.phoneCode : `+${user.phoneCode}`;
    const phoneNumber = (
      user.phoneNumber.startsWith('+') ? user.phoneNumber : `+${user.phoneNumber}`
    ).replace(phoneCode, '');
    const rawPhone = phoneNumber.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

    if (!phoneCodeValid || rawPhone.length < NUMBER_CHARACTERS.phone.min) {
      form.setFields([{ name: 'phoneNumber', errors: [t('validate.MC2.2', { ns: 'common' })] }]);
      return;
    }

    const data = {
      first_name: user.firstName.trim(),
      last_name: user.lastName.trim(),
      phone: rawPhone,
      phone_code: phoneCode,
    };

    mutate(data, {
      onSuccess: (res) => {
        dispatch(updateUserInfo(res.data));
        notification.success({ message: t('Personal.UpdateProfileSuccessfully') });
        setOpenEdit(false);
      },
      onError(error: any) {
        if (error.data.error === MESSAGES_ERROR.PHONE_TAKEN) {
          form.setFields([
            {
              name: 'phoneNumber',
              errors: [t('validate.MC9', { ns: 'common' })],
            },
          ]);
        }
      },
    });
  };

  const initFormValues = () => {
    if (user) {
      const initValues: PersonalInfoForm = {
        firstName: user?.first_name,
        lastName: user?.last_name,
        phoneNumber: user?.phone_code + user?.phone,
        phoneCode: user?.phone_code?.slice(1),
        email: user?.email,
      };
      form.setFieldsValue(initValues);
    }
  };

  const toggleEdit = () => {
    if (openEdit) initFormValues();
    setOpenEdit(!openEdit);
  };

  useEffect(() => {
    initFormValues();
  }, [user]);

  return {
    t,
    handleSubmit,
    openEdit,
    toggleEdit,
    user,
    form,
    phoneCodeValid,
    setPhoneCodeValid,
    countryCode,
    handleAddCountryCode,
  };
};

export default usePersonalInfo;

        ### 📄 src/components/my-profile/pesonal-info/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/components/common/forms/base-form, @/constants, react-phone-input-2`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { BaseForm } from '@/components/common/forms/base-form';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import PhoneInput from 'react-phone-input-2';
import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ContentRight = styled.div`
  flex: 1;
  padding: 3.75rem 3.125rem;
  border-radius: 0.75rem;
  background-color: var(--white);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-dark-color);
`;

export const Plan = styled.div`
  > div {
    flex-direction: row;
  }
`;

export const FormItem = styled(BaseForm.Item)`
  margin-bottom: 1.5rem;
`;

export const BtnCancel = styled(BaseButton)`
  width: 100%;
  color: var(--primary-color);
  border-color: var(--primary-color);
  margin-top: 1.5rem;
`;

export const BtnSave = styled(BaseButton)`
  width: 100%;
  margin-top: 1.5rem;
`;

export const PhoneNumber = styled(PhoneInput)<{ disabled: boolean; phoneCodeValid: boolean }>`
  border-radius: 6px;

  input.form-control {
    font-size: ${FONT_SIZE.md};
    background: var(--white);
    font-weight: ${FONT_WEIGHT.light};
    width: 100%;
    height: 50px;
    color: black;
    &::placeholder {
      color: #ccc;
    }
  }

  .flag-dropdown {
    border: none;
    outline: none;
    background: transparent;
  }

  .selected-flag {
    border: 1px solid #cacaca;
    background: transparent !important;

    ${(props) =>
      !props.phoneCodeValid &&
      css`
        .flag {
          background-image: none;
        }
      `}
  }

  ${(props) =>
    props.disabled &&
    css`
      input.form-control {
        background: var(--disabled-bg-color);
        color: var(--disabled-color);
      }
    `}
`;

        ### 📄 src/components/my-profile/components/content-left/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-avatar, @/stores/hooks, next-i18next, next/router`
* ww **Hooks:** `useTranslation, useAppSelector, useRouter`

        ```typescript
        import { BaseAvatar } from '@/components/common/base-avatar';
import { useAppSelector } from '@/stores/hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import * as S from './index.styles';
import { arrayPath } from './index.utils';

const ContentLeft = () => {
  const router = useRouter();
  const { t } = useTranslation('my-profile');

  const user = useAppSelector((state) => state.auth.user);
  const name = user?.first_name?.charAt(0).toUpperCase();

  return (
    <S.ContentLeftWrapper>
      <S.AvatarWrapper>
        <BaseAvatar alt="User" shape="circle" size={163}>
          <S.NameAvatar>{name}</S.NameAvatar>
        </BaseAvatar>
      </S.AvatarWrapper>
      <S.Name title={`${user?.first_name} ${user?.last_name}`}>
        {user?.first_name} {user?.last_name}
      </S.Name>
      {arrayPath.map((item, index) => (
        <S.Path
          key={index}
          href={item.path}
          activepath={(item.path === router.pathname).toString()}
        >
          <S.PathIcon color={item.color} />
          <S.PathName>{t(item.name)}</S.PathName>
        </S.Path>
      ))}
    </S.ContentLeftWrapper>
  );
};

export default ContentLeft;

        ### 📄 src/components/my-profile/components/content-left/index.utils.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants`

        ```typescript
        import { ROUTER_PATH } from '@/constants';

export const arrayPath = [
  {
    name: 'PersonalInfo',
    path: ROUTER_PATH.PERSONAL_INFO,
    color: '#01509A',
  },
  {
    name: 'SecuritySettings',
    path: ROUTER_PATH.SECURITY_SETTINGS,
    color: '#30AF5B',
  },
  {
    name: 'Payments',
    path: ROUTER_PATH.PAYMENT_HISTORY,
    color: '#FFB765',
  },
];

        ### 📄 src/components/my-profile/components/content-left/index.styles.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/image, next/link`

        ```typescript
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

        ### 📄 src/components/my-profile/security-settings/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-label, @/components/common/forms/base-form, @/components/common/inputs/password-input, @/constants, @/hooks/features/useUsers`...
* ww **Hooks:** `useChangePassword, useTranslation, useForm, useFeedback`

        ```typescript
        import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { InputPassword } from '@/components/common/inputs/password-input';
import { MESSAGES_ERROR } from '@/constants';
import { useChangePassword } from '@/hooks/features/useUsers';
import { useFeedback } from '@/hooks/useFeedback';
import { Col, Form, Row } from 'antd';
import { useTranslation } from 'next-i18next';

import ContentLeft from '../components/content-left';
import * as S from './index.styles';

type ChangePasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const SecuritySetting = () => {
  const { t } = useTranslation('my-profile');
  const [form] = Form.useForm();
  const { notification } = useFeedback();

  const { mutate } = useChangePassword();

  const handleSubmit = (value: ChangePasswordForm) => {
    mutate(
      {
        currentPassword: value.currentPassword.trim(),
        newPassword: value.newPassword.trim(),
      },
      {
        onSuccess: () => {
          form.resetFields();
          notification.success({ message: t('ChangePassword.success') });
        },
        onError: (error: any) => {
          if (error.data.error === MESSAGES_ERROR.WRONG_PASS_LOGIN) {
            form.setFields([
              {
                name: 'currentPassword',
                errors: [t('validate.MC3.4', { ns: 'common' })],
              },
            ]);
          }
        },
      }
    );
  };
  const initValues: ChangePasswordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  return (
    <S.ContentWrapper>
      <ContentLeft />
      <S.ContentRight>
        <S.Title>{t('ChangePassword.title')}</S.Title>
        <BaseForm
          form={form}
          onFinish={handleSubmit}
          initialValues={initValues}
          autoComplete="off"
          validateTrigger={['onBlur', 'onChange']}
        >
          <Row>
            <Col span={12}>
              <S.FormItem
                name="currentPassword"
                label={<BaseLabel label={t('ChangePassword.CurrentPassword')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                  () => ({
                    validator(_, value) {
                      if (/\s/.test(value)) {
                        return Promise.reject(
                          new Error(
                            t('validate.notContainSpace', {
                              ns: 'common',
                              name: t('ChangePassword.CurrentPassword'),
                            })
                          )
                        );
                      }
                      if (
                        value.length < 8 ||
                        value.length > 30 ||
                        !/[A-Z]/.test(value) ||
                        !/[0-9]/.test(value) ||
                        !/[!@#$%^&*(),.?":{}|<>]/.test(value)
                      ) {
                        return Promise.reject(new Error(t('validate.MC3.1', { ns: 'common' })));
                      }

                      return Promise.resolve();
                    },
                  }),
                ]}
                required={false}
              >
                <InputPassword placeholder={t('ChangePassword.CurrentPassword')} />
              </S.FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <S.FormItem
                name="newPassword"
                label={<BaseLabel label={t('ChangePassword.NewPassword')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                  () => ({
                    validator(_, value) {
                      if (/\s/.test(value)) {
                        return Promise.reject(
                          new Error(
                            t('validate.notContainSpace', {
                              ns: 'common',
                              name: t('ChangePassword.Password'),
                            })
                          )
                        );
                      }
                      if (
                        value.length < 8 ||
                        value.length > 30 ||
                        !/[A-Z]/.test(value) ||
                        !/[0-9]/.test(value) ||
                        !/[!@#$%^&*(),.?":{}|<>]/.test(value)
                      ) {
                        return Promise.reject(new Error(t('validate.MC3.1', { ns: 'common' })));
                      }

                      return Promise.resolve();
                    },
                  }),
                ]}
                required={false}
              >
                <InputPassword
                  placeholder={t('ChangePassword.NewPassword')}
                  onChange={() => {
                    if (form.getFieldValue('confirmPassword')) {
                      form.validateFields(['confirmPassword']);
                    }
                  }}
                />
              </S.FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <S.FormItem
                name="confirmPassword"
                label={<BaseLabel label={t('ChangePassword.ConfirmPassword')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(t('validate.confirmPasswordNotMatch', { ns: 'common' }))
                      );
                    },
                  }),
                ]}
                required={false}
              >
                <InputPassword placeholder={t('ChangePassword.ConfirmPassword')} />
              </S.FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <S.BtnSave type="primary" htmlType="submit">
                {t('ChangePassword.title')}
              </S.BtnSave>
            </Col>
          </Row>
        </BaseForm>
      </S.ContentRight>
    </S.ContentWrapper>
  );
};

export default SecuritySetting;

        ### 📄 src/components/my-profile/security-settings/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/components/common/forms/base-form, @/constants, styled-components`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { BaseForm } from '@/components/common/forms/base-form';
import { FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ContentRight = styled.div`
  flex: 1;
  padding: 3.75rem 3.125rem;
  border-radius: 0.75rem;
  background-color: var(--white);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-dark-color);
  margin-bottom: 1.5rem;
`;

export const FormItem = styled(BaseForm.Item)`
  margin-bottom: 1.5rem;
`;

export const BtnCancel = styled(BaseButton)`
  width: 100%;
  color: var(--primary-color);
  border-color: var(--primary-color);
  margin-top: 1.5rem;
`;

export const BtnSave = styled(BaseButton)`
  width: 100%;
  margin-top: 1.5rem;
`;

        ### 📄 src/components/header/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/hooks/useResponsive, react`
* 🧩 **Component (Arrow):** `Header`
* ww **Hooks:** `useResponsive`

        ```typescript
        import { useResponsive } from '@/hooks/useResponsive';
import React from 'react';

import { DesktopHeader } from './desktop-header';
import { MobileHeader } from './mobile-header';

interface HeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
  isTwoColumnsLayout: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  toggleSider,
  isSiderOpened,
  isTwoColumnsLayout,
}) => {
  const { isTablet } = useResponsive();

  return isTablet ? (
    <DesktopHeader isTwoColumnsLayout={isTwoColumnsLayout} />
  ) : (
    <MobileHeader toggleSider={toggleSider} isSiderOpened={isSiderOpened} />
  );
};

        ### 📄 src/components/header/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants`

        ```ts
        import { LAYOUT, media } from '@/constants';
import styled, { css } from 'styled-components';

import { BurgerIcon } from '../common/base-burger/BurgerIcon';
import { BaseButton } from '../common/base-button';
import { BaseCol } from '../common/base-col';
import { BaseCollapse } from '../common/base-collapse/base-collapse';
import { BaseInput } from '../common/inputs/base-input';

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(BaseCollapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: var(--primary-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(BaseCol)`
  z-index: 999;
  display: flex;
`;

export const MobileBurger = styled(BurgerIcon)`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: -0.5rem;
  color: var(--text-main-color);

  ${(props) =>
    props.isCross &&
    css`
      color: var(--text-secondary-color);
    `};
`;

export const SearchColumn = styled(BaseCol)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
`;

interface ProfileColumnProps {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(BaseCol)<ProfileColumnProps>`
  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        background-color: var(--sider-background-color);
        padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
      `}
  }
`;

export const InputSearch = styled(BaseInput)`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 40px;
  display: inline-flex;
  padding: 20px;
  position: relative;
  border: none;
  .ant-input-prefix {
    margin-right: 8px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

export const HeaderRowMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonHeader = styled(BaseButton)`
  cursor: pointer;
  padding: 0;
  margin: 0;
  .ant-btn {
    height: 0;
  }
`;

        ### 📄 src/components/header/profile/profile-dropdown/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-logout.svg, @/assets/images/svg/icon-profile.svg, @/components/common/base-avatar, @/components/common/base-col, @/components/common/base-dropdown`...
* 🧩 **Component (Arrow):** `ProfileDropdown`
* ww **Hooks:** `useEffect, useResponsive, useGetDetailUserQuery, useTranslation, useRouter, useAppDispatch, useAppSelector`

        ```typescript
        import IconLogout from '@/assets/images/svg/icon-logout.svg';
import IconProfile from '@/assets/images/svg/icon-profile.svg';
import { BaseAvatar } from '@/components/common/base-avatar';
import { BaseCol } from '@/components/common/base-col';
import { BaseDropdown } from '@/components/common/base-dropdown';
import { BaseRow } from '@/components/common/base-row';
import { ROUTER_PATH } from '@/constants';
import { useLogout } from '@/hooks/features/useAuth';
import { useGetDetailUserQuery } from '@/hooks/features/useUsers';
import { useFeedback } from '@/hooks/useFeedback';
import { useResponsive } from '@/hooks/useResponsive';
import { removeCredentials, updateUserInfo } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsProgress } from '@/stores/progress/progress.slice';
import { MenuProps } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import * as S from './index.styles';

const progessUrls = [ROUTER_PATH.TRANSLATOR, ROUTER_PATH.CAPTION];

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();
  const { t } = useTranslation('common');
  const { push, pathname } = useRouter();
  const { notification } = useFeedback();
  const dispatch = useAppDispatch();
  const { data: useDetail } = useGetDetailUserQuery();
  const { mutate: signOut } = useLogout();
  const isProgress = useAppSelector(selectIsProgress);

  const user = useAppSelector((state) => state.auth.user);
  const fName = user?.first_name?.charAt(0).toUpperCase();

  const menus: MenuProps['items'] = [
    {
      label: t('header.myProfile'),
      key: 'profile',
      icon: <IconProfile />,
    },
    {
      label: t('header.logout'),
      key: 'logout',
      icon: <IconLogout />,
    },
  ];

  const handleLogout = () => {
    if (user?.id) {
      const isPageProgessCheck = progessUrls.some((url) => pathname.startsWith(url));
      const doLogout = () => {
        signOut(Number(user.id), {
          onSuccess() {
            dispatch(removeCredentials());
            push(ROUTER_PATH.LOGIN);
            notification.success({ message: t('header.logoutSuccess') });
          },
        });
      };

      if (isPageProgessCheck && isProgress) {
        if (window.confirm('Do you really want to leave?')) {
          doLogout();
        }
      } else {
        doLogout();
      }
    }
  };

  const handleClickMenu = ({ key }: { key: string }) => {
    switch (key) {
      case 'logout':
        handleLogout();
        break;
      case 'profile':
        push('/my-profile/personal-info');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (useDetail?.data) {
      dispatch(updateUserInfo(useDetail.data));
    }
  }, [useDetail, dispatch]);

  return useDetail ? (
    <BaseDropdown
      menu={{
        items: menus,
        onClick: handleClickMenu,
      }}
      overlayClassName="menusProfile"
      trigger={['click']}
      placement="bottomRight"
    >
      <S.ProfileDropdownHeader as={BaseRow} gutter={[10, 10]} align="middle">
        <BaseCol>
          <BaseAvatar alt="User" shape="circle" size={40}>
            <S.NameAvatar>{`${fName}`}</S.NameAvatar>
          </BaseAvatar>
        </BaseCol>
        {isTablet && (
          <BaseCol>
            <S.Name title={`${user?.first_name} ${user?.last_name}`}>
              {user?.first_name} {user?.last_name}
            </S.Name>
          </BaseCol>
        )}
      </S.ProfileDropdownHeader>
    </BaseDropdown>
  ) : null;
};

        ### 📄 src/components/header/profile/profile-dropdown/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @ant-design/icons, styled-components`

        ```ts
        import { media } from '@/constants';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { HeaderActionWrapper } from '../../index.styles';

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;
  width: 100%;
  min-width: 120px;

  .menusProfile {
    ul {
      margin-top: 2px;
      li {
        padding: 1rem !important;
        border-radius: 0 !important;
        display: flex;
        flex-direction: row-reverse;

        &:first-child {
          border-bottom: 1px solid #ccc;
        }

        > span {
          font-weight: 500;
        }
      }
    }
  }

  @media only screen and ${media.md} {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;
  }
`;

export const DownArrow = styled(DownOutlined)`
  color: var(--text-secondary-color);

  @media only screen and ${media.md} {
    color: var(--text-main-color);
  }
`;

export const NameAvatar = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: 700;
`;

export const Name = styled.h2`
  color: var(--text-dark-color);
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #404040;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

        ### 📄 src/components/header/profile/profile-overlay/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/hooks/features/useAuth, @/hooks/useFeedback, @/stores/auth/auth.slice, @/stores/hooks`...
* 🧩 **Component (Arrow):** `ProfileOverlay`
* ww **Hooks:** `useTranslation, useRouter, useAppDispatch, useAppSelector, useFeedback, useLogout`

        ```typescript
        import { ROUTER_PATH } from '@/constants';
import { useLogout } from '@/hooks/features/useAuth';
import { useFeedback } from '@/hooks/useFeedback';
import { removeCredentials, selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './index.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { notification } = useFeedback();
  const useDetail = useAppSelector(selectCurrentUser);
  const { mutate: signOut } = useLogout();

  const handleLogout = () => {
    if (useDetail?.id) {
      signOut(Number(useDetail.id), {
        onSuccess() {
          dispatch(removeCredentials());
          push(ROUTER_PATH.LOGIN);
          notification.success({ message: t('header.logoutSuccess') });
        },
      });
    }
  };

  return (
    <div {...props}>
      <S.Text>
        <Link href="javascript:void(0)" onClick={handleLogout}>
          {t('header.logout')}
        </Link>
      </S.Text>
    </div>
  );
};

        ### 📄 src/components/header/profile/profile-overlay/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-divider, @/components/common/base-typography, @/constants, styled-components`

        ```ts
        import { BaseDivider } from '@/components/common/base-divider';
import { BaseTypography } from '@/components/common/base-typography';
import { media } from '@/constants';
import styled from 'styled-components';

export const Text = styled(BaseTypography.Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 0.875rem;
  font-weight: 600;

  & > a {
    display: block;
  }

  @media only screen and ${media.md} {
    font-size: 1rem;
  }
`;

export const ItemsDivider = styled(BaseDivider)`
  margin: 0;
`;

        ### 📄 src/components/header/mobile-header/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-col, react`
* 🧩 **Component (Arrow):** `MobileHeader`

        ```typescript
        import { BaseCol } from '@/components/common/base-col';
import React from 'react';

import * as S from '../index.styles';
import { ProfileDropdown } from '../profile/profile-dropdown';

interface MobileHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <S.HeaderRowMobile>
      <BaseCol>
        <ProfileDropdown />
      </BaseCol>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
      </S.BurgerCol>
    </S.HeaderRowMobile>
  );
};

        ### 📄 src/components/header/desktop-header/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-fi-rr-expand-arrows.svg, @/assets/images/svg/icon-fi-rr-settings.svg, @/components/common/base-row, @/components/language-switcher, react`
* 🧩 **Component (Arrow):** `DesktopHeader`

        ```typescript
        import IconExpandArrows from '@/assets/images/svg/icon-fi-rr-expand-arrows.svg';
import IconSettings from '@/assets/images/svg/icon-fi-rr-settings.svg';
import { BaseRow } from '@/components/common/base-row';
import LanguageSwitcher from '@/components/language-switcher';
import React from 'react';

import * as S from '../index.styles';
import { ProfileDropdown } from '../profile/profile-dropdown';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  return (
    <S.HeaderRow>
      {/* <S.InputSearch
          placeholder="Search"
          prefix={<IconSearch />}
          suffix={<S.ButtonHeader type="link" icon={<IconFilterSearch />} />}
        /> */}
      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <BaseRow justify="end">
          <S.ContainerRight>
            <S.ButtonHeader type="link" icon={<IconExpandArrows />} />
            <LanguageSwitcher />
            <S.ButtonHeader type="link" icon={<IconSettings />} />
            <ProfileDropdown />
          </S.ContainerRight>
        </BaseRow>
      </S.ProfileColumn>
    </S.HeaderRow>
  );
};

        ### 📄 src/layouts/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`

        ```typescript
        import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="main">{children}</section>;
};

export default RootLayout;

        ### 📄 src/layouts/admin-layout/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/header, @/components/modals/modal-plan, @/components/modals/modal-reminder, next/dynamic`
* ww **Hooks:** `useState`

        ```typescript
        import { Header } from '@/components/header';
import PlanModal from '@/components/modals/modal-plan';
import ReminderModal from '@/components/modals/modal-reminder';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import MainContent from './content';
import * as S from './index.styles';

const MainHeader = dynamic(() => import('./header'), { ssr: false });
const MainFooter = dynamic(() => import('./footer'), { ssr: false });
const MainSider = dynamic(() => import('./sider'), { ssr: false });

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isTwoColumnsLayout] = useState(false);
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <Header
            toggleSider={toggleSider}
            isSiderOpened={!siderCollapsed}
            isTwoColumnsLayout={isTwoColumnsLayout}
          />
        </MainHeader>
        <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>{children}</div>
        </MainContent>
        <MainFooter />
      </S.LayoutMain>

      <PlanModal />
      <ReminderModal />
    </S.LayoutMaster>
  );
};

export default AppLayout;

        ### 📄 src/layouts/admin-layout/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-layout, @/constants, styled-components`

        ```ts
        import { BaseLayout } from '@/components/common/base-layout';
import { media } from '@/constants';
import styled from 'styled-components';

export const LayoutMaster = styled(BaseLayout)`
  height: 100vh;
`;

export const LayoutMain = styled(BaseLayout)`
  @media only screen and ${media.md} {
    margin-left: 80px;
  }

  @media only screen and ${media.xl} {
    margin-left: unset;
  }
`;

        ### 📄 src/layouts/admin-layout/footer/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/utils/cookie, next-i18next, react`
* ww **Hooks:** `useTranslation`

        ```typescript
        import { DEFAULT_LOCALE } from '@/constants';
import cookies from '@/utils/cookie';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

const MainFooter = () => {
  const { t } = useTranslation(['common']);

  const locale = cookies.get('locale') ?? DEFAULT_LOCALE;

  const handleClickTermsOfUse = () => {
    window.open(`/pdf/${locale}/terms-of-use.pdf`);
  };

  const handleClickPolicy = () => {
    window.open(`/pdf/${locale}/privacy-policy.pdf`);
  };

  return (
    <S.ContentFooter>
      <S.CompanyInfo>
        {t('footer.companyName', { ns: 'common' })} | {t('footer.owner', { ns: 'common' })}
      </S.CompanyInfo>
      <S.CompanyInfo>{t('footer.address', { ns: 'common' })}</S.CompanyInfo>
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
  );
};

export default MainFooter;

        ### 📄 src/layouts/admin-layout/footer/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `styled-components`

        ```ts
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

        ### 📄 src/layouts/admin-layout/sider/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/overlay, @/hooks/useResponsive`
* 🧩 **Component (Arrow):** `MainSider`
* ww **Hooks:** `useResponsive, useMemo`

        ```typescript
        import { Overlay } from '@/components/common/overlay';
import { useResponsive } from '@/hooks/useResponsive';
import React, { useMemo } from 'react';

import SiderMenu from '../sider-menu';
import { SiderLogo } from '../sider-menu/SiderLogo';
import * as S from './index.styles';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive();

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly]);

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <SiderMenu setCollapsed={setCollapsed} />
        </S.SiderContent>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default MainSider;

        ### 📄 src/layouts/admin-layout/sider/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-button, @/components/common/base-layout, @/constants, @/constants, next/link`

        ```ts
        import { BaseButton } from '@/components/common/base-button';
import { BaseLayout } from '@/components/common/base-layout';
import { media } from '@/constants';
import { LAYOUT } from '@/constants';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Sider = styled(BaseLayout.Sider)`
  &.ant-layout-sider {
    position: fixed;
  }

  overflow: visible;
  right: 0;
  z-index: 5;
  min-height: 100vh;
  max-height: 100vh;

  color: var(--text-secondary-color);

  @media only screen and ${media.md} {
    right: unset;
    left: 0;
  }

  @media only screen and ${media.xl} {
    &.ant-layout-sider {
      position: unset;
    }
  }
`;

interface Collapse {
  $isCollapsed: boolean;
}

export const CollapseButton = styled(BaseButton)<Collapse>`
  background: var(--collapse-background-color);

  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
  position: absolute;
  right: 0.5rem;

  ${(props) =>
    props.$isCollapsed &&
    css`
      right: -1rem;
    `}

  color: var(--text-secondary-color);

  &.ant-btn:not(:disabled):hover,
  &.ant-btn:not(:disabled):focus {
    color: var(--text-secondary-color);
    background: var(--primary-color);
    border: 1px solid var(--border-color);
  }
`;

export const SiderContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

  @media only screen and ${media.md} {
    max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  }
`;

export const SiderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  .anticon {
    color: var(--white);
    svg {
      height: 2.7rem;
      width: 2.7rem;
    }
  }
`;

export const SiderLogoDiv = styled.div`
  height: ${LAYOUT.mobile.headerHeight};
  padding: ${LAYOUT.mobile.headerPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);

  @media only screen and ${media.md} {
    height: ${LAYOUT.desktop.headerHeight};
    padding-left: 1.5rem;
  }
`;

export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--white);
`;

        ### 📄 src/layouts/admin-layout/content/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-layout, @/constants`

        ```typescript
        import { BaseLayout } from '@/components/common/base-layout';
import { LAYOUT, media } from '@/constants';
import styled, { css } from 'styled-components';

interface HeaderProps {
  $isTwoColumnsLayout: boolean;
}

export default styled(BaseLayout.Content)<HeaderProps>`
  padding: ${LAYOUT.mobile.paddingVertical} ${LAYOUT.mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
  }

  @media only screen and ${media.xl} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        padding: 0;
      `}
  }
`;

        ### 📄 src/layouts/admin-layout/sider-menu/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/hooks/features/useUsers, @/stores/hooks, @/stores/progress/progress.slice, @/utils`...
* 🧩 **Component (Arrow):** `SiderMenu`
* ww **Hooks:** `useAppDispatch, useGetDetailUserQuery, useTranslation, useRouter`

        ```typescript
        import { ROUTER_PATH } from '@/constants';
import { useGetDetailUserQuery } from '@/hooks/features/useUsers';
import { useAppDispatch } from '@/stores/hooks';
import {
  setIsOpenPlanOverview,
  setIsOpenRenewPlan,
  setIsProgress,
} from '@/stores/progress/progress.slice';
import { checkDateAfterExpired, checkExpiredDate } from '@/utils';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './index.styles';
import { SidebarNavigationItem, sidebarNavigation } from './menu.utils';

interface SiderContentProps {
  setCollapsed: (isCollapsed: boolean) => void;
}

const expiredPaymentCheckURls: string[] = [ROUTER_PATH.TRANSLATOR, ROUTER_PATH.CAPTION];

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { refetch } = useGetDetailUserQuery();

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some(({ url }) => url === router.pathname)
  );

  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  return (
    <S.Menu
      mode="inline"
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={defaultOpenKeys}
      onClick={() => setCollapsed(true)}
      items={sidebarNavigation.map((nav: SidebarNavigationItem) => {
        const isSubMenu = nav.children?.length;

        return {
          key: nav.key,
          title: t(nav.title),
          label: isSubMenu ? t(nav.title) : <Link href={nav.url || ''}>{t(nav.title)}</Link>,
          icon: nav.key === openedSubmenu?.key ? nav.iconActive : nav.icon,
          children:
            isSubMenu &&
            nav.children &&
            nav.children.map((childNav) => ({
              key: childNav.key,
              label: (
                <Link
                  href={childNav.url || ''}
                  onClick={async (e) => {
                    e.preventDefault();
                    const isMenuCheckExpired =
                      childNav.url && expiredPaymentCheckURls.includes(childNav.url);

                    if (isMenuCheckExpired || childNav.url === ROUTER_PATH.YOUTUBE_ACCOUNT) {
                      const dataUser = await refetch();
                      const userData = dataUser?.data?.data;
                      if (isMenuCheckExpired) {
                        if (userData) {
                          if (!userData.level) {
                            dispatch(setIsOpenPlanOverview(true));
                            return;
                          }
                          if (checkExpiredDate(userData.expire_date)) {
                            if (checkDateAfterExpired(userData.expire_date, 30)) {
                              dispatch(setIsOpenRenewPlan(true));
                              dispatch(setIsProgress(false));
                              return;
                            } else {
                              dispatch(setIsOpenPlanOverview(true));
                              dispatch(setIsProgress(false));
                              return;
                            }
                          }
                        }
                      }
                    }

                    router.push(childNav.url ?? '');
                  }}
                >
                  <S.PathItem active={(router.pathname === childNav.url).toString()}>
                    {t(childNav.title)}
                  </S.PathItem>
                </Link>
              ),
              title: t(childNav.title),
            })),
        };
      })}
    />
  );
};

export default SiderMenu;

        ### 📄 src/layouts/admin-layout/sider-menu/SiderLogo.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/logo.svg, @/constants, react`
* 🧩 **Component (Arrow):** `SiderLogo`

        ```typescript
        import IconLogo from '@/assets/images/svg/logo.svg';
import { ROUTER_PATH } from '@/constants';
import React from 'react';

import * as S from '../sider/index.styles';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = () => {
  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink href={ROUTER_PATH.DASHBOARD}>
        <IconLogo />
      </S.SiderLogoLink>
      {/* {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )} */}
    </S.SiderLogoDiv>
  );
};

        ### 📄 src/layouts/admin-layout/sider-menu/menu.utils.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/menu/icon-cloud-active.svg, @/assets/images/svg/menu/icon-cloud.svg, @/assets/images/svg/menu/icon-profile-active.svg, @/assets/images/svg/menu/icon-profile.svg, react`
* wb **Type/Intf:** `SidebarNavigationItem`

        ```typescript
        import IconCloudActive from '@/assets/images/svg/menu/icon-cloud-active.svg';
import IconCloud from '@/assets/images/svg/menu/icon-cloud.svg';
import IconProfileActive from '@/assets/images/svg/menu/icon-profile-active.svg';
import IconProfile from '@/assets/images/svg/menu/icon-profile.svg';
import React from 'react';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'sider.cloudSoftware',
    key: 'cloudSoftware',
    icon: <IconCloud />,
    iconActive: <IconCloudActive />,
    children: [
      {
        title: 'sider.youTubeAccounts',
        key: 'youTubeAccounts',
        url: '/cloud-software/youtube-accounts',
      },
      {
        title: 'sider.translator',
        key: 'translator',
        url: '/cloud-software/translator',
      },
      {
        title: 'sider.captionizer',
        key: 'captionizer',
        url: '/cloud-software/captionizer',
      },
    ],
  },
  {
    title: 'sider.myProfile',
    key: 'myProfile',
    url: '/my-profile',
    icon: <IconProfile />,
    iconActive: <IconProfileActive />,
    children: [
      {
        title: 'sider.personalInfo',
        key: 'personalInfo',
        url: '/my-profile/personal-info',
      },
      {
        title: 'sider.securitySettings',
        key: 'securitySettings',
        url: '/my-profile/security-settings',
      },
      {
        title: 'sider.paymentHistory',
        key: 'paymentHistory',
        url: '/my-profile/payment-history',
      },
    ],
  },
];

        ### 📄 src/layouts/admin-layout/sider-menu/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-menu`

        ```ts
        import { BaseMenu } from '@/components/common/base-menu';
import styled, { css } from 'styled-components';

export const Menu = styled(BaseMenu)`
  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item.ant-menu-item-selected::after {
    border-color: var(--primary-color);
  }

  .ant-menu-item:not(:last-child),
  .ant-menu-submenu-title {
    margin-bottom: 8px;
  }
`;

export const PathItem = styled.span<{ active: string }>`
  @media (min-width: 768px) and (max-width: 1280px) {
    color: var(--black);
  }
  ${(props) =>
    props.active === 'true'
      ? css`
          color: var(--text-sider-primary-color) !important;
        `
      : css`
          color: var(--white);
        `};
`;

        ### 📄 src/layouts/admin-layout/header/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces, react`
* 🧩 **Component (Arrow):** `MainHeader`

        ```typescript
        import { WithChildrenProps } from '@/interfaces';
import React from 'react';

import * as S from './index.styles';

interface MainHeaderProps extends WithChildrenProps {
  isTwoColumnsLayout: boolean;
  children: React.ReactNode;
}

const MainHeader: React.FC<MainHeaderProps> = ({ isTwoColumnsLayout, children }) => {
  return <S.Header $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>{children}</S.Header>;
};

export default MainHeader;

        ### 📄 src/layouts/admin-layout/header/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/base-layout, @/constants, @/constants`

        ```ts
        import { BaseLayout } from '@/components/common/base-layout';
import { LAYOUT } from '@/constants';
import { media } from '@/constants';
import styled, { css } from 'styled-components';

interface HeaderProps {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(BaseLayout.Header)<HeaderProps>`
  line-height: 1.5;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

  @media only screen and ${media.md} {
    height: ${LAYOUT.desktop.headerHeight};
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;

        ### 📄 src/layouts/auth-layout/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Arrow):** `AuthLayout`

        ```typescript
        import React from 'react';

import * as S from './index.styles';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <S.LoginWrapper>{children}</S.LoginWrapper>
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

export default AuthLayout;

        ### 📄 src/layouts/auth-layout/index.styles.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/auth/auth-bg.png, @/components/common/base-button, @/components/common/base-checkbox, @/components/common/forms/base-form, @/components/common/inputs/base-input`...

        ```ts
        import authBackground from '@/assets/images/auth/auth-bg.png';
import { BaseButton } from '@/components/common/base-button';
import { BaseCheckbox } from '@/components/common/base-checkbox';
import { BaseForm } from '@/components/common/forms/base-form';
import { BaseInput as CommonInput } from '@/components/common/inputs/base-input';
import { InputPassword as CommonInputPassword } from '@/components/common/inputs/password-input';
import { BASE_COLORS, BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@/constants';
import { LeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${authBackground.src});
  background-size: cover;
  position: relative;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const FormWrapper = styled.div`
  padding: 2.5rem;
  width: 31.75rem;
  overflow: auto;
  background-color: rgba(var(--background-rgb-color), 0.93);
  border-radius: ${BORDER_RADIUS};

  @media only screen and ${media.xs} {
    padding: 2.5rem 1.25rem;
    width: 20.75rem;
    max-height: calc(100vh - 3rem);
  }

  @media only screen and ${media.md} {
    padding: 2.5rem;
    width: 31.75rem;
    max-height: calc(100vh - 3rem);
  }
`;

export const FormTitle = styled.div`
  color: var(--primary-color);
  margin-bottom: 0.9375rem;
  font-size: ${FONT_SIZE.xxxl};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 2.125rem;
`;

export const FormCheckbox = styled(BaseCheckbox)`
  display: flex;
  padding-left: 0.125rem;

  & .ant-checkbox-inner {
    border-radius: 3px;
    transform: scale(1.375);
  }

  & .ant-checkbox-input {
    transform: scale(1.375);
  }
`;

export const FormItem = styled(BaseForm.Item)`
  margin-bottom: 0.75rem;
  & .ant-form-item-control-input {
    min-height: 3.125rem;
  }

  & .ant-form-item-explain-error {
    font-size: ${FONT_SIZE.xs};
  }

  & .ant-form-item-label label {
    font-size: ${FONT_SIZE.xs};
    line-height: 1.25rem;
  }

  &.ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 1.5rem;
  }

  .ant-input {
    &::placeholder {
      color: ${BASE_COLORS.gray};
    }
  }
`;

export const FormInput = styled(CommonInput)`
  color: var(--text-main-color);
  background: transparent;
  & input.ant-input {
    background: transparent;
  }
`;

export const FormInputPassword = styled(CommonInputPassword)`
  color: var(--text-main-color);
  background: transparent;
  & input.ant-input {
    background: transparent;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Text = styled.span`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.medium};
`;

export const LinkText = styled(Text)`
  text-decoration: underline;
  color: var(--primary-color);
`;

export const SubmitButton = styled(BaseButton)`
  margin-top: 1rem;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  width: 100%;
`;

export const SocialButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const FooterWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
`;

export const BackIcon = styled(LeftOutlined)`
  font-size: 0.75rem;
  margin-right: 0.75rem;
`;

export const BackWrapper = styled.div`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.25rem;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  margin-right: 0.8125rem;
  @media only screen and ${media.xs} {
    margin-right: 0.625rem;
  }

  @media only screen and ${media.md} {
    margin-right: 0.8125rem;
  }
`;

export const LinkButton = styled(BaseButton)`
  width: unset;
  border: none;
  outline: none;
  display: inline-block;
  padding: 0 5px;
  span {
    text-decoration: underline;
    color: var(--primary-color);
    font-size: ${FONT_SIZE.md};
    font-weight: ${FONT_WEIGHT.regular};
  }
  &.ant-btn-default:disabled {
    background-color: transparent;
  }
`;

export const Description = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.medium};
  margin-bottom: 1rem;
`;

export const VerifyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconVerify = styled.div`
  margin-bottom: 1rem;
`;

export const DescriptionVerify = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.regular};
`;

        ### 📄 src/layouts/main-layout/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`

        ```typescript
        import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="main">
      <header>Header</header>
      <main>{children}</main>
    </section>
  );
};

export default MainLayout;

        ### 📄 src/hooks/useFeedback.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/controllers/modal, @/controllers/notification, antd`
* ww **Hooks:** `useApp`

        ```ts
        import { modalController } from '@/controllers/modal';
import { notificationController } from '@/controllers/notification';
import { App } from 'antd';

export const useFeedback = (): ReturnType<typeof App.useApp> => {
  const { message, notification, modal } = App.useApp();

  return {
    message,
    notification: {
      ...notificationController(notification),
      destroy: notification.destroy,
      open: notification.open,
    },
    modal: {
      ...modalController(modal),
      confirm: modal.confirm,
    },
  };
};

        ### 📄 src/hooks/useDimensions.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* ww **Hooks:** `useEffect, useCallback`

        ```ts
        import { useCallback, useEffect, useState } from 'react';

interface Dimension {
  width: number | undefined;
  height: number | undefined;
}

export const useDimensions = (ref: { current: Element | null }): Dimension => {
  const [dimensions, setDimensions] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const handleDimensions = useCallback(() => {
    const element = ref.current && ref.current.getBoundingClientRect();
    setDimensions({ width: element?.width, height: element?.height });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  useEffect(() => {
    const id = setInterval(() => {
      handleDimensions();
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [handleDimensions]);

  useEffect(() => {
    handleDimensions();

    window.addEventListener('resize', handleDimensions);

    return () => {
      window.removeEventListener('resize', handleDimensions);
    };
  }, [handleDimensions]);

  return { width: dimensions.width, height: dimensions.height };
};

        ### 📄 src/hooks/useOnClickOutside.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* ww **Hooks:** `useEffect`

        ```ts
        import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void
): void {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };

    // Reload only if ref or handler changes
  }, [ref, handler]);
}

export { useOnClickOutside };

        ### 📄 src/hooks/useLoadServerError.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/interfaces, antd, lodash/find, lodash/forEach`
* 🧩 **Component (Default):** `useLoadServerError`
* ww **Hooks:** `useLoadServerError, useFeedback`

        ```ts
        import { RESPONSE_CODE } from '@/constants';
import { ApiError, ServerError, ValidationError } from '@/interfaces';
import { FormInstance } from 'antd';
import find from 'lodash/find';
import forEach from 'lodash/forEach';

import { useAppMutationCustomProps } from './useAppMutation';
import { useFeedback } from './useFeedback';

type ARGS = {
  error: ApiError;
  form?: FormInstance;
  customProps?: useAppMutationCustomProps;
};

export default function useLoadServerError() {
  const { notification } = useFeedback();
  const loadServerErrors = (args: ARGS) => {
    const { error, form, customProps } = args;

    if (!error) {
      return;
    }

    const response = error;

    const isClientError =
      !Object.prototype.hasOwnProperty.call(error, 'response') && error.statusText == '';
    if (isClientError && response.status !== RESPONSE_CODE.NOT_FOUND && customProps?.toast) {
      const response = error.data as ServerError;
      if (typeof response.message !== 'string') return;
      notification.error({ message: response.message });
      return;
    }

    if (response.status === RESPONSE_CODE.SERVER_ERROR) {
      // show toast notification
      return;
    }

    if (form !== undefined && response.status === RESPONSE_CODE.VALIDATION_ERROR) {
      const data = response.data as ValidationError;
      attachErrorsIntoForm(data, form);
      return;
    }
    // const data = response.data as ServerError;
    // showError(data || []);
  };

  const attachErrorsIntoForm = (data: ValidationError, form: FormInstance) => {
    let errorLoaded = false;

    const formValues = form.getFieldsValue();
    forEach(formValues, (_: string, key: string) => {
      const info = find(data.detail, (item) => item.field === key);
      if (!info) {
        return;
      }

      errorLoaded = true;
      // TODO handler i18n with item.key
      form.setFieldsValue({
        [key]: {
          value: null,
          error: info.message,
        },
      });
    });

    if (errorLoaded) {
      return;
    }

    // show toast message
    let message = 'Some fields are invalid';
    const info = data.detail[0].message;
    if (info) {
      message = info;
    }
    showError(message);
  };

  const showError = (error: any) => {
    // Custom i18n with error.key
    let message = error[0]?.message || error;

    if (message === 'canceled') {
      return;
    }

    if (message === 'Too Many Attempts.') {
      message = '...';
    }

    notification.error({ message });
  };

  return {
    loadServerErrors,
  };
}

        ### 📄 src/hooks/useCheckMobile.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, react`
* ww **Hooks:** `useEffect, useState`

        ```ts
        import { SCREENS } from '@/constants';
import { useEffect, useState } from 'react';

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width < SCREENS.DESKTOP;
};

export default useCheckMobileScreen;

        ### 📄 src/hooks/useAppMutation.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/hooks/useLoadServerError, @/interfaces, @/utils/react-query, @tanstack/react-query, antd`
* wb **Type/Intf:** `AppMutationOptions`
* wb **Type/Intf:** `useAppMutationCustomProps`
* wb **Type/Intf:** `useAppMutationProps`
* 🧩 **Component (Default):** `useAppMutation`
* ww **Hooks:** `useMutation, useLoadServerError`

        ```ts
        import useLoadServerError from '@/hooks/useLoadServerError';
import { ApiError } from '@/interfaces';
import { useMutation } from '@/utils/react-query';
import {
  DefaultError,
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import { FormInstance } from 'antd';

export interface AppMutationOptions {
  form?: FormInstance;
}

export interface useAppMutationCustomProps {
  toast: boolean;
}

export interface useAppMutationProps<TData, TError, TVariables, TContext> {
  useAppMutationProps?: AppMutationOptions;
  queryOptions?: UseMutationOptions<TData, TError, TVariables, TContext>;
  customProps?: useAppMutationCustomProps;
}

export default function useAppMutation<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown
>(
  mutationFn: MutationFunction<TData, TVariables>,
  props?: useAppMutationProps<TData, TError, TVariables, TContext>,
  customProps?: useAppMutationCustomProps
): UseMutationResult<TData, TError, TVariables, TContext> {
  const { loadServerErrors } = useLoadServerError();
  // custom
  const mutation = useMutation({
    ...props?.queryOptions,
    mutationFn,
    onError: (error) => {
      loadServerErrors({
        error: error as unknown as ApiError,
        ...props?.useAppMutationProps,
        customProps: {
          toast: customProps ? customProps?.toast : true,
        },
      });
      return;
    },
  });

  const safeMutate = (...args: Parameters<typeof mutation.mutate>) => {
    if (!mutation.isPending) {
      return mutation.mutate(...args);
    }
  };

  return { ...mutation, mutate: safeMutate };
}

        ### 📄 src/hooks/use-timer.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* ww **Hooks:** `useEffect, useState`

        ```ts
        import { useEffect, useState } from 'react';

export const useTimer = (initialSeconds: number = 300, onEndTime?: () => void) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value <= 0) return;

    const interval = setInterval(() => setValue(value - 1), 1000);

    return () => clearInterval(interval);
  }, [value]);

  useEffect(() => {
    if (value === 0 && onEndTime) {
      onEndTime();
    }
  }, [value, onEndTime]);

  function execute() {
    setValue(initialSeconds);
  }

  function reset(stop = false) {
    setValue(stop ? 0 : initialSeconds);
  }

  return [value, execute, reset] as [number, () => void, (stop?: boolean) => void];
};

        ### 📄 src/hooks/useMounted.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* ww **Hooks:** `useEffect, useRef`

        ```ts
        import { MutableRefObject, useEffect, useRef } from 'react';

interface UseMountedReturnVal {
  isMounted: MutableRefObject<boolean>;
}

export const useMounted = (): UseMountedReturnVal => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { isMounted };
};

        ### 📄 src/hooks/useDebounce.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* ww **Hooks:** `useEffect`

        ```ts
        import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

        ### 📄 src/hooks/usePagination.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces, react`

        ```ts
        import { IPaginationParams } from '@/interfaces';
import { useState } from 'react';

const LIMIT = 20;

export const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const onChange = (v: number) => {
    setCurrentPage(v);
  };

  const params: IPaginationParams = {
    page: currentPage,
    pageSize: LIMIT,
  };

  return {
    currentPage,
    onChange,
    params,
    LIMIT,
  };
};

        ### 📄 src/hooks/useResponsive.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, react-responsive`
* ww **Hooks:** `useMediaQuery`

        ```ts
        import { BREAKPOINTS, media } from '@/constants';
import { MediaQueryAllQueryable, MediaQueryMatchers, useMediaQuery } from 'react-responsive';

interface ResponsiveReturnValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isBigScreen: boolean;
  mobileOnly: boolean;
  tabletOnly: boolean;
  desktopOnly: boolean;
  useMediaQuery: (
    settings: Partial<MediaQueryAllQueryable & { query?: string | undefined }>,
    device?: MediaQueryMatchers,
    callback?: (matches: boolean) => void
  ) => boolean;
}

export const useResponsive = (): ResponsiveReturnValues => {
  const isMobile = useMediaQuery({ query: media.xs });
  const isTablet = useMediaQuery({ query: media.md });
  const isDesktop = useMediaQuery({ query: media.xl });
  const isBigScreen = useMediaQuery({ query: media.xxl });

  const mobileOnly = useMediaQuery({
    query: `(max-width: ${BREAKPOINTS.md - 0.02}px)`,
  });

  const tabletOnly = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.xl - 0.02}px)`,
  });

  const desktopOnly = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.xl}px) and (max-width: ${BREAKPOINTS.xxl - 0.02}px)`,
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
    mobileOnly,
    tabletOnly,
    desktopOnly,
    useMediaQuery,
  };
};

        ### 📄 src/hooks/useAppQuery.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces, @tanstack/react-query`
* wb **Type/Intf:** `UseAppQueryResult`
* 🧩 **Component (Default):** `useAppQuery`
* ww **Hooks:** `useQuery, useLoadServerError`

        ```ts
        import { ApiError } from '@/interfaces';
import {
  QueryClient,
  QueryKey,
  QueryObserverResult,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

import useLoadServerError from './useLoadServerError';

export type UseAppQueryResult<TData, TError> = Omit<UseQueryResult<TData, TError>, 'refetch'> & {
  refetch: (
    ...args: Parameters<UseQueryResult<TData, TError>['refetch']>
  ) => Promise<QueryObserverResult<TData, TError> | void>;
};

export default function useAppQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient
): UseAppQueryResult<TData, TError> {
  const { loadServerErrors } = useLoadServerError();

  const query = useQuery(options, queryClient);

  const safeRefetch = (
    ...args: Parameters<UseQueryResult<TData, TError>['refetch']>
  ): Promise<QueryObserverResult<TData, TError> | void> => {
    if (!query.isRefetching) {
      return query.refetch(...args);
    }

    return Promise.resolve();
  };

  if (query.isError) {
    loadServerErrors({ error: query.error as ApiError });
  }

  return { ...query, refetch: safeRefetch };
}

        ### 📄 src/hooks/features/useYoutubeAccount.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/cloud-software/youtube-accounts, @/interfaces/cloud-software`
* ww **Hooks:** `useAppMutation, useAppQuery`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import {
  callbackYoutube,
  connectYoutube,
  deleteYoutube,
  detailVideosYoutube,
  getListYoutube,
  getTotalVideoInfo,
  getVideoHistory,
  publishVideoYoutube,
  refreshTotalVideosYoutube,
  refreshVideosYoutube,
  videosYoutube,
} from '@/api/cloud-software/youtube-accounts';
import {
  IConnectYoutubeCallback,
  IConnectYoutubeVideos,
  IYoutubeDetailVideo,
} from '@/interfaces/cloud-software';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useConnectYoutube = (options?: AppMutationOptions) =>
  useAppMutation(connectYoutube, {
    useAppMutationProps: options,
  });

export const useRefreshTotalVideo = (options?: AppMutationOptions) =>
  useAppMutation(
    refreshTotalVideosYoutube,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useGetListYoutube = (params: any, enabled?: boolean) =>
  useAppQuery({
    queryKey: ['list-youtube', params],
    queryFn: () => getListYoutube(params),
    enabled: enabled ?? true,
  });

export const useCallbackYoutube = (params: IConnectYoutubeCallback, enabled: boolean) =>
  useAppQuery({
    queryKey: ['callback-youtube', params, enabled],
    queryFn: () => callbackYoutube(params),
    enabled,
  });

export const useDeleteYoutubeMutate = (options?: AppMutationOptions) =>
  useAppMutation(deleteYoutube, {
    useAppMutationProps: options,
  });

export const useGetVideosYoutube = (params: IConnectYoutubeVideos) =>
  useAppQuery({
    queryKey: ['videos-youtube', params],
    queryFn: () => videosYoutube(params),
  });

export const useGetDetailVideoYoutube = (params: IYoutubeDetailVideo, enabled: boolean) =>
  useAppQuery({
    queryKey: ['detail-video', params],
    queryFn: () => detailVideosYoutube(params),
    enabled,
  });

export const usePublishVideoMutate = (options?: AppMutationOptions) =>
  useAppMutation(
    publishVideoYoutube,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useRefreshVideosMutate = (options?: AppMutationOptions) =>
  useAppMutation(refreshVideosYoutube, {
    useAppMutationProps: options,
  });

export const useGetVideoHistory = (params: IYoutubeDetailVideo, enabled: boolean) =>
  useAppQuery({
    queryKey: ['video-history', params],
    queryFn: () => getVideoHistory(params),
    enabled,
  });

export const useGetTotalVideoInfo = () =>
  useAppQuery({
    queryKey: ['total-video'],
    queryFn: () => getTotalVideoInfo(),
    gcTime: 0,
  });

        ### 📄 src/hooks/features/useTranslate.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/cloud-software/translate, @/interfaces/cloud-software`
* ww **Hooks:** `useAppQuery, useAppMutation`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import {
  getListLanguage,
  getListYoutubeLanguage,
  translateText,
} from '@/api/cloud-software/translate';
import { IListLanguageRequest } from '@/interfaces/cloud-software';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useGetListLanguage = (params: IListLanguageRequest, enabled: boolean) =>
  useAppQuery({
    queryKey: ['list-language'],
    queryFn: () => getListLanguage(params),
    enabled,
  });

export const useTranslateText = (options?: AppMutationOptions) =>
  useAppMutation(translateText, {
    useAppMutationProps: options,
  });

export const useGetListYoutubeLanguage = (params: IListLanguageRequest, enabled: boolean) =>
  useAppQuery({
    queryKey: ['list-language-youtube'],
    queryFn: () => getListYoutubeLanguage(params),
    enabled,
  });

        ### 📄 src/hooks/features/useSupcriptionPlan.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/supcription-plan, @/interfaces`
* ww **Hooks:** `useAppQuery, useAppMutation`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import {
  getPaymentHistory,
  paymentCapture,
  paymentOrder,
  updatePlan,
} from '@/api/supcription-plan';
import { PaginationParams } from '@/interfaces';

import useAppMutation from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useGetPaymentHistory = (params: PaginationParams) =>
  useAppQuery({
    queryKey: ['paymentHistory', params],
    queryFn: () => getPaymentHistory(params),
  });

export const usePaymentOrder = () => useAppMutation(paymentOrder, undefined, { toast: false });

export const usePaymentCapture = () => useAppMutation(paymentCapture, undefined, { toast: false });

export const useChangePlan = () => useAppMutation(updatePlan);

        ### 📄 src/hooks/features/useCaptionize.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/cloud-software/caption, @/interfaces/cloud-software`
* ww **Hooks:** `useAppMutation, useAppQuery`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import {
  getCaptionByVideo,
  getCaptionDetail,
  getCaptionPushHistory,
  publishCaption,
  translateCaption,
} from '@/api/cloud-software/caption';
import {
  IGetCaptionByVideoRequest,
  IGetCaptionPushHistoryRequest,
} from '@/interfaces/cloud-software';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useGetCaptionByVideoMutation = (options?: AppMutationOptions) =>
  useAppMutation(getCaptionByVideo, {
    useAppMutationProps: options,
  });

export const useGetCaptionDetail = (options?: AppMutationOptions) =>
  useAppMutation(
    getCaptionDetail,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useGetCaptionByVideoQuery = (params: IGetCaptionByVideoRequest) =>
  useAppQuery({
    queryKey: ['captionByVideo', params],
    queryFn: () => getCaptionByVideo(params),
  });

export const useTranslateCaptionMutation = (options?: AppMutationOptions) =>
  useAppMutation(
    translateCaption,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const usePublishCaptionMutation = (options?: AppMutationOptions) =>
  useAppMutation(
    publishCaption,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useGetCaptionPushHistoryQuery = (params: IGetCaptionPushHistoryRequest) =>
  useAppQuery({
    queryKey: ['captionPushHistory', params],
    queryFn: () => getCaptionPushHistory(params),
  });

export const useGetCaptionPushHistoryMutation = (options?: AppMutationOptions) =>
  useAppMutation(getCaptionPushHistory, {
    useAppMutationProps: options,
  });

        ### 📄 src/hooks/features/useAuth.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/auth`
* ww **Hooks:** `useAppMutation`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { forgotPassword, logout, register, resendVerify, resetPassword } from '@/api/auth';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';

export const useResendVerifyMutate = (options?: AppMutationOptions) =>
  useAppMutation(
    resendVerify,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useRegisterMutate = (options?: AppMutationOptions) =>
  useAppMutation(
    register,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useForgotPasswordMutate = (options?: AppMutationOptions) =>
  useAppMutation(
    forgotPassword,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useResetPasswordMutate = (options?: AppMutationOptions) =>
  useAppMutation(resetPassword, {
    useAppMutationProps: options,
  });

export const useLogout = (options?: AppMutationOptions) =>
  useAppMutation(logout, {
    useAppMutationProps: options,
  });

        ### 📄 src/hooks/features/useUsers.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/users, @/interfaces/users`
* ww **Hooks:** `useAppQuery, useAppMutation`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { changePassword, getDetailUser, getUsers, updateUserInfo } from '@/api/users';
import { GetUsersRequest } from '@/interfaces/users';

import useAppMutation from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useGetDetailUserQuery = (enabled?: boolean) =>
  useAppQuery({
    queryKey: ['userDetail'],
    queryFn: () => getDetailUser(),
    gcTime: 0,
    enabled: enabled ?? true,
  });

export const useGetUsers = (params: GetUsersRequest) =>
  useAppQuery({
    queryKey: ['users', params],
    queryFn: () => getUsers(params),
  });

export const useGetUsersForCSV = (params: GetUsersRequest) =>
  useAppQuery({
    queryKey: ['usersCSV', params],
    queryFn: () => getUsers(params),
    enabled: !!params.pageSize,
  });

export const useChangePassword = () => {
  return useAppMutation(changePassword, undefined, {
    toast: false,
  });
};

export const useUpdateUserInfo = () => {
  return useAppMutation(updateUserInfo, undefined, {
    toast: false,
  });
};

        ### 📄 src/hooks/features/useTagManagement.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/tag, @/interfaces/tags`
* ww **Hooks:** `useAppQuery`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { getTag } from '@/api/tag';
import { GetTagRequest } from '@/interfaces/tags';

import useAppQuery from '../useAppQuery';

export const useGetTag = (params: GetTagRequest) =>
  useAppQuery({
    queryKey: ['tag', params],
    queryFn: () => getTag(params),
  });

        ### 📄 src/hooks/features/useLabelManagement.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/labelManagement, @/interfaces/labelManagement`
* ww **Hooks:** `useAppQuery`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { getLabel } from '@/api/labelManagement';
import { GetLabelRequest } from '@/interfaces/labelManagement';

import useAppQuery from '../useAppQuery';

export const useGetLabel = (params?: GetLabelRequest) =>
  useAppQuery({
    queryKey: ['label', params],
    queryFn: () => getLabel(),
  });

        ### 📄 src/api/cloud-software/caption/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/request, @/interfaces/cloud-software`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { request } from '@/api/request';
import {
  ICaptionByVideo,
  ICaptionDetail,
  IGetCaptionByVideoRequest,
  IGetCaptionPushHistoryRequest,
  IGetCaptionPushHistoryResponse,
  IGetDetailCaptionRequest,
  IPublishCaptionRequest,
  ITranslateCaptionRequest,
} from '@/interfaces/cloud-software';

export const getCaptionByVideo = (params: IGetCaptionByVideoRequest) =>
  request.get<IGetCaptionByVideoRequest, { data: ICaptionByVideo[] }>(
    '/youtube/captions-by-video',
    params
  );

export const getCaptionDetail = (params: IGetDetailCaptionRequest) =>
  request.get<IGetCaptionByVideoRequest, { data: ICaptionDetail[] }>(
    '/youtube/detail-caption',
    params
  );

export const translateCaption = (body: ITranslateCaptionRequest) =>
  request.post<ITranslateCaptionRequest, { data: { lang: string; content: ICaptionDetail[] }[] }>(
    '/translate/translate-text-caption',
    body
  );

export const publishCaption = (body: IPublishCaptionRequest) =>
  request.post<IPublishCaptionRequest, { data: any }>('/youtube/translation-caption', body);

export const getCaptionPushHistory = (params: IGetCaptionPushHistoryRequest) =>
  request.get<IGetCaptionPushHistoryRequest, { data: IGetCaptionPushHistoryResponse }>(
    '/youtube/caption-push-history',
    params
  );

        ### 📄 src/api/cloud-software/translate/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/request, @/interfaces/cloud-software`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { request } from '@/api/request';
import {
  IListLanguage,
  IListLanguageRequest,
  IListYoutubeLanguageResponse,
  ITranslateVideo,
  ItranslateTextRequest,
} from '@/interfaces/cloud-software';

export const getListLanguage = (params: IListLanguageRequest) =>
  request.get<IListLanguageRequest, { data: IListLanguage[] }>('/translate/list-language', params);

export const translateText = (body: ItranslateTextRequest) =>
  request.post<ItranslateTextRequest, { data: ITranslateVideo[] }>(
    '/translate/translate-text',
    body
  );

export const getListYoutubeLanguage = (params: IListLanguageRequest) =>
  request.get<IListLanguageRequest, { data: IListYoutubeLanguageResponse }>(
    '/youtube/languages-youtube',
    params
  );

        ### 📄 src/api/cloud-software/youtube-accounts/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/request, @/interfaces, @/interfaces/cloud-software`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { request } from '@/api/request';
import { ResponseData } from '@/interfaces';
import {
  IConnectYoutube,
  IConnectYoutubeCallback,
  IConnectYoutubeVideos,
  IDetailVideoYoutube,
  IListVideoByAccount,
  IListYoutubeAccount,
  IRefreshTotalVideo,
  IRefreshVideo,
  ITotalVideoInfo,
  ITransVideoResponse,
  ITransVideoYoutube,
  IVideoHistoryResponse,
  IYoutubeDetailVideo,
} from '@/interfaces/cloud-software';

export const connectYoutube = () => request.get<null, ResponseData<any>>('/youtube/connect');

export const getListYoutube = (params: IConnectYoutube) =>
  request.get<IConnectYoutube, ResponseData<{ entities: IListYoutubeAccount[] }>>(
    '/youtube/list',
    params
  );

export const refreshTotalVideosYoutube = (params: IRefreshTotalVideo) =>
  request.get<IRefreshTotalVideo, ResponseData<any>>(`/youtube/refresh-total-video/${params.id}`);

export const deleteYoutube = (body: IConnectYoutube) =>
  request.delete<IConnectYoutube, ResponseData<any>>(`/youtube/${body.id}`);

export const callbackYoutube = (params: IConnectYoutubeCallback) =>
  request.get<IConnectYoutubeCallback, ResponseData<any>>('/youtube/callback', params);

export const videosYoutube = (params: IConnectYoutubeVideos) =>
  request.get<IConnectYoutubeVideos, { data: IListVideoByAccount }>('/youtube/videos', params);

export const detailVideosYoutube = (params: IYoutubeDetailVideo) =>
  request.get<IYoutubeDetailVideo, { data: IDetailVideoYoutube }>('/youtube/detail-video', params);

export const publishVideoYoutube = (body: ITransVideoYoutube) =>
  request.post<ITransVideoYoutube, { data: ITransVideoResponse }>(
    '/youtube/translation-video',
    body
  );

export const refreshVideosYoutube = (body: IRefreshVideo) =>
  request.post<IRefreshVideo, ResponseData<any>>('/youtube/refresh-video', body);

export const getVideoHistory = (params: IYoutubeDetailVideo) =>
  request.get<IYoutubeDetailVideo, { data: IVideoHistoryResponse }>(
    '/youtube/video-push-history',
    params
  );

export const getTotalVideoInfo = () =>
  request.get<null, { data: ITotalVideoInfo }>('/youtube/total-translation-of-video');

        ### 📄 src/api/auth/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/request, @/interfaces`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { request } from '@/api/request';
import {
  ForgotPassword,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPassword,
  ResponseData,
  VerifyForgotPasswordSms,
  VerifyUser,
} from '@/interfaces';

export const login = (body: LoginRequest) =>
  request.post<LoginRequest, ResponseData<LoginResponse>>('/auth/sign-in', body);

export const resendVerify = (body: VerifyUser) =>
  request.post<VerifyUser, ResponseData<{ success: boolean }>>('/auth/resend-email-verify', body);

export const register = (body: RegisterRequest) =>
  request.post<RegisterRequest, ResponseData<RegisterResponse>>('/auth/sign-up', body);

export const forgotPassword = (body: ForgotPassword) =>
  request.post<ForgotPassword, ResponseData<{ success: boolean }>>('/auth/forgot-password', body);

export const verifyForgotPasswordSms = (params: VerifyForgotPasswordSms) =>
  request.get<VerifyForgotPasswordSms, ResponseData<{ success: boolean }>>(
    '/auth/verify-forgot-password-sms',
    params
  );

export const resetPassword = (body: ResetPassword) =>
  request.post<ResetPassword, ResponseData<{ success: boolean }>>('/auth/reset-password', body);

export const logout = (id: number) =>
  request.delete<null, ResponseData<{ success: boolean }>>(`/auth/sign-out/${id}`);

        ### 📄 src/api/labelManagement/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/request, @/interfaces`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { request } from '@/api/request';
import { GetLabelRequest, GetLabelResponse, ResponseData } from '@/interfaces';

export const getLabel = (params?: GetLabelRequest) =>
  request.get<GetLabelRequest, ResponseData<GetLabelResponse>>('/admin/label', params);

        ### 📄 src/api/users/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/request, @/interfaces`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { request } from '@/api/request';
import {
  GetUsersRequest,
  GetUsersResponse,
  IChangePassword,
  IUserInfoUpdate,
  ResponseData,
  UserDetailResponse,
} from '@/interfaces';

export const getUsers = (params: GetUsersRequest) =>
  request.get<GetUsersRequest, ResponseData<GetUsersResponse>>('/admin/users', params);

export const getDetailUser = () => request.get<null, { data: UserDetailResponse }>('/user/detail');

export const changePassword = (payload: IChangePassword) =>
  request.put<IChangePassword, { data: UserDetailResponse }>('/user/change-password', payload);

export const updateUserInfo = (payload: IUserInfoUpdate) =>
  request.put<IUserInfoUpdate, { data: UserDetailResponse }>('/user/update', payload);

        ### 📄 src/api/request/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/utils/cookie, antd, next-i18next, next/router`
* wb **Type/Intf:** `FailedRequest`

        ```ts
        import { RESPONSE_CODE, ROUTER_PATH } from '@/constants';
import cookies from '@/utils/cookie';
import { notification } from 'antd';
import Axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { i18n } from 'next-i18next';
import Router from 'next/router';

export interface FailedRequest {
  resolve: (value: AxiosResponse<any, any> | PromiseLike<AxiosResponse<any, any>>) => void;
  reject: (reason?: AxiosError) => void;
  config: AxiosRequestConfig & { _retry?: boolean };
}

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    // config header
  },
});

let isRefreshing = false;
let failedRequestsQueue: Array<FailedRequest> = [];

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = cookies.get('access_token');
    if (config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    if (!error.response) {
      notification.error({ message: i18n?.t('message.networkError', { ns: 'common' }) });
      return Promise.reject(new Error(i18n?.t('message.networkError', { ns: 'common' })));
    }
    const originalRequest = error.config as InternalAxiosRequestConfig<any> & { _retry?: boolean };
    if (error.response?.status === RESPONSE_CODE.UNAUTHORIZED && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const response = await request.post<
            { refreshToken: string },
            { data: { access_token: string } }
          >('/auth/refresh-token-jwt', {
            refreshToken: `${cookies.get('refresh_token')}`,
          });

          const newAccessToken = response.data.access_token;
          cookies.set('access_token', newAccessToken);

          failedRequestsQueue.forEach((queuedRequest) => {
            if (queuedRequest.config.headers) {
              queuedRequest.config.headers.Authorization = `Bearer ${newAccessToken}`;
              axiosInstance(queuedRequest.config)
                .then((res) => queuedRequest.resolve(res))
                .catch((err) => queuedRequest.reject(err));
            }
          });

          failedRequestsQueue = [];
        } catch (error) {
          Router.pathname !== ROUTER_PATH.DASHBOARD && Router.push(ROUTER_PATH.LOGIN);
        } finally {
          isRefreshing = false;
        }

        originalRequest._retry = true;
        return axiosInstance(originalRequest);
      } else {
        return new Promise<AxiosResponse>((resolve, reject) => {
          cookies.remove('access_token');
          cookies.remove('refresh_token');
          Router.pathname !== ROUTER_PATH.DASHBOARD && Router.push(ROUTER_PATH.LOGIN);
          failedRequestsQueue.push({ resolve, reject, config: originalRequest });
        });
      }
    }
    if (error.response?.status === RESPONSE_CODE.SERVER_ERROR) {
      return Promise.reject(error.response);
    }
    return Promise.reject(error.response);
  }
);

export const request = {
  get<ReqType, ResType>(url: string, params?: ReqType): Promise<ResType> {
    return axiosInstance.get(url, { params });
  },
  post<ReqType, ResType>(
    url: string,
    data?: ReqType,
    config?: AxiosRequestConfig<ReqType>
  ): Promise<ResType> {
    return axiosInstance.post(url, data, config);
  },
  put<ReqType, ResType>(url: string, data?: ReqType): Promise<ResType> {
    return axiosInstance.put(url, data);
  },
  patch<ReqType, ResType>(url: string, data?: ReqType): Promise<ResType> {
    return axiosInstance.patch(url, data);
  },
  delete<ReqType, ResType>(url: string, data?: ReqType): Promise<ResType> {
    return axiosInstance.delete(url, { data });
  },
};

        ### 📄 src/api/supcription-plan/index.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/api/request, @/interfaces, @/interfaces/plan-overview`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { request } from '@/api/request';
import { PaginationParams, ResponseData } from '@/interfaces';
import {
  MembershipPlanPayLoad,
  PaymentCapture,
  PaymentInfo,
  PaymentOrder,
} from '@/interfaces/plan-overview';

export const getPaymentHistory = (params: PaginationParams) =>
  request.get<PaginationParams, ResponseData<{ payments: PaymentInfo[] }>>('/user', params);

export const paymentOrder = (payload: PaymentOrder) =>
  request.post<PaymentOrder, ResponseData<any>>('/user/payment-order-paypal', payload);

export const paymentCapture = (payload: PaymentCapture) =>
  request.post<PaymentCapture, ResponseData<any>>('/user/payment-capture-paypal', payload);

export const updatePlan = (payload: MembershipPlanPayLoad) =>
  request.post(`/user/payment/membership`, payload);

export const getOrderDetail = (id: string) =>
  request.get<string, ResponseData<any>>(`/user/detail-order/${id}`);

        ### 📄 src/api/tag/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/api/request, @/interfaces`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        import { request } from '@/api/request';
import { GetTagRequest, GetTagResponse, ResponseData } from '@/interfaces';

export const getTag = (params: GetTagRequest) =>
  request.get<GetTagRequest, ResponseData<GetTagResponse>>('/admin/tag', params);

        ### 📄 src/controllers/notification.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/assets/images/svg/icon-check-circle.svg, @/assets/images/svg/icon-error.svg, @/assets/images/svg/icon-info.svg, @/assets/images/svg/icon-triangle-warning.svg, @/constants`...

        ```typescript
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

        ### 📄 src/controllers/modal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @ant-design/icons, antd/es/modal/confirm, react, styled-components`

        ```typescript
        import { FONT_SIZE, FONT_WEIGHT, HEIGHT } from '@/constants';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import React from 'react';
import styled from 'styled-components';

const ModalStyles = styled.div`
  .ant-modal-confirm-success &,
  .ant-modal-confirm-info &,
  .ant-modal-confirm-warning &,
  .ant-modal-confirm-error & {
    .ant-modal-content {
      background-color: var(--background-color);

      .ant-modal-confirm-title {
        color: var(--heading-color);
        font-size: ${FONT_SIZE.lg};
      }

      .ant-modal-confirm-content {
        color: var(--text-main-color);
        font-size: ${FONT_SIZE.md};
      }

      .ant-modal-confirm-btns {
        .ant-btn.ant-btn-primary {
          font-size: ${FONT_SIZE.md};
          font-weight: ${FONT_WEIGHT.semibold};
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          height: ${HEIGHT.md};
        }
      }
    }
  }
`;

const modalRender = (node: React.ReactNode) => <ModalStyles>{node}</ModalStyles>;

type ModalType = Pick<ModalStaticFunctions, 'info' | 'success' | 'warning' | 'error'>;

const openInfo = (modal: ModalType): ModalType['info'] => {
  return (props) => modal.info({ modalRender, icon: <InfoCircleOutlined />, ...props });
};

const openSuccess = (modal: ModalType): ModalType['success'] => {
  return (props) => modal.success({ modalRender, icon: <CheckCircleOutlined />, ...props });
};

const openWarning = (modal: ModalType): ModalType['warning'] => {
  return (props) => modal.warning({ modalRender, icon: <ExclamationCircleOutlined />, ...props });
};

const openError = (modal: ModalType): ModalType['error'] => {
  return (props) => modal.error({ modalRender, icon: <CloseCircleOutlined />, ...props });
};

export const modalController = (modal: ModalType): ModalType => ({
  info: openInfo(modal),
  success: openSuccess(modal),
  warning: openWarning(modal),
  error: openError(modal),
});

        ### 📄 src/pages/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/dashboard, @/constants, next, next-i18next/serverSideTranslations`

        ```typescript
        import DashBoard from '@/components/dashboard';
import { DEFAULT_LOCALE } from '@/constants';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DashBoardPage = () => {
  return <DashBoard />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'dashboard'])),
    },
  };
};

export default DashBoardPage;

        ### 📄 src/pages/_document.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@ant-design/cssinjs`

        ```typescript
        import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+JP:wght@100..900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  // 1.1 extract style which had been used
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {/* 1.2 inject css */}
        <style dangerouslySetInnerHTML={{ __html: style }}></style>
      </>
    ),
  };
};

export default MyDocument;

        ### 📄 src/pages/_app.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/error-boundary, @/stores/store, @/styles/theme-config, @/styles/theme-global, @/types/page`...

        ```typescript
        import ErrorBoundary from '@/components/common/error-boundary';
import { store } from '@/stores/store';
import { getThemeConfig } from '@/styles/theme-config';
import GlobalStyle from '@/styles/theme-global';
import { Page } from '@/types/page';
import { QueryClientProvider, queryClient } from '@/utils/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, App as FeedbackProvider } from 'antd';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import NextNProgress from 'nextjs-progressbar';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import 'typeface-montserrat';

import RootLayout from '../layouts';

type Props = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: Props) {
  const Layout =
    (Component as Page).layout ||
    (({ children }: { children: ReactNode }) => <RootLayout>{children}</RootLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NEXT_PUBLIC_NODE_ENV === 'development' && <ReactQueryDevtools />}
      <Provider store={store}>
        <GlobalStyle />
        <ConfigProvider theme={getThemeConfig('light')}>
          <FeedbackProvider>
            <Layout>
              <ErrorBoundary>
                <NextNProgress />
                <Component {...pageProps} />
              </ErrorBoundary>
            </Layout>
          </FeedbackProvider>
        </ConfigProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(
  dynamic(() => Promise.resolve(App), {
    ssr: false,
  })
);

        ### 📄 src/pages/cloud-software/youtube-accounts/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/cloud-software/youtube-account, @/components/common/container-wrapper, @/constants, @/layouts/admin-layout, next`...

        ```typescript
        import YoutubeAccountComponent from '@/components/cloud-software/youtube-account';
import ContainerWrapper from '@/components/common/container-wrapper';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const YoutubeAccount = () => {
  return (
    <ContainerWrapper>
      <YoutubeAccountComponent />
    </ContainerWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'cloud-software'])),
  },
});

YoutubeAccount.layout = AdminLayout;

export default YoutubeAccount;

        ### 📄 src/pages/cloud-software/translator/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/cloud-software/translator, @/components/modals/modal-route-change, @/constants, @/layouts/admin-layout, next`...

        ```typescript
        import TranslatorComponent from '@/components/cloud-software/translator';
import RouteChangeWrapper from '@/components/modals/modal-route-change';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Translation = () => {
  return (
    <RouteChangeWrapper>
      <TranslatorComponent />
    </RouteChangeWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'cloud-software'])),
  },
});

Translation.layout = AdminLayout;

export default Translation;

        ### 📄 src/pages/cloud-software/captionizer/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/cloud-software/captionizer, @/components/modals/modal-route-change, @/constants, @/layouts/admin-layout, next`...

        ```typescript
        import CaptionComponent from '@/components/cloud-software/captionizer';
import RouteChangeWrapper from '@/components/modals/modal-route-change';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Captionizer = () => {
  return (
    <RouteChangeWrapper>
      <CaptionComponent />
    </RouteChangeWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'cloud-software'])),
  },
});

Captionizer.layout = AdminLayout;

export default Captionizer;

        ### 📄 src/pages/auth/verify-password/error/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/auth/verify-error, @/constants, @/layouts/auth-layout, next, next-i18next`...
* ww **Hooks:** `useTranslation`

        ```typescript
        import VerifyError from '@/components/auth/verify-error';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const VerifyPasswordError = () => {
  const { t } = useTranslation(['auth', 'common']);

  return (
    <VerifyError title={t('newPass.linkExpired')} description={t('newPass.linkExpiredDesc')} />
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

VerifyPasswordError.layout = AuthLayout;
export default VerifyPasswordError;

        ### 📄 src/pages/auth/verify-account/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/auth/verify-account, @/constants, @/layouts/auth-layout, next, next-i18next/serverSideTranslations`...

        ```typescript
        import VerifyRegister from '@/components/auth/verify-account';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const VerifyAccount = () => {
  return <VerifyRegister />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

VerifyAccount.layout = AuthLayout;
export default VerifyAccount;

        ### 📄 src/pages/auth/signup/error/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/auth/verify-error, @/constants, @/layouts/auth-layout, next, next-i18next`...
* ww **Hooks:** `useTranslation`

        ```typescript
        import VerifyError from '@/components/auth/verify-error';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const VerifyAccountError = () => {
  const { t } = useTranslation(['auth', 'common']);

  return <VerifyError title={t('verify.linkExpired')} description={t('verify.linkExpiredDesc')} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

VerifyAccountError.layout = AuthLayout;
export default VerifyAccountError;

        ### 📄 src/pages/auth/register/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/auth/register-form, @/constants, @/layouts/auth-layout, next, next-i18next/serverSideTranslations`...

        ```typescript
        import { RegisterForm } from '@/components/auth/register-form';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Register = () => {
  return <RegisterForm />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

Register.layout = AuthLayout;
export default Register;

        ### 📄 src/pages/auth/new-password/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/auth/new-password-form, @/constants, @/layouts/auth-layout, next, next-i18next/serverSideTranslations`...

        ```typescript
        import { NewPasswordForm } from '@/components/auth/new-password-form';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const NewPassword = () => {
  return <NewPasswordForm />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'auth'])),
    },
  };
};
NewPassword.layout = AuthLayout;
export default NewPassword;

        ### 📄 src/pages/auth/forgot-password/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/auth/forgot-password-form, @/constants, @/layouts/auth-layout, next, next-i18next/serverSideTranslations`...

        ```typescript
        import { ForgotPasswordForm } from '@/components/auth/forgot-password-form';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const ForgotPassword = () => {
  return <ForgotPasswordForm />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'auth'])),
    },
  };
};
ForgotPassword.layout = AuthLayout;
export default ForgotPassword;

        ### 📄 src/pages/auth/login/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/auth/login-form, @/constants, @/layouts/auth-layout, next, next-i18next/serverSideTranslations`...

        ```typescript
        import { LoginForm } from '@/components/auth/login-form';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Login = () => {
  return <LoginForm />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'auth'])),
    },
  };
};
Login.layout = AuthLayout;
export default Login;

        ### 📄 src/pages/youtube/callback/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, @/layouts/auth-layout, next, next-i18next/serverSideTranslations, react`
* ww **Hooks:** `useEffect`

        ```typescript
        import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

// import { useEffect } from 'react';

const YoutubeCallback = () => {
  // useEffect(() => {
  //   const handleMessage = (event: any) => {
  //     if (event.origin !== window.location.origin) {
  //       return;
  //     }

  //     window.close();
  //   };

  // window.addEventListener('message', handleMessage);

  //   return () => {
  //     window.removeEventListener('message', handleMessage);
  //   };
  // });

  useEffect(() => {
    window.open('', '_self')?.close();
  }, []);

  return null;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'auth'])),
    },
  };
};

YoutubeCallback.layout = AuthLayout;
export default YoutubeCallback;

        ### 📄 src/pages/youtube/callback/index.utils.ts
        > **Context Summary**
        * 🧩 **Component (Default):** `useYoutubeAccount`
* ww **Hooks:** `useCallbackYoutube, useYoutubeAccount`

        ```ts
        // interface IYoutubeAccount {
//   dataCallback: ResponseData<any> | undefined;
// }
export default function useYoutubeAccount(): any {
  // const { data: dataCallback } = useCallbackYoutube();
  // return { dataCallback };
}

        ### 📄 src/pages/my-profile/payment-history/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/container-wrapper, @/components/my-profile/payments, @/constants, @/layouts/admin-layout, next`...

        ```typescript
        import ContainerWrapper from '@/components/common/container-wrapper';
import Payment from '@/components/my-profile/payments';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const PaymentPage = () => {
  return (
    <ContainerWrapper>
      <Payment />
    </ContainerWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
      'common',
      'my-profile',
      'cloud-software',
    ])),
  },
});

PaymentPage.layout = AdminLayout;

export default PaymentPage;

        ### 📄 src/pages/my-profile/personal-info/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/container-wrapper, @/components/my-profile/pesonal-info, @/constants, @/layouts/admin-layout, next`...

        ```typescript
        import ContainerWrapper from '@/components/common/container-wrapper';
import PersonalInfo from '@/components/my-profile/pesonal-info';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PersonalInfoPage = () => {
  return (
    <ContainerWrapper>
      <PersonalInfo />
    </ContainerWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
      'common',
      'my-profile',
      'cloud-software',
    ])),
  },
});

PersonalInfoPage.layout = AdminLayout;

export default PersonalInfoPage;

        ### 📄 src/pages/my-profile/security-settings/index.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/common/container-wrapper, @/components/my-profile/security-settings, @/constants, @/layouts/admin-layout, next`...

        ```typescript
        import ContainerWrapper from '@/components/common/container-wrapper';
import SecuritySetting from '@/components/my-profile/security-settings';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const SecuritySettingPage = () => {
  return (
    <ContainerWrapper>
      <SecuritySetting />
    </ContainerWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
      'common',
      'my-profile',
      'cloud-software',
    ])),
  },
});

SecuritySettingPage.layout = AdminLayout;

export default SecuritySettingPage;

        ### 📄 src/interfaces/common.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/constants, axios, react`
* wb **Type/Intf:** `PaginationParams`
* wb **Type/Intf:** `MetaData`
* wb **Type/Intf:** `ResponseData`
* wb **Type/Intf:** `ValidationError`
* wb **Type/Intf:** `ServerError`
* wb **Type/Intf:** `ApiError`
* wb **Type/Intf:** `WithChildrenProps`
* wb **Type/Intf:** `Pagination`
* wb **Type/Intf:** `LEVELTYPE`
* wb **Type/Intf:** `IPaginationParams`
* wb **Type/Intf:** `IDataPagination`
* wb **Type/Intf:** `Price`

        ```ts
        import { SORT_TYPE } from '@/constants';
import { AxiosResponse } from 'axios';
import { ReactNode } from 'react';

export enum RESPONSE_CODE {
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  PERMISSION = 403,
  SERVER_ERROR = 500,
  VALIDATION_ERROR = 422,
}

export type PaginationParams = {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortBy?: keyof typeof SORT_TYPE | null;
};

export type MetaData = {
  data?: {
    pagination?: {
      total?: number;
      last_page?: number;
      per_page?: number;
      current_page?: number;
      total_pages?: number;
    };
  };
};

export type ResponseData<T> = MetaData & {
  data: T;
  success: boolean;
  message?: string;
};

export type ValidationError = {
  detail: {
    [key: string]: {
      field: string;
      error: string;
      message: string;
      statusCode: number;
      success: boolean;
    };
  };
};

export type ServerError = {
  error: string;
  message: string;
  statusCode: number;
  success: boolean;
};

export type ApiError = AxiosResponse<ServerError | ValidationError>;

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export enum LEVEL_USER {
  DEFAULT = 'DEFAULT',
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
}

export type LEVELTYPE = keyof typeof LEVEL_USER;

export enum LEVEL_USER_LIMIT_CONNECT {
  DEFAULT = 0,
  BRONZE = 1,
  SILVER = 5,
  GOLD = 'unlimited',
}

export enum LEVEL_USER_LIMIT_LANGUAGE {
  DEFAULT = 0,
  BRONZE = 12,
  SILVER = 40,
  GOLD = 'unlimited',
}

export interface IPaginationParams {
  page: number;
  pageSize: number;
}

export interface IDataPagination {
  total: number;
  current_page: number;
  per_page: number;
  last_page: number;
}

export enum TYPE_PURCHARE_PLAN {
  NEW_PURCHASE = 'new-purchase',
  UPGRADE = 'upgrade',
  DOWNGRADE = 'downgrade',
}

export interface Price {
  [key: string]: {
    [key: string]: number;
  };
}

        ### 📄 src/interfaces/plan-overview.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces`
* wb **Type/Intf:** `InfoPlan`
* wb **Type/Intf:** `MembershipPlanPayLoad`
* wb **Type/Intf:** `PaymentInfo`
* wb **Type/Intf:** `PaymentOrder`
* wb **Type/Intf:** `PaymentCapture`

        ```ts
        import { LEVEL_USER } from '@/interfaces';

export interface InfoPlan {
  level: keyof typeof LEVEL_USER;
  title: string;
  description: string;
  currentPriceYear: number;
  currentPriceMonth: number;
  salePriceYear: number;
  salePriceMonth: number;
  mostPopular?: boolean;
  currentPlan?: {
    validUntil: string;
    isCanceled: boolean;
  };
  info: string[];
}

export interface MembershipPlanPayLoad {
  keep_yt_account_id: number[];
  new_rank?: string;
  current_rank: string;
}

export interface PaymentInfo {
  id: number;
  user_id: string;
  rank: string;
  payment_status?: string;
  status: string;
  tax: number;
  sub_total: number;
  total: number;
  expire_date?: string;
  payment_date?: string;
  start_date?: string;
}

export interface PaymentOrder {
  rank: string;
  tax: number;
  sub_total: number;
  total: number;
}

export interface PaymentCapture extends PaymentOrder {
  order_id: string;
}

        ### 📄 src/interfaces/labelManagement.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces`
* wb **Type/Intf:** `GetLabelRequest`
* wb **Type/Intf:** `IParamsLabel`
* wb **Type/Intf:** `ILabel`
* wb **Type/Intf:** `GetLabelResponse`

        ```ts
        import { PaginationParams } from '@/interfaces';

export interface GetLabelRequest extends PaginationParams {
  search?: string;
}

export interface IParamsLabel extends GetLabelRequest {}

export interface ILabel {
  name: string;
  id: string;
  productCount: string;
}

export interface GetLabelResponse {
  data: ILabel[];
}

        ### 📄 src/interfaces/users.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces`
* wb **Type/Intf:** `GetUsersRequest`
* wb **Type/Intf:** `IParams`
* wb **Type/Intf:** `IUser`
* wb **Type/Intf:** `GetUsersResponse`
* wb **Type/Intf:** `IChangePassword`
* wb **Type/Intf:** `IUserInfoUpdate`

        ```ts
        import { PaginationParams } from '@/interfaces';

export interface GetUsersRequest extends PaginationParams {
  search?: string;
  filterUser?: string;
}

export interface IParams extends GetUsersRequest {}

export interface IUser {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  id: string;
  accountId: string;
  email?: string;
  username?: string;
  fullName: string;
  kanaJapanese?: string;
  companyName: string;
  description: string;
  gender: string;
  nationality: string;
  ageRange: string;
  birth: string;
  avatarUrl: string;
  address: string;
  language: string;
  receive_mail: string;
  collection_address: string[];
}

export interface GetUsersResponse {
  users: IUser[];
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
}

export interface IUserInfoUpdate {
  first_name: string;
  last_name: string;
  phone: string;
  phone_code: string;
}

        ### 📄 src/interfaces/cloud-software.ts
        > **Context Summary**
        * wb **Type/Intf:** `IConnectYoutube`
* wb **Type/Intf:** `IRefreshTotalVideo`
* wb **Type/Intf:** `IDisconnectYoutube`
* wb **Type/Intf:** `IListYoutubeAccount`
* wb **Type/Intf:** `IConnectYoutubeCallback`
* wb **Type/Intf:** `IConnectYoutubeVideos`
* wb **Type/Intf:** `IYoutubeDetailVideo`
* wb **Type/Intf:** `ILocalizations`
* wb **Type/Intf:** `ISnippetVideo`
* wb **Type/Intf:** `ITransVideoYoutube`
* wb **Type/Intf:** `ITransVideoResponse`
* wb **Type/Intf:** `IListLanguageRequest`
* wb **Type/Intf:** `IListYoutubeLanguageResponse`
* wb **Type/Intf:** `IListLanguage`
* wb **Type/Intf:** `ITranslateVideo`
* wb **Type/Intf:** `ItranslateTextRequest`
* wb **Type/Intf:** `IRefreshVideo`
* wb **Type/Intf:** `IVideoHistoryResponse`
* wb **Type/Intf:** `IThumbnail`
* wb **Type/Intf:** `IVideoYoutube`
* wb **Type/Intf:** `IListVideoByAccount`
* wb **Type/Intf:** `IDetailVideoYoutube`
* wb **Type/Intf:** `IGetCaptionByVideoRequest`
* wb **Type/Intf:** `IGetDetailCaptionRequest`
* wb **Type/Intf:** `ICaptionByVideo`
* wb **Type/Intf:** `ICaptionDetail`
* wb **Type/Intf:** `IPublishCaptionRequest`
* wb **Type/Intf:** `ITranslateCaptionRequest`
* wb **Type/Intf:** `ITranslateCaptionResponse`
* wb **Type/Intf:** `IGetCaptionPushHistoryRequest`
* wb **Type/Intf:** `IGetCaptionPushHistoryResponse`
* wb **Type/Intf:** `ITotalVideoInfo`

        ```ts
        // ----- START: CONNECT ------

export interface IConnectYoutube {
  id?: any;
}

export interface IRefreshTotalVideo {
  id: string | number;
}

export interface IDisconnectYoutube {
  id: string | number;
}

export interface IListYoutubeAccount {
  id: string;
  email: string;
  name_channel: string;
  picture: string;
  total_video: number;
  user_id: string;
}

export interface IConnectYoutubeCallback {
  state?: string;
  code?: string;
  scope?: string;
  authuser?: string;
  hd?: string;
  prompt?: string;
  enabled?: boolean;
}

export interface IConnectYoutubeVideos {
  text?: string;
  youtube_account_id: number;
  page_token?: string;
  limit?: string;
}

export interface IYoutubeDetailVideo {
  video_id: string;
  youtube_account_id: number;
}

export interface ILocalizations {
  lang: string;
  title: string;
  description: string;
}

export interface ISnippetVideo {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
  title: string;
  description: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  publishedAt: string;
  thumbnails: IThumbnail;
}

export interface ITransVideoYoutube {
  video_id: string;
  localizations: string;
  youtube_account_id: number;
  default_lang: string;
  category_id: string;
}

export interface ITransVideoResponse {
  etag: string;
  id: string;
  kind: string;
  localizations: {
    [key: string]: { title: string; description: string };
  };
  snippet: ISnippetVideo;
}

// ----- END: CONNECT ------

export interface IListLanguageRequest {
  youtube_account_id: number;
}

export interface IListYoutubeLanguageResponse {
  kind: string;
  etag: string;
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      hl: string;
      name: string;
    };
  }[];
}

export interface IListLanguage {
  code: string;
  name: string;
}

export interface ITranslateVideo {
  title: string;
  description: string;
  language: string;
}

export interface ItranslateTextRequest {
  title: string;
  description: string;
  languages: string[];
  exclude_titles: string[];
  exclude_descriptions: string[];
}

export interface IRefreshVideo {
  youtube_account_id: number;
}

export interface IVideoHistoryResponse {
  id: number;
  user_id: number;
  video_id: string;
  youtube_account_id: number;
  localizations: string;
  default_lang: string;
  category_id: string;
  exclude_title: string;
  exclude_description: string;
}

export interface IThumbnail {
  default: {
    width: number;
    height: number;
    url: string;
  };
}
export interface IVideoYoutube {
  kind: string;
  etag: string;
  id: { kind: string; videoId: string };
  is_push: boolean;
  is_push_caption: boolean;
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    liveBroadcastContent: string;
    publishTime?: string;
    publishedAt: string;
    thumbnails: IThumbnail;
  };
}

export interface IListVideoByAccount {
  etag: string;
  items: IVideoYoutube[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}

export interface IDetailVideoYoutube {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippetVideo;
}

export interface IGetCaptionByVideoRequest {
  youtube_account_id: number | string;
  video_id: string;
}

export interface IGetDetailCaptionRequest {
  youtube_account_id: number | string;
  video_id: string;
  default_lang: string;
  original_lang: string;
}

export interface ICaptionByVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    videoId: string;
    lastUpdated: string;
    trackKind: string;
    language: 'en' | string;
    name: string;
    audioTrackType: string;
    isCC: boolean;
    isLarge: boolean;
    isEasyReader: boolean;
    isDraft: boolean;
    isAutoSynced: boolean;
    status: boolean;
  };
}

export interface ICaptionDetail {
  begin: string;
  end: string;
  text: string;
}

export interface IPublishCaptionRequest {
  youtube_account_id: number | string;
  video_id: string;
  content: string;
  lang: string;
  exclude_text: string;
  is_default_lang: boolean;
}

export interface ITranslateCaptionRequest {
  captions: ICaptionDetail[];
  languages: string[];
  exclude_captions: string[];
}

export interface ITranslateCaptionResponse {
  content: ICaptionDetail[];
  lang: string;
}

export interface IGetCaptionPushHistoryRequest {
  youtube_account_id: string | number;
  video_id: string;
}

export interface IGetCaptionPushHistoryResponse {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  id: number;
  user_id: number;
  video_id: string;
  youtube_account_id: number;
  content: string;
  default_lang: string;
  exclude_text: string | null;
}

export interface ITotalVideoInfo {
  total_translated_Caption: number;
  total_translated_video: number;
  total_video: number;
  total_account_youtube: number;
}

        ### 📄 src/interfaces/index.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        export * from './common';
export * from './theme';
export * from './auth';
export * from './users';
export * from './tags';
export * from './labelManagement';

        ### 📄 src/interfaces/theme.ts
        > **Context Summary**
        * 🔗 **Imports:** `typescript`
* wb **Type/Intf:** `ITheme`
* wb **Type/Intf:** `Dimension`
* wb **Type/Intf:** `ChartData`
* wb **Type/Intf:** `xData`
* wb **Type/Intf:** `LanguageType`
* wb **Type/Intf:** `ThemeType`
* wb **Type/Intf:** `ChartSeries`
* wb **Type/Intf:** `ChartSeriesData`
* wb **Type/Intf:** `Severity`
* wb **Type/Intf:** `TwoFactorAuthOption`
* wb **Type/Intf:** `ActivityStatusType`
* wb **Type/Intf:** `PaymentCard`

        ```ts
        import { NumericLiteral } from 'typescript';

export interface ITheme {
  primary: string;
  primary1: string;
  primaryGradient: string;
  light: string;
  secondary: string;
  error: string;
  warning: string;
  success: string;
  background: string;
  secondaryBackground: string;
  secondaryBackgroundSelected: string;
  spinnerBase: string;
  siderBackground: string;
  collapseBackground: string;
  scroll: string;
  border: string;
  borderNft: string;
  textMain: string;
  textLight: string;
  textSuperLight: string;
  textSecondary: string;
  textDark: string;
  textNftLight: string;
  textSiderPrimary: string;
  textSiderSecondary: string;
  subText: string;
  shadow: string;
  boxShadow: string;
  boxShadowHover: string;
  boxShadowNft: string;
  boxShadowNftSecondary: string;
  dashboardMapBackground: string;
  dashboardMapCircleColor: string;
  dashboardMapControlDisabledBackground: string;
  notificationSuccess: string;
  notificationPrimary: string;
  notificationWarning: string;
  notificationError: string;
  chartTooltipLabel: string;
  chartColor1: string;
  chartColor1Tint: string;
  chartColor2: string;
  chartColor2Tint: string;
  chartColor3: string;
  chartColor3Tint: string;
  chartColor4: string;
  chartColor4Tint: string;
  chartColor5: string;
  chartColor5Tint: string;
  additionalBackground: string;
  timelineBackground: string;
  heading: string;
  borderBase: string;
  disable: string;
  disabledBg: string;
  layoutBodyBg: string;
  layoutHeaderBg: string;
  layoutSiderBg: string;
  inputPlaceholder: string;
  itemHoverBg: string;
  backgroundColorBase: string;
  avatarBg: string;
  alertTextColor: string;
  breadcrumb: string;
  icon: string;
  iconHover: string;
}

export type Dimension = number | string;

export type ChartData = number[];

export type xData = number[] | string[];

export type LanguageType = 'ko' | 'en';

export type ThemeType = 'light' | 'dark';

export interface ChartSeries {
  seriesName: string;
  value: number;
  data: {
    day: number;
    value: NumericLiteral;
  };
  name: string;
}

export type ChartSeriesData = ChartSeries[];

export type Severity = 'success' | 'error' | 'info' | 'warning';

export type TwoFactorAuthOption = 'email' | 'phone';

export type ActivityStatusType = 'sold' | 'booked' | 'added';

export enum CurrencyTypeEnum {
  USD = 'USD',
  ETH = 'ETH',
  BTC = 'BTC',
}

export interface PaymentCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  // eslint-disable-next-line
  focused: any;
  background: string;
  isEdit: boolean;
}

        ### 📄 src/interfaces/auth.ts
        > **Context Summary**
        * wb **Type/Intf:** `User`
* wb **Type/Intf:** `ChangeRankData`
* wb **Type/Intf:** `YoutubeAccount`
* wb **Type/Intf:** `UserModel`
* wb **Type/Intf:** `LoginRequest`
* wb **Type/Intf:** `LoginResponse`
* wb **Type/Intf:** `RegisterRequest`
* wb **Type/Intf:** `RegisterResponse`
* wb **Type/Intf:** `ForgotPassword`
* wb **Type/Intf:** `VerifyForgotPasswordSms`
* wb **Type/Intf:** `ResetPassword`
* wb **Type/Intf:** `VerifyUser`
* wb **Type/Intf:** `UserDetailResponse`

        ```ts
        export interface User {
  id: number;
  email: string;
  type: string;
  first_name: string;
  last_name: string;
  phone: string;
  phone_code: string;
  payments: [];
  youtubeAccounts: YoutubeAccount[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  level?: string;
  payer_id: string;
  payment_before_deadline: boolean;
  expire_date: string;
  start_date: string;
  payment_date: string;
  changeRank: ChangeRankData | null;
  renew_plan: boolean;
}

export type ChangeRankData = {
  change_rank?: string | null;
  current_rank: string;
  keep_yt_account_id: string[];
  user_id: string;
};

export type YoutubeAccount = {
  id: number;
  name_channel: string;
  name: string;
};

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
  email: {
    name: string;
    verified: boolean;
  };
  phone: {
    number: string;
    verified: boolean;
  };
  sex: 'male' | 'female';
  birthday: string;
  lang: 'en' | 'de';
  country: string;
  city: string;
  address1: string;
  address2?: string;
  zipcode: number;
  website?: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface LoginRequest {
  email_or_phone: string;
  phone_code: string;
  password: string;
}

export interface LoginResponse {
  email_or_phone: string;
  access_token: string;
  refresh_token: string;
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  phone_code: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface ForgotPassword {
  email: string;
  method: string;
}

export interface VerifyForgotPasswordSms {
  phone: string;
  phone_code: string;
}

export interface ResetPassword {
  code: string;
  password: string;
  phone: string;
  phone_code: string;
  method: string;
}

export interface VerifyUser {
  email_or_phone: string;
  phone_code: string;
}

export interface UserDetailResponse {
  id?: number;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  level?: string;
  phone_code: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  expire_date: string;
  start_date: string;
  payment_date: string;
  changeRank: ChangeRankData | null;
  renew_plan: boolean;
}

        ### 📄 src/interfaces/tags.ts
        > **Context Summary**
        * 🔗 **Imports:** `@/interfaces/common`
* wb **Type/Intf:** `ITags`
* wb **Type/Intf:** `GetTagRequest`
* wb **Type/Intf:** `GetTagResponse`

        ```ts
        import { PaginationParams } from '@/interfaces/common';

export interface ITags {
  language: string;
  name: string;
  id: number;
  productCount: string;
}

export interface GetTagRequest extends PaginationParams {
  search?: string;
}

export interface GetTagResponse {
  data: ITags[];
}
