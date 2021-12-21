import moment from 'moment-timezone';

export function initializeMoment() {
  moment.tz.setDefault('Asia/Bangkok');
  moment.locale('en');
}
