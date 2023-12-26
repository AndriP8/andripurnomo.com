import { Entry } from '@keystatic/core/reader';

import keystaticConfig from '../../../keystatic.config';

export type Blog = Entry<(typeof keystaticConfig)['collections']['blogs']>;
