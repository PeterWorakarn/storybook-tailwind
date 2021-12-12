import moment from 'moment-timezone';
import 'moment/locale/th';

export function initializeMoment() {
  moment.tz.setDefault('Asia/Bangkok');
  moment.locale('en');
}
