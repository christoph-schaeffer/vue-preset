import i18n from '@/plugins/i18n';

export default (date) => {
  if (!date) { return undefined; }

  switch (i18n.tc('common.fullLocale')) {
    case 'de-DE':
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    case 'en-US':
    default:
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
};
