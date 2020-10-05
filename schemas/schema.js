import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import siteSettings from './siteSettings';
import richText from './richText';

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([siteSettings, richText]),
});
