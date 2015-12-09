import { janus } from 'janus';
import adapter from 'adapter';

export default = function () {
      return adapter().then(janus);
};
