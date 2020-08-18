import i18n from '@/plugins/i18n';

export default (number, minimumFractionDigits = 0, maximumFractionDigits = 2) => (
  number
    ? number.toLocaleString(i18n.tc('common.fullLocale'), {
      minimumFractionDigits,
      maximumFractionDigits,
    })
    : undefined
);
